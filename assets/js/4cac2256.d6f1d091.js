"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9223],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"s3_rse_config",title:"S3 Storage Configuration"},l=void 0,c={unversionedId:"s3_rse_config",id:"s3_rse_config",title:"S3 Storage Configuration",description:"S3 Storage Configuration (FTS3 & GFAL2)",source:"@site/../docs/s3_rse_config.md",sourceDirName:".",slug:"/s3_rse_config",permalink:"/documentation/s3_rse_config",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/s3_rse_config.md",tags:[],version:"current",lastUpdatedBy:"Radu Carpa",lastUpdatedAt:1679302004,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"s3_rse_config",title:"S3 Storage Configuration"},sidebar:"docs",previous:{title:"Policy Packages",permalink:"/documentation/policy_packages"},next:{title:"rucio-abacus-account",permalink:"/documentation/bin/rucio-abacus-account"}},p={},u=[{value:"S3 Storage Configuration (FTS3 &amp; GFAL2)",id:"s3-storage-configuration-fts3--gfal2",level:2},{value:"FTS3 &amp; GFAL2 Specifications",id:"fts3--gfal2-specifications",level:3},{value:"How to Setup an S3 RSE",id:"how-to-setup-an-s3-rse",level:3},{value:"Rucio Specifications",id:"rucio-specifications",level:3}],d={toc:u},h="wrapper";function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)(h,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"s3-storage-configuration-fts3--gfal2"},"S3 Storage Configuration (FTS3 & GFAL2)"),(0,o.kt)("p",null,"Rucio supports S3 storages which can be configured and used as RSEs. This section describes the steps needed to setup and use an S3 storage RSE when using FTS3 as the transfer tool and GFAL2 as the file access library."),(0,o.kt)("h3",{id:"fts3--gfal2-specifications"},"FTS3 & GFAL2 Specifications"),(0,o.kt)("p",null,"There are two ways in which one can employ ",(0,o.kt)("a",{parentName:"p",href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html#s3-support"},"FTS3"),"  and ",(0,o.kt)("a",{parentName:"p",href:"https://dmc-docs.web.cern.ch/dmc-docs/gfal2/plugins.html#gfal2-plugin-http"},"GFAL2")," (",(0,o.kt)("a",{parentName:"p",href:"https://davix.web.cern.ch/davix/docs/devel/cloud-support.html#amazon-s3"},"davix"),") to communicate with an S3 storage:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html"},"pre-signed")," URLs which can be used to access and modify the resources. In this case the endpoint protocol must be ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," and the user must pre-sign the URL before presenting it to the tools. Please note that in the case of FTS3, the actual timestamp that the transfer will initiate cannot be known a priori, so a pre-signed URL with a predefined lifetime can expire before the beginning of the transfer. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delegating the signature of the URL to FTS3 and GFAL2. This requires providing the relevant configurations (",(0,o.kt)("a",{parentName:"p",href:"https://dmc-docs.web.cern.ch/dmc-docs/gfal2/plugins.html#for-a-specific-host"},"gfal_config")," & ",(0,o.kt)("a",{parentName:"p",href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html#configuration"},"fts_config"),") and using ",(0,o.kt)("inlineCode",{parentName:"p"},"s3s://")," as the endpoint protocol. In this case the user must also be cautious to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"alternate")," configuration/flag appropriately. This will guide the usage of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html"},"Path-Style")," URL (",(0,o.kt)("inlineCode",{parentName:"p"},"alternate=true"),") or the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html"},"Virtual-Style")," URL (",(0,o.kt)("inlineCode",{parentName:"p"},"alternate=false"),") during the signing process. Please note that FTS3 currently cannot handle transfers between S3 path-style URLs to S3 virtual-style URLs and vice versa. The ",(0,o.kt)("inlineCode",{parentName:"p"},"alternate")," flag affects all endpoints in the submitted job, thus all S3 endpoints should adhere to the same URL-style."))),(0,o.kt)("h3",{id:"how-to-setup-an-s3-rse"},"How to Setup an S3 RSE"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the RSE. Upon executing ",(0,o.kt)("inlineCode",{parentName:"p"},"rucio-admin rse info <RSE>")," command one should     have the following indicative result for the protocols section:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'                                .\n                                .\nProtocols:\n==========\nhttps\n    domains: \'{"lan": {"read": 1, "write": 1, "delete": 1}, "wan":..}\'\n    extended_attributes: None\n    hostname: <S3_HOSTNAME>\n    impl: rucio.rse.protocols.gfal.Default\n    port: 443\n    prefix: <PATH> # bucket name in case of path-style URLs\n    scheme: https\n                                .\n                                .\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the following RSE attributes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sign_url: s3\nskip_upload_stat: True\nverify_checksum: False\nstrict_copy: True\ns3_url_style: path(default)|host\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy the S3 configuration to the Rucio servers and restart servers:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# vim /opt/rucio/etc/rse-accounts.cfg\n{\n    "f4dc2967e329vdf5a73c154eb8d9ffae": {  #rse_id\n            "access_key": "...",\n            "secret_key": "...",\n            "signature_version": "s3v4",   # must be s3v4\n            "region": "us-west-2"          # adapt as necessary\n    },\n    ...\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give every Rucio account the following attribute to be able to sign URLs:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rucio-admin account add-attribute <accountname> --key sign-gcs --value true\n")),(0,o.kt)("p",{parentName:"li"},"In order for this step to be effective, one has to make sure the relevant permission is given when the sign-gcs key is present for the account, for example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rizart/rucio/blob/88984a4dbc9d8be4e254f61545c7066e6c67de56/lib/rucio/core/permission/atlas.py#L1152"},"this")," is the way it is currently done for ATLAS."))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure FTS3 to be able to use the same access and secret keys as you did for the Rucio servers:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You need to have access to the FTS3 server config page",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Visit ",(0,o.kt)("inlineCode",{parentName:"li"},"<fts_server>:8446/config/cloud_storage")))),(0,o.kt)("li",{parentName:"ul"},"Add a new cloud storage (the name should be ",(0,o.kt)("inlineCode",{parentName:"li"},"S3:<URL>"),")"),(0,o.kt)("li",{parentName:"ul"},"Configure the added cloud storage as the following indicative example:")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"image",src:a(35339).Z,width:"1239",height:"213"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," to User to include all users. If this cannot be done via the UI you need to contact the people who manage your FTS3 server."),(0,o.kt)("li",{parentName:"ul"},"Configure the VO roles"),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("strong",{parentName:"li"},"access token")," and the ",(0,o.kt)("strong",{parentName:"li"},"access secret"),", these correspond to the ",(0,o.kt)("strong",{parentName:"li"},"access_key")," and ",(0,o.kt)("strong",{parentName:"li"},"secret_key")," you also configured for Rucio.")))),(0,o.kt)("h3",{id:"rucio-specifications"},"Rucio Specifications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When a client tries ",(0,o.kt)("strong",{parentName:"p"},"rucio upload")," & ",(0,o.kt)("strong",{parentName:"p"},"rucio download"),", or when the ",(0,o.kt)("strong",{parentName:"p"},"reaper")," daemon tries to delete data, Rucio pre-signs the S3 URL and passes that signed URL to GFAL2. GFAL2 needs ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," as the scheme for the protocol when this is the case.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When the ",(0,o.kt)("strong",{parentName:"p"},"conveyor-submitter")," daemon submits a transfer to FTS3, it does not pre-sign the URL but it depends on the FTS3 server to do so (Step 5 of the configuration in the previous section), in this case the proper scheme to use for the protocol is ",(0,o.kt)("inlineCode",{parentName:"p"},"s3s://"),", Rucio will automatically translate ",(0,o.kt)("inlineCode",{parentName:"p"},"https -> s3s")," in order to submit the transfer properly. The approach of not pre-signing the URL is necessary since those URLs have an expiration time and there is no guarantee of when the FTS3 transfer will really happen. This way, FTS3 signs the URL just before the transfer actually starts."))))}m.isMDXComponent=!0},35339:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fts_s3_config-150fea18fe651532e02e25a06ff8707d.png"}}]);