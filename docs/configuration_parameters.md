---
id: configuration_parameters
title: Configuration parameters
---
Description of the configuration parameters splitted in three different places:
Rucio configuration file (`rucio.cfg`), Rucio configuration table and RSE
attributes.

## Rucio configuration file (`rucio.cfg`)

- **accounts**
  - **special_accounts** <!--NOT USED IN CODE-->
- **alembic**
  - **cfg**: Path to the configuration file (.ini) for Alembic. Example:
    `/opt/rucio/etc/alembic.ini`. No default.
- **api**
  - **endpoints**: _(Optional)_ Endpoints separated by commas. Default:
    `['accountlimits', 'accounts', 'config', 'credentials', 'dids', 'export',
    'heartbeats', 'identities', 'import', 'lifetime_exceptions', 'locks',
    'meta', 'ping', 'redirect', 'replicas', 'requests', 'rses', 'rules',
    'scopes', 'subscriptions']`.
- **auditor**
  - **cache**: Path to the folder to store the `rucio-auditor` cache. Example:
    `/opt/rucio/auditor-cache`. No default.
  - **results**: Path to the folder to store the `rucio-auditor`
    results. Example: `/opt/rucio/auditor-results`. No default.
  - **threshold**: _(Optional)_ Floating number used in a sanity check,
    comparing the number of entries with the total number of files on the RSE:

    ```python
    if len(dark_replicas) > threshold * usage['files']
    ```

    ```python
    if len(lost_replicas) > threshold * usage['files']
    ```

    Default: `0.2`.
- **bb8**
  - **dump_production_day**: _(Optional)_ Day of the week of the most recent
    dump. Values: `{Sunday, Monday, Tuesday, Wednesday, Thursday, Friday,
    Saturday}`. Default: `None`.
  - **dump_url_template**: _(Optional)_ URL of the template (structure) of a
    dump. Default:
    `http://rucio-analytix.cern.ch:8080/LOCKS/GetFileFromHDFS?date=${date}&rse=${rse}`.
- **bootstrap**
  - **gss_email**: _(Optional)_ Email of the Kerberos auth method which identity
    is specified in `gss_identity`.
  - **gss_identity**: _(Optional)_ Identity of the Kerberos auth method.
  - **saml_email** <!--NOT USED IN CODE-->
  - **saml_id** <!--NOT USED IN CODE-->
  - **ssh_email**: _(Optional)_ Email of the SSH auth method which identity is
    specified in `ssh_identity`. Default: `ph-adp-ddm-lab@cern.ch`.
  - **ssh_identity**: _(Optional)_ SSH auth using an RSA key. Default: ```
    ssh-rsa
    AAAAB3NzaC1yc2EAAAABIwAAAQEAq5LySllrQFpPL614sulXQ7wnIr1aGhGtl8b+HCB/0FhMSMTHwSjX78UbfqEorZV16rXrWPgUpvcbp2hqctw6eCbxwqcgu3uGWaeS5A0iWRw7oXUh6ydnVy89zGzX1FJFFDZ+AgiZ3ytp55tg1bjqqhK1OSC0pJxdNe878TRVVo5MLI0S/rZY2UovCSGFaQG2iLj14wz/YqI7NFMUuJFR4e6xmNsOP7fCZ4bGMsmnhR0GmY0dWYTupNiP5WdYXAfKExlnvFLTlDI5Mgh4Z11NraQ8pv4YE1woolYpqOc/IMMBBXFniTT4tC7cgikxWb9ZmFe+r4t6yCDpX4IL8L5GOQ==
    ddmlab ```
  - **userpass_email**: _(Optional)_ Email of the root account which name is
    specified in `userpass_identity`. Default: `ph-adp-ddm-lab@cern.ch`.
  - **userpass_identity**: _(Optional)_ Name of the root account. Default:
    `ddmlab`.
  - **userpass_pwd**: _(Optional)_ Password of the root account which name is
    specified in `userpass_identity`. Default: `secret`.
  - **x509_email**: _(Optional)_ Email of the X.509 identity specified in
    `x509_identity`. Default: `ph-adp-ddm-lab@cern.ch`.
  - **x509_identity**: _(Optional)_ Identity of the X.509 certificate. Default:
    `/C=CH/ST=Geneva/O=CERN/OU=PH-ADP-CO/CN=DDMLAB Client
    Certificate/emailAddress=ph-adp-ddm-lab@cern.ch`.
