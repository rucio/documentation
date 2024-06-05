"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[756],{30626:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var l=r(74848),t=r(28453);const o={title:"MetaConventionClient"},s=void 0,d={id:"client_api/metaconventionsclient",title:"MetaConventionClient",description:"add\\_key",source:"@site/../docs/client_api/metaconventionsclient.md",sourceDirName:"client_api",slug:"/client_api/metaconventionsclient",permalink:"/documentation/client_api/metaconventionsclient",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/metaconventionsclient.md",tags:[],version:"current",frontMatter:{title:"MetaConventionClient"},sidebar:"docs",previous:{title:"LockClient",permalink:"/documentation/client_api/lockclient"},next:{title:"PingClient",permalink:"/documentation/client_api/pingclient"}},i={},c=[{value:"add_key",id:"add_key",level:2},{value:"list_keys",id:"list_keys",level:2},{value:"list_values",id:"list_values",level:2},{value:"add_value",id:"add_value",level:2},{value:"del_value",id:"del_value",level:2},{value:"del_key",id:"del_key",level:2},{value:"update_key",id:"update_key",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"add_key",children:"add_key"}),"\n",(0,l.jsxs)("span",{style:{"white-space":"pre"},children:[(0,l.jsx)(n.p,{children:"Sends the request to add an allowed key for DID metadata (update the DID Metadata Conventions table with a new key)."}),(0,l.jsx)("table",{style:{border:"none"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,l.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key"}),": the name for the new key."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key_type"}),": the type of the key: all(container, dataset, file), collection(dataset or container), file, derived(compute from file for collection)."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value_type"}),": the type of the value, if defined."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value_regexp"}),": the regular expression that values should match, if defined."]})]})]}),(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Duplicate"}),": if key already exists."]})})]}),(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsx)(n.p,{children:"True if key was created successfully."})})]})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"list_keys",children:"list_keys"}),"\n",(0,l.jsxs)("span",{style:{"white-space":"pre"},children:[(0,l.jsx)(n.p,{children:"Sends the request to list all keys for DID Metadata Conventions."}),(0,l.jsx)("table",{style:{border:"none"},children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsx)(n.p,{children:"a list containing the names of all keys."})})]})})})]}),"\n",(0,l.jsx)(n.h2,{id:"list_values",children:"list_values"}),"\n",(0,l.jsxs)("span",{style:{"white-space":"pre"},children:[(0,l.jsx)(n.p,{children:"Sends the request to lists all allowed values for a DID key (all values for a key in DID Metadata Conventions)."}),(0,l.jsx)(n.p,{children:"."}),(0,l.jsx)(n.p,{children:":return: a list containing the names of all values for a key."}),(0,l.jsx)("table",{style:{border:"none"},children:(0,l.jsx)("tbody",{})})]}),"\n",(0,l.jsx)(n.h2,{id:"add_value",children:"add_value"}),"\n",(0,l.jsxs)("span",{style:{"white-space":"pre"},children:[(0,l.jsx)(n.p,{children:"Sends the request to add a value for a key in DID Metadata Convention."}),(0,l.jsx)("table",{style:{border:"none"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,l.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key"}),": the name for key."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value"}),": the value."]})]})]}),(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Duplicate"}),": if valid already exists."]})})]}),(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsx)(n.p,{children:"True if value was created successfully."})})]})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"del_value",children:"del_value"}),"\n",(0,l.jsxs)("span",{style:{"white-space":"pre"},children:[(0,l.jsx)(n.p,{children:"Delete a key in the DID Metadata Conventions table."}),(0,l.jsx)("table",{style:{border:"none"},children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,l.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key"}),": the name for key."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"value"}),": the value."]})]})]})})})]}),"\n",(0,l.jsx)(n.h2,{id:"del_key",children:"del_key"}),"\n",(0,l.jsxs)("span",{style:{"white-space":"pre"},children:[(0,l.jsx)(n.p,{children:"Delete an allowed key."}),(0,l.jsx)("table",{style:{border:"none"},children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key"}),": the name for key."]})})]})})})]}),"\n",(0,l.jsx)(n.h2,{id:"update_key",children:"update_key"}),"\n",(0,l.jsxs)("span",{style:{"white-space":"pre"},children:[(0,l.jsx)(n.p,{children:"Update a key."}),(0,l.jsx)("table",{style:{border:"none"},children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{style:{border:"none"},children:[(0,l.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,l.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"key"}),": the name for key."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"type_"}),": the type of the value, if defined."]}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"regexp"}),": the regular expression that values should match, if defined."]})]})]})})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var l=r(96540);const t={},o=l.createContext(t);function s(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);