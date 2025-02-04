"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1709],{7683:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"started/daemons","title":"Rucio Daemons","description":"Rucio relies on several daemons (processes) to perform different logic.","source":"@site/../docs/started/daemons.md","sourceDirName":"started","slug":"/started/daemons","permalink":"/documentation/started/daemons","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/daemons.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1738676609000,"frontMatter":{"id":"daemons","title":"Rucio Daemons","sidebar_label":"daemons"}}');var t=s(74848),n=s(28453);const a={id:"daemons",title:"Rucio Daemons",sidebar_label:"daemons"},d=void 0,c={},l=[{value:"Daemons",id:"daemons",level:2},{value:"FAQ",id:"faq",level:2},{value:"Conveyor daemons",id:"conveyor-daemons",level:3},{value:"What happens when a rule is stuck?",id:"what-happens-when-a-rule-is-stuck",level:3},{value:"What happens when new data is added to an existing dataset that already has replicas?",id:"what-happens-when-new-data-is-added-to-an-existing-dataset-that-already-has-replicas",level:3},{value:"What is the purpose of the minos daemons?",id:"what-is-the-purpose-of-the-minos-daemons",level:3},{value:"What is the relationship between auditor, rucio-dumper and dark-reaper?",id:"what-is-the-relationship-between-auditor-rucio-dumper-and-dark-reaper",level:3},{value:"How is data deleted?",id:"how-is-data-deleted",level:3},{value:"How is a replica declared bad?",id:"how-is-a-replica-declared-bad",level:2},{value:"What is the purpose of undertaker?",id:"what-is-the-purpose-of-undertaker",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Rucio relies on several daemons (processes) to perform different logic.\nMost of the daemons connect to the DB to read some data, perform some computation,\nand then write some data back into the DB."}),"\n",(0,t.jsx)(r.p,{children:"Usually one daemon will create some work for another daemon and viceversa.\nIn Rucio realm, daemons communicate to others by the DB."}),"\n",(0,t.jsx)(r.p,{children:"The following table represents a high level view of the responsibility of each of the daemons."}),"\n",(0,t.jsx)(r.h2,{id:"daemons",children:"Daemons"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Domain"}),(0,t.jsx)(r.th,{children:"Purpose"}),(0,t.jsx)(r.th,{children:"Details"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-abacus-account"}),(0,t.jsx)(r.td,{children:"Accounting"}),(0,t.jsx)(r.td,{children:"Account usage"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-abacus-account",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-abacus-collection-replica"}),(0,t.jsx)(r.td,{children:"Accounting"}),(0,t.jsx)(r.td,{children:"Updates collection replicas"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-abacus-collection-replica",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-abacus-rse"}),(0,t.jsx)(r.td,{children:"Accounting"}),(0,t.jsx)(r.td,{children:"Updates RSE counters"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-abacus-rse",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-atropos"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"End the life of the rules according to the Lifetime Model"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-atropos",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-auditor"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"Find inconsistencies on storage, for example, dark data discovery"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-auditor",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-automatix"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"Used for testing: injects random data in RSEs to check liveness"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-automatix",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-bb8"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"Rebalance data across RSEs"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-bb8",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-cache-client"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"Populates information of replicas on volatile storage"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-cache-client",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-cache-consumer"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"Adds and deletes cache replicas to the Rucio catalog"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-cache-consumer",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-conveyor-finisher"}),(0,t.jsx)(r.td,{children:"Transfer"}),(0,t.jsx)(r.td,{children:"Updates Rucio internal state after the file transfer has finished"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-conveyor-finisher",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-conveyor-poller"}),(0,t.jsx)(r.td,{children:"Transfer"}),(0,t.jsx)(r.td,{children:"Polls updates from the transfer tool to check the transfer state"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-conveyor-poller",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-conveyor-preparer"}),(0,t.jsx)(r.td,{children:"Transfer"}),(0,t.jsx)(r.td,{children:"Prepares data transfers"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-conveyor-preparer",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-conveyor-receiver"}),(0,t.jsx)(r.td,{children:"Transfer"}),(0,t.jsx)(r.td,{children:"Sister of poller, instead of polling for updates, it reads transfer tools notifications to check transfer state"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-conveyor-receiver",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-conveyor-stager"}),(0,t.jsx)(r.td,{children:"Transfer"}),(0,t.jsx)(r.td,{children:"Issues staging (bring online) requests to tape RSEs"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-conveyor-stager",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-conveyor-submitter"}),(0,t.jsx)(r.td,{children:"Transfer"}),(0,t.jsx)(r.td,{children:"Submit transfer requests to the transfer tool (prepares the transfer as well if the conveyor-preparer is not enabled)"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-conveyor-submitter",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-conveyor-throttler"}),(0,t.jsx)(r.td,{children:"Transfer"}),(0,t.jsx)(r.td,{children:"Queues transfer requests inside Rucio, applying limits, ex: only one transfer at a time, etc ..."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-conveyor-throttler",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-dark-reaper"}),(0,t.jsx)(r.td,{children:"Deletion"}),(0,t.jsx)(r.td,{children:"Deletes quarantined replicas"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-dark-reaper",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-dumper"}),(0,t.jsx)(r.td,{children:"Consistency"}),(0,t.jsx)(r.td,{children:"Dumps file lists. The rucio-auditor consumes these dumps to discover dark data"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-dumper",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-follower"}),(0,t.jsx)(r.td,{children:"Telemetry"}),(0,t.jsx)(r.td,{children:"Aggregates events affecting DIDs"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-follower",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-hermes"}),(0,t.jsx)(r.td,{children:"Telemetry"}),(0,t.jsx)(r.td,{children:"Sends Rucio messages to external services (InfluxDB, OpenSearch, ActiveMQ, ...)"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-hermes",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-judge-cleaner"}),(0,t.jsx)(r.td,{children:"Rule"}),(0,t.jsx)(r.td,{children:"Cleans expired replication rules"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-judge-cleaner",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-judge-evaluator"}),(0,t.jsx)(r.td,{children:"Rule"}),(0,t.jsx)(r.td,{children:"Creates and evaluates replication rules based on their state (OK/REPL/STUCK)"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-judge-evaluator",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-judge-injector"}),(0,t.jsx)(r.td,{children:"Rule"}),(0,t.jsx)(r.td,{children:"Asynchronously injects replication rules"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-judge-injector",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-judge-repairer"}),(0,t.jsx)(r.td,{children:"Rule"}),(0,t.jsx)(r.td,{children:"Repairs stuck replication rules (STATE=STUCK)"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-judge-repairer",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-kronos"}),(0,t.jsx)(r.td,{children:"Telemetry"}),(0,t.jsx)(r.td,{children:"Consumes Rucio tracing messages, updates access time of replicas and access count of DIDs"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-kronos",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-minos"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"Reads list of physical file names (PFNs) declared bad and classifies them in: temporary unavailable  and permanently unavailable (to be recovered by the necromancer daemon)"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-minos",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-minos-temporary-expiration"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"Moves back TEMPORARY_UNAVAILABLE replicas into AVAILABLE state"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-minos-temporary-expiration",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-necromancer"}),(0,t.jsx)(r.td,{children:"Deletion"}),(0,t.jsx)(r.td,{children:"Works on permanently unavailable replicas, it tries to recover the data from other valid replicas if any, else declares the replica as lost"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-necromancer",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-oauth-manager"}),(0,t.jsx)(r.td,{children:"Auth/Authz"}),(0,t.jsx)(r.td,{children:"Deletes expired access tokens (in case there is a valid refresh token, expired access tokens will be kept until refresh_token expires as well.) and deletion of expired OAuth session parameters"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-oauth-manager",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-reaper"}),(0,t.jsx)(r.td,{children:"Deletion"}),(0,t.jsx)(r.td,{children:"Deletes replicas that don't have locks anymore, i.e. they have a tombstone set"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-reaper",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-suspicious-replica-recoverer"}),(0,t.jsx)(r.td,{children:"Replica"}),(0,t.jsx)(r.td,{children:"Declares suspicious replicas as bad if they are found available on other RSEs, so necromancer will work on them"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-replica-recoverer",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-rse-decommissioner"}),(0,t.jsx)(r.td,{children:"Deletion"}),(0,t.jsx)(r.td,{children:"Decommissions an RSE. The actions to perform are specified in decommissioning profiles (delete all data, move replicas, etc ...)"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-rse-decommissioner",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-storage-consistency-actions"}),(0,t.jsx)(r.td,{children:"Consistency"}),(0,t.jsx)(r.td,{children:"Applies corrective actions as a result of a consistency check on an RSE"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-storage-consistency-actions",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-transmogrifier"}),(0,t.jsx)(r.td,{children:"Rule"}),(0,t.jsx)(r.td,{children:"Creates replication rules for DIDs matching a subscription"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-transmogrifier",children:"Details"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rucio-undertaker"}),(0,t.jsx)(r.td,{children:"Deletion"}),(0,t.jsx)(r.td,{children:"Manages expired DIDs, deleting them (does not delete replicas)"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../bin/rucio-undertaker",children:"Details"})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(r.h3,{id:"conveyor-daemons",children:"Conveyor daemons"}),"\n",(0,t.jsx)(r.p,{children:"It is important to know the following:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The throttler daemon will need the preparer to work."}),"\n",(0,t.jsx)(r.li,{children:"The preparer is a daemon that optimizes transfer requests, while recommended to install, it's not mandatory."}),"\n",(0,t.jsx)(r.li,{children:"The submitter is the only daemon needed to submit transfers and can do a subset of what the preparer can do."}),"\n",(0,t.jsx)(r.li,{children:"To update the state of requests, the conveyor poller (polls for changes) or conveyor receiver (listens for changes)  are needed to understand the new state."}),"\n",(0,t.jsx)(r.li,{children:"The finisher analyzes this new state and updates the state."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"what-happens-when-a-rule-is-stuck",children:"What happens when a rule is stuck?"}),"\n",(0,t.jsx)(r.p,{children:"The judge repairer will analyze why the transfer is stuck and try to unstuck it, eventually resubmitting the request."}),"\n",(0,t.jsx)(r.h3,{id:"what-happens-when-new-data-is-added-to-an-existing-dataset-that-already-has-replicas",children:"What happens when new data is added to an existing dataset that already has replicas?"}),"\n",(0,t.jsx)(r.p,{children:"The judge evaluator will keep track of new data added to datasets that are already replicated to trigger the necessary transfer requests to ensure all new data is copied to the RSEs."}),"\n",(0,t.jsx)(r.h3,{id:"what-is-the-purpose-of-the-minos-daemons",children:"What is the purpose of the minos daemons?"}),"\n",(0,t.jsx)(r.p,{children:"An human operator can declare some datasets as temporarily unavailable due to maintenance, outages, etc ...The operator will set an expiration time on the temporary unavailable status. When the expiration time is reached, the minos-temporary-expiration will put the replicas back in available state."}),"\n",(0,t.jsx)(r.h3,{id:"what-is-the-relationship-between-auditor-rucio-dumper-and-dark-reaper",children:"What is the relationship between auditor, rucio-dumper and dark-reaper?"}),"\n",(0,t.jsx)(r.p,{children:"The dumper will create a dump of all the files in an RSE that will be passed to the auditor. The auditor will check for inconsistencies and mark missing data as dark data (quarantined replicas).\nDark reaper is the one deleting this dark data to free up space from the quarantined replicas table."}),"\n",(0,t.jsx)(r.h3,{id:"how-is-data-deleted",children:"How is data deleted?"}),"\n",(0,t.jsx)(r.p,{children:"When replicas are healthy, the judge-cleaner will set a tombstone on replicas where the lifetime has expired. These replicas are taken by the reaper and they are deleted.\nSometimes, replicas can become unhealthy. A dump is created by the dumper daemon. The auditor checks these dumps and declares replicas as suspicious."}),"\n",(0,t.jsx)(r.h2,{id:"how-is-a-replica-declared-bad",children:"How is a replica declared bad?"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"An operator can declare a replica as bad issuing rucio cli commands."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"rucio-admin replicas declare-bad [-h] --reason REASON [--inputfile [INPUTFILE]] [--allow-collection] [--lfns [LFNS]] [--scope [SCOPE]] [--rse [RSE]] [listbadfiles ...]\n"})}),"\n",(0,t.jsx)(r.p,{children:"These bad replicas are taken by the necromancer daemon and then deleted if they cannot be recovered from other RSEs."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["the suspicious-replica-recoverer is a daemon that will analyze different counters (transfer errors, download errors, etc ...) to mark replicas as being suspicious to have an issue. After hitting\na certain limit (configurable by ",(0,t.jsx)(r.code,{children:"--nattempts"})," flag), the replica is marked as bad and eventually consumed by the necromancer."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"what-is-the-purpose-of-undertaker",children:"What is the purpose of undertaker?"}),"\n",(0,t.jsx)(r.p,{children:'A dataset is "never" deleted, however, when the dataset is known to be bad, there is no point having it in the catalog. The undertaker daemon takes care to remove these datasets.\nAn operator will set an expiration date in the past of the DIDs and this daemon will delete the dataset from the DB. If there were any replicas attached, the replicas will be deleted as well.'})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>d});var i=s(96540);const t={},n=i.createContext(t);function a(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);