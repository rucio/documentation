#!/bin/bash
# The find command outputs a lot of text. This gets messy with the quotes around
# the command, as suggested by shellcheck. We thus should disable the rule.
# shellcheck disable=SC2046

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

mdl --config "$SCRIPT_DIR"/.mdl/mdlrc $(find "$SCRIPT_DIR"/.. -name "*.md" -not -path "*/website/*" -not -path "*/docs/release-notes/*" -not -name "component_leads.md" -not -name "releasepolicy.md")
exit_code=$?

mdl --config "$SCRIPT_DIR"/.mdl/mdlrc_long_lines $(find "$SCRIPT_DIR"/.. -name "*.md" -and \( -path "*/docs/release-notes/*" -or -name "releasepolicy.md" \)) && [ "$exit_code" -eq "0" ]
exit_code=$?

mdl --config "$SCRIPT_DIR"/.mdl/mdlrc --rules ~MD013 "$SCRIPT_DIR"/../docs/component_leads.md && [ "$exit_code" -eq "0" ]
