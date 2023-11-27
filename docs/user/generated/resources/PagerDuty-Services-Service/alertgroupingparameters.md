# PagerDuty::Services::Service AlertGroupingParameters

Object that defines how alerts on this service will be automatically grouped into incidents.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#config" title="Config">Config</a>" : <i><a href="alertgroupingparameters.md">AlertGroupingParameters</a></i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#config" title="Config">Config</a>: <i><a href="alertgroupingparameters.md">AlertGroupingParameters</a></i>
</pre>

## Properties

#### Type

String representing the type of alert grouping, allowed values are: time, intelligent, content_based.

_Required_: No

_Type_: String

_Allowed Values_: <code>time</code> | <code>intelligent</code> | <code>content_based</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Config

_Required_: No

_Type_: <a href="alertgroupingparameters.md">AlertGroupingParameters</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

