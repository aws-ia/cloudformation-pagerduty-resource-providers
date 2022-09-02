# cloudformation-PagerDuty

## Set up local type configuration

When running contract or SAM tests locally, the resources expect the Rollbar token to be available via the type configuration.
Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing
```bash
cat << EOF >> ~/.cfn-cli/typeConfiguration.json
{
  "PagerDutyAccess": {
    "Token": "[pagerDutyAccessToken]"
  }
}
EOF
```

## Set up git filter

This project uses a filter set up in the [.gitattributes](.gitattributes) file to replace private values for testing within the different `overrides.json` on each resource.

The filter has to be added manually inside the `.git/config` file once the repository has been cloned.

Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing

```bash
cat << EOF >> .git/config
[filter "pagerduty"]
  clean = sed \
        -e 's:[pagerDutyAccountEmail]:<PAGER_DUTY_EMAIL>:g' \
        -e 's:[existingPagerDutyTeamId]:<PAGER_DUTY_TEAM>:g' \
        -e 's:[existingPagerDutyUserId]:<PAGER_DUTY_USER>:g' \
        -e 's:[existingPagerDutyEscalationPolicyId]:<PAGER_DUTY_ESCALATION_POLICY>:g'
  smudge = sed \
        -e 's:<PAGER_DUTY_EMAIL>:[pagerDutyAccountEmail]:g' \
        -e 's:<PAGER_DUTY_TEAM>:[existingPagerDutyTeamId]:g' \
        -e 's:<PAGER_DUTY_USER>:[existingPagerDutyUserId]:g' \
        -e 's:<PAGER_DUTY_ESCALATION_POLICY>:[existingPagerDutyEscalationPolicyId]:g'

```