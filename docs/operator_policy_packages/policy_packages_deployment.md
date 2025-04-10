---
id: policy-package-deployment
title: Deploying a Policy Package
---

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
