# PagerDuty::EscalationPolicies::EscalationPolicy

Manage an escalation policy in PagerDuty.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "PagerDuty::EscalationPolicies::EscalationPolicy",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#numloops" title="NumLoops">NumLoops</a>" : <i>Integer</i>,
        "<a href="#oncallhandoffnotifications" title="OnCallHandoffNotifications">OnCallHandoffNotifications</a>" : <i>String</i>,
        "<a href="#escalationrules" title="EscalationRules">EscalationRules</a>" : <i>[ <a href="escalationrule.md">EscalationRule</a>, ... ]</i>,
        "<a href="#teams" title="Teams">Teams</a>" : <i>[ <a href="team.md">Team</a>, ... ]</i>,
    }
}
</pre>

### YAML

<pre>
Type: PagerDuty::EscalationPolicies::EscalationPolicy
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#numloops" title="NumLoops">NumLoops</a>: <i>Integer</i>
    <a href="#oncallhandoffnotifications" title="OnCallHandoffNotifications">OnCallHandoffNotifications</a>: <i>String</i>
    <a href="#escalationrules" title="EscalationRules">EscalationRules</a>: <i>
      - <a href="escalationrule.md">EscalationRule</a></i>
    <a href="#teams" title="Teams">Teams</a>: <i>
      - <a href="team.md">Team</a></i>
</pre>

## Properties

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

#### Teams

Teams associated with the policy. Account must have the teams ability to use this parameter.

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

#### EscalationPolicy

Returns the <code>EscalationPolicy</code> value.

