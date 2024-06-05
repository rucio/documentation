"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8470],{44545:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var o=r(74848),l=r(28453);const c={title:"AccountLimitClient"},t=void 0,s={id:"client_api/accountlimitclient",title:"AccountLimitClient",description:"set\\account\\limit",source:"@site/../docs/client_api/accountlimitclient.md",sourceDirName:"client_api",slug:"/client_api/accountlimitclient",permalink:"/documentation/client_api/accountlimitclient",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/accountlimitclient.md",tags:[],version:"current",frontMatter:{title:"AccountLimitClient"},sidebar:"docs",previous:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"},next:{title:"BaseClient",permalink:"/documentation/client_api/baseclient"}},i={},d=[{value:"set_account_limit",id:"set_account_limit",level:2},{value:"delete_account_limit",id:"delete_account_limit",level:2},{value:"set_local_account_limit",id:"set_local_account_limit",level:2},{value:"delete_local_account_limit",id:"delete_local_account_limit",level:2},{value:"set_global_account_limit",id:"set_global_account_limit",level:2},{value:"delete_global_account_limit",id:"delete_global_account_limit",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"set_account_limit",children:"set_account_limit"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sets an account limit for a given limit scope."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The name of the account."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse"}),": The rse name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"bytes_"}),": An integer with the limit in bytes."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"locality"}),": The scope of the account limit. 'local' or 'global'."]})]})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"True if quota was created successfully else False."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"delete_account_limit",children:"delete_account_limit"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Deletes an account limit for a given limit scope."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The name of the account."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse"}),": The rse name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"locality"}),": The scope of the account limit. 'local' or 'global'."]})]})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"True if quota was created successfully else False."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"set_local_account_limit",children:"set_local_account_limit"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sends the request to set an account limit for an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The name of the account."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse"}),": The rse name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"bytes_"}),": An integer with the limit in bytes."]})]})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"True if quota was created successfully else False."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"delete_local_account_limit",children:"delete_local_account_limit"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sends the request to remove an account limit."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The name of the account."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse"}),": The rse name."]})]})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AccountNotFound"}),": if account doesn't exist."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"True if quota was removed successfully. False otherwise."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"set_global_account_limit",children:"set_global_account_limit"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sends the request to set a global account limit for an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The name of the account."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse_expression"}),": The rse expression."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"bytes_"}),": An integer with the limit in bytes."]})]})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"True if quota was created successfully else False."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"delete_global_account_limit",children:"delete_global_account_limit"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sends the request to remove a global account limit."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The name of the account."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse_expression"}),": The rse expression."]})]})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AccountNotFound"}),": if account doesn't exist."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"True if quota was removed successfully. False otherwise."})})]})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>s});var o=r(96540);const l={},c=o.createContext(l);function t(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);