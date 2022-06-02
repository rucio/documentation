#!/bin/sh
# The find command outputs a lot of text. This gets messy with the quotes around
# the command, as suggested by shellcheck. We thus should disable the rule.
# shellcheck disable=SC2046

mdl --config .mdl/mdlrc $(find . -name "*.md" -not -path "./website/*" -not -path "./docs/release-notes/*" -not -name "component_leads.md" -not -name "releasepolicy.md")
exit_code=$?

mdl --config .mdl/mdlrc_long_lines $(find . -name "*.md" -and \( -path "./docs/release-notes/*" -or -name "releasepolicy.md" \)) && [ "$exit_code" -eq "0" ]
exit_code=$?

mdl --config .mdl/mdlrc --rules ~MD013 docs/component_leads.md && [ "$exit_code" -eq "0" ]
