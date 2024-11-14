#!/bin/bash

set -e

echo "Generating the Client Api Docs..."

#pip install --upgrade "pydoc-markdown>3" &> /dev/null
pip install --upgrade mkdocs mkdocs-gen-files mkdocstrings-python mkdocs-material

mkdir -p /auto_generated/client_api

mkdocs build --clean --no-directory-urls

cp -r site /auto_generated/