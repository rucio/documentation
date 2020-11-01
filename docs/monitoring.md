---
id: Monitoring
title: Monitoring
sidebar_label: Monitoring
---

There are three different monitoring components:
  -   Rucio internal monitoring using Graphite/Grafana
  -   Transfer monitoring using the messages sent by Hermes
  -   File/Dataset Access monitoring using the traces

## Internal Monitoring

This is to monitor the internals of Rucio servers and daemons, e.g.,
submission rate of the conveyor, state of conveyor queues, reaper
deletion rate, server response times, server active session, etc. We use
Graphite[^1] for this. It's easy to setup and then you have to point
your Rucio instance to the Graphite server using the \"carbon_server"
options in the "monitor" section in etc/rucio.cfg.

The different Rucio components will then send metrics using those
"record" functions you will find all over the code. Graphite has a
built-in web interface to show graphs but more comfortable to use is the
Grafana[^2] tool.

## Transfer monitoring

If a transfer is submitted, queued, waiting, done or failed messages are
sent to ActiveMQ via Hermes and are also archived in the
messages_history table. Same is true for deletions. In the case of ATLAS
we have a dedicated monitoring infrastructure that reads the messages
from [ActiveMQ](https://activemq.apache.org), aggregates them and then
writes the aggregated data into ElasticSearch/InfluxDB from where it
then can be visualised using Kibana/Grafana.

## Access monitoring

The traces are sent by the pilots or the rucio clients whenever a file
is downloaded/uploaded.

## Footnotes

[^1]: <https://graphiteapp.org/>

[^2]: <https://grafana.com/>
