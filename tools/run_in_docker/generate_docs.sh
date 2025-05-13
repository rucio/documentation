#!/bin/bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
wget -qO /usr/local/bin/yq https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64
chmod +x /usr/local/bin/yq

echo "Generating documentation files..."
cd /run_in_docker

if [ ! -d "rucio" ]; then
    echo "The rucio folder does not exist. Creating it..."

    yum install -y git
    git clone --depth=1 https://github.com/rucio/rucio.git
fi

cp rucio/etc/docker/test/extra/rucio_sqlite.cfg /opt/rucio/etc/rucio.cfg

export PYTHONPATH="/run_in_docker/rucio/lib:${PYTHONPATH}"

"$SCRIPT_DIR"/generate_rest_api_docs.sh
"$SCRIPT_DIR"/generate_bin_help_docs.sh
"$SCRIPT_DIR"/generate_client_api_docs.sh
"$SCRIPT_DIR"/generate_policy_docs.sh
