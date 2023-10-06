// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'PagerDuty::Services::Integration';

    @Exclude()
    protected readonly IDENTIFIER_KEY_TPSCODE: string = '/properties/TPSCode';

    @Expose({ name: 'TPSCode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tPSCode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tPSCode?: Optional<string>;
    @Expose({ name: 'Title' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'title', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    title?: Optional<string>;
    @Expose({ name: 'CoverSheetIncluded' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'coverSheetIncluded', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    coverSheetIncluded?: Optional<boolean>;
    @Expose({ name: 'DueDate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dueDate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dueDate?: Optional<string>;
    @Expose({ name: 'ApprovalDate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'approvalDate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    approvalDate?: Optional<string>;
    @Expose({ name: 'Memo' })
    @Type(() => Memo)
    memo?: Optional<Memo>;
    @Expose({ name: 'SecondCopyOfMemo' })
    @Type(() => Memo)
    secondCopyOfMemo?: Optional<Memo>;
    @Expose({ name: 'TestCode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'testCode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    testCode?: Optional<string>;
    @Expose({ name: 'Authors' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'authors', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    authors?: Optional<Array<string>>;
    @Expose({ name: 'Tags' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Tag, 'tags', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    tags?: Optional<Set<Tag>>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.tPSCode != null) {
            identifier[this.IDENTIFIER_KEY_TPSCODE] = this.tPSCode;
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

export class Memo extends BaseModel {
    ['constructor']: typeof Memo;


    @Expose({ name: 'Heading' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'heading', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    heading?: Optional<string>;
    @Expose({ name: 'Body' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'body', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    body?: Optional<string>;

}

export class Tag extends BaseModel {
    ['constructor']: typeof Tag;


    @Expose({ name: 'Key' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'key', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    key?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;



}

