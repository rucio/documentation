"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3156],{23810:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453);const t={title:"SubscriptionClient"},o=void 0,c={id:"client_api/subscriptionclient",title:"SubscriptionClient",description:"add\\_subscription",source:"@site/../docs/client_api/subscriptionclient.md",sourceDirName:"client_api",slug:"/client_api/subscriptionclient",permalink:"/documentation/client_api/subscriptionclient",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/subscriptionclient.md",tags:[],version:"current",frontMatter:{title:"SubscriptionClient"},sidebar:"docs",previous:{title:"ScopeClient",permalink:"/documentation/client_api/scopeclient"},next:{title:"TouchClient",permalink:"/documentation/client_api/touchclient"}},d={},l=[{value:"add_subscription",id:"add_subscription",level:2},{value:"list_subscriptions",id:"list_subscriptions",level:2},{value:"update_subscription",id:"update_subscription",level:2},{value:"list_subscription_rules",id:"list_subscription_rules",level:2}];function a(e){const i={code:"code",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"add_subscription",children:"add_subscription"}),"\n",(0,s.jsxs)("span",{style:{"white-space":"pre"},children:[(0,s.jsx)(i.p,{children:"Adds a new subscription which will be verified against every new added file and dataset"}),(0,s.jsx)("table",{style:{border:"none"},children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{style:{border:"none"},children:[(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Arguments"}),":"]})}),(0,s.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"name"}),": Name of the subscription"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"account"})," (",(0,s.jsx)(i.code,{children:"String"}),"): Account identifier"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"filter_"})," (",(0,s.jsx)(i.code,{children:"Dict"}),"): Dictionary of attributes by which the input data should be filtered\n",(0,s.jsx)(i.strong,{children:"Example"}),": ",(0,s.jsx)(i.code,{children:"\\{'dsn': 'data11_hi*.express_express.*,data11_hi*physics_MinBiasOverlay*', 'account': 'tzero'\\}"})]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"replication_rules"})," (",(0,s.jsx)(i.code,{children:"Dict"}),"): Replication rules to be set : Dictionary with keys copies, rse_expression, weight, rse_expression"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"comments"})," (",(0,s.jsx)(i.code,{children:"String"}),"): Comments for the subscription"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"lifetime"})," (",(0,s.jsx)(i.code,{children:"Integer or False"}),"): Subscription's lifetime (days); False if subscription has no lifetime"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"retroactive"})," (",(0,s.jsx)(i.code,{children:"Boolean"}),"): Flag to know if the subscription should be applied on previous data"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"dry_run"})," (",(0,s.jsx)(i.code,{children:"Boolean"}),"): Just print the subscriptions actions without actually executing them (Useful if retroactive flag is set)"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"priority"})," (",(0,s.jsx)(i.code,{children:"Integer"}),"): The priority of the subscription (3 by default)"]})]})]})})})]}),"\n",(0,s.jsx)(i.h2,{id:"list_subscriptions",children:"list_subscriptions"}),"\n",(0,s.jsxs)("span",{style:{"white-space":"pre"},children:[(0,s.jsx)(i.p,{children:"Returns a dictionary with the subscription information :"}),(0,s.jsxs)(i.p,{children:["Examples: ",(0,s.jsx)(i.code,{children:"\\{'status': 'INACTIVE/ACTIVE/BROKEN', 'last_modified_date': ...\\}"})]}),(0,s.jsx)("table",{style:{border:"none"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{style:{border:"none"},children:[(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Arguments"}),":"]})}),(0,s.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"name"}),": Name of the subscription"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"account"})," (",(0,s.jsx)(i.code,{children:"String"}),"): Account identifier"]})]})]}),(0,s.jsxs)("tr",{style:{border:"none"},children:[(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Raises"}),":"]})}),(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsx)(i.p,{children:"``: exception.NotFound if subscription is not found"})})]}),(0,s.jsxs)("tr",{style:{border:"none"},children:[(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Returns"}),":"]})}),(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Dict"}),": Dictionary containing subscription parameter"]})})]})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"update_subscription",children:"update_subscription"}),"\n",(0,s.jsxs)("span",{style:{"white-space":"pre"},children:[(0,s.jsx)(i.p,{children:"Updates a subscription"}),(0,s.jsx)("table",{style:{border:"none"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{style:{border:"none"},children:[(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Arguments"}),":"]})}),(0,s.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"name"}),": Name of the subscription"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"account"})," (",(0,s.jsx)(i.code,{children:"String"}),"): Account identifier"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"filter_"})," (",(0,s.jsx)(i.code,{children:"Dict"}),"): Dictionary of attributes by which the input data should be filtered\n",(0,s.jsx)(i.strong,{children:"Example"}),": ",(0,s.jsx)(i.code,{children:"\\{'dsn': 'data11_hi*.express_express.*,data11_hi*physics_MinBiasOverlay*', 'account': 'tzero'\\}"})]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"replication_rules"})," (",(0,s.jsx)(i.code,{children:"Dict"}),"): Replication rules to be set : Dictionary with keys copies, rse_expression, weight, rse_expression"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"comments"})," (",(0,s.jsx)(i.code,{children:"String"}),"): Comments for the subscription"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"lifetime"})," (",(0,s.jsx)(i.code,{children:"Integer or False"}),"): Subscription's lifetime (days); False if subscription has no lifetime"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"retroactive"})," (",(0,s.jsx)(i.code,{children:"Boolean"}),"): Flag to know if the subscription should be applied on previous data"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"dry_run"})," (",(0,s.jsx)(i.code,{children:"Boolean"}),"): Just print the subscriptions actions without actually executing them (Useful if retroactive flag is set)"]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"priority"})," (",(0,s.jsx)(i.code,{children:"Integer"}),"): The priority of the subscription"]})]})]}),(0,s.jsxs)("tr",{style:{border:"none"},children:[(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Raises"}),":"]})}),(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsx)(i.p,{children:"``: exception.NotFound if subscription is not found"})})]})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"list_subscription_rules",children:"list_subscription_rules"}),"\n",(0,s.jsxs)("span",{style:{"white-space":"pre"},children:[(0,s.jsx)(i.p,{children:"List the associated rules of a subscription."}),(0,s.jsx)("table",{style:{border:"none"},children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{style:{border:"none"},children:[(0,s.jsx)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Arguments"}),":"]})}),(0,s.jsxs)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"},children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"account"}),": Account of the subscription."]}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"name"}),": Name of the subscription."]})]})]})})})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>c});var s=n(96540);const r={},t=s.createContext(r);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);