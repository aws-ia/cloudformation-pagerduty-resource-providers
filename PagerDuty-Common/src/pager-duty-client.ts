import axios, {AxiosResponse} from "axios";

export type ApiErrorResponse = {
    error: ApiError
}
export type ApiError = {
    code: number
    message?: string
    errors?: string[]
}
export type PaginatedResponseType = {
    offset: number
    limit: number
    more: boolean
    total: number
}

export class PagerDutyClient {
    private readonly apiToken: string;
    private readonly userAgent: string;

    constructor(apiToken: string, userAgent?: string) {
        this.apiToken = apiToken;
        this.userAgent = userAgent;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}, headers?: {[key: string]: string}): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `https://api.pagerduty.com${path}`,
            params: params,
            method: method,
            data: body,
            headers: {
                Authorization: `Token token=${this.apiToken}`,
                'Content-type': 'application/json',
                Accept: 'application/vnd.pagerduty+json;version=2',
                'User-Agent': this.userAgent || 'AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource',
                From: '',
                ...headers
            }
        });
    }

    public async paginate<ResponseType extends PaginatedResponseType, ResultType>(method: 'get' | 'put' | 'post' | 'delete', path: string, transform: (response: AxiosResponse<ResponseType>) => ResultType[], params: any = {}, body?: {}, headers?: {[key: string]: string}): Promise<ResultType[]> {
        const results: ResultType[] = [];

        let page = 1;
        let delegateParams = {
            offset: 0,
            limit: 200,
            ...params
        };

        while (delegateParams.offset >= 0) {
            const response = await this.doRequest<ResponseType>(method, path, delegateParams, body, headers);
            results.push(...transform(response))
            delegateParams = {
                ...delegateParams,
                offset: response.data && response.data.more === true ? response.data.limit * page : -1
            };
            page++;
        }

        return results;
    }
}