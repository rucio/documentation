"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6495],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}},81304:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"release-notes/1.31.0","title":"1.31.0","description":"Upgrade Instructions","source":"@site/../docs/release-notes/1.31.0.md","sourceDirName":"release-notes","slug":"/release-notes/1.31.0","permalink":"/documentation/release-notes/1.31.0","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.31.0.md","tags":[],"version":"current","frontMatter":{"title":"1.31.0"}}');var i=s(74848),t=s(28453);const o={title:"1.31.0"},c=void 0,a={},l=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"Helm chart changes",id:"helm-chart-changes",level:2},{value:"breaking change: Version <code>1.31.x</code> of <code>rucio-servers</code> helm chart is incompatible with old values",id:"breaking-change-version-131x-of-rucio-servers-helm-chart-is-incompatible-with-old-values",level:3},{value:"Highly recommended change: rework of the <code>additionalSecrets</code> section",id:"highly-recommended-change-rework-of-the-additionalsecrets-section",level:3},{value:"Recommended change: rework of ftsRenewal section",id:"recommended-change-rework-of-ftsrenewal-section",level:3},{value:"Your opinion is welcomed: deprecation of implicit secrets",id:"your-opinion-is-welcomed-deprecation-of-implicit-secrets",level:3},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,i.jsxs)(n.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,i.jsx)(n.a,{href:"https://rucio.cern.ch/documentation/database/",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,i.jsxs)(n.p,{children:["The following changes are necessary and are covered by the ",(0,i.jsx)(n.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Adding ",(0,i.jsx)(n.code,{children:"REPLICAS_RSE_ID_TOMBSTONE_IDX"})," to ",(0,i.jsx)(n.code,{children:"replicas"})," table; ",(0,i.jsx)(n.strong,{children:"CAUTION"}),": If you add this index online, make sure the index is fully built before you deploy 1.31!"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This release enables the usage of temporary tables per default. Previously, this was an opt-in, now it is an opt-out. If you notice any issues due to this change, you can turn the usage of temporary tables off via setting the ",(0,i.jsx)(n.code,{children:"[core]use_temp_tables=False"})," setting in the config table."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"helm-chart-changes",children:"Helm chart changes"}),"\n",(0,i.jsxs)(n.h3,{id:"breaking-change-version-131x-of-rucio-servers-helm-chart-is-incompatible-with-old-values",children:["breaking change: Version ",(0,i.jsx)(n.code,{children:"1.31.x"})," of ",(0,i.jsx)(n.code,{children:"rucio-servers"})," helm chart is incompatible with old values"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"What changes?"}),"\nThe ",(0,i.jsx)(n.code,{children:"rucio-server"})," helm chart doesn't support anymore to deploy separate ",(0,i.jsx)(n.code,{children:"api"}),", ",(0,i.jsx)(n.code,{children:"auth"})," and ",(0,i.jsx)(n.code,{children:"trace"})," servers. Only a single server deployment can be done by one helm release."]}),"\n",(0,i.jsx)(n.p,{children:"There are two possible cases."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If your helm values don't set any of the ",(0,i.jsx)(n.code,{children:"authReplicaCount"})," or ",(0,i.jsx)(n.code,{children:"traceReplicaCount"})," (or set them to ",(0,i.jsx)(n.code,{children:"0"}),"), the impact of this release will be very limited on you."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you have any of the\n",(0,i.jsx)(n.code,{children:"authService"}),"\n",(0,i.jsx)(n.code,{children:"traceService"}),"\n",(0,i.jsx)(n.code,{children:"authIngress"}),"\n",(0,i.jsx)(n.code,{children:"traceIngress"}),"\n",(0,i.jsx)(n.code,{children:"authServerResources"}),"\n",(0,i.jsx)(n.code,{children:"traceServerResources"}),"\n",(0,i.jsx)(n.code,{children:"authServerResources"}),"\nsections set in the values. They were already ignored anyway because of\n",(0,i.jsx)(n.code,{children:"authReplicaCount"})," and ",(0,i.jsx)(n.code,{children:"traceReplicaCount"})," not being set. You can safely\nremove these sections"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After that, you'll have to substitute any of the following constructs:"}),"\n",(0,i.jsx)(n.p,{children:"exposeErrorLogs:\nserver: ...\nuseSSL:\nserver: ...\nminReadySeconds:\nserver: ...\nreadinessProbe:\nserver:\ninitialDelaySeconds: ...\n...\nlivenessProbe:\nserver:\ninitialDelaySeconds: ...\n...\nserverType:\nserver: ...\nlogFormat:\nserver: ..."}),"\n",(0,i.jsx)(n.p,{children:"with"}),"\n",(0,i.jsx)(n.p,{children:"exposeErrorLogs: ...\nuseSSL: ...\nminReadySeconds: ...\nreadinessProbe:\ninitialDelaySeconds: ...\n...\nlivenessProbe:\ninitialDelaySeconds: ...\n...\nserverType: ...\nlogFormat: ..."}),"\n",(0,i.jsxs)(n.p,{children:["if any of the sections have an ",(0,i.jsx)(n.code,{children:"authServer"})," or ",(0,i.jsx)(n.code,{children:"traceServer"})," attribute, it can be removed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If your values set ",(0,i.jsx)(n.code,{children:"authReplicaCount"})," or ",(0,i.jsx)(n.code,{children:"traceReplicaCount"})," to any positive integer, you'll have to split your helm release into multiple helm releases."]}),"\n",(0,i.jsx)(n.p,{children:"For example. An initial helm release with values.yaml like following:"}),"\n",(0,i.jsx)(n.p,{children:"replicaCount: 3\nauthReplicaCount: 2\ntraceReplicaCount: 1"}),"\n",(0,i.jsx)(n.p,{children:"service:\nsomething\nauthService\nanotherThing\ntraceService\nthirdThing"}),"\n",(0,i.jsx)(n.p,{children:"useSSL:\nserver: false\nauthServer: true"}),"\n",(0,i.jsx)(n.p,{children:"Will have to become 3 different helm releases with following values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"api servers:"}),"\n",(0,i.jsx)(n.p,{children:"replicaCount: 3\nservice:\nsomething\nuseSSL: false"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"auth servers:"}),"\n",(0,i.jsx)(n.p,{children:'replicaCount: 2\nservice:\nanotherThing\nuseSSL: true\nconfig:\napi:\nendpoints: "ping, auth"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"trace servers:"}),"\n",(0,i.jsx)(n.p,{children:'replicaCount: 1\nservice:\nthirdThing\nconfig:\napi:\nendpoints: "ping, traces, nongrid_traces"'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Why this change?"}),"\nThe helm chart was difficult to maintain and had a lot of duplicate code to support an edge case for which a reasonable work-around exists. The behavior of the chart was also not consistent between ",(0,i.jsx)(n.code,{children:"trace"})," and ",(0,i.jsx)(n.code,{children:"auth"})," servers. Moreover, it didn't allow to set distinct parameters for those servers. Rather than trying to complicate things even further and fix inconsistent behavior, it was decided it's a better way forward to drop support for it."]}),"\n",(0,i.jsxs)(n.h3,{id:"highly-recommended-change-rework-of-the-additionalsecrets-section",children:["Highly recommended change: rework of the ",(0,i.jsx)(n.code,{children:"additionalSecrets"})," section"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"What changes?"}),"\nSupport for ",(0,i.jsx)(n.code,{children:"additionalSecrets"})," will be dropped in a future major release. To be ready for that change, you can already migrate to the new format, for both ",(0,i.jsx)(n.code,{children:"rucio-servers"})," and ",(0,i.jsx)(n.code,{children:"rucio-daemons"})," helm charts. The old format will still be supported throughout the whole 1.31, but will be dropped in 1.32."]}),"\n",(0,i.jsx)(n.p,{children:"Substituted all occurrences of:"}),"\n",(0,i.jsx)(n.p,{children:"additionalSecrets:\nvolumename:\nsecretName: ...\nmountPath: ...\nsubPath: ..."}),"\n",(0,i.jsx)(n.p,{children:"with:"}),"\n",(0,i.jsx)(n.p,{children:"secretMounts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"secretName: ...\nmountPath: ...\nsubPath: ...\nvolumeName: volumename  # volumeName is optional in most cases and will be inferred from secretName if ommited"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Why this change?"}),"\nAvoiding user-input keys in the yaml object (here: the volume name) is more consistent with the overall kubernetes best practices. User input is always passed via yaml values, not via yaml keys. One of the consequences of this change is improved support for kubernetes kustomize. Secrets can now be referred via the ",(0,i.jsx)(n.code,{children:"fieldSpecs.path"})," fields in kustomize."]}),"\n",(0,i.jsxs)(n.p,{children:["Renaming ",(0,i.jsx)(n.code,{children:"additionalSecrets"})," to ",(0,i.jsx)(n.code,{children:"secretMount"})," is a cosmetic change. The new name seems to better reflect the function of this section."]}),"\n",(0,i.jsx)(n.h3,{id:"recommended-change-rework-of-ftsrenewal-section",children:"Recommended change: rework of ftsRenewal section"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"What changes?"}),"\nThe ",(0,i.jsx)(n.code,{children:"ftsRenewal"})," sections in both ",(0,i.jsx)(n.code,{children:"rucio-servers"})," and ",(0,i.jsx)(n.code,{children:"rucio-daemons"})," helm charts suffered a major rework. The old format will still be supported throughout the whole 1.31 release line. There is no plan to drop support of the old format in 1.32, but we may decide to do so if the maintenance burden will be judged too high in the meantime."]}),"\n",(0,i.jsxs)(n.p,{children:["In the new format, secrets and env variable have to be specified explicitly, rather than being selected implicitly depending on the 'vo' attribute.\nSee the documentation: ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/helm-charts/tree/master/charts/rucio-daemons#conveyor",children:"https://github.com/rucio/helm-charts/tree/master/charts/rucio-daemons#conveyor"})," and helm values: ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/helm-charts/blob/master/charts/rucio-daemons/values.yaml#L408",children:"https://github.com/rucio/helm-charts/blob/master/charts/rucio-daemons/values.yaml#L408"})," for example of new configuration."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Why this change?"}),"\nTwo independent reasons:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"the new format introduced support for multi-vo."}),"\n",(0,i.jsx)(n.li,{children:"the source code of ftsRenewal cronjob became full of if/else to support vo-specific configurations. Configuring a new VO, with different requirements, was very difficult and required co-ordinated changes in multiple upstream rucio repositories. The new format is now much more flexible, but this comes at the price of increased verbosity of the configuration"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"your-opinion-is-welcomed-deprecation-of-implicit-secrets",children:"Your opinion is welcomed: deprecation of implicit secrets"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"What changes?"}),"\nNothing, yet. But we are evaluating the possibility to deprecate implicit secrets required by helm charts. If the community will not be against removing support for implicit secrets, the support will be gradually removed in future major releases."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to participate and provide your opinion, you'll have to set ",(0,i.jsx)(n.code,{children:"useDeprecatedImplicitSecrets: false"})," in helm charts. This way, some secrets will not be automatically mounted into the containers. You'll have to explicitly mount corresponding secrets via helm values:"]}),"\n",(0,i.jsx)(n.p,{children:"secretMounts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"secretFullName: releasename-rucio-x509up\nmountPath: /opt/proxy"}),"\n",(0,i.jsx)(n.li,{children:"secretFullName: releasename-rucio-ca-bundle\nmountPath: /opt/certs/"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"automatix:\nextraSecretMounts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"secretFullName: releasename-rucio-ca-bundle-reaper\nmountPath: /etc/grid-security/certificates/\nreaper:\nextraSecretMounts:"}),"\n",(0,i.jsx)(n.li,{children:"secretFullName: releasename-rucio-ca-bundle-reaper\nmountPath: /etc/grid-security/certificates/\ndarkReaper:\nextraSecretMounts:"}),"\n",(0,i.jsx)(n.li,{children:"secretFullName: releasename-rucio-ca-bundle-reaper\nmountPath: /etc/grid-security/certificates/"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Why this change?"}),"\nWe consider that explicit declaration of dependencies in helm charts is a better practice. Requiring secrets with specific names to be created inside the cluster before running the helm chart is very confusing to new users."]}),"\n",(0,i.jsx)(n.p,{children:"This change also allows you to pick a different name for the secrets and share them between multiple helm releases."}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Metadata: Merge list_dids and list_dids_extended methods ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/5448",children:"#5448"})]}),"\n",(0,i.jsxs)(n.li,{children:["Recovery: Allow for file recovery policies based on scope ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/5928",children:"#5928"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Core & Internals: Unicode support along all Core/API/REST API ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/4045",children:"#4045"})]}),"\n",(0,i.jsxs)(n.li,{children:["Core & Internals: switch ON temporary tables workflows by default ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6084",children:"#6084"})]}),"\n",(0,i.jsxs)(n.li,{children:["Documentation: Fix broken Rest API docs view ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/4992",children:"#4992"})]}),"\n",(0,i.jsxs)(n.li,{children:["Messaging: Migrate to hermes-2 as default ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6089",children:"#6089"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use of bulk_insert_mappings in reaper causes issue with Hermes : Closes ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6152",children:"#6152"})," ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6153",children:"#6153"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: update dependencies for the 1.31 release ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6110",children:"#6110"})]}),"\n",(0,i.jsxs)(n.li,{children:["Transfers: Remove full_mode switch from conveyor-receiver ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/5453",children:"#5453"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bugs",children:"Bugs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Messaging: Use of bulk_insert_mappings in reaper causes issue with Hermes ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6152",children:"#6152"})]}),"\n",(0,i.jsxs)(n.li,{children:['REST & API: create_did_sample broken for DIDs with "/" ',(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/5608",children:"#5608"})]}),"\n",(0,i.jsxs)(n.li,{children:["Subscriptions: The transmogrifier updates the subscription history table everytime it runs ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6109",children:"#6109"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"clients",children:"Clients"}),"\n",(0,i.jsx)(n.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Clients: Use GFAL\u2019s create_parent transfer parameter ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/2973",children:"#2973"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);