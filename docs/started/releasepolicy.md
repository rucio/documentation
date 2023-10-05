---
id: releasepolicy
title: Release Policy
sidebar_label: Release Policy
---

Rucio follows a release policy, based on [semantic versioning](https://semver.org),
with **major** (named) releases. Approximately
every 4 months we produce a major release with a version number like **x.0.0**
(with x > 0). A major release marks the start of a release line. This release
line is maintained with bi-weekly minor/patch releases, containing bug fixes or minor
enhancements, with version numbers like **32.y.z** (with y &ge; 0, z &ge; 0). Versions within
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
compatibility of an older client up until the oldest supported LTS release line.
For example, with 1.29 LTS being the oldest supported release line, a 32 Rucio server
guarantees support of clients of the 1.29, 1.30, 1.31 and 32 release line. Most likely
older clients will work, without problems, as well, however, the release policy does not
guarantee it.

Please be aware that we can not guarantee compatibility of a newer client with an older
server.

| Version         | Code name                                 | Release date   | Supported until      |
| --------------- | ----------------------------------------- | -------------- | -------------------- |
| 36              | Donkey Unchained                          | _2024-11_      | _2025-03_            |
| 35 LTS          | Donkey and the Data Factory               | _2024-07_      | _at least 2026-07_   |
| 34              | Donkey Potter and the Data Cache          | _2024-03_      | _2024-07_            |
| 33              | Eternal Sunshine of the Donkey's Mind     | _2023-11_      | _2024-03_            |
| **32 LTS**      | **The Good, The Bad and the Donkey**      | **2023-08**    | _at least 2025-08_   |
| 1.31            | Donkeys of the Caribbean                  | 2023-03        | 2023-07              |
| 1.30            | The Donkeynator                           | 2022-11        | 2023-03              |
| **1.29 LTS**    | **Into the Donkeyverse**                  | **2022-07**    | **2024-08**          |
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
