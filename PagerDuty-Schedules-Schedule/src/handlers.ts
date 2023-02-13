import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from "../../PagerDuty-Common/src/abstract-pager-duty-resource";
import {PagerDutyClient, PaginatedResponseType} from "../../PagerDuty-Common/src/pager-duty-client";
import {CaseTransformer, Transformer} from "../../PagerDuty-Common/src/util";
import {version} from '../package.json';
import {plainToClassFromExist} from "class-transformer";

type SchedulePayload = {
    schedule_layers: []
    final_schedule: any
    overrides_subschedule: any
};

type SchedulesResponse = {
    schedules: SchedulePayload[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, SchedulePayload, SchedulePayload, SchedulePayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SchedulePayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ schedule: SchedulePayload }>(
            'get',
            `/schedules/${model.id}`);
        return response.data.schedule;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<SchedulesResponse, ResourceModel>(
            'get',
            `/schedules`,
            response => response.data.schedules
                .map(schedulePayload => this.setModelFromList(this.newModel(), schedulePayload))
                .filter(m => m.getPrimaryIdentifier() !== null),
            {});
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SchedulePayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ schedule: SchedulePayload }>(
            'post',
            `/schedules`,
            {},
            {
                schedule: Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            });
        return response.data.schedule;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel,previousState?:ResourceModel): Promise<SchedulePayload> {
        let body = {
            schedule: Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
        }
        if(previousState && previousState.scheduleLayers && previousState.scheduleLayers.length >0){
            for (let i = 0; i < body.schedule.schedule_layers.length && i < previousState.scheduleLayers.length ; i++) {
                body.schedule.schedule_layers[i].id = previousState.scheduleLayers[i].id;
            }
        }

        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ schedule: SchedulePayload }>(
            'put',
            `/schedules/${model.id}`,
            {},
            body);
        return response.data.schedule;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest(
            'delete',
            `/schedules/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFromList(model: ResourceModel, from?: SchedulePayload): ResourceModel {
        if (!from) {
            return model;
        }
        const resourceModel = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });
        return resourceModel;
    }

    setModelFrom(model: ResourceModel, from?: SchedulePayload): ResourceModel {
        if (!from) {
            return model;
        }

        const resourceModel = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });
        // Delete a couple of unused fields that are returned by the API
        resourceModel.scheduleLayers.forEach((layer) => {
            delete (<any>layer).renderedCoveragePercentage;
            delete (<any>layer).renderedScheduleEntries;
        });
        delete (<any>resourceModel).escalationPolicies;
        delete resourceModel.finalSchedule;
        delete resourceModel.overridesSubschedule;
        return resourceModel;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
