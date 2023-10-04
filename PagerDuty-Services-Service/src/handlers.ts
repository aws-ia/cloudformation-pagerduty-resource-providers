import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, Transformer} from "../../PagerDuty-Common/src/util";
import {version} from '../package.json';
import {plainToClassFromExist} from "class-transformer";

type ServicePayload = {
    scheduled_actions: any,
    escalation_policy: any,
    escalation_policy_id: any,
};

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

        // transform some object to conform between model <-> api structure
        from.scheduled_actions = from.scheduled_actions.map((sa: { at: { name: any; }; }) => sa.at.name);
        from.escalation_policy_id = from.escalation_policy.id;
        delete (<any>from).escalation_policy; // we only the ID for the model

        const resourceModel = new ResourceModel({
            ...Transformer.for(from)
              .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
              .forModelIngestion()
              .transform()
        });

        // delete properties that are read only and unlikely to be needed
        delete (<any>resourceModel).createdAt;
        delete (<any>resourceModel).updatedAt;
        delete (<any>resourceModel).addons;
        delete (<any>resourceModel).lastIncidentTimestamp;

        // delete properties where api docs report this as deprecated, but it returned in the api
        delete (<any>resourceModel).responsePlay;
        delete (<any>resourceModel).alertGrouping;
        delete (<any>resourceModel).alertGroupingTimeout;

        return resourceModel;
    }

    buildServiceFromModel(model: ResourceModel) : any {
        const service = Transformer.for(model.toJSON())
          .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
          .transform();

        // required
        service.escalation_policy = {
            id: model.escalationPolicyId,
            type: 'escalation_policy_reference'
        };
        if (model.incidentUrgencyRule) {
            service.incident_urgency_rule = (model.incidentUrgencyRule.type_ === 'constant' ? {
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
            service.scheduled_actions = model.scheduledActions.map(scheduledActionAt => {
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
            service.alert_grouping_parameters = {
                type: model.alertGroupingParameters.type_,
                config: {
                    timeout: model.alertGroupingParameters.config.timeout
                }
            };
        }

        return service;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
