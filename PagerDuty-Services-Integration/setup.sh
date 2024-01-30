#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json | sed "s/PAGER_DUTY_SERVICE_ID/${PAGER_DUTY_SERVICE_ID}/g" | sed "s/PAGER_DUTY_VENDOR_ID/${PAGER_DUTY_VENDOR_ID}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_invalid.json | sed "s/PAGER_DUTY_SERVICE_ID/${PAGER_DUTY_SERVICE_ID}/g" | sed "s/PAGER_DUTY_VENDOR_ID/${PAGER_DUTY_VENDOR_ID}/g" > inputs/inputs_1_invalid.json
cat example_inputs/inputs_1_update.json | sed "s/PAGER_DUTY_SERVICE_ID/${PAGER_DUTY_SERVICE_ID}/g" | sed "s/PAGER_DUTY_VENDOR_ID/${PAGER_DUTY_VENDOR_ID}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/PAGER_DUTY_SERVICE_ID/${PAGER_DUTY_SERVICE_ID}/g" | sed "s/PAGER_DUTY_VENDOR_ID/${PAGER_DUTY_VENDOR_ID}/g" > test/integ.yml