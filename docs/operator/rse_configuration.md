# RSE Configuration Guide

This section provides an overview of Rucio Storage Elements (RSEs) from an operator's perspective, covering setup, configuration, and best practices.

The Rucio Storage Elements (RSEs) are the fundamental storage endpoints in a Rucio deployment. They represent physical or logical storage locations where data files are stored.

## RSE Types

Rucio supports several types of RSEs, each suited for different use cases:

### 1. FILE/POSIX RSEs
- Simple local filesystem access
- Limited to local machine access
- Best for testing or single-node deployments

### 2. WebDAV RSEs
- Web-based access via HTTP/HTTPS
- Supports remote access
- Requires web server configuration

### 3. DISK RSEs
- Standard disk-based storage
- Fast access for active data
- Examples: EOS, dCache, local filesystem

### 4. TAPE RSEs
- Long-term archival storage
- Higher latency but larger capacity
- Examples: CTA (CERN Tape Archive)
---

## RSE Setup Methods

There are two primary methods for setting up RSEs in Rucio:

1. **Command Line Interface (CLI)**: Using the `rucio` CLI tool
2. **Python API**: Using the Rucio core Python library

Both methods achieve the same result. Choose the method that best fits your workflow.

### Method 1: Using the Rucio CLI

The CLI approach is straightforward and suitable for interactive setup or shell scripts.

**Basic workflow:**

```bash
# 1. Add the RSE
rucio rse add RSE_NAME

# 2. Set RSE type
rucio rse update RSE_NAME --key rse_type --value DISK  # or TAPE

# 3. Add attributes
rucio rse attribute add RSE_NAME --key attribute_name --value attribute_value

# 4. Add protocol(s)
rucio rse protocol add --host hostname --scheme scheme --prefix /path \
  --port port --impl implementation \
  --domain-json '{"wan": {...}, "lan": {...}}' \
  RSE_NAME

# 5. Set account limits
rucio account limit add account_name --rse RSE_NAME --bytes quota
```

### Method 2: Using the Python API

The Python API is useful for automation, complex configurations, or when integrating with other Python tools.

**Basic workflow:**

```python
#!/usr/bin/env python
from rucio.core.rse import add_rse, add_protocol, get_rse_id, add_rse_attribute
from rucio.core.account import set_account_limit

# 1. Add the RSE
add_rse('RSE_NAME')
rse_id = get_rse_id('RSE_NAME')

# 2. Add attributes
add_rse_attribute(rse_id, key='rse_type', value='DISK')
add_rse_attribute(rse_id, key='attribute_name', value='attribute_value')

# 3. Add protocol
params = {
    'scheme': 'https',
    'hostname': 'hostname',
    'port': 443,
    'prefix': '/path',
    'impl': 'rucio.rse.protocols.gfal.Default',
    'domains': {
        'lan': {'read': 1, 'write': 1, 'delete': 1},
        'wan': {'read': 1, 'write': 1, 'delete': 1,
                'third_party_copy_read': 1, 'third_party_copy_write': 1}
    }
}
add_protocol(rse_id, params)

# 4. Set account limits
set_account_limit('account_name', rse_id, bytes_limit)
```

---

## RSE Configuration Examples

### FILE/POSIX RSEs

:::warning
POSIX RSEs are the simplest type but cannot be accessed from remote machines. They are suitable for testing or single-node deployments only.
:::

**Using CLI:**

```bash
# Add the RSE
rucio rse add POSIX_RSE

# Set backend type
rucio rse attribute add POSIX_RSE --key backend_type --value POSIX

# Configure storage usage monitoring
rucio rse attribute add POSIX_RSE --key storage_usage_tool \
  --value 'rucio.rse.protocols.posix.Default.getSpace'

# Add protocol
rucio rse protocol add --host localhost \
  --scheme file \
  --prefix '/data/posix-rse-1' \
  --impl 'rucio.rse.protocols.posix.Default' \
  --domain-json '{"lan": {"read": 1, "write": 1, "delete": 1}, "wan": {"read": 1, "write": 1, "delete": 1}}' \
  POSIX_RSE

# Set account limits
rucio account limit add root --rse POSIX_RSE --bytes infinity
```

