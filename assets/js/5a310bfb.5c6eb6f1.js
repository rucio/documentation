"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[511],{85202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"operator/kubernetes","title":"Setting up Rucio on Kubernetes","description":"Helm charts","source":"@site/../docs/operator/kubernetes.md","sourceDirName":"operator","slug":"/operator/kubernetes","permalink":"/documentation/operator/kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/kubernetes.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1734614746000,"frontMatter":{"id":"kubernetes","title":"Setting up Rucio on Kubernetes"},"sidebar":"docs","previous":{"title":"Setting up a Rucio demo environment","permalink":"/documentation/operator/setting_up_demo"},"next":{"title":"Installing Rucio Server","permalink":"/documentation/operator/installing_server"}}');var i=n(74848),o=n(28453);const a={id:"kubernetes",title:"Setting up Rucio on Kubernetes"},s=void 0,c={},l=[{value:"Helm charts",id:"helm-charts",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Example of Kubernetes deployment",id:"example-of-kubernetes-deployment",level:2},{value:"Bootstrapping the database",id:"bootstrapping-the-database",level:2},{value:"Upgrading the database",id:"upgrading-the-database",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"helm-charts",children:"Helm charts"}),"\n",(0,i.jsxs)(t.p,{children:["Helm charts help you define, install, and upgrade Kubernetes applications. In ",(0,i.jsx)(t.a,{href:"https://github.com/rucio/helm-charts",children:"this repository"}),", you can find Helm charts for the major different components of Rucio."]}),"\n",(0,i.jsx)(t.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,i.jsxs)(t.p,{children:["A tutorial for using Rucio with Kubernetes can be found ",(0,i.jsx)(t.a,{href:"https://github.com/rucio/k8s-tutorial/blob/master/README.md",children:"here"})]}),"\n",(0,i.jsx)(t.h2,{id:"example-of-kubernetes-deployment",children:"Example of Kubernetes deployment"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.km3net.org",children:"KM3NeT"})," runs Rucio on Kubernetes via ",(0,i.jsx)(t.a,{href:"https://fluxcd.io",children:"flux"}),".\nThe configuration deployed on their Rucio server can be found ",(0,i.jsx)(t.a,{href:"https://git.km3net.de/rucio/rucio-deployment",children:"here"}),".\nThe documentation of how this (specific) instance can be set up can be found in the ",(0,i.jsx)(t.a,{href:"https://rucio.pages.km3net.de/rucio-documentation/installation/",children:"docs"})]}),"\n",(0,i.jsx)(t.h2,{id:"bootstrapping-the-database",children:"Bootstrapping the database"}),"\n",(0,i.jsx)(t.p,{children:"By default, no database is initialized when a new Rucio installation is set up.\nAn init container can be used to bootstrap the database on a Kubernetes cluster:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a ",(0,i.jsx)(t.code,{children:"init-pod.yaml"})," file as in the snippet below, replacing the ",(0,i.jsx)(t.code,{children:"<PASSWORD>"})," with the secret needed to connect to the database:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: init\n  labels:\n    app: rucio\nspec:\n  restartPolicy: Never\n  containers:\n    - name: init\n      image: rucio/rucio-init:latest\n      imagePullPolicy: Always\n      env:\n        - name: RUCIO_CFG_DATABASE_DEFAULT\n          value: postgresql://rucio:<PASSWORD>@postgres-postgresql/rucio\n        - name: RUCIO_CFG_DATABASE_SCHEMA\n          value: test\n        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_IDENTITY\n          value: tutorial\n        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_PWD\n          value: secret1R\n        - name: RUCIO_PRINT_CFG\n          value: "true"\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Start the init pod:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl apply -f init-pod.yaml\n"})}),"\n",(0,i.jsx)(t.p,{children:"For more information:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/rucio/k8s-tutorial/blob/master/README.md",children:"Rucio Kubernetes tutorial repository README"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",children:"Init container documentation"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"upgrading-the-database",children:"Upgrading the database"}),"\n",(0,i.jsxs)(t.p,{children:["After the Rucio version has been upgraded, there might be database changes\nthat have to be done. These can be done on the ",(0,i.jsx)(t.code,{children:"rucio-server"})," pod of the cluster and\nare performed with the ",(0,i.jsx)(t.a,{href:"http://alembic.zzzcomputing.com/en/latest/",children:"Alembic"})," tool."]}),"\n",(0,i.jsxs)(t.p,{children:["The alembic.ini template can be found\n",(0,i.jsx)(t.a,{href:"https://github.com/rucio/rucio/blob/master/etc/alembic.ini.template",children:"here"}),".\nFill in the correct values before transferring the file to the ",(0,i.jsx)(t.code,{children:"rucio-server"})," pod:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cat alembic.ini | kubectl exec -i rucio-server-<pod identifier> --container rucio-server -- tee /tmp/alembic.ini\n"})}),"\n",(0,i.jsx)(t.p,{children:"Open a bash prompt on the pod"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl exec rucio-server-<pod identifier> --container rucio-server -it -- bash\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then perform the upgrade with the Alembic tool as described in the database ",(0,i.jsx)(t.a,{href:"./database#upgrading-and-downgrading-the-database-schema",children:"documentation"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);