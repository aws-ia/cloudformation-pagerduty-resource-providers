import {AbstractBaseResource} from "./abstract-base-resource";
import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {ApiErrorResponse} from "./pager-duty-client";
import {AxiosError} from "axios";

export abstract class AbstractPagerDutyResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, AxiosError<ApiErrorResponse>, TypeConfigurationM> {

    processRequestException(e: AxiosError<ApiErrorResponse>, request: ResourceHandlerRequest<ResourceModelType>) {
        const apiErrorResponse = e.response?.data;
        let errorMessage = apiErrorResponse?.error?.message || e?.message;
        if (Array.isArray(apiErrorResponse?.error?.errors)) {
            apiErrorResponse?.error.errors.forEach((error: string) => {
                errorMessage += `\n[X] ${error}`;
            });
        }

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;
        switch (status) {
            case 400:
                throw new exceptions.InvalidRequest(errorMessage);
            case 401:
                throw new exceptions.InvalidCredentials(errorMessage);
            case 402:
            case 403:
                throw new exceptions.AccessDenied(`Access denied, please check your API token and abilities: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred while talking to the PagerDuty API: ${errorMessage}`)
        }
    }
}