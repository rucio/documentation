---
id: s3_rse_config
title: S3 Storage Configuration
---

## S3 Storage Configuration (FTS3 & GFAL2)

Rucio supports S3 storages which can be configured and used as RSEs. This section describes the steps needed to setup and use an S3 storage RSE when using FTS3 as the transfer tool and GFAL2 as the file access library.

### FTS3 & GFAL2 Specifications

There are two ways in which one can employ [FTS3](https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html#s3-support)  and [GFAL2](https://dmc-docs.web.cern.ch/dmc-docs/gfal2/plugins.html#gfal2-plugin-http) ([davix](https://davix.web.cern.ch/davix/docs/devel/cloud-support.html#amazon-s3)) to communicate with an S3 storage:

1. Using [pre-signed](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html) URLs which can be used to access and modify the resources. In this case the endpoint protocol must be `https://` and the user must pre-sign the URL before presenting it to the tools. Please note that in the case of FTS3, the actual timestamp that the transfer will initiate cannot be known a priori, so a pre-signed URL with a predefined lifetime can expire before the beginning of the transfer.

2. Delegating the signature of the URL to FTS3 and GFAL2. This requires providing the relevant configurations ([gfal_config](https://dmc-docs.web.cern.ch/dmc-docs/gfal2/plugins.html#for-a-specific-host) & [fts_config](https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html#configuration)) and using `s3s://` as the endpoint protocol. In this case the user must also be cautious to use the `alternate` configuration/flag appropriately. This will guide the usage of the [Path-Style](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html) URL (`alternate=true`) or the [Virtual-Style](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html) URL (`alternate=false`) during the signing process. Please note that FTS3 currently cannot handle transfers between S3 path-style URLs to S3 virtual-style URLs and vice versa. The `alternate` flag affects all endpoints in the submitted job, thus all S3 endpoints should adhere to the same URL-style.

### How to Setup an S3 RSE

1. Create the RSE. Upon executing `rucio-admin rse info <RSE>` command one should     have the following indicative result for the protocols section:

    ```bash
                                    .
                                    .
    Protocols:
    ==========
    https
        domains: '{"lan": {"read": 1, "write": 1, "delete": 1}, "wan":..}'
        extended_attributes: None
        hostname: <S3_HOSTNAME>
        impl: rucio.rse.protocols.gfal.Default
        port: 443
        prefix: <PATH> # bucket name in case of path-style URLs
        scheme: https
                                    .
                                    .
    ```

2. Set the following RSE attributes:

    ```bash
    sign_url: s3
    skip_upload_stat: True
    verify_checksum: False
    strict_copy: True
    s3_url_style: path(default)|host
    ```

3. Deploy the S3 configuration to the Rucio servers by creating a `<release-name-servers>-rse-accounts` containing the following:

    ```bash
    # vim /opt/rucio/etc/rse-accounts.cfg
    {
        "f4dc2967e329vdf5a73c154eb8d9ffae": {  #rse_id
                "access_key": "...",
                "secret_key": "...",
                "signature_version": "s3v4",   # must be s3v4
                "region": "us-west-2"          # adapt as necessary
        },
        ...
    }
    ```

    And add in your servers helm chart:

    ```
    values:
      secretMounts:
        - secretName: rse-accounts
          mountPath: /opt/rucio/etc/rse-accounts.cfg
          subPath: rse-accounts.cfg

      config:
        credentials:
          gcs: "/opt/rucio/etc/rse-accounts.cfg"

    ```

    Restart the servers.

4. Give every Rucio account the following attribute to be able to sign URLs:

    ```bash
    rucio-admin account add-attribute <accountname> --key sign-gcs --value true
    ```

    In order for this step to be effective, one has to make sure the relevant permission is given when the sign-gcs key is present for the account, for example [this](https://github.com/rucio/rucio/blob/ba102506d470c417fd2b136304e4fa4f7fc3a870/lib/rucio/core/permission/atlas.py#L1219) is the way it is currently done for ATLAS.


5. Configure FTS3 to be able to use the same access and secret keys as you did for the Rucio servers:

    * You need to have access to the FTS3 server config page
      * Visit `<fts_server>:8446/config/cloud_storage`
    * Add a new cloud storage (the name should be `S3:<URL>`)
    * Configure the added cloud storage as the following indicative example:

    ![image](/img/fts_s3_config.png)

    * Add `*` to User to include all users. If this cannot be done via the UI you need to contact the people who manage your FTS3 server.
    * Configure the VO roles
    * Add the __access token__ and the __access secret__, these correspond to the __access_key__ and __secret_key__ you also configured for Rucio.

### Rucio Specifications

* When a client tries __rucio upload__ & __rucio download__, or when the __reaper__ daemon tries to delete data, Rucio pre-signs the S3 URL and passes that signed URL to GFAL2. GFAL2 needs `https://` as the scheme for the protocol when this is the case.

* When the __conveyor-submitter__ daemon submits a transfer to FTS3, it does not pre-sign the URL but it depends on the FTS3 server to do so (Step 5 of the configuration in the previous section), in this case the proper scheme to use for the protocol is `s3s://`, Rucio will automatically translate `https -> s3s` in order to submit the transfer properly. The approach of not pre-signing the URL is necessary since those URLs have an expiration time and there is no guarantee of when the FTS3 transfer will really happen. This way, FTS3 signs the URL just before the transfer actually starts.
