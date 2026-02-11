#!/bin/bash

# XRD3 is enabled for multihop transfers
# so add HTTP protocol to be able to talk to S3

docker exec -i dev-rucio-1 /bin/bash <<END
rucio rse protocol add XRD3 --host xrd3 --scheme https --prefix //rucio --port 1096 --impl rucio.rse.protocols.gfal.Default --domain-json '{"wan": {"read": 2, "write": 2, "delete": 2, "third_party_copy_read": 2, "third_party_copy_write": 2}, "lan": {"read": 2, "write": 2, "delete": 2}}'

END
