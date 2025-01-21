"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1609],{48324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"operator/configuration","title":"Configuration","description":"Prerequisites","source":"@site/../docs/operator/configuration.md","sourceDirName":"operator","slug":"/operator/configuration","permalink":"/documentation/operator/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/configuration.md","tags":[],"version":"current","lastUpdatedBy":"Martin Barisits","lastUpdatedAt":1737476714000,"frontMatter":{"id":"configuration","title":"Configuration","sidebar_label":"Configuration"},"sidebar":"docs","previous":{"title":"Installing Rucio Daemons","permalink":"/documentation/operator/installing_daemons"},"next":{"title":"A Kubernetes tutorial","permalink":"/documentation/operator/k8s_guide"}}');var r=t(74848),a=t(28453);const s={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},o=void 0,c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating new users",id:"creating-new-users",level:2},{value:"X509 identity format",id:"x509-identity-format",level:3},{value:"Creating scope",id:"creating-scope",level:2},{value:"Creating new RSEs",id:"creating-new-rses",level:2},{value:"Setting quota and permissions",id:"setting-quota-and-permissions",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["You need to have a Rucio server up and running with the root account\ncreated. Please refer to ",(0,r.jsx)(n.a,{href:"/documentation/operator/installing_server",children:"installation documentation"})," for\nfurther information"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-new-users",children:"Creating new users"}),"\n",(0,r.jsx)(n.p,{children:"The first step is to create new accounts:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can choose from different types in the list USER, GROUP, SERVICE. Different\npolicies/permissions can be set depending on the account type.  Once the account\nis created, you need to create and attach an identity to this account:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'  $ rucio-admin identity add --type X509 \\\n      --id "CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah" \\\n      --email jdoe@blahblih.com --account jdoe\n'})}),"\n",(0,r.jsx)(n.p,{children:"The list of possible identity types is X509, GSS, USERPASS, SSH, OIDC:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account list-identities jdoe\n  Identity: CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah,        type: X509\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can set attributes to the users:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account add-attribute --key country --value xyz jdoe\n"})}),"\n",(0,r.jsx)(n.p,{children:"And list these attributes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account list-attributes jdoe\n  +---------+-------+\n  | Key     | Value |\n  |---------+-------|\n  | country | xyz   |\n  +---------+-------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also list all the accounts matching a certain attribute using the filter\noption:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'  $ rucio-admin account list --filters "country=xyz"\n  jdoe\n'})}),"\n",(0,r.jsx)(n.h3,{id:"x509-identity-format",children:"X509 identity format"}),"\n",(0,r.jsxs)(n.p,{children:["By default, X509 identities must be formatted according to the relevant RFCs: a\ncomma-separated list of the DN components, ordered last-to-first (e.g.\n",(0,r.jsx)(n.code,{children:"CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah"}),").  However, operators might\nprefer to store them in the legacy format: a slash-separated list of the DN\ncomponents, starting with a slash, ordered first-to-last (e.g.\n",(0,r.jsx)(n.code,{children:"/DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["To do so, it is necessary to enable the ",(0,r.jsx)(n.code,{children:"LegacyDNStringFormat"})," configuration\noption of mod_ssl.  When using the official Rucio container images, one must set\nthe ",(0,r.jsx)(n.code,{children:"RUCIO_HTTPD_LEGACY_DN"})," environmental variable to ",(0,r.jsx)(n.code,{children:"True"}),".  For custom\ninstallations, one must edit the appropriate Apache configuration file so that\nthe ",(0,r.jsx)(n.code,{children:"SSLOptions"})," directive looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SSLOptions +StdEnvVars +LegacyDNStringFormat\n"})}),"\n",(0,r.jsx)(n.h2,{id:"creating-scope",children:"Creating scope"}),"\n",(0,r.jsx)(n.p,{children:"One needs then to create some scopes associated with the accounts:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin scope add --account jdoe --scope user.jdoe\n"})}),"\n",(0,r.jsx)(n.p,{children:"Only the owner of the scope or privileged users can write into the scope."}),"\n",(0,r.jsx)(n.p,{children:"To list all the scopes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin scope list\n  user.janedoe\n  user.jdoe\n"})}),"\n",(0,r.jsx)(n.h2,{id:"creating-new-rses",children:"Creating new RSEs"}),"\n",(0,r.jsx)(n.p,{children:"To create a new RSE:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin rse add SITE3_DISK\n  Added new RSE: SITE3_DISK\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you can attach protocols to this RSE. In the following example, a file\nprotocol is added to the site created previously:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'  $ rucio-admin rse add-protocol --hostname blahblah --scheme file \\\n      --impl rucio.rse.protocols.posix.Default --domain-json \\\n      \'{"wan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}, \\\n      "lan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}}\' \\\n      --prefix /tmp/SITE3_DISK/ SITE3_DISK\n'})}),"\n",(0,r.jsx)(n.p,{children:"The different parameters are explained in more details if you use the --help\noption."}),"\n",(0,r.jsx)(n.p,{children:"Last step is to create RSE attributes that can be used to build RSE expressions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'  $ rucio-admin rse set-attribute --rse SITE3_DISK --key tier --value 1\n  Added new RSE attribute for SITE3_DISK: tier-1\n  $ rucio-admin rse set-attribute --rse SITE3_DISK --key disk --value 1\n  Added new RSE attribute for SITE3_DISK: disk-1\n  $ rucio list-rses --rses "disk=1&tier=1"\n  SITE3_DISK\n'})}),"\n",(0,r.jsx)(n.p,{children:"Let's check that everything is properly defined:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin rse info SITE3_DISK\n  Settings:\n  =========\n    third_party_copy_protocol: 1\n    rse_type: DISK\n    domain: [u'lan', u'wan']\n    availability_delete: True\n    delete_protocol: 1\n    rse: SITE3_DISK\n    deterministic: True\n    write_protocol: 1\n    read_protocol: 1\n    staging_area: False\n    credentials: None\n    availability_write: True\n    lfn2pfn_algorithm: default\n    availability_read: True\n    volatile: False\n    id: 4079d6873603462b8867e4a49674cc11\n  Attributes:\n  ===========\n    tier: True\n    disk: True\n    istape: False\n    SITE3_DISK: True\n  Protocols:\n  ==========\n    file\n      extended_attributes: None\n      hostname: blahblih\n      prefix: /tmp/SITE3_DISK/\n      domains: {u'wan': {u'read': 1, u'write': 1, u'third_party_copy': 0, \\\n        u'delete': 1}, u'lan': {u'read': 1, u'write': 1, u'delete': 1}}\n      scheme: file\n      port: 0\n      impl: rucio.rse.protocols.posix.Default\n  Usage:\n  ======\n    rucio\n      used: 0\n      rse: SITE3_DISK\n      updated_at: 2018-02-22 13:05:45\n      free: None\n      source: rucio\n      total: 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setting-quota-and-permissions",children:"Setting quota and permissions"}),"\n",(0,r.jsx)(n.p,{children:"The root account has all the privileges. You can define other admin accounts by\nsetting the account attribute admin:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'  $ rucio-admin account add-attribute --key admin --value 1 jdoe\n  $ rucio-admin account list --filter "admin=1"\n  jdoe\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The permissions are easily tunable by overloading the ",(0,r.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/lib/rucio/core/permission/generic.py",children:"generic permission file"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This is an advanced feature that is not explained there, for more details get in\ntouch with the developers."}),"\n",(0,r.jsx)(n.p,{children:"To set the quota for one account on a given RSE:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  $ rucio-admin account set-limits jdoe SITE3_DISK 10000000000000\n  Set account limit for account jdoe on SITE3_DISK: 10.000 TB\n  $ rucio-admin account get-limits jdoe SITE3_DISK\n  Quota on SITE3_DISK for jdoe : 10 TB\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);