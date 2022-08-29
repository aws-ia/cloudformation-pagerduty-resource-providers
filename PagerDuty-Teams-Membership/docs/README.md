# PagerDuty::Teams::Membership

Manage a membership of a user into a team in PagerDuty.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "PagerDuty::Teams::Membership",
    "Properties" : {
        "<a href="#teamid" title="TeamId">TeamId</a>" : <i>String</i>,
        "<a href="#userid" title="UserId">UserId</a>" : <i>String</i>,
        "<a href="#role" title="Role">Role</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: PagerDuty::Teams::Membership
Properties:
    <a href="#teamid" title="TeamId">TeamId</a>: <i>String</i>
    <a href="#userid" title="UserId">UserId</a>: <i>String</i>
    <a href="#role" title="Role">Role</a>: <i>String</i>
</pre>

## Properties

#### TeamId

The ID of the resource.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### UserId

The user ID on the team.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Role

The role of the user on the team.

_Required_: No

_Type_: String

_Allowed Values_: <code>observer</code> | <code>responder</code> | <code>manager</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

