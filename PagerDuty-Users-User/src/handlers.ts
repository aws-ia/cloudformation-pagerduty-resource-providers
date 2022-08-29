import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, Transformer} from '../../PagerDuty-Common/src/util';
import {version} from '../package.json';

type UserPayload = {
    time_zone: string
};

type UsersPayload = {
    users: UserPayload[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, UserPayload, UserPayload, UserPayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<UserPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ user: UserPayload }>(
            'get',
            `/users/${model.id}`);
        return response.data.user;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<UsersPayload, ResourceModel>(
            'get',
            '/users',
            response => response.data.users.map(userPayload => this.setModelFrom(model, userPayload)));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<UserPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ user: UserPayload }>(
            'post',
            `/users`,
            {},
            {
                user: Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            });
        return response.data.user;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<UserPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ user: UserPayload }>('put', `/users/${model.id}`, {}, {
            user: Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
        });
        return response.data.user;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ user: UserPayload }>('delete', `/users/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: UserPayload): ResourceModel {
        if (!from) {
            return model;
        }

        delete from.time_zone;

        return new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
