import {ResourceModel, Team} from './models';
import {AbstractPagerDutyResource} from "../../PagerDuty-Common/src/abstract-pager-duty-resource";
import {PagerDutyClient, PaginatedResponseType} from "../../PagerDuty-Common/src/pager-duty-client";

type TeamsResponse = {
    teams: Team[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, Team, Team, Team> {
    async get(model: ResourceModel): Promise<Team> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ team: Team }>('get', `/teams/${model.id}`);
        return new Team(response.data.team);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(model.pagerDutyAccess).paginate<TeamsResponse, ResourceModel>(
            'get',
            '/teams',
            response => response.data.teams.map(team => new ResourceModel({
                id: team.id,
                team: team
            })));
    }

    async create(model: ResourceModel): Promise<Team> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ team: Team }>(
            'post',
            '/teams',
            {},
            model.toJSON());
        return new Team(response.data.team);
    }

    async update(model: ResourceModel): Promise<Team> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ team: Team }>(
            'put',
            `/teams/${model.id}`,
            {},
            model.toJSON());
        return new Team(response.data.team);
    }

    async delete(model: ResourceModel): Promise<void> {
        await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ team: Team }>('delete', `/teams/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Team): ResourceModel {
        if (!from) {
            return model;
        }
        model.team = from;
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
