import {ResourceModel, ResponsePlay} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, transformObjectCase} from '../../PagerDuty-Common/src/util';
import {version} from '../package.json';

type ResponsePlaysResponse = {
    response_plays: ResponsePlay[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, ResponsePlay, ResponsePlay, ResponsePlay> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel): Promise<ResponsePlay> {
        const response = await new PagerDutyClient(model.pagerDutyAccess, this.userAgent).doRequest<{ response_play: ResponsePlay }>(
            'get',
            `/response_plays/${model.id}`,
            undefined,
            undefined,
            {
                From: model.from_
            });
        return new ResponsePlay(transformObjectCase(response.data.response_play, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(model.pagerDutyAccess, this.userAgent).paginate<ResponsePlaysResponse, ResourceModel>(
            'get',
            `/response_plays`,
            response => response.data.response_plays.map(apiResponsePlay => new ResourceModel(transformObjectCase({
                id: apiResponsePlay.id,
                responsePlay: apiResponsePlay
            }, CaseTransformer.SNAKE_TO_CAMEL))),
            undefined,
            undefined,
            {
                From: model.from_
            });
    }

    async create(model: ResourceModel): Promise<ResponsePlay> {
        const response = await new PagerDutyClient(model.pagerDutyAccess, this.userAgent).doRequest<{ response_play: ResponsePlay }>(
            'post',
            `/response_plays`,
            {},
            {
                response_play: model.toJSON()
            },
            {
                From: model.from_
            });
        return new ResponsePlay(transformObjectCase(response.data.response_play, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async update(model: ResourceModel): Promise<ResponsePlay> {
        const response = await new PagerDutyClient(model.pagerDutyAccess, this.userAgent).doRequest<{ response_play: ResponsePlay }>(
            'put',
            `/response_plays/${model.id}`,
            {},
            {
                response_play: model.toJSON()
            },
            {
                From: model.from_
            });
        return new ResponsePlay(transformObjectCase(response.data.response_play, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async delete(model: ResourceModel): Promise<void> {
        await new PagerDutyClient(model.pagerDutyAccess, this.userAgent).doRequest<{ response_play: ResponsePlay }>(
            'delete',
            `/response_plays/${model.id}`,
            undefined,
            undefined,
            {
                From: model.from_
            });
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResponsePlay | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        model.responsePlay = from;
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
