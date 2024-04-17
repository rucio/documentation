"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3069],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(58168),o=n(98587),r=(n(96540),n(15680)),i=["components"],l={id:"using_the_admin_client",title:"Using the Admin Client"},c=void 0,s={unversionedId:"user/using_the_admin_client",id:"user/using_the_admin_client",title:"Using the Admin Client",description:"Rucio provides a CLI for administrative tasks. The get methods can be executed",source:"@site/../docs/user/using_the_admin_client.md",sourceDirName:"user",slug:"/user/using_the_admin_client",permalink:"/documentation/user/using_the_admin_client",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/using_the_admin_client.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1713382454,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"using_the_admin_client",title:"Using the Admin Client"},sidebar:"docs",previous:{title:"Using the Client",permalink:"/documentation/user/using_the_client"},next:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"}},u={},d=[{value:"Getting help",id:"getting-help",level:2},{value:"Enable command line autocompletion",id:"enable-command-line-autocompletion",level:2},{value:"Account and identity methods",id:"account-and-identity-methods",level:2},{value:"Scope methods",id:"scope-methods",level:2},{value:"RSE methods",id:"rse-methods",level:2},{value:"Replica methods",id:"replica-methods",level:2}],p={toc:d},m="wrapper";function g(e){var t=e.components,n=(0,o.A)(e,i);return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Rucio provides a CLI for administrative tasks. The get methods can be executed\nby any user, but the set methods require some admin privileges. See the\n",(0,r.yg)("a",{parentName:"p",href:"/documentation/bin/rucio-admin"},"rucio-admin help page"),".\nThe command line client for administrative tasks is called ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio-admin"),"."),(0,r.yg)("h2",{id:"getting-help"},"Getting help"),(0,r.yg)("p",null,"To get an overview of the available ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio-admin")," subcommands and flags, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rucio-admin --help\n")),(0,r.yg)("h2",{id:"enable-command-line-autocompletion"},"Enable command line autocompletion"),(0,r.yg)("p",null,"If you would like to automatically complete ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio-admin")," commands, install\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.org/project/argcomplete/"},"argcomplete")," package and run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'eval "$(register-python-argcomplete rucio-admin)"\n')),(0,r.yg)("p",null,"Next, type ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio-admin ")," (note the trailing space) and press the"),(0,r.yg)("kbd",null,"Tab")," key to see all available options. To use the autocompletion feature, type enough letters of a subcommand or flag to uniquely define it and then press ",(0,r.yg)("kbd",null,"Tab"),".",(0,r.yg)("h2",{id:"account-and-identity-methods"},"Account and identity methods"),(0,r.yg)("p",null,"To create a new account:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe\n")),(0,r.yg)("p",null,"You can choose different types in the list USER, GROUP, SERVICE. Different\npolicies/permissions can be set depending on the account type.  Once the account\nis created, you need to create and attach an identity to this account:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin identity add --type X509 \\\n      --id "CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah" \\\n      --email jdoe@blahblih.com --account jdoe\n')),(0,r.yg)("p",null,"The list of possible identity types is X509, GSS, USERPASS, SSH:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-identities jdoe\n  Identity: CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah,        type: X509\n")),(0,r.yg)("p",null,"You can set attributes to the users:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add-attribute --key country --value xyz jdoe\n")),(0,r.yg)("p",null,"And list these attributes:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-attributes jdoe\n  +---------+-------+\n  | Key     | Value |\n  |---------+-------|\n  | country | xyz   |\n  +---------+-------+\n")),(0,r.yg)("p",null,"You can also list all the accounts matching a certain attribute using the filter\noption:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin account list --filters "country=xyz"\n  jdoe\n')),(0,r.yg)("p",null,"To set the quota for one account on a given RSE:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account set-limits jdoe SITE2_SCRATCH 10000000000000\n  Set account limit for account jdoe on RSE SITE2_SCRATCH: 10.000 TB\n  $ rucio-admin account get-limits dcameron SITE2_SCRATCH\n  Quota on SITE2_SCRATCH for jdoe : 10 TB\n")),(0,r.yg)("h2",{id:"scope-methods"},"Scope methods"),(0,r.yg)("p",null,"To create a new scope:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope add --account jdoe --scope user.jdoe\n")),(0,r.yg)("p",null,"Only the owner of the scope or privileged users can write into the scope."),(0,r.yg)("p",null,"To list all the scopes:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope list\n  user.janedoe\n  user.jdoe\n")),(0,r.yg)("h2",{id:"rse-methods"},"RSE methods"),(0,r.yg)("p",null,"To create a new RSE:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse add SITE2_SCRATCH\n")),(0,r.yg)("p",null,"To add a RSE attribute:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse set-attribute --rse SITE2_SCRATCH --key country --value xyz\n")),(0,r.yg)("p",null,"To check an RSE attribute:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse get-attribute SITE2_SCRATCH\n  country: xyz\n")),(0,r.yg)("h2",{id:"replica-methods"},"Replica methods"),(0,r.yg)("p",null,"To declare bad (i.e. corrupted or lost replicas):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin replicas declare-bad --reason "File corrupted" https//path/to/lost/file\n')))}g.isMDXComponent=!0}}]);