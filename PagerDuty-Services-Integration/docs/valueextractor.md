# PagerDuty::Services::Integration ValueExtractor

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#part" title="Part">Part</a>" : <i>String</i>,
    "<a href="#valuename" title="ValueName">ValueName</a>" : <i>String</i>,
    "<a href="#regex" title="Regex">Regex</a>" : <i>String</i>,
    "<a href="#startsafter" title="StartsAfter">StartsAfter</a>" : <i>String</i>,
    "<a href="#endsbefore" title="EndsBefore">EndsBefore</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#part" title="Part">Part</a>: <i>String</i>
<a href="#valuename" title="ValueName">ValueName</a>: <i>String</i>
<a href="#regex" title="Regex">Regex</a>: <i>String</i>
<a href="#startsafter" title="StartsAfter">StartsAfter</a>: <i>String</i>
<a href="#endsbefore" title="EndsBefore">EndsBefore</a>: <i>String</i>
</pre>

## Properties

#### Type

_Required_: No

_Type_: String

_Allowed Values_: <code>entire</code> | <code>regex</code> | <code>between</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Part

_Required_: No

_Type_: String

_Allowed Values_: <code>body</code> | <code>subject</code> | <code>from_address</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ValueName

_Required_: No

_Type_: String

_Minimum Length_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Regex

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### StartsAfter

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EndsBefore

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

