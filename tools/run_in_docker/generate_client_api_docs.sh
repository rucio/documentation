#!/bin/bash

set -e

echo "Generating the Client Api Docs..."

pip install --upgrade "pydoc-markdown>3" &> /dev/null

mkdir -p /auto_generated/client_api
for f in rucio/lib/rucio/client/*.py; do
    if [[ $f =~ "__init__" ]]; then
	continue
    fi

    executable_name=$(basename "$f" ".py")

    config="
processors:
  - type: rucio_processor.RucioProcessor
renderer:
  type: rucio_renderer.RucioRenderer"
    content=$(PYTHONPATH=. pydoc-markdown -I rucio/lib/rucio/client -m "$executable_name" "$config")

    echo "$content" > /auto_generated/client_api/"$executable_name".md
done
