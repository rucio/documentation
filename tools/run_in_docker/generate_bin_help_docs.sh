#!/bin/bash

set -e

function generate_bin_help_for_file {
    # Generates the file content for the bin help message.
    #
    # :param $1: The path to the executable.
    echo "---"
    echo "title: $(basename $1)"
    echo "---"
    echo "\`\`\`"
    echo "$($1 --help)"
    echo "\`\`\`"
}


echo "Generating the Executable Help Docs..."

mkdir -p /auto_generated/bin
for f in rucio/bin/*; do
    echo "$(generate_bin_help_for_file $f)" > /auto_generated/bin/$(basename $f).md
done
