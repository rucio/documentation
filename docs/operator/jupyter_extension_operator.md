---
id: jupyter_extension_operator
title: Rucio JupyterLab Extension
sidebar_label: JupyterLab Extension
---

## Overview

The Rucio JupyterLab Extension integrates Rucio's capabilities directly into JupyterLab, allowing users to browse, search, and access datasets from Rucio instances without leaving their notebook environment.

The extension is composed of:
- A Python package `rucio_jupyterlab` for the server extension
- An NPM package `rucio-jupyterlab` for the frontend extension

### Requirements

- JupyterLab >= 3.0
- Rucio Server >= 1.28

### Installation

You will need NodeJS to install the extension. For JupyterLab 4.x you will need NodeJS >= 20 and >= 14 for JupyterLab 3.x.

#### JupyterLab 4.x

```bash
pip install rucio-jupyterlab
```

#### JupyterLab 3.x

For JupyterLab 3.x, please use the latest supported version.

```bash
pip install rucio-jupyterlab==0.10.0
```

## Configuration Responsibilities: Who Does What

Before going further, it is important to make clear which parts of the setup are expected to be handled by the **facility / site administrator** and which parts are left to the **end user**.
A common source of confusion when deploying the extension at a new facility is the assumption that users are expected to fill in the connection details themselves — they are not.

### The site administrator is responsible for:

