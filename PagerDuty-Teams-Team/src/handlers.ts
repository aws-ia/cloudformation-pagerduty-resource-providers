import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from "../../PagerDuty-Common/src/abstract-pager-duty-resource";
import {PagerDutyClient, PaginatedResponseType} from "../../PagerDuty-Common/src/pager-duty-client";
import {CaseTransformer, Transformer} from "../../PagerDuty-Common/src/util";
import {version} from '../package.json';
import {plainToClassFromExist} from "class-transformer";

type TeamPayload = {};

type TeamsPayload = {
    teams: TeamPayload[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, TeamPayload, TeamPayload, TeamPayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<TeamPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ team: TeamPayload }>('get', `/teams/${model.id}`);
        return response.data.team;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<TeamsPayload, ResourceModel>(
          'get',
          '/teams',
          response => response.data.teams.map(teamPayload => this.setModelFrom(model, teamPayload)));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<TeamPayload> {
        const body = Transformer.for(model.toJSON())
          .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
          .transform();
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ team: TeamPayload }>(
          'post',
          '/teams',
          {},
          {
              team: body
          });
        return response.data.team;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<TeamPayload> {
        const team = Transformer.for(model.toJSON())
          .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
          .transform();
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ team: TeamPayload }>(
          'put',
          `/teams/${model.id}`,
          {},
          {
              team: team
          });
        return response.data.team;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ team: TeamPayload }>('delete', `/teams/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: TeamPayload): ResourceModel {
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
