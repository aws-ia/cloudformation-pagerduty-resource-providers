# PagerDuty::Users::User User

 A PagerDuty user

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#summary" title="Summary">Summary</a>" : <i>String</i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>" : <i>String</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#email" title="Email">Email</a>" : <i>String</i>,
    "<a href="#timezone" title="TimeZone">TimeZone</a>" : <i>String</i>,
    "<a href="#color" title="Color">Color</a>" : <i>String</i>,
    "<a href="#role" title="Role">Role</a>" : <i>String</i>,
    "<a href="#avatarurl" title="AvatarUrl">AvatarUrl</a>" : <i>String</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#invitationsent" title="InvitationSent">InvitationSent</a>" : <i>Boolean</i>,
    "<a href="#jobtitle" title="JobTitle">JobTitle</a>" : <i>String</i>,
    "<a href="#teams" title="Teams">Teams</a>" : <i>[ <a href="team.md">Team</a>, ... ]</i>,
    "<a href="#contactmethods" title="ContactMethods">ContactMethods</a>" : <i>[ <a href="contactmethod.md">ContactMethod</a>, ... ]</i>,
    "<a href="#notificationrules" title="NotificationRules">NotificationRules</a>" : <i>[ <a href="notificationrule.md">NotificationRule</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#summary" title="Summary">Summary</a>: <i>String</i>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#htmlurl" title="HtmlUrl">HtmlUrl</a>: <i>String</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#email" title="Email">Email</a>: <i>String</i>
<a href="#timezone" title="TimeZone">TimeZone</a>: <i>String</i>
<a href="#color" title="Color">Color</a>: <i>String</i>
<a href="#role" title="Role">Role</a>: <i>String</i>
<a href="#avatarurl" title="AvatarUrl">AvatarUrl</a>: <i>String</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#invitationsent" title="InvitationSent">InvitationSent</a>: <i>Boolean</i>
<a href="#jobtitle" title="JobTitle">JobTitle</a>: <i>String</i>
<a href="#teams" title="Teams">Teams</a>: <i>
      - <a href="team.md">Team</a></i>
<a href="#contactmethods" title="ContactMethods">ContactMethods</a>: <i>
      - <a href="contactmethod.md">ContactMethod</a></i>
<a href="#notificationrules" title="NotificationRules">NotificationRules</a>: <i>
      - <a href="notificationrule.md">NotificationRule</a></i>
</pre>

## Properties

#### Id

The ID of the user

_Required_: No

_Type_: String

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

_Allowed Values_: <code>user</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### HtmlUrl

A URL at which the entity is uniquely displayed in the Web app

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the user.

_Required_: Yes

_Type_: String

_Minimum_: <code>1</code>

_Maximum_: <code>100</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Email

The user's email address.

_Required_: Yes

_Type_: String

_Minimum_: <code>6</code>

_Maximum_: <code>100</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TimeZone

The preferred time zone name. If null, the account's time zone will be used.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Color

The schedule color.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Role

The user role. Account must have the read_only_users ability to set a user as a read_only_user or a read_only_limited_user, and must have advanced permissions abilities to set a user as observer or restricted_access.

_Required_: No

_Type_: String

_Allowed Values_: <code>admin</code> | <code>limited_user</code> | <code>observer</code> | <code>owner</code> | <code>read_only_user</code> | <code>restricted_access</code> | <code>read_only_limited_user</code> | <code>user</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AvatarUrl

The URL of the user's avatar.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

The user's bio.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### InvitationSent

If true, the user has an outstanding invitation.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### JobTitle

The user's title.

_Required_: No

_Type_: String

_Minimum_: <code>1</code>

_Maximum_: <code>100</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Teams

The list of teams to which the user belongs. Account must have the teams ability to set this.

_Required_: No

_Type_: List of <a href="team.md">Team</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ContactMethods

The list of contact methods for the user.

_Required_: No

_Type_: List of <a href="contactmethod.md">ContactMethod</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NotificationRules

The list of notification rules for the user.

_Required_: No

_Type_: List of <a href="notificationrule.md">NotificationRule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

