# PagerDuty::Schedules::Schedule SubSchedule

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#renderedscheduleentries" title="RenderedScheduleEntries">RenderedScheduleEntries</a>" : <i>[ [ <a href="renderedscheduleentries.md">RenderedScheduleEntries</a>, ... ], ... ]</i>,
    "<a href="#renderedcoveragepercentage" title="RenderedCoveragePercentage">RenderedCoveragePercentage</a>" : <i>Double</i>
}
</pre>

### YAML

<pre>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#renderedscheduleentries" title="RenderedScheduleEntries">RenderedScheduleEntries</a>: <i>
      - 
      - <a href="renderedscheduleentries.md">RenderedScheduleEntries</a></i>
<a href="#renderedcoveragepercentage" title="RenderedCoveragePercentage">RenderedCoveragePercentage</a>: <i>Double</i>
</pre>

## Properties

#### Name

The name of the subschedule

_Required_: Yes

_Type_: String

_Allowed Values_: <code>Final Scheduled</code> | <code>Overrides</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RenderedScheduleEntries

This is a list of entries on the computed layer for the current time range. Since or until must be set in order for this field to be populated.

_Required_: No

_Type_: List of List of <a href="renderedscheduleentries.md">RenderedScheduleEntries</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RenderedCoveragePercentage

The percentage of the time range covered by this layer. Returns null unless since or until are set.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

