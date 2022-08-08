# PagerDuty::Users::User ContactMethod

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#summary" title="Summary">Summary</a>" : <i>String</i>,
    "<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#summary" title="Summary">Summary</a>: <i>String</i>
<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>: <i>String</i>
</pre>

## Properties

#### Type

A string that determines the schema of the object. This must be the standard name for the entity, suffixed by _reference if the object is a reference.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>email_contact_method_reference</code> | <code>phone_contact_method_reference</code> | <code>push_notification_contact_method_reference</code> | <code>sms_contact_method_reference</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Id

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Summary

A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to name, though it is not intended to be an identifier.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### HtmlUrl

A URL at which the entity is uniquely displayed in the Web app

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

