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
        console.log('>>>>> GET');
        try {
            const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ service: ServicePayload }>(
              'get',
              `/services/${model.id}`);
            console.log('>>>>> GET SUCCESS');
            return response.data.service;
        } catch (e) {
            console.log(JSON.stringify(e))
            console.log('>>>>> GET ERROR');
            throw e;
        }
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        console.log('>>>>> LIST');
        try {
            const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<ServicesResponse, ResourceModel>(
              'get',
              `/services`,
              response => response.data.services.map(service => this.setModelFrom(this.newModel(), service)),
              {limit: 100});
            console.log('>>>> LIST SUCCESS')
            return response;
        } catch (e) {
            console.log(JSON.stringify(e))
            console.log('>>>>> LIST ERROR');
            throw e;
        }
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ServicePayload> {
        console.log('>>>>> CREATE')
        // console.log(JSON.stringify(Transformer.for(model.toJSON())))
        // console.log(JSON.stringify(Transformer.for(model.toJSON())
        //   .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
        //   .transform()));
        const service = {
            type: 'service',
            name: model.name,
            description: model.description,
            auto_resolve_timeout: model.autoResolveTimeout,
            acknowledgement_timeout: model.acknowledgementTimeout,
            status: model.status,
            escalation_policy: {
                id: model.escalationPolicyId,
                type: 'escalation_policy_reference'
            },
            incident_urgency_rule: (model.incidentUrgencyRule.type_ === 'constant' ? {
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
            }),
            support_hours: {
                type: 'fixed_time_per_day',
                time_zone: model.supportHours.timeZone,
                start_time: model.supportHours.startTime,
                end_time: model.supportHours.endTime,
                days_of_week: [1,2,3,4,5]
            },
            scheduled_actions: model.scheduledActions.map(sa => {
                return {
                    type: 'urgency_change',
                    at: {
                        type: 'named_time',
                        name: sa.at
                    },
                    to_urgency: 'high'
                }
            }),
            alert_creation: model.alertCreation,
            alert_grouping_parameters: {
                type: model.alertGroupingParameters.type_,
                config: {
                    timeout: model.alertGroupingParameters.config.timeout
                }
            },
            auto_pause_notifications_parameters: {
                enabled: model.autoPauseNotificationsParameters.enabled,
                timeout: model.autoPauseNotificationsParameters.timeout
            }
        }
        // console.log(JSON.stringify(service))
        // console.log('>>>>> CREATE END')

        try {
            const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ service: ServicePayload }>(
              'post',
              `/services`,
              {},
              { service }
            );
            console.log('>>>>> CREATE SUCCESS');
            return response.data.service;
        } catch (e) {
            console.log(JSON.stringify(e));
            console.log('>>>> CREATE ERROR')
            throw e;
        }
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ServicePayload> {
        console.log('>>>>> UPDATE');
        const service = {
            type: 'service',
            name: model.name,
            description: model.description,
            auto_resolve_timeout: model.autoResolveTimeout,
            acknowledgement_timeout: model.acknowledgementTimeout,
            status: model.status,
            escalation_policy: {
                id: model.escalationPolicyId,
                type: 'escalation_policy_reference'
            },
            incident_urgency_rule: (model.incidentUrgencyRule.type_ === 'constant' ? {
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
            }),
            support_hours: {
                type: 'fixed_time_per_day',
                time_zone: model.supportHours.timeZone,
                start_time: model.supportHours.startTime,
                end_time: model.supportHours.endTime,
                days_of_week: [1,2,3,4,5]
            },
            scheduled_actions: model.scheduledActions.map(sa => {
                return {
                    type: 'urgency_change',
                    at: {
                        type: 'named_time',
                        name: sa.at
                    },
                    to_urgency: 'high'
                }
            }),
            alert_creation: model.alertCreation,
            alert_grouping_parameters: {
                type: model.alertGroupingParameters.type_,
                config: {
                    timeout: model.alertGroupingParameters.config.timeout
                }
            },
            auto_pause_notifications_parameters: {
                enabled: model.autoPauseNotificationsParameters.enabled,
                timeout: model.autoPauseNotificationsParameters.timeout
            }
        }
        try {
            const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ service: ServicePayload }>(
              'put',
              `/services/${model.id}`,
              {},
              { service });
            console.log('>>>>> UPDATE SUCCESS');
            return response.data.service;
        } catch (e) {
            console.log(JSON.stringify(e));
            console.log('>>>> UPDATE ERROR')
            throw e;
        }
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        console.log('>>>>> DELETE')
        try {
         const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest(
           'delete',
           `/services/${model.id}`);
            console.log('>>>>> DELETE SUCCESS');
        } catch (e) {
            console.log(JSON.stringify(e));
            console.log('>>>> DELETE ERROR')
            throw e;
        }
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ServicePayload): ResourceModel {
        console.log('>>>>> SET FROM MODEL')
        if (!from) {
            return model;
        }

        // return plainToClassFromExist(
        //   model,
        //   Transformer.for(from)
        //     .transformKeys(CaseTransformer.SNAKE_TO_PASCAL)
        //     .transform(),
        //   {excludeExtraneousValues: true});

        console.log('=========')
        console.log(JSON.stringify(model))
        console.log('=========')
        console.log(JSON.stringify(from))
        console.log('=========')

        from.scheduled_actions = from.scheduled_actions.map((sa: { at: { name: any; }; }) => {
            return {
                At: sa.at.name
            }
        });
        from.escalation_policy_id = from.escalation_policy.id;

        const resourceModel = new ResourceModel({
            ...Transformer.for(from)
              .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
              .forModelIngestion()
              .transform()
        });
        console.log('-----')
        console.log(JSON.stringify(resourceModel))
        console.log('-----')
        if ((<any>resourceModel).supportHours){
            delete (<any>resourceModel).supportHours.type_;
            delete (<any>resourceModel).supportHours.daysOfWeek;
        }
        delete (<any>resourceModel).createdAt;
        delete (<any>resourceModel).updatedAt;
        delete (<any>resourceModel).teams;
        delete (<any>resourceModel).addons;
        delete (<any>resourceModel).escalationPolicy;
        // delete (<any>resourceModel).id;
        delete (<any>resourceModel).type_;
        delete (<any>resourceModel).summary;
        delete (<any>resourceModel).htmlUrl;
        delete (<any>resourceModel).lastIncidentTimestamp;
        delete (<any>resourceModel).integrations;
        delete (<any>resourceModel).responsePlay;
        delete (<any>resourceModel).alertGrouping;
        delete (<any>resourceModel).alertGroupingTimeout;
        delete (<any>resourceModel)['self'];

        console.log('-----')
        console.log(JSON.stringify(resourceModel))
        console.log('-----')

        return resourceModel;
    }

}

console.log('>>>>> RESOURCE')

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
