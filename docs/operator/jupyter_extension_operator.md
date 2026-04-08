---
id: jupyter_extension_operator
title: Rucio JupyterLab Extension
sidebar_label: JupyterLab Extension
---

## Overview

The Rucio JupyterLab Extension integrates Rucio's capabilities directly into JupyterLab, allowing users to browse, search, and access datasets from Rucio instances without leaving their notebook environment.

The extension is composed of:
- A Python package `rucio_jupyterlab` for the server extension
- An NPM package `rucio-jupyterlab` for the frontend extension

### Requirements

- JupyterLab >= 3.0
- Rucio Server >= 1.28

### Installation

You will need NodeJS to install the extension. For JupyterLab 4.x you will need NodeJS >= 20 and >= 14 for JupyterLab 3.x.

#### JupyterLab 4.x

```bash
pip install rucio-jupyterlab
```

#### JupyterLab 3.x

For JupyterLab 3.x, please use the latest supported version.

```bash
pip install rucio-jupyterlab==0.10.0
```


import RemoteReadme from '../_jupyterlab-extension/CONFIGURATION.md';

<RemoteReadme />
