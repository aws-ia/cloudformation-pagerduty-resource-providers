#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json > inputs/inputs_1_create.json
cat test/integ-template.yml  > test/integ.yml