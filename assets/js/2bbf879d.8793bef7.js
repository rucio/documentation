"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},l=void 0,c={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Prerequisites",source:"@site/../docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/documentation/configuration",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/configuration.md",tags:[],version:"current",lastUpdatedBy:"rcarpa",lastUpdatedAt:1675265647,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating new users",id:"creating-new-users",level:2},{value:"Creating scope",id:"creating-scope",level:2},{value:"Creating new RSEs",id:"creating-new-rses",level:2},{value:"Setting quota and permissions",id:"setting-quota-and-permissions",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You need to have a Rucio server up and running with the root account\ncreated. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/documentation/installing_server"},"installation documentation")," for\nfurther information"),(0,i.kt)("h2",{id:"creating-new-users"},"Creating new users"),(0,i.kt)("p",null,"The first step is to create new accounts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe\n")),(0,i.kt)("p",null,"You can choose from different types in the list USER, GROUP, SERVICE. Different\npolicies/permissions can be set depending on the account type.  Once the account\nis created, you need to create and attach an identity to this account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin identity add --type X509 --id "/DC=blah/DC=blih/OU=Organic \\\n      Units/OU=Users/CN=jdoe" --email jdoe@blahblih.com --account jdoe\n')),(0,i.kt)("p",null,"The list of possible identity types is X509, GSS, USERPASS, SSH, OIDC:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-identities jdoe\n  Identity: /DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe,        type: X509\n")),(0,i.kt)("p",null,"You can set attributes to the users:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add-attribute --key country --value xyz jdoe\n")),(0,i.kt)("p",null,"And list these attributes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-attributes jdoe\n  +---------+-------+\n  | Key     | Value |\n  |---------+-------|\n  | country | xyz   |\n  +---------+-------+\n")),(0,i.kt)("p",null,"You can also list all the accounts matching a certain attribute using the filter\noption:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin account list --filters "country=xyz"\n  jdoe\n')),(0,i.kt)("h2",{id:"creating-scope"},"Creating scope"),(0,i.kt)("p",null,"One needs then to create some scopes associated with the accounts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope add --account jdoe --scope user.jdoe\n")),(0,i.kt)("p",null,"Only the owner of the scope or privileged users can write into the scope."),(0,i.kt)("p",null,"To list all the scopes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope list\n  user.janedoe\n  user.jdoe\n")),(0,i.kt)("h2",{id:"creating-new-rses"},"Creating new RSEs"),(0,i.kt)("p",null,"To create a new RSE:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse add SITE3_DISK\n  Added new RSE: SITE3_DISK\n")),(0,i.kt)("p",null,"Then you can attach protocols to this RSE. In the following example, a file\nprotocol is added to the site created previously:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin rse add-protocol --hostname blahblah --scheme file \\\n      --impl rucio.rse.protocols.posix.Default --domain-json \\\n      \'{"wan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}, \\\n      "lan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}}\' \\\n      --prefix /tmp/SITE3_DISK/ SITE3_DISK\n')),(0,i.kt)("p",null,"The different parameters are explained in more details if you use the --help\noption."),(0,i.kt)("p",null,"Last step is to create RSE attributes that can be used to build RSE expressions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin rse set-attribute --rse SITE3_DISK --key tier --value 1\n  Added new RSE attribute for SITE3_DISK: tier-1\n  $ rucio-admin rse set-attribute --rse SITE3_DISK --key disk --value 1\n  Added new RSE attribute for SITE3_DISK: disk-1\n  $ rucio list-rses --rses "disk=1&tier=1"\n  SITE3_DISK\n')),(0,i.kt)("p",null,"Let's check that everything is properly defined:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse info SITE3_DISK\n  Settings:\n  =========\n    third_party_copy_protocol: 1\n    rse_type: DISK\n    domain: [u'lan', u'wan']\n    availability_delete: True\n    delete_protocol: 1\n    rse: SITE3_DISK\n    deterministic: True\n    write_protocol: 1\n    read_protocol: 1\n    staging_area: False\n    credentials: None\n    availability_write: True\n    lfn2pfn_algorithm: default\n    availability_read: True\n    volatile: False\n    id: 4079d6873603462b8867e4a49674cc11\n  Attributes:\n  ===========\n    tier: True\n    disk: True\n    istape: False\n    SITE3_DISK: True\n  Protocols:\n  ==========\n    file\n      extended_attributes: None\n      hostname: blahblih\n      prefix: /tmp/SITE3_DISK/\n      domains: {u'wan': {u'read': 1, u'write': 1, u'third_party_copy': 0, \\\n        u'delete': 1}, u'lan': {u'read': 1, u'write': 1, u'delete': 1}}\n      scheme: file\n      port: 0\n      impl: rucio.rse.protocols.posix.Default\n  Usage:\n  ======\n    rucio\n      used: 0\n      rse: SITE3_DISK\n      updated_at: 2018-02-22 13:05:45\n      free: None\n      source: rucio\n      total: 0\n")),(0,i.kt)("h2",{id:"setting-quota-and-permissions"},"Setting quota and permissions"),(0,i.kt)("p",null,"The root account has all the privileges. You can define other admin accounts by\nsetting the account attribute admin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin account add-attribute --key admin --value 1 jdoe\n  $ rucio-admin account list --filter "admin=1"\n  jdoe\n')),(0,i.kt)("p",null,"The permissions are easily tunable by overloading the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/lib/rucio/core/permission/generic.py"},"generic permission file"),"."),(0,i.kt)("p",null,"This is an advanced feature that is not explained there, for more details get in\ntouch with the developers."),(0,i.kt)("p",null,"To set the quota for one account on a given RSE:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account set-limits jdoe SITE3_DISK 10000000000000\n  Set account limit for account jdoe on SITE3_DISK: 10.000 TB\n  $ rucio-admin account get-limits jdoe SITE3_DISK\n  Quota on SITE3_DISK for jdoe : 10 TB\n")))}m.isMDXComponent=!0}}]);