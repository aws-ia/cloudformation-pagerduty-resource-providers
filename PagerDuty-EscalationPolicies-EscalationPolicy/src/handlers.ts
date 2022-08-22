import {EscalationPolicy, ResourceModel} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, transformObjectCase} from "../../PagerDuty-Common/src/util";

type EscalationPoliciesResponse = {
    escalation_policies: EscalationPolicy[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, EscalationPolicy, EscalationPolicy, EscalationPolicy> {

    async get(model: ResourceModel): Promise<EscalationPolicy> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ escalation_policy: EscalationPolicy }>(
            'get',
            `/escalation_policies/${model.id}`);
        return new EscalationPolicy(transformObjectCase(response.data.escalation_policy, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(model.pagerDutyAccess).paginate<EscalationPoliciesResponse, ResourceModel>(
            'get',
            `/escalation_policies`,
            response => response.data.escalation_policies.map(apiEscalationPolicy => new ResourceModel(transformObjectCase({
                id: apiEscalationPolicy.id,
                escalation_policy: apiEscalationPolicy
            }, CaseTransformer.SNAKE_TO_CAMEL))),
            {limit: 100});
    }

    async create(model: ResourceModel): Promise<EscalationPolicy> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ escalation_policy: EscalationPolicy }>(
            'post',
            `/escalation_policies`,
            {},
            {
                escalation_policy: model.toJSON()
            });
        return new EscalationPolicy(transformObjectCase(response.data.escalation_policy, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async update(model: ResourceModel): Promise<EscalationPolicy> {
        const response = await new PagerDutyClient(model.pagerDutyAccess).doRequest<{ escalation_policy: EscalationPolicy }>(
            'put',
            `/escalation_policies/${model.id}`,
            {},
            {
                escalation_policy: model.toJSON()
            });
        return new EscalationPolicy(transformObjectCase(response.data.escalation_policy, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async delete(model: ResourceModel): Promise<void> {
        await new PagerDutyClient(model.pagerDutyAccess).doRequest(
            'delete',
            `/escalation_policies/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: EscalationPolicy | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        model.escalationPolicy = from;
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
