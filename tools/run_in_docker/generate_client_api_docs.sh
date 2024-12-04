#!/bin/bash

set -e

echo "Generating the Client Api Docs..."

pip install --upgrade mkdocs mkdocs-gen-files mkdocstrings-python mkdocs-material

mkdir -p /auto_generated/client_api

python3 generate_client_api_pages.py
mkdocs build --clean --no-directory-urls

cp -r site /auto_generated/