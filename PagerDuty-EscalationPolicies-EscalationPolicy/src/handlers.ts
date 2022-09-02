import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractPagerDutyResource} from '../../PagerDuty-Common/src/abstract-pager-duty-resource';
import {PagerDutyClient, PaginatedResponseType} from '../../PagerDuty-Common/src/pager-duty-client';
import {CaseTransformer, Transformer} from "../../PagerDuty-Common/src/util";
import {version} from '../package.json';

type EscalationPolicyPayload = {
    escalation_rules: []
    teams: []
};

type EscalationPoliciesPayload = {
    escalation_policies: EscalationPolicyPayload[]
} & PaginatedResponseType;

class Resource extends AbstractPagerDutyResource<ResourceModel, EscalationPolicyPayload, EscalationPolicyPayload, EscalationPolicyPayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<EscalationPolicyPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ escalation_policy: EscalationPolicyPayload }>(
            'get',
            `/escalation_policies/${model.id}`);
        return response.data.escalation_policy;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).paginate<EscalationPoliciesPayload, ResourceModel>(
            'get',
            `/escalation_policies`,
            response => response.data.escalation_policies.map(escalationPolicyPayload => this.setModelFrom(model, escalationPolicyPayload)),
            {limit: 100});
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<EscalationPolicyPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ escalation_policy: EscalationPolicyPayload }>(
            'post',
            `/escalation_policies`,
            {},
            {
                escalation_policy: Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            });
        return response.data.escalation_policy;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<EscalationPolicyPayload> {
        const response = await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<{ escalation_policy: EscalationPolicyPayload }>(
            'put',
            `/escalation_policies/${model.id}`,
            {},
            {
                escalation_policy: Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform()
            });
        return response.data.escalation_policy;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new PagerDutyClient(typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest(
            'delete',
            `/escalation_policies/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: EscalationPolicyPayload): ResourceModel {
        if (!from) {
            return model;
        }

        return new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
