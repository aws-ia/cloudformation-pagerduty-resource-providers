// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'PagerDuty::Teams::Team';

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

