---
id: requirements
title: Requirements
sidebar_label: Requirements
---

Rucio relies on several dependencies, some of them being a hard requirement, others being optional depending on the used Rucio functionality.

To install Rucio, we generally recommend a Kubernetes-based deployment based on our [helm-charts](https://github.com/rucio/helm-charts), but also a deployment directly using Rucio [docker containers](https://hub.docker.com/u/rucio), or Rucio [pip](https://pypi.org/project/rucio/) packages is possible.

## Python

Rucio server, daemons and clients are written in Python and thus depend on an installed Python interpreter. Since the Rucio [1.24](../release-notes/1.24.0) release servers and daemons require **Python 3.6** or upwards, while the clients still support **Python 2.7** for the foreseeable future.

## Database


Database               | Supported version
---------------------- | -----------------
SQLLite (For Testing)  | X
MySQL                  | X
PostgreSQL             | X
Oracle                 | X
