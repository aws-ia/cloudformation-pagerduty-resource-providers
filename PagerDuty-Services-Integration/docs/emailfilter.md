# PagerDuty::Services::Integration EmailFilter

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#subjectmode" title="SubjectMode">SubjectMode</a>" : <i>String</i>,
    "<a href="#subjectregex" title="SubjectRegex">SubjectRegex</a>" : <i>String</i>,
    "<a href="#bodymode" title="BodyMode">BodyMode</a>" : <i>String</i>,
    "<a href="#bodyregex" title="BodyRegex">BodyRegex</a>" : <i>String</i>,
    "<a href="#fromemailmode" title="FromEmailMode">FromEmailMode</a>" : <i>String</i>,
    "<a href="#fromemailregex" title="FromEmailRegex">FromEmailRegex</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#subjectmode" title="SubjectMode">SubjectMode</a>: <i>String</i>
<a href="#subjectregex" title="SubjectRegex">SubjectRegex</a>: <i>String</i>
<a href="#bodymode" title="BodyMode">BodyMode</a>: <i>String</i>
<a href="#bodyregex" title="BodyRegex">BodyRegex</a>: <i>String</i>
<a href="#fromemailmode" title="FromEmailMode">FromEmailMode</a>: <i>String</i>
<a href="#fromemailregex" title="FromEmailRegex">FromEmailRegex</a>: <i>String</i>
</pre>

## Properties

#### SubjectMode

_Required_: No

_Type_: String

_Allowed Values_: <code>match</code> | <code>no-match</code> | <code>always</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SubjectRegex

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BodyMode

_Required_: No

_Type_: String

_Allowed Values_: <code>match</code> | <code>no-match</code> | <code>always</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BodyRegex

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FromEmailMode

_Required_: No

_Type_: String

_Allowed Values_: <code>match</code> | <code>no-match</code> | <code>always</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FromEmailRegex

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

