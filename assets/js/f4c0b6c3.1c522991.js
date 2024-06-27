"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1166],{6264:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(74848),o=n(28453);const i={id:"s3_rse_config",title:"S3 Storage Configuration"},r=void 0,c={id:"operator/s3_rse_config",title:"S3 Storage Configuration",description:"S3 Storage Configuration (FTS3 & GFAL2)",source:"@site/../docs/operator/s3_rse_config.md",sourceDirName:"operator",slug:"/operator/s3_rse_config",permalink:"/documentation/operator/s3_rse_config",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/s3_rse_config.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:17194779e5,frontMatter:{id:"s3_rse_config",title:"S3 Storage Configuration"},sidebar:"docs",previous:{title:"Policy Packages",permalink:"/documentation/operator/policy_packages"},next:{title:"QoS RSE Configuration",permalink:"/documentation/operator/qos_rse_config"}},a={},l=[{value:"S3 Storage Configuration (FTS3 &amp; GFAL2)",id:"s3-storage-configuration-fts3--gfal2",level:2},{value:"FTS3 &amp; GFAL2 Specifications",id:"fts3--gfal2-specifications",level:3},{value:"How to Setup an S3 RSE",id:"how-to-setup-an-s3-rse",level:3},{value:"Rucio Specifications",id:"rucio-specifications",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"s3-storage-configuration-fts3--gfal2",children:"S3 Storage Configuration (FTS3 & GFAL2)"}),"\n",(0,t.jsx)(s.p,{children:"Rucio supports S3 storages which can be configured and used as RSEs. This section describes the steps needed to setup and use an S3 storage RSE when using FTS3 as the transfer tool and GFAL2 as the file access library."}),"\n",(0,t.jsx)(s.h3,{id:"fts3--gfal2-specifications",children:"FTS3 & GFAL2 Specifications"}),"\n",(0,t.jsxs)(s.p,{children:["There are two ways in which one can employ ",(0,t.jsx)(s.a,{href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html#s3-support",children:"FTS3"}),"  and ",(0,t.jsx)(s.a,{href:"https://dmc-docs.web.cern.ch/dmc-docs/gfal2/plugins.html#gfal2-plugin-http",children:"GFAL2"})," (",(0,t.jsx)(s.a,{href:"https://davix.web.cern.ch/davix/docs/devel/cloud-support.html#amazon-s3",children:"davix"}),") to communicate with an S3 storage:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Using ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html",children:"pre-signed"})," URLs which can be used to access and modify the resources. In this case the endpoint protocol must be ",(0,t.jsx)(s.code,{children:"https://"})," and the user must pre-sign the URL before presenting it to the tools. Please note that in the case of FTS3, the actual timestamp that the transfer will initiate cannot be known a priori, so a pre-signed URL with a predefined lifetime can expire before the beginning of the transfer."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Delegating the signature of the URL to FTS3 and GFAL2. This requires providing the relevant configurations (",(0,t.jsx)(s.a,{href:"https://dmc-docs.web.cern.ch/dmc-docs/gfal2/plugins.html#for-a-specific-host",children:"gfal_config"})," & ",(0,t.jsx)(s.a,{href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/s3_support.html#configuration",children:"fts_config"}),") and using ",(0,t.jsx)(s.code,{children:"s3s://"})," as the endpoint protocol. In this case the user must also be cautious to use the ",(0,t.jsx)(s.code,{children:"alternate"})," configuration/flag appropriately. This will guide the usage of the ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html",children:"Path-Style"})," URL (",(0,t.jsx)(s.code,{children:"alternate=true"}),") or the ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html",children:"Virtual-Style"})," URL (",(0,t.jsx)(s.code,{children:"alternate=false"}),") during the signing process. Please note that FTS3 currently cannot handle transfers between S3 path-style URLs to S3 virtual-style URLs and vice versa. The ",(0,t.jsx)(s.code,{children:"alternate"})," flag affects all endpoints in the submitted job, thus all S3 endpoints should adhere to the same URL-style."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"how-to-setup-an-s3-rse",children:"How to Setup an S3 RSE"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Create the RSE. Upon executing ",(0,t.jsx)(s.code,{children:"rucio-admin rse info <RSE>"})," command one should     have the following indicative result for the protocols section:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'                                .\n                                .\nProtocols:\n==========\nhttps\n    domains: \'{"lan": {"read": 1, "write": 1, "delete": 1}, "wan":..}\'\n    extended_attributes: None\n    hostname: <S3_HOSTNAME>\n    impl: rucio.rse.protocols.gfal.Default\n    port: 443\n    prefix: <PATH> # bucket name in case of path-style URLs\n    scheme: https\n                                .\n                                .\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Set the following RSE attributes:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sign_url: s3\nskip_upload_stat: True\nverify_checksum: False\nstrict_copy: True\ns3_url_style: path(default)|host\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Deploy the S3 configuration to the Rucio servers by creating a ",(0,t.jsx)(s.code,{children:"<release-name-servers>-rse-accounts"})," containing the following:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'# vim /opt/rucio/etc/rse-accounts.cfg\n{\n    "f4d121967789vdf5a73c154eb8d9ffae": {  #rse_id\n            "access_key": "...",\n            "secret_key": "...",\n            "signature_version": "s3v4",   # must be s3v4\n            "region": "us-west-2"          # adapt as necessary\n    },\n    ...\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"And add in your servers helm chart:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'values:\n  secretMounts:\n    - secretName: rse-accounts\n      mountPath: /opt/rucio/etc/rse-accounts.cfg\n      subPath: rse-accounts.cfg\n\n  config:\n    credentials:\n      gcs: "/opt/rucio/etc/rse-accounts.cfg"\n\n'})}),"\n",(0,t.jsx)(s.p,{children:"Restart the servers."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Give every Rucio account the following attribute to be able to sign URLs:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"rucio-admin account add-attribute <accountname> --key sign-gcs --value true\n"})}),"\n",(0,t.jsxs)(s.p,{children:["In order for this step to be effective, one has to make sure the relevant permission is given when the sign-gcs key is present for the account, for example ",(0,t.jsx)(s.a,{href:"https://github.com/rizart/rucio/blob/88984a4dbc9d8be4e254f61545c7066e6c67de56/lib/rucio/core/permission/atlas.py#L1152",children:"this"})," is the way it is currently done for ATLAS."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Configure FTS3 to be able to use the same access and secret keys as you did for the Rucio servers:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["You need to have access to the FTS3 server config page","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Visit ",(0,t.jsx)(s.code,{children:"<fts_server>:8446/config/cloud_storage"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Add a new cloud storage (the name should be ",(0,t.jsx)(s.code,{children:"S3:<URL>"}),")"]}),"\n",(0,t.jsx)(s.li,{children:"Configure the added cloud storage as the following indicative example:"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:n(61712).A+"",width:"1239",height:"213"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add ",(0,t.jsx)(s.code,{children:"*"})," to User to include all users. If this cannot be done via the UI you need to contact the people who manage your FTS3 server."]}),"\n",(0,t.jsx)(s.li,{children:"Configure the VO roles"}),"\n",(0,t.jsxs)(s.li,{children:["Add the ",(0,t.jsx)(s.strong,{children:"access token"})," and the ",(0,t.jsx)(s.strong,{children:"access secret"}),", these correspond to the ",(0,t.jsx)(s.strong,{children:"access_key"})," and ",(0,t.jsx)(s.strong,{children:"secret_key"})," you also configured for Rucio."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"rucio-specifications",children:"Rucio Specifications"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["When a client tries ",(0,t.jsx)(s.strong,{children:"rucio upload"})," & ",(0,t.jsx)(s.strong,{children:"rucio download"}),", or when the ",(0,t.jsx)(s.strong,{children:"reaper"})," daemon tries to delete data, Rucio pre-signs the S3 URL and passes that signed URL to GFAL2. GFAL2 needs ",(0,t.jsx)(s.code,{children:"https://"})," as the scheme for the protocol when this is the case."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["When the ",(0,t.jsx)(s.strong,{children:"conveyor-submitter"})," daemon submits a transfer to FTS3, it does not pre-sign the URL but it depends on the FTS3 server to do so (Step 5 of the configuration in the previous section), in this case the proper scheme to use for the protocol is ",(0,t.jsx)(s.code,{children:"s3s://"}),", Rucio will automatically translate ",(0,t.jsx)(s.code,{children:"https -> s3s"})," in order to submit the transfer properly. The approach of not pre-signing the URL is necessary since those URLs have an expiration time and there is no guarantee of when the FTS3 transfer will really happen. This way, FTS3 signs the URL just before the transfer actually starts."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},61712:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/fts_s3_config-150fea18fe651532e02e25a06ff8707d.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(96540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);