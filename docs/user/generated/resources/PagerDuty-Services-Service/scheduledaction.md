# PagerDuty::Services::Service ScheduledAction

Object representing a Scheduled Action for the Service.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#at" title="At">At</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#at" title="At">At</a>: <i>String</i>
</pre>

## Properties

#### At

Represents when scheduled action will occur

_Required_: No

_Type_: String

_Allowed Values_: <code>support_hours_start</code> | <code>support_hours_end</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

