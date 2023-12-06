# PagerDuty::Services::Integration RootMatchPredicate

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#children" title="Children">Children</a>" : <i>[ <a href="matchpredicate.md">MatchPredicate</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#children" title="Children">Children</a>: <i>
      - <a href="matchpredicate.md">MatchPredicate</a></i>
</pre>

## Properties

#### Type

_Required_: No

_Type_: String

_Allowed Values_: <code>all</code> | <code>any</code> | <code>not</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Children

_Required_: No

_Type_: List of <a href="matchpredicate.md">MatchPredicate</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

