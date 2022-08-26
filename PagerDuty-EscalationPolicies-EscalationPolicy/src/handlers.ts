import {EscalationPolicy, ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, transformObjectCase} from "../../PagerDuty-Common/src/util";
import {version} from '../package.json';

type EscalationPoliciesResponse = {
    escalation_policies: EscalationPolicy[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, EscalationPolicy, EscalationPolicy, EscalationPolicy, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<EscalationPolicy> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ escalation_policy: EscalationPolicy }>(
            'get',
            `/escalation_policies/${model.id}`);
        return new EscalationPolicy(transformObjectCase(response.data.escalation_policy, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<EscalationPoliciesResponse, ResourceModel>(
            'get',
            `/escalation_policies`,
            response => response.data.escalation_policies.map(apiEscalationPolicy => new ResourceModel(transformObjectCase({
                id: apiEscalationPolicy.id,
                escalation_policy: apiEscalationPolicy
            }, CaseTransformer.SNAKE_TO_CAMEL))),
            {limit: 100});
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<EscalationPolicy> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ escalation_policy: EscalationPolicy }>(
            'post',
            `/escalation_policies`,
            {},
            {
                escalation_policy: model.toJSON()
            });
        return new EscalationPolicy(transformObjectCase(response.data.escalation_policy, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<EscalationPolicy> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ escalation_policy: EscalationPolicy }>(
            'put',
            `/escalation_policies/${model.id}`,
            {},
            {
                escalation_policy: model.toJSON()
            });
        return new EscalationPolicy(transformObjectCase(response.data.escalation_policy, CaseTransformer.SNAKE_TO_CAMEL));
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest(
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

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
