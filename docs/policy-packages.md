---
id: policy-packages
title: Policy packages
sidebar_label: Policy packages
---

## Overview

Policy packages are separate Python packages that can be used to add
experiment-specific customisations to Rucio. They typically customise
Rucio's handling of permissions and schema as well as optionally adding
their own algorithms for lfn to pfn conversion and surl construction.

Policy packages may be installed from a Python package repository such
as [PyPi](https://pypi.python.org/) or they may simply be installed in a
local directory. In the latter case this directory will need to be added
to the Rucio server's `PYTHONPATH` environment variable.

The name of the policy package in use is specified by the
package value in the policy section of
the Rucio configuration file. If no package is specified, a built in
generic policy will be used. If a package is specified but
cannot be loaded, Rucio will exit with an error.

## Creating a policy package

The structure of a policy package is very simple. It contains the
following:

-   a `permission.py` module implementing permission
    customisations.
-   a `schema.py` module implementing schema customisations.
-   an `__init__.py` file that can optionally return dictionaries of
    lfn to pfn and surl construction algorithms provided by the package.
    It should also contain a SUPPORTED_VERSION field.

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

    import rucio.core.permission.generic
    if action not in perm:
        return rucio.core.permission.generic.has_permission(issuer, action, kwargs)

`__init__.py` should include a
`SUPPORTED_VERSION` field indicating the version of Rucio
that your package was developed against. This may be checked by Rucio in
the event that the policy package interface changes in the future.
Example:

    SUPPORTED_VERSION = "1.20.7"

It can also contain an optional function called `get_surl_algorithms` that
returns a dictionary of custom surl construction algorithms implemented
within the package:

    def get_surl_algorithms():
        return { 'voname_special': construct_surl_special }

where `construct_surl_special` is the function within the policy package
that implements the algorithm.

Another optional function called `get_lfn2pfn_algorithms` does the same
for lfn to pfn translation algorithms:

    def get_lfn2pfn_algorithms():
        return { 'voname_special': lfn2pfn_special }

In both cases the name used to register the function must be prefixed
with the name of the virtual organisation that owns the policy package,
to avoid naming conflicts on multi-VO Rucio installations.
