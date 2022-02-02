---
id: Additional-layers-and-Resources
title: Additional Layers and Resources
sidebar_label: Additional Layers and Resources
---
In addition to the four [main layers](Main-components-of-rucio.md), we have the
storage resources & transfer tools, as well as the underlying persistent
layers. These are represented in the architecture diagram by the different
*queuing systems*, *transactional* relational databases, & *analytics* storage
on non-relational databases.

- Storage & Transfer Tools layer

The Storage layer is responsible for the various interactions with different
grid middleware tools & storage systems. The transfer tool interface is a
feature of Rucio that enables the daemons to submit, query, and cancel transfers
generically & independently from the actual transfer service being used.

This layer is not a software that resides in a datacenter but is more
representative of the various abstractions in a storage system. It can be
configured dynamically & centrally to suite requirements.

- Persistence Layer

This is the layer responsible for keeping all the data & application states for
all daemons. Also known as the **catalog**, it requires a transactional
database.

The persistence layer supports many different types of transactions relational
database management systems such as SQLite, MySQL, PostgreSQL, or Oracle. Both
upgrading & downgrading of the database schema are supported.
