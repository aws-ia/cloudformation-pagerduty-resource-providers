# PagerDuty::Schedules::Schedule

This resource type manages a [PagerDuty Schedule][1]

[Documentation][2]

## Prerequisites
* [AWS Account][3]
* [AWS CLI][4]
* [PagerDuty account][5] and [API key][6]
## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][7] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "PagerDuty::Schedules::Schedule" prefix.

Note: All official  PagerDuty resources begin with `PagerDuty::` and specify that they are `Published by PagerDuty`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
- Extension name
- Execution role ARN
- Automatic updates for minor version releases
- Configuration

6. In your terminal, specify the configuration data for the registered PagerDuty CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:


For example:

  ```Bash
  $ aws cloudformation set-type-configuration \
  --region us-west-2 --type RESOURCE \
  --type-name PagerDuty::Users::User \
  --configuration-alias default \
  --configuration "{ \"PagerDutyAccess\":{\"Token\":\"YOURAPIKEY\"}}"
  ```

7. After you have your resource configured, [create your AWS stack][8] that includes any of the activated PagerDuty resources.

For more information about available commands and workflows, see the official [AWS documentation][9].

## Supported regions

The PagerDuty CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples


### Shows how to set Schedule in PagerDuty.
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Schedule in PagerDuty
Resources:
  SampleSchedule:
    Type: PagerDuty::Schedules::Schedule
    Properties:
      Name: TestSchedule
      Description: Description for TestSchedule
      TimeZone: Europe/London
      ScheduleLayers:
        - Name: Night Shift
          Start: 2023-11-06T20:00:00+00:00
          End: 2024-11-06T20:00:00+00:00
          RotationVirtualStart: 2015-11-06T20:00:00+00:00
          RotationTurnLengthSeconds: 86400
          Users:
            - Id: 123456
              Type: user_reference
          Restrictions:
            - Type: daily_restriction
              StartTimeOfDay: 08:00:00
              DurationSeconds: 32400
              StartDayOfWeek: 1
      Teams:
        - Id: 654321
          Type: team_reference
```
[1]: https://support.pagerduty.com/docs/schedule-basics
[2]: ./docs/README.md
[3]: https://aws.amazon.com/account/
[4]: https://aws.amazon.com/cli/
[5]: https://www.pagerduty.com/
[6]: https://support.pagerduty.com/docs/api-access-keys
[7]: https://aws.amazon.com/console/
[8]: https://console.aws.amazon.com/cloudformation/home
[9]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html