- **c3po**
  - **algorithms**: _(Optional)_ Placement algorithm.

    Only allows multiple algorithms if the `dry_run` mode is enabled (separated
    by commas).

    Values: `{simple, t2_free_space, t2_free_space_only_pop,
    t2_free_space_only_pop_with_network}`.

    Default: `None`.
  - **ca_cert**: _(Optional)_ Path of the certificate for Elasticsearch.
  Default: `False`. <!--THE VAR DOES NOTHING IN c3po.py:194-->
  - **elastic_index**: _(Optional)_ Index (database) to use in Elasticsearch.
  - **elastic_pass**: _(Optional)_ Password of the username defined in
    `elastic_user` to authenticate to Elasticsearch. No default.
  - **elastic_url**: URL of Elasticsearch. Example:
    `http://aianalytics01.cern.ch:9200`.
  - **elastic_user**: _(Optional)_ Username to authenticate to Elasticsearch. No
    default.
  - **placement_algorithm** <!--NOT USED IN CODE-->
  - **redis_host**: URL of the Redis database.
  - **redis_port**: Port of the Redis database defined in `redis_host`.
- **c3po-popularity**
  - **elastic_url** <!--NOT USED IN CODE-->
- **c3po-site-mapper**
  - **ddm_url**: URL for DDM. Example:
    `http://atlas-agis-api.cern.ch/request/ddmendpoint/query/list/?json`.
  - **panda_url**: URL for PanDA. Example:
    `http://atlas-agis-api.cern.ch/request/pandaqueue/query/list/?json`.
- **c3po-workload**
  - **panda_url**: URL for PanDA. Example:
    `http://bigpanda.cern.ch/jobs/?category=analysis&jobstatus=running`.
  - **window**: <!--??--> Integer.
- **c3po-network-metrics**
  - **prefix**: <!--??-->
  - **redis_host**: URL of the Redis database.
  - **redis_port**: Port of the Redis database defined in `redis_host`.
- **cache**
  - **url**: _(Optional)_ URL of the cache. Default: `127.0.0.1:11211`.
  - **use_external_cache_for_auth_tokens**: _(Optional)_ if True, use remote
    cache provider for auth tokens. If False, use a private in-memory cache.
    Default: `False`
- **common**
  - **extract_scope**: _(Optional)_ <!--??--> Default: `atlas`.
  - **logdir**: Path of the directory for logs. Contains `auditor.log`.
  - **logformat**: _(Optional)_ Formatter of the log. See:
    <https://docs.python.org/3/library/logging.html#logging.Formatter>
  - **loglevel**: _(Optional)_. Set the root logger level to the specified
    level.

    Values: `{'NOTSET', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'}`. See:
    <https://docs.python.org/3/library/logging.html#levels>

    Default: `DEBUG`. For `rucio-auditor` default is `WARNING`.
  - **mailtemplatedir**: _(Optional)_ Path of the folder with mail templates
    (.tmpl). Example: `/opt/rucio/etc/mail_templates`.
  - **multi_vo**: _(Optional)_ <!--??--> Default: `False`.
