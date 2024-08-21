"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[511],{23024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(74848),i=n(28453);const a={id:"kubernetes",title:"Setting up Rucio on Kubernetes"},o=void 0,s={id:"operator/kubernetes",title:"Setting up Rucio on Kubernetes",description:"Helm Charts",source:"@site/../docs/operator/kubernetes.md",sourceDirName:"operator",slug:"/operator/kubernetes",permalink:"/documentation/operator/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1724238044e3,frontMatter:{id:"kubernetes",title:"Setting up Rucio on Kubernetes"},sidebar:"docs",previous:{title:"Setting up a Rucio demo environment",permalink:"/documentation/operator/setting_up_demo"},next:{title:"Installing Rucio Server",permalink:"/documentation/operator/installing_server"}},c={},d=[{value:"Helm Charts",id:"helm-charts",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Example of kubernetes deployment",id:"example-of-kubernetes-deployment",level:2},{value:"Bootstrapping the database",id:"bootstrapping-the-database",level:2},{value:"Upgrading the database",id:"upgrading-the-database",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"helm-charts",children:"Helm Charts"}),"\n",(0,r.jsxs)(t.p,{children:["Rucio has ",(0,r.jsx)(t.a,{href:"https://github.com/rucio/helm-charts",children:"helm charts"})," available to do a set up on kubernetes."]}),"\n",(0,r.jsx)(t.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,r.jsxs)(t.p,{children:["A tutorial for using rucio with kubernetes can be found ",(0,r.jsx)(t.a,{href:"https://github.com/rucio/k8s-tutorial/blob/master/README.md",children:"here"})]}),"\n",(0,r.jsx)(t.h2,{id:"example-of-kubernetes-deployment",children:"Example of kubernetes deployment"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.km3net.org",children:"KM3NeT"})," runs rucio on kubernetes via ",(0,r.jsx)(t.a,{href:"https://fluxcd.io",children:"flux"}),".\nThe configuration deployed on their rucio server can be found ",(0,r.jsx)(t.a,{href:"https://git.km3net.de/rucio/rucio-deployment",children:"here"}),".\nThe documentation of how this (specific) instance can be set up can be found in the ",(0,r.jsx)(t.a,{href:"https://git.km3net.de/rucio/rucio-deployment/-/blob/main/docs/installation.md",children:"docs"})]}),"\n",(0,r.jsx)(t.h2,{id:"bootstrapping-the-database",children:"Bootstrapping the database"}),"\n",(0,r.jsx)(t.p,{children:"By default no database is initialized when a new rucio installation is set up.\nWith this guide you can bootstrap the database on a kubernetes cluster."}),"\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.code,{children:"init-pod.yaml"})," file and apply it as specified in the readme of the ",(0,r.jsx)(t.a,{href:"https://github.com/rucio/k8s-tutorial/blob/master/README.md",children:"k8s_tutorial"}),", replace the ",(0,r.jsx)(t.code,{children:"<PASSWORD>"})," with the secret needed to connect to the database:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: init\n  labels:\n    app: rucio\nspec:\n  restartPolicy: Never\n  containers:\n    - name: init\n      image: rucio/rucio-init:latest\n      imagePullPolicy: Always\n      env:\n        - name: RUCIO_CFG_DATABASE_DEFAULT\n          value: postgresql://rucio:<PASSWORD>@postgres-postgresql/rucio\n        - name: RUCIO_CFG_DATABASE_SCHEMA\n          value: test\n        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_IDENTITY\n          value: tutorial\n        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_PWD\n          value: secret1R\n        - name: RUCIO_PRINT_CFG\n          value: "true"\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"kubectl apply -f init-pod.yaml\n"})}),"\n",(0,r.jsx)(t.h2,{id:"upgrading-the-database",children:"Upgrading the database"}),"\n",(0,r.jsxs)(t.p,{children:["After the rucio version has been upgraded, there might be database changes\nthat have to be done. These can be done on the ",(0,r.jsx)(t.code,{children:"rucio-server"})," pod of the cluster and\nare performed with the ",(0,r.jsx)(t.a,{href:"http://alembic.zzzcomputing.com/en/latest/",children:"Alembic"})," tool."]}),"\n",(0,r.jsxs)(t.p,{children:["The alembic.ini template can be found\n",(0,r.jsx)(t.a,{href:"https://github.com/rucio/rucio/blob/master/etc/alembic.ini.template",children:"here"}),".\nFill in the correct values before transferring the file to the ",(0,r.jsx)(t.code,{children:"rucio-server"})," pod:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"cat alembic.ini | kubectl exec -i rucio-server-<pod identifier> --container rucio-server -- tee /tmp/alembic.ini\n"})}),"\n",(0,r.jsx)(t.p,{children:"Open a bash prompt on the pod"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"kubectl exec rucio-server-<pod identifier> --container rucio-server -it -- bash\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then perform the upgrade with the Alembic tool as described in the database ",(0,r.jsx)(t.a,{href:"./database#upgrading-and-downgrading-the-database-schema",children:"documentation"})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);