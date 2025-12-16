---
id: jupyter_extension_user
title: Using the Rucio JupyterLab Extension
sidebar_label: JupyterLab Extension
sidebar_position: 4
---

The **Rucio JupyterLab Extension** brings scientific data management directly into your JupyterLab environment, allowing you to discover, access, and analyze datasets from Rucio data lakes without leaving the notebook interface.

## How It Works

The **Rucio Jupyterlab Extension** integrates Rucio's data discovery and management capabilities into JupyterLab through a sidebar interface. The extension supports interaction with many Rucio instances. A Rucio Storage Element (RSE) for each instance can be chosen to serve as the destination for local file storage, leveraging the existing RSEs provided by your experiment.

From the JupyterLab sidebar, you can:
- **Browse Rucio datasets** by scope and name
- **Search for specific data** using pattern matching
- **Replicate data with a single click** to make it available locally
- **Inject file paths** directly into your notebooks as variables

Authentication is flexible, supporting:
- X.509 proxy certificates
- X.509 user certificates
- Username and password
- OpenID Connect (OIDC) tokens
- Full Virtual Organization (VO) support

## Authentication

Before using the extension, you need to authenticate with the Rucio cluster to access datasets.

### Recommended: X.509 Proxy Certificate

If you have a grid proxy certificate, the extension can use it directly. This is the recommended authentication method.

**Setup Steps:**

1. Ensure your grid user certificate and key are present in the `~/.globus` folder in your SWAN/JupyterLab session
2. Execute the command:
   ```bash
   voms-proxy-init --voms <your-experiment>
   ```
   
   You can add additional arguments:
   - `--cert`: Path to your certificate if not in `~/.globus`
   - `--key`: Path to your key if not in `~/.globus`
   - `--out`: Specify the output path for the proxy certificate

   **Example:**
   ```bash
   voms-proxy-init --cert ~/.globus/usercert.pem --key ~/.globus/userkey.pem --voms atlas --out /tmp/proxy.pem
   ```

3. Click the ⚙️ (settings) button in the top right corner of the extension
4. Configure your credentials:
   - Select **X.509 Proxy Certificate** from the Authentication dropdown
   - Enter the path to your proxy certificate in the **Proxy file path** field
   - Add your Rucio account in the **Account** field
5. Click **Save Settings**
6. Switch to the **Explore** tab and start using the extension

**Disclaimer:** If you're using environment-specific software stacks (e.g., `setupATLAS`), you might already have a way to obtain a proxy certificate. Check with your experiment's documentation.

![image](/img/rucio_jupyter_auth.png)

### Other Authentication Methods

The extension also supports:
- **Username & Password**: Direct authentication with username and password credentials
- **X.509 User Certificate**: Direct use of your X.509 certificate
- **OpenID Connect (OIDC) Tokens**: Token-based authentication (experimental)

## Browsing the Rucio Catalog

### Using the Search Bar

The search bar accepts items in the `scope:name` format:
- `scope`: A namespace for organizing data (e.g., `atlas`)
- `name`: The dataset or file name

**Example searches:**
- `atlas:mc15_13TeV` - Search for datasets matching this pattern
- `atlas:*` - List all elements in the `atlas` scope
- `experiment:test.root` - Find a specific file

### Dynamic Scope Browsing

To browse available scopes dynamically:
1. Click the **folder icon** to the right of the search bar
2. A scope browser will appear showing available scopes
3. Select a scope to pre-fill the search bar with that scope

### Filtering Results

Entries can be filtered by:
- **Type**: Container, Dataset, or File
- **Metadata**: Additional metadata attributes

### Wildcard Search

The search method accepts the `*` wildcard character. For example:
- `example:*` - List all elements registered under the `example` scope
- `atlas:mc*` - Find all items starting with `mc` in the `atlas` scope

![image](/img/rucio_jupyter_browse.png)

### Troubleshooting Data Availability

If one or more files are not available on the RSE mounted in your JupyterLab session:

1. Check file replicas from the terminal:
   ```bash
   rucio list-file-replicas <scope:name>
   ```

2. This may lead to two scenarios:

   **Scenario 1:** Files are replicated in an RSE mounted on your JupyterLab session
   - Simply change your JupyterLab session configuration
   - Select the RSE that already has the dataset/files replicated
   - Restart your session if needed

   **Scenario 2:** Files are NOT replicated in any RSE mounted on your JupyterLab session
   - Click **Make Available** in the extension to trigger a replication rule
   - Discuss with your experiment's conveners which RSE is best for replication
   - Ensure that RSE is mounted in your JupyterLab session BEFORE triggering the replication rule

## Using Data in Notebooks

Once data becomes available on your session's RSE:

1. **Open a notebook** in your JupyterLab session
2. An **Add to notebook** link appears in the extension sidebar
3. Click the link to add the data to your notebook
4. **Provide a variable name** for the data (e.g., `my_data`)
5. Click **Confirm**
6. A new variable containing the path to the data is automatically added to your notebook

![image](/img/rucio_jupyter_add.png)

The variable will contain the local file path where the data is available. It will be a single string with the path, in case of files, or a list of paths, in case of datasets and containers. This allows you to use the data directly in your analysis code:

```python
# After adding data via the extension
import numpy as np

# my_data is now a variable containing the local paths to the files in the data
# my_data = ["/tmp/rucio_xrd1/test/80/25/file1"]
with open(my_data[0], 'r') as f:
    data = np.load(f)
```

## Terminal Usage

To use Rucio commands in your terminal within the JupyterLab environment:

1. Open a **Terminal** window in JupyterLab
2. Verify authentication status:
   ```bash
   rucio whoami
   ```

The extension configuration is different from the terminal client configuration. To have `rucio` commands properly working in your terminal, follow your experiment's setup instructions (e.g., [ATLAS Rucio Guide](https://atlassoftwaredocs.web.cern.ch/internal-links/grid-tutorial/rucio-basics/)).

## Advanced Settings

If you experience authentication errors:

1. Click ⚙️ (settings) and then **Show Advanced Settings**
2. Click **Purge Cache** to erase any saved configuration
3. Try authenticating again

This can resolve issues where the extension shows:
```
Authentication error. Perhaps you set an invalid credential?
```

## Further Reading

For more information on Rucio and the extension, visit:
- [Rucio JupyterLab Extension Repository](https://github.com/rucio/jupyterlab-extension)
