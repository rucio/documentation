---
id: component_leads
title: Component development leads
sidebar_label: Component leads
---

The component lead is responsible for the planning and development of patches
and features for the respective component. This does not mean that the component
lead is the only person developing the component, but he/she should direct the
efforts and be the point of contact in case of problems.

**Rucio Project Leader**: [Martin Barisits](https://github.com/bari12)

|Component | Lead (+Deputies) | Description|
|--------- | ---------------- | -----------|
|[Authentication & Authorisation](https://github.com/rucio/rucio/issues?q=label%3A%22Authentication+%26+Authorisation%22+is%3Aissue+is%3Aopen) | [Dimitrios Christidis](https://github.com/dchristidis), [Mario Lassnig](https://github.com/mlassnig) | Client-server authentication, Rucio tokens, auth methods (kerberos, ssh, userpass, OIDC, ...)|
|[Clients](https://github.com/rucio/rucio/issues?q=label%3A%22Clients%22+is%3Aissue+is%3Aopen) | [Maggie Voetberg](https://github.com/voetberg), [Mario Lassnig](https://github.com/mlassnig) | General Python Clients and Command Line interface related development, rucio download, rucio upload; Specific component related client functionality is part of the other components|
|[Consistency checks](https://github.com/rucio/rucio/issues?q=label%3A%22Consistency+checks%22+is%3Aissue+is%3Aopen) | [Fabio Luchetti](https://github.com/faluchet), [Guilherme Lima](https://github.com/mrguilima)| Dark data detection daemon: Auditor|
|[Core & Internals](https://github.com/rucio/rucio/issues?q=label%3A%22Core+%26+Internals%22+is%3Aissue+is%3Aopen) | [Martin Barisits](https://github.com/bari12), [Mario Lassnig](https://github.com/mlassnig) | Core functionality not specifically part of other components|
|[Database](https://github.com/rucio/rucio/issues?q=label%3A%22Database%22+is%3Aissue+is%3Aopen) | [Mario Lassnig](https://github.com/mlassnig), [Martin Barisits](https://github.com/bari12) | Database (Compatibility and optimisation) and SQLAlchemy framework specific issues|
|[Dataset deletion](https://github.com/rucio/rucio/issues?q=label%3A%22Dataset+deletion%22+is%3Aissue+is%3Aopen) | [Alexander Richards](https://github.com/alexanderrichards), [Martin Barisits](https://github.com/bari12) | Dataset deletion daemon: Undertaker|
|[Deletion](https://github.com/rucio/rucio/issues?q=label%3A%22Deletion%22+is%3Aissue+is%3Aopen) | [Hugo Gonzalez Labrador](https://github.com/labkode), [Cedric Serfon](https://github.com/cserf) | File deletion daemon: Reaper|
|[DIRAC](https://github.com/rucio/rucio/issues?q=label%3A%22Dirac%22+is%3Aissue+is%3Aopen) | [Cedric Serfon](https://github.com/cserf) | Rucio integration with [Dirac](https://github.com/DIRACGrid/)|
|[Docker & Kubernetes](https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3A%22Docker+%26+Kubernetes%22) | [Riccardo Di Maio](https://github.com/rdimaio), [Mario Lassnig](https://github.com/mlassnig), [Eric Vaandering](https://github.com/ericvaandering), [Hugo Gonzalez Labrador](https://github.com/labkode) | Docker & Kubernetes deployment|
|[Documentation](https://github.com/rucio/rucio/issues?q=label%3A%22Documentation%22+is%3Aissue+is%3Aopen) | [Martin Barisits](https://github.com/bari12), [Maggie Voetberg](https://github.com/voetberg) | General documentation|
|[Functional tests](https://github.com/rucio/rucio/issues?q=label%3A%22Functional+tests%22+is%3Aissue+is%3Aopen) | [Cedric Serfon](https://github.com/cserf) | Functional transfer tests|
|[Jupyterlab extension](https://github.com/rucio/jupyterlab-extension/issues) | [Francesc Torradeflot](https://github.com/ftorradeflot), [Enrique Garcia Garcia](https://github.com/garciagenrique) | Rucio Jupyterlab extension|
|[Life time model](https://github.com/rucio/rucio/issues?q=label%3A%22Life+time+model%22+is%3Aissue+is%3Aopen) | [Dimitrios Christidis](https://github.com/dchristidis) | Life time model processing and exceptions|
|[Messaging](https://github.com/rucio/rucio/issues?q=label%3A%22Messaging%22+is%3Aissue+is%3Aopen) | [Alexander Richards](https://github.com/alexanderrichards), [Mario Lassnig](https://github.com/mlassnig) | Messaging daemon: Hermes, Creation of eMails and ActiveMQ messages|
|[Metadata](https://github.com/rucio/rucio/issues?q=label%3A%22Metadata%22+is%3Aissue+is%3Aopen) | [Rob Barnsley](https://github.com/robbarnsley) | Metadata workflows|
|[Monitoring & Logging](https://github.com/rucio/rucio/issues?q=label%3A%22Monitoring+%26+Logging%22+is%3Aissue+is%3Aopen) | [Mayank Sharma](https://github.com/maany), [Mario Lassnig](https://github.com/mlassnig) | All things logging and internal monitoring|
|[Multi VO](https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3A%22Multi+VO%22) | [Tim Noble](https://github.com/Thysk) |  Issues and developments related to Rucio Multi VO mode|
|[Policies](https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3APolicies) | [James Perry](https://github.com/jamesp-epcc) |  All things related to separate settings/config/policies into community specific things|
|[Probes & Alarms](https://github.com/rucio/rucio/issues?q=label%3A%22Probes+%26+Alarms%22+is%3Aissue+is%3Aopen) | [Dimitrios Christidis](https://github.com/dchristidis), [Eric Vaandering](https://github.com/ericvaandering) | Probes and alarms for Nagios|
|[Protocols](https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3AProtocols) | [Maggie Voetberg](https://github.com/voetberg), [Mario Lassnig](https://github.com/mlassnig) |  Protocols (Upload, Download, Deletion)|
|[Rebalancing](https://github.com/rucio/rucio/issues?q=label%3A%22Rebalancing%22+is%3Aissue+is%3Aopen) | [Cedric Serfon](https://github.com/cserf) | Data rebalancing daemon: BB8|
|[Recovery](https://github.com/rucio/rucio/issues?q=label%3A%22Recovery%22+is%3Aissue+is%3Aopen) | [Cedric Serfon](https://github.com/cserf) | Data recovery daemon: Necromancer|
|[Release management](https://github.com/rucio/rucio/issues?q=label%3A%22Release+management%22+is%3Aissue+is%3Aopen) | [Martin Barisits](https://github.com/bari12), [Dimitrios Christidis](https://github.com/dchristidis) | Packaging of new versions, package configuration|
|[Replicas](https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3AReplicas) | [Riccardo Di Maio](https://github.com/rdimaio), [Alexander Richards](https://github.com/alexanderrichards) | Replicas related workflows (list_replicas, add_replica, ...)|
|[REST & API](https://github.com/rucio/rucio/issues?q=is%3Aopen+is%3Aissue+label%3A%22REST+%26+API%22) | [Benedikt Ziemons](https://github.com/bziemons), [Martin Barisits](https://github.com/bari12) | Web-Framework (Web.py & Flask)|
|[Rules](https://github.com/rucio/rucio/issues?q=label%3A%22Rules%22+is%3Aissue+is%3Aopen) | [Riccardo Di Maio](https://github.com/rdimaio), [Martin Barisits](https://github.com/bari12) | Replication rules and rule daemons: Judge|
|[Subscriptions](https://github.com/rucio/rucio/issues?q=label%3A%22Subscriptions%22+is%3Aissue+is%3Aopen) | [Cedric Serfon](https://github.com/cserf) | Subscription daemon: Transmogrifier|
|[Testing](https://github.com/rucio/rucio/issues?q=label%3A%22Testing%22+is%3Aissue+is%3Aopen) | [Mayank Sharma](https://github.com/maany), [Riccardo Di Maio](https://github.com/rdimaio) | Regression and Unit tests, automatic tests of submissions|
|[Traces](https://github.com/rucio/rucio/issues?q=label%3A%22Traces%22+is%3Aissue+is%3Aopen) | [Mario Lassnig](https://github.com/mlassnig), [Mayank Sharma](https://github.com/maany) | All things traces and Trace processing daemon: Kronos|
|[Transfers](https://github.com/rucio/rucio/issues?q=label%3A%22Transfers%22+is%3Aissue+is%3Aopen) | [Riccardo Di Maio](https://github.com/rdimaio), [Hugo Gonzalez Labrador](https://github.com/labkode) | Transfer daemons: conveyor|
|[WebUI](https://github.com/rucio/rucio/issues?q=label%3A%22WebUI%22+is%3Aissue+is%3Aopen) | [Mayank Sharma](https://github.com/maany), [Eraldo Silva Junior](https://github.com/esilvaju) | Web user interface: Rucio Web UI|
