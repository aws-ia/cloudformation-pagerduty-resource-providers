# PagerDuty::Services::Service AutoPauseNotificationsParameters

Object that defines how alerts on this service are automatically suspended for a period of time before triggering, when identified as likely being transient.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
    "<a href="#timeout" title="Timeout">Timeout</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
<a href="#timeout" title="Timeout">Timeout</a>: <i>Integer</i>
</pre>

## Properties

#### Enabled

Boolean indicating if the Auto Pause Notification is enabled.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Timeout

Number representing the timeout for Auto Pause Notification, valid values are: 120, 180, 300, 600, 900.

_Required_: No

_Type_: Integer

_Allowed Values_: <code>120</code> | <code>180</code> | <code>300</code> | <code>600</code> | <code>900</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

