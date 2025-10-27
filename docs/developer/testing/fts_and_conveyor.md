---
id: testing_fts_and_conveyor
title: Testing FTS and the conveyor
---

## Test setup
To test FTS and the Conveyor, you should start the development environment, including the Rucio server and the FTS server;
see [Setting up a Rucio demo environment](operator/setting_up_demo.md) for more information.

The required profiles are `storage` (for the FTS and XRD containers) and `iam` (for the token-related Conveyor tests).
Make sure to pass `-f etc/docker/dev/docker-compose.ports.yml` if you want to access the FTS Web Monitoring UI (see below).
The recommended setup command is as follows:

```sh
docker compose -f etc/docker/dev/docker-compose.yml -f etc/docker/dev/docker-compose.ports.yml --profile storage --profile iam up -d
```

Once the containers are running, you should initialize the tests.
Most of the Conveyor tests require the default test RSEs to be set up.
If using the `tools/run_tests.sh` script, you should pass the `-r` flag to set the RSEs up.

## Submitting a transfer
Running the `conveyor-submitter` daemon will submit transfers to FTS. You can find documentation for this daemon [here](https://rucio.github.io/documentation/bin/rucio-conveyor-submitter)

You can also use the `fts-rest-transfer-submit` command to manually submit a transfer. For example:

```sh
fts-rest-transfer-submit --checksum-mode both -s https://fts3-pilot.cern.ch:8446/ "mock://source.ch/file?size=1024&checksum=1234abcd" "mock://destination.ch/file?size_post=1024&checksum=1234abcd" adler32:1234abcd
```

## Where to find logs
Most of the Conveyor tests found in [`tests/test_conveyor.py`](https://github.com/rucio/rucio/blob/master/tests/test_conveyor.py)
submit their transfers via FTS, so you can find the logs as part of the FTS and ActiveMQ containers.

### Web monitoring
Transfers can be monitored via the FTS Web Monitoring UI.
To set this up, make sure to pass the `docker-compose.ports.yml` file to the Docker compose command when setting up the tests:

```sh
# Note: specify profiles as well, if needed
docker compose -f etc/docker/dev/docker-compose.yml -f etc/docker/dev/docker-compose.ports.yml up -d
```

Once running, you should be able to access the WebUI locally at https://localhost:8449/fts3/ftsmon/#/.

For reference:
- [FTS3 Web Monitoring](https://fts3-docs.web.cern.ch/fts3-docs/docs/install/fts3mon.html)

### FTS container
In the FTS container, you can see the transfer status by running:

```sh
fts-rest-transfer-status -s https://fts:8446 [transfer_id]
```

You can also find transfer logs in `/var/log/fts3/`.

### ActiveMQ
The ActiveMQ logs are in the FTS container, and can be found in `/var/log/fts3/msg.log`.

The config file is in the ActiveMQ container, in `/opt/apache-activemq/conf`.

## Testing older versions of FTS
The `rucio/fts` container does not pin the versions of the FTS packages,
so even if you installed an older version of this container,
it would install the latest versions of the FTS packages.

To test older versions of FTS:
1. Change the FTS container's Dockerfile's `dnf` dependency installation command to point to the desired FTS versions

For example, for `3.13.3`:

```Dockerfile
RUN dnf install --nogpgcheck -y \
  fts-server-3.13.3 \
  fts-mysql-3.13.3 \
  fts-rest-client-3.13.3 \
  fts-rest-server-3.13.3 \
  fts-monitoring-3.13.3 \
  fts-server-selinux-3.13.3 \
  fts-rest-server-selinux-3.13.3 \
  fts-monitoring-selinux-3.13.3 \
  fts-msg-3.13.3 \
  mysql \
  multitail \
  gfal2-plugin*
```

2. Run `docker system prune -af` in order to clear the regular `rucio/fts` installation from the system.
3. Build the custom FTS container locally via `docker build .`, and point the `etc/docker/dev/docker-compose.yml` file to the custom FTS container.
