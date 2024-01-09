# PagerDuty::Schedules::Schedule

Manage a on-call schedule in PagerDuty

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "PagerDuty::Schedules::Schedule",
    "Properties" : {
        "<a href="#schedulelayers" title="ScheduleLayers">ScheduleLayers</a>" : <i>[ <a href="schedulelayer.md">ScheduleLayer</a>, ... ]</i>,
        "<a href="#timezone" title="TimeZone">TimeZone</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#finalschedule" title="FinalSchedule">FinalSchedule</a>" : <i><a href="subschedule.md">SubSchedule</a></i>,
        "<a href="#overridessubschedule" title="OverridesSubschedule">OverridesSubschedule</a>" : <i><a href="subschedule.md">SubSchedule</a></i>,
        "<a href="#users" title="Users">Users</a>" : <i>[ <a href="userwrapper.md">UserWrapper</a>, ... ]</i>,
        "<a href="#teams" title="Teams">Teams</a>" : <i>[ <a href="team.md">Team</a>, ... ]</i>
    }
}
</pre>

### YAML

<pre>
Type: PagerDuty::Schedules::Schedule
Properties:
    <a href="#schedulelayers" title="ScheduleLayers">ScheduleLayers</a>: <i>
      - <a href="schedulelayer.md">ScheduleLayer</a></i>
    <a href="#timezone" title="TimeZone">TimeZone</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#finalschedule" title="FinalSchedule">FinalSchedule</a>: <i><a href="subschedule.md">SubSchedule</a></i>
    <a href="#overridessubschedule" title="OverridesSubschedule">OverridesSubschedule</a>: <i><a href="subschedule.md">SubSchedule</a></i>
    <a href="#users" title="Users">Users</a>: <i>
      - <a href="userwrapper.md">UserWrapper</a></i>
    <a href="#teams" title="Teams">Teams</a>: <i>
      - <a href="team.md">Team</a></i>
</pre>

## Properties

#### ScheduleLayers

A list of schedule layers.

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

#### Users

_Required_: No

_Type_: List of <a href="userwrapper.md">UserWrapper</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Teams

An array of all of the teams on the schedule.

_Required_: No

_Type_: List of <a href="team.md">Team</a>

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

#### Type

The type of object being created.

#### HtmlUrl

A URL at which the entity is uniquely displayed in the Web app.

#### Self

The API show URL at which the object is accessible

#### Users

Returns the <code>Users</code> value.

#### Id

Returns the <code>Id</code> value.

#### Start

Returns the <code>Start</code> value.

#### Id

Returns the <code>Id</code> value.

#### Self

Returns the <code>Self</code> value.

#### Summary

Returns the <code>Summary</code> value.

#### HtmlUrl

Returns the <code>HtmlUrl</code> value.

#### Summary

Returns the <code>Summary</code> value.

#### Self

Returns the <code>Self</code> value.

#### HtmlUrl

Returns the <code>HtmlUrl</code> value.

