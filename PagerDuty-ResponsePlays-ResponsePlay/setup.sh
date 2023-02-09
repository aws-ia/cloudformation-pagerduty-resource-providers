#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json | sed "s/PAGER_DUTY_TEAM_ID/${PAGER_DUTY_TEAM_ID}/g" | sed "s/PAGER_DUTY_USER_ID/${PAGER_DUTY_USER_ID}/g" | sed "s/PAGER_DUTY_FROM_EMAIL/${PAGER_DUTY_FROM_EMAIL}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_update.json | sed "s/PAGER_DUTY_TEAM_ID/${PAGER_DUTY_TEAM_ID}/g" | sed "s/PAGER_DUTY_USER_ID/${PAGER_DUTY_USER_ID}/g" | sed "s/PAGER_DUTY_FROM_EMAIL/${PAGER_DUTY_FROM_EMAIL}/g"> inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/PAGER_DUTY_TEAM_ID/${PAGER_DUTY_TEAM_ID}/g" | sed "s/PAGER_DUTY_USER_ID/${PAGER_DUTY_USER_ID}/g" | sed "s/PAGER_DUTY_FROM_EMAIL/${PAGER_DUTY_FROM_EMAIL}/g" > test/integ.yml