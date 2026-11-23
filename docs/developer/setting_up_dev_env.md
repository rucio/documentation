---
id: setting_up_dev_env
title: Setting up a Rucio developer environment
---

This page describes the containerised Rucio development environment in
[`etc/docker/dev`](https://github.com/rucio/rucio/tree/master/etc/docker/dev).
It is for developing and testing Rucio, not for operating a production service.

## Editor setup

The sections below start the same Docker Compose environment from a terminal.
Editor-specific setup is documented separately:

- [Visual Studio Code](./setting_up_vscode_dev_env.md)
- [IntelliJ Ultimate](./setting_up_intellij_dev_env.md)
- [Mac with Apple Silicon](./setting_up_mac_apple_silicon.md)

## Prerequisites

The containers are ready-made for Docker, so you need a working Docker
installation. To install Docker for your platform, refer to the
[Docker installation guide](https://docs.docker.com/engine/install/), for
example for AlmaLinux 9
[follow these instructions for the Docker Community Edition](https://docs.docker.com/engine/install/rhel/).
Install a current Docker version.

Start the Docker daemon with `sudo systemctl start docker`.
You can confirm that Docker is running by executing the following command
(it needs `sudo` if your user is not in the `docker` group):

```bash
docker run hello-world
```

If successful, this prints an informational message telling you that you are
ready to go.

## Preparing the environment

If SELinux is running it can block access to directories mounted inside the
containers. Depending on your node, you may need to put it in permissive mode
with `setenforce permissive`.

Fork the [main Rucio repository on GitHub](https://github.com/rucio/rucio),
clone your fork to `~/dev/rucio`, and add the main repository as `upstream`:

```bash
cd ~/dev
git clone git@github.com:<your_username>/rucio.git
cd rucio
git remote add upstream git@github.com:rucio/rucio.git
git fetch --all
```

Set your full name and email address in `.git/config`, and create a
`.githubtoken` file that contains a token from
[GitHub account settings](https://github.com/settings/tokens).

Commands on this page are run from the Rucio repository. To avoid passing
`--file` on every `docker compose` call, export the compose file:

```bash
export COMPOSE_FILE=$(pwd)/etc/docker/dev/docker-compose.yml
```

The examples below expect this variable to be set. To make it permanent for
this repository, put this line in a `.env` file at the repository root.
`docker compose` reads that file automatically. Do not prefix it with
`export`, and do not use shell substitution: `.env` values are taken literally.

```bash
COMPOSE_FILE=etc/docker/dev/docker-compose.yml
```

## Profiles

`etc/docker/dev/docker-compose.yml` starts a small default stack and adds
services through profiles. The default stack is the Rucio server, its
PostgreSQL 16 catalogue database (`ruciodb`), Graphite, InfluxDB, ActiveMQ
5.18, Elasticsearch 9.0 (used for logging), and a WebDAV test service
(`web1`). No container ports are published on the host unless you also pass
`docker-compose.ports.yml`, described under [Exposing ports](#exposing-ports).

| Profile | What it adds |
| --- | --- |
| *(none)* | [Standard environment](#using-the-standard-environment) for unit tests and basic development |
| `storage` | [FTS and XRootD storage](#using-the-environment-including-storage) |
| `monitoring` | [Logstash, Kibana, and Grafana](#using-the-environment-including-monitoring) |
| `oracle` | [Oracle database](#using-oracle) for the Rucio catalogue |
| `postgres16` | [PostgreSQL 16](#using-postgresql-16) for the Rucio catalogue |
| `mysql8` | [MySQL 8](#using-mysql-8) for the Rucio catalogue |
| `client` | [Rucio client container](#using-the-client-profile) |
| `externalmetadata` | [External metadata stores](#using-the-external-metadata-profile), including PostgreSQL and Elasticsearch |
| `iam` | [Indigo IAM and Keycloak](#using-iam) |

Select an alternate catalogue database with the `RDBMS` environment variable:
`oracle`, `postgres16`, or `mysql8`. Leave it unset to use the default
PostgreSQL database.

## Using the standard environment

Run the containers (this may need `sudo`):

```bash
docker compose up --detach
```

Verify that they are running:

```bash
docker compose ps
```

Open a shell in the Rucio server container:

```bash
docker compose exec rucio /bin/bash
```

To verify the environment, either run the full unit tests or only set up the
database. The full suite takes about 10 minutes:

```bash
tools/run_tests.sh
```

Alternatively, bootstrap the test environment once with `-i` and then run a
module, a class, or a single test with `tools/pytest.sh`:

```bash
tools/run_tests.sh -i
tools/pytest.sh tests/test_replica.py
tools/pytest.sh tests/test_replica.py::TestReplicaCore
tools/pytest.sh tests/test_replica.py::TestReplicaCore::test_delete_replicas
```

## Using the environment including storage

Start the storage profile:

```bash
docker compose --profile storage up --detach
```

This adds the FTS server, its MySQL 8.4 database, the XRootD storage servers,
Garage, and an SSH storage server to the default stack.

Upload and download data, and submit transfers, by passing `-r` as well as
`-i`:

```bash
tools/run_tests.sh -ir
```

This creates a few random files and uploads them, creates a few datasets and
containers, and requests a replication rule for the container, which starts in
state `REPLICATING`. Run the transfer daemons once, in order:

```bash
rucio rule show <rule-id>

rucio-conveyor-submitter --run-once
rucio-conveyor-poller --run-once --older-than 0
rucio-conveyor-finisher --run-once

rucio rule show <rule-id>
```

On the second display of the rule, its state has cleared to `OK`.

Testing FTS and the conveyor in more detail is covered in
[Testing FTS and the conveyor](./testing/fts_and_conveyor.md).

## Using the environment including monitoring

Start the storage and monitoring profiles together:

```bash
docker compose --profile storage --profile monitoring up --detach
```

This adds Logstash, Kibana, and Grafana. The logging Elasticsearch service is
already part of the default stack. It is separate from `elasticsearch_meta`,
which is started by the `externalmetadata` profile.

Create some events and write them to Elasticsearch by running the tests again:

```bash
tools/run_tests.sh -ir
```

Then run the transfer daemons (`conveyor-*`) and the messaging daemon
(`hermes`) to send the events to ActiveMQ. `run_daemons` repeats those
single-execution daemons in a loop:

```bash
run_daemons
```

`run_daemons` and `create_monit_data` are commands inside the Rucio server
container. When the daemons have run, the events are in Kibana. Kibana, Grafana,
and the ActiveMQ console are reachable on the host only if Compose was started
with `docker-compose.ports.yml`. On a local machine, Kibana is then at
[http://localhost:5601](http://localhost:5601). The index pattern is added
automatically, and one dashboard is available. From a remote machine, forward
the port:

```bash
ssh -L 5601:127.0.0.1:5601 <hostname>
```

Grafana serves one dashboard at [http://localhost:3000](http://localhost:3000).
The default credentials are `admin` / `admin`. The ActiveMQ web console is at
[http://localhost:8161](http://localhost:8161).

To create transfers and events continuously, open two shells. In one, run:

```bash
create_monit_data
```

In the other, run:

```bash
run_daemons
```

## Using Oracle

The `oracle` profile starts Oracle XE 18.4.0 for the Rucio catalogue. The
generated configuration connects as `system` / `rucio` to service `XE` on host
`oracle`, port `1521`. Set `RDBMS=oracle` so the server container generates
that configuration:

```bash
RDBMS=oracle docker compose --profile oracle up --detach
```

The `rucio-dev` image does not install an Oracle client.
[rucio/containers#523](https://github.com/rucio/containers/pull/523) added
Instant Client 23 to the server, daemon, and UI images, not to `rucio-dev`.
Inside the server container, install the same 19.12 client the test image uses:

```bash
docker exec -it dev-rucio-1 bash
dnf install -y libnsl libaio
rpm -i https://download.oracle.com/otn_software/linux/instantclient/1912000/oracle-instantclient19.12-basiclite-19.12.0.0.0-1.x86_64.rpm
echo "/usr/lib/oracle/19.12/client64/lib" > /etc/ld.so.conf.d/oracle-instantclient.conf
ldconfig
```

## Using PostgreSQL 16

The default catalogue database is already PostgreSQL 16, with password
`secret`. The `postgres16` profile starts a separate PostgreSQL 16 database
that replaces it when `RDBMS=postgres16`. The database name and user are
`rucio`, and the password is `rucio`.

```bash
RDBMS=postgres16 docker compose --profile postgres16 up --detach
```

## Using MySQL 8

The `mysql8` profile starts MySQL 8.4 for the Rucio catalogue. The database
name and user are `rucio`, and the password is `rucio`.

```bash
RDBMS=mysql8 docker compose --profile mysql8 up --detach
```

## Using the client profile

The `client` profile starts `dev-rucioclient-1`, a container that stays running
so you can execute the Rucio client against the development server. It mounts
the local source tree, in the same way as the server container.

```bash
docker compose --profile client up --detach
```

## Using the external metadata profile

The `externalmetadata` profile starts the external metadata services: a
PostgreSQL database for metadata (host `postgres`, port `5433`, database
`metadata`), `elasticsearch_meta`, and MongoDB. These are not the catalogue
database and not the logging Elasticsearch from the default stack.

```bash
docker compose --profile externalmetadata up --detach
```

The plugin configuration is not written into `rucio.cfg` automatically. Append
one of the blocks below, then restart `httpd` inside the server container.
The container entrypoint regenerates `/opt/rucio/etc/rucio.cfg` on every
start, so this change lasts until the container is recreated.

### PostgreSQL metadata plugin

```bash
docker exec -it dev-rucio-1 bash
cat << EOF >> /opt/rucio/etc/rucio.cfg

[metadata]
plugins = rucio.core.did_meta_plugins.postgres_meta.ExternalPostgresJSONDidMeta
postgres_service_host = postgres
postgres_service_port = 5433
postgres_db = metadata
postgres_user = rucio
postgres_password = secret
postgres_table_is_managed = True
EOF
httpd -k restart
```

### Elasticsearch metadata plugin

`elasticsearch_meta` is the metadata cluster. The Elasticsearch container in
the default stack is used for logging and monitoring.

```bash
docker exec -it dev-rucio-1 bash
cat << EOF >> /opt/rucio/etc/rucio.cfg

[metadata]
plugins = rucio.core.did_meta_plugins.elasticsearch_meta.ElasticDidMeta
elastic_service_hosts = http://elasticsearch_meta:9200
elastic_user = elastic
elastic_password = rucio
EOF
httpd -k restart
```

## Using IAM

The `iam` profile starts Indigo IAM, its login service, Keycloak, and the
MariaDB database they share. Conveyor tests that need tokens use this profile
together with `storage`. See
[Testing FTS and the conveyor](./testing/fts_and_conveyor.md).

```bash
docker compose --profile iam up --detach
```

## Exposing ports

For testing, it can help to publish container ports on localhost. The optional
`docker-compose.ports.yml` file defines those ports.

Pass it in addition to the main compose file:

```sh
docker compose --file etc/docker/dev/docker-compose.yml --file etc/docker/dev/docker-compose.ports.yml up --detach
```

If you use `tools/bootstrap_dev.sh`, pass `-x` / `--expose-ports`:

```sh
./tools/bootstrap_dev.sh --master --expose-ports
```

## Development

Edit files on the host and test the changes inside the containers. On the host:

```bash
cd ~/dev/rucio
emacs <file>
```

Use two shells inside the container. One follows the server logs with
`logshow`. The other runs commands.

Terminal 1, the server log:

```bash
docker exec -it dev-rucio-1 /bin/bash
logshow
```

Leave that shell open. Terminal 2, the interactive shell:

```bash
docker exec -it dev-rucio-1 /bin/bash
rucio whoami
```

The command prints in Terminal 2, and the server debug output shows in
Terminal 1.

`logshow` is also available in the FTS container:

```bash
docker exec -it dev-fts-1 /bin/bash
logshow
```

## Development tricks

### Server changes

If you edit server-side files, for example under `lib/rucio/web`, and the
changes do not show up, flush memcache and reload the web server without
restarting the container. Inside the container:

```bash
echo 'flush_all' | nc localhost 11211 && httpd -k graceful
```

### Database access

The default catalogue database is PostgreSQL 16. From inside the Compose
network it is host `ruciodb`, database `rucio`, schema `dev`, username
`rucio`, password `secret`. Port `5432` is published on the host only when
Compose is started with `docker-compose.ports.yml`. Then a SQL client such as
[DBeaver](https://dbeaver.io) can connect to `localhost:5432`.

### Docker is eating my disk space

Reclaim disk space with:

```bash
docker system prune -f --volumes
```

### Where do I find the Dockerfile

The development image is published as `rucio/rucio-dev`. The
[Dockerfile](https://github.com/rucio/containers/tree/master/dev) builds a
Rucio environment that mounts your local code over the container `bin`, `lib`,
and `tools` directories. It runs against a PostgreSQL database with fsync and
most WAL durability features disabled, so tests can run against the mounted
code without rebuilding the image.

### I need a Docker image based on another branch

Clone the container files and change the dev image before building it. For
example, to clone a branch other than `master` into the image:

```bash
git clone https://github.com/rucio/containers
```

```bash
# from
RUN git clone --depth 1 --branch "$TAG" https://github.com/rucio/rucio.git /tmp/rucio && rm -rf /tmp/rucio/.git
# to, for example:
RUN git clone --depth 1 --branch next https://github.com/rucio/rucio.git /tmp/rucio && rm -rf /tmp/rucio/.git
docker build --tag rucio/rucio-dev
```

Then start Compose from the Rucio repository as usual:

```bash
docker compose --file etc/docker/dev/docker-compose.yml up --detach
```

## Running daemons

Daemons are not running in this environment. Each daemon supports a single
execution with `--run-once`. Reset the system first:

```bash
tools/run_tests.sh -ir
```

`tools/run_tests.sh -r` registers XRD1, XRD2, XRD3, and SSH1 and uploads test
files. List where they are, then attach the names you see to a new dataset.
`test:file1` through `test:file4` below are placeholders, not names the test
setup creates:

```bash
rucio replica list file <scope:name>
rucio did add --type dataset test:mynewdataset
rucio did content add --to-did test:mynewdataset <scope:name> ...
```

Add a rule so Rucio also creates replicas on XRD3:

```bash
rucio rule add --copies 1 --rses XRD3 test:mynewdataset
```

The command prints a rule id. The rule starts in `REPLICATING`, with one lock
per file. `rucio rule show` prints a `Locks OK/REPLICATING/STUCK` line:

```bash
rucio rule show <rule-id>
```

Run the daemons. The judge-evaluator picks up the rule, the
conveyor-submitter sends the transfers to FTS, the conveyor-poller reads the
transfer state back from FTS, and the conveyor-finisher updates the catalogue:

```bash
rucio-judge-evaluator --run-once
rucio-conveyor-submitter --run-once
rucio-conveyor-poller --run-once
rucio-conveyor-finisher --run-once
```

The locks are then OK, and `rucio replica list file test:mynewdataset` also
shows replicas on XRD3. XRootD listens on `1094` (XRD1), `1095` (XRD2), and
`1096` (XRD3) inside the Compose network.
