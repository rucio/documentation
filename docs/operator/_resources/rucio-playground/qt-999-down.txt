#!/bin/bash

cd `dirname $0`

docker compose --file etc/docker/dev/docker-compose-qt.yml --profile storage down
docker container prune -f
docker volume prune -f
