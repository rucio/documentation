---
id: requirements
title: Requirements
sidebar_label: Requirements
---

Rucio relies on several dependencies, some of them being a hard requirement,
others being optional depending on the used Rucio functionality.

To install Rucio, we generally recommend a Kubernetes-based deployment based on
our [helm-charts](https://github.com/rucio/helm-charts). A direct deployment
using Rucio [docker containers](https://hub.docker.com/u/rucio), or Rucio
[pip](https://pypi.org/project/rucio/) packages is also possible.

## Python

Rucio server, daemons and clients are written in Python and thus depend on an
installed Python interpreter.

Rucio release                       | Supported python versions
----------------------------------- | -----------------------------------------------
[1.29 LTS](/release-notes/1.29.0)   | `>=3.6, <=3.9`
from 32 LTS                         | `>=3.9, <=3.10`

## Database

Database   | Supported version | Note
-----------| ----------------- | ---------
SQLite     | 3+                | For testing only
MySQL      | 8                 | No support for SSH public key authentication
PostgreSQL | 12 and higher     |
Oracle     | 19c               |