- Building (or selecting) the single-user Jupyter image with the `rucio-jupyterlab` extension installed and the required system dependencies (e.g. `voms-clients-java`, `gfal2`, a Rucio CA bundle — see [Prerequisites](#prerequisites-and-dependencies)).
- Providing the `jupyter_server_config.json` file that lists the available Rucio instances and RSEs.
  This file must be populated **before** the Jupyter server starts (see [Configuration File Location](#configuration-file-location)).
- Choosing how that file is delivered to user sessions: baked into the image, injected via a `before-notebook.d` hook, or sourced from a shared filesystem such as CVMFS (see [Distributing Configuration via CVMFS](#distributing-configuration-via-cvmfs)).
- Deciding which RSE(s) make sense locally.
  Pointing users at an RSE that is not mounted at the facility (for example, using a CERN-hosted RSE from a US Tier-3) will not work — the destination RSE must be one that is FUSE mounted on the JupyterLab server.

### The end user is responsible for:

- Authenticating against Rucio.
  Depending on the facility this means either:
  - Generating a VOMS / X.509 proxy with `voms-proxy-init` from inside the notebook environment, or
  - Providing an existing proxy file (e.g. uploaded to the session), or
  - Logging in with username/password or OpenID Connect, when configured.
- They are **not** expected to know or fill in the Rucio base URL, auth URL, CA cert path, RSE name, mount path, etc.
  Those values come from the administrator-provided configuration file.

## Quick Start for Facility Administrators

If you are deploying the extension at a new Tier-2 / Tier-3 / analysis facility for the first time, the typical steps are:

1. **Pick (or build) a single-user Jupyter image.**
   The reference image at [`docker/container/Dockerfile`](https://github.com/rucio/jupyterlab-extension/blob/master/docker/container/Dockerfile) is a good starting point.
   It is based on `quay.io/jupyter/docker-stacks-foundation:python-3.12` and installs the extension plus `python-gfal2`.
   You will additionally want `voms-clients-java` if your users authenticate with a VOMS proxy.

2. **Identify a destination RSE that is locally mounted.**
   In Replica mode, the extension can only present data that physically lives on a filesystem your users can read.
   Pick an RSE that is FUSE mounted on the JupyterLab nodes (EOS, CephFS, XRootD, …).
   If you have no such RSE, configure the instance with `mode: download` instead.

3. **Decide where the configuration lives.**
   Three common patterns:

   - **Bake it into the image** for a single-instance, single-RSE setup.
     Simple but not portable.
   - **Inject it via `before-notebook.d`** for JupyterHub / Z2JH deployments.
     The hook can read environment variables set by the spawner — see [`docker/container/configure.py`](https://github.com/rucio/jupyterlab-extension/blob/master/docker/container/configure.py) for the full list of `RUCIO_*` variables that are honoured out of the box.
   - **Source it from CVMFS** when many sites share the same configuration; see [Distributing Configuration via CVMFS](#distributing-configuration-via-cvmfs).

4. **Decide on an authentication strategy** (`x509`, `x509_proxy`, `userpass`, or `oidc`) and ship the matching prerequisites in the image (Step 1) and the matching options in the config (Step 3).

5. **Smoke-test as a real user.**
   Spawn a session, open the Rucio panel on the left side bar, and confirm:
   - The *Active Instance* drop-down is populated.
   - You can authenticate.
   - You can browse a known scope and queue a small test DID.

   If the *Active Instance* drop-down is empty, jump to [Troubleshooting](#troubleshooting) — this is almost always a config timing problem, not a content problem.

## Operation Modes

The extension supports two distinct operation modes, which determine how files are made available to users.

### Replica Mode

In this mode, files are transferred by Rucio to a storage mounted to the JupyterLab server. This is the recommended mode for shared environments.

**Requirements:**
- At least one Rucio instance
- A storage system attached to the JupyterLab installation via FUSE (Filesystem in Userspace):
  - The storage must be mounted on the host machine or Kubernetes nodes where JupyterLab pods run
  - Common FUSE implementations include:
    - **EOS**: CERN's disk-based storage system (via [`eos fuse mount`](https://eos-docs.web.cern.ch/configuration/fuse.html))
    - **CephFS**: Distributed filesystem (via [`ceph-fuse`](https://docs.ceph.com/en/latest/man/8/ceph-fuse/))
    - **XRootD**: High-performance data access protocol (via [`xrootdfs`](https://manpages.debian.org/testing/xrootd-fuse/xrootdfs.1.en.html))
  - The mounted storage must be registered as a Rucio Storage Element (RSE) in your Rucio instance
  - Should be shared among multiple users with read permissions for all users
  - It's recommended that quotas be disabled, as the extension does not handle quota errors gracefully

  For mounting examples, see the [ESCAPE VRE infrastructure documentation](https://github.com/vre-hub/vre/tree/master/infrastructure)

**Configuration Parameters:**
- `destination_rse`: The name of the Rucio Storage Element mounted to the JupyterLab server
- `rse_mount_path`: The base path where the RSE is mounted
- `path_begins_at`: Index indicating which part of the PFN should be appended to the mount path (defaults to 0)
- `replication_rule_lifetime_days`: Optional lifetime for replication rules in days

### Download Mode

In this mode, the extension downloads files directly to the user's home directory or another local storage location. This mode is useful when your JupyterLab installation does not have a Rucio Storage Element (RSE) mounted.

**Requirements:**
- At least one Rucio instance
- Network access to Rucio Storage Elements (RSE) from the notebook server to download files
- Sufficient local storage space available in the user directory for downloaded files

## Prerequisites and Dependencies

Beyond installing the `rucio-jupyterlab` Python package, the single-user Jupyter image needs a small number of system dependencies.
These are easy to miss and are a common cause of "the extension is installed but doesn't work" reports.

### For VOMS / X.509 proxy authentication

If the facility uses VOMS or X.509 proxy authentication (`default_auth_type: x509` or `x509_proxy`, or `voms_enabled: true`), the image must provide the `voms-proxy-init` and `grid-proxy-init` executables.
On Debian/Ubuntu and on EPEL-based images:

```bash
# Debian / Ubuntu
apt install voms-clients-java

# RHEL / CentOS / AlmaLinux
yum install epel-release
yum install voms-clients-java
```

Without this package, users cannot generate a proxy from inside the notebook environment and authentication will fail silently.
As an alternative, the facility may pre-stage a proxy file in a known location and instruct users to upload their own proxy to the session — but in that case the documentation shipped with the image should make this explicit.

### For Download mode

Download mode also needs `gfal2` and its Python bindings, available from conda-forge or EPEL:

```bash
conda install -c conda-forge python-gfal2
# OR
yum install gfal2-all gfal2-python
```

### A Rucio CA bundle

The path given by `rucio_ca_cert` must point to a PEM file accessible from inside the user's session.
There are several reasonable strategies:

- **Bake it into the image** at build time, e.g. `/opt/rucio/rucio_ca.pem`.
  This is the simplest option and the one used by the reference image at [`docker/container/Dockerfile`](https://github.com/rucio/jupyterlab-extension/blob/master/docker/container/Dockerfile).
- **Reuse a CVMFS-distributed bundle** such as `/cvmfs/grid.cern.ch/etc/grid-security/certificates/`, when CVMFS is available at the facility.
  This avoids the need to ship and maintain the certificate independently of the image.
- **Mount it as a Kubernetes secret** for JupyterHub / Z2JH deployments.

Whichever option is chosen, the path itself is set centrally in the `jupyter_server_config.json` provided by the administrator — users should not have to know about it.

## Configuration

The extension can be configured locally or remotely via a JSON configuration file.

### Configuration File Location

The extension is configured via a `.json` file, usually located in `$HOME/.jupyter/` and named `jupyter_server_config.json`.
This file must be present **before the Jupyter server session starts** and can be added via:
- Jupyter `before-notebook.d` hooks (recommended for JupyterHub / Z2JH)
- A Docker `CMD` instruction or entrypoint script that runs before `jupyter lab` (as done in [`docker/container/configure.sh`](https://github.com/rucio/jupyterlab-extension/blob/master/docker/container/configure.sh))
- Bake-in at image build time

:::warning Configuration must be in place before the extension loads

The extension reads its configuration once, at server-extension load time.
If the `jupyter_server_config.json` file is written (or modified) **after** the Jupyter server has already started and the extension has initialised, the extension will not pick up the new values and the form on the left-hand side of JupyterLab will show empty drop-downs ("Active Instance" with no options to choose from).

This is the single most common cause of the "I copy-pasted the example JSON but nothing shows up in the extension" symptom.
Always make sure the config file is written from a `before-notebook.d` hook or equivalent pre-start mechanism, not from inside the running notebook.
:::

### Base Local Configuration

In your Jupyter configuration (e.g., `~/.jupyter/jupyter_server_config.json`), add the following snippet for a basic setup:

```json
{
    "RucioConfig": {
        "instances": [
            {
                "name": "experiment.cern.ch",
                "display_name": "Experiment",
                "rucio_base_url": "https://rucio",
                "rucio_auth_url": "https://rucio",
                "rucio_ca_cert": "/path/to/rucio_ca.pem",
                "destination_rse": "XRD1-EOS",
                "rse_mount_path": "/eos/rucio",
                "path_begins_at": 4,
                "mode": "replica"
            }
        ]
    }
}
```

### Advanced Local Configuration

For production environments with multiple instances and advanced features:

```json
{
    "RucioConfig": {
        "instances": [
            {
                "name": "experiment1.cern.ch",
                "display_name": "Experiment1",
                "rucio_base_url": "https://rucio1",
                "rucio_auth_url": "https://rucio1",
                "rucio_ca_cert": "/path/to/rucio_ca.pem",
                "site_name": "CERN",
                "vo": "experiment1-vo",
                "mode": "replica",
                "wildcard_enabled": true,
                "oidc_auth": "env",
                "oidc_env_name": "RUCIO_ACCESS_TOKEN1"
            },
            {
                "name": "experiment2.cern.ch",
                "display_name": "Experiment2",
                "rucio_base_url": "https://rucio2",
                "rucio_auth_url": "https://rucio2",
                "rucio_ca_cert": "/path/to/rucio_ca.pem",
                "site_name": "CERN",
                "vo": "experiment2-vo",
                "mode": "replica",
                "wildcard_enabled": true,
                "oidc_auth": "env",
                "oidc_env_name": "RUCIO_ACCESS_TOKEN2"
            }
        ],
        "default_instance": "experiment1.cern.ch",
        "default_auth_type": "oidc",
        "log_level": "debug"
    }
}
```

### Remote Configuration

To use remote configuration, define instances locally with a reference to an external configuration file:

```json
{
    "RucioConfig": {
        "instances": [
            {
                "name": "experiment.cern.ch",
                "display_name": "Experiment",
                "$url": "https://url-to-rucio-configuration/config.json"
            }
        ]
    }
}
```

In the JSON file pointed to by `$url`, use a configuration similar to:

```json
{
    "rucio_base_url": "https://rucio",
    "destination_rse": "XRD1-EOS",
    "rucio_auth_url": "https://rucio",
    "rucio_ca_cert": "/path/to/rucio_ca.pem",
    "rse_mount_path": "/eos/rucio",
    "path_begins_at": 4,
    "mode": "replica",
    ...
}
```

**Note:** Attributes `name`, `display_name`, and `mode` must be defined locally (either in the configuration file or as environment variables). If an attribute is defined in both local and remote configuration, the local one takes precedence.

For a complete list of configuration parameters, see the next section or the [Rucio JupyterLab Extension GitHub repository](https://github.com/rucio/jupyterlab-extension/blob/master/CONFIGURATION.md)

### Distributing Configuration via CVMFS

For experiments where many sites share an essentially identical configuration (for example, all ATLAS or all CMS facilities pointing at the same Rucio instance), it is often more practical to distribute the configuration through CVMFS than to maintain it inside every site's image.

The pattern used at SWAN is:

1. Ship a small configuration script and a per-instance JSON snippet on a CVMFS repository — for example `/cvmfs/sw.escape.eu/etc/jupyter/`.
   The script reads selections made by the user at session-spawn time (Rucio instance, RSE, etc.) and writes the resulting `jupyter_server_config.json`.
2. Invoke that script from a `before-notebook.d` hook (or from the spawner) so that it runs **before** `jupyter lab` starts.
   This is the same timing constraint described in the warning above — once the extension is loaded, later edits to the JSON are not picked up.

A minimal hook script looks like:

```bash
#!/bin/bash
# /usr/local/bin/before-notebook.d/10-rucio-config.sh
set -e

CONFIG_SRC=/cvmfs/sw.experiment.org/etc/jupyter/rucio
mkdir -p "${HOME}/.jupyter"
# pick the right snippet based on a spawner-set env var, with a fallback
INSTANCE="${RUCIO_INSTANCE:-default}"
cp "${CONFIG_SRC}/${INSTANCE}.json" "${HOME}/.jupyter/jupyter_server_config.json"
```

This keeps the per-site image minimal: it only needs the extension itself and the system dependencies.
Both the instance list and the CA bundle path can live in CVMFS and be updated centrally.

If CVMFS is not available, the same approach works with any read-only shared filesystem mounted on the JupyterLab nodes.

## Configuration Parameters

### Instance Configuration

#### Name - `name`
A unique machine-readable identifier for the Rucio instance. It is recommended to use FQDN (Fully Qualified Domain Name). Must be declared locally in the configuration file or set via the `RUCIO_NAME` environment variable.

Example: `atlas.cern.ch`, `cms.cern.ch`

#### Display Name - `display_name`
A user-friendly name displayed in the extension interface. Must be declared locally in the configuration file or set via the `RUCIO_DISPLAY_NAME` environment variable.

Example: `ATLAS`, `CMS`

#### Mode - `mode`
The operation mode of the extension. Must be declared locally in the configuration file or set via the `RUCIO_MODE` environment variable.

Allowed values:
- `replica`: Files are transferred to a mounted storage
- `download`: Files are downloaded to user directory

#### Rucio Base URL - `rucio_base_url`
Base URL for the Rucio instance accessible from the JupyterLab server, **without trailing slash**.

Example: `https://rucio`

#### Rucio Auth URL - `rucio_auth_url`
Base URL for the Rucio authentication service (if separate) accessible from the JupyterLab server, **without trailing slash**.

Example: `https://rucio-auth`

#### Rucio CA Certificate File Path - `rucio_ca_cert`
Path to Rucio server certificate file, accessible via filesystem mount. Optional in Replica mode, mandatory in Download mode.

Example: `/opt/rucio/rucio_ca.pem`

#### App ID - `app_id`
Rucio App ID. Optional.

Example: `swan`

#### Site Name - `site_name`
Site name of the JupyterLab instance. Optional. Allows Rucio to determine whether to serve a proxied PFN or not.

Example: `ATLAS`

### Virtual Organizations

#### VO Name - `vo`
VO (Virtual Organization) of the instance. Optional, for use in multi-VO installations only. If VOMS is enabled, this value will be supplied as `--voms` option when invoking `voms-proxy-init`.

Example: `def`

#### VOMS Enabled - `voms_enabled`
Boolean flag to enable VOMS proxy certificate generation. When set to `true`, the extension uses `voms-proxy-init` to generate a proxy certificate for authenticated RSE access.

Default: `false`

#### VOMS `certdir` Path - `voms_certdir_path`
If VOMS is enabled, sets the `--certdir` option for `voms-proxy-init`. Refer to `voms-proxy-init` documentation.

Example: `/etc/grid-security/certificates`

#### VOMS `vomses` Path - `voms_vomses_path`
If VOMS is enabled, sets the `--vomses` option for `voms-proxy-init`. Refer to `voms-proxy-init` documentation.

Example: `/etc/grid-security/vomses`

**WARNING:** Earlier versions of `voms-proxy-init` do not support the `--vomses` option. In that case, this option must be omitted.

### Storage Elements and Search

#### Destination RSE - `destination_rse`
The name of the Rucio Storage Element mounted to the JupyterLab server. Mandatory in Replica mode.

Example: `SWAN-EOS`

#### RSE Mount Path - `rse_mount_path`
The base path where the RSE is mounted to the server. Mandatory in Replica mode.

Example: `/eos/rucio`

#### File Path Starting Index - `path_begins_at`
This configuration indicates which part of the PFN (Physical File Name) should be appended to the mount path. Only applicable in Replica mode. Defaults to `0`.

**Example:** For a PFN of `root://xrd1:1094//rucio/test/49/ad/f1.txt` and mount path `/eos/rucio`:
- `path_begins_at: 1` means start from the 2nd slash in the PFN
- Resulting path: `/eos/rucio/test/49/ad/f1.txt`

#### Replication Rule Lifetime (in days) - `replication_rule_lifetime_days`
Replication rule lifetime in days. Optional, only applicable in Replica mode.

Example: `365`

#### Wildcard Search Enabled - `wildcard_enabled`
Boolean flag to enable wildcard DID (Dataset Identifier) search. When enabled, users can search using wildcard patterns like `scope:*`.

Default: `false`

### Authentication Configuration

#### OpenID Connect Auth Source - `oidc_auth`
Specifies where the extension retrieves the OIDC token. Optional.

Allowed values:
- `file`: Read token from a file
- `env`: Read token from an environment variable

#### OpenID Connect Token Filename - `oidc_file_name`
Specifies an absolute path to a file containing the OIDC access token. Required if `oidc_auth` is set to `file`.

Example: `/var/run/secrets/oidc_token`

#### OpenID Connect Token Environment Variable Name - `oidc_env_name`
Specifies the environment variable name containing the OIDC access token. Required if `oidc_auth` is set to `env`.

Example: `RUCIO_ACCESS_TOKEN`

**IMPORTANT:** The `oidc_auth` parameter and either `oidc_file_name` or `oidc_env_name` are necessary if OIDC token authentication is to be used.

### Global Configuration

#### Default Instance - `default_instance`
The instance to be pre-selected in the settings menu of the extension.

Example: `atlas.cern.ch`

#### Default Authentication Type - `default_auth_type`
Default authentication method. Possible values:
- `oidc`: OpenID Connect tokens
- `x509`: X.509 user certificate
- `x509_proxy`: X.509 proxy certificate
- `userpass`: Username and password

#### Logging Level - `log_level`
Specifies the verbosity of logs. Possible values:
- `debug`: Most verbose
- `info`: Informational messages
- `warning`: Warnings and errors
- `error`: Errors only

## IPython Kernel Extension

To allow users to access file paths from within notebooks, the kernel extension must be enabled.

### Manual Activation

To enable the kernel extension inside a notebook, use the IPython magic:

```python
%load_ext rucio_jupyterlab.kernels.ipython
```

### Automatic Activation

To enable it by default for all users, add the following to the IPython configuration (e.g., `~/.ipython/profile_default/ipython_kernel_config.py`):

```python
c.IPKernelApp.extensions = ['rucio_jupyterlab.kernels.ipython']
```

## OpenID Connect Authentication Setup

OIDC authentication requires special configuration at the operator level, as it cannot be configured by users directly.

### Important Notes

- Users will only see the "OpenID Connect" authentication option if OIDC is properly configured by operators
- The extension does not handle user authentication directly; the OIDC token must be obtained through an external mechanism
- In multi-user setups with JupyterHub, operators must make the OIDC token accessible via file or environment variable
- JupyterHub must implement periodic token refresh to prevent expiration during active sessions

### Configuring JupyterHub with OIDC

#### Single User Dockerfile and Variables

The single-user container image must include:
1. The Rucio JupyterLab extension installed
2. OIDC token environment variables properly configured
3. A configuration script (like `configure.py`) to write environment variables to Jupyter configuration

#### JupyterHub Helm Chart Configuration

For Kubernetes deployments using the [Zero to JupyterHub](https://z2jh.jupyter.org/en/stable/) Helm Chart:

**1. Set the custom single-user image:**

```yaml
singleuser:
  image: <image-url>:<image-tag>
```

**2. Add a custom authenticator to `hub.extraConfig`:**

The `hub.extraConfig` section allows you to inject custom Python code into the JupyterHub configuration. Here, we define a custom authenticator class that handles OIDC token exchange with Rucio. This authenticator intercepts the user authentication flow, exchanges the OIDC token for a Rucio-specific token, and injects it into the spawned user environment.

See an example implementation in the [ESCAPE VRE Helm Chart](https://github.com/vre-hub/vre/blob/527982d0a9beeb6098dbb9f73e16ff65f4796b88/infrastructure/cluster/flux/jhub/jhub-release.yaml#L71).


**3. Add authenticator configuration to `hub.config`:**

The `hub.config` section configures the custom `RucioAuthenticator` class defined above. These settings specify the OIDC provider endpoints and client credentials needed for authentication. The authenticator uses these values to communicate with your identity provider and perform token exchanges.

See configuration example in the [ESCAPE VRE Helm Chart](https://github.com/vre-hub/vre/blob/527982d0a9beeb6098dbb9f73e16ff65f4796b88/infrastructure/cluster/flux/jhub/jhub-release.yaml#L55).

```yaml
hub:
  config:
    RucioAuthenticator:
      client_id: <your-client-id>
      client_secret: <your-client-secret>
      authorize_url: <your-auth-url>
      token_url: <your-token-url>
      userdata_url: <your-userinfo-url>
      username_key: preferred_username
      scope:
        - openid
        - profile
        - email
```

**4. Add extension parameters to `singleuser.extraEnv`:**

The `singleuser.extraEnv` section defines environment variables that will be injected into each user's JupyterLab pod. The Rucio JupyterLab extension reads these variables to configure itself automatically. This approach is particularly useful in containerized environments where configuration via environment variables is preferred over static configuration files.

See environment configuration in the [ESCAPE VRE Helm Chart](https://github.com/vre-hub/vre/blob/527982d0a9beeb6098dbb9f73e16ff65f4796b88/infrastructure/cluster/flux/jhub/jhub-release.yaml#L211).

```yaml
singleuser:
  extraEnv:
    RUCIO_MODE: "replica"
    RUCIO_WILDCARD_ENABLED: "1"
    RUCIO_BASE_URL: "<your-rucio-url>"
    RUCIO_AUTH_URL: "<your-rucio-auth-url>"
    RUCIO_WEBUI_URL: "<your-rucio-ui-url>"
    RUCIO_DISPLAY_NAME: "<your-rucio-instance-display-name>"
    RUCIO_NAME: "<your-rucio-instance-name>"
    RUCIO_SITE_NAME: "<your-rucio-instance-site-name>"
    RUCIO_OIDC_AUTH: "env"
    RUCIO_OIDC_ENV_NAME: "RUCIO_ACCESS_TOKEN"
    RUCIO_DEFAULT_AUTH_TYPE: "oidc"
    RUCIO_LOG_LEVEL: "warning"
    RUCIO_OAUTH_ID: "<your-rucio-oauth-id>"
    RUCIO_DEFAULT_INSTANCE: "<your-rucio-instance-name>"
    RUCIO_DESTINATION_RSE: "EOS RSE"
    RUCIO_RSE_MOUNT_PATH: "/eos/eos-rse"
    RUCIO_PATH_BEGINS_AT: "4"
    RUCIO_CA_CERT: "<your-rucio-ca-file-path>"
    OAUTH2_TOKEN: "FILE:/tmp/eos_oauth.token"
```

**5. Build the Docker image and install the Helm Chart with the specified values.**

*Note: This configuration works in replica mode and maps an EOS RSE as the target RSE, FUSE mounted on the JupyterHub nodes.*

## Troubleshooting

### The "Active Instance" drop-down is empty

**Symptom:** The Rucio panel loads on the left side of JupyterLab, but the *Active Instance* selector shows "No options" and there is nothing to choose.

**Most common cause:** The `jupyter_server_config.json` file was written *after* the Jupyter server (and the Rucio server extension) had already started.
The extension reads its configuration once at startup and does not poll the file for changes.

**Check:**

1. From a notebook cell, inspect what the server actually has on disk:

   ```bash
   !cat $HOME/.jupyter/jupyter_server_config.json
   ```

   If the `RucioConfig.instances` block is present and looks correct, the problem is timing, not contents.

2. Confirm the server extension is actually loaded:

   ```bash
   !jupyter server extension list
   ```

   `rucio_jupyterlab` should appear as enabled and OK.

**Fix:** Move the configuration step to a `before-notebook.d` hook, an image entrypoint, or a JupyterHub spawner pre-spawn step — anywhere that runs before `jupyter lab`.
Then restart the session (not just the kernel).

### `voms-proxy-init: command not found`

The single-user image is missing `voms-clients-java` (or equivalent).
See [Prerequisites and Dependencies](#prerequisites-and-dependencies) above.
As a short-term workaround, users can generate the proxy outside the session and upload the resulting file to the notebook environment.

### `%load_ext rucio_jupyterlab.kernels.ipython` fails

This usually means the IPython kernel extension was never installed in the image, or its automatic activation was not configured.
Check that `rucio-jupyterlab` is importable in the kernel's Python environment, and see [IPython Kernel Extension](#ipython-kernel-extension).

### A configured RSE never shows up as a destination

The `destination_rse` named in the configuration must be:

- Registered in the target Rucio instance, **and**
- Actually FUSE mounted at the path given by `rse_mount_path` on the JupyterLab node where the user's session is running.

Pointing at a remote RSE that is not mounted at the facility (a frequent copy-paste mistake when reusing the SWAN example for a different site) will not work in Replica mode.
In that situation, either pick a locally mounted RSE or switch the relevant instance to `mode: download`.

## Further Reading

For more detailed information on the Rucio JupyterLab Extension, visit the [rucio/jupyterlab-extension](https://github.com/rucio/jupyterlab-extension) GitHub repository.
