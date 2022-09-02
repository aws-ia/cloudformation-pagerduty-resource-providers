# PagerDuty::EscalationPolicies::EscalationPolicy Service

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#id" title="Id">Id</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#id" title="Id">Id</a>: <i>String</i>
</pre>

## Properties

#### Type

A string that determines the schema of the object. This must be the standard name for the entity, suffixed by _reference if the object is a reference./, =, +, and -.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>service_reference</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Id

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

