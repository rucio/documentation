#!/bin/bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
AUTO_GENERATED=$SCRIPT_DIR/auto_generated
DOCS=$SCRIPT_DIR/../docs


"$SCRIPT_DIR"/generate_dynamic_files.sh

# Dynamically determine the primary group of the current user
USER_GROUP=$(id -gn)

# We have to change the ownership of the auto generated files here. Docker
# creates everything with it's own (or root) user account. This is a problem,
# since the current user does not own the files.
sudo chown -R "$USER":"$USER_GROUP" "$AUTO_GENERATED"

echo "Adding code examples to Rest Api Spec file..."
(
    cd "$SCRIPT_DIR"/openapi_examples
    yarn install
)
node "$SCRIPT_DIR"/openapi_examples/generate_api_examples.js "$AUTO_GENERATED"/rest_api_doc_spec.yaml > "$AUTO_GENERATED"/rest_api_doc_spec_tmp.yaml
cp  "$AUTO_GENERATED"/rest_api_doc_spec_tmp.yaml  "$AUTO_GENERATED"/rest_api_doc_spec.yaml
rm "$AUTO_GENERATED"/rest_api_doc_spec_tmp.yaml


echo "Generating Rest Api Docs from Spec File..."
npx --yes @redocly/cli build-docs "$AUTO_GENERATED"/rest_api_doc_spec.yaml --template "$SCRIPT_DIR"/templates/rest_api_html_template.hbs --output "$AUTO_GENERATED"/rest_api_doc.html

mkdir -p "$SCRIPT_DIR"/../website/static/yaml/
mkdir -p "$SCRIPT_DIR"/../website/static/html/

cp -r "$AUTO_GENERATED"/rest_api_doc_spec.yaml "$SCRIPT_DIR"/../website/static/yaml/
cp -r "$AUTO_GENERATED"/rest_api_doc.html "$SCRIPT_DIR"/../website/static/html/
cp -r "$AUTO_GENERATED"/site "$SCRIPT_DIR"/../website/static/html/
cp -r "$AUTO_GENERATED"/bin "$DOCS"


echo "Generating Release Notes..."
"$SCRIPT_DIR"/generate_release_notes.py
echo "Generating Release Notes Index..."
"$SCRIPT_DIR"/generate_release_notes_index.py
