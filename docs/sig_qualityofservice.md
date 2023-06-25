---
id: sig_qualityofservice
title: SIG QOS
---

## Objective

The purpose of this SIG is to allow a RSE handle in an automatic manner storage
with two different qualitiy of services based on access latency. Initial work in
this area differentiates between disk and tape within the same RSE. New data files
are initially pinned on disk either for the lifetime of the rule or up to the 
maximum set by the storage site. After the pin expires the local storage system is
free to stage the file to tape for further access. When Rucio needs to access such
files again, the bring on line command is given to the RSE and the file is 
transferred from tape to disk if needed. Currently this is being tested with dCache.
In the future, it can be extended to other storage systems where appropriate.
At the end of this SIG a report will be written documenting the status of this 
activity. Rucio's metadata functionality or interested in using it, to ascertain if the 
functionality currently provided in this area is sufficient for their current and 
expected future use cases. This information will be distilled into the form of a 
small report, where, if missing functionality is identified, the report will serve 
to aggregate any similar requests and prioritise them, with the goal of delivering 
a tentative roadmap to guide development.

## Expected End-Date

September 30, 2023

## Means to achieve the objective

- Mattermost channel: [#metadata](https://mattermost.web.cern.ch/rucio/channels/QoS)
- eMail list: 
- biweekly meetings with interested communities either over Zoom or asynchronously 
  over Mattermost.

## Convener

[Matt Snyder](msnyder at bnl dot gov)
