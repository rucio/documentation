---
id: policy-package-development
title: Developing a Policy Package
---

## Template repository
A template policy package repository can be found [here](https://github.com/rucio/policy-package-template).

## Project structure
The basic elements of a policy package are the following:

- An `__init__.py` file that:
  - indicates the supported Rucio version via the `SUPPORTED_VERSION` field;
  - indicates the algorithms provided by the package (optional)
- A `permission.py` module implementing permission
  customisations (optional).
- A `schema.py` module implementing schema customization (optional).
- One or more files for experiment-specific algorithms (optional).

The recommended Python package layouts can be found [here](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/). An example `src`-layout based policy package is as such:

```
experiment-rucio-policy-package
│   README.md
│   pyproject.toml
│
└───src
│   │
│   └───experiment-rucio-policy-package
│       │   __init__.py               # required
│       │   permission.py             # optional
│       │   schema.py                 # optional
│       │   pfn2lfn.py                # optional (deterministic scope translation algorithm)
│       │   non_deterministic_pfn.py  # optional (non-deterministic scope translation algorithm)
│       │   ...
```


### `__init__.py`

#### `SUPPORTED_VERSION`

`__init__.py` should define a `str | list[str]` called `SUPPORTED_VERSION`,
indicating the version(s) of Rucio that your package supports.

This is checked against the Rucio server
version to ensure compatibility when loading the policy package.

##### From Rucio 36
From Rucio 36, version checking was modified
to use [PEP-compliant version specifiers](https://peps.python.org/pep-0440/#version-specifiers).

For example, to specify support for the entire Rucio 36 release line (so 36.1.0, 36.2.0...)
without yet supporting Rucio 37,
the [**compatible release** operator](https://peps.python.org/pep-0440/#compatible-release) `~=`
can be used, as seen below.

```python
SUPPORTED_VERSION = '~=36.0'
```

Multiple constraints can be specified, either as a string:

```python
SUPPORTED_VERSION = '~=36.0,!=36.4.0'
```

Or as a list:

```python
SUPPORTED_VERSION = ['~=36.0','!=36.4.0']
```

##### Before Rucio 36

On Rucio versions older than 36, only major versions can be specified.
This can be done as either a string:

```python
SUPPORTED_VERSION = '35'
```

Or as a list, to indicate support for multiple major versions:

```python
SUPPORTED_VERSION = ['34', '35']
```

#### `get_algorithms`

The `__init__.py` file can also contain
an optional function called `get_algorithms` that
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

> [!NOTE]
> Some base algorithm classes depend on `schema` being loaded.
> To avoid **circular import** issues,
> import the algorithm classes as part of the `get_algorithms` function,
> to ensure that `schema` is loaded first.

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

See [the Algorithms documentation page](operator/policy_packages/policy_package_algorithms.md) for more on developing algorithms.

### Permission and schema modules

The `permission.py` and `schema.py` modules are optional; an experiment
that does not need to customise these modules can omit one or both of
them from the policy package and the Rucio generic versions will be
used instead. If these modules are required, the easiest way to create
them is to modify the generic versions from the Rucio codebase. These
can be found in
[`lib/rucio/core/permission/generic.py`](https://github.com/rucio/rucio/blob/master/lib/rucio/core/permission/generic.py)
and [`lib/rucio/common/schema/generic.py`](https://github.com/rucio/rucio/blob/master/lib/rucio/common/schema/generic.py) respectively.

The `has_permission` function in the permission module may return `None`
if your experiment does not implement a custom permission check for a
particular action. In this case, the generic permission module will be
called for this action instead.

The schema module of a policy package does not need to define all of
the schema values. Any missing ones will automatically be loaded from
the generic schema module instead.