---

### WebDAV RSEs

WebDAV RSEs provide remote access where external clients need to upload and download files.

#### Apache Configuration

WebDAV RSEs require an Apache web server with WebDAV and SSL modules enabled.

**File:** `/etc/httpd/conf.d/rse.conf`

```apache
DAVLockDB /var/lib/dav/lockdb

<IfModule mod_ssl.c>
<VirtualHost *:443>
    ServerAdmin admin@hostname
    ServerName hostname
    ServerAlias hostname
    DocumentRoot /path/to/rse

    SSLEngine on
    SSLCertificateFile /etc/grid-security/hostcert.pem
    SSLCertificateKeyFile /etc/grid-security/hostkey.pem
    SSLCACertificateFile /etc/grid-security/ca.pem

    Alias /webdav /path/to/rse

    <Directory /path/to/rse>
        DAV On
        AllowOverride None
        Options None
        SSLVerifyClient require
        SSLVerifyDepth 2
        SSLOptions +StdEnvVars
        SSLCACertificateFile /etc/grid-security/ca.pem

        # For x509 authentication (recommended)
        Require valid-user

        # For open access (NOT RECOMMENDED for production)
        # Require all granted
    </Directory>

</VirtualHost>
</IfModule>
```

**File System Permissions:**

Apache requires correct ownership and SELinux context:

```bash
# Set ownership
chown -R apache:apache /path/to/rse
chmod -R 755 /path/to/rse

# Set SELinux context
semanage fcontext -a -t httpd_sys_rw_content_t "/path/to/rse(/.*)?"
restorecon -Rv /path/to/rse
```

:::note
If `semanage` is not available, install it with:
```bash
dnf install policycoreutils-python-utils
```
:::

#### Rucio Configuration

**Using CLI:**

```bash
RUCIO_RSE_NAME="WEBDAV_RSE"
HOST="webdav.example.com"
PREFIX="/webdav"

# Add RSE
rucio rse add $RUCIO_RSE_NAME

# Set attributes
rucio rse update $RUCIO_RSE_NAME --key rse_type --value DISK
rucio rse attribute add $RUCIO_RSE_NAME --key istape --value False
rucio rse attribute add $RUCIO_RSE_NAME --key verify_checksum --value False
rucio rse attribute add $RUCIO_RSE_NAME --key greedyDeletion --value True

# Add davs protocol
rucio rse protocol add --host $HOST $RUCIO_RSE_NAME \
  --scheme davs \
  --prefix $PREFIX \
  --port 443 \
  --impl rucio.rse.protocols.gfal.Default \
  --domain-json '{"wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}, "lan": {"read": 1, "write": 1, "delete": 1}}'

# Set account limits
rucio account limit add root --rse $RUCIO_RSE_NAME --bytes infinity
```

**Using Python API:**

```python
#!/usr/bin/env python
from rucio.core.rse import add_rse, add_protocol, get_rse_id, add_rse_attribute

# Protocol parameters
params = {
    'scheme': 'davs',
    'prefix': '/webdav',
    'hostname': 'webdav.example.com',
    'port': 443,
    'impl': 'rucio.rse.protocols.gfal.Default',
    'domains': {
        "lan": {
            "read": 1,
            "write": 1,
            "delete": 1,
            "third_party_copy_read": 1,
            "third_party_copy_write": 1
        },
        "wan": {
            "read": 1,
            "write": 1,
            "delete": 1,
            "third_party_copy_read": 1,
            "third_party_copy_write": 1
        }
    }
}

# Add RSE
add_rse('WEBDAV_RSE')
rse_id = get_rse_id('WEBDAV_RSE')

# Setup protocol
add_protocol(rse_id, params)

# Set attributes
add_rse_attribute(rse_id, key='istape', value='False')
add_rse_attribute(rse_id, key='verify_checksum', value='False')
add_rse_attribute(rse_id, key='greedyDeletion', value='True')
```

---

### Disk RSEs

Disk RSEs provide fast access to active data and are typically backed by systems like EOS.

**Using CLI:**

