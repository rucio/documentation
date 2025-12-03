---
id: did_meta
title: DID Metadata
sidebar_label: DID Metadata
---

This guide explains how Rucio stores and queries DID metadata, and what changes depending on which metadata plugin you enable. It’s written for both power users and administrators: you can use metadata directly from the CLI, but the backend behavior (storage, filtering, recursion, deletion rules) depends on the plugin(s) configured.

## Quickstart: Managing DID metadata

Rucio supports adding metadata to DIDs from the CLI out of the box:

```bash
# Create a dataset to use on the Example
$ rucio did add --type dataset mock:testing_metadata

# Add "optimized" metadata that exist as columns in the DID table
$ rucio did metadata add mock:testing_metadata --key panda_id --value 9999

# Add "generic" metadata. If there is no custom metadata plugin,
# the plugin "JSON" will be used
$ rucio did metadata add mock:testing_metadata --key random_key_name --value 8888

# Get the "optimized" metadata
$ rucio did metadata list mock:testing_metadata

# Get the Generic metadata
$ rucio did metadata list mock:testing_metadata --plugin JSON

# Get all the metadata
$ rucio did metadata list mock:testing_metadata --plugin ALL

# List DIDs according to metadata
$ rucio did list mock:* --filter "type=ALL,panda_id=9999"
$ rucio did list mock:* --filter "type=ALL,random_key_name=8888"
```

Even though regular users can operate with metadata directly through the CLI, advanced users and Rucio administrators should be aware that the backend offers multiple options for storing and managing DID metadata depending on experiment needs. The concepts of DID metadata plugins and their configuration are described below.

## Architecture Overview

Rucio metadata is provided by a **plugin system**. A registry of enabled plugins is built from the `[metadata]` configuration section. The system always loads the core DID column plugin first, followed by custom plugins listed in `metadata.plugins` (comma-separated). If the configuration is absent, only the built-in JSON plugin is added after the base plugin. Plugin order matters for both key ownership and write precedence; the first plugin that declares support for a key handles writes. When reading with `ALL`, later plugins in the list overwrite keys from earlier ones because results are merged sequentially. Metadata keys may not contain the `.` character because it is used in filter syntax.

## Available Plugins

### DID column plugin (`DID_COLUMN`)
- Manages metadata backed by columns of the `dids` table; keys are limited to those columns and extra hardcoded filter helpers.
- Supports single and bulk updates; recursive propagation is implemented for keys handled by the column backend, updating attached children when `recursive=true`.
- Special handling exists for lifecycle fields (`eol_at`, `lifetime`), file-specific checksums/bytes/events, and updates cascade to associations, locks, and counters.
- Listing supports semantic `type` values (all, collection, container, dataset, file) and recursive expansion of attached contents. The `offset` parameter is currently ignored and `ignore_case` is accepted only for interface compatibility. Deduplication across OR groups and recursion can be driven by the internal `ignore_dids` set exposed on the plugin interface.
- Key management covers DID columns except a small exclude list, plus helper filter keys such as `created_before/after` (translated to `created_at` ranges) and numeric comparisons for `length`.
- Deleting metadata is not implemented for this plugin.

### JSON plugin (`JSON`)
- Stores arbitrary key/value metadata per DID in the relational database using the `did_meta` table with a JSON column.
- Automatically creates a `did_meta` row if absent during writes. Supports single and bulk updates, with overwrite semantics per key; the `recursive` flag is accepted by the API but has no effect on writes.
- Deleting removes the key from the JSON blob, raising an error if the key is missing.
 - Listing supports wildcard matching, type coercion, and optional recursive traversal of container/dataset contents; long outputs still include `did_type`, `bytes`, and `length` keys but set them to `None` because the JSON store does not track those values.
- Requires a database backend with JSON support (Oracle and SQLite use string serialization).

### Elasticsearch plugin (`ELASTIC`)
- Stores metadata documents in an Elasticsearch index. Connection parameters (hosts, credentials, SSL, client certificates, indices, timeouts, retries) are read from `[metadata]` configuration entries.
- Automatically seeds immutable keys (`scope`, `name`, `vo`) on new documents; other fields are freely mutable. Archive support allows copying documents to an archive index before deletion, and archived entries can be retrieved with `get_metadata_archived`.
- Supports get, single/bulk set, and delete operations; recursive writes and recursive searches are currently unsupported.
- Listing uses a point-in-time cursor with sorting and pagination; `long` responses always include `did_type`, `bytes`, and `length` fields with fallback values of `"N/A"` when those fields were not present in the document.
- Key management is permissive (all keys are accepted by this plugin).

### MongoDB plugin (`MONGO`)
- Stores per-DID metadata documents in MongoDB (one document per DID keyed by `_id` equal to `"<scope>:<name>"`).
- Automatically seeds immutable keys (`scope`, `name`, `vo`) on insert; these keys cannot be overwritten.
- Supports get, single/bulk set (with overwrite semantics), delete, and `list_dids`; recursive writes and recursive listing are not supported. `long` listings include `did_type`, `bytes`, and `length` keys with `"N/A"` placeholders when the values are not available.
- Connection parameters can be supplied programmatically or via `[metadata]` configuration (`mongo_service_host`, `mongo_service_port`, `mongo_db`, `mongo_collection`, optional `mongo_user`/`mongo_password`).

