# PagerDuty::Services::Service Team

Object representing a team associated with a service.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#summary" title="Summary">Summary</a>" : <i>String</i>,
    "<a href="#self" title="Self">Self</a>" : <i>String</i>,
    "<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#summary" title="Summary">Summary</a>: <i>String</i>
<a href="#self" title="Self">Self</a>: <i>String</i>
<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>: <i>String</i>
</pre>

## Properties

#### Id

String representing the ID of the team.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

A string that determines the schema of the object, value must be team_reference.

_Required_: No

_Type_: String

_Allowed Values_: <code>team_reference</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Summary

A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to name, though it is not intended to be an identifier.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Self

String showing URL at which the object is accessible.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### HtmlUrl

String representing a URL at which the entity is uniquely displayed in the Web app.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

