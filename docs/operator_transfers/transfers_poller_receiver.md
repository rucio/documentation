---
id: transfers_poller_receiver
title: Transfers Poller/Receiver
---

`conveyor-poller` and `conveyor-receiver` are daemons responsible for tracking transfer status and updating it in the system.  
**You need to run one or both of them** depending on the transfer tool you are using:

- If you are using only **FTS3**, it is **recommended to use the receiver** for scalability. Although poller also works.
- If you are using only **Globus and/or BitTorrent**, you only need to run the poller.
- If both **FTS3** and **Globus and/or BitTorrent**, you need both receiver and poller.

## Poller

The `conveyor-poller` daemon periodically queries the transfer tools (such as FTS, Globus, or BitTorrent) directly to retrieve the status of ongoing transfers.  
Based on the results, it updates the state of each transfer in the system and/or refreshes the last access time.  
The transfer tool to query is taken from the transfer information internally and **no additional configuration is needed**.

**If using Globus or BitTorrent as the transfer tool, you need to use the poller.**

## Receiver

The `conveyor-receiver` daemon subscribes to an ActiveMQ message queue and continuously listens for transfer status updates.  
When it receives a message, it processes the update, changes the transfer's state accordingly, and/or updates the last access time.

To set up FTS to send transfer status updates to ActiveMQ broker, see the instructions [FTS3 Messaging Guide](https://fts3-docs.web.cern.ch/fts3-docs/docs/messaging.html).

> **Note:** The receiver connects to ActiveMQ using the **STOMP protocol**, so ensure your ActiveMQ instance has STOMP support enabled.

To configure `conveyor-receiver`, your rucio server config i.e. `rucio.cfg`, include the following section with described options:

```cfg
[messaging-fts3]
# Set to True to use SSL with certificate/key authentication, or False to use username/password
use_ssl = True

# A comma-separated list of ActiveMQ broker DNS hostnames or aliases
brokers = activemq1.example.org,activemq2.example.org

# Only required if use_ssl = False
username = your-username
password = your-password

# Port to use when NOT using SSL (i.e., use_ssl = False)
nonssl_port = 61613

# Port to use when using SSL (i.e., use_ssl = True)
port = 61617

# Required if use_ssl = True
ssl_key_file = /path/to/hostkey.pem
ssl_cert_file = /path/to/hostcert.pem

# The message topic or queue where FTS publishes transfer status updates.
destination = /topic/transfer.fts_monitoring_queue_state

# Optional: virtual host name used to connect to the broker
# This is only needed if your ActiveMQ setup requires a virtual host (e.g., in multi-tenant environments)
broker_virtual_host = /atlas
```

