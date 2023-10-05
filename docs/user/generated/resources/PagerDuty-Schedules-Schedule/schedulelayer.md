# PagerDuty::Schedules::Schedule ScheduleLayer

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#start" title="Start">Start</a>" : <i>String</i>,
    "<a href="#end" title="End">End</a>" : <i>String</i>,
    "<a href="#users" title="Users">Users</a>" : <i>[ <a href="userwrapper.md">UserWrapper</a>, ... ]</i>,
    "<a href="#restrictions" title="Restrictions">Restrictions</a>" : <i>[ <a href="restriction.md">Restriction</a>, ... ]</i>,
    "<a href="#rotationvirtualstart" title="RotationVirtualStart">RotationVirtualStart</a>" : <i>String</i>,
    "<a href="#rotationturnlengthseconds" title="RotationTurnLengthSeconds">RotationTurnLengthSeconds</a>" : <i>Integer</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#start" title="Start">Start</a>: <i>String</i>
<a href="#end" title="End">End</a>: <i>String</i>
<a href="#users" title="Users">Users</a>: <i>
      - <a href="userwrapper.md">UserWrapper</a></i>
<a href="#restrictions" title="Restrictions">Restrictions</a>: <i>
      - <a href="restriction.md">Restriction</a></i>
<a href="#rotationvirtualstart" title="RotationVirtualStart">RotationVirtualStart</a>: <i>String</i>
<a href="#rotationturnlengthseconds" title="RotationTurnLengthSeconds">RotationTurnLengthSeconds</a>: <i>Integer</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
</pre>

## Properties

#### Id

_Required_: No

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Start

The start time of this layer.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### End

The end time of this layer. If null, the layer does not end.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Users

The ordered list of users on this layer. The position of the user on the list determines their order in the layer.

_Required_: Yes

_Type_: List of <a href="userwrapper.md">UserWrapper</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Restrictions

An array of restrictions for the layer. A restriction is a limit on which period of the day or week the schedule layer can accept assignments.

_Required_: No

_Type_: List of <a href="restriction.md">Restriction</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RotationVirtualStart

The effective start time of the layer. This can be before the start time of the schedule.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RotationTurnLengthSeconds

The duration of each on-call shift in seconds.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the schedule layer.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

