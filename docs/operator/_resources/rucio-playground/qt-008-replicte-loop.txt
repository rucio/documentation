#!/bin/bash

#
# https://github.com/rucio/k8s-tutorial#create-initial-transfer-testing-data
#

docker exec -i dev-rucio-1 /bin/bash <<END
rucio rule list --account root
rucio-judge-evaluator --run-once
rucio-conveyor-submitter --run-once
rucio-conveyor-poller --run-once  --older-than 0
rucio-conveyor-finisher --run-once

rucio rule list --account root
END
