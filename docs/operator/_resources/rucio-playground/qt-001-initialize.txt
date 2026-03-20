#!/bin/bash

# rucio list-file-replicas test:dataset1
# rucio list-file-replicas test:dataset2
# rucio list-file-replicas test:dataset3
# rucio list-file-replicas test:container

# Step zero, get a compliant proxy. The key must NOT be group/other readable
# (KEY=$(mktemp); cat /opt/rucio/etc/userkey.pem > "$KEY"; voms-proxy-init -valid 9999:00 -cert /opt/rucio/etc/usercert.pem -key "$KEY"; rm -f "$KEY")

docker exec -i dev-rucio-1 /bin/bash tools/run_tests.sh -ir
