---
title: Setting Up the Rucio Client
---

## Install via pip

When `pip` is available, the distribution can be downloaded from the
Rucio PyPI server and installed in one step:

```bash
pip install rucio-clients
```

This command will download the latest version of Rucio and install it to your
system. The dependencies are listed in the
[`requirements`](https://github.com/rucio/rucio/tree/master/requirements)
directory and will be pulled in as necessary.

## Upgrade via pip

To upgrade via pip:

```bash
pip install --upgrade rucio-clients
```

## Install via pip and virtualenv

To install the Rucio clients in an isolated `virtualenv` environment:

```bash
wget --no-check-certificate https://raw.github.com/pypa/virtualenv/master/virtualenv.py
python virtualenv.py rucio
source rucio/bin/activate.csh
pip install rucio-clients
export RUCIO_HOME=`pwd`/rucio/
```

## Installing using setup.py

Otherwise, you can install from the distribution using the `setup.py`
script:

```bash
python setup.py install
```
