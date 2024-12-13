#!/bin/bash

set -e

function generate_bin_help_for_file {
    # Generates the file content for the bin help message.
    #
    # :param $1: The path to the executable.
    echo "---"
    echo "title: $(basename "$1")"
    echo "---"
    echo "\`\`\`"

    # shellcheck disable=SC2005
    echo "$($1 --help)"

    echo "\`\`\`"
}

function generate_bin_help_for_main {
    echo "---"
    echo "title: rucio"
    echo "---"

    echo ""
    echo "# client"
    echo "\`\`\`"

    # shellcheck disable=SC2005
    echo "$(rucio --help)"

    echo "\`\`\`"

    for i in account config did lifetime-exception replica rse rule scope subscription; do 
        echo ""
        echo "# "$i" "
        echo "\`\`\`"

        # shellcheck disable=SC2005
        echo "$(rucio "$i" --help)"

        echo "\`\`\`"
    done

    echo ""
    echo "# legacy client"
    echo "\`\`\`"

    # shellcheck disable=SC2005
    echo "$(rucio -h --legacy)"

    echo "\`\`\`"

}

echo "Generating the Executable Help Docs..."


mkdir -p /auto_generated/bin
for f in rucio/bin/*; do
    generate_bin_help_for_file "$f" > /auto_generated/bin/"$(basename "$f")".md
done

generate_bin_help_for_main > /auto_generated/bin/rucio.md