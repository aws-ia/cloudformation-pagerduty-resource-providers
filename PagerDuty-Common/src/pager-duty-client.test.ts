import {PagerDutyClient, PaginatedResponseType} from "./pager-duty-client";
import axios from "axios";
import Mock = jest.Mock;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.request.mockResolvedValue({});

type TestPaginationResults = {
    results: number[]
} & PaginatedResponseType;

describe('PagerDutyClient', () => {
    describe('doRequest', () => {
        const token = 'aabbccddee';
        const testInstance = new PagerDutyClient(token);

        it('sets the request URL based on the main URL + path', async () => {
            const path = '/foo/bar';

            await testInstance.doRequest('get', path);

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                url: `https://api.pagerduty.com${path}`
            }));
        });

        it('sets the request headers based on the token', async () => {
            const path = '/foo/bar';

            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest('get', path);

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                headers: {
                    Authorization: `Token token=${token}`,
                    'Content-type': 'application/json',
                    Accept: 'application/vnd.pagerduty+json;version=2',
                    'User-Agent': 'AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource',
                    From: ''
                }
            }));
        });

        it.each([
            {foo: 'bar'},
            'foo=bar',
            undefined,
            null
        ])('sets the request params to "%p"', async (params) => {
            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest('get', '/foo/bar', params);

            expect(mockedAxios.request).toHaveBeenCalledWith(!!params
                ? expect.objectContaining({
                    params: params
                }) : expect.not.objectContaining({
                    params: undefined
                }));
        });

        it.each([
            'get',
            'put',
            'post',
            'delete'
        ])('sets the request method to "%p"', async (method) => {
            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest(method as 'get' | 'put' | 'post' | 'delete', '/foo/bar');

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                method: method
            }));
        });
    });

    describe('paginate', () => {
        let testInstance: PagerDutyClient;

        beforeEach(() => {
            testInstance = new PagerDutyClient('aaabbbcccdddeee');
            testInstance.doRequest = jest.fn().mockResolvedValue({});
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it.each([
           1, 3, 5, 20, 100
            // 3
        ])('calls "doRequest" for each %d page(s)', async (pageCount) => {
            const limit = 3;
            const method = 'get';
            const path = '/foo/bar';
            const body = {
                foo: 'bar',
                hello: 123
            };

            for (let i = 0; i < pageCount; i++) {
                (testInstance.doRequest as Mock).mockResolvedValueOnce({
                    data: {
                        limit: limit,
                        offset: limit * i,
                        more: i !== pageCount - 1
                    }
                });
            }

            await testInstance.paginate(method, path, () => [], {limit: limit}, body);

            expect(testInstance.doRequest).toHaveBeenCalledTimes(pageCount);
            for (let i = 0; i < pageCount; i++) {
                const params = {
                    limit: limit,
                    offset: limit * i
                };
                expect(testInstance.doRequest).toHaveBeenCalledWith(method, path, params, body, undefined);
            }
        });

        it('aggregate results of each page', async () => {
            const limit = 3;
            const method = 'get';
            const path = '/foo/bar';
            const params = {
                limit: 200
            };
            const body = {
                foo: 'bar',
                hello: 123
            }
            const pageCount = 3;
            const results = [1, 2, 3];

            for (let i = 0; i < pageCount; i++) {
                (testInstance.doRequest as Mock).mockResolvedValueOnce({
                    data: {
                        limit: limit,
                        offset: limit * i,
                        more: i !== pageCount - 1,
                        results: results
                    }
                });
            }

            const allResults = await testInstance.paginate<TestPaginationResults, number>(
                method,
                path,
                (response) => response.data.results,
                params,
                body);

            expect(allResults.length).toBe(results.length * pageCount);
        });
    });
});