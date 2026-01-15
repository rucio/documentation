---
id: project_structure
title: Project Structure
---

The Rucio code structure is broken into multiple modules, to allow it to be grouped into packages without requiring code duplication.
Before making a change, it is important to consider how your change will be used across different releases.
This will greatly impact the structure of your change.

![A simplified diagram of Rucio's code structure. It is broken into 3 boxes labeled "Rucio", "Rucio Web" and "Rucio Client". The "Rucio" box contains the web and client boxes.](/img/code_structure.png)

## Core
Core contains the main functionality of the project, it can be conceptualized as rucio's central logic.
Any changes that need to impact all of rucio should be made in core.
For example: if a new feature introduces a new type of DID, the logic for this is included in the core, and then the ways for users and operators to use this logic is included in different parts of the code (namely, in client, gateway, and web).

## Common
Common contains code used across client and server modules.
Code in common is distributed with server and client releases, so if the functionality is required in both releases, it is included in common.
This includes things like configuration parsing, logging, and generalized utility/helper functions.

## Client
Client is a standalone module which sends requests to a server.
It can make calls to the Common module, but does not require direct knowledge of core's operation.
It contacts the Rest API hosted in web.

bin/rucio and bin/rucio-admin utilize functionality hosted in client.

If your change impacts how the user interacts with rucio, (the name of calls, arguments), this change should be made in client.

## Daemons
Daemons are auxiliary server side code to run asynchronous work without direct user interaction.
They do not need to be run, but are included with server releases.
Changes impacting daemons are generally self-contained in the daemons.

## Gateway
Gateway is a series of recipes for basic operations using core functionality.
It allows for functionality of the core to be used with correct database sessions, authentication parameters.
It is an intermediate layer between the core and the Rest API - the Rest API utilizes the gateway to make calls to core.

All public core methods should have a corresponding gateway method to handle sessions and authentication.

## Web
Web contains the flask-based Rest API for the client to contact the server.
(Found at `/lib/rucio/web/rest/flaskapi/v1`).
It also contains the routing for a Web UI front end.
When adding new functionality, or modifying the arguments of an existing function, it is imperative to update the Rest API.

## Other

### DB
As the name implies, DB contains database schema and connection utilities.
It is included in server releases of rucio.
Changes in the database dramatically impact all other parts of the code, such as core's database queries.
A migration instruction script must be included with DB changes to ensure data is not lost during upgrade or downgrades.

### RSE
RSE provides different protocols to access RSEs (ex: ssh, srm.)
It is included client distributions, and all RSE protocols must be able to run without direct access to core.

### Tests
Tests contains utilities for testing.

### Transfertool
Similar to RSE, transfertool contains protocols for executing file transfers.
It can include calls to core, as transfer protocols sit server side.
