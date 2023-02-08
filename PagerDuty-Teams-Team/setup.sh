#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json > inputs/inputs_1_create.json
cat example_inputs/inputs_1_invalid.json  > inputs/inputs_1_invalid.json
cat example_inputs/inputs_1_update.json  > inputs/inputs_1_update.json
cat test/integ-template.yml  > test/integ.yml