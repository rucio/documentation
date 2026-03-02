#!/bin/bash

#
# https://rucio.github.io/documentation/operator/s3_rse_config/
#

# set up RSEs
docker exec -i dev-rucio-1 /bin/bash <<END
rucio rse add MINIO1
rucio rse protocol add MINIO1 --host minio1 --port 9001 --scheme https --prefix /rucio/ --impl rucio.rse.protocols.gfal.NoRename --domain-json '{"lan": {"read": 1, "write": 1, "delete": 1}, "wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}}'
rucio rse attribute add MINIO1 --key sign_url --value s3
rucio rse attribute add MINIO1 --key s3_url_style --value path
rucio rse attribute add MINIO1 --key verify_checksum --value False
rucio rse attribute add MINIO1 --key skip_upload_stat --value True
rucio rse attribute add MINIO1 --key strict_copy --value True
rucio rse attribute add MINIO1 --key fts --value https://fts:8446
rucio account limit add root --rse MINIO1 --bytes infinity

rucio rse add MINIO2
rucio rse protocol add MINIO2 --host minio2 --port 9002 --scheme https --prefix /rucio/ --impl rucio.rse.protocols.gfal.NoRename --domain-json '{"lan": {"read": 1, "write": 1, "delete": 1}, "wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}}'
rucio rse attribute add MINIO2 --key sign_url --value s3
rucio rse attribute add MINIO2 --key s3_url_style --value path
rucio rse attribute add MINIO2 --key verify_checksum --value False
rucio rse attribute add MINIO2 --key skip_upload_stat --value True
rucio rse attribute add MINIO2 --key strict_copy --value True
rucio rse attribute add MINIO2 --key fts --value https://fts:8446
rucio account limit add root --rse MINIO2 --bytes infinity

# XRD3 has HTTP enabled, link it up to our mesh
rucio rse distance add XRD3 MINIO1 --distance 1
rucio rse distance add XRD3 MINIO2 --distance 1

rucio rse distance add MINIO1 XRD3 --distance 1
rucio rse distance add MINIO2 XRD3 --distance 1
END

# set up credentials for RSEs
docker exec -i dev-rucio-1 /bin/bash <<'END'
ID1=$(rucio rse show MINIO1 | grep '^  id:' | awk '{print$2}')
ID2=$(rucio rse show MINIO2 | grep '^  id:' | awk '{print$2}')
cat >/opt/rucio/etc/rse-accounts.cfg <<JSON
{
  "$ID1": {
    "access_key": "admin",
    "secret_key": "password",
    "signature_version": "s3v4",
    "region": "us-east-1"
  },
  "$ID2": {
    "access_key": "admin",
    "secret_key": "password",
    "signature_version": "s3v4",
    "region": "us-east-1"
  }
}
JSON
END
