"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[695],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=l(a),m=o,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:o,i[1]=d;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],d={id:"did_meta",title:"DID Metadata",sidebar_label:"DID Metadata"},s=void 0,l={unversionedId:"operator/did_meta",id:"operator/did_meta",title:"DID Metadata",description:"Rucio supports adding Metadata on the dids.",source:"@site/../docs/operator/did_meta.md",sourceDirName:"operator",slug:"/operator/did_meta",permalink:"/documentation/operator/did_meta",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/did_meta.md",tags:[],version:"current",lastUpdatedBy:"Anton Schwarz",lastUpdatedAt:1692888845,formattedLastUpdatedAt:"Aug 24, 2023",frontMatter:{id:"did_meta",title:"DID Metadata",sidebar_label:"DID Metadata"},sidebar:"docs",previous:{title:"Configure Rucio To Use Globus Online as a Transfer Tool",permalink:"/documentation/operator/transfers/configure-rucio-globus"},next:{title:"Policy Packages",permalink:"/documentation/operator/policy_packages"}},u={},c=[{value:"How to develop a custom metadata solution",id:"how-to-develop-a-custom-metadata-solution",level:2},{value:"How to configure which metadata plugin to use",id:"how-to-configure-which-metadata-plugin-to-use",level:2}],p={toc:c},m="wrapper";function g(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rucio supports adding Metadata on the dids."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a dataset to use on the Example\n$ rucio add-dataset mock:testing_metadata\n\n# Add 'optimized' metadata that exist as columns in the did table\n$ rucio set-metadata --did mock:testing_metadata --key panda_id --value 9999\n\n# Add 'generic' metadata. If there is no custom metadata plugin,\n# the plugin 'JSON' will be used\n$ rucio set-metadata --did mock:testing_metadata --key random_key_name --value 8888\n\n# Get the 'optimized' metadata\n$ rucio get-metadata mock:testing_metadata\n\n# Get the Generic metadata\n$ rucio get-metadata mock:testing_metadata --plugin JSON\n\n# Get all the metadata\n$ rucio get-metadata mock:testing_metadata --plugin ALL\n\n# List dids according to metadata\n$ rucio list-dids-extended mock:* --filter \"type=ALL,panda_id=9999\"\n$ rucio list-dids-extended mock:* --filter \"type=ALL,random_key_name=8888\"\n")),(0,r.kt)("p",null,"Even though regular users use metadata out of the box using the CLI, advanced\nusers and Rucio admins should be aware that in the backend there are multiple\noptions on how to store and manage the did metadata per experiment needs."),(0,r.kt)("p",null,"The concepts of DID Metadata Plugins exists on Rucio. While deploying the Rucio\nserver you can configure which existing did plugins to use or even develop your\nown."),(0,r.kt)("p",null,"The default plugin in use the one originally developed for the needs of ATLAS,\nstores the metadata on fixed columns on the DID table and is the most optimal\nfor the specific metadata."),(0,r.kt)("p",null,"Another option available is the JSON metadata plugin which stores the metadata\nin JSON blobs in the relational databased used by the Rucio Server."),(0,r.kt)("p",null,"When you are trying to add or fetch a VALUE for a given KEY, Rucio which asks in\norder each configured metadata plugin if it supports this KEY."),(0,r.kt)("h2",{id:"how-to-develop-a-custom-metadata-solution"},"How to develop a custom metadata solution"),(0,r.kt)("p",null,"The module you develop needs to extend the ",(0,r.kt)("a",{parentName:"p",href:"/"},"DidMetaPlugin")," Abstract\nclass. The methods needed are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'get_metadata(scope, name, session=None)\n"""\nReturns metadata stored in Plugin for given scope:name\n"""\n\nset_metadata(scope, name, key, value, recursive, session=None)\n"""\nSets the metadata in Plugin for given scope:name\n"""\n\ndelete_metadata(scope, name, key, session=None)\n"""\nRemoves the metadata from the Plugin for given scope:name\n"""\n\nlist_dids(scope, filters, type=\'collection\', ignore_case=False, limit=None, \\\n  offset=None, long=False, recursive=False, session=None)\n"""\nReturns a list of dids for given filters.\nFor long = True return should be a list of dictionaries having the keys \'scope\',\n\'name\', \'did_type\', \'bytes\', \'length\'.\nFor long = False return should be a list of strings containing the did names.\n"""\n\nmanages_key(key, session=None)\n"""\nReturns if Plugin is willing to manage metadata with given KEY.\nSome Plugins might decide to accept only specific hardcoded keys, others might match\nagainst a particular regex while other might accept all possible keys.\n"""\n')),(0,r.kt)("h2",{id:"how-to-configure-which-metadata-plugin-to-use"},"How to configure which metadata plugin to use"),(0,r.kt)("p",null,"Configuration options for Metadata are::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"[metadata]\n# plugins = [list_of_plugins,comma_separated]\nplugins = [rucio.core.did_meta_plugins.did_column_meta.DidColumnMeta, escape.rucio.did_meta_plugin]\n")))}g.isMDXComponent=!0}}]);