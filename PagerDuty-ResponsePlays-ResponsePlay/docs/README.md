# PagerDuty::ResponsePlays::ResponsePlay

Manage a response play in PagerDuty

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "PagerDuty::ResponsePlays::ResponsePlay",
    "Properties" : {
        "<a href="#from" title="From">From</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#team" title="Team">Team</a>" : <i><a href="team.md">Team</a>, Map</i>,
        "<a href="#subscribers" title="Subscribers">Subscribers</a>" : <i>[ <a href="subscriber.md">Subscriber</a>, ... ]</i>,
        "<a href="#subscribersmessage" title="SubscribersMessage">SubscribersMessage</a>" : <i>String</i>,
        "<a href="#responders" title="Responders">Responders</a>" : <i>[ <a href="responder.md">Responder</a>, ... ]</i>,
        "<a href="#respondersmessage" title="RespondersMessage">RespondersMessage</a>" : <i>String</i>,
        "<a href="#runnability" title="Runnability">Runnability</a>" : <i>String</i>,
        "<a href="#conferencenumber" title="ConferenceNumber">ConferenceNumber</a>" : <i>String</i>,
        "<a href="#conferenceurl" title="ConferenceUrl">ConferenceUrl</a>" : <i>String</i>,
        "<a href="#conferencetype" title="ConferenceType">ConferenceType</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: PagerDuty::ResponsePlays::ResponsePlay
Properties:
    <a href="#from" title="From">From</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#team" title="Team">Team</a>: <i><a href="team.md">Team</a>, Map</i>
    <a href="#subscribers" title="Subscribers">Subscribers</a>: <i>
      - <a href="subscriber.md">Subscriber</a></i>
    <a href="#subscribersmessage" title="SubscribersMessage">SubscribersMessage</a>: <i>String</i>
    <a href="#responders" title="Responders">Responders</a>: <i>
      - <a href="responder.md">Responder</a></i>
    <a href="#respondersmessage" title="RespondersMessage">RespondersMessage</a>: <i>String</i>
    <a href="#runnability" title="Runnability">Runnability</a>: <i>String</i>
    <a href="#conferencenumber" title="ConferenceNumber">ConferenceNumber</a>: <i>String</i>
    <a href="#conferenceurl" title="ConferenceUrl">ConferenceUrl</a>: <i>String</i>
    <a href="#conferencetype" title="ConferenceType">ConferenceType</a>: <i>String</i>
</pre>

## Properties

#### From

The email address of a valid user associated with the account making the request.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the response play.

_Required_: No

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

The description of the response play.

_Required_: No

_Type_: String

_Maximum_: <code>349</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Team

_Required_: No

_Type_: <a href="team.md">Team</a>, Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Subscribers

_Required_: No

_Type_: List of <a href="subscriber.md">Subscriber</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SubscribersMessage

The content of the notification that will be sent to all incident subscribers upon the running of this response play. Note that this includes any users who may have already been subscribed to the incident prior to the running of this response play. If empty, no notifications will be sent.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Responders

_Required_: No

_Type_: List of <a href="responder.md">Responder</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RespondersMessage

The content of the notification that will be sent to all incident subscribers upon the running of this response play. Note that this includes any users who may have already been subscribed to the incident prior to the running of this response play. If empty, no notifications will be sent.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Runnability

String representing how this response play is allowed to be run. Valid options are:

    services: This response play cannot be manually run by any users. It will run automatically for new incidents triggered on any services that are configured with this response play.
    teams: This response play can be run manually on an incident only by members of its configured team. This option can only be selected when the team property for this response play is not empty.
    responders: This response play can be run manually on an incident by any responders in this account.

_Required_: No

_Type_: String

_Allowed Values_: <code>services</code> | <code>teams</code> | <code>responders</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ConferenceNumber

The telephone number that will be set as the conference number for any incident on which this response play is run.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ConferenceUrl

The URL that will be set as the conference URL for any incident on which this response play is run.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ConferenceType

This field has three possible values and indicates how the response play was created.

    none : The response play had no conference_number or conference_url set at time of creation.
    manual : The response play had one or both of conference_number and conference_url set at time of creation.
    zoom : Customers with the Zoom-Integration Entitelment can use this value to dynamicly configure conference number and url for zoom

_Required_: No

_Type_: String

_Allowed Values_: <code>none</code> | <code>manual</code> | <code>zoom</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Returns the <code>Id</code> value.

#### ResponsePlay

Returns the <code>ResponsePlay</code> value.