```bash
RUCIO_RSE_NAME="EXAMPLE_DISK_RSE"
HOST="eospublic.cern.ch"
PREFIX="//eos/workspace/e/experiment/tmp"

# Create RSE
rucio rse add $RUCIO_RSE_NAME

# Set RSE type and attributes
rucio rse update $RUCIO_RSE_NAME --key rse_type --value DISK
rucio rse attribute add $RUCIO_RSE_NAME --key lfn2pfn_algorithm --value identity
rucio rse attribute add $RUCIO_RSE_NAME --key fts --value https://fts3-pilot.cern.ch:8446

# Add HTTPS protocol (primary for transfers)
rucio rse protocol add --host $HOST $RUCIO_RSE_NAME \
  --scheme https \
  --prefix $PREFIX \
  --port 8444 \
  --impl rucio.rse.protocols.gfal.Default \
  --domain-json '{"wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}, "lan": {"read": 1, "write": 1, "delete": 1}}'

# Add ROOT protocol (alternative access method)
rucio rse protocol add --host $HOST $RUCIO_RSE_NAME \
  --scheme root \
  --prefix $PREFIX \
  --port 1094 \
  --impl rucio.rse.protocols.gfal.Default \
  --domain-json '{"wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}, "lan": {"read": 1, "write": 1, "delete": 1}}'

# Set account limits
rucio account limit add root --rse $RUCIO_RSE_NAME --bytes infinity
```

**Using Python API:**

```python
#!/usr/bin/env python
from rucio.core.rse import add_rse, add_protocol, get_rse_id, add_rse_attribute

# Add RSE
add_rse('EXAMPLE_DISK_RSE')
rse_id = get_rse_id('EXAMPLE_DISK_RSE')

# Set attributes
add_rse_attribute(rse_id, key='rse_type', value='DISK')
add_rse_attribute(rse_id, key='lfn2pfn_algorithm', value='identity')
add_rse_attribute(rse_id, key='fts', value='https://fts3-pilot.cern.ch:8446')

# Add HTTPS protocol
https_params = {
    'scheme': 'https',
    'hostname': 'eospublic.cern.ch',
    'port': 8444,
    'prefix': '//eos/workspace/e/experiment/tmp',
    'impl': 'rucio.rse.protocols.gfal.Default',
    'domains': {
        'lan': {'read': 1, 'write': 1, 'delete': 1},
        'wan': {'read': 1, 'write': 1, 'delete': 1,
                'third_party_copy_read': 1, 'third_party_copy_write': 1}
    }
}
add_protocol(rse_id, https_params)

# Add ROOT protocol
root_params = {
    'scheme': 'root',
    'hostname': 'eospublic.cern.ch',
    'port': 1094,
    'prefix': '//eos/workspace/e/experiment/tmp',
    'impl': 'rucio.rse.protocols.gfal.Default',
    'domains': {
        'lan': {'read': 1, 'write': 1, 'delete': 1},
        'wan': {'read': 1, 'write': 1, 'delete': 1,
                'third_party_copy_read': 1, 'third_party_copy_write': 1}
    }
}
add_protocol(rse_id, root_params)
```

:::info
- Both `https` and `root` protocols are defined for flexibility
- The `identity` algorithm means the scope is appended to the prefix path
- Multiple deployments can share the same prefix if they use different scopes
:::

---

### Tape RSEs

Tape RSEs are used for long-term archival storage with higher latency but larger capacity.

**Using CLI:**

```bash
RUCIO_RSE_NAME="EXAMPLE_TAPE_RSE"
HOST="eosctaatlaspps.cern.ch"
PREFIX="//eos/ctaatlaspps/archivetest/experiment/tmp"

# Create RSE
rucio rse add $RUCIO_RSE_NAME

# Set RSE type and attributes
rucio rse update $RUCIO_RSE_NAME --key rse_type --value TAPE
rucio rse attribute add $RUCIO_RSE_NAME --key lfn2pfn_algorithm --value identity
rucio rse attribute add $RUCIO_RSE_NAME --key fts --value https://fts3-pilot.cern.ch:8446
rucio rse attribute add $RUCIO_RSE_NAME --key archive_timeout --value 86400

# Add HTTPS protocol only (root protocol can cause issues with tape)
rucio rse protocol add --host $HOST $RUCIO_RSE_NAME \
  --scheme https \
  --prefix $PREFIX \
  --port 8444 \
  --impl rucio.rse.protocols.gfal.Default \
  --domain-json '{"wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}, "lan": {"read": 1, "write": 1, "delete": 1}}'

# Set account limits
rucio account limit add root --rse $RUCIO_RSE_NAME --bytes infinity
```

