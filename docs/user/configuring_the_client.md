---
title: Configuring the Client
---

## Environmental variables

Please note that the underlying libraries that the Rucio client uses (e.g. GFAL) may be further affected by environmental variables not mentioned in this page.

### ATLAS_SITE_NAME

See [SITE_NAME](#SITE_NAME).

### CONDA_PREFIX

See [RUCIO_HOME](#RUCIO_HOME).

### OSG_SITE_NAME

See [SITE_NAME](#SITE_NAME).

### RUCIO_ACCOUNT

Which account to use to authenticate to Rucio.
Corresponds to the `--account` command-line option and the `clients.account` configuration-file option.

### RUCIO_AUTH_TYPE

Which mechanism to use to authenticate to Rucio.
Corresponds to the `--auth-strategy` command-line option and the `clients.auth_type` configuration-file option.
Valid options are `gss`, `oidc`, `saml`, `ssh`, `userpass`, `x509`, and `x509_proxy`. 

### RUCIO_CLIENT_MODE

Force the Rucio client to communicate to the Rucio server.
Only matters when the `database` section exists in the configuration file.
Any non-empty value is treated as true.

### RUCIO_CONFIG

The path to the main Rucio configuration file.
Defaults to `$RUCIO_HOME/rucio.cfg`.

### RUCIO_HOME

The directory where the Rucio configuration files are located.
Defaults to `/opt/rucio/`.

### RUCIO_LATITUDE

The geographical location where the client is run.
Used to potentially prefer replicas on RSEs which are closer geographically.
The value is a floating-point number.
Defaults to `0`.
Both `RUCIO_LATITUDE` and `RUCIO_LONGITUDE` must be properly set to have effect.

### RUCIO_LOGGING_FORMAT

Configure the content and presentation of log entries.
Refer to the [Python logging documentation](https://docs.python.org/3/library/logging.html#logrecord-attributes).

### RUCIO_LONGITUDE

See [RUCIO_LATITUDE](#RUCIO_LATITUDE).

### RUCIO_VO

Which Virtual Organisation (VO) to use to authenticate to Rucio.
It matters for multi-VO Rucio instances.
Corresponds to the `--vo` command-line option and the `client.vo` configuration-file option.
Defaults to `def`.

### SITE_NAME

The name of the site on which the Rucio client is run.
It matters for sites which have different RSE protocols for WAN and LAN.
If the `site` RSE attribute matches `SITE_NAME`, then the LAN domain is preferred.
The site name of the site is also put in the Rucio traces.
Defaults to `ROAMING`.

### VIRTUAL_ENV

See [RUCIO_HOME](#RUCIO_HOME).

### X509_CERT_DIR

The path to the directory or certificate bundle to use to verify the Rucio servers. 
Corresponds to the `--ca-certificate` command-line option and the `client.ca_cert` configuration-file option.
Defaults to using the Mozilla certificate collection (Certifi).
On Red Hat Enterprise Linux (and derivatives), depending on the method of installation, the system trust may be the default instead.

### BitTorrent

The following environmental variables affect the experimental BitTorrent feature:

* `QBITTORRENT_LISTEN_PORT`
* `QBITTORRENT_TRACKER_PORT`
* `QBITTORRENT_UI_CERT`
* `QBITTORRENT_UI_KEY`
* `QBITTORRENT_UI_PASSWORD`
* `QBITTORRENT_UI_PORT`
* `QBITTORRENT_UI_USERNAME`

### Traces

The following environmental variables offer an advanced mechanism to populate the content of the Rucio traces:

* `RUCIO_TRACE_APPID`
* `RUCIO_TRACE_DATASET`
* `RUCIO_TRACE_DATASETSCOPE`
* `RUCIO_TRACE_EVENTTYPE`
* `RUCIO_TRACE_PQ`
* `RUCIO_TRACE_TASKID`
* `RUCIO_TRACE_USRDN`
