# PagerDuty::Services::Service

Manage a Service in PagerDuty.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "PagerDuty::Services::Service",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#autoresolvetimeout" title="AutoResolveTimeout">AutoResolveTimeout</a>" : <i>Integer</i>,
        "<a href="#acknowledgementtimeout" title="AcknowledgementTimeout">AcknowledgementTimeout</a>" : <i>Integer</i>,
        "<a href="#status" title="Status">Status</a>" : <i>String</i>,
        "<a href="#escalationpolicyid" title="EscalationPolicyId">EscalationPolicyId</a>" : <i>String</i>,
        "<a href="#incidenturgencyrule" title="IncidentUrgencyRule">IncidentUrgencyRule</a>" : <i><a href="incidenturgencyrule.md">IncidentUrgencyRule</a></i>,
        "<a href="#supporthours" title="SupportHours">SupportHours</a>" : <i><a href="supporthours.md">SupportHours</a></i>,
        "<a href="#scheduledactions" title="ScheduledActions">ScheduledActions</a>" : <i>[ String, ... ]</i>,
        "<a href="#alertcreation" title="AlertCreation">AlertCreation</a>" : <i>String</i>,
        "<a href="#alertgroupingparameters" title="AlertGroupingParameters">AlertGroupingParameters</a>" : <i><a href="alertgroupingparameters.md">AlertGroupingParameters</a></i>,
        "<a href="#autopausenotificationsparameters" title="AutoPauseNotificationsParameters">AutoPauseNotificationsParameters</a>" : <i><a href="autopausenotificationsparameters.md">AutoPauseNotificationsParameters</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: PagerDuty::Services::Service
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#autoresolvetimeout" title="AutoResolveTimeout">AutoResolveTimeout</a>: <i>Integer</i>
    <a href="#acknowledgementtimeout" title="AcknowledgementTimeout">AcknowledgementTimeout</a>: <i>Integer</i>
    <a href="#status" title="Status">Status</a>: <i>String</i>
    <a href="#escalationpolicyid" title="EscalationPolicyId">EscalationPolicyId</a>: <i>String</i>
    <a href="#incidenturgencyrule" title="IncidentUrgencyRule">IncidentUrgencyRule</a>: <i><a href="incidenturgencyrule.md">IncidentUrgencyRule</a></i>
    <a href="#supporthours" title="SupportHours">SupportHours</a>: <i><a href="supporthours.md">SupportHours</a></i>
    <a href="#scheduledactions" title="ScheduledActions">ScheduledActions</a>: <i>
      - String</i>
    <a href="#alertcreation" title="AlertCreation">AlertCreation</a>: <i>String</i>
    <a href="#alertgroupingparameters" title="AlertGroupingParameters">AlertGroupingParameters</a>: <i><a href="alertgroupingparameters.md">AlertGroupingParameters</a></i>
    <a href="#autopausenotificationsparameters" title="AutoPauseNotificationsParameters">AutoPauseNotificationsParameters</a>: <i><a href="autopausenotificationsparameters.md">AutoPauseNotificationsParameters</a></i>
</pre>

## Properties

#### Name

The name of the service.

_Required_: Yes

_Type_: String

_Minimum Length_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

The user-provided description of the service.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutoResolveTimeout

A number that determines time in seconds that an incident is automatically resolved if left open for that long.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AcknowledgementTimeout

A number that determines time in seconds that an incident changes to the Triggered State after being Acknowledged.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Status

A string that represent the current state of the Service, allowed values are: active, warning, critical, maintenance, disabled.

_Required_: No

_Type_: String

_Allowed Values_: <code>active</code> | <code>warning</code> | <code>critical</code> | <code>maintenance</code> | <code>disabled</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EscalationPolicyId

The ID of the Escalation Policy.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IncidentUrgencyRule

Object representing the Incident Urgency Rule.

_Required_: No

_Type_: <a href="incidenturgencyrule.md">IncidentUrgencyRule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SupportHours

Object representing Support Hours.

_Required_: No

_Type_: <a href="supporthours.md">SupportHours</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ScheduledActions

The list of scheduled actions for the service.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AlertCreation

String representing whether a service creates only incidents, or both alerts and incidents.

_Required_: No

_Type_: String

_Allowed Values_: <code>create_incidents</code> | <code>create_alerts_and_incidents</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AlertGroupingParameters

Object that defines how alerts on this service will be automatically grouped into incidents.

_Required_: No

_Type_: <a href="alertgroupingparameters.md">AlertGroupingParameters</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutoPauseNotificationsParameters

Object that defines how alerts on this service are automatically suspended for a period of time before triggering, when identified as likely being transient.

_Required_: No

_Type_: <a href="autopausenotificationsparameters.md">AutoPauseNotificationsParameters</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The ID of the service.

#### Summary

A short-form, server-generated string that provides succinct, important information about an object suitable for primary labeling of an entity in a client. In many cases, this will be identical to name, though it is not intended to be an identifier.

#### HtmlUrl

A URL at which the entity is uniquely displayed in the Web app.

#### Teams

The array storing teams associated with the service.

#### Integrations

The array storing integrations associated with the service.

#### Self

String showing the URL at which the object is accessible.

#### Type

A string that determines the schema of the object, value must be: service.

