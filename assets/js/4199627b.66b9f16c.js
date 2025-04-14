"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62627],{28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var o=i(96540);const c={},a=o.createContext(c);function t(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),o.createElement(a.Provider,{value:n},e.children)}},58640:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>s});const o=JSON.parse('{"id":"operator/policy_packages/policy-package-deployment","title":"Deploying a Policy Package","description":"Broadly speaking, three things must happen in order for a policy","source":"@site/../docs/operator/policy_packages/policy_packages_deployment.md","sourceDirName":"operator/policy_packages","slug":"/operator/policy_packages/policy-package-deployment","permalink":"/documentation/operator/policy_packages/policy-package-deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/policy_packages/policy_packages_deployment.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1744638991000,"frontMatter":{"id":"policy-package-deployment","title":"Deploying a Policy Package"},"sidebar":"docs","previous":{"title":"Developing a Policy Package","permalink":"/documentation/operator/policy_packages/policy-package-development"},"next":{"title":"Installing Rucio Daemons","permalink":"/documentation/operator/installing_daemons"}}');var c=i(74848),a=i(28453);const t={id:"policy-package-deployment",title:"Deploying a Policy Package"},l=void 0,r={},s=[{value:"Deploying a policy package",id:"deploying-a-policy-package",level:2},{value:"Deploying via Kubernetes init container",id:"deploying-via-kubernetes-init-container",level:3},{value:"Deploying via Dockerfile build argument",id:"deploying-via-dockerfile-build-argument",level:3},{value:"Deploying via Kubernetes secret",id:"deploying-via-kubernetes-secret",level:3},{value:"Configuring Rucio to find a policy package",id:"configuring-rucio-to-find-a-policy-package",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Broadly speaking, three things must happen in order for a policy\npackage to be deployed successfully:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"The policy package code must be available to the Rucio server\n(and possibly other components such as daemons)."}),"\n",(0,c.jsxs)(n.li,{children:["The directory containing the policy package must be in the server's\n",(0,c.jsx)(n.code,{children:"PYTHONPATH"}),"."]}),"\n",(0,c.jsx)(n.li,{children:"Rucio must be configured to find the policy package."}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"deploying-a-policy-package",children:"Deploying a policy package"}),"\n",(0,c.jsx)(n.p,{children:"The table below describes the different approaches you can use to deploy a policy package."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Approach / columns"}),(0,c.jsx)(n.th,{children:"Ease of setup"}),(0,c.jsx)(n.th,{children:"Amount of work needed for new Rucio and new policy package versions"}),(0,c.jsx)(n.th,{children:"Extra external dependencies at runtime"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Kubernetes init container"}),(0,c.jsx)(n.td,{children:"Easy"}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"Index (e.g. PyPI) or Git registry (e.g. GitLab) in question (if a new policy package version is released)"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Pass build argument to Dockerfile"}),(0,c.jsx)(n.td,{children:"Easy"}),(0,c.jsx)(n.td,{children:"- Building + hosting the image yourself - Rebuilding the image - Redeploying"}),(0,c.jsx)(n.td,{children:"Registry where you host the image  (no more risk than what is already there,  assuming your registry is as reliable as DockerHub)"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Generate YAML and add as Kubernetes secret"}),(0,c.jsx)(n.td,{children:"Medium"}),(0,c.jsx)(n.td,{children:"- Need to duplicate actual policy package content into configuration"}),(0,c.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,c.jsx)(n.h3,{id:"deploying-via-kubernetes-init-container",children:"Deploying via Kubernetes init container"}),"\n",(0,c.jsxs)(n.p,{children:["In the ",(0,c.jsx)(n.code,{children:"values.yaml"})," for ",(0,c.jsx)(n.code,{children:"server"})," and ",(0,c.jsx)(n.code,{children:"daemons"})," (and optionally for ",(0,c.jsx)(n.code,{children:"ui"})," / ",(0,c.jsx)(n.code,{children:"webui"}),"), under ",(0,c.jsx)(n.code,{children:"policyPackages"}),":"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["Set ",(0,c.jsx)(n.code,{children:"policyPackages.enabled"})," to ",(0,c.jsx)(n.code,{children:"true"})]}),"\n",(0,c.jsxs)(n.li,{children:["List your policy packages under ",(0,c.jsx)(n.code,{children:"policyPackages.packages"})," in the following format:"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"    example: install from an index (default is PyPI)\n    - moduleName: vo_1_policy_package\n      requirement: vo_1_policy_package==1.4.0\n      version: 1.4.0\n    example: install from a git repository\n    - moduleName: vo_2_policy_package\n      requirement: git+https://github.com/vo-2/vo-2-policy-package@v0.1.0\n      version: 0.1.0\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"3",children:["\n",(0,c.jsxs)(n.li,{children:["(Optional) set ",(0,c.jsx)(n.code,{children:"policyPackages.pvc.createPvc"})," to true to create a PVC for the policy packages; leave false if providing it separately."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"deploying-via-dockerfile-build-argument",children:"Deploying via Dockerfile build argument"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["In the ",(0,c.jsx)(n.code,{children:"server"}),", ",(0,c.jsx)(n.code,{children:"clients"}),", ",(0,c.jsx)(n.code,{children:"daemons"}),", ",(0,c.jsx)(n.code,{children:"ui"})," and ",(0,c.jsx)(n.code,{children:"init"})," containers, pass the ",(0,c.jsx)(n.code,{children:"POLICY_PACKAGE_REQUIREMENTS"})," build argument. Example:\nExample:"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"docker build -t server --build-arg POLICY_PACKAGE_REQUIREMENTS=vo_1_policy_package==0.4.0,git+https://github.com/vo-2/vo-2-policy-package@v0.1.0\n"})}),"\n",(0,c.jsx)(n.h3,{id:"deploying-via-kubernetes-secret",children:"Deploying via Kubernetes secret"}),"\n",(0,c.jsxs)(n.p,{children:["You can generate ",(0,c.jsx)(n.code,{children:"yaml"})," for all the files included in your policy package,\nand add them as Kubernetes secrets.\nYou can find information in the ",(0,c.jsx)(n.a,{href:"/documentation/operator/k8s_guide",children:"Kubernetes guide"})," on how to create and manage secrets."]}),"\n",(0,c.jsx)(n.p,{children:"This process can be somewhat automated by having a cronjob that creates the secret policy and applies it."}),"\n",(0,c.jsx)(n.h2,{id:"configuring-rucio-to-find-a-policy-package",children:"Configuring Rucio to find a policy package"}),"\n",(0,c.jsx)(n.p,{children:"To configure Rucio, you should either:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["Modify the configuration file, by adding the package name as ",(0,c.jsx)(n.code,{children:"package = name"})," in\nthe ",(0,c.jsx)(n.code,{children:"[policy]"})," section, or"]}),"\n",(0,c.jsxs)(n.li,{children:["Setting the the package name in the ",(0,c.jsx)(n.code,{children:"RUCIO_POLICY_PACKAGE"}),"\nenvironment variable."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["When deploying using Kubernetes and Helm charts, it is possible to specify\nconfiguration options in ",(0,c.jsx)(n.code,{children:"values.yaml"}),". Values included in the ",(0,c.jsx)(n.code,{children:"config:"}),"\nsection of this file are automatically merged into ",(0,c.jsx)(n.code,{children:"rucio.cfg"})," by the\n",(0,c.jsx)(n.code,{children:"docker-entrypoint.sh"})," script, so the policy package can be set as:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"config:\n  policy:\n    package: name\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);