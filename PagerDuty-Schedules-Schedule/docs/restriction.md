# PagerDuty::Schedules::Schedule Restriction

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#durationseconds" title="DurationSeconds">DurationSeconds</a>" : <i>Integer</i>,
    "<a href="#starttimeofday" title="StartTimeOfDay">StartTimeOfDay</a>" : <i>String</i>,
    "<a href="#startdayofweek" title="StartDayOfWeek">StartDayOfWeek</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#durationseconds" title="DurationSeconds">DurationSeconds</a>: <i>Integer</i>
<a href="#starttimeofday" title="StartTimeOfDay">StartTimeOfDay</a>: <i>String</i>
<a href="#startdayofweek" title="StartDayOfWeek">StartDayOfWeek</a>: <i>Integer</i>
</pre>

## Properties

#### Type

Specify the types of restriction.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>daily_restriction</code> | <code>weekly_restriction</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DurationSeconds

The duration of the restriction in seconds.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### StartTimeOfDay

The start time in HH:mm:ss format.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### StartDayOfWeek

Only required for use with a weekly_restriction restriction type. The first day of the weekly rotation schedule as ISO 8601 day (1 is Monday, etc.)

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

