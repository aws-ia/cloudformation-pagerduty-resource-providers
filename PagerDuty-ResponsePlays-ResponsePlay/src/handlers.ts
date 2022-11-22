import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, Transformer} from '../../PagerDuty-Common/src/util';
import {version} from '../package.json';
import {plainToClassFromExist} from "class-transformer";

type ResponsePlayPayload = {
    description: string
    subscribers: any
    subscribers_message: string
    responders: any
    responders_message: string
    conference_number: string
    conference_url: string
    conference_type: string
};

type ResponsePlaysPayload = {
    response_plays: ResponsePlayPayload[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, ResponsePlayPayload, ResponsePlayPayload, ResponsePlayPayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResponsePlayPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ response_play: ResponsePlayPayload }>(
            'get',
            `/response_plays/${model.id}`,
            undefined,
            undefined,
            {
                From: model.fromEmail
            });
        return response.data.response_play;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<ResponsePlaysPayload, ResourceModel>(
            'get',
            `/response_plays`,
            response => response.data.response_plays.map(responsePlayPayload => this.setModelFrom(model, responsePlayPayload)),
            undefined,
            undefined,
            {
                From: model.fromEmail
            });
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResponsePlayPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ response_play: ResponsePlayPayload }>(
            'post',
            `/response_plays`,
            undefined,
            {
                response_play: Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            },
            {
                From: model.fromEmail
            });
        return response.data.response_play;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResponsePlayPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ response_play: ResponsePlayPayload }>(
            'put',
            `/response_plays/${model.id}`,
            undefined,
            {
                response_play: Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            },
            {
                From: model.fromEmail
            });
        return response.data.response_play;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ response_play: ResponsePlayPayload }>(
            'delete',
            `/response_plays/${model.id}`,
            undefined,
            undefined,
            {
                From: model.fromEmail
            });
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ResponsePlayPayload): ResourceModel {
        if (!from) {
            return model;
        }

        const fromEmail = model.fromEmail;
        const resourceModel = plainToClassFromExist(
            model,
            Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_PASCAL)
                .transform(),
            {excludeExtraneousValues: true, enableImplicitConversion: true});
        resourceModel.fromEmail = fromEmail;
        return resourceModel;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
