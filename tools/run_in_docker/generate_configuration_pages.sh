#!/bin/bash

set -e

echo "Dynamically generating pages for configuration_parameters.mdx..."

/usr/bin/env python3 generate_configuration_pages.py > /auto_generated/rse-attributes.mdx