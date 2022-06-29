import {ResourceModel, Schedule} from './models';
import {AbstractPagerDutyResource} from "../../PagerDuty-Common/src/abstract-pager-duty-resource";
import {PagerDutyClient, PaginatedResponseType} from "../../PagerDuty-Common/src/pager-duty-client";
import {CaseTransformer, transformObjectCase} from "../../PagerDuty-Common/src/util";

type SchedulesResponse = {
    schedules: Schedule[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, Schedule, Schedule, Schedule> {

    async get(model: ResourceModel): Promise<Schedule> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ schedule: Schedule }>(
            'get',
            `/schedules/${model.id}`);
        return new Schedule(transformObjectCase(response.data.schedule, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(model.pagerDutyAccess).paginate<SchedulesResponse, ResourceModel>(
            'get',
            `/schedules`,
            response => response.data.schedules.map(apiSchedule => new ResourceModel({
                id: apiSchedule.id,
                schedule: apiSchedule
            })),
            {});
    }

    async create(model: ResourceModel): Promise<Schedule> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ schedule: Schedule }>(
            'post',
            `/schedules`,
            {},
            {
                schedule: model.toJSON()
            });
        return new Schedule(transformObjectCase(response.data.schedule, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async update(model: ResourceModel): Promise<Schedule> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ schedule: Schedule }>(
            'put',
            `/schedules/${model.id}`,
            {},
            {
                schedule: model.toJSON()
            });
        return new Schedule(transformObjectCase(response.data.schedule, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async delete(model: ResourceModel): Promise<void> {
        await new PagerDutyClient(model.pagerDutyAccess).doRequest(
            'delete',
            `/schedules/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Schedule): ResourceModel {
        if (!from) {
            return model
        }
        model.schedule = from;
        if (!!from.id) {
            model.id = from.id;
        }
        return model;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
