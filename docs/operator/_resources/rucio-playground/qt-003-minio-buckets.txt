#!/bin/bash

docker exec -i dev-minio-1 /bin/bash <<END
export MC_INSECURE=true
mc alias set local https://localhost:9001 admin password
mc admin info local
mc mb local/rucio
mc ls local/
END

docker exec -i dev-minio-2 /bin/bash <<END
export MC_INSECURE=true
mc alias set local https://localhost:9002 admin password
mc admin info local
mc mb local/rucio
mc ls local/
END
