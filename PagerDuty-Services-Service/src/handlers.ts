import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, Transformer} from "../../PagerDuty-Common/src/util";
import {version} from '../package.json';
import {plainToClassFromExist} from "class-transformer";

// TODO - no idea what should be here
type ServicePayload = {
    teams: []
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
        return await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<ServicesResponse, ResourceModel>(
          'get',
          `/services`,
          response => response.data.services.map(service => this.setModelFrom(this.newModel(), service)),
          {limit: 100});
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ServicePayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ service: ServicePayload }>(
          'post',
          `/services`,
          {},
          {
              service: Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
          });
        return response.data.service;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ServicePayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ service: ServicePayload }>(
          'put',
          `/services/${model.id}`,
          {},
          {
              service: Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
          });
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
