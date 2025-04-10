---
id: policy_packages_overview
title: Policy Packages Overview
---

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

[The API for policy packages can be found here.](pathname:///html/rse_policies/rsemanager.html)
