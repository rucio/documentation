---
id: what_is_rucio
title: What is Rucio?
---

Rucio enables centralized management of large volumes of data backed by many
heterogeneous storage backends.

Data is physically distributed over a large number of storage servers, potentially
each relying on different storage technologies (SSD/Disk/Tape/Object storage) and,
frequently, managed by different teams of system administrators.

Rucio builds on top of this heterogeneous infrastructure and provides an interface
which allows users to interact with the storage backends in a unified way.
The smallest operational unit in Rucio is a file. Rucio enables users to upload,
download, and declaratively manage groups of such files.

Declarative management is the power of Rucio, as it allows the user to define
high-level rules such as "Keep 3 copies, on 2 different continents".
If one copy is lost, it will be automatically re-constructed on a different storage
server to enforce the configured rules.

## History

Rucio was developed as a replacement for the Don Quijote (DQ2) data management
system. Even if DQ2 has demonstrated very large scale data management capabilities,
the **ATLAS Distributed Data Management System** used for **HEP
experiments at CERN** had reached its limits in terms of scalability. The
primary concerns were

- the requirement of a large number of support staff to operate.
- difficulty in interfacing with new technologies

To address these very scaling requirements for HEP experiments, **Rucio** as a
Distributed Data Management System, was developed. Drawing benefits from
advances in Cloud & Big Data computations, it relies on a conceptual data model
to ensure system stability. Dataflow autonomy and automation are the key design
principles guiding the development of Rucio. To reduce the operational overheads
of the support staff, it employs an automation framework and also accounts for
newer use cases & user requirements in high energy physics and beyond.

## What can Rucio do

The capabilities of Rucio are:

- Storage of detector data, simulator data, and user data
- Unified interfacing of heterogeneous network & storage infrastructure
- Support for newer protocols in Storage & Network using plugins
- Data Recovery
- Adaptive Replication
- Quota management

## What Rucio doesn't do

Rucio doesn't automatically create the storage backends. The storage servers must
be created and configured, in advance, with one of the supported access protocols
(webdav/s3/sftp/xrootd/...), then configured in Rucio.