### External PostgreSQL JSON plugin (`POSTGRES_JSON`)
- Stores metadata in an external PostgreSQL table with a JSONB column; can either verify an existing schema or manage its own table.
- Connection/table configuration reads from `[metadata]` (`postgres_service_host`, `postgres_service_port`, `postgres_db`, `postgres_user`, `postgres_password`, `postgres_db_schema`, `postgres_table`, `postgres_table_is_managed`, and column overrides `postgres_table_column_vo/scope/name/data`).
- Supports get, single/bulk set (upserts), delete, and `list_dids`; recursive operations are not supported. `long` listings always emit `did_type`, `bytes`, and `length` fields with `"N/A"` placeholders because those values are not persisted in the external table.
- Key ownership is permissive (any key), mirroring JSON-style storage.

## Plugin Resolution and Key Ownership

- Plugin name matching is case-insensitive. The reserved name `ALL` queries every plugin and merges results when reading metadata; writes must resolve to exactly one plugin that claims ownership of the key(s).
- Bulk writes partition keys per plugin. Each owning plugin receives its subset in one call; the operation fails only when a key is unmanaged by every enabled plugin.
- Filtering with `list_dids` must use keys from a single plugin; otherwise a validation error is raised. If no filter keys are provided, the base plugin is used by default.

## Filtering Capabilities

Filtering is powered by the `FilterEngine` with the following features:

- **Input forms**: filters can be a JSON string, a single dictionary, or a list of dictionaries representing OR groups. Within each dictionary, key-value pairs are ANDed.
- **Operators**: suffix the key with `.gt`, `.lt`, `.gte`, `.lte`, `.ne`; default is equality. Wildcards (`*` or `%`) are allowed only with equality/inequality.
- **Type coercion**: string inputs are auto-cast to booleans, numbers, datetimes (multiple formats), or left as strings. `created_before/after` keys are converted to `created_at` range filters.
- **Validation**: ensures type-only equality, name equality/inequality, numeric `length`, valid date formats, and rejects duplicate criteria per OR group.
- **Backends**: can generate SQLAlchemy queries, PostgreSQL JSONB filters, MongoDB queries, and Elasticsearch queries. JSON-aware filtering (e.g., JSON plugin) skips coercion to model attributes and can target JSON columns.
- **Recursive listing**: base and JSON plugins can walk container/dataset contents when `recursive=true`, inserting derived names back into the filters; Elastic forbids recursion.

## Configuration Reference (metadata section)

- `plugins`: comma-separated list of fully qualified plugin classes to load after the base plugin (default: JSON plugin).
- **Elasticsearch options**: `elastic_service_hosts`, `elastic_user`, `elastic_password`, `meta_index` (default `rucio_did_meta`), `archive_index` (default `archive_meta`), `use_ssl`, `ca_certs`, `client_cert`, `client_key`, `elastic retries` (`request_timeout`, `max_retries`, `retry_on_timeout`), and `verify_certs` toggle.
- **MongoDB options**: `mongo_service_host`, `mongo_service_port`, `mongo_db`, `mongo_collection`, optional `mongo_user`/`mongo_password`.
- **External PostgreSQL JSON options**: `postgres_service_host`, `postgres_service_port`, `postgres_db`, `postgres_user`, `postgres_password`, `postgres_db_schema` (default `public`), `postgres_table` (default `dids`), `postgres_table_is_managed` (let Rucio create/own the table), and column overrides `postgres_table_column_vo/scope/name/data`.
- Additional plugins can be authored by implementing `DidMetaPlugin` and exposing the class via `metadata.plugins`.

Example configuration snippet:

```ini
[metadata]
# plugins = list_of_plugins,comma_separated
plugins = rucio.core.did_meta_plugins.did_column_meta.DidColumnMeta,escape.rucio.did_meta_plugin
```

## Key Restrictions and Error Handling

- Keys containing restricted characters (currently `.`) are rejected before writes.
- Using a plugin name not enabled on the server raises `UnsupportedMetadataPlugin`.
- Attempting cross-plugin filters raises `InvalidMetadata` errors; unmanaged keys in write requests also raise `InvalidMetadata`.
- Plugin-specific limitations apply (e.g., DID column plugin cannot delete metadata; Elastic forbids recursion; JSON plugin requires JSON support on the DB backend).

## Extending the System

To add a new metadata backend:
1. Implement `DidMetaPlugin`, providing CRUD methods, listing, and key-ownership logic (see the interface in [`rucio/core/did_meta_plugins/did_meta_plugin_interface.py`](https://github.com/rucio/rucio/blob/master/lib/rucio/core/did_meta_plugins/did_meta_plugin_interface.py) for method documentation).
2. Add the fully qualified class path to `metadata.plugins` in configuration.
3. Ensure the plugin name (`_plugin_name`) is unique and documents which keys it manages.
4. Respect the filtering contract so that all keys advertised by `manages_key` can be used in `list_dids` for that plugin.


[The API for existing metadata plugins can be found here](pathname:///html/did_meta_plugins/did_column_meta.html)
