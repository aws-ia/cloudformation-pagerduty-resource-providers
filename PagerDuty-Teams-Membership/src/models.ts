// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'PagerDuty::Teams::Membership';

    @Exclude()
    protected readonly IDENTIFIER_KEY_TEAMID: string = '/properties/TeamId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_USERID: string = '/properties/UserId';

    @Expose({ name: 'PagerDutyAccess' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'pagerDutyAccess', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    pagerDutyAccess?: Optional<string>;
    @Expose({ name: 'TeamId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'teamId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    teamId?: Optional<string>;
    @Expose({ name: 'UserId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'userId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    userId?: Optional<string>;
    @Expose({ name: 'Role' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'role', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    role?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.teamId != null) {
            identifier[this.IDENTIFIER_KEY_TEAMID] = this.teamId;
        }

        if (this.userId != null) {
            identifier[this.IDENTIFIER_KEY_USERID] = this.userId;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 2 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

