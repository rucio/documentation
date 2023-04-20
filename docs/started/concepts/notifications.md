---
id: notifications
title: Notifications
sidebar_label: Notifications
---

External applications can require synchronisation on events relative to
data availability and can subscribe to particular events, e.g., dataset
state changes, replication rule state changes, etc. Rucio publishes
messages via the [STOMP](https://stomp.github.io) protocol (to e.g.
[ActiveMQ](https://activemq.apache.org)) when these events happen.
