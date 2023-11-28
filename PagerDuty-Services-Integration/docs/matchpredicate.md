# PagerDuty::Services::Integration MatchPredicate

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#matcher" title="Matcher">Matcher</a>" : <i>String</i>,
    "<a href="#part" title="Part">Part</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#matcher" title="Matcher">Matcher</a>: <i>String</i>
<a href="#part" title="Part">Part</a>: <i>String</i>
</pre>

## Properties

#### Type

_Required_: No

_Type_: String

_Allowed Values_: <code>all</code> | <code>any</code> | <code>not</code> | <code>contains</code> | <code>exactly</code> | <code>regex</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Matcher

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Part

_Required_: No

_Type_: String

_Allowed Values_: <code>body</code> | <code>subject</code> | <code>from_address</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

