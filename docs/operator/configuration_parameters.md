---
id: configuration_parameters
title: Configuration Parameters
---
Description of the configuration parameters split in three different places:
Rucio configuration file (`rucio.cfg`), Rucio configuration table and RSE attributes.

## Rucio Configuration File (`rucio.cfg`)
* Only the Configuration File provides information for the
[client connection information](#client-client_config) or the
[database configuration](#database-db_config),
this information cannot be set in a different location.
* If not specified in the environmental variables (as `$RUCIO_CONFIG`),
Rucio will look for the config in the following locations -
    - `$RUCIO_HOME/etc/rucio.cfg`
    - `$VIRTUAL_ENV/etc/rucio.cfg`
    - `/opt/rucio/etc/rucio.cfg`


### Options and Defaults
#### **accounts**
  - **special_accounts** <!--NOT USED IN CODE-->
#### **alembic**
  - **cfg**: Path to the configuration file (.ini) for Alembic. Example:
    `/opt/rucio/etc/alembic.ini`. No default.
#### **api**
  - **endpoints**: _(Optional)_ Endpoints separated by commas. Default:
    `['accountlimits', 'accounts', 'config', 'credentials', 'dids', 'export',
    'heartbeats', 'identities', 'import', 'lifetime_exceptions', 'locks',
    'meta', 'ping', 'redirect', 'replicas', 'requests', 'rses', 'rules',
    'scopes', 'subscriptions']`.
#### **auditor**
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
#### **bb8**
  - **dump_production_day**: _(Optional)_ Day of the week of the most recent
    dump. Values: `{Sunday, Monday, Tuesday, Wednesday, Thursday, Friday,
    Saturday}`. Default: `None`.
  - **dump_url_template**: _(Optional)_ URL of the template (structure) of a
    dump. Default:
    `http://rucio-analytix.cern.ch:8080/LOCKS/GetFileFromHDFS?date=${date}&rse=${rse}`.
#### **bootstrap**
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
    `emailAddress=ph-adp-ddm-lab@cern.ch,CN=DDMLAB Client
    Certificate,OU=PH-ADP-CO,O=CERN,ST=Geneva,C=CH`.
#### **cache**
  - **url**: _(Optional)_ URL of the cache. Default: `127.0.0.1:11211`.
  - **use_external_cache_for_auth_tokens**: _(Optional)_ if True, use remote
    cache provider for auth tokens. If False, use a private in-memory cache.
    Default: `False`
#### **common**
  - **extract_scope**: _(Optional)_ Default: `def`.
  - **logdir**: Path of the directory for logs. Contains `auditor.log`.
  - **logformat**: _(Optional)_ Formatter of the log. See [the logging formatter documentation](https://docs.python.org/3/library/logging.html#logging.Formatter)
  - **loglevel**: _(Optional)_. Set the root logger level to the specified
    level.

    Values: `{'NOTSET', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'}`. See [documentation for logging levels](https://docs.python.org/3/library/logging.html#levels)

    Default: `DEBUG`. For `rucio-auditor` default is `WARNING`.
  - **mailtemplatedir**: _(Optional)_ Path of the folder with mail templates
    (.tmpl). Example: `/opt/rucio/etc/mail_templates`.
  - **multi_vo**: _(Optional)_ Default: `False`.
#### **conveyor**
  - **allow_user_oidc_tokens**: _(Optional)_ Boolean. Default: `False`.
  - **bring_online**: Integer, bring online timeout. Default: `43200`.
  - **cacert** <!--NOT USED IN CODE-->
  - **cache_time**: _(Optional)_ Integer, expiration time in seconds passed to
    the dogpile system. Default: `600`.
  - **failover_scheme**: Failover schemes. Default: `None`.
  - **filter_transfertool**: _(Optional)_ Default: `None`.
  - **ftshosts**: URL of the [File Transfer Service
    (FTS)](https://fts.web.cern.ch/) hosts (separated by commas). Example:
    `https://fts3-pilot.cern.ch:8446, https://fts3-pilot.cern.ch:8446`. <!--NOT
    USED IN CODE-->
  - **globus_auth_app**: _(Optional)_ Default: `None`.
  - **max_time_in_queue**: _(Optional)_ (separated by
    commas). Default: `{}`.
  - **poll_timeout**: Float, timeout. Default: `None`.
  - **queue_mode**: _(Optional)_ Values: `{'strict', 'default'}`Default:
    `default`.
  - **request_oidc_audience**: _(Optional)_. Default: `fts:example`.
  - **request_oidc_scope**: _(Optional)_. Default: `fts:submit-transfer`.
  - **scheme**: _(Optional)_ Schemes to process (separated by commas). Default:
    `None`.
  - **submit_timeout**: _(Optional)_ Timeout. Default: `None`.
  - **transfertool**: _(Optional)_ Default: `None`.
  - **transfertype**: _(Optional)_. Values: `{bulk, single}`. Default: `single`.
  - **usercert**: Path to the certificate for the FTS3 implementation of a Rucio
    transfertool. Default: `None`.
  - **user_activities**: _(Optional)_ Default: `['user',
    'user_test']`.
  - **user_transfers**: _(Optional)_ Default: `None`.
  - **using_memcache**: _(Optional)_ Boolean. Default: `False`.
  - **webdav_transfer_mode**: _(Optional)_. Default: `None`.
#### **core**
  - **default_mail_from**: _(Optional)_ Default email. Default: `None`.
  - **geoip_ignore_error**: _(Optional)_ Whether to ignore errors when
    downloading and parsing the GeoIP database. Otherwise exceptions will be
    raised for errors. Boolean. Default: `True`.
  - **geoip_licence_key**: _(Optional)_ License key for GeoLite2. Get a free
    licence key at [the signup page](https://www.maxmind.com/en/geolite2/signup). Default:
    `NOLICENCE`.
  - **use_temp_tables**: _(Optional)_ Use Rucio with temporary table workflows.
    Default: `False`.
#### **client** {#client_config}
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
  - **client_cert**: Path of the X.509 client cert file. This can be overwritten
    by the `RUCIO_CLIENT_CERT` environment variable. Example:
    `/opt/rucio/etc/web/client.crt`.
  - **client_key**: Path of the X.509 client key file for the cert defined in
    `client_cert`. This can be overwritten by the `RUCIO_CLIENT_KEY` environment
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
#### **credentials**
  - **gcs**: _(Optional)_ Path of the Google Cloud Storage credentials. Default:
    `/opt/rucio/etc/google-cloud-storage-test.json`.
  - **signature_lifetime**: _(Optional)_ ?. Default: `600`.
#### **database** {#db_config}
  - **default**: Type of the SQL connection. Values: `{mysql, postgresql,
    sqlite, oracle}`.
  - **echo**: Enable echo for database logs. Values: `{0 (disable), 1
    (enable)}`.
  - **echo_pool**: See [sqlalchemy documentation](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.echo_pool)
  - **max_overflow**: See [sqlalchemy documentation](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.max_overflow)
  - **pool_recycle**: See [sqlalchemy documentation](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.pool_recycle)
  - **pool_reset_on_return**: See [sqlalchemy documentation](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.pool_reset_on_return)
  - **pool_size**: See [sqlalchemy documentation](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.pool_size)
  - **pool_timeout**: [sqlalchemy documentation](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.pool_timeout)
  - **poolclass**: Which connection pooling mechanism to use. Values: `nullpool`
    (disables pooling), `queuepool` (default for all but SQLite engine), or
    `singletonthreadpool` (default for SQLite engine).
    See [sqlalchemy documentation](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine.params.poolclass)
  - **schema**: _(Optional)_ Schema to be applied to a database, if not set in
    config, try to create automatically.
  - **use_threadlocal**
#### **download**
  - **transfer_speed_timeout**: _(Optional)_ Minimum allowed average transfer
    speed (in KBps). Default: `500`. Used to dynamically compute the timeout if
    `--transfer-timeout` not set. Is not supported for `--pfn`.
  - **transfer_timeout**: _(Optional)_ Transfer timeout (in seconds). Default:
    computed dynamically from `--transfer-speed-timeout`. If set to any value >=
    0, `--transfer-speed-timeout` is ignored.
#### **es-atlas**
  - **ca_cert**: _(Optional)_ Path of the certificate for Elasticsearch. No
    default.
  - **password**: _(Optional)_ Password of the username defined in `username` to
    authenticate to Elasticsearch. No default.
  - **url**: _(Optional)_ URL of Elasticsearch. Example:
    `http://aianalytics01.cern.ch:9200`. No default.
  - **username**: _(Optional)_ Username to authenticate to Elasticsearch. No
    default.
#### **hermes**
  - **elastic_endpoint**: _(Optional)_ URL of Elasticsearch. Example:
    `http://aianalytics01.cern.ch:9200`. Mandatory if `elastic` is specified in
    `services_list`.
  - **influxdb_endpoint**: _(Optional)_ URL of InfluxDB. Mandatory if `influx`
    is specified in `services_list`.
#### **importer**
  - **attr_sync_method**: _(Optional)_ Values: `{append, edit, hard}`. Default:
    `edit`.
  - **rse_sync_method**: _(Optional)_ Values: `{append, edit, hard}`. Default:
    `edit`.
#### **injector**
  - **adler32** <!--NOT USED IN CODE-->
  - **bytes** <!--NOT USED IN CODE-->
  - **file** <!--NOT USED IN CODE-->
  - **md5** <!--NOT USED IN CODE-->
#### **lifetime**
  - **directory**: _(Optional)_ Path to the policies directory with JSON files
    named `config_DTYPE.json`, where `DTYPE` is a value in `{data, mc, valid,
    other}`. Default: `/opt/rucio/etc/policies`.
#### **logging**
  - ***CFG_OPTION***: _(Optional)_ ?. Default: `None`.
#### **messaging-cache**
  - **account**
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
#### **messaging-fts3**
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
#### **messaging-hermes**
  - **broker_virtual_host**: _(Optional)_ No default.
  - **brokers**: Brokers separated by commas. Example: `atlas-test-mb.cern.ch`.
  - **destination**: Name of the destination topic. Example:
    `/topic/rucio.events`.
  - **email_from**: Example: `Rucio <spamspamspam@cern.ch>`.
  - **email_test**: Example: `spamspamspam@cern.ch`.
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
#### **metadata**
  - **plugins**: _(Optional)_ Metadata handler modules separated by
    commas. Default: `rucio.core.did_meta_plugins.json_meta.JSONDidMeta`.
#### **monitor**
  - **enable_metrics**: _(Optional)_ Enable `statsd` metrics. Boolean. Default:
    `False`.
  - **carbon_server**: _(Optional)_ Hostname or IP address of the `statsd`
    server. Default: `localhost`
  - **carbon_port**: _(Optional)_ Port of the `statsd` server. Default: `8125`.
  - **user_scope**: _(Optional)_ Prefix to distinguish and group stats from an
    application or environment. Default: `rucio`.
  - **metrics_port**: _(Optional)_ Port of Prometheus Python Client. Default:
    `8080`.
#### **nagios**
  - **fts_servers** <!--NOT USED IN CODE-->
  - **proxy** <!--NOT USED IN CODE-->
  - **rfcproxy** <!--NOT USED IN CODE-->
#### **nongrid-trace**
  - **broker_virtual_host**: _(Optional)_ ?. No default.
  - **brokers**: Brokers separated by commas. Example: `atlas-test-mb.cern.ch`.
  - **logformat**: _(Optional)_ Formatter of the log. See [logging documentation](https://docs.python.org/3/library/logging.html#logging.Formatter).
  - **loglevel**: _(Optional)_ Set the root logger level to the specified level.

    Values: `{'NOTSET', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'}`. See [logging documentation](https://docs.python.org/3/library/logging.html#levels).

    Default: `DEBUG`.
  - **password**: Password of the `username`.
  - **topic**: Name of the destination topic.
  - **tracedir**: _(Optional)_ Path of the directory for traces. Default:
    `/var/log/rucio`.
  - **username**: Username of the broker.
#### **oidc**
  - **admin_issuer**: Example: `wlcg`.
  - **default_jwt_refresh_lifetime**: _(Optional)_ Integer. Default: `96`.
  - **exchange_grant_type**: _(Optional)_ Default:
    `urn:ietf:params:oauth:grant-type:token-exchange`.
  - **expected_audience**: _(Optional)_ Default: `rucio`.
  - **expected_scope**: _(Optional)_ Default: `openid profile`.
  - **idpsecrets**: Path of the idpsecrets JSON. Example:
    `/opt/rucio/etc/idpsecrets.json`.
#### **permission**
  - **policy**: _(Optional)_ Permission policy. Values: `{atlas, belleii, cms,
    generic, generic_multi_vo}`. Default: `generic`.
#### **policy**
  - **lfn2pfn_algorithm_default**: _(Optional)_ Default algorithm name for
    LFN2PFN translation for this server. Default: `hash`.
  - **package**
  - **package-*VO***
  - **permission**: Same as `permission/policy`.
  - **schema**
  - **scratchdisk_lifetime**: _(Optional)_ Integer. Default: `14`.
  - **support**: _(Optional)_ Contact information.
  - **support_rucio**: _(Optional)_ Rucio contact information. Default:
    `https://github.com/rucio/rucio/issues`.
#### **saml**
  - **config_path**: Path to the SAML config folder. Example:
    `/opt/rucio/lib/rucio/web/ui/common/saml/`.
#### **test**
  - **cacert**: Path of the CA certificate for tests. Example:
    `/opt/rucio/etc/web/ca.crt`
  - **usercert** Path of the user certificate for tests. Example:
    `/opt/rucio/etc/web/usercert.pem`
  - **userkey**: Path of the user certificate key for tests.
#### **trace**
  - **broker_virtual_host**: _(Optional)_ No default.
  - **brokers**: Brokers separated by commas. Example: `atlas-test-mb.cern.ch`.
  - **logformat**: _(Optional)_ Formatter of the log. See [logging documentation](https://docs.python.org/3/library/logging.html#logging.Formatter).
  - **loglevel**: _(Optional)_ Set the root logger level to the specified level.
    Values: `{'NOTSET', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'}`. See [logging documentation](https://docs.python.org/3/library/logging.html#levels).

    Default: `DEBUG`.
  - **password**: Password of the `username`.
  - **port**: _(Optional)_ Port of the broker. Example: `61013`.
  - **topic**: Name of the destination topic. Example: `/topic/rucio.tracer`.
  - **tracedir**: _(Optional)_ Path of the directory for traces. Default:
    `/var/log/rucio/trace`.
  - **username**: Username of the broker.
#### **tracer-kronos**
  - **broker_virtual_host**: _(Optional)_ No default.
  - **brokers**: Brokers separated by commas. Example: `atlas-test-mb.cern.ch`.
  - **chunksize**: Integer
  - **excluded_usrdns**: Separated by commas. Example:
    `CN=proxy,CN=Robot: Ganga Robot,CN=722147,CN=gangarbt,OU=Users,OU=Organic
    Units,DC=cern,DC=ch`.
  - **password**: _(Optional)_ Password of the `username`. Mandatory if
    `use_ssl` is not set. No default.
  - **port**: Port of the broker.
  - **prefetch_size**: `activemq.prefetchSize`, see [activemq documentation](https://activemq.apache.org/what-is-the-prefetch-limit-for)
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
#### **transmogrifier**
  - **maxdids** <!--NOT USED IN CODE-->
#### **upload**
  - **transfer_timeout**: _(Optional)_ Transfer timeout (seconds,
    integer). Default: `360`.
#### **webui**
  - **auth_issuer**: _(Optional)_ Mandatory if `auth_type` = `oidc`. No default.
  - **auth_type**: _(Optional)_ Preferred server side config for webui
    authentication. Values: `{oidc, None}`. Default: `None`.
  - **usercert** <!--NOT USED IN CODE-->
  - **urls**: A CSV specifying urls of Rucio WebUI 2.0 clients. Required for
    correctly handling pre-flight CORS requests.
#### **opendata**
- **rule_enable**: _(Optional)_ Boolean. Enables automatic Open Data rule creation. Default: `False`.
- **rule_rse_expression**: _(Optional)_ Mandatory if `rule_enable=True`. RSE expression defining where data should be replicated.
- **rule_asynchronous**: _(Optional)_ Boolean. If `True`, rules are created asynchronously. Default: `False`.  
- **rule_activity**: _(Optional)_. Specifies the activity name used for rule creation. Defaults to Rucio's default activity name. 
- **rule_account**: _(Optional)_. Account name used to create rules. Default: `"root"`.  
- **rule_vo**: _(Optional)_. Virtual Organization (VO) under which rules are created. Defaults to Rucio's default VO.
- **rule_copies**: _(Optional)_ Integer. Number of copies to be created by the rule. Default: `1`.

## Rucio configuration table
* Checked only if Section/Option pair is not in the Configuration File

### Updating
The table can be updated with the `Rucio Client`, using either
* `rucio-admin config set [section] [option] [value]`
* `rucio.ConfigClient().set_config_option([section], [option], [value])`

These changes take impact immediately without requiring a restart.
Using the client only updates the Configuration Table and does not overwrite
anything in the Configuration File, and thus will not change anything if there
a setting already specified in the Configuration File.

### Options and Defaults
#### **automatix**
  - **account**: _(Optional)_ Account to use. Default: `root`.
  - **dataset_lifetime**: _(Optional)_. Default: `0`.
  - **did_prefix**: _(Optional)_ Default: ` `.
  - ***DIDTYPE*\_pattern**: _(Optional)_ Separated by `separator` char. No
    default.
  - **rses**: The RSE expression to work on.
  - **scope**: _(Optional)_ Default: `test`.
  - **separator**: _(Optional)_ Separator char. No default.
  - **set_metadata**: _(Optional)_ Default: `True`.
  - **sleep_time**: _(Optional)_ Integer. Default: `30`.
#### **clientcachemap**
  - ***client_location['site']***
#### **conveyor**
  - **activity-source-strategy**: _(Optional)_ Default: `{}`.
  - **default-source-strategy**: _(Optional)_ Default: `orderly`.
#### **hermes**
  - **services_list**: List of services separated by commas. Values: `{activemq,
    elastic, influx}`.
#### **kronos**
  - **bad_files_patterns**: _(Optional)_ Patterns (regular expression) separated
    by commas for bad files. Default: `[]`.
#### **lifetime_model**
  - **approvers_email**: _(Optional)_ Separated by commas. Default: `[]`.
#### **reaper**
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
#### **root-proxy-internal**
  - ***client_location['site']***
#### **rules**
  - **apply_rule_max_partition_size**: _(Optional)_ Integer . Default: `2000`.
  - **force_epoch_when_detach**: _(Optional)_ Purge setting of the
    rule. Boolean. Default: `False`.
  - **use_new_rule_algorithm**: _(Optional)_ Boolean. Default: `False`.
#### **subscriptions**
  - **keep_history**: _(Optional)_ Boolean. Default: `False`.
  - **reevaluate_dids_at_close**: _(Optional)_ Flag to reevaluate the DID against
    all the subscriptions when the DID is closed. Boolean. Default: `False`.
#### **transfers**
  - **hop_penalty**: _(Optional)_ Penalty to be applied to each further
    hop. Integer. Default: `10`.
  - **multihop_tombstone_delay**: Seconds (integer). Default: `7200`.
  - **fts3tape_metadata_plugins**: _(Optional)_ Plugins to use with FTS3 to include archive
  metadata in the transfer process. List[String]. Default: `None`.
  - **metadata_byte_limit**: _(Optional)_ Limit applied to `archive_metadata` during a transfer.
  Only used with archive metadata plugins using FTS3. Integer. Default `None`.
  - **stats_enabled**: _(Optional)_ Boolean. Enable logging of transfer stats. Default: `True`.
  - **stats_downsample_period**: _(Optional)_ Integer. Period at which higher-resolution transfer samples are downsampled into lower-resolution (but higher-retention) samples. Note: some randomness is always introduced to this value, in order to reduce the likelihood of performing the related database operations multiple times in parallel.
#### **virtual_placement**
  - **vp_endpoint**: _(Optional)_ Virtual Placement server. Once VP is
    integrated in Rucio it won't be needed. Default: ` `.
#### **vo-map**
  - ***VO***: _(Optional)_ Internal short VO name. No default.

## RSE settings
The RSE settings are set separately using `rucio.RSEClient.update_rse` or `rucio rse update`, and specifies RSE configuration used by the Rucio instance.
Mutable settings are `deterministic`, `rse_type`, `staging_area`, `volatile`, `qos_class`, `availability_delete`, `availability_read`, `availability_write`, `city`, `country_name`, `latitude`, `longitude`, `region_code`, and `time_zone`.
Read more about RSEs [here](started/concepts/rucio_storage_element.md)
and how to set them up [here](operator/configuration.md#creating-new-rses).

- **availability_delete**: Boolean. Control if this RSE allows deletions by the Reaper daemon using any protocol. Default: `True`.
- **availability_read**: Boolean. Control if this RSE allows reads using any protocol. Default: `True`.
- **availability_write**: Boolean. Control if this RSE allows writes using any protocol. Default: `True`.
- **credentials**: Dictionary[String, Any]: Specify token credentials used for accessing this RSE if it is in a commercial cloud. No default.
- **delete_protocol**: Integer: Cannot be changed. Controls matching of protocol priorities for deletions. Default: `1`.
- **deterministic**: Boolean: Controls if the RSE is allowed to generate paths based solely on the DID (scope:filename). More info about non-deterministic RSEs [here](started/concepts/replica_workflow.md#replica-paths-on-storage). Default: `True`.
- **domain**: List[String]: Specifies the locations this RSE may be accessed by clients from. Cannot be changed.
- **id**: String: Identification string of the RSE. Cannot be changed.
- **lfn2pfn_algorithm**: String: Name of the algorithm in the configured policy package to be used for creating replica paths. Cannot be changed. If no lfn2pfn_algorithm attribute is set, then the setting defaults to lfn2pfn_algorithm_default in the configured policy package. Default: `default`.
- **qos_class**: String: No functionality in modern Rucio. No default.
- **read_protocol**: Integer: Cannot be changed. Controls matching of protocol priorities for reads. Default: `1`.
- **rse**: String: The name of the Rucio Storage Element as given at creation time. Cannot be changed.
- **rse_type**: String: Specify `DISK` or `TAPE` for control of [QoS](operator/qos_rse_config.md). Default: `DISK`.
- **sign_url**: Optional[str]. Enable cloud support for this storage element. No default.
- **staging_area**: Boolean.Specify if this RSE is a disk buffer to a tertiary storage backend, subject to additional constraints (specifically a lifetime for rules on this RSE must be defined). Default: `False`.
- **third_party_copy_read_protocol**: Integer: Cannot be changed. Controls matching of protocol priorities for TPC reads. Default `1`.
- **third_party_copy_write_protocol**: Integer: Cannot be changed. Controls matching of protocol priorities for TPC writes. Default `1`.
- **verify_checksum**: Boolean: Specifies if the RSE has support for checksum verification. Default: `True`.
- **volatile**: Boolean. Specifies if the RSE is cache storage. Subject to volatile RSE restrictions detailed [here](https://rucio.github.io/documentation/operator/qos_rse_config). Default: `False`.
- **write_protocol**: Integer: Cannot be changed. Controls matching of protocol priorities for writes. Default: `1`.

## RSE attributes
The RSE Attributes are set separately using `rucio.RSEClient.add_rse_attribute` or `rucio rse attribute add`.
and only contains information about the specific RSE's for the Rucio instance.
Read more about RSEs [here](started/concepts/rucio_storage_element.md)
and how to set them up [here](operator/configuration.md#creating-new-rses).

- **associated_sites**: String. Separated by commas. Used for chaining of subscriptions so that transfers to one RSE will also be mirrored to associated_sites. No default.
- **archive_timeout**: Integer: Only used for transfers with a tape destination. Controls the number of seconds the FTS3 transfer manager will wait for the tape archival of the file to go `FAILED` or `FINISHED`. No default.
- **auto_approve_bytes**: String: Upper limit for the size in bytes of a DID for which rules will be automatically approved. Example: `500GB`. No default.
- **auto_approve_files**: Integer: Upper limit for the number of files covered by a rule which will be automatically approved. No default.
- **available_for_multihop**:  Boolean. If True, allow to use this RSE as an intermediate hop in a multi-hop transfer. Default: `False`.
- **block_manual_approval**: Boolean. Disable manual rule approval for this RSE. Default: `False`.
- **bittorrent_tracker_addr**: String. Used to configure the URL of the bittorrent tracker API when using the torrent transfer manager. No Default.
- **checksum_key**: String. Used to specify an alternate RSE attribute to search for supported checksums beyond those with global support (ADLER32, MD5). Default: `supported_checksums`.
- **country**: String. Used for country level granularity of RSE selectors. No default.
- **decommission**: Boolean. Indicates to the RSE Decommissioning Daemon that this RSE is to be decommissioned. Default: `False`.
- **driver_name_rse_attribute**: String. Used to specify alternate drivers when using the Bittorrent transfer manager. Default: `bittorrent_driver`.
- **fts**: String. Specify the REST API URL of the FTS3 transfer manager. No default.
- **greedyDeletion**: Boolean. Allow files without a rule locking them to be deleted by a Reaper Daemon. Default behavior only marks a file for deletion when there is no space on an RSE for a new required file. Default: `False`.
- **group_by_rse_attribute**: String. Control the RSE attribute (such as `country`) which transfer source RSEs will be grouped by when determining an appropriate transfer source. Default: `UNKNOWN`.
- **globus_endpoint_id**: String. Specify the REST API URL of the Globus transfer manager. No default.
- **hop_penalty**: Integer. Usage cost of this RSE as an intermediate in [multihop transfers](operator_transfers/transfers_overview.md). Overrides the global `transfers/hop_penalty` configuration for this particular RSE.
 Requires `available_for_multihop` attribute is True on the RSE. No default.
- **is_object_store**: Boolean. Control the auditor daemon's behavior. Instead of dumping all files, list them by date. Default: `False`.
- **istape**: Boolean. Default: `False`.
- **lfn2pfn_algorithm**: String. Name of the algorithm to be used for generating paths to files on the storage. Must be defined in the configured policy package. Default: `default`.
- **mock**: Boolean. Default: `False`.
- **multihop_tombstone_delay**: Integer. Delay before a multihop transfer intermediate rule is to be deleted. Defined in seconds. Default: `7200`.
- **naming_convention**: String. Name of the algorithm in the configured policy package which is to be used to validate DIDs on this RSE. Default: `None`.
- **oidc_support**: Boolean. Specifies that the RSE supports OIDC authentication for FTS3 transfers. Default: `False`.
- **overwrite_when_only_on_disk**: Boolean. On a `TAPE` RSE, controls if a file can be overwritten. A file may only be overwritten if it has not yet been written to the tape backend. Default: `False`.
- **overwrite**: Boolean. Controls if a file can be overwritten on the RSE. Default: `True` for `rse_type: DISK`. `False` for `rse_type: TAPE`.
- **physgroup**: String. Used for grouping of rules by CERN experiments. Default: ` `.
- **qbittorrent_management_address**: String. Used to configure the URL of the bittorrent management API when using the torrent transfer manager. No Default.
- **quota_approvers**: List[string]. List of Rucio users separated by commas. Only used in the permission layer of the policy package, and likely specific to the CERN experiments only. Default: `None`.
- **restricted_read**: Boolean. If True, only allow transfers FROM this RSE if started by an account with admin privileges. Default: `False`
- **restricted_write**: Boolean. If True, only allow transfers TO this RSE if started by an account with admin privileges. Default: `False`
- **rule_approvers**: List[string]. List of Rucio users separated by commas which will be notified by email to approve rules on this RSE. Default: `None`.
- **rule_deleters**: List[string]. List of Rucio users separated by commas. Only used in the permission layer of the policy package, and likely specific to the CERN experiments only. Default: `None`.
- **sign_url**: Optional[str]. Controls if URLs for uploads and transfers are to be cryptographically signed by an external service. No default.
- **simulate_multirange** Integer. Control the number of connections for multirange byte requests on commercial cloud storage. Multirange is not supported on S3. No default.
- **site**: String. Used to determine if downloads/transfers are local or wide area network. No default.
- **skip_upload_stat**: Boolean. Disables the use of a GFAL `stat` when calling `rucio upload` for this RSE. Default: `False`.
- **source_for_total_space**: String. Used to specify where Rucio should obtain storage capacity information from. Default: `storage`.
- **source_for_used_space**: String. Used to specify where Rucio should obtain storage usage information from. Default: `storage`.
- **staging_buffer**: String. Used with `TAPE` RSEs to specify to which RSE a file on tape should be transferred to as a disk buffer. Destination RSE should have `staging_area: True`. No default.
- **staging_required**: Boolean. Duplicates the `rse_type` RSE setting. Specifies that files on this RSE will require staging from high-latency storage. Default `False`.
- **strict_copy**: Boolean. Instructs the transfer manager to ONLY copy the file, disabling all validation checks such as `PROPFIND` and checksumming. Default `False`.
- **s3_url_style**: String. For S3 storage elements [specify](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html) `path` or `host`. No default.
- **tier**: Datacenter TIER. Integer (from 1 to 4). No default.
- **type**: Values: `{LOCALGROUPDISK, LOCALGROUPTAPE, GROUPDISK, SCRATCHDISK, MOCK, TEST, DATADISK}`. Default: ` `.
- **use_ipv4**: Boolean. Force the transfer manager to use IPv4 for transfers to this RSE. Default `False`.
- **verify_checksum**: Boolean. Control if checksum is to be queried on transfer source and destination to confirm successful transfers. Default: `True`
