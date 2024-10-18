"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2402],{48938:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=r(74848),c=r(28453);const t={title:"AccountClient"},l=void 0,s={id:"client_api/accountclient",title:"AccountClient",description:"add\\_account",source:"@site/../docs/client_api/accountclient.md",sourceDirName:"client_api",slug:"/client_api/accountclient",permalink:"/documentation/client_api/accountclient",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/accountclient.md",tags:[],version:"current",frontMatter:{title:"AccountClient"},sidebar:"docs",previous:{title:"Using the Admin Client",permalink:"/documentation/user/using_the_admin_client"},next:{title:"AccountLimitClient",permalink:"/documentation/client_api/accountlimitclient"}},i={},d=[{value:"add_account",id:"add_account",level:2},{value:"delete_account",id:"delete_account",level:2},{value:"get_account",id:"get_account",level:2},{value:"update_account",id:"update_account",level:2},{value:"list_accounts",id:"list_accounts",level:2},{value:"whoami",id:"whoami",level:2},{value:"add_identity",id:"add_identity",level:2},{value:"del_identity",id:"del_identity",level:2},{value:"list_identities",id:"list_identities",level:2},{value:"list_account_rules",id:"list_account_rules",level:2},{value:"get_account_limits",id:"get_account_limits",level:2},{value:"get_global_account_limit",id:"get_global_account_limit",level:2},{value:"get_global_account_limits",id:"get_global_account_limits",level:2},{value:"get_local_account_limits",id:"get_local_account_limits",level:2},{value:"get_local_account_limit",id:"get_local_account_limit",level:2},{value:"get_local_account_usage",id:"get_local_account_usage",level:2},{value:"get_global_account_usage",id:"get_global_account_usage",level:2},{value:"get_account_usage_history",id:"get_account_usage_history",level:2},{value:"list_account_attributes",id:"list_account_attributes",level:2},{value:"add_account_attribute",id:"add_account_attribute",level:2},{value:"delete_account_attribute",id:"delete_account_attribute",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"add_account",children:"add_account"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sends the request to create a new account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": the name of the account."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"type_"}),": The account type"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"email"}),": The Email address associated with the account."]})]})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Duplicate"}),": if account already exists."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"True if account was created successfully else False."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"delete_account",children:"delete_account"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sends the request to disable an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": the name of the account."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AccountNotFound"}),": if account doesn't exist."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"True is account was disabled successfully. False otherwise."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_account",children:"get_account"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sends the request to get information about a given account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": the name of the account."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AccountNotFound"}),": if account doesn't exist."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"a list of attributes for the account. None if failure."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"update_account",children:"update_account"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Update a property of an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": Name of the account."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"key"}),": Account property like status."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"value"}),": Property value."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"list_accounts",children:"list_accounts"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Sends the request to list all rucio accounts."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"type"}),": The account type"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"identity"}),": The identity key name. For example x509 DN, or a username."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"filters"}),": A dictionary key",":account"," attribute to use for the filtering"]})]})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AccountNotFound"}),": if account doesn't exist."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"a list containing account info dictionary for all rucio accounts."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"whoami",children:"whoami"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Get information about account whose token is used"}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Raises"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AccountNotFound"}),": if account doesn't exist."]})})]}),(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Returns"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsx)(n.p,{children:"a list of attributes for the account. None if failure."})})]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"add_identity",children:"add_identity"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Adds a membership association between identity and account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"identity"}),": The identity key name. For example x509 DN, or a username."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"authtype"}),": The type of the authentication (x509, gss, userpass)."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"default"}),": If True, the account should be used by default with the provided identity."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"email"}),": The Email address associated with the identity."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"password"}),": Password if authtype is userpass."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"del_identity",children:"del_identity"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Delete an identity's membership association with an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"identity"}),": The identity key name. For example x509 DN, or a username."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"authtype"}),": The type of the authentication (x509, gss, userpass)."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"default"}),": If True, the account should be used by default with the provided identity."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"list_identities",children:"list_identities"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List all identities on an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]})})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"list_account_rules",children:"list_account_rules"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List the associated rules of an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]})})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_account_limits",children:"get_account_limits"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Return the correct account limits for the given locality."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse_expression"}),": Valid RSE expression"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"locality"}),": The scope of the account limit. 'local' or 'global'."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_global_account_limit",children:"get_global_account_limit"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List the account limit for the specific RSE expression."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse_expression"}),": The rse expression."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_global_account_limits",children:"get_global_account_limits"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List all RSE expression limits of this account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]})})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_local_account_limits",children:"get_local_account_limits"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List the account rse limits of this account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]})})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_local_account_limit",children:"get_local_account_limit"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List the account rse limits of this account for the specific rse."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse"}),": The rse name."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_local_account_usage",children:"get_local_account_usage"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List the account usage for one or all rses of this account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse"}),": The rse name."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_global_account_usage",children:"get_global_account_usage"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List the account usage for one or all RSE expressions of this account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse_expression"}),": The rse expression."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"get_account_usage_history",children:"get_account_usage_history"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List the account usage history of this account on rse."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rse"}),": The rse name."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"list_account_attributes",children:"list_account_attributes"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"List the attributes for an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]})})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"add_account_attribute",children:"add_account_attribute"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Adds an attribute to an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"key"}),": The attribute key."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"value"}),": The attribute value."]})]})]})})})]}),"\n",(0,o.jsx)(n.h2,{id:"delete_account_attribute",children:"delete_account_attribute"}),"\n",(0,o.jsxs)("span",{style:{"white-space":"pre"},children:[(0,o.jsx)(n.p,{children:"Delete an attribute for an account."}),(0,o.jsx)("table",{style:{border:"none"},children:(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{style:{border:"none"},children:[(0,o.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Arguments"}),":"]})}),(0,o.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"account"}),": The account name."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"key"}),": The attribute key."]})]})]})})})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var o=r(96540);const c={},t=o.createContext(c);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);