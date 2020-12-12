---
id: policy-packages
title: Policy packages
sidebar_label: policy-packages
---

Overview
========

Policy packages are separate Python packages that can be used to add
experiment-specific customisations to Rucio. They typically customise
Rucio\'s handling of permissions and schema as well as optionally adding
their own algorithms for lfn to pfn conversion and surl construction.

Policy packages may be installed from a Python package repository such
as [PyPi](https://pypi.python.org/) or they may simply be installed in a
local directory. In the latter case this directory will need to be added
to the Rucio server\'s [PYTHONPATH]{.title-ref} environment variable.

The name of the policy package in use is specified by the
[package]{.title-ref} value in the [\[policy\]]{.title-ref} section of
the Rucio configuration file. If no package is specified, a built in
[generic]{.title-ref} policy will be used. If a package is specified but
cannot be loaded, Rucio will exit with an error.

Creating a policy package
=========================

The structure of a policy package is very simple. It contains the
following:

-   a [permission.py]{.title-ref} module implementing permission
    customisations.
-   a [schema.py]{.title-ref} module implementing schema customisations.
-   an optional [\_\_init\_\_.py]{.title-ref} file that registers lfn to
    pfn and surl construction algorithms when the package is loaded. It
    should also contain a [SUPPORTED_VERSION]{.title-ref} field.

The easiest way to create the [permission.py]{.title-ref} and
[schema.py]{.title-ref} modules is to modify the generic versions from
the Rucio codebase. These can be found in
[lib/rucio/core/permission/generic.py]{.title-ref} and
[lib/rucio/common/schema/generic.py]{.title-ref} respectively.

In the [has_permission]{.title-ref} function you may wish to default to
the generic permission checks if your experiment does not need specific
functionality for a particular action, or so that new actions added to
Rucio will work without your policy package having to be updated. This
fallback can be implemented with code similar to the following:

    import rucio.core.permission.generic
    if action not in perm:
        return rucio.core.permission.generic.has_permission(issuer, action, kwargs)

[\_\_init\_\_.py]{.title-ref} should include a
[SUPPORTED_VERSION]{.title-ref} field indicating the version of Rucio
that your package was developed against. This may be checked by Rucio in
the event that the policy package interface changes in the future.
Example:

    SUPPORTED_VERSION = "1.20.7"

Custom surl construction algorithms can be registered in
\`\_\_init\_\_.py\`:

    from rucio.common.utils import register_surl_algorithm
    register_surl_algorithm(construct_surl_special, 'voname_special')

So can custom lfn to pfn algorithms:

    from rucio.rse.protocols.protocol import RSEDeterministicTranslation
    RSEDeterministicTranslation.register(lfn2pfn_special, 'voname_special')

In both cases the name used to register the function must be prefixed
with the name of the virtual organisation that owns the policy package,
to avoid naming conflicts on multi-VO Rucio installations.
