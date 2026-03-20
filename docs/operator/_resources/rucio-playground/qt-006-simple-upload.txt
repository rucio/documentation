#!/bin/bash

#
# https://github.com/rucio/k8s-tutorial#create-initial-transfer-testing-data
#

docker exec -i dev-rucio-1 /bin/bash <<END
dd if=/dev/urandom of=file5 bs=10M count=1
dd if=/dev/urandom of=file6 bs=10M count=1

rucio upload --rse MINIO1 --scope test file5
rucio upload --rse MINIO2 --scope test file6

rucio did add --type dataset test:dataset9
rucio did content add -to test:dataset9 test:file5 test:file6
END
