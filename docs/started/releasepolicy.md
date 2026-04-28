---
id: releasepolicy
title: Release Policy
sidebar_label: Release Policy
sidebar_position: 8
---

Rucio follows a release policy, based on [semantic versioning](https://semver.org),
with **major** (named) releases. Approximately
every 4 months we produce a major release with a version number like **x.0.0**
(with x > 0). A major release marks the start of a release line. This release
line is maintained with minor/patch releases published every two weeks,
containing bug fixes or minor enhancements,
with version numbers like **40.y.z** (with y &ge; 0, z &ge; 0). Versions within
one release line are always backwards compatible, thus they do not include
database schema changes, API modifications, or other backward-compatibility
breaking changes.

Previous to the 32 release line, Rucio used a different versioning theme.

## Support period

A release line is only maintained with patch releases until the start of the
next release line, thus approximately 4 months. Typically once a year we will
designate a release line a **Long-term Support** (LTS) release line. This
release line will be supported with **security** and **critical** patches for
approximately two years. It is foreseen to have an overlap of at least 12 months
between two LTS release lines, to give communities a comfortable time window to
deploy the new LTS release.

## Client &harr; Server compatibility

For differences between the versions of a Rucio client and a Rucio server we guarantee
compatibility between a server and an older client up until the second LTS release line
preceding the server.

For example, a 40 Rucio server guarantees client support until the second LTS release line
preceding its version, thus the 35 LTS release line. Therefore it guarantees support
of clients of the 35, 36, 37, 38, 39, and 40 release lines.

A 33 Rucio server guarantees client support of the 1.29, 1.30, 1.31, 32, and 33 release
lines, while a 32 server guarantees support of the 1.26, 1.27, 1.28, 1.29, 1.30, 1.31, and
32 release lines.

Older clients will most likely work without problems as well; however, the release policy does not
guarantee it.

Please be aware that we can not guarantee compatibility of a newer client with an older
server.

| Version         | Code name                                 | Release date   | Supported until      |
| --------------- | ----------------------------------------- | -------------- | -------------------- |
| 42              | How to Train Your Donkey                  | _2026-11_      | _2027-03_            |
| 41 LTS          | Donkémon                                  | _2026-07_      | _at least 2028-07_   |
| **40**          | **Guardians of the Donkeyverse**          | **2026-04**    | _2026-07_            |
| 39              | Grand Theft Donkey                        | 2025-12        | 2026-04              |
| **38 LTS**      | **Donkirk**                               | **2025-08**    | _at least 2027-08_   |
| 37              | Dungeons & Donkeys                        | 2025-04        | 2025-08              |
| 36              | Donkey Unchained                          | 2024-12        | 2025-04              |
| **35 LTS**      | **Donkey and the Data Factory**           | **2024-07**    | **2026-08**          |
| 34              | Donkey Potter and the Data Cache          | 2024-03        | 2024-07              |
| 33              | Eternal Sunshine of the Donkey's Mind     | 2023-12        | 2024-03              |
| 32 LTS          | The Good, The Bad and the Donkey          | 2023-08        | 2025-08              |
| 1.31            | Donkeys of the Caribbean                  | 2023-03        | 2023-07              |
| 1.30            | The Donkeynator                           | 2022-11        | 2023-03              |
| 1.29 LTS        | Into the Donkeyverse                      | 2022-07        | 2024-08              |
| 1.28            | Teenage Mutant Ninja Donkeys              | 2022-03        | 2022-07              |
| 1.27            | Batdonkey v Superdonkey                   | 2021-11        | 2022-03              |
| 1.26 LTS        | Donkey League of La Mancha                | 2021-07        | 2023-07              |
| 1.25            | Rat-Donkey                                | 2021-02        | 2021-07              |
| 1.24            | Aquadonkey                                | 2020-11        | 2021-02              |
| 1.23 LTS        | The incredible Donkey                     | 2020-07        | 2022-07              |
| 1.22            | Green Donkey                              | 2020-02        | 2020-06              |
| 1.21            | Donkeys of the Galaxy                     | 2019-11        | 2020-02              |
| 1.20 LTS        | Wonder Donkey                             | 2019-06        | 2021-07              |
| 1.19            | Fantastic Donkeys                         | 2019-02        | 2019-06              |
| 1.18            | Invisible Donkey                          | 2018-09        | 2019-02              |
| 1.17            | Donkey Surfer                             | 2018-06        | 2018-09              |
| 1.16            | Doctor Donkey                             | 2018-04        | 2018-06              |
| 1.15            | Daredonkey                                | 2018-02        | 2018-04              |
| 1.14            | Professor D                               | 2017-11        | 2018-02              |
| 1.13            | Donkerine                                 | 2017-09        | 2017-11              |
| 1.12            | Captain Donkey                            | 2017-07        | 2017-09              |
| 1.11            | Batdonkey                                 | 2017-05        | 2017-07              |
| 1.10            | Irondonkey                                | 2017-02        | 2017-05              |
| 1.9             | Superdonkey                               | 2016-10        | 2017-02              |
| 1.8             | Spiderdonkey                              | 2016-09        | 2016-10              |
| 1.7             | Donkey One                                | 2016-08        | 2016-09              |
| 1.6             | The Donkey awakens                        | 2016-05        | 2016-08              |
| 1.5             | Return of the Donkey                      | 2016-04        | 2016-05              |
| 1.4             | The Donkey strikes back                   | 2016-02        | 2016-04              |
| 1.3             |                                           | 2016-01        | 2016-02              |
| 1.2             |                                           | 2015-10        | 2016-01              |
| 1.1             |                                           | 2015-08        | 2016-10              |
| 1.0             |                                           | 2015-07        | 2015-08              |
| (0.3)           |                                           | 2015-03        | 2015-07              |
| (0.2)           |                                           | 2014-10        | 2015-03              |
| (0.1.7)         |                                           | 2014-01        | 2014-10              |

## Release policy for secondary Rucio packages

Next to the server and client the Rucio project provides several other,
secondary, software packages. Namely the [Rucio WebUI](https://github.com/rucio/webui),
the [Rucio Jupyterlab extension](https://github.com/rucio/jupyterlab-extension), and
the [Rucio helm charts](https://github.com/rucio/helm-charts).

The versioning of these software packages is closely aligned with the versioning
of the Rucio server. The **major version** of the package matches that of the
Rucio server it is compatible with. For example, Rucio WebUI version **40.x.y** is 
compatible with any server of the version **40.*.***

The minor and patch versions of these secondary software packages are however
independent from the minor and patch versions of the server. They do as well
follow semantic versioning.

### Support period

The support period policy is the same as the support period policy stated above.
Thus, once a year a release line is designated a **Long-term Support** (LTS) release 
line, which will be supported with **critical** and **security** patches for
two years.

> **WebUI Note:** Although Rucio 35 is an LTS release, the corresponding WebUI
> release 35 is **not** designated as LTS. This is due to significant changes
> in the WebUI project architecture and lack of feature completeness at that
> time. Release 38 marks the first stable, feature-complete WebUI LTS release.

> **Jupyterlab Extension Note:** The Rucio Jupyerlab Extension started to follow
> the LTS support period with the 40 Rucio release. Thus at the moment, there is
> no LTS support given for the Jupyerlab Extension. The first Jupyerlab Extension
> release covered by the LTS support period will be the 41 release.
