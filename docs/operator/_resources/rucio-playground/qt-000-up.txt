#!/bin/bash

cd `dirname $0`

etc/certs/generate_minio12.sh

docker compose --file etc/docker/dev/docker-compose-qt.yml --profile storage up -d
