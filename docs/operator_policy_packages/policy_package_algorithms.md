---
id: policy-package-algorithms
title: Developing Policy Package algorithms
---

### Adding a new algorithm class

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
