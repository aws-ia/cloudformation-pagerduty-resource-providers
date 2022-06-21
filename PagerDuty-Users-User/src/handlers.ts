import {ResourceModel, User} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';

type UsersResponse = {
    users: User[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, User, User, User> {
    async get(model: ResourceModel): Promise<User> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ user: User }>('get', `/users/${model.id}`);
        return new User(response.data.user);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(model.pagerDutyAccess).paginate<UsersResponse, ResourceModel>(
            'get',
            '/users',
            response => response.data.users.map(user => new ResourceModel({
                id: user.id,
                user: user
            })));
    }

    async create(model: ResourceModel): Promise<User> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ user: User }>('post', `/users`, {}, {
            user: model.toJSON()
        });
        return new User(response.data.user);
    }

    async update(model: ResourceModel): Promise<User> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ user: User }>('put', `/users/${model.id}`, {}, {
            user: model.toJSON()
        });
        return new User(response.data.user);
    }

    async delete(model: ResourceModel): Promise<void> {
        await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ user: User }>('delete', `/users/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: User): ResourceModel {
        if (!from) {
            return model;
        }
        model.user = from
        if (!!from.id) {
            model.id = from.id
        }
        return model;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
