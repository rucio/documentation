#!/bin/bash

docker exec -i dev-rucio-1 /bin/bash <<END
rucio rule add test:dataset9 --copies 1 --rses XRD1
rucio rule add test:dataset2 --copies 1 --rses MINIO2
END
