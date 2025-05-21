#!/bin/bash

set -e

echo "Generating dynamic default configuration files..."

python3 $SCRIPT_DIR/run_in_docker/rucio/tools/generate_configuration_settings.py --markdown -o "../auto_generated/_rucio_config_defaults.mdx"