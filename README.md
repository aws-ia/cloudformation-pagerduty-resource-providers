# PagerDuty CloudFormation Resource Types

This collection of [AWS CloudFormation resource types][1] allow PagerDuty to be controlled using [AWS CloudFormation][2].

| Resource                                        | Description                                                                | Documentation                                       |
|-------------------------------------------------|----------------------------------------------------------------------------|-----------------------------------------------------|
| PagerDuty::EscalationPolicies::EscalationPolicy | This resource type manages a [PagerDuty EscalationPolicy][3]               | [/PagerDuty-EscalationPolicies-EscalationPolicy][4] |
| PagerDuty::Users::User                          | This resource type manages a [PagerDuty User][5]                           | [/PagerDuty-Users-User][6]                          |
| PagerDuty::Teams::Team                          | This resource type manages a [PagerDuty Team][7]                           | [/PagerDuty-Teams-Team][8]                          |
| PagerDuty::Teams::Membership                    | This resource type manages a [PagerDuty membership of a User in a Team][7] | [/PagerDuty-Teams-Membership][9]                    |
| PagerDuty::Schedules::Schedule                  | This resource type manages a [PagerDuty Schedule ][10]                     | [/PagerDuty-Schedules-Schedule][11]                 |
| PagerDuty::ResponsePlays::ResponsePlay          | This resource type manages a [PagerDuty ResponsePlay ][12]                 | [/PagerDuty-ResponsePlays-ResponsePlay][13]         |
| PagerDuty::Services::Service                    | This resource type manages a [PagerDuty Service ][14]                      | [/PagerDuty-Services-Service][15]                   |
| PagerDuty::Services::Integration                | This resource type manages a [PagerDuty Integration ][14]                  | [/PagerDuty-Services-Integration][16]               |

## Prerequisites
* [AWS Account][19]
* [AWS CLI][20]
* [PagerDuty account][21] and [API key][22]
## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][23] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "PagerDuty" prefix.

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

7. After you have your resource configured, [create your AWS stack][17] that includes any of the activated PagerDuty resources.

For more information about available commands and workflows, see the official [AWS documentation][18].

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

### EscalationPolicy example using the Cloudformation PagerDuty resources
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create an EscalationPolicy in PagerDuty
Resources:
  SampleEscalationPolicy:
    Type: PagerDuty::EscalationPolicies::EscalationPolicy
    Properties:
      NumLoops: 5
      Name: TestEscalationPolicy
      Teams: 
        - Id: 123456
          Type: team_reference
      EscalationRules: 
        - EscalationDelayInMinutes: 30
        - Targets:
            - Id: 654321
              Type: user_reference
```

### User example using the Cloudformation PagerDuty resources
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a User in PagerDuty
Resources:
  SampleUser:
    Type: PagerDuty::Users::User
    Properties:
      Name: TestUser
      Email: user@test.com
      Color: green
      TimeZone: Europe/London
      Role: user
```

### Shows how to create a Team in PagerDuty
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create an Team in PagerDuty
Resources:
  SampleTeam:
    Type: PagerDuty::Teams::Team
    Properties:
      Name: TestTeam
      Description: Description for TestTeam
```

### Shows how to set User as a Team member in PagerDuty.
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to set User as a Team member in PagerDuty.
Resources:
  SampleTeam:
    Type: PagerDuty::Teams::Membership
    Properties:
      TeamId: 123456
      UserId: 654321
```

### Shows how to create a Schedule in PagerDuty
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

### Shows how to create a ResponsePlay in PagerDuty.
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to set User as a Team member in PagerDuty.
Resources:
  SampleTeam:
    Type: PagerDuty::ResponsePlays::ResponsePlay
    Properties:
      FromEmail: email@example.com
      Name: CFN_TEST_RESPONSE
      Description: Test Response
      RespondersMessage: Res Message
      Runnability: responders
      Responders:
        - Id: 123456
          Type: user_reference
      ConferenceNumber: 5555555555
      ConferenceUrl: http://example.example.com
      ConferenceType: manual
```

### Shows how to create a Service in PagerDuty with Cloudformation resource.
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Service in PagerDuty
Resources:
  SampleService:
    Type: PagerDuty::Services::Service
    Properties:
      Name: Test Service
      Description: Service Description
      AutoResolveTimeout: 14400
      AcknowledgementTimeout: 1800
      Status: active
      EscalationPolicyId: PVGTVOM
      IncidentUrgencyRule:
        Type: use_support_hours,
        DuringSupportHours:
          Type: constant
          Urgency: high
        OutsideSupportHours:
          Type: constant
          Urgency: low
    SupportHours:
      Type: fixed_time_per_day
      TimeZone: America/Lima
      StartTime: 09:00:00
      EndTime: 17:00:00
      DaysOfWeek: [1,2,3,4,5]
    ScheduledActions:
      - support_hours_start
    AlertCreation: create_alerts_and_incidents
    AlertGroupingParameters:
      Type: time
      Config:
        Timeout: 921
    AutoPauseNotificationsParameters:
      Enabled: true
      Timeout: 300
```


### Shows how to create a Integration in PagerDuty with Cloudformation resource.
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create an Integration (AWS Cloudwatch) in PagerDuty
Resources:
  SampleService:
    Type: PagerDuty::Services::Integration
    Properties:
      Name: Test Integration for Service
      Type: event_transformer_api_inbound_integration
      ServiceId: P4KW27I
      VendorId: PZQ6AUS
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://support.pagerduty.com/docs/escalation-policies
[4]: ./PagerDuty-EscalationPolicies-EscalationPolicy/
[5]: https://support.pagerduty.com/docs/users
[6]: ./PagerDuty-Users-User/
[7]: https://support.pagerduty.com/docs/teams
[8]: ./PagerDuty-Teams-Team/
[9]: ./PagerDuty-Teams-Membership/
[10]: https://support.pagerduty.com/docs/schedule-basics
[11]: ./PagerDuty-Schedules-Schedule
[12]: https://support.pagerduty.com/docs/response-plays
[13]: ./PagerDuty-ResponsePlays-ResponsePlay
[14]: https://support.pagerduty.com/docs/services-and-integrations
[15]: ./PagerDuty-Services-Service
[16]: ./PagerDuty-Services-Integration
[17]: https://console.aws.amazon.com/cloudformation/home
[18]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[19]: https://aws.amazon.com/account/
[20]: https://aws.amazon.com/cli/
[21]: https://www.pagerduty.com/
[22]: https://support.pagerduty.com/docs/api-access-keys
[23]: https://aws.amazon.com/console/
