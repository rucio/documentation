---
id: deprecation_watchlist
title: Deprecation watchlist
sidebar_label: Deprecation watchlist
sidebar_position: 7
---

This page lists functionality, or features, which the development team has declared deprecated,
and intends to remove from Rucio at a future point in time. The aim of this list is to give the
community an early warning, but also to call for feedback about impact of such deprecations the
development team might not be aware of. This feedback might range from giving additional
information, to adapting timelines of deprecations, up to reverting the planned deprecation all
together. Please [reach out](../contact_us.md) to us to give feedback.

Wherever possible, we will give a deprecation warning of, at least, one year for removals.

## What belongs on this list

This watchlist is intended for high-level, operator- or user-facing features that are
removed in their entirety. These are changes with no drop-in replacement, where operators
or users need advance notice to plan a migration. Typical examples are the removal of a
transfer protocol, a daemon, support for a database backend, or a user interface.

It is not intended for lower-level or internal deprecations that come with a clear
migration path, such as the removal of a single REST API endpoint that has been superseded
by a new one.

## Deprecation watchlist

| Feature                        | Note                                 | Removed in version / date |
| ------------------------------ | ------------------------------------ | ------------------------- |
| Old CLI structure              | New structure is stable since 41.0   | 42.0 / 2026-Nov           |
| Old WebUI                      | Replaced by the (new) Rucio WebUI    | 43.0 / 2027-Mar           |
| Temporary unavailable replicas |                                      | 43.0 / 2027-Mar           |
| Support for MySQL              |                                      | 43.0 / 2027-Mar           |
| Follower daemon                |                                      | 43.0 / 2027-Mar           |
