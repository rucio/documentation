#!/bin/bash

#
# https://docs.egi.eu/users/tutorials/adhoc/data-transfer-object-storage/
# https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html
#

# set up credentials for MINIO RSEs in FTS3
docker exec -i dev-fts-1 /bin/bash <<'END'
curl \
  --cert /etc/grid-security/hostcert.pem \
  --key /etc/grid-security/hostkey.pem \
  --capath /etc/grid-security/certificates \
  https://fts:8446/config/cloud_storage \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"storage_name":"S3:minio1"}'

curl \
  --cert /etc/grid-security/hostcert.pem \
  --key /etc/grid-security/hostkey.pem \
  --capath /etc/grid-security/certificates \
  https://fts:8446/config/cloud_storage \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"user_dn":"/CN=Rucio User","storage_name":"S3:minio1","access_token":"admin","access_token_secret":"password"}'


curl \
  --cert /etc/grid-security/hostcert.pem \
  --key /etc/grid-security/hostkey.pem \
  --capath /etc/grid-security/certificates \
  https://fts:8446/config/cloud_storage \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"storage_name":"S3:minio2"}'

curl \
  --cert /etc/grid-security/hostcert.pem \
  --key /etc/grid-security/hostkey.pem \
  --capath /etc/grid-security/certificates \
  https://fts:8446/config/cloud_storage \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"user_dn":"/CN=Rucio User","storage_name":"S3:minio2","access_token":"admin","access_token_secret":"password"}'

cat >/etc/gfal2.d/s3.conf <<INI
[S3:MINIO1]
ACCESS_KEY=admin
SECRET_KEY=password
REGION=us-east-1
ALTERNATE=true

[S3:MINIO2]
ACCESS_KEY=admin
SECRET_KEY=password
REGION=us-east-1
ALTERNATE=true
INI
END
