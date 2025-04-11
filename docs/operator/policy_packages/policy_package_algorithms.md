---
id: policy-package-algorithms
title: Developing Policy Package algorithms
---

A policy package can be used to define custom algorithms
based on core Rucio algorithms, in order to support custom logic.

The current core algorithms are:
- [`NonDeterministicPFNAlgorithms`](https://github.com/rucio/rucio/blob/0d44febcfd5d0a773a24d60668177324c534bd18/lib/rucio/common/utils.py#L384): Construct PFNs for non-deterministic RSEs
- [`AutoApprove`](https://github.com/rucio/rucio/blob/0d44febcfd5d0a773a24d60668177324c534bd18/lib/rucio/core/rule.py#L96): Handle automatic approval for replication rules
- [`ScopeExtractionAlgorithms`](https://github.com/rucio/rucio/blob/0d44febcfd5d0a773a24d60668177324c534bd18/lib/rucio/common/utils.py#L546): Extract scope from DID
- [`RSEDeterministicScopeTranslation`](https://github.com/rucio/rucio/blob/0d44febcfd5d0a773a24d60668177324c534bd18/lib/rucio/rse/translation.py#L31): Translate a PFN dictionary into a scope and name
- [`RSEDeterministicTranslation`](https://github.com/rucio/rucio/blob/0d44febcfd5d0a773a24d60668177324c534bd18/lib/rucio/rse/translation.py#L102): Translate an LFN to a path
- [`FTS3TapeMetadataPlugin`](https://github.com/rucio/rucio/blob/0d44febcfd5d0a773a24d60668177324c534bd18/lib/rucio/transfertool/fts3_plugins.py#L29): Add `archive_metadata` to FTS transfers to `TAPE`.

Most of these algorithms implement some default behaviour.
It is recommended to check this default behaviour to see
if it is suitable for your needs; if it needs to be changed,
please see below for how to create custom algorithms.

For `FTS3TapeMetadataPlugin` in particular,
please check the (FTS3 Transfertool Plugin documentation)[operator_transfers/configure_fts3_plugins.md].

## Developing a custom algorithm
To develop a custom algorithm:

1. Create a new class for your algorithm, subclassing the relevant core algorithm
2. Register the custom algorithm with a name that is unique in relation to all other algorithms of that type
(i.e. you cannot have two `RSEDeterministicScopeTranslation`-based algorithms with the same name,
but you can have a `RSEDeterministicScopeTranslation`-based algorithm and a `ScopeExtractionAlgorithms`-based algorithm
with the same name. In general, using your VO name should suffice.)
3. Trigger registration of the algorithm by calling the relevant class method at the bottom of your file

As an example, this is the custom `RSEDeterministicScopeTranslation` algorithm used in ATLAS:

```python
class ATLASScopeExtractionAlgorithm(rucio.common.utils.ScopeExtractionAlgorithms):
    def __init__(self) -> None:
        """
        Initialises scope extraction algorithm object
        """
        super().__init__()

    @classmethod
    def _module_init_(cls) -> None:
        """
        Registers the included scope extraction algorithms
        """
        cls.register('atlas', cls.extract_scope_atlas)

    @staticmethod
    def extract_scope_atlas(did: str, scopes: Optional['Sequence[str]']) -> 'Sequence[str]':
        # Try to extract the scope from the DSN
        if did.find(':') > -1:
            if len(did.split(':')) > 2:
                raise RucioException('Too many colons. Cannot extract scope and name')
            scope, name = did.split(':')[0], did.split(':')[1]
            if name.endswith('/'):
                name = name[:-1]
            return scope, name
        else:
            scope = did.split('.')[0]
            if did.startswith('user') or did.startswith('group'):
                scope = ".".join(did.split('.')[0:2])
            if did.endswith('/'):
                did = did[:-1]
            return scope, did


ATLASScopeExtractionAlgorithm._module_init_()
```

## Registering a custom algorithm in your policy package

The system for registering algorithms within policy packages is
intended to be extensible so that new algorithm classes can be added
relatively easily. The basic workflow is as follows:

- The `get_algorithms` function within the policy package
  should return a dictionary of functions of the new class, indexed
  by name
- The core Rucio code should maintain a dictionary of functions of the
  new class, ready to be called when required. The details of this
  will differ depending on what the new class actually does and how it
  integrates with the Rucio code, but typically the algorithm name to
  be used will be selected by a value in the config file, as for the
  current `lfn2pfn` and `non_deterministic_pfn` algorithm types.

## lfn2pfn vs. non_deterministic_pfn algorithms

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
