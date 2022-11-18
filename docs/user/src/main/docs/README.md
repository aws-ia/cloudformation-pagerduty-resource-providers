# PagerDuty CloudFormation Resources

This collection of CloudFormation resource types allow PagerDuty to be controlled using AWS CloudFormation.

### Why would I want to do this?

Infrastructure-as-code such as CloudFormation is one of the best ways to create and maintain infrastructure that is reliable and secure. Or a CloudFormation template might just be more convenient for some types of automation.

Here is a sample use case this supports:

* [Set up monitoring of new project](stories/set-up-monitoring-of-new-project)

### How do I get started?

In the AWS CloudFormation UI, find the PagerDuty types in the third-party registry and activate them.
Alternatively follow the [Developer](docs/dev) instructions to install them manually.

You will need to set up a [Type Configuration](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudformation/set-type-configuration.html)
for each of the activated types, containing a PagerDuty **[Access Token](https://support.pagerduty.com/docs/api-access-keys)** in order to reach the PagerDuty API correctly.
It is recommended to set the token into Systems Manager's secure parameter store,
e.g. as `/path/to/pagerduty/token` and then it can be applied any of the PagerDuty types,
e.g. `PagerDuty::EscalationPolicies::EscalationPolicy`, using:

```bash
aws cloudformation set-type-configuration \
--region eu-north-1 \
--type RESOURCE \
--type-name PagerDuty::EscalationPolicies::EscalationPolicy \
--configuration-alias default \
--configuration '{"PagerDutyAccess": {"Token": "{{resolve:ssm-secure:/path/to/pagerduty/token}}"}}'
```

You should then be able to run the example use cases above or build your own using the full reference below.

### What is supported?

This project does not support all the objects nor concepts in PagerDuty.
For many things there just isn't a compelling use case, and of course there are a lot.
We have focussed on those objects and properties which have seemed most useful.
If we missed something, open an issue to let us know, or even better, contribute an extension!

The **Full PagerDuty CloudFormation Resources Reference** is available [here](resources).