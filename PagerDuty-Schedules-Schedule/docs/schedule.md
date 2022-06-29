# PagerDuty::Schedules::Schedule Schedule

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#summary" title="Summary">Summary</a>" : <i>String</i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>" : <i>String</i>,
    "<a href="#schedulelayers" title="ScheduleLayers">ScheduleLayers</a>" : <i>[ <a href="schedulelayer.md">ScheduleLayer</a>, ... ]</i>,
    "<a href="#timezone" title="TimeZone">TimeZone</a>" : <i>String</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#finalschedule" title="FinalSchedule">FinalSchedule</a>" : <i><a href="subschedule.md">SubSchedule</a></i>,
    "<a href="#overridessubschedule" title="OverridesSubschedule">OverridesSubschedule</a>" : <i><a href="subschedule.md">SubSchedule</a></i>,
    "<a href="#escalationpolicies" title="EscalationPolicies">EscalationPolicies</a>" : <i>[ <a href="escalationpolicy.md">EscalationPolicy</a>, ... ]</i>,
    "<a href="#teams" title="Teams">Teams</a>" : <i>[ <a href="team.md">Team</a>, ... ]</i>,
    "<a href="#users" title="Users">Users</a>" : <i>[ <a href="userwrapper.md">UserWrapper</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#summary" title="Summary">Summary</a>: <i>String</i>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>: <i>String</i>
<a href="#schedulelayers" title="ScheduleLayers">ScheduleLayers</a>: <i>
      - <a href="schedulelayer.md">ScheduleLayer</a></i>
<a href="#timezone" title="TimeZone">TimeZone</a>: <i>String</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#finalschedule" title="FinalSchedule">FinalSchedule</a>: <i><a href="subschedule.md">SubSchedule</a></i>
<a href="#overridessubschedule" title="OverridesSubschedule">OverridesSubschedule</a>: <i><a href="subschedule.md">SubSchedule</a></i>
<a href="#escalationpolicies" title="EscalationPolicies">EscalationPolicies</a>: <i>
      - <a href="escalationpolicy.md">EscalationPolicy</a></i>
<a href="#teams" title="Teams">Teams</a>: <i>
      - <a href="team.md">Team</a></i>
<a href="#users" title="Users">Users</a>: <i>
      - <a href="userwrapper.md">UserWrapper</a></i>
</pre>

## Properties

#### Id

_Required_: No

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Summary

A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to name, though it is not intended to be an identifier.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

The type of object being created.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>schedule</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### HtmlUrl

A URL at which the entity is uniquely displayed in the Web app.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ScheduleLayers

_Required_: No

_Type_: List of <a href="schedulelayer.md">ScheduleLayer</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TimeZone

The time zone of the schedule.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the schedule.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

The description of the schedule

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FinalSchedule

_Required_: No

_Type_: <a href="subschedule.md">SubSchedule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OverridesSubschedule

_Required_: No

_Type_: <a href="subschedule.md">SubSchedule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EscalationPolicies

An array of all of the escalation policies that uses this schedule.

_Required_: No

_Type_: List of <a href="escalationpolicy.md">EscalationPolicy</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Teams

An array of all of the teams on the schedule.

_Required_: No

_Type_: List of <a href="team.md">Team</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Users

_Required_: No

_Type_: List of <a href="userwrapper.md">UserWrapper</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

