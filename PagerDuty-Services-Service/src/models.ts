// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'PagerDuty::Services::Service';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

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
    @Expose({ name: 'AutoResolveTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'autoResolveTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    autoResolveTimeout?: Optional<integer>;
    @Expose({ name: 'AcknowledgementTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'acknowledgementTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    acknowledgementTimeout?: Optional<integer>;
    @Expose({ name: 'Status' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'status', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    status?: Optional<string>;
    @Expose({ name: 'EscalationPolicyId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'escalationPolicyId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    escalationPolicyId?: Optional<string>;
    @Expose({ name: 'IncidentUrgencyRule' })
    @Type(() => IncidentUrgencyRule)
    incidentUrgencyRule?: Optional<IncidentUrgencyRule>;
    @Expose({ name: 'SupportHours' })
    @Type(() => SupportHours)
    supportHours?: Optional<SupportHours>;
    @Expose({ name: 'ScheduledActions' })
    @Type(() => ScheduledAction)
    scheduledActions?: Optional<Array<ScheduledAction>>;
    @Expose({ name: 'AlertCreation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'alertCreation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    alertCreation?: Optional<string>;
    @Expose({ name: 'AlertGroupingParameters' })
    @Type(() => AlertGroupingParameters)
    alertGroupingParameters?: Optional<AlertGroupingParameters>;
    @Expose({ name: 'AlertGrouping' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'alertGrouping', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    alertGrouping?: Optional<string>;
    @Expose({ name: 'AlertGroupingTimeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'alertGroupingTimeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    alertGroupingTimeout?: Optional<integer>;
    @Expose({ name: 'AlertPauseNotificationsParameters' })
    @Type(() => AlertPauseNotificationsParameters)
    alertPauseNotificationsParameters?: Optional<AlertPauseNotificationsParameters>;
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

export class IncidentUrgencyRule extends BaseModel {
    ['constructor']: typeof IncidentUrgencyRule;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Urgency' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'urgency', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    urgency?: Optional<string>;
    @Expose({ name: 'DuringSupportHours' })
    @Type(() => DuringSupportHours)
    duringSupportHours?: Optional<DuringSupportHours>;
    @Expose({ name: 'OutsideSupportHours' })
    @Type(() => OutsideSupportHours)
    outsideSupportHours?: Optional<OutsideSupportHours>;

}

export class DuringSupportHours extends BaseModel {
    ['constructor']: typeof DuringSupportHours;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Urgency' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'urgency', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    urgency?: Optional<string>;

}

export class OutsideSupportHours extends BaseModel {
    ['constructor']: typeof OutsideSupportHours;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Urgency' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'urgency', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    urgency?: Optional<string>;

}

export class SupportHours extends BaseModel {
    ['constructor']: typeof SupportHours;


    @Expose({ name: 'TimeZone' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'timeZone', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeZone?: Optional<string>;
    @Expose({ name: 'StartTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'startTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    startTime?: Optional<string>;
    @Expose({ name: 'EndTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'endTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    endTime?: Optional<string>;

}

export class ScheduledAction extends BaseModel {
    ['constructor']: typeof ScheduledAction;


    @Expose({ name: 'At' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'at', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    at?: Optional<string>;

}

export class AlertGroupingParameters extends BaseModel {
    ['constructor']: typeof AlertGroupingParameters;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Config' })
    @Type(() => Config)
    config?: Optional<Config>;

}

export class Config extends BaseModel {
    ['constructor']: typeof Config;


    @Expose({ name: 'Timeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'timeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeout?: Optional<integer>;

}

export class AlertPauseNotificationsParameters extends BaseModel {
    ['constructor']: typeof AlertPauseNotificationsParameters;


    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'Timeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'timeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeout?: Optional<integer>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'PagerDutyAccess' })
    @Type(() => PagerDutyAccess)
    pagerDutyAccess?: Optional<PagerDutyAccess>;

}

export class PagerDutyAccess extends BaseModel {
    ['constructor']: typeof PagerDutyAccess;


    @Expose({ name: 'Token' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'token', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    token?: Optional<string>;

}

