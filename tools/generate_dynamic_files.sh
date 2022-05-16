#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

docker run --rm \
       --volume "$SCRIPT_DIR/run_in_docker:/run_in_docker:rw" \
       --volume "$SCRIPT_DIR/auto_generated:/auto_generated:rw" \
       ghcr.io/rucio/rucio/rucio-autotest:fedora32-python3.8 \
       /bin/bash -c /run_in_docker/generate_docs.sh
