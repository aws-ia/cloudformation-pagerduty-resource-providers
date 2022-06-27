// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'PagerDuty::EscalationPolicies::EscalationPolicy';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'PagerDutyAccess' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'pagerDutyAccess', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    pagerDutyAccess?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'NumLoops' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'numLoops', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numLoops?: Optional<integer>;
    @Expose({ name: 'OnCallHandoffNotifications' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'onCallHandoffNotifications', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    onCallHandoffNotifications?: Optional<string>;
    @Expose({ name: 'EscalationRules' })
    @Type(() => EscalationRules)
    escalationRules?: Optional<EscalationRules>;
    @Expose({ name: 'Teams' })
    @Type(() => Team)
    teams?: Optional<Array<Team>>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'EscalationPolicy' })
    @Type(() => EscalationPolicy)
    escalationPolicy?: Optional<EscalationPolicy>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.id != null) {
            identifier[this.IDENTIFIER_KEY_ID] = this.id;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class EscalationRules extends BaseModel {
    ['constructor']: typeof EscalationRules;


    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'EscalationDelayInMinutes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'escalationDelayInMinutes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    escalationDelayInMinutes?: Optional<integer>;
    @Expose({ name: 'Targets' })
    @Type(() => Target)
    targets?: Optional<Array<Target>>;

}

export class Target extends BaseModel {
    ['constructor']: typeof Target;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Summary' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'summary', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    summary?: Optional<string>;
    @Expose({ name: 'HtmlUrl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'htmlUrl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    htmlUrl?: Optional<string>;

}

export class Team extends BaseModel {
    ['constructor']: typeof Team;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Summary' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'summary', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    summary?: Optional<string>;
    @Expose({ name: 'HtmlUrl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'htmlUrl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    htmlUrl?: Optional<string>;

}

export class EscalationPolicy extends BaseModel {
    ['constructor']: typeof EscalationPolicy;


    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'HtmlUrl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'htmlUrl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    htmlUrl?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'NumLoops' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'numLoops', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numLoops?: Optional<integer>;
    @Expose({ name: 'OnCallHandoffNotifications' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'onCallHandoffNotifications', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    onCallHandoffNotifications?: Optional<string>;
    @Expose({ name: 'EscalationRules' })
    @Type(() => EscalationRules)
    escalationRules?: Optional<EscalationRules>;
    @Expose({ name: 'Services' })
    @Type(() => Service)
    services?: Optional<Array<Service>>;
    @Expose({ name: 'Teams' })
    @Type(() => Team)
    teams?: Optional<Array<Team>>;

}

export class Service extends BaseModel {
    ['constructor']: typeof Service;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Summary' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'summary', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    summary?: Optional<string>;
    @Expose({ name: 'HtmlUrl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'htmlUrl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    htmlUrl?: Optional<string>;

}