**Using Python API:**

```python
#!/usr/bin/env python
from rucio.core.rse import add_rse, add_protocol, get_rse_id, add_rse_attribute

# Add RSE
add_rse('EXAMPLE_TAPE_RSE')
rse_id = get_rse_id('EXAMPLE_TAPE_RSE')

# Set attributes
add_rse_attribute(rse_id, key='rse_type', value='TAPE')
add_rse_attribute(rse_id, key='lfn2pfn_algorithm', value='identity')
add_rse_attribute(rse_id, key='fts', value='https://fts3-pilot.cern.ch:8446')
add_rse_attribute(rse_id, key='archive_timeout', value='86400')

# Add HTTPS protocol
params = {
    'scheme': 'https',
    'hostname': 'eosctaatlaspps.cern.ch',
    'port': 8444,
    'prefix': '//eos/ctaatlaspps/archivetest/experiment/tmp',
    'impl': 'rucio.rse.protocols.gfal.Default',
    'domains': {
        'lan': {'read': 1, 'write': 1, 'delete': 1},
        'wan': {'read': 1, 'write': 1, 'delete': 1,
                'third_party_copy_read': 1, 'third_party_copy_write': 1}
    }
}
add_protocol(rse_id, params)
```

**Key Differences from Disk RSEs:**
- `rse_type` is set to `TAPE`
- `archive_timeout` attribute specifies maximum time for file staging (86400 = 24 hours)
- Typically only `https` protocol is defined (avoid `root` protocol for tape)

**Testing Environment:**
At CERN, the path `//eos/ctaatlaspps/archivetest/experiment/tmp` can be used for tape testing. This is a temporary space where data is not expected to be kept long-term.

---

## RSE Attributes

RSE attributes control behavior and capabilities. Common attributes include:

| Attribute | Description | Example Values |
|-----------|-------------|----------------|
| `rse_type` | Type of storage | `DISK`, `TAPE` |
| `lfn2pfn_algorithm` | Logical to physical name mapping | `identity`, `hash` |
| `fts` | FTS (File Transfer Service) endpoint | `https://fts3-pilot.cern.ch:8446` |
| `istape` | Is this a tape system? | `True`, `False` |
| `verify_checksum` | Enable checksum verification | `True`, `False` |
| `greedyDeletion` | Delete files immediately when removed | `True`, `False` |
| `archive_timeout` | Timeout for tape staging (seconds) | `86400` (24 hours) |
| `naming_convention` | Custom naming scheme | Custom algorithm name |

### Setting Attributes

```bash
# Using rucio CLI
rucio rse attribute add RSE_NAME --key attribute_name --value attribute_value

# Using Python API
from rucio.core.rse import add_rse_attribute, get_rse_id
rse_id = get_rse_id('RSE_NAME')
add_rse_attribute(rse_id, key='attribute_name', value='attribute_value')
```

---

## Protocols

Protocols define how clients access data on an RSE. Multiple protocols can be defined for the same RSE.

### Common Protocol Schemes

