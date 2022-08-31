# PagerDuty::Teams::Team

Manage a team in PagerDuty.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "PagerDuty::Teams::Team",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#parent" title="Parent">Parent</a>" : <i><a href="parent.md">Parent</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: PagerDuty::Teams::Team
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#parent" title="Parent">Parent</a>: <i><a href="parent.md">Parent</a></i>
</pre>

## Properties

#### Name

The name of the team.

_Required_: Yes

_Type_: String

_Minimum_: <code>1</code>

_Maximum_: <code>100</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

The description of the team.

_Required_: No

_Type_: String

_Minimum_: <code>1</code>

_Maximum_: <code>1024</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Parent

_Required_: No

_Type_: <a href="parent.md">Parent</a>

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

