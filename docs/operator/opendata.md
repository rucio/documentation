---
id: opendata
title: Opendata
sidebar_label: Opendata
---

Rucio has native support for Opendata which was introduced in `v38.0.0`.
It is an evolving feature and allows to tag already registered Rucio DIDs as Opendata and to add additional metadata (json-compatible).
Rucio is able to expose these Opendata DIDs in a dedicated Opendata endpont, returning useful information such as a list with all Opendata DIDs or the Opendata details of a given DID.

## Opendata CLI

### Adding a DID to the Opendata catalog

Any Rucio DID can be added to the Opendata catalog.

This command will create a Rucio DID to use in this tutorial (skip if you already have some DIDs to work with).

```shell
rucio scope add demo --account root

DID=demo:demo-1
rucio did add --type dataset $DID
```

To add a DID to the Opendata catalog:

```shell
rucio opendata did add $DID
```

A list of all Opendata DIDs may be feched by the following command. It accepts additional option such as filters.
Since the initial state of an Opendata DID is `draft`, we can filter for that.

```shell
rucio opendata did list --state draft
```

We can also show details for a given Opendata DID

```shell
rucio opendata did show $DID --files --meta
```

this command supports multiple flags, such as `files` used to list all the files for this DID or `meta` to show Opendata metadata.

The `--public` flag can also be used to perform the request against the Opendata public endpoint. This will only work if the Opendata DID is marked as public in the Opendata catalog.

### Updating an Opendata DID

The Opendata DIDs can be enriched with some additional Opendata-specific data.

A DOI can be added to the DID via

```shell
rucio opendata did update $DID --doi 10.1234/abcd.56789
```

The DOI must be a valid DOI string and globally unique in the Rucio Opendata catalog.

A JSON object may be added as Opendata metadata

```shell
rucio opendata did update $DID --meta '{"key":"value"}'
```

This Opendata metadata will be available in the `show` command and in the 

## Public Opendata

An Opendata DID can be marked as `public`. 
Public Opendata DIDs will be exposed publicly in the Rucio server without the need of any kind of authentication.

In order to become public, the DID must be closed if not a file.

A Rucio DID may be closed via the following command

```shell
rucio did update --close $DID
```

After the DID is closed, it can be set to public via

```shell
rucio opendata did update $DID --state public
```

An Opendata DID can be reverted to a non-public state by transferring it to the `suspended` state.

```shell
rucio opendata did update $DID --state suspended
```

There is an exclusive Rucio endpoint for public Opendata called `opendata_public`.
For production deployments we recommend a dedicated Rucio server with only the `opendata_public` enabled, as this server instace is able to process unauthenticated requests.
If this server is accessible to other services related to Opendata such as the Opendata Portal, it can provide updated information related to the Opendata DIDs registered in Rucio.

## REST API

The [REST API for Opendata](https://rucio.cern.ch/documentation/html/rest_api_doc.html#tag/Opendata) is available as part of the Rucio REST API documentation.

The most important feature is that users are able to send requests to the public opendata endpoint without any kind of autentication.
This can be used to establish synchronization between Rucio and a third party app such as an Opendata Portal.