- **conveyor**
  - **allow_user_oidc_tokens**: _(Optional)_ Boolean. Default: `False`.
  - **bring_online**: Integer, bring online timeout. Default: `43200`.
  - **cacert** <!--NOT USED IN CODE-->
  - **cache_time**: _(Optional)_ Integer, expiration time in seconds passed to
    the dogpile system. Default: `600`.
  - **failover_scheme**: Failover schemes. Default: `None`.
  - **filter_transfertool**: _(Optional)_ <!--??--> Default: `None`.
  - **fts_throttler_cycle**: _(Optional)_ Path to the cycle file (JSON). If not
    specified cannot perform tuning for this cycle without cycle file. Example:
    `fts_throttler_cycle.json`. No default.
  - **fts_throttler_tuning_ratio**: _(Optional)_ Integer. Example: `20`. No
    default.
  - **ftshosts**: URL of the [File Transfer Service
    (FTS)](https://fts.web.cern.ch/) hosts (separated by commas). Example:
    `https://fts3-pilot.cern.ch:8446, https://fts3-pilot.cern.ch:8446`. <!--NOT
    USED IN CODE-->
  - **globus_auth_app**: _(Optional)_ <!--??--> Default: `None`.
  - **max_time_in_queue**: _(Optional)_ <!--??--> (separated by
    commas). Default: `{}`.
  - **poll_timeout**: Float, timeout. Default: `None`.
  - **queue_mode**: _(Optional)_ Values: `{'strict', 'default'}`Default:
    `default`.
  - **request_oidc_audience**: _(Optional)_. Default: `fts:example`.
  - **request_oidc_scope**: _(Optional)_. Default: `fts:submit-transfer`.
  - **scheme**: _(Optional)_ Schemes to process (separated by commas). Default:
    `None`.
  - **submit_timeout**: _(Optional)_ Timeout. Default: `None`.
  - **transfertool**: _(Optional)_ <!--??--> Default: `None`.
  - **transfertype**: _(Optional)_. Values: `{bulk, single}`. Default: `single`.
  - **usercert**: Path to the certificate for the FTS3 implementation of a Rucio
    transfertool. Default: `None`.
  - **user_activities**: _(Optional)_ <!--??--> Default: `['user',
    'user_test']`.
  - **user_transfers**: _(Optional)_ <!--??--> Default: `None`.
  - **using_memcache**: _(Optional)_ Boolean. Default: `False`.
  - **webdav_transfer_mode**: _(Optional)_. Default: `None`.
- **core**
  - **default_mail_from**: _(Optional)_ Default email. Default: `None`.
  - **geoip_licence_key**: _(Optional)_ License key for GeoLite2. Get a free
    licence key at <https://www.maxmind.com/en/geolite2/signup>. Default:
    `NOLICENCE`.
- **client**
  - **account**: Rucio account. Example: `root`.
  - **auth_host**: URL of the host of the rucio authentication server. Example:
    `https://rucio-auth-prod.cern.ch:443`.
  - **auth_token_file_path**: _(Optional)_ If token file path is defined in the
    rucio.cfg file, use that file. Currently this prevents authenticating as
    another user or VO. Default: `None`.
  - **auth_type**: Type of authentication in rucio. Values: `{userpass, x509,
    x509_proxy, gss, ssh, saml, oidc}`.
  - **ca_cert**: Path of the cert file for HTTPS. Example:
    `/opt/rucio/etc/web/ca.crt`.
  - **client_cert**: Path of the X.509 client cert file. This can be overwitten
    by the `RUCIO_CLIENT_CERT` environment variable. Example:
    `/opt/rucio/etc/web/client.crt`.
  - **client_key**: Path of the X.509 client key file for the cert defined in
    `client_cert`. This can be overwitten by the `RUCIO_CLIENT_KEY` environment
    variable. Example: `/opt/rucio/etc/web/client.key`.
  - **client_x509_proxy**: Path of the X.509 client proxy. Mandatory if
    `auth_type = x509_proxy`.
  - **oidc_audience**: _(Optional)_ Only used if `auth_type = oidc`. Default:
    `None`.
  - **oidc_auto**: _(Optional)_ Boolean. Only used if `auth_type =
    oidc`. Default: `False`.
  - **oidc_issuer**: _(Optional)_ Only used if `auth_type = oidc`. Default:
    `None`.
  - **oidc_password**: _(Optional)_ Only used if `auth_type = oidc`. Default:
    `None`.
  - **oidc_refresh_lifetime**: _(Optional)_ Only used if `auth_type =
    oidc`. Default: `None`.
  - **oidc_scope**: _(Optional)_ Only used if `auth_type = oidc`. Default:
    `openid profile`.
  - **oidc_username**: _(Optional)_ Only used if `auth_type = oidc`. Default:
    `None`.
  - **password**: Password of the user specified in `username`. Mandatory if
    `auth_type = userpass` or `auth_type = saml`.
  - **protocol_stat_retries**: _(Optional)_ Integer, number of retries if stat
    file fails. The time of the retries are: 1s, 2s, 4s, 8s, 16s, 32s
    later. Default: `6`.
  - **request_retries**: _(Optional)_ Integer, number of retries if an
    unauthorized error is returned. Default: `3`.
  - **rucio_host**: URL of rucio host. Example:
    `https://rucio-server-prod.cern.ch:443`.
  - **ssh_private_key**: Path of the SSH private key. Mandatory if `auth_type =
    ssh`. Example: `$HOME/.ssh/id_rsa`.
  - **username**: Mandatory if `auth_type = userpass` or `auth_type = saml`.
  - **vo**: _(Optional)_ VO name. Default: `def`.
- **credentials**
  - **gcs**: _(Optional)_ Path of the Google Cloud Storage credentials. Default:
    `/opt/rucio/etc/google-cloud-storage-test.json`.
  - **signature_lifetime**: _(Optional)_ ?. Default: `600`.
- **database**
  - **default**: Type of the SQL connection. Values: `{mysql, postgresql,
    sqlite, oracle}`.
  - **echo**: Enable echo for database logs. Values: `{0 (disable), 1
    (enable)}`.
  - **echo_pool**: See
    <https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.echo_pool>
  - **max_overflow**: See
    <https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.max_overflow>
  - **pool_recycle**: See
    <https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.pool_recycle>
  - **pool_reset_on_return**: See
    <https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.pool_reset_on_return>
  - **pool_size**: See
    <https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.pool_size>
  - **pool_timeout**:
    <https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.pool_timeout>
  - **poolclass**: Which connection pooling mechanism to use. Values: `nullpool` (disables pooling),
    `queuepool` (default for all but SQLite engine), or `singletonthreadpool` (default for SQLite engine).
    See <https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.poolclass>
  - **schema**: _(Optional)_ Schema to be applied to a database, if not set in
    config, try to create automatically.
  - **use_threadlocal** <!--??-->
- **download**
  - **transfer_speed_timeout**: _(Optional)_ Minimum allowed average transfer
    speed (in KBps). Default: `500`. Used to dynamically compute the timeout if
    `--transfer-timeout` not set. Is not supported for `--pfn`.
  - **transfer_timeout**: _(Optional)_ Transfer timeout (in seconds). Default:
    computed dynamically from `--transfer-speed-timeout`. If set to any value >=
    0, `--transfer-speed-timeout` is ignored.
- **es-atlas**
  - **ca_cert**: _(Optional)_ Path of the certificate for Elasticsearch. No
    default.
  - **password**: _(Optional)_ Password of the username defined in `username` to
    authenticate to Elasticsearch. No default.
  - **url**: _(Optional)_ URL of Elasticsearch. Example:
    `http://aianalytics01.cern.ch:9200`. No default.
  - **username**: _(Optional)_ Username to authenticate to Elasticsearch. No
    default.
- **hermes**
  - **elastic_endpoint**: _(Optional)_ URL of Elasticsearch. Example:
    `http://aianalytics01.cern.ch:9200`. Mandatory if `elastic` is specified in
    `services_list`.
  - **influxdb_endpoint**: _(Optional)_ URL of InfluxDB. Mandatory if `influx`
    is specified in `services_list`.
- **importer**
  - **attr_sync_method**: _(Optional)_ Values: `{append, edit, hard}`. Default:
    `edit`.
  - **rse_sync_method**: _(Optional)_ Values: `{append, edit, hard}`. Default:
    `edit`.
- **injector**
  - **adler32** <!--NOT USED IN CODE-->
  - **bytes** <!--NOT USED IN CODE-->
  - **file** <!--NOT USED IN CODE-->
  - **md5** <!--NOT USED IN CODE-->
- **lifetime**
  - **directory**: _(Optional)_ Path to the policies directory with JSON files
    named `config_DTYPE.json`, where `DTYPE` is a value in `{data, mc, valid,
    other}`. Default: `/opt/rucio/etc/policies`.
- **logging**
  - ***CFG_OPTION***: _(Optional)_ ?. Default: `None`.
- **messaging-cache**
  - **account** <!--??-->
  - **broker_virtual_host**: _(Optional)_ ?
  - **brokers**: Default message broker name for `rucio-cache-client`. Ignored
    if `rucio-cache-client` executed with `--broker`.
  - **destination**: Default message broker topic for
    `rucio-cache-client`. Ignored if `rucio-cache-client` executed with
    `--destination`.
  - port
  - **ssl_cert_file**: Default certificate file for
    `rucio-cache-client`. Ignored if `rucio-cache-client` executed with
    `--certificate`.
  - **ssl_key_file**: Default certificate key file for
    `rucio-cache-client`. Ignored if `rucio-cache-client` executed with
    `--certificate-key`.
  - **voname** <!--NOT USED IN CODE-->
- **messaging-fts3**
  - **broker_virtual_host**: _(Optional)_ ?. No default.
  - **brokers**: Brokers separated by commas. Example: `dashb-test-mb.cern.ch`.
  - **destination**: Name of the destination topic. Example:
    `/topic/transfer.fts_monitoring_queue_state`.
  - **nonssl_port**: _(Optional)_ Port of the broker if `use_ssl` is not set.
  - **password**: _(Optional)_ Password of the `username`. Only used if
    `use_ssl` is not set. No default.
  - **port** <!--NOT USED IN CODE-->
  - **ssl_cert_file**: _(Optional)_ Path of the certificate file. No default.
  - **ssl_key_file**: _(Optional)_ Path of the certificate key file defined in
    `ssl_cert_file`. No default.
  - **use_ssl**: _(Optional)_ Boolean. Default: `True`.
  - **username**: _(Optional)_ Username of the broker. Only used if `use_ssl` is
    not set. No default.
  - **voname** <!--NOT USED IN CODE-->
- **messaging-hermes**
  - **broker_virtual_host**: _(Optional)_ <!--??--> No default.
  - **brokers**: Brokers separated by commas. Example: `atlas-test-mb.cern.ch`.
  - **destination**: Name of the destination topic. Example:
    `/topic/rucio.events`.
  - **email_from**: <!--??--> Example: `Rucio <spamspamspam@cern.ch>`.
  - **email_test**: <!--??--> Example: `spamspamspam@cern.ch`.
  - **nonssl_port**: _(Optional)_ Port of the broker if `use_ssl` is not set.
  - **password**: _(Optional)_ Password of the `username`. Mandatory if
    `use_ssl` is not set. No default.
  - **port**: _(Optional)_ Port of the broker if `use_ssl` is set.
  - **ssl_cert_file**: _(Optional)_ Path of the certificate file. No
    default. Mandatory if `use_ssl` is set.
  - **ssl_key_file**: _(Optional)_ Path of the certificate key file defined in
    `ssl_cert_file`. No default. Mandatory if `use_ssl` is set.
  - **use_ssl**: _(Optional)_ Boolean. Default: `True`.
  - **username**: _(Optional)_ Username of the broker. Mandatory if `use_ssl` is
    not set. No default.
  - **voname** <!--NOT USED IN CODE-->
- **metadata**
  - **plugins**: _(Optional)_ Metadata handler modules separated by
    commas. Default: `rucio.core.did_meta_plugins.json_meta.JSONDidMeta`.
- **monitor**
  - **enable_metrics**: _(Optional)_ Enable `statsd` metrics. Boolean. Default:
    `False`.
  - **carbon_server**: _(Optional)_ Hostname or IP address of the `statsd`
    server. Default: `localhost`
  - **carbon_port**: _(Optional)_ Port of the `statsd` server. Default: `8125`.
  - **user_scope**: _(Optional)_ Prefix to distinguish and group stats from an
    application or environment. Default: `rucio`.
  - **metrics_port**: _(Optional)_ Port of Prometheus Python Client. Default:
    `8080`.
- **nagios**
  - **fts_servers** <!--NOT USED IN CODE-->
  - **proxy** <!--NOT USED IN CODE-->
  - **rfcproxy** <!--NOT USED IN CODE-->
- **nongrid-trace**
  - **broker_virtual_host**: _(Optional)_ ?. No default.
  - **brokers**: Brokers separated by commas. Example: `atlas-test-mb.cern.ch`.
  - **logformat**: _(Optional)_ Formatter of the log. See:
    <https://docs.python.org/3/library/logging.html#logging.Formatter>
  - **loglevel**: _(Optional)_ Set the root logger level to the specified level.

    Values: `{'NOTSET', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'}`. See:
    <https://docs.python.org/3/library/logging.html#levels>

    Default: `DEBUG`.
  - **password**: Password of the `username`.
  - **topic**: Name of the destination topic.
  - **tracedir**: _(Optional)_ Path of the directory for traces. Default:
    `/var/log/rucio`.
  - **username**: Username of the broker.
- **oidc**
  - **admin_issuer**: Example: `wlcg`.
  - **default_jwt_refresh_lifetime**: _(Optional)_ Integer. Default: `96`.
  - **exchange_grant_type**: _(Optional)_ <!--??--> Default:
    `urn:ietf:params:oauth:grant-type:token-exchange`.
  - **expected_audience**: _(Optional)_ <!--??--> Default: `rucio`.
  - **expected_scope**: _(Optional)_ <!--??--> Default: `openid profile`.
  - **idpsecrets**: Path of the idpsecrets JSON. Example:
    `/opt/rucio/etc/idpsecrets.json`.
- **permission**
  - **policy**: _(Optional)_ Permission policy. Values: `{atlas, belleii, cms,
    generic, generic_multi_vo}`. Default: `generic`.
- **policy**
  - **lfn2pfn_algorithm_default**: _(Optional)_ Default algorithm name for
    LFN2PFN translation for this server. Default: `hash`.
  - **package** <!--??-->
  - **package-*VO*** <!--??-->
  - **permission**: Same as `policy/permission`.
  - **schema** <!--??-->
  - **scratchdisk_lifetime**: _(Optional)_ Integer. Default: `14`.
  - **support**: _(Optional)_ Contact information.
  - **support_rucio**: _(Optional)_ Rucio contact information. Default:
    `https://github.com/rucio/rucio/issues`.
- **saml**
  - **config_path**: Path to the SAML config folder. Example:
    `/opt/rucio/lib/rucio/web/ui/common/saml/`.
- **test**
  - **cacert**: Path of the CA certificate for tests. Example:
    `/opt/rucio/etc/web/ca.crt`
  - **usercert** Path of the user certificate for tests. Example:
    `/opt/rucio/etc/web/usercert.pem`
  - **userkey**: Path of the user certificate key for tests.
- **trace**
  - **broker_virtual_host**: _(Optional)_ <!--??--> No default.
  - **brokers**: Brokers separated by commas. Example: `atlas-test-mb.cern.ch`.
  - **logformat**: _(Optional)_ Formatter of the log. See:
    <https://docs.python.org/3/library/logging.html#logging.Formatter>
  - **loglevel**: _(Optional)_ Set the root logger level to the specified level

    Values: `{'NOTSET', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'}`. See:
    <https://docs.python.org/3/library/logging.html#levels>

    Default: `DEBUG`.
  - **password**: Password of the `username`.
  - **port**: _(Optional)_ Port of the broker. Example: `61013`.
  - **topic**: Name of the destination topic. Example: `/topic/rucio.tracer`.
  - **tracedir**: _(Optional)_ Path of the directory for traces. Default:
    `/var/log/rucio/trace`.
  - **username**: Username of the broker.
- **tracer-kronos**
  - **broker_virtual_host**: _(Optional)_ <!--??--> No default.
  - **brokers**: Brokers separated by commas. Example: `atlas-test-mb.cern.ch`.
  - **chunksize**: Integer
  - **dataset_wait**: Integer. Example `60`.
  - **excluded_usrdns**: Separated by commas. Example:
    `/DC=ch/DC=cern/OU=Organic Units/OU=Users/CN=gangarbt/CN=722147/CN=Robot:
    Ganga Robot/CN=proxy`.
  - **password**: _(Optional)_ Password of the `username`. Mandatory if
    `use_ssl` is not set. No default.
  - **port**: Port of the broker.
  - **prefetch_size**: `activemq.prefetchSize`, see
    <https://svn.apache.org/repos/infra/websites/production/activemq/content/5.7.0/what-is-the-prefetch-limit-for.html>
  - **queue**: The topic or queue to subscribe to. Example:
    `/queue/Consumer.kronos.rucio.tracer`.
  - **reconnect_attempts**: Maximum attempts to reconnect. Integer. Example:
    `100`.
  - **ssl_cert_file**: _(Optional)_ Path of the certificate file. No
    default. Mandatory if `use_ssl` is set.
  - **ssl_key_file**: _(Optional)_ Path of the certificate key file defined in
    `ssl_cert_file`. No default. Mandatory if `use_ssl` is set.
  - **subscription_id**: A unique id to represent the subscription. Example:
    `rucio-tracer-listener`.
  - **use_ssl**: _(Optional)_ Boolean. Default: `True`.
  - **username**: _(Optional)_ Username of the broker. Mandatory if `use_ssl` is
    not set. No default.
- **transmogrifier**
  - **maxdids** <!--NOT USED IN CODE-->
- **upload**
  - **transfer_timeout**: _(Optional)_ Transfer timeout (seconds,
    integer). Default: `360`.
- **webui**
  - **auth_issuer**: _(Optional)_ Mandatory if `auth_type` = `oidc`. No default.
  - **auth_type**: _(Optional)_ Preferred server side config for webui
    authentication. Values: `{oidc, None}`. Default: `None`.
  - **usercert** <!--NOT USED IN CODE-->

## Rucio configuration table

- **automatix**
  - **account**: _(Optional)_ Account to use. Default: `root`.
  - **dataset_lifetime**: _(Optional)_. Default: `None`.
  - **did_prefix**: _(Optional)_ <!--??--> Default: ` `.
  - ***DIDTYPE*\_pattern**: _(Optional)_ Separated by `separator` char. No
    default.
  - **scope**: _(Optional)_ Default: `False`.
  - **separator**: _(Optional)_ Separator char. No default.
  - **set_metadata**: _(Optional)_ <!--??--> Default: `False`.
  - **sites**: Separated by commas.
  - **sleep_time**: _(Optional)_ Integer. Default: `30`.
- **clientcachemap**
  - ***client_location['site']*** <!--??-->
- **conveyor**
  - **activity-source-strategy**: _(Optional)_ <!--??--> Default: `{}`.
  - **default-source-strategy**: _(Optional)_ Default: `orderly`.
- **hermes**
  - **services_list**: List of services separated by commas. Values: `{activemq,
    elastic, influx}`.
- **kronos**
  - **bad_files_patterns**: _(Optional)_ Patterns (regular expression) separated
    by commas for bad files. Default: `[]`.
- **lifetime_model**
  - **approvers_email**: _(Optional)_ Separated by commas. Default: `[]`.
- **reaper**
  - **auto_exclude_threshold**: _(Optional)_ Number of service unavailable
    exceptions after which the RSE gets temporarily excluded. Integer. Default:
    `100`.
  - **auto_exclude_timeout**: Timeout for temporarily excluded
    RSEs. Integer. Default: `600`.
  - **max_deletion_threads_*HOSTNAME***: _(Optional)_ Max number of deletion
    threads (integer). If `nb_workers_by_hostname` is also not defined, default:
    `5`.
  - **max_evaluator_backlog_count**: _(Optional)_ Integer. Default: `None`.
  - **max_evaluator_backlog_duration**: _(Optional)_ Minutes (integer). Default:
    `None`.
  - **nb_workers_by_hostname**: _(Optional)_ Integer. Default: `5`.
- **root-proxy-internal**
  - ***client_location['site']*** <!--??-->
- **rules**
  - **apply_rule_max_partition_size**: _(Optional)_ Integer . Default: `2000`.
  - **force_epoch_when_detach**: _(Optional)_ Purge setting of the
    rule. Boolean. Default: `False`.
  - **use_new_rule_algorithm**: _(Optional)_ Boolean. Default: `False`.
- **subscriptions**
  - **keep_history**: _(Optional)_ Boolean. Default: `False`.
- **throttler**
  - **mode**: Conveyor-throttler mode. Values: `{DEST_PER_ALL_ACT, DEST_PER_ACT,
    SRC_PER_ACT, SRC_PER_ALL_ACT}`. Default: `None` for `core/request`,
    `DEST_PER_ACT` for `rucio-conveyor-throttler`.
- **transfers**
  - **hop_penalty**: _(Optional)_ Penalty to be applied to each further
    hop. Integer. Default: `10`.
  - **multihop_tombstone_delay**: Seconds (integer). Default: `7200`.
  - **use_multihop**: Boolean. Default: `False`.
- **virtual_placement**
  - **vp_endpoint**: _(Optional)_ Virtual Placement server. Once VP is
    integrated in Rucio it won't be needed. Default: ` `.
- **vo-map**
  - ***VO***: _(Optional)_ Internal short VO name. No default.

## RSE attributes

- **associated_sites**: <!--??--> Separated by commas. Default: `None`.
- **auto_approve_bytes**: Auto Approve Limit. Example: `500GB`. No default.
- **auto_approve_files**: <!--??--> No default.
- **available_for_multihop**: Boolean. If True, allow to use this RSE as an
  intermediate hop in a multi-hop transfer. Default: `False`.
- **block_manual_approval**: <!--??--> Boolean. Default: `False`.
- **country**: <!--??--> No default.
- **greedyDeletion**: <!--??--> Boolean. Default: `False`.
- **hop_penalty**: <!--??--> Integer. Cost of passing via this RSE in multi-hop
  transfers. Overrides the global `transfers/hop_penalty` configuration
  value for this particular RSE. Has only meaning if `available_for_multihop`
  attribute is True on the RSE. No default value.
- **istape**: <!--??--> Boolean. Default: `False`.
- **mock**: <!--??--> Boolean. Default: `False`.
- **naming_convention**: <!--??--> Default: `None`.
- **physgroup**: <!--??--> Default: ` `.
- **quota_approvers**: <!--??--> Separated by commas. Default: `None`.
- **restricted_read** <!--??--> Boolean. If True, only allow transfers
  from this RSE if started by an account with admin privileges.
  Default: `False`
- **restricted_write** <!--??--> Boolean. Same as `restricted_read`, but for
  transfers towards this RSE. Default: `False`
- **rule_approvers**: <!--??--> Separated by commas. No default.
- **rule_deleters**: <!--??--> Separated by commas. No default.
- **site** <!--??-->
- **skip_upload_stat**: <!--??--> Boolean. Default: `False`.
- **source_for_total_space**: <!--??--> Default: `storage`.
- **source_for_used_space**: <!--??--> Default: `storage`.
- **staging_buffer** <!--??-->
- **tier**: Datacenter TIER. Integer (from 1 to 4). No default.
- **type**: <!--??--> Values: `{LOCALGROUPDISK, LOCALGROUPTAPE, GROUPDISK,
  SCRATCHDISK, MOCK, TEST, DATADISK}`. Default: ` `.
- **verify_checksum**: Boolean. No default.
