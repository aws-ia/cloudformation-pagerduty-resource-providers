# PagerDuty::EscalationPolicies::EscalationPolicy EscalationRules

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#escalationdelayinminutes" title="EscalationDelayInMinutes">EscalationDelayInMinutes</a>" : <i>Integer</i>,
    "<a href="#targets" title="Targets">Targets</a>" : <i>[ Map, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#escalationdelayinminutes" title="EscalationDelayInMinutes">EscalationDelayInMinutes</a>: <i>Integer</i>
<a href="#targets" title="Targets">Targets</a>: <i>
      - Map</i>
</pre>

## Properties

#### Id

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EscalationDelayInMinutes

The number of minutes before an unacknowledged incident escalates away from this rule.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Targets

The targets an incident should be assigned to upon reaching this rule.

_Required_: Yes

_Type_: List of Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

