# PagerDuty::Services::Integration

A resource schema representing a PagerDuty Integration belonging to a Service.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "PagerDuty::Services::Integration",
    "Properties" : {
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#serviceid" title="ServiceId">ServiceId</a>" : <i>String</i>,
        "<a href="#vendorid" title="VendorId">VendorId</a>" : <i>String</i>,
        "<a href="#integrationemail" title="IntegrationEmail">IntegrationEmail</a>" : <i>String</i>,
        "<a href="#emailincidentcreation" title="EmailIncidentCreation">EmailIncidentCreation</a>" : <i>String</i>,
        "<a href="#emailfiltermode" title="EmailFilterMode">EmailFilterMode</a>" : <i>String</i>,
        "<a href="#emailparsers" title="EmailParsers">EmailParsers</a>" : <i>[ <a href="emailparser.md">EmailParser</a>, ... ]</i>,
        "<a href="#emailparsingfallback" title="EmailParsingFallback">EmailParsingFallback</a>" : <i>String</i>,
        "<a href="#emailfilters" title="EmailFilters">EmailFilters</a>" : <i>[ <a href="emailfilter.md">EmailFilter</a>, ... ]</i>,
    }
}
</pre>

### YAML

<pre>
Type: PagerDuty::Services::Integration
Properties:
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#serviceid" title="ServiceId">ServiceId</a>: <i>String</i>
    <a href="#vendorid" title="VendorId">VendorId</a>: <i>String</i>
    <a href="#integrationemail" title="IntegrationEmail">IntegrationEmail</a>: <i>String</i>
    <a href="#emailincidentcreation" title="EmailIncidentCreation">EmailIncidentCreation</a>: <i>String</i>
    <a href="#emailfiltermode" title="EmailFilterMode">EmailFilterMode</a>: <i>String</i>
    <a href="#emailparsers" title="EmailParsers">EmailParsers</a>: <i>
      - <a href="emailparser.md">EmailParser</a></i>
    <a href="#emailparsingfallback" title="EmailParsingFallback">EmailParsingFallback</a>: <i>String</i>
    <a href="#emailfilters" title="EmailFilters">EmailFilters</a>: <i>
      - <a href="emailfilter.md">EmailFilter</a></i>
</pre>

## Properties

#### Type

The type of integration to be created. Refer to the API documentation for list of allowed values.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>aws_cloudwatch_inbound_integration</code> | <code>cloudkick_inbound_integration</code> | <code>event_transformer_api_inbound_integration</code> | <code>generic_email_inbound_integration</code> | <code>generic_events_api_inbound_integration</code> | <code>keynote_inbound_integration</code> | <code>nagios_inbound_integration</code> | <code>pingdom_inbound_integration</code> | <code>sql_monitor_inbound_integration</code> | <code>events_api_v2_inbound_integration</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of integration to be created.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ServiceId

The ID of the service integration should be associated with.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### VendorId

The ID of a third party vendor integration. Used for existing integrations.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IntegrationEmail

Email address for the integration - must be set to an email address @your-subdomain.pagerduty.com. Specified only for generic_email_inbound_integration integrations.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EmailIncidentCreation

Email incident creation. Specified only for generic_email_inbound_integration integrations.

_Required_: No

_Type_: String

_Allowed Values_: <code>on_new_email</code> | <code>on_new_email_subject</code> | <code>only_if_no_open_incidents</code> | <code>use_rules</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EmailFilterMode

Email filter mode. Specified only for generic_email_inbound_integration integrations.

_Required_: No

_Type_: String

_Allowed Values_: <code>email</code> | <code>or-rules-email</code> | <code>and-rules-email</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EmailParsers

Email parsers. Specified only for generic_email_inbound_integration integrations.

_Required_: No

_Type_: List of <a href="emailparser.md">EmailParser</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EmailParsingFallback

Email Parsing Fallback. Specified only for generic_email_inbound_integration integrations.

_Required_: No

_Type_: String

_Allowed Values_: <code>open_new_incident</code> | <code>discard</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EmailFilters

Email filters. Specified only for generic_email_inbound_integration integrations.

_Required_: No

_Type_: List of <a href="emailfilter.md">EmailFilter</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Returns the <code>Id</code> value.

#### Summary

A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to name, though it is not intended to be an identifier.

#### HtmlUrl

A URL at which the entity is uniquely displayed in the Web app.

#### Self

The API show URL at which the object is accessible

#### IntegrationUrl

The URL of the Integration.

