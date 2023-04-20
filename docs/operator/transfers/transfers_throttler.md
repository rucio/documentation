---
id: transfers-throttler
title: Transfers Throttler
---

As the name suggests, `conveyor-throttler` (transfer throttler) is used to
protect the transfertools from overload by limiting the number of submitter
transfers at any particular moment of time. 

Preparer is required to be able to run throttler. See the preparer documentation
on how to activate it.

The rucio administrator must manually configure throttling rules.  As of time
of writing, there is no CLI option in rucio-admin to do it. Rules have to be
added using the rucio core functions directly from a rucio node.

**Warning**: only set transfer limits if throttler is running. Otherwise,
preparer will transition transfers to the `waiting` state, but nobody will
consume the queue of waiting transfers. Leading to these transfers never
being executed.

```python
from rucio.core.request import set_transfer_limit, list_transfer_limits

list(list_transfer_limits())
set_transfer_limit("RSE1", max_transfers=100)
```

The previous code snippet will create (or update) the 'destination' throttling
rule for transfers towards RSE1. A maximum of 100 transfers will be allowed
at a time towards RSE1. Note that "RSE1" here is an RSE expression, not
a name, complex RSE expressions can be used in rules. If more than one rule
applies to a specific RSE, the more restrictive condition applies.

Throttler supports some advanced throttler techniques. Some of them are:
- source throttling
- grouping of files from the same dataset together (grouped_fifo strategy)  

These techniques can be costly on the database and were not extensively tested.
The only technique we use in production is destination throttling.
