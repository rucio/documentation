---
title: Setting Up the Rucio Client
sidebar_position: 1
---

## Install via pip

When `pip` is available, the distribution can be downloaded from the
Rucio PyPI server and installed in one step:

```bash
pip install rucio-clients
```

This command will download the latest version of Rucio and install it to your
system. The dependencies are listed in the file
[`requirements.client.txt`](https://github.com/rucio/rucio/blob/master/requirements/requirements.client.txt)
and will be pulled in as necessary.

## Upgrade via pip

To upgrade via pip:

```bash
pip install --upgrade rucio-clients
```

## Installing using setup.py

Otherwise, you can install from the distribution using the `setup.py`
script:

```bash
python setup.py install
```
