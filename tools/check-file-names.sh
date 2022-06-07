#!/bin/bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

exit_code=0

for f in $(find "$SCRIPT_DIR"/../docs -name "*.md" -not -path "*/release-notes/*" -printf "%f\n" | grep --invert-match '^[a-z_]*\.md$'); do
    echo "$f does not comply with the snakecase convention!"
    exit_code=1
done

exit $exit_code
