"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3069],{31675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var i=t(74848),a=t(28453);const c={id:"using_the_admin_client",title:"Using the Admin Client"},s=void 0,o={id:"user/using_the_admin_client",title:"Using the Admin Client",description:"Rucio provides a CLI for administrative tasks. The get methods can be executed",source:"@site/../docs/user/using_the_admin_client.md",sourceDirName:"user",slug:"/user/using_the_admin_client",permalink:"/documentation/user/using_the_admin_client",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/using_the_admin_client.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1729244232e3,frontMatter:{id:"using_the_admin_client",title:"Using the Admin Client"},sidebar:"docs",previous:{title:"Using the Client",permalink:"/documentation/user/using_the_client"},next:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"}},d={},r=[{value:"Getting help",id:"getting-help",level:2},{value:"Enable command line autocompletion",id:"enable-command-line-autocompletion",level:2},{value:"Account and identity methods",id:"account-and-identity-methods",level:2},{value:"Scope methods",id:"scope-methods",level:2},{value:"RSE methods",id:"rse-methods",level:2},{value:"Replica methods",id:"replica-methods",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Rucio provides a CLI for administrative tasks. The get methods can be executed\nby any user, but the set methods require some admin privileges. See the\n",(0,i.jsx)(n.a,{href:"/documentation/bin/rucio-admin",children:"rucio-admin help page"}),".\nThe command line client for administrative tasks is called ",(0,i.jsx)(n.code,{children:"rucio-admin"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-help",children:"Getting help"}),"\n",(0,i.jsxs)(n.p,{children:["To get an overview of the available ",(0,i.jsx)(n.code,{children:"rucio-admin"})," subcommands and flags, run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rucio-admin --help\n"})}),"\n",(0,i.jsx)(n.h2,{id:"enable-command-line-autocompletion",children:"Enable command line autocompletion"}),"\n",(0,i.jsxs)(n.p,{children:["If you would like to automatically complete ",(0,i.jsx)(n.code,{children:"rucio-admin"})," commands, install\nthe ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/argcomplete/",children:"argcomplete"})," package and run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'eval "$(register-python-argcomplete rucio-admin)"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Next, type ",(0,i.jsx)(n.code,{children:"rucio-admin "})," (note the trailing space) and press the\n",(0,i.jsx)("kbd",{children:"Tab"})," key to see all available options. To use the autocompletion\nfeature, type enough letters of a subcommand or flag to uniquely define it\nand then press ",(0,i.jsx)("kbd",{children:"Tab"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"account-and-identity-methods",children:"Account and identity methods"}),"\n",(0,i.jsx)(n.p,{children:"To create a new account:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can choose different types in the list USER, GROUP, SERVICE. Different\npolicies/permissions can be set depending on the account type.  Once the account\nis created, you need to create and attach an identity to this account:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'  $ rucio-admin identity add --type X509 \\\n      --id "CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah" \\\n      --email jdoe@blahblih.com --account jdoe\n'})}),"\n",(0,i.jsx)(n.p,{children:"The list of possible identity types is X509, GSS, USERPASS, SSH:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account list-identities jdoe\n  Identity: CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah,        type: X509\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can set attributes to the users:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account add-attribute --key country --value xyz jdoe\n"})}),"\n",(0,i.jsx)(n.p,{children:"And list these attributes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account list-attributes jdoe\n  +---------+-------+\n  | Key     | Value |\n  |---------+-------|\n  | country | xyz   |\n  +---------+-------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also list all the accounts matching a certain attribute using the filter\noption:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'  $ rucio-admin account list --filters "country=xyz"\n  jdoe\n'})}),"\n",(0,i.jsx)(n.p,{children:"To set the quota for one account on a given RSE:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account set-limits jdoe SITE2_SCRATCH 10000000000000\n  Set account limit for account jdoe on RSE SITE2_SCRATCH: 10.000 TB\n  $ rucio-admin account get-limits dcameron SITE2_SCRATCH\n  Quota on SITE2_SCRATCH for jdoe : 10 TB\n"})}),"\n",(0,i.jsx)(n.h2,{id:"scope-methods",children:"Scope methods"}),"\n",(0,i.jsx)(n.p,{children:"To create a new scope:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin scope add --account jdoe --scope user.jdoe\n"})}),"\n",(0,i.jsx)(n.p,{children:"Only the owner of the scope or privileged users can write into the scope."}),"\n",(0,i.jsx)(n.p,{children:"To list all the scopes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin scope list\n  user.janedoe\n  user.jdoe\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rse-methods",children:"RSE methods"}),"\n",(0,i.jsx)(n.p,{children:"To create a new RSE:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin rse add SITE2_SCRATCH\n"})}),"\n",(0,i.jsx)(n.p,{children:"To add a RSE attribute:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin rse set-attribute --rse SITE2_SCRATCH --key country --value xyz\n"})}),"\n",(0,i.jsx)(n.p,{children:"To check an RSE attribute:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin rse get-attribute SITE2_SCRATCH\n  country: xyz\n"})}),"\n",(0,i.jsx)(n.h2,{id:"replica-methods",children:"Replica methods"}),"\n",(0,i.jsx)(n.p,{children:"To declare bad (i.e. corrupted or lost replicas):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'  $ rucio-admin replicas declare-bad --reason "File corrupted" https//path/to/lost/file\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},c=i.createContext(a);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);