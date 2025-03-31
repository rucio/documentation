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
with version numbers like **35.y.z** (with y &ge; 0, z &ge; 0). Versions within
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

For example, a 37 Rucio server guarantees client support until the second LTS release line
preceding its version, thus the 32 LTS release line. Therefore it guarantees support
of clients of the 32, 33, 34, 35, 36 and 37 release lines.

A 33 Rucio server guarantees client support of the 1.29, 1.30, 1.31, 32, and 33 release
lines, while a 32 server guarantees support of the 1.26, 1.27, 1.28, 1.29, 1.30, 1.31, and
32 release lines.

Older clients will most likely work without problems as well; however, the release policy does not
guarantee it.

Please be aware that we can not guarantee compatibility of a newer client with an older
server.

| Version         | Code name                                 | Release date   | Supported until      |
| --------------- | ----------------------------------------- | -------------- | -------------------- |
| 39              | Grand Theft Donkey                        | _2025-11_      | _2026-03_            |
| 38 LTS          | Donkirk                                   | _2025-07_      | _at least 2027-07_   |
| **37**          | **Dungeons & Donkeys**                    | **2025-04**    | _2025-07_            |
| 36              | Donkey Unchained                          | 2024-12        | 2025-04              |
| **35 LTS**      | **Donkey and the Data Factory**           | **2024-07**    | _at least 2026-07_   |
| 34              | Donkey Potter and the Data Cache          | 2024-03        | 2024-07              |
| 33              | Eternal Sunshine of the Donkey's Mind     | 2023-12        | 2024-03              |
| **32 LTS**      | **The Good, The Bad and the Donkey**      | **2023-08**    | **2025-08**          |
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

## Secondary Rucio Software Policy

### WebUI

The [Rucio WebUI](
https://rucio.github.io/documentation/developer/webui/webui_frontend) is an
initiative to modernize the Rucio user interface by leveraging the latest web
technologies, built with Next.js, TailwindCSS, and React.js.

The versioning of the Rucio WebUI is closely aligned with the Rucio Server's
release versioning. Both follow semantic versioning principles, ensuring
consistency and compatibility.

- **Major Version**: The major version number of the WebUI matches that of the
  Rucio server it is compatible with. For example, Rucio Server version
  **37.x.x** is compatible with Rucio WebUI version **37.x.x**.
- **Minor and Patch Versions**: These versions follow semantic versioning:
   - **Minor Version**: Incremented for new features and improvements that are
     backward-compatible.
   - **Patch Version**: Incremented for backward-compatible bug fixes.

### JupyterLab extension

The Rucio Jupyterlab extension follows it's own release policy described below.

The plugin's main dependencies are the Rucio REST API, the JupyterLab environment
and JavaScript (Node.js and React.js). Up to date, the extension has been
tested with several combinations of Rucio major versions (v1.30 onwards) and
JupyterLab (v&GreaterEqual;3) environments, with the latter indicating the
extension version to install (which follows the semantic versioning schema).

- For `JupyterLab v4.x`, use v&GreaterEqual;1.0.0.
- For `JupyterLab v3.x` use the latest supported version (v0.10.0).

Please refer to the Rucio JupyterLab extension [project](
https://github.com/rucio/jupyterlab-extension) for more details on
installation, requirements and release policy.
