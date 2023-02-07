"Get the Fastly secret from secrets manager and write it to ~/.cfn-cli/typeConfiguration.json. .rpdk-config files indicates what type configuration the contract tests are looking for"

import boto3
import base64
import os
import pathlib
from botocore.exceptions import ClientError

def get_secret():
    "Get the secret from secrets manager"

    secret_name = "pagerduty-type-configuration"
    region_name = os.environ['AWS_REGION']
    session = boto3.session.Session()
    client = session.client(
        service_name="secretsmanager",
        region_name=region_name
    )
    get_secret_value_response = client.get_secret_value(
        SecretId=secret_name
    )
    secret = get_secret_value_response["SecretString"]
    home_dir = pathlib.Path.home()
    config_dir = os.path.join(home_dir, ".cfn-cli")

    if not os.path.exists(config_dir):
        os.makedirs(config_dir)

    full_path = os.path.join(config_dir, "typeConfiguration.json")
    with open(full_path, "w") as f:
        f.write(secret)

    print(full_path)


if __name__ == "__main__":
    get_secret()

