#!/bin/bash
# The find command outputs a lot of text. This gets messy with the quotes around
# the command, as suggested by shellcheck. We thus should disable the rule.
# shellcheck disable=SC2046

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
FIND_IGNORE_CONFIG='-not -path "*/website/*" -not -path "*/docs/release-notes/*" -not -name "component_leads.md" -not -name "releasepolicy.md" -not -path "*/docs/bin/*" -not -path "*/docs/release-notes.md"'

mdl --config "$SCRIPT_DIR"/.mdl/mdlrc $(find "$SCRIPT_DIR"/.. -name "*.md $FIND_IGNORE_CONFIG")
exit_code=$?

mdl --config "$SCRIPT_DIR"/.mdl/mdlrc_long_lines $(find "$SCRIPT_DIR"/.. -name "*.md" -and -name "releasepolicy.md" ) && [ "$exit_code" -eq "0" ]
exit_code=$?

mdl --config "$SCRIPT_DIR"/.mdl/mdlrc --rules ~MD013 "$SCRIPT_DIR"/../docs/component_leads.md && [ "$exit_code" -eq "0" ]
