import axios, {AxiosResponse} from "axios";

export type ApiErrorResponse = {
    error: ApiError
}
export type ApiError = {
    code: number
    message: string
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

    constructor(apiToken: string) {
        this.apiToken = apiToken;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `https://api.pagerduty.com${path}`,
            params: params,
            method: method,
            data: this.sanitizePayload(body),
            headers: {
                Authorization: `Token token=${this.apiToken}`,
                'Content-type': 'application/json',
                Accept: 'application/vnd.pagerduty+json;version=2',
                From: ''
            }
        });
    }

    public async paginate<ResponseType extends PaginatedResponseType, ResultType>(method: 'get' | 'put' | 'post' | 'delete', path: string, transform: (response: AxiosResponse<ResponseType>) => ResultType[], params: any = {}, body?: {}): Promise<ResultType[]> {
        const results: ResultType[] = [];

        let page = 1;
        let delegateParams = {
            offset: 0,
            limit: 200,
            ...params
        };

        while (delegateParams.offset >= 0) {
            const response = await this.doRequest<ResponseType>(method, path, delegateParams, body);
            results.push(...transform(response))
            delegateParams = {
                ...delegateParams,
                offset: response.data && response.data.more === true ? response.data.limit * page : -1
            };
            page++;
        }

        return results;
    }

    private sanitizePayload(model: { [key: string]: any }) {
        if (!model) {
            return model;
        }

        return Object.keys(model).reduce((map, key) => {
            let value = model[key];
            if (value && value instanceof Object && !(value instanceof Array) && !(value instanceof Set)) {
                value = this.sanitizePayload(value);
            }
            if (value && value instanceof Set) {
                value = Array.of(...value);
            }
            if (value && Array.isArray(value)) {
                value = value.map(item => item && item instanceof Object && !(item instanceof Array) && !(item instanceof Set)
                    ? this.sanitizePayload(item)
                    : item);
            }
            map[key.substring(0, 1).toLocaleLowerCase() + key.substring(1).replace(/([A-Z])/g, (input) => `_${input.toLocaleLowerCase()}`)] = value;
            return map;
        }, {} as { [key: string]: any })
    }
}