---
id: transfers-submitter
title: Transfers Submitter
---

The `conveyor-submitter` (transfer submitter) is the Rucio daemon in charge
of submitting transfers for execution by an external third-party-copy
trasfertool. As input, it gets the transfer requests in `queued` state and
performs multiple tasks on them with the end goal of submitting the actual
transfer to one or more transfertools.

Historically, submitter was the main entry point into the transfer machinery
instead of the preparer. Because of that, many old Rucio installations don't
run the preparer daemon. To allow running in such configuration, submitter
automatically detects if preparer is running and, if it's not running, will
perform the "Source replica selection". See the preparer documentation for more
details.

The Submitter:

- (if preparer is not running) selects the source replica
- computes the path for the selected replica
- checks transfertool-specific RSE attributes
- creates intermediate hops for multi-hop transfers
- generates the full URIs to be used by the transfertool
- performs the actual submission of the transfer

If the configuration value `conveyor/filter_transfertool` is set, submitter
will only work on transfers having the `transfertool` attribute set to the
correct value. This database field is filled by the preparer, so preparer is
required for multi-transfertool deployments.

To verify if a path cen be submitted by any of the transfertools configured
in `conveyor/transfertool`, transfertool-specific RSE attributes are used. For
example, the fts3 transfertool requires an `fts` RSE attribute with a list of
fts servers; while the globus transfertool requires the `globus_endpoint_id`
attribute on both source and destination RSE.

If a path can be submitted, all missing hops are created into the database,
and submitter goes to the submission step, which is straightforward and
consists of calling the transfertool with the correct arguments.
