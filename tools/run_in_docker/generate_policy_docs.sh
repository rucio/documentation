#!/bin/bash

set -e

function mkdocs_build {
    # Generates the file content for the bin help message.
    #
    # :param $1: name of directory to store new site
    # :param $2: str name of site according to mkdoc.yml
    echo "Generating $2..."
    yq e -i '.docs_dir = "/auto_generated/'$1'"' mkdocs.yml
    yq e -i ".site_name = \"Rucio $2 Documentation\"" mkdocs.yml

    mkdocs build --clean --no-directory-urls --site-dir $1
    cp -r $1 /auto_generated/

}

echo "Setting up for mkdoc site generation..."

pip install --upgrade mkdocs mkdocs-gen-files mkdocstrings-python mkdocs-material
python3 generate_policy_pages.py

mkdocs_build "rse_policies" "RSE Policy"
mkdocs_build "transfer_protocols" "Transfer Protocol"
mkdocs_build "transfer_tools" "TransferTool"
mkdocs_build "did_meta_plugins" "DID Meta Plugin"
