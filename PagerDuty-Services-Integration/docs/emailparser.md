# PagerDuty::Services::Integration EmailParser

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#action" title="Action">Action</a>" : <i>String</i>,
    "<a href="#matchpredicate" title="MatchPredicate">MatchPredicate</a>" : <i><a href="emailparser.md">EmailParser</a></i>,
    "<a href="#valueextractors" title="ValueExtractors">ValueExtractors</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#action" title="Action">Action</a>: <i>String</i>
<a href="#matchpredicate" title="MatchPredicate">MatchPredicate</a>: <i><a href="emailparser.md">EmailParser</a></i>
<a href="#valueextractors" title="ValueExtractors">ValueExtractors</a>: <i>String</i>
</pre>

## Properties

#### Action

_Required_: No

_Type_: String

_Allowed Values_: <code>trigger</code> | <code>resolve</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MatchPredicate

_Required_: No

_Type_: <a href="emailparser.md">EmailParser</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ValueExtractors

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

