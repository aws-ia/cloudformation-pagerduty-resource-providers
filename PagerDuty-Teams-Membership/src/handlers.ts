import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from "../../PagerDuty-Common/src/abstract-pager-duty-resource";
import {PagerDutyClient, PaginatedResponseType} from "../../PagerDuty-Common/src/pager-duty-client";
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError} from "axios";
import {version} from '../package.json';
import {CaseTransformer, Transformer} from "../../PagerDuty-Common/src/util";
import {plainToClassFromExist} from "class-transformer";

type MembersResponse = {
    members: Member[]
} & PaginatedResponseType;

type Member = {
    user: User
    role: string
}

type User = {
    id: string
}

class Resource extends AbstractPagerDutyResource<ResourceModel, ResourceModel, void, void, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel> {
        const resourceModel = (await this.list(model, typeConfiguration)).find(returnedModel => returnedModel.userId === model.userId);
        if (resourceModel) {
            return resourceModel;
        }
        // Because there is no get endpoint, we are using the list endpoint + simulating a 404 response to trigger
        // the right behaviour, if the resource is not found within the list.
        const axiosError = new AxiosError('Resource not found from list');
        axiosError.status = '404';
        throw axiosError;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<MembersResponse, ResourceModel>(
            'get',
            `/teams/${model.teamId}/members`,
            response => response.data.members.map(member => new ResourceModel({
                teamId: model.teamId,
                userId: member.user.id,
                role: member.role
            })),
            {limit: 100});
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration.pagerDutyAccess.token, this.userAgent).doRequest(
            'put',
            `/teams/${model.teamId}/users/${model.userId}`,
            {},
            {
                role: model.role
            });
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        throw new exceptions.NotUpdatable();
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration.pagerDutyAccess.token, this.userAgent).doRequest(
            'delete',
            `/teams/${model.teamId}/users/${model.userId}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ResourceModel): ResourceModel {
        if (!from) {
            return model;
        }

        return plainToClassFromExist(
            model,
            Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_PASCAL)
                .transform(),
            {excludeExtraneousValues: true});
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
