---
title: Migrating from pre-36.0.0 Clients
---

In Rucio 36.0.0, a new rucio client was released. 
This new client redos the entire structure of both `rucio` and `rucio-admin`. 
`rucio-admin` is made redundant by the update, their commands are included in the `rucio >=36.0` client. 

Note: 
    Please report any issues you have with the new client [on this github issue](https://github.com/rucio/rucio/issues/7224)

# Legacy Mapping

* Using `rucio-admin` or `rucio --legacy` automatically uses the old version. Old help menus are still visible with this method. 
* Old commands still work - they display a warning.
* Not all commands are included in the 36 Client Release. Not all are one-to-one mapped. 
* A warning it printed (not logged) to consoles to encourage migration, along with the closest mapped command. 


# Remapping Existing Commands

|`rucio <36.0`| `rucio >=36.0`|
| ------------- | ------------- |
| rucio list-file-replicas | rucio replica list |
| rucio list-dataset-replicas | rucio replica dataset |
| rucio add-dataset | rucio did add --type dataset |
| rucio add-container | rucio did add --type container |
| rucio attach | rucio did content add |
| rucio detach | rucio did content remove |
| rucio ls | rucio did list |
| rucio list-dids | rucio did list |
| rucio list-parent-dids | rucio did show --parent |
| rucio list-scopes | rucio scope list |
| rucio close | rucio did update --close |
| rucio reopen | rucio did update --open |
| rucio stat | rucio did show |
| rucio erase | rucio did remove |
| rucio list-content | rucio did content list |
| rucio list-content-history | rucio did content history |
| rucio upload | rucio upload |
| rucio get | rucio download |
| rucio download | rucio download |
| rucio get-metadata | rucio did metadata list |
| rucio set-metadata | rucio did metadata add |
| rucio delete-metadata | rucio did metadata remove |
| rucio list-rse-usage | rucio rse show |
| rucio list-account-usage | rucio account usage |
| rucio list-account-limits | rucio account limit list |
| rucio add-rule | rucio rule add |
| rucio delete-rule | rucio rule remove |
| rucio rule-info | rucio rule info |
| rucio list-rules | rucio rule list |
| rucio list-rules-history | rucio rule history |
| rucio update-rule | rucio rule update |
| rucio move-rule | rucio rule update --move |
| rucio list-rses | rucio rse list |
| rucio list-suspicious-replicas | rucio replica state suspicious |
| rucio list-rse-attributes | rucio rse attribute list |
| rucio touch | rucio did update --touch |
| rucio add-lifetime-exception | rucio lifetime-exception add |

|`rucio-admin <36.0`| `rucio >=36.0`|
| ------------- | ------------- |
| rucio data import | rucio upload |
| rucio data export | rucio download |
| rucio account -h | rucio account -h |
| rucio account add | rucio account add |
| rucio account delete | rucio account remove |
| rucio account info | rucio account show |
| rucio account update | rucio account update |
| rucio account set-limits | rucio account limit add |
| rucio account get-limits | rucio account limit list |
| rucio account delete-limits | rucio account limit remove |
| rucio account ban | rucio account update --ban True |
| rucio account unban | rucio account update --ban False |
| rucio account list-attributes | rucio account attribute list |
| rucio account add-attribute | rucio account attribute add |
| rucio account delete-attribute | rucio account attribute remove |
| rucio identity -h | rucio account identity -h |
| rucio identity add | rucio account identity add |
| rucio identity delete | rucio account identity remove |
| rucio rse -h | rucio rse -h |
| rucio rse add | rucio rse add |
| rucio rse list | rucio rse list |
| rucio rse update | rucio rse update |
| rucio rse info | rucio rse show |
| rucio rse set-attribute | rucio rse attribute add |
| rucio rse delete-attribute | rucio rse attribute remove |
| rucio rse delete-distance | rucio rse distance remove |
| rucio rse get-distance | rucio rse distance list |
| rucio rse get-attribute | rucio rse attribute list |
| rucio rse add-protocol | rucio rse protocol add |
| rucio rse delete-protocol | rucio rse protocol remove |
| rucio rse delete | rucio rse remove |
| rucio rse add-qos-policy | rucio rse qos add |
| rucio rse add-distance | rucio rse distance add |
| rucio rse delete-qos-policy | rucio rse qos remove |
| rucio rse list-qos-policies | rucio rse qos list |
| rucio rse set-limit | rucio rse limit add |
| rucio rse delete-limit | rucio rse limit remove |
| rucio scope -h | rucio scope -h |
| rucio scope add | rucio scope add |
| rucio scope list | rucio scope list |
| rucio config -h | rucio config -h |
| rucio config get | rucio config list |
| rucio config set | rucio config add |
| rucio config delete | rucio config remove |
| rucio subscription -h | rucio subscription -h |
| rucio subscription add | rucio subscription add |
| rucio subscription list | rucio subscription |
| rucio subscription update | rucio subscription update |
| rucio subscription reevaluate | rucio subscription touch |
| rucio replicas -h | rucio replica -h |
| rucio replicas quarantine | rucio replica state quarantine |
| rucio replicas declare-bad | rucio replica state bad |
| rucio replicas declare-temporary-unavailable | rucio replica state unavailable |
| rucio replicas set-tombstone | rucio replica remove |
| rucio replicas list-pfns | rucio replica list file --pfns |