"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84390],{14141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"operator/administration","title":"Rucio Administration Tricks","description":"Rucio container code hot-patching","source":"@site/../docs/operator/administration.md","sourceDirName":"operator","slug":"/operator/administration","permalink":"/documentation/operator/administration","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/administration.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1744638991000,"frontMatter":{"id":"administration","title":"Rucio Administration Tricks","sidebar_label":"Administration Tricks"},"sidebar":"docs","previous":{"title":"Configuration","permalink":"/documentation/operator/configuration"},"next":{"title":"Configuration parameters","permalink":"/documentation/operator/configuration_parameters"}}');var r=n(74848),i=n(28453);const a={id:"administration",title:"Rucio Administration Tricks",sidebar_label:"Administration Tricks"},c=void 0,s={},l=[{value:"Rucio container code hot-patching",id:"rucio-container-code-hot-patching",level:2},{value:"Creating a patch from existing pull request",id:"creating-a-patch-from-existing-pull-request",level:3},{value:"Mounting a patch in a kubernetes cluster",id:"mounting-a-patch-in-a-kubernetes-cluster",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"rucio-container-code-hot-patching",children:"Rucio container code hot-patching"}),"\n",(0,r.jsx)(t.p,{children:"The rucio official containers provide a way to hotpatch the source code\nbefore running rucio. This behavior may be used to rapidly fix a production\ndeployment without having to wait for the change to be merged and released by\nthe rucio team."}),"\n",(0,r.jsxs)(t.p,{children:["The behavior is very simple: any file found in the ",(0,r.jsx)(t.code,{children:"/patch/*"})," directory inside\nthe containers will be fed to the ",(0,r.jsx)(t.code,{children:"patch"})," command-line tool in the order\nreturned by this glob matching."]}),"\n",(0,r.jsx)(t.p,{children:"The procedures described below are only intended for temporary fixes. If a\npermanent change is needed, we highly encourage you to open a pull request\nin rucio to spare you the toil related to maintaining your own local patch set."}),"\n",(0,r.jsx)(t.h3,{id:"creating-a-patch-from-existing-pull-request",children:"Creating a patch from existing pull request"}),"\n",(0,r.jsxs)(t.p,{children:["Lets assume you run rucio ",(0,r.jsx)(t.code,{children:"1.27.3"})," in production, and you realize there is\na bug in the ",(0,r.jsx)(t.code,{children:"conveyor-poller"})," daemon. You contact the rucio team and are\ntold that a fix was already done in the pull request\n",(0,r.jsx)(t.a,{href:"https://github.com/rucio/rucio/pull/5246/commits",children:"#5246"}),"\nand will be released next week. Follow\nthe following steps to create a patch file from this pull request without\nhaving to wait for the next rucio release to fix your issue:"]}),"\n",(0,r.jsx)(t.p,{children:"Clone the main rucio repository:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/rucio/rucio.git\ncd rucio\n# Create a new branch from the 1.27.3 release tag\ngit checkout 1.27.3 -b patch-0-hotfix_conveyor_poller_on_1.27.3\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The #5246 pull request was submitted by the user ",(0,r.jsx)(t.code,{children:"rcarpa"})," from his rucio\nfork ",(0,r.jsx)(t.a,{href:"https://github.com/rcarpa/rucio",children:"rcarpa/rucio"}),". You'll have to add\nthis fork repository as a git remote:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git remote add rcarpa https://github.com/rcarpa/rucio.git\ngit fetch rcarpa\n# Cherry-pick the commit from the #5246 pull request.\n# Beware, some PR can have multiple commits\ngit cherry-pick 47d36345469ac9c1391cacd09487d4ec6ced627f\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now you can create the patch with the differences between the rucio 1.27.3\nrelease and the current state of the repository:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git diff 1.27.3 > hotfix_conveyor_poller.patch\n"})}),"\n",(0,r.jsx)(t.h3,{id:"mounting-a-patch-in-a-kubernetes-cluster",children:"Mounting a patch in a kubernetes cluster"}),"\n",(0,r.jsxs)(t.p,{children:["If you deploy rucio in a kubernetes cluster using the official rucio\n",(0,r.jsx)(t.a,{href:"https://github.com/rucio/helm-charts/",children:"helm charts"})," and want to hotfix\nrucio using a patch file created in the previous section, follow these steps:"]}),"\n",(0,r.jsx)(t.p,{children:"Create a kubernetes secret from the hotfix patch:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl -n rucio create secret generic hotfix-conveyor-poller-patch --from-file=hotfix_conveyor_poller.patch\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Note:"})," if you have more than one cluster, don't forget to create the\nsecrets in each cluster to be patched."]}),"\n",(0,r.jsxs)(t.p,{children:["Now you'll have to update the helm ",(0,r.jsx)(t.code,{children:"values"})," file for each helm release and\nadd the following"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"    secretMounts:\n      - secretFullName: hotfix-conveyor-poller-patch\n        mountPath: /patch/hotfix_conveyor_poller.patch\n        subPath: hotfix_conveyor_poller.patch\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);