- `file://` - Local filesystem (POSIX)
- `https://` - HTTP with SSL/TLS
- `davs://` - WebDAV with SSL/TLS
- `root://` - ROOT protocol (XRootD)
- `srm://` - Storage Resource Manager
- `s3://` - S3 compatible storage; for more information, refer to the [Rucio S3 Protocol Documentation](s3_rse_config/#how-to-setup-an-s3-rse).
- `gridftp://` - GridFTP protocol

### Protocol Priority

The priority values in the `domain-json` determine which protocol is preferred:
- Higher numbers indicate higher priority
- Priority `1` is standard for active protocols
- Priority `0` or omitted disables the protocol

### Domain Configuration

```json
{
  "lan": {
    "read": 1,
    "write": 1,
    "delete": 1
  },
  "wan": {
    "read": 1,
    "write": 1,
    "delete": 1,
    "third_party_copy_read": 1,
    "third_party_copy_write": 1
  }
}
```

- `lan`: Local Area Network (same site)
- `wan`: Wide Area Network (remote sites)
- `third_party_copy`: Direct transfers between RSEs via FTS

---

## Account Limits

Account limits control how much space an account can use on an RSE.

### Setting Limits

```bash
# Set unlimited quota for root account
rucio account limit add root --rse RSE_NAME --bytes infinity

# Set specific quota (in bytes)
rucio account limit add user_account --rse RSE_NAME --bytes 1099511627776  # 1 TB
```

### Common Quota Values

```bash
1 TB  = 1099511627776 bytes
1 PB  = 1125899906842624 bytes
infinity = unlimited
```

---

## Non-Deterministic RSEs

Non-deterministic RSEs don't follow the standard logical-to-physical naming convention. This is common for tape systems where files may be stored with system-generated names.

### Setup Example

```bash
RUCIO_RSE_NAME="ESCAPE_TAPE_RSE"

# Add as non-deterministic
rucio rse add --non-deterministic $RUCIO_RSE_NAME

# Set type and attributes
rucio rse update $RUCIO_RSE_NAME --key rse_type --value TAPE
rucio rse attribute add $RUCIO_RSE_NAME --key naming_convention --value escape_tape
```

**When to Use:**
- Tape systems with internal file organization
- Storage systems that don't support directory structures
- Systems requiring custom naming schemes

---

## Best Practices

### 1. RSE Distance Configuration

:::danger[Critical]
RSE distance must be properly configured for transfers to work between RSEs.
:::

```bash
# Set distance between RSEs (lower value = closer)
rucio rse distance add --distance 1 SOURCE_RSE DEST_RSE
```

### 2. Protocol Selection

- **Disk RSEs:** Define both `https` and `root` protocols for flexibility
- **Tape RSEs:** Use only `https` protocol to avoid timeout issues
- **Testing:** Use `file://` protocol for local development only

### 3. Prefix Planning

When using the `identity` lfn2pfn algorithm, the scope is appended to the prefix:
- Use generic prefixes like `//eos/workspace/e/experiment/tmp`
- Each deployment can use the same prefix with different scopes
- Example: Files with scope `ams` will be under `//eos/ams/`

### 4. Security

- **Certificates:** Keep host certificates up to date
- **Access Control:** Set appropriate account limits
- **SELinux:** Ensure proper context for web-accessible directories

### 5. Monitoring

- Set `storage_usage_tool` for RSE space monitoring
- Configure FTS endpoint for transfer tracking
- Enable logging for protocol operations

### 6. Tape-Specific

- Set reasonable `archive_timeout` values (24 hours recommended)
- Use staging-aware clients
- Avoid `root://` protocol for tape systems
- Monitor staging queue length

### 7. Testing

Before deploying to production:
1. Test file upload/download
2. Verify checksum handling
3. Test third-party copy between RSEs
4. Check deletion operations
5. Validate account limits

### 8. Common Pitfalls

- Forgetting to set RSE distances
- Wrong file permissions on WebDAV directories
- Missing SELinux context
- Using `root://` protocol for tape RSEs
- Not setting FTS endpoint for transfers
- Insufficient archive timeout for tape staging

---

## Additional Resources

- [FTS3 Documentation](https://fts3-docs.web.cern.ch/)
- [EOS Documentation](https://eos-docs.web.cern.ch/)
- [CTA Documentation](https://eoscta.docs.cern.ch/)

---

## Quick Reference Commands

```bash
# List all RSEs
rucio rse list

# Show RSE details
rucio rse info RSE_NAME

# List RSE attributes
rucio rse attribute list RSE_NAME

# List RSE protocols
rucio rse protocol list RSE_NAME

# Check RSE usage
rucio rse usage RSE_NAME

# List account limits
rucio account limit list ACCOUNT_NAME

# Test file upload
rucio upload --rse RSE_NAME --scope SCOPE file.txt
```
