"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9672],{76387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(74848),o=a(28453);const i={id:"did_meta",title:"DID Metadata",sidebar_label:"DID Metadata"},s=void 0,d={id:"operator/did_meta",title:"DID Metadata",description:"Rucio supports adding Metadata on the dids.",source:"@site/../docs/operator/did_meta.md",sourceDirName:"operator",slug:"/operator/did_meta",permalink:"/documentation/operator/did_meta",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/did_meta.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1717594267e3,frontMatter:{id:"did_meta",title:"DID Metadata",sidebar_label:"DID Metadata"},sidebar:"docs",previous:{title:"FTS3 Transfertool Plugins",permalink:"/documentation/operator/transfers/configure-rucio-fts3-plugins"},next:{title:"Policy Packages",permalink:"/documentation/operator/policy_packages"}},r={},c=[{value:"How to develop a custom metadata solution",id:"how-to-develop-a-custom-metadata-solution",level:2},{value:"How to configure which metadata plugin to use",id:"how-to-configure-which-metadata-plugin-to-use",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Rucio supports adding Metadata on the dids."}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# Create a dataset to use on the Example\n$ rucio add-dataset mock:testing_metadata\n\n# Add 'optimized' metadata that exist as columns in the did table\n$ rucio set-metadata --did mock:testing_metadata --key panda_id --value 9999\n\n# Add 'generic' metadata. If there is no custom metadata plugin,\n# the plugin 'JSON' will be used\n$ rucio set-metadata --did mock:testing_metadata --key random_key_name --value 8888\n\n# Get the 'optimized' metadata\n$ rucio get-metadata mock:testing_metadata\n\n# Get the Generic metadata\n$ rucio get-metadata mock:testing_metadata --plugin JSON\n\n# Get all the metadata\n$ rucio get-metadata mock:testing_metadata --plugin ALL\n\n# List dids according to metadata\n$ rucio list-dids-extended mock:* --filter \"type=ALL,panda_id=9999\"\n$ rucio list-dids-extended mock:* --filter \"type=ALL,random_key_name=8888\"\n"})}),"\n",(0,n.jsx)(t.p,{children:"Even though regular users use metadata out of the box using the CLI, advanced\nusers and Rucio admins should be aware that in the backend there are multiple\noptions on how to store and manage the did metadata per experiment needs."}),"\n",(0,n.jsx)(t.p,{children:"The concepts of DID Metadata Plugins exists on Rucio. While deploying the Rucio\nserver you can configure which existing did plugins to use or even develop your\nown."}),"\n",(0,n.jsx)(t.p,{children:"The default plugin in use the one originally developed for the needs of ATLAS,\nstores the metadata on fixed columns on the DID table and is the most optimal\nfor the specific metadata."}),"\n",(0,n.jsx)(t.p,{children:"Another option available is the JSON metadata plugin which stores the metadata\nin JSON blobs in the relational databased used by the Rucio Server."}),"\n",(0,n.jsx)(t.p,{children:"When you are trying to add or fetch a VALUE for a given KEY, Rucio which asks in\norder each configured metadata plugin if it supports this KEY."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-develop-a-custom-metadata-solution",children:"How to develop a custom metadata solution"}),"\n",(0,n.jsxs)(t.p,{children:["The module you develop needs to extend the\n",(0,n.jsx)(t.a,{href:"https://github.com/rucio/rucio/blob/master/lib/rucio/core/did_meta_plugins/did_meta_plugin_interface.py",children:"DidMetaPlugin"}),"\nAbstract class. The methods needed are:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'get_metadata(scope, name, session=None)\n"""\nReturns metadata stored in Plugin for given scope:name\n"""\n\nset_metadata(scope, name, key, value, recursive, session=None)\n"""\nSets the metadata in Plugin for given scope:name\n"""\n\ndelete_metadata(scope, name, key, session=None)\n"""\nRemoves the metadata from the Plugin for given scope:name\n"""\n\nlist_dids(scope, filters, type=\'collection\', ignore_case=False, limit=None, \\\n  offset=None, long=False, recursive=False, session=None)\n"""\nReturns a list of dids for given filters.\nFor long = True return should be a list of dictionaries having the keys \'scope\',\n\'name\', \'did_type\', \'bytes\', \'length\'.\nFor long = False return should be a list of strings containing the did names.\n"""\n\nmanages_key(key, session=None)\n"""\nReturns if Plugin is willing to manage metadata with given KEY.\nSome Plugins might decide to accept only specific hardcoded keys, others might match\nagainst a particular regex while other might accept all possible keys.\n"""\n'})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-configure-which-metadata-plugin-to-use",children:"How to configure which metadata plugin to use"}),"\n",(0,n.jsx)(t.p,{children:"Configuration options for Metadata are:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"[metadata]\n# plugins = list_of_plugins,comma_separated\nplugins = rucio.core.did_meta_plugins.did_column_meta.DidColumnMeta,escape.rucio.did_meta_plugin\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>d});var n=a(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);