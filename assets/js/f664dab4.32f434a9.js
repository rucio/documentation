"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3666],{28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},37423:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"operator/transfers/configure-rucio-globus","title":"Configure Rucio To Use Globus Online as a Transfer Tool","description":"This document walks through an example configuration of Rucio to use Globus","source":"@site/../docs/operator/transfers/configure_globus_transfertool.md","sourceDirName":"operator/transfers","slug":"/operator/transfers/configure-rucio-globus","permalink":"/documentation/operator/transfers/configure-rucio-globus","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/configure_globus_transfertool.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1741600001000,"frontMatter":{"id":"configure-rucio-globus","title":"Configure Rucio To Use Globus Online as a Transfer Tool","sidebar_label":"Configure Rucio To Use Globus Online as a Transfer Tool"},"sidebar":"docs","previous":{"title":"Transfers Submitter","permalink":"/documentation/operator/transfers/transfers-submitter"},"next":{"title":"FTS3 Transfertool Plugins","permalink":"/documentation/operator/transfers/configure-rucio-fts3-plugins"}}');var r=o(74848),i=o(28453);const s={id:"configure-rucio-globus",title:"Configure Rucio To Use Globus Online as a Transfer Tool",sidebar_label:"Configure Rucio To Use Globus Online as a Transfer Tool"},a=void 0,l={},u=[{value:"Register Application with Globus",id:"register-application-with-globus",level:2},{value:"RSE Setup",id:"rse-setup",level:2},{value:"Rucio Configuration File",id:"rucio-configuration-file",level:2},{value:"Globus Configuration File",id:"globus-configuration-file",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document walks through an example configuration of Rucio to use Globus\nOnline as a transfer tool. There are four configuration points shown here:\nregistration of your application with Globus, RSE setup (properties and\nparameters), the Rucio configuration file rucio.cfg and the Globus configuration\nfile config.yml."}),"\n",(0,r.jsx)(n.p,{children:"Use of both Globus Server endpoints and Globus Personal endpoints has been\ntested with the below approach. Creation of the Globus endpoints is outside the\nscope here. Some knowledge of Rucio setup and familiarity with Globus\nconfiguration is presumed."}),"\n",(0,r.jsx)(n.h2,{id:"register-application-with-globus",children:"Register Application with Globus"}),"\n",(0,r.jsxs)(n.p,{children:["Using Globus Online as a transfer tool requires\n",(0,r.jsx)(n.a,{href:"https://developers.globus.org",children:"registering"})," the client application with Globus\nOnline. Be sure to select Native App and include a scope for\nurn:globus:auth:scope",":transfer",".api.globus.org",":all",". Once you have the Client ID\nyou\u2019ll need to install the globus sdk and run the below Python code to obtain a\nrefresh token."]}),"\n",(0,r.jsxs)(n.p,{children:["There is a ",(0,r.jsx)(n.a,{href:"https://globus-sdk-python.readthedocs.io/en/stable/tutorial.html",children:"helpful\nwalk-through"}),"\nthat goes into more detail around OAuth and token retrieval."]}),"\n",(0,r.jsx)(n.p,{children:"Obtain a refresh token to access Globus resources:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# obtain authorization code\nimport globus_sdk\nCLIENT_ID = '' # your client ID obtained from registering application\nclient = globus_sdk.NativeAppAuthClient(CLIENT_ID)\nclient.oauth2_start_flow(refresh_tokens=True)\nclient.oauth2_get_authorize_url() # Use URL returned here to obtain the authorization\nAUTH_CODE = '' # Use authorization code returned by authenticating to Globus Online\n\n# use the authorization code to create a refresh token\ntoken_response = client.oauth2_exchange_code_for_tokens(AUTH_CODE)\nrefresh_token = token_response.by_resource_server['transfer.api.globus.org']['refresh_token']\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rse-setup",children:"RSE Setup"}),"\n",(0,r.jsx)(n.p,{children:"Below shows a typical setup for a test RSE. Options for CLI given when\nsupported."}),"\n",(0,r.jsx)(n.p,{children:"The following code will create a non-determinisic RSE."}),"\n",(0,r.jsx)(n.p,{children:"Python:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# set up the target non-deterministic rse (TEST_RSE)\nfrom rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\nrse_properties = {\n  'ASN': 'ASN',\n  'availability': 7,\n  'deterministic': False,\n  'volatile': False,\n  'city': 'Upton',\n  'region_code': 'DE',\n  'country_name': 'US',\n  'continent': 'NA',\n  'time_zone': 'America/New_York',\n  'ISP': None, 'staging_area': False,\n  'rse_type': 'DISK',\n  'longitude': 40.868352,\n  'latitude': -72.878871\n}\nr = rseclient.add_rse(rse_name, **rse_properties) # r is true on success\n"})}),"\n",(0,r.jsx)(n.p,{children:"CLI alternative: RSE creation not supported at time of writing of this document\nas there is no way to pass the properties."}),"\n",(0,r.jsx)(n.p,{children:"The following code creates a schema to connect to Globus for the RSE created\nabove."}),"\n",(0,r.jsx)(n.p,{children:"Python:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"from rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\n# Globus scheme\nprefix = '/~/scratch-space/' # Be sure to use a relative path for your endpoint\nparams = {\n  'scheme': 'globus',\n  'prefix': prefix,\n  'impl': 'rucio.rse.protocols.globus.GlobusRSEProtocol',\n  'third_party_copy': 1,\n  'domains': {\n    \"lan\": {\"read\": 1,\"write\": 1,\"delete\": 1},\n    \"wan\": {\"read\": 1,\"write\": 1,\"delete\": 1}\n  }\n}\np = rseclient.add_protocol(rse_name, params) # p is true on success\n"})}),"\n",(0,r.jsx)(n.p,{children:"CLI alternative: (the hostname value is required for the CLI command but is\narbitrary as it is ultimately not used in the scheme):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> rucio-admin rse add-protocol --scheme \'globus\' --prefix \'/~/scratch-space\' \\\n    --impl \'rucio.rse.protocols.globus.GlobusRSEProtocol\' --domain-json \\\n    \'{"wan": {"read": 1, "write": 1, "third_party_copy": 1, "delete": 1}, \\\n    "lan": {"read": 1, "write": 1, "third_party_copy": 1, "delete": 1}}\' \\\n    --hostname \'globus_online\' TEST_RSE\n'})}),"\n",(0,r.jsx)(n.p,{children:"The following code sets some attributes for the RSE."}),"\n",(0,r.jsx)(n.p,{children:"Python:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"from rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\n\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'naming_convention', value = 'bnl') # This is the value for relative SURL\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'globus_endpoint_id', value = 'd6ae63d8-503f-11e9-a620-0a54e005f849')\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'istape', value = False)\n"})}),"\n",(0,r.jsx)(n.p,{children:"CLI alternative:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"> rucio-admin rse set-attribute --rse TEST_RSE --key naming_convention --value bnl\n> rucio-admin rse set-attribute --rse TEST_RSE --key globus_endpoint_id --value d6ae63d8-503f-11e9-a620-0a54e005f849\n> rucio-admin rse set-attribute --rse TEST_RSE --key istape --value false\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rucio-configuration-file",children:"Rucio Configuration File"}),"\n",(0,r.jsx)(n.p,{children:"The Rucio configuration file rucio.cfg should contain the following for the\nconveyor mechanism. More schemes can be included but globus is required. You\nonly need the file scheme if you plan on using the upload method for\nreplicas. If the transfertype value is bulk Rucio will bundle many files into a\ntransfer task. If single then each file will be submitted on individual transfer\ntasks.:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[conveyor]\nscheme = file,globus\ntransfertool = globus\ntransfertype = bulk\nglobus_auth_app = MyGlobusAuthApp\n"})}),"\n",(0,r.jsx)(n.p,{children:"globus_auth_app is the application given in config.yml (see below)"}),"\n",(0,r.jsx)(n.h2,{id:"globus-configuration-file",children:"Globus Configuration File"}),"\n",(0,r.jsx)(n.p,{children:"The Globus configuration file ./lib/rucio/transfertool/config.yml is a file of\nYAML syntax and should include at minimum the registered application name, the\nclient ID and refresh token:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"globus:\n  apps:\n    RucioGlobusXferNativeApp:\n      client_id: a758...\n      refresh_token: Agjo...\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);