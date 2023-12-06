import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, Transformer} from "../../PagerDuty-Common/src/util";
import {version} from '../package.json';

type ServicePayload = {
    scheduled_actions: ScheduledAction[],
    escalation_policy: {
        id: string,
        type: string
    },
    incident_urgency_rule: {
        type: string,
        urgency?: string,
        during_support_hours?: UrgencyDefinition,
        outside_support_hours?: UrgencyDefinition
    },
    alert_grouping_parameters: {
        type: string,
        config?: {
            timeout: bigint
        }
    }
};

type ScheduledAction = {
    type: string,
    at: {
        type: string,
        name: string
    },
    to_urgency: string
}

type UrgencyDefinition = {
    type: string,
    urgency: string
}

type ServicesResponse = {
    services: ServicePayload[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, ServicePayload, ServicePayload, ServicePayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ServicePayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ service: ServicePayload }>(
          'get',
          `/services/${model.id}`);
        return response.data.service;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<ServicesResponse, ResourceModel>(
          'get',
          `/services`,
          response => response.data.services.map(service => this.setModelFrom(this.newModel(), service)),
          {limit: 100});
        return response;
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ServicePayload> {
        const service = this.buildServiceFromModel(model);
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ service: ServicePayload }>(
          'post',
          `/services`,
          {},
          { service }
        );
        return response.data.service;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ServicePayload> {
        const service = this.buildServiceFromModel(model);
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ service: ServicePayload }>(
          'put',
          `/services/${model.id}`,
          {},
          { service });
        return response.data.service;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest(
          'delete',
          `/services/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ServicePayload): ResourceModel {
        if (!from) {
            return model;
        }

        const escalationPolicyId = from.escalation_policy.id;
        const scheduledActions = from.scheduled_actions.map((sa: ScheduledAction) => sa.at.name)

        // delete properties that are read only and unlikely to be needed/may cause drift
        delete (<any>from).created_at;
        delete (<any>from).updated_at;
        delete (<any>from).addons;
        delete (<any>from).last_incident_timestamp;
        delete (<any>from).teams;
        delete (<any>from).integrations;
        delete (<any>from).escalation_policy;
        delete (<any>from).scheduled_actions;

        // delete properties where api docs report this as deprecated, but it returned in the api
        delete (<any>from).response_play;
        delete (<any>from).alert_grouping;
        delete (<any>from).alert_grouping_timeout;

        const resourceModel = new ResourceModel({
            ...Transformer.for(from)
              .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
              .forModelIngestion()
              .transform(),
            scheduledActions: scheduledActions,
            escalationPolicyId: escalationPolicyId
        });

        if (resourceModel.scheduledActions.length === 0) {
            delete resourceModel.scheduledActions;
        }

        if (resourceModel.supportHours == null) {
            delete resourceModel.supportHours;
        }

        return resourceModel;
    }

    buildServiceFromModel(model: ResourceModel) : ServicePayload {

        const additionalParams : Partial<ServicePayload> = {};

        if (model.incidentUrgencyRule) {
            additionalParams.incident_urgency_rule = (model.incidentUrgencyRule.type_ === 'constant' ? {
                type: model.incidentUrgencyRule.type_,
                urgency: model.incidentUrgencyRule.urgency
            } : {
                type: model.incidentUrgencyRule.type_,
                during_support_hours: {
                    type: 'constant',
                    urgency: model.incidentUrgencyRule.duringSupportHours.urgency
                },
                outside_support_hours: {
                    type: 'constant',
                    urgency: model.incidentUrgencyRule.outsideSupportHours.urgency
                },
            });
        }
        if (model.scheduledActions) {
            additionalParams.scheduled_actions = model.scheduledActions.map(scheduledActionAt => {
                return {
                    type: 'urgency_change',
                    at: {
                        type: 'named_time',
                        name: scheduledActionAt
                    },
                    to_urgency: 'high'
                }
            });
        }
        if (model.alertGroupingParameters) {
            additionalParams.alert_grouping_parameters = {
                type: model.alertGroupingParameters.type_,
                config: {
                    timeout: model.alertGroupingParameters.config.timeout
                }
            };
        }

        const service : ServicePayload = {
            escalation_policy: {
                id: model.escalationPolicyId,
                type: 'escalation_policy_reference'
            },
            ...Transformer.for(model.toJSON())
              .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
              .transform(),
            ...additionalParams
        } as ServicePayload;

        return service;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
