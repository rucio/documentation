---
id: policy_packages
title: Policy Packages
---

## Overview

Policy packages are separate Python packages that can be used to add
experiment-specific customisations to Rucio. They typically customise
Rucio's handling of permissions and schema as well as optionally adding
their own algorithms for various purposes, such as lfn to pfn conversion
and surl construction.

Policy packages may be installed from a Python package repository such
as [PyPi](https://pypi.python.org/) or they may simply be installed in a
local directory. In the latter case this directory will need to be added
to the Rucio server's `PYTHONPATH` environment variable.

The name of the policy package in use is specified by the `package` value
in the `policy` section of the Rucio configuration file. Alternatively,
the package can be specified by the `RUCIO_POLICY_PACKAGE` environment
variable (if both are set, the environment variable takes priority). If
no package is specified, a built in generic policy will be used. If a
package is specified but cannot be loaded, Rucio will exit with an error.

Multi-VO Rucio installations can load a different policy package for each
VO. In this case, the configuration parameter or environment variable name
is suffixed with the VO name (for example, `package-vo1` or
`RUCIO_POLICY_PACKAGE_VO1`).

## Creating a policy package

The structure of a policy package is very simple. It contains the
following:

- A `permission.py` module implementing permission
  customisations.
- A `schema.py` module implementing schema customisations.
- An `__init__.py` file that can optionally return a dictionary of
  algorithms provided by the package.
- It should also contain a SUPPORTED_VERSION field.

The easiest way to create the `permission.py` and
`schema.py` modules is to modify the generic versions from
the Rucio codebase. These can be found in
`lib/rucio/core/permission/generic.py` and
`lib/rucio/common/schema/generic.py` respectively.

In the `has_permission` function you may wish to default to
the generic permission checks if your experiment does not need specific
functionality for a particular action, or so that new actions added to
Rucio will work without your policy package having to be updated. This
fallback can be implemented with code similar to the following:

```python
import rucio.core.permission.generic
if action not in perm:
    return rucio.core.permission.generic.has_permission(issuer, action, kwargs)
```

`__init__.py` should include a
`SUPPORTED_VERSION` field indicating the major version(s) of Rucio
that your package supports. This is checked against the Rucio server
version to ensure compatibility when loading the policy package. This
field can be a string if the policy package only supports a single
Rucio version, or a list of strings if it supports multiple versions.
Example:

```python
SUPPORTED_VERSION = [ "1.30", "1.31", "32" ]
```

It can also contain an optional function called `get_algorithms` that
returns a dictionary of custom algorithms implemented within the package.
In fact, this structure should be a "dictionary of dictionaries" where
the outer dictionary contains algorithm types, and each inner
dictionary contains all the algorithms provided by the package for that
type. Currently supported types are `surl` for SURL algorithms,
`lfn2pfn` for LFN2PFN algorithms, and `scope` for scope extraction
algorithms.

Example:

```python
def get_algorithms():
    return { 'surl':
             { 'voname_surl': construct_surl_voname },
         'lfn2pfn':
         { 'voname_lfn2pfn': lfn2pfn_voname },
         'scope':
         { 'voname_extract_scope': extract_scope_voname } }
```

In all cases the names used to register the functions must be prefixed
with the name of the virtual organisation that owns the policy package,
to avoid naming conflicts on multi-VO Rucio installations.

## Deploying Policy Packages in containers

It is now common to deploy Rucio using containers managed by software
such as Docker and Kubernetes. This section of the documentation is
intended to give guidance on how policy packages can be deployed in
this type of environment.

Broadly speaking, three things must happen in order for a policy
package to be deployed successfully:

1. The policy package code must be available to the Rucio server
   (and possibly other components such as daemons).
1. The directory containing the policy package must be in the server's
   `PYTHONPATH`.
1. The policy package name must be set in the Rucio configuration file,
   or using the `RUCIO_POLICY_PACKAGE` environment variable.

### Installing the policy package

There are a few possible ways to get the policy package code into the
container where the server runs. One way is to build a custom
experiment-specific container image based on the generic Rucio server
image, and to install the policy package at build time in the
`Dockerfile`, either by directly copying the files in, or by installing
it from some sort of repository. For experiments that already customise
the container image, this is likely to be the easiest option.

Alternatively, the standard Rucio container can be used and a volume
containing the policy package files can be mounted at run time (using
the `-v` or `--volume` command line flag). When using Kubernetes, there
is also a third possibility: use an
[init container](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)
to install the policy package onto a shared volume, which is then mounted
by the server container when it starts up.

### Adding the policy package to the server's PYTHONPATH

It is possible to set environment variables within the container when
starting it (using Docker's `-e` command line flag). This can be used to
set `PYTHONPATH`, however this will replace the original value rather
than appending to it, so there is a risk of removing other important
items from the path. A safer option is to override Rucio's
`docker-entrypoint.sh` script and instead use a script that appends the
policy package's directory to `PYTHONPATH` before starting the HTTP server.
This can be done either at build time in the `Dockerfile`, or at run time
using the `--entrypoint` command line option.

When deploying using Kubernetes and Helm charts, it is possible to specify
the policy package directory in the `optional_config:` section of
`values.yaml`. This is then propagated to the container as an environment
variable, which can be added to `PYTHONPATH` by the entry point script. For
example, include this in `values.yaml`:

```yaml
optional_config:
  policy_pkg_path: /opt/rucio/policy
```

This will appear in the container's environment as a variable called
`POLICY_PKG_PATH`, which can be added to `PYTHONPATH` by the entry point
script before starting the server:

```bash
if [ ! -z "$POLICY_PKG_PATH" ]; then
    export PYTHONPATH=${POLICY_PKG_PATH}:${PYTHONPATH:+:}${PYTHONPATH}
fi
```

### Specifying the policy package in the configuration file

It is likely that most experiments are already customising the Rucio
configuration file, in which case the policy package (`package = name` in
the `[policy]` section) can simply be added to the existing customised file.
Alternatively, the package name can be set in the `RUCIO_POLICY_PACKAGE`
environment variable (see previous section for how to pass environment
variables into the server container).

When deploying using Kubernetes and Helm charts, it is possible to specify
configuration options in `values.yaml`. Values included in the `config:`
section of this file are automatically merged into `rucio.cfg` by the
`docker-entrypoint.sh` script, so the policy package can be set as:

```yaml
config:
  policy:
    package: packagename
```
