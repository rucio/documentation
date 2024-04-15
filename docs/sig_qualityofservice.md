---
id: sig_qualityofservice
title: SIG Quality of Service
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
At the end of this SIG a report will be written documenting the outcome/benefit of this
activity.

## Expected End-Date

~~September 30, 2023~~
End of 2023

## Means to achieve the objective

- Mattermost channel: [#QoS](https://mattermost.web.cern.ch/rucio/channels/QoS)
- eMail list: rucio-sig-qos@cern.ch
- biweekly meetings with interested communities either over Zoom or asynchronously
  over Mattermost.
  - [Meeting series in Indico](https://indico.cern.ch/category/14213/)
  - [Meeting notes](https://codimd.web.cern.ch/MfDv9yRMQmOrwGEwhlGXpQ#)

## Convener

[Doug Benjamin](mailto:douglas.benjamin@cern.ch)
