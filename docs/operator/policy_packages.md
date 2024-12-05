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

The structure of a policy package is very simple. It can contain the
following:

- A `permission.py` module implementing permission
  customisations (optional).
- A `schema.py` module implementing schema customisations (optional).
- An `__init__.py` file that:
  - indicates the supported Rucio version via the `SUPPORTED_VERSION` field;
  - indicates the algorithms provided by the package (optional)

The `permission.py` and `schema.py` modules are optional; an experiment
that does not need to customise these modules can omit one or both of
them from the policy package and the Rucio generic versions will be
used instead. If these modules are required, the easiest way to create
them is to modify the generic versions from the Rucio codebase. These
can be found in `lib/rucio/core/permission/generic.py` and
`lib/rucio/common/schema/generic.py` respectively.

The `has_permission` function in the permission module may return `None`
if your experiment does not implement a custom permission check for a
particular action. In this case, the generic permission module will be
called for this action instead.

The schema module of a policy package does not need to define all of
the schema values. Any missing ones will automatically be loaded from
the generic schema module instead.

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
type. Currently supported types are `lfn2pfn` for generating PFNs for
deterministic storage, `non_deterministic_pfn` for generating PFNs for
non-deterministic storage, and `scope` for scope extraction algorithms.
(For backwards compatibility, `surl` can be used in place of
`non_deterministic_pfn`, however this is not recommended for new policy
packages).

Some base algorithm classes depend on `schema` being loaded.
To avoid circular import issues, import the algorithm classes
as part of the `get_algorithms` function, to ensure that `schema` is loaded first.

Example:

```python
def get_algorithms():
    from vo_policy_package.non_deterministic_pfn import VONonDeterministicPFNAlgorithm
    from vo_policy_package.lfn2pfn import VORSEDeterministicTranslation
    from vo_policy_package.scope import VOScopeExtractionAlgorithm
    return { 
      'non_deterministic_pfn': { 
        'voname_non_deterministic_pfn': VONonDeterministicPFNAlgorithm.construct_non_deterministic_pfn_voname 
        },
      'lfn2pfn': { 
        'voname_lfn2pfn': VORSEDeterministicTranslation.lfn2pfn_voname 
        },
      'scope': { 
        'voname_extract_scope': VOScopeExtractionAlgorithm.extract_scope_voname 
        } 
      }
```

In all cases the names used to register the functions (e.g. `voname_extract_scope`) must be prefixed
with the name of the virtual organisation that owns the policy package,
to avoid naming conflicts on multi-VO Rucio installations.

### lfn2pfn vs. non_deterministic_pfn algorithms

`lfn2pfn` algorithms and `non_deterministic_pfn` algorithms are
conceptually similar, but there are important differences between
them. Both produce a physical filename for use on an RSE, however
`lfn2pfn` algorithms can only be used on deterministic RSEs - for
example, disk systems where the appropriate physical filename can be
derived from the file's scope and name alone (as well as
protocol-specific information for the RSE in question).
`non_deterministic_pfn` algorithms are used on non-deterministic
RSEs (most often tape systems), and may use additional information
about the file (such as its metadata, any datasets that it is a part
of, etc.) to construct the physical filename. Because files cannot
be uploaded directly to non-deterministic storage,
`non_deterministic_pfn` algorithms are only ever called for
replications, but `lfn2pfn` algorithms can also be called for
initial uploads.

The `lfn2pfn` algorithm to be used is determined by the
`lfn2pfn_algorithm` attribute of the relevant RSE. If this is not set,
the `lfn2pfn_algorithm_default` value from the `[policy]` section of
the config file is used instead. The `non_deterministic_pfn` algorithm
to be used is determined by the `naming_convention` attribute of the
relevant RSE.

## Adding a new algorithm class

The system for registering algorithms within policy packages is
intended to be extensible so that new algorithm classes can be added
relatively easily. The basic workflow is as follows:

- The `get_algorithms` function within the policy package (see above)
  should return a dictionary of functions of the new class, indexed
  by name
- The core Rucio code should maintain a dictionary of functions of the
  new class, ready to be called when required. The details of this
  will differ depending on what the new class actually does and how it
  integrates with the Rucio code, but typically the algorithm name to
  be used will be selected by a value in the config file, as for the
  current `lfn2pfn` and `non_deterministic_pfn` algorithm types.
- Before the algorithm is called for the first time, the core Rucio
  code should call `rucio.common.utils.register_policy_package_algorithms`
  to import the algorithms for this class from the policy package and
  store them in its internal dictionary. This function takes care of
  the complexities of interfacing with the policy package, such as
  importing the package if necessary, and dealing with multiple
  packages in multi-VO Rucio installations.

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
