// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'PagerDuty::Schedules::Schedule';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'ScheduleLayers' })
    @Type(() => ScheduleLayer)
    scheduleLayers?: Optional<Array<ScheduleLayer>>;
    @Expose({ name: 'TimeZone' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'timeZone', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeZone?: Optional<string>;
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
    @Expose({ name: 'FinalSchedule' })
    @Type(() => SubSchedule)
    finalSchedule?: Optional<SubSchedule>;
    @Expose({ name: 'OverridesSubschedule' })
    @Type(() => SubSchedule)
    overridesSubschedule?: Optional<SubSchedule>;
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
    @Expose({ name: 'EscalationPolicies' })
    @Type(() => EscalationPolicy)
    escalationPolicies?: Optional<Array<EscalationPolicy>>;
    @Expose({ name: 'Users' })
    @Type(() => User)
    users?: Optional<Array<User>>;
    @Expose({ name: 'Teams' })
    @Type(() => Team)
    teams?: Optional<Array<Team>>;

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

export class ScheduleLayer extends BaseModel {
    ['constructor']: typeof ScheduleLayer;


    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Start' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'start', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    start?: Optional<string>;
    @Expose({ name: 'End' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'end', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    end?: Optional<string>;
    @Expose({ name: 'Users' })
    @Type(() => UserWrapper)
    users?: Optional<Array<UserWrapper>>;
    @Expose({ name: 'Restrictions' })
    @Type(() => Restriction)
    restrictions?: Optional<Array<Restriction>>;
    @Expose({ name: 'RotationVirtualStart' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rotationVirtualStart', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rotationVirtualStart?: Optional<string>;
    @Expose({ name: 'RotationTurnLengthSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'rotationTurnLengthSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rotationTurnLengthSeconds?: Optional<integer>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;

}

export class UserWrapper extends BaseModel {
    ['constructor']: typeof UserWrapper;


    @Expose({ name: 'User' })
    @Type(() => User)
    user?: Optional<User>;

}

export class User extends BaseModel {
    ['constructor']: typeof User;


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

}

export class Restriction extends BaseModel {
    ['constructor']: typeof Restriction;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'DurationSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'durationSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    durationSeconds?: Optional<integer>;
    @Expose({ name: 'StartTimeOfDay' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'startTimeOfDay', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    startTimeOfDay?: Optional<string>;
    @Expose({ name: 'StartDayOfWeek' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'startDayOfWeek', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    startDayOfWeek?: Optional<integer>;

}

export class SubSchedule extends BaseModel {
    ['constructor']: typeof SubSchedule;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'RenderedScheduleEntries' })
    @Type(() => RenderedScheduleEntries)
    renderedScheduleEntries?: Optional<Array<RenderedScheduleEntries>>;
    @Expose({ name: 'RenderedCoveragePercentage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'renderedCoveragePercentage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    renderedCoveragePercentage?: Optional<number>;

}

export class RenderedScheduleEntries extends BaseModel {
    ['constructor']: typeof RenderedScheduleEntries;


    @Expose({ name: 'User' })
    @Type(() => User)
    user?: Optional<User>;
    @Expose({ name: 'Start' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'start', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    start?: Optional<string>;
    @Expose({ name: 'End' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'end', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    end?: Optional<string>;

}

export class EscalationPolicy extends BaseModel {
    ['constructor']: typeof EscalationPolicy;


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

