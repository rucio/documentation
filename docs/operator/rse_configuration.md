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

## RSE Configuration Concepts
Before diving into the setup methods, it's important to understand the main concepts that define RSE configuration:

### RSE Attributes

RSE attributes are key-value pairs that control the behavior and capabilities of an RSE. They define how Rucio interacts with the storage system.

**Common attributes include:**
- Storage characteristics (type, capacity, availability)
- File naming and organization conventions
- Transfer and checksum policies
- Integration endpoints (FTS, monitoring)

An exhaustive list of RSE attributes can be found in the [RSE attributes page](configuration_parameters/#rse-attributes).

### Protocols

Protocols define the methods clients use to access data on an RSE. Each protocol specifies:
- **Scheme**: The access protocol (e.g., `https`, `root`, `davs`)
- **Hostname/Port**: Network endpoint for the storage system
- **Prefix**: Base path for file storage
- **Implementation**: Python class handling protocol operations
- **Domains**: Separate configurations for local (LAN) and remote (WAN) access
- **Operations**: Supported operations (read, write, delete, third-party copy)

Multiple protocols can be configured for a single RSE, allowing different access methods for different use cases.

### Account Limits

Account limits (also called quotas) control how much storage space a Rucio account can consume on a specific RSE. Limits are:
- Set per account per RSE
- Specified in bytes (or as `infinity` for unlimited)
- Enforced by Rucio's replication rules and placement decisions

Without appropriate limits, accounts cannot create replicas on an RSE.

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

### Method 2: Using the Python Client API

The Python Client API is the recommended approach for automation, complex configurations, or when integrating with other Python tools.

**Basic workflow:**

```python
#!/usr/bin/env python
from rucio.client.rseclient import RSEClient
from rucio.client.accountlimitclient import AccountLimitClient

# Initialize clients
rse_client = RSEClient()
account_limit_client = AccountLimitClient()

# 1. Add the RSE
rse_client.add_rse('RSE_NAME')

# 2. Add attributes
rse_client.add_rse_attribute('RSE_NAME', 'rse_type', 'DISK')
rse_client.add_rse_attribute('RSE_NAME', 'attribute_name', 'attribute_value')

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
rse_client.add_protocol('RSE_NAME', params)

# 4. Set account limits
account_limit_client.set_account_limit('account_name', 'RSE_NAME', bytes_limit)
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

**Using Python Client API:**

```python
#!/usr/bin/env python
from rucio.client.rseclient import RSEClient

# Initialize client
rse_client = RSEClient()

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
rse_client.add_rse('WEBDAV_RSE')

# Setup protocol
rse_client.add_protocol('WEBDAV_RSE', params)

# Set attributes
rse_client.add_rse_attribute('WEBDAV_RSE', 'istape', 'False')
rse_client.add_rse_attribute('WEBDAV_RSE', 'verify_checksum', 'False')
rse_client.add_rse_attribute('WEBDAV_RSE', 'greedyDeletion', 'True')
```

---

### Disk RSEs

Disk RSEs provide fast access to active data and are typically backed by systems like EOS.

**Using CLI:**

```bash
RUCIO_RSE_NAME="EXAMPLE_DISK_RSE"
HOST="storage.example.com"
PREFIX="/storage/rucio" # If using EOS, note that the path is //eos/your-path

# Create RSE
rucio rse add $RUCIO_RSE_NAME

# Set RSE type and attributes
rucio rse update $RUCIO_RSE_NAME --key rse_type --value DISK
rucio rse attribute add $RUCIO_RSE_NAME --key lfn2pfn_algorithm --value identity
rucio rse attribute add $RUCIO_RSE_NAME --key fts --value https://fts.example.com:8446

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

**Using Python Client API:**

```python
#!/usr/bin/env python
from rucio.client.rseclient import RSEClient

# Initialize client
rse_client = RSEClient()

# Add RSE
rse_client.add_rse('EXAMPLE_DISK_RSE')

# Set attributes
rse_client.add_rse_attribute('EXAMPLE_DISK_RSE', 'rse_type', 'DISK')
rse_client.add_rse_attribute('EXAMPLE_DISK_RSE', 'lfn2pfn_algorithm', 'identity')
rse_client.add_rse_attribute('EXAMPLE_DISK_RSE', 'fts', 'https://fts.example.com:8446')

# Add HTTPS protocol
https_params = {
    'scheme': 'https',
    'hostname': 'storage.example.com',
    'port': 8444,
    'prefix': '/storage/rucio',
    'impl': 'rucio.rse.protocols.gfal.Default',
    'domains': {
        'lan': {'read': 1, 'write': 1, 'delete': 1},
        'wan': {'read': 1, 'write': 1, 'delete': 1,
                'third_party_copy_read': 1, 'third_party_copy_write': 1}
    }
}
rse_client.add_protocol('EXAMPLE_DISK_RSE', https_params)

# Add ROOT protocol
root_params = {
    'scheme': 'root',
    'hostname': 'storage.example.com',
    'port': 1094,
    'prefix': '/storage/rucio',
    'impl': 'rucio.rse.protocols.gfal.Default',
    'domains': {
        'lan': {'read': 1, 'write': 1, 'delete': 1},
        'wan': {'read': 1, 'write': 1, 'delete': 1,
                'third_party_copy_read': 1, 'third_party_copy_write': 1}
    }
}
rse_client.add_protocol('EXAMPLE_DISK_RSE', root_params)
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
HOST="tape-storage.example.com"
PREFIX="/tape/archive" # If using EOS, note that the path is //eos/your-path

# Create RSE
rucio rse add $RUCIO_RSE_NAME

# Set RSE type and attributes
rucio rse update $RUCIO_RSE_NAME --key rse_type --value TAPE
rucio rse attribute add $RUCIO_RSE_NAME --key istape --value True
rucio rse attribute add $RUCIO_RSE_NAME --key lfn2pfn_algorithm --value identity
rucio rse attribute add $RUCIO_RSE_NAME --key fts --value https://fts.example.com:8446
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

**Using Python Client API:**

```python
#!/usr/bin/env python
from rucio.client.rseclient import RSEClient

# Initialize client
rse_client = RSEClient()

# Add RSE
rse_client.add_rse('EXAMPLE_TAPE_RSE')

# Set attributes
rse_client.add_rse_attribute('EXAMPLE_TAPE_RSE', 'rse_type', 'TAPE')
rse_client.add_rse_attribute('EXAMPLE_TAPE_RSE', 'lfn2pfn_algorithm', 'identity')
rse_client.add_rse_attribute('EXAMPLE_TAPE_RSE', 'fts', 'https://fts.example.com:8446')
rse_client.add_rse_attribute('EXAMPLE_TAPE_RSE', 'archive_timeout', '86400')

# Add HTTPS protocol
params = {
    'scheme': 'https',
    'hostname': 'tape-storage.example.com',
    'port': 8444,
    'prefix': '/tape/archive',
    'impl': 'rucio.rse.protocols.gfal.Default',
    'domains': {
        'lan': {'read': 1, 'write': 1, 'delete': 1},
        'wan': {'read': 1, 'write': 1, 'delete': 1,
                'third_party_copy_read': 1, 'third_party_copy_write': 1}
    }
}
rse_client.add_protocol('EXAMPLE_TAPE_RSE', params)
```

**Key Differences from Disk RSEs:**
- `rse_type` is set to `TAPE`
- `archive_timeout` attribute specifies maximum time for file staging (86400 = 24 hours)
- Typically only `https` protocol is defined (avoid `root` protocol for tape)



---

### Setting RSE Attributes

```bash
# Using rucio CLI
rucio rse attribute add RSE_NAME --key attribute_name --value attribute_value

# Using Python Client API
from rucio.client.rseclient import RSEClient
rse_client = RSEClient()
rse_client.add_rse_attribute('RSE_NAME', 'attribute_name', 'attribute_value')
```

---

## Protocols

Protocols define how clients access data on an RSE. Multiple protocols can be defined for the same RSE.
See the [RSE Protocols Documentation](https://rucio.cern.ch/documentation/html/transfer_protocols/posix.html) for a full list of parameters.

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
- Use generic prefixes like `/storage/rucio` or `/data/experiment`
- Each deployment can use the same prefix with different scopes
- Example: Files with scope `mydata` will be under `/storage/rucio/mydata/`

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
