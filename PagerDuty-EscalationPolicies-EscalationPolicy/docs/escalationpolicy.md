# PagerDuty::EscalationPolicies::EscalationPolicy EscalationPolicy

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>" : <i>String</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#numloops" title="NumLoops">NumLoops</a>" : <i>Integer</i>,
    "<a href="#oncallhandoffnotifications" title="OnCallHandoffNotifications">OnCallHandoffNotifications</a>" : <i>String</i>,
    "<a href="#escalationrules" title="EscalationRules">EscalationRules</a>" : <i>[ <a href="escalationrule.md">EscalationRule</a>, ... ]</i>,
    "<a href="#services" title="Services">Services</a>" : <i>[ <a href="service.md">Service</a>, ... ]</i>,
    "<a href="#teams" title="Teams">Teams</a>" : <i>[ <a href="team.md">Team</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>: <i>String</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#numloops" title="NumLoops">NumLoops</a>: <i>Integer</i>
<a href="#oncallhandoffnotifications" title="OnCallHandoffNotifications">OnCallHandoffNotifications</a>: <i>String</i>
<a href="#escalationrules" title="EscalationRules">EscalationRules</a>: <i>
      - <a href="escalationrule.md">EscalationRule</a></i>
<a href="#services" title="Services">Services</a>: <i>
      - <a href="service.md">Service</a></i>
<a href="#teams" title="Teams">Teams</a>: <i>
      - <a href="team.md">Team</a></i>
</pre>

## Properties

#### Id

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

The type of object being created.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>escalation_policy</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### HtmlUrl

A URL at which the entity is uniquely displayed in the Web app.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the escalation policy.

_Required_: Yes

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

Escalation policy description.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NumLoops

The number of times the escalation policy will repeat after reaching the end of its escalation.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### OnCallHandoffNotifications

Determines how on call handoff notifications will be sent for users on the escalation policy. Defaults to "if_has_services".

_Required_: No

_Type_: String

_Allowed Values_: <code>if_has_services</code> | <code>always</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EscalationRules

_Required_: Yes

_Type_: List of <a href="escalationrule.md">EscalationRule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Services

_Required_: No

_Type_: List of <a href="service.md">Service</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Teams

_Required_: No

_Type_: List of <a href="team.md">Team</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

