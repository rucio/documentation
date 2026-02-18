---
id: open_data
title: Open Data
sidebar_label: Open Data
---

Rucio has native support for Open Data which was introduced in `v38.0.0`.
It is an evolving feature and allows to tag already registered Rucio DIDs as Open Data and to add additional metadata (json-compatible).
Rucio is able to expose these Open Data DIDs in a dedicated Open Data endpoint, returning useful information such as a list with all Open Data DIDs or the Open Data details of a given DID.

## Configuration

There are multiple configuration options available for Open Data which can be found in the [Rucio configuration parameters documentation](https://rucio.cern.ch/documentation/operator/configuration_parameters/#opendata).
These settings must be consistent between server and clients, so ensure any configuration is set on the server exclusively.

The most important configuration option is `rse_expression`:

```sh
rucio config add -s opendata --key rse_expression --value={rse expression for all OpenData rses}
```

which is used to match the RSEs where Open Data files are stored. This will be used for the automatic replication rules (if enabled) and to return a list of Open Data files.

It is recommended that these RSEs are publicly accessible and without any kind of authentication needed in order to facilitate the access to Open Data files.

## Open Data CLI

### Adding a DID to the Open Data catalog

Any Rucio DID can be added to the Open Data catalog.

This command will create a Rucio DID to use in this tutorial (skip if you already have some DIDs to work with).

```shell
rucio scope add demo --account root

DID=demo:demo-1
rucio did add --type dataset $DID
```

To add a DID to the Open Data catalog:

```shell
rucio opendata did add $DID
```

A list of all Open Data DIDs may be fetched by the following command. It accepts additional option such as filters.
Since the initial state of an Open Data DID is `draft`, we can filter for that.

```shell
rucio opendata did list --state draft
```

We can also show details for a given Open Data DID

```shell
rucio opendata did show $DID --files --meta
```

this command supports multiple flags, such as `files` used to list all the files for this DID or `meta` to show Open Data metadata.

The `--public` flag can also be used to perform the request against the Open Data public endpoint. This will only work if the Open Data DID is marked as public in the Open Data catalog.

### Updating an Open Data DID

The Open Data DIDs can be enriched with some additional Open Data specific metadata.

A DOI can be added to the DID via

```shell
rucio opendata did update $DID --doi 10.1234/abcd.56789
```

The DOI must be a valid DOI string and globally unique in the Rucio Open Data catalog.

A JSON object may be added as Open Data metadata

```shell
rucio opendata did update $DID --meta '{"key":"value"}'
```

This Open Data metadata will be available in the `show` command and in the

## Public Open Data

An Open Data DID can be marked as `public`.
Public Open Data DIDs will be exposed publicly in the Rucio server without the need of any kind of authentication.

In order to become public, the DID must be closed if not a file.

A Rucio DID may be closed via the following command

```shell
rucio did update --close $DID
```

After the DID is closed, it can be set to public via

```shell
rucio opendata did update $DID --state public
```

An Open Data DID can be reverted to a non-public state by transferring it to the `suspended` state.

```shell
rucio opendata did update $DID --state suspended
```

There is an exclusive Rucio endpoint for public Open Data called `opendata_public`.
For production deployments we recommend a dedicated Rucio server with only the `opendata_public` enabled, as this server instance is able to process unauthenticated requests.
If this server is accessible to other services related to Open Data such as the Open Data Portal, it can provide updated information related to the Open Data DIDs registered in Rucio.

## REST API

The [REST API for Open Data](https://rucio.cern.ch/documentation/html/rest_api_doc.html#tag/open_data) is available as part of the Rucio REST API documentation.

The most important feature is that users are able to send requests to the public Open Data endpoint without any kind of authentication.
This can be used to establish synchronization between Rucio and a third party app such as an Open Data Portal.

## Open Data replication rules

It is possible to trigger the creation of a replication rule when an Open Data DID is set to `public`.

All the available Rucio configuration options for the Open Data replication rules can be seen [in the Rucio config parameters documentation page](https://rucio.cern.ch/documentation/operator/configuration_parameters#opendata).

The rule option needs to be enabled (`rule_enable=True`) and a valid RSE expression must be provided.
The RSE expression under `rse_expression` in the `opendata` section of the configuration will be used.
This can be overridden by `rule_rse_expression` if defined but in most cases just defining `rse_expression` is enough.

Other options related to the rule can be set via configuration parameters, such as the rule account, number of copies or activity.

The rule will be created when the Open Data DID is set to public and the rule **will not be deleted** if the Open Data DID is set to another state or deleted from the Rucio Open Data catalog, the rule will still remain.
The rule can be deleted the same as with any other replication rule.

It is possible to view the associated Open Data replication rule via the `rucio opendata show` command.
