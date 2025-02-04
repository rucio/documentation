"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9109],{79687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"operator/multi_vo_rucio","title":"Multi-VO Rucio","description":"Multi-VO Rucio configuration allows a single instance of Rucio to support","source":"@site/../docs/operator/multi_vo_rucio.md","sourceDirName":"operator","slug":"/operator/multi_vo_rucio","permalink":"/documentation/operator/multi_vo_rucio","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/multi_vo_rucio.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1738676609000,"frontMatter":{"id":"multi_vo_rucio","title":"Multi-VO Rucio","sidebar_label":"Multi-VO Rucio"},"sidebar":"docs","previous":{"title":"A Kubernetes tutorial","permalink":"/documentation/operator/k8s_guide"},"next":{"title":"Monitoring","permalink":"/documentation/operator/monitoring"}}');var i=t(74848),a=t(28453);const s={id:"multi_vo_rucio",title:"Multi-VO Rucio",sidebar_label:"Multi-VO Rucio"},c=void 0,r={},l=[{value:"Changes to the Client",id:"changes-to-the-client",level:2},{value:"Changes to the rucio.cfg on the Server and Daemons",id:"changes-to-the-ruciocfg-on-the-server-and-daemons",level:2},{value:"Role of the super_root",id:"role-of-the-super_root",level:2},{value:"Access of super_root Functions",id:"access-of-super_root-functions",level:2},{value:"Starting a M-VO Instance",id:"starting-a-m-vo-instance",level:2},{value:"Creating VOs",id:"creating-vos",level:2},{value:"Long VO Name Mapping",id:"long-vo-name-mapping",level:2},{value:"Managing VOs",id:"managing-vos",level:2},{value:"Converting Existing Instances",id:"converting-existing-instances",level:2},{value:"Practicalities",id:"practicalities",level:2},{value:"S-VO to M-VO",id:"s-vo-to-m-vo",level:2},{value:"M-VO to S-VO",id:"m-vo-to-s-vo",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Multi-VO Rucio configuration allows a single instance of Rucio to support\nmultiple experiments or Virtual Organisations (VOs). Multi-VO Rucio are run by a\n"super_root" which administers the Rucio instance, creating VOs within Rucio,\neach VO is then administered by VO specific "root" accounts created with the VO\nthat deal with the VO requirements and needs. Each VO uses Rucio as a normal or\n"Single-VO" instance, meaning a Rucio instance can transition to support more\nVOs without significant disruption. Each VO\'s accounts, scopes and RSEs are\nassociated with their VO which ensures all rules and replicas are kept separate\nfrom other VOs using the instance.'}),"\n",(0,i.jsx)(n.h2,{id:"changes-to-the-client",children:"Changes to the Client"}),"\n",(0,i.jsxs)(n.p,{children:["To utilise the Rucio client against a Multi-VO Rucio the client needs to first\nknow if it is interacting with a multi-VO Rucio instance, then which VO the client\nshould be accessing. This is done in the ",(0,i.jsx)(n.code,{children:"rucio.cfg"})," as shown below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[common]\n...\nmulti_vo = True\n\n[client]\n...\nvo = abc\n"})}),"\n",(0,i.jsx)(n.h2,{id:"changes-to-the-ruciocfg-on-the-server-and-daemons",children:"Changes to the rucio.cfg on the Server and Daemons"}),"\n",(0,i.jsxs)(n.p,{children:["Similar settings need to be changed on the server and daemon rucio.cfg files as\nwell as on the client end. For the server, ",(0,i.jsx)(n.code,{children:"multi_vo"})," should also be set in the\nconfig file. For the daemons, another section needs to be added: this is to\nmap each VO to its own proxy certificate. Rucio uses this information when\nsubmitting and polling transfers to use the correct certificates."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[common]\n...\nmulti_vo = True\n\n[vo_certs]\n...\n<3 char vo name> = <path/to/vo/proxy>\n"})}),"\n",(0,i.jsx)(n.p,{children:"It is recommended that the proxies are placed in /tmp/x509up_[VO], and the\ncertificates and keys are placed in /opt/rucio/certs/[VO]/ and\n/opt/rucio/keys/[VO]/ respectively."}),"\n",(0,i.jsxs)(n.p,{children:["Unlike the Rucio client, ",(0,i.jsx)(n.code,{children:"vo"})," in the ",(0,i.jsx)(n.code,{children:"client"})," section should not be configured\nfor the server and daemons, unless specifically to ensure certain daemons act\nfor one VO alone:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[common]\n...\nmulti_vo = True\n"})}),"\n",(0,i.jsx)(n.p,{children:"For the daemons, files and configuration are needed to allow daemons to act on\nthe various VOs: this inludes the VO specific certificates, keys, and proxies,\nas well as an additional configuration section which maps each VO to its\nrespective x.509 authentication credentials. Rucio uses this information when\nsubmitting and polling transfers to use the correct certificates."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"[vo_certs]\n ...\n[3 char vo name] = [path/to/vo/proxy]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"role-of-the-super_root",children:"Role of the super_root"}),"\n",(0,i.jsxs)(n.p,{children:["For overall administration of Multi-VO Rucio another layer of admin role has\nbeen created outside of the VO structure. This means each VO has its own\nroot/admin accounts still retain their administrative role within a VO, for\nexample adding and editing accounts, adding and modifying RSEs for the VO.\nFunctions relating to the creation and management of VOs are handled by the\nsuper_root account. It is worth noting that the super_root account ",(0,i.jsx)(n.strong,{children:"cannot"})," be\nused to perform individual VO administration; the roles of super_root and root\nare distinct."]}),"\n",(0,i.jsx)(n.h2,{id:"access-of-super_root-functions",children:"Access of super_root Functions"}),"\n",(0,i.jsx)(n.p,{children:"As the super_root functions aren't intended for use by normal users of admins,\nthey do not have an implementation in the client or CLI."}),"\n",(0,i.jsxs)(n.p,{children:["The super_root functions can be accessed from the core or the\n:ref:",(0,i.jsx)(n.code,{children:"vo-rest-api"}),". Access to the functions through the API will require the VO\nendpoint to be added to the endpoints list used when setting up the server as it\nis disabled by default."]}),"\n",(0,i.jsx)(n.h2,{id:"starting-a-m-vo-instance",children:"Starting a M-VO Instance"}),"\n",(0,i.jsxs)(n.p,{children:["When bootstrapping the database as part of the Rucio installation, if M-VO is\nenabled in ",(0,i.jsx)(n.code,{children:"rucio.cfg"}),' then the super_root account is created automatically. The\ndefault VO "def" is also created, and the super_root acccount is associated with\nit. The identity used to access this account can be managed in the usual way.']}),"\n",(0,i.jsx)(n.h2,{id:"creating-vos",children:"Creating VOs"}),"\n",(0,i.jsxs)(n.p,{children:["When creating a new VO with the ",(0,i.jsx)(n.code,{children:"add_vo"})," function you need to specify the three\ncharacter identifier for the new VO, which can contain letters and numbers. This\nmust be unique for the instance (A long VO name can be enabled for usage if\nrequired, as shown in the ",(0,i.jsx)(n.a,{href:"#long-vo-name-mapping",children:(0,i.jsx)(n.code,{children:"Long VO Name Mapping"})}),"\nsection). A more complete description can also be optionally included, along\nwith an email to use for the root of this new VO. As the new VO is created, its\ncorresponding root account is also created, and has all identities associated\nwith super_root added to it. The identities for the VO root can then be\nconfigured as usual."]}),"\n",(0,i.jsx)(n.h2,{id:"long-vo-name-mapping",children:"Long VO Name Mapping"}),"\n",(0,i.jsx)(n.p,{children:"The rucio database stores all VO references as a single three-character tag for\nperformance reasons. It's possible to create aliases for these tag to allow\nusers/clients to specify long VO names when getting a token (and modifying VOs)\nand have these converted to the internal tag automatically. Long VO names should\nonly use the basic DNS name character set of alphanumeric characters, hyphen\nand dot (a-zA-Z0-9-.). The alias mappings are stored in the vo-map section of\nthe configs database table and can be edited via the commands below. The option\nname is the long VO name and the value is the short name; for example these can\nbe added using the CLI:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rucio-admin config set --section vo-map --option my.long.vo --value mlv\nrucio-admin config set --section vo-map --option another.vo --value ant\n"})}),"\n",(0,i.jsx)(n.p,{children:"You may specify more than one alias for a VO if required."}),"\n",(0,i.jsx)(n.h2,{id:"managing-vos",children:"Managing VOs"}),"\n",(0,i.jsxs)(n.p,{children:["Super_root can also change the description and email for a VO using the ",(0,i.jsx)(n.code,{children:"update_vo"}),"\nAPI call. If a VO root user loses access to their account, the super_root can\nassociate a new identity with it using ",(0,i.jsx)(n.code,{children:"recover_vo_root_identity"}),". Finally, a\nlist of current VOs and their descriptions is accessible via ",(0,i.jsx)(n.code,{children:"list_vos"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"converting-existing-instances",children:"Converting Existing Instances"}),"\n",(0,i.jsxs)(n.p,{children:["Rather than initialising a new Rucio instance to support multiple VOs, a\nsingle-VO instance of Rucio can be converted to a Multi-VO instance if desired.\nThis conversion allows the Rucio instance to expand the number of supported VOs\nwith minimal disruption. The tools to perform this can be found in\n",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/tools/convert_database_vo.py",children:(0,i.jsx)(n.code,{children:"rucio/tools/convert_database_vo.py"})}),",\nand further documentation on the ",(0,i.jsx)(n.a,{href:"#s-vo-to-m-vo",children:"single VO to multi VO"})," and\n",(0,i.jsx)(n.a,{href:"#m-vo-to-s-vo",children:"multi-VO to single VO"})," instances are found below."]}),"\n",(0,i.jsxs)(n.p,{children:["The fuction ",(0,i.jsx)(n.code,{children:"convert_to_mvo"})," facilitates the conversion of a single-VO instance\nto a multi-VO instance, where ",(0,i.jsx)(n.code,{children:"convert_to_svo"})," performs the opposite. VOs can\nalso be renamed using ",(0,i.jsx)(n.code,{children:"rename_vo"}),", or deleted using ",(0,i.jsx)(n.code,{children:"remove_vo"}),". The conversion\nfunctions are callable by using the command line with details on what each\nfunction requires to be carried out, as well as various optional arguments."]}),"\n",(0,i.jsxs)(n.p,{children:["Remember that after any database conversion tools are used to update the ",(0,i.jsx)(n.code,{children:"rucio.cfg"}),"\nappropriately, this may include adding the ",(0,i.jsx)(n.code,{children:"multi_vo = True"}),", as found in\n",(0,i.jsx)(n.a,{href:"#changes-to-the-ruciocfg-on-the-server-and-daemons",children:(0,i.jsx)(n.code,{children:"changes to the rucio.cfg section"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"These above tools will allow Rucio to change its VO support model. However,\nwhen converting an existing instance, any entries already in the database will\nnot be associated with a VO (or associated with their old one if previously in\nM-VO mode). In order to change these, direct operations on the database are\nrequired. These commands are generated using SQLAlchemy, and can either be run\ndirectly on the database or printed out and run manually."}),"\n",(0,i.jsx)(n.h2,{id:"practicalities",children:"Practicalities"}),"\n",(0,i.jsxs)(n.p,{children:['Before attempting to convert existing data, it is recommended that a backup of\nthe database is taken in case any issues arise. Furthermore, of the databases\nsupported by Rucio, only PostgreSQL has been tested on real data. Based on this\ntest (which was performed on a machine with 64GB memory and four Intel Xeon\nE5-2430 v2), the tables with 2 columns that needed updating were converted at a\nrate of 5GB of data per hour. However many tables do not need any changes, so\nthe process will likely be faster than this in practice. Another approach to\nspeed up the conversion is to skip the "history" tables, as these can be very\nlarge. Unlike other tables these do not have foreign key constraints set, and so\ndo not need to be updated in order to use the database. While the history will\nbe inaccessible from the new VO, it will still exist in the database and could\nbe accessed using the ',(0,i.jsx)(n.code,{children:"super_root"})," account if needed."]}),"\n",(0,i.jsx)(n.h2,{id:"s-vo-to-m-vo",children:"S-VO to M-VO"}),"\n",(0,i.jsxs)(n.p,{children:["Before starting, ensure that ",(0,i.jsx)(n.code,{children:"multi_vo"})," is set to ",(0,i.jsx)(n.code,{children:"True"})," in the config file. The\nSQL commands needed to convert the database involve dropping foreign key\nconstraints that affect accounts/scopes, then altering the relevant columns,\nbefore re-adding the constraints. The 3 character identifier for the VO, a full\ndescription and an admin email should be provided:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ tools/convert_database_vo.py convert_to_mvo new \"New VO for existing data\" rucio@email.com\nALTER TABLE account_limits DROP CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\";\n...\nUPDATE account_limits SET account=(split_part(account_limits.account, '@', 1) \\\n  || CAST('@new' AS CHAR(4))) WHERE \\\n    split_part(account_limits.account, '@', 2) = '';\n...\nALTER TABLE account_limits ADD CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\" \\\n  FOREIGN KEY(account) REFERENCES accounts (account);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, no changes will be made to the database by running the script,\nand so the SQL will need to be run manually. After running the commands, a\n",(0,i.jsx)(n.code,{children:"super_root"})," account should be setup to allow administrative functions like\nadding more VOs:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ python\n>>> from rucio.db.sqla.util import create_root_account\n>>> create_root_account(create_counters=False)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively by specifying ",(0,i.jsx)(n.code,{children:"--commit_changes"})," the script will attempt to modify\nthe database as it runs, however this requires the account used by the Rucio\ninstance to access the database to be the owner of the the tables. In this case,\nthe ",(0,i.jsx)(n.code,{children:"super_root"})," account can be added as part of the script by passing the\nargument ",(0,i.jsx)(n.code,{children:"--create_super_root"}),". If there is an error during the conversion, then\nnone of the changes will be committed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ tools/convert_database_vo.py --commit_changes \\\n  convert_to_mvo new "New VO for existing data" rucio@email.com \\\n  --create_super_root\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, there is the option to skip the (potentially very large) tables of\nhistorical data using ",(0,i.jsx)(n.code,{children:"--skip_history"}),". In this case the commands to alter those\ntables are omitted:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ tools/convert_database_vo.py --skip_history \\\n  convert_to_mvo new "New VO for existing data" rucio@email.com\n'})}),"\n",(0,i.jsx)(n.h2,{id:"m-vo-to-s-vo",children:"M-VO to S-VO"}),"\n",(0,i.jsxs)(n.p,{children:["Before starting, ensure that ",(0,i.jsx)(n.code,{children:"multi_vo"})," is set to ",(0,i.jsx)(n.code,{children:"True"})," in the config file\n(this option can be removed after completing the conversion). The first stage of\nthe conversion is the same as before, dropping foreign key constraints and\nrenaming the entries that were associated with the old VO. The name of this VO\nis the only required argument:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ tools/convert_database_vo.py\nconvert_to_svo old ALTER TABLE account_limits DROP CONSTRAINT\n\"ACCOUNT_LIMITS_ACCOUNT_FK\"; ...  UPDATE account_limits SET\naccount=split_part(account_limits.account, '@', 1) WHERE\nsplit_part(account_limits.account, '@', 2) = 'old'; ...  ALTER TABLE\naccount_limits ADD CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\" FOREIGN KEY(account)\nREFERENCES accounts (account);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, data associated with any other VOs is left in the database, but will\nbe inaccessible to Rucio users.\nThese entries can be completely deleted from the database\nby pasing the ",(0,i.jsx)(n.code,{children:"--delete_vos"})," argument."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tools/convert_database_vo.py convert_to_svo old --delete_vos ...  \\\n  DELETE FROM account_limits WHERE \\\n    split_part(account_limits.account, '@', 2) = 'xyz'; \\\n  ...  DELETE FROM account_limits WHERE \\\n    split_part(account_limits.account, '@', 2) = '123'; ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once again, historical tables skipped with ",(0,i.jsx)(n.code,{children:"--skip_history"}),", and the commands\ncan be run directly against the database using the ",(0,i.jsx)(n.code,{children:"--commit_changes"})," argument;\nif this is not set then the ",(0,i.jsx)(n.code,{children:"super_root"})," account should be manually deleted\nafter running the SQL:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ python\n>>> from rucio.common.types import InternalAccount\n>>> from rucio.core.account import del_account\n>>> del_account(InternalAccount('super_root', vo='def'))\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);