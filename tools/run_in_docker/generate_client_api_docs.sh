#!/bin/bash

set -e

echo "Generating the Client Api Docs..."

yq e -i '.docs_dir = "/auto_generated/client_api"' mkdocs.yml
yq e -i '.site_name = "Rucio Python Client Documentation"' mkdocs.yml
yq -i '.plugins[2].mkdocstrings.handlers.python.options.docstring_style = "numpy"' mkdocs.yml

pip install --upgrade mkdocs mkdocs-gen-files mkdocstrings-python mkdocs-material
mkdir -p /auto_generated/client_api

python3 generate_client_api_pages.py
mkdocs build --clean --no-directory-urls --config-file mkdocs.yml --site-dir client_api

cp -r client_api /auto_generated/
