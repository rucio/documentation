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
installed Python interpreter. Since the Rucio [1.24](/release-notes/1.24.0)
release servers and daemons require **Python 3.6** or upwards. The clients still
support **Python 2.7**, but will drop support with the Rucio [1.29 LTS](/release-notes/1.29.0) release in
July 2022.

## Database

Database   | Supported version | Note
-----------| ----------------- | ---------
SQLite     | 3+                | For testing only
MySQL      | 8                 | No support for SSH public key authentication
PostgreSQL | 12 and higher     |
Oracle     | 19c               |
