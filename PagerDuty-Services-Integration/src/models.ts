// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'PagerDuty::Services::Integration';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

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
    @Expose({ name: 'Self' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'self', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    self?: Optional<string>;
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
    @Expose({ name: 'ServiceId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serviceId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serviceId?: Optional<string>;
    @Expose({ name: 'VendorId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'vendorId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    vendorId?: Optional<string>;
    @Expose({ name: 'IntegrationEmail' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'integrationEmail', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    integrationEmail?: Optional<string>;
    @Expose({ name: 'EmailIncidentCreation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'emailIncidentCreation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    emailIncidentCreation?: Optional<string>;
    @Expose({ name: 'EmailFilterMode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'emailFilterMode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    emailFilterMode?: Optional<string>;
    @Expose({ name: 'EmailParsers' })
    @Type(() => EmailParser)
    emailParsers?: Optional<Array<EmailParser>>;
    @Expose({ name: 'EmailParsingFallback' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'emailParsingFallback', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    emailParsingFallback?: Optional<string>;
    @Expose({ name: 'EmailFilters' })
    @Type(() => EmailFilter)
    emailFilters?: Optional<Array<EmailFilter>>;
    @Expose({ name: 'IntegrationUrl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'integrationUrl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    integrationUrl?: Optional<string>;

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

export class EmailParser extends BaseModel {
    ['constructor']: typeof EmailParser;


    @Expose({ name: 'Action' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'action', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    action?: Optional<string>;
    @Expose({ name: 'MatchPredicate' })
    @Type(() => MatchPredicate)
    matchPredicate?: Optional<MatchPredicate>;
    @Expose({ name: 'ValueExtractors' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'valueExtractors', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    valueExtractors?: Optional<string>;

}

export class MatchPredicate extends BaseModel {
    ['constructor']: typeof MatchPredicate;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Matcher' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'matcher', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    matcher?: Optional<string>;
    @Expose({ name: 'Part' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'part', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    part?: Optional<string>;

}

export class EmailFilter extends BaseModel {
    ['constructor']: typeof EmailFilter;


    @Expose({ name: 'SubjectMode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'subjectMode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    subjectMode?: Optional<string>;
    @Expose({ name: 'SubjectRegex' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'subjectRegex', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    subjectRegex?: Optional<string>;
    @Expose({ name: 'BodyMode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'bodyMode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    bodyMode?: Optional<string>;
    @Expose({ name: 'BodyRegex' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'bodyRegex', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    bodyRegex?: Optional<string>;
    @Expose({ name: 'FromEmailMode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'fromEmailMode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    fromEmailMode?: Optional<string>;
    @Expose({ name: 'FromEmailRegex' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'fromEmailRegex', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    fromEmailRegex?: Optional<string>;

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

