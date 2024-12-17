#!/bin/bash

set -e

echo "Generating the Rest Api Docs..."
/usr/bin/env python3 generate_rest_api_docs.py > /auto_generated/rest_api_doc_spec.yaml
