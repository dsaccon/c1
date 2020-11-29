#!/bin/bash
# will do a release to ECS
# and update the corresponding load balancer code

TARGET_ARN="arn:aws:elasticloadbalancing:us-east-2:154389458697:targetgroup/c1-backend/e8ed67fdf76b269c"
ECR_PATH="154389458697.dkr.ecr.us-east-2.amazonaws.com/c1_backend"
WEBNAME="c1_backend"
CONTAINER_NAME="c1_backend"
CLUSTER="c1-prod"

# load aws keys
source awskeys.sh

# this brings up the cluster configuration
ecs-cli configure --cluster "$CLUSTER" \
  --region us-east-2 \
  --config-name c1

aws ecr get-login --no-include-email | bash
cd c1_backend
docker build -t $WEBNAME .
docker tag $WEBNAME:latest $ECR_PATH:latest
docker push $ECR_PATH:latest
cd ..

# push deployment out to ECR
ecs-cli push $WEBNAME

# deploys the task, links to ELB and so on
ecs-cli compose --file prod_config/backend.yml \
  --project-name "$CLUSTER" \
  --ecs-params prod_config/backend.ecs-params.yml \
  --region us-east-2 \
  --cluster "$CLUSTER" \
  service up \
  --create-log-groups \
  --target-group-arn $TARGET_ARN \
  --container-name $CONTAINER_NAME \
  --container-port 80 \
  --force-deployment
