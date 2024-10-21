import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from "../../PagerDuty-Common/src/abstract-pager-duty-resource";
import {PagerDutyClient} from "../../PagerDuty-Common/src/pager-duty-client";
import {CaseTransformer, Transformer} from "../../PagerDuty-Common/src/util";
import {InvalidRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {version} from '../package.json';

type IntegrationPayload = {
    name: string;
    type: string,
    service: {
        id: string,
        type: string
    },
    vendor?: {
        id: string,
        type: string
    },
    integration_email?: string,
    email_incident_creation?: string,
    email_filter_mode?: string,
    email_parsers?: any[],
    email_parsing_fallback?: string,
    email_filters?: any[],
    integration_key?: string,
    html_url?: string
};

class Resource extends AbstractPagerDutyResource<ResourceModel, IntegrationPayload, IntegrationPayload, IntegrationPayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<IntegrationPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ integration: IntegrationPayload }>(
          'get',
          `/services/${model.serviceId}/integrations/${model.id}`);
        return response.data.integration;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        // no api to list integration, use Read as List.
        try {
            const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{
                integration: IntegrationPayload
            }>(
                'get',
                `/services/${model.serviceId}/integrations/${model.id}`);
            model = this.setModelFrom(model, response.data.integration)
        } catch (e) {
            return []
        }

        return [model];
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<IntegrationPayload> {
        const integration = this.buildIntegrationFromModel(model);
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ integration: IntegrationPayload }>(
          'post',
          `/services/${model.serviceId}/integrations`,
          {},
          { integration });
        return response.data.integration;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel,previousState?:ResourceModel): Promise<IntegrationPayload> {
        const integration = this.buildIntegrationFromModel(model);
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ schedule: IntegrationPayload }>(
          'put',
          `/services/${model.serviceId}/integrations/${model.id}`,
          {},
          { integration });
        return response.data.schedule;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest(
          'delete',
          `/services/${model.serviceId}/integrations/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: IntegrationPayload): ResourceModel {
        if (!from) {
            return model;
        }
        const params : Partial<ResourceModel> = {};

        params.serviceId = from.service.id;
        if (from.vendor){
            params.vendorId = from.vendor.id;
        }

        if (from.integration_key && from.html_url) {
            const host = from.html_url.indexOf('eu.pagerduty.com') > -1 ? 'events.eu.pagerduty.com' : 'events.pagerduty.com';
            params.integrationUrl = `https://${host}/integration/${from.integration_key}/enqueue`;
        } else {
            params.integrationUrl = "";
        }

        // delete properties that are read only and unlikely to be needed/may cause drift
        delete (<any>from).created_at;
        delete (<any>from).integration_key;
        delete (<any>from).config;

        // delete service and vendor since the Resource Model only uses serviceId and vendorId
        delete (<any>from).service;
        delete (<any>from).vendor;

        return new ResourceModel({
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform(),
            ...params
        });
    }


    buildIntegrationFromModel(model: ResourceModel) : IntegrationPayload {
        const additionalParams : Partial<IntegrationPayload> = {};

        if (model.vendorId) {
            additionalParams.vendor = {
                id: model.vendorId,
                type: 'vendor_reference'
            }
            delete model.vendorId;
        }

        return {
            name: model.name,
            type: model.type_,
            service: {
                id: model.serviceId,
                type: 'service_reference'
            },
            ...Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform(),
            ...additionalParams
        };
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;