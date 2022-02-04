#!/bin/sh

set -e

exit_code=0

for f in $(find docs -name "*.md" -not -path "*/release-notes/*" -printf "%f\n" | grep --invert-match '^[a-z_]*\.md$'); do
    echo "$f does not comply with the snakecase convention!"
    exit_code=1
done

exit $exit_code
