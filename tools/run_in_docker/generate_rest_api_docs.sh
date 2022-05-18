#!/bin/bash

set -e

echo "Generating the Rest Api Docs..."
rucio/tools/generate_rest_api_doc.py > /auto_generated/rest_api_doc_spec.yaml
