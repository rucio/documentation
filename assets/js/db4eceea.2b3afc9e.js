"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9109],{97451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"operator/multi_vo_rucio","title":"Multi-VO Rucio","description":"This section provides an overview of using Rucio for multiple virtual","source":"@site/../docs/operator/multi_vo_rucio.md","sourceDirName":"operator","slug":"/operator/multi_vo_rucio","permalink":"/documentation/operator/multi_vo_rucio","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/multi_vo_rucio.md","tags":[],"version":"current","lastUpdatedBy":"Martin Barisits","lastUpdatedAt":1732785405000,"frontMatter":{"id":"multi_vo_rucio","title":"Multi-VO Rucio","sidebar_label":"Multi-VO Rucio"},"sidebar":"docs","previous":{"title":"A Kubernetes tutorial","permalink":"/documentation/operator/k8s_guide"},"next":{"title":"Monitoring","permalink":"/documentation/operator/monitoring"}}');var a=t(74848),i=t(28453);const s={id:"multi_vo_rucio",title:"Multi-VO Rucio",sidebar_label:"Multi-VO Rucio"},r=void 0,c={},d=[{value:"Changes to the Client",id:"changes-to-the-client",level:2},{value:"Changes to the rucio.cfg on the Server and Daemons",id:"changes-to-the-ruciocfg-on-the-server-and-daemons",level:2},{value:"Role of the super_root",id:"role-of-the-super_root",level:2},{value:"Access of super_root Functions",id:"access-of-super_root-functions",level:2},{value:"Starting a M-VO Instance",id:"starting-a-m-vo-instance",level:2},{value:"Creating VOs",id:"creating-vos",level:2},{value:"Managing VOs",id:"managing-vos",level:2},{value:"Long VO Name Mapping",id:"long-vo-name-mapping",level:2},{value:"Converting Existing Instances",id:"converting-existing-instances",level:2},{value:"Practicalities",id:"practicalities",level:2},{value:"S-VO to M-VO",id:"s-vo-to-m-vo",level:2},{value:"M-VO to S-VO",id:"m-vo-to-s-vo",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:'This section provides an overview of using Rucio for multiple virtual\norganizations (VOs) on a single instance with the "Multi-VO" feature. Rather\nthan each VO having to set up an entire instance by themselves, they can share\nthe same server and database which are run by a central "super_root", and\ncontinue to use Rucio as they would a normal or "Single-VO" instance. Their\naccounts, scopes and RSEs are associated with their VO which ensures all rules\nand replicas are kept separate from other VOs using the instance.'}),"\n",(0,a.jsx)(n.h2,{id:"changes-to-the-client",children:"Changes to the Client"}),"\n",(0,a.jsxs)(n.p,{children:["At the CLI and client level there are few changes to how Rucio is used. These\ncases, such as optional arguments for VO, are covered in documentation for the\naffected function. The main change is the addition of two options in the\n",(0,a.jsx)(n.code,{children:"rucio.cfg"})," file, one to flag that the instance is being run in M-VO mode and\nanother to specify the VO the users belong to:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:"[common]\n...\nmulti_vo = True\n\n[client]\n...\nvo = abc\n"})}),"\n",(0,a.jsx)(n.h2,{id:"changes-to-the-ruciocfg-on-the-server-and-daemons",children:"Changes to the rucio.cfg on the Server and Daemons"}),"\n",(0,a.jsxs)(n.p,{children:["Similar settings need to be changed on the server and daemon rucio.cfg files as\nwell as on the client end.  For the server ",(0,a.jsx)(n.code,{children:"multi_vo"})," should also be set in the\nconfig file.  For the daemons another section is needed to be added, this is to\nmap each VO to its own proxy certificate. Rucio uses this information when\nsubmitting and polling transfers to use the correct certificates."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:"[vo_certs]\n...\n<3 char vo name> = <path/to/vo/proxy>\n"})}),"\n",(0,a.jsx)(n.p,{children:"It is recommended that the proxies are placed in /tmp/x509up_[VO], and the\ncertificates and keys are placed in /opt/rucio/certs/[VO]/ and\n/opt/rucio/keys/[VO]/ respectively."}),"\n",(0,a.jsxs)(n.p,{children:["However, ",(0,a.jsx)(n.code,{children:"vo"})," should not be set for the server or the daemons as these parts of\nRucio are not associated with a single VO. If ",(0,a.jsx)(n.code,{children:"multi_vo"})," is not set, or set to\nFalse, then Rucio will operate normally."]}),"\n",(0,a.jsxs)(n.p,{children:["Similar settings need to be changed on the server and daemon rucio.cfg files as\nwell as on the client end.  For the server ",(0,a.jsx)(n.code,{children:"multi_vo"})," should also be set in the\nconfig file.  For the daemons another section is needed to be added, this is to\nmap each VO to its own proxy certificate. Rucio uses this information when\nsubmitting and polling transfers to use the correct certificates."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"[vo_certs]\n ...\n[3 char vo name] = [path/to/vo/proxy]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["However, ",(0,a.jsx)(n.code,{children:"vo"})," should\nnot be set for the server or the daemons as these parts of Rucio are not\nassociated with a single VO. If ",(0,a.jsx)(n.code,{children:"multi_vo"})," is not set, or set to False, then\nRucio will operate normally."]}),"\n",(0,a.jsx)(n.h2,{id:"role-of-the-super_root",children:"Role of the super_root"}),"\n",(0,a.jsxs)(n.p,{children:["While root accounts still retain their administrative role within a VO, for\nexample adding RSEs and accounts, functions relating to the creation and\nmanagement of VOs is handled by the super_root account, a concept introduced\nwith M-VO Rucio. It is worth noting that the super_root account ",(0,a.jsx)(n.strong,{children:"cannot"})," be\nused to perform individual VO administration; the roles of super_root and root\nare distinct."]}),"\n",(0,a.jsx)(n.h2,{id:"access-of-super_root-functions",children:"Access of super_root Functions"}),"\n",(0,a.jsxs)(n.p,{children:["As the super_root functions aren't intended for use by normal users of admins,\nthey do not have an implementation in the client or CLI. They can be accessed\nfrom the core or the :ref:",(0,a.jsx)(n.code,{children:"vo-rest-api"}),", however the latter will require the VO\nendpoint to be added to the aliases file used when setting up the server as it\nis disabled by default."]}),"\n",(0,a.jsx)(n.h2,{id:"starting-a-m-vo-instance",children:"Starting a M-VO Instance"}),"\n",(0,a.jsxs)(n.p,{children:["When bootstrapping the database as part of the Rucio installation, if M-VO is\nenabled in ",(0,a.jsx)(n.code,{children:"rucio.cfg"}),' then the super_root account is created automatically. The\ndefault VO "def" is also created, and the super_root acccount is associated with\nit. The identity used to access this account can be managed in the usual way.']}),"\n",(0,a.jsx)(n.h2,{id:"creating-vos",children:"Creating VOs"}),"\n",(0,a.jsxs)(n.p,{children:["When creating a new VO with the ",(0,a.jsx)(n.code,{children:"add_vo"})," function you need to specify the three\ndigit identifier for the new VO, which can contain letters and numbers. This\nmust be unique for the instance. A more complete description can also be\noptionally included, along with an email to use for the root of this new VO. In\naddition to creating the new VO, a root account is also created for this VO, and\nhas all identities associated with super_root added to it. The identities for\nthe new root can then be configured as usual."]}),"\n",(0,a.jsx)(n.h2,{id:"managing-vos",children:"Managing VOs"}),"\n",(0,a.jsxs)(n.p,{children:["In addition to creating VOs, the description and email for a VO can be altered\nusing ",(0,a.jsx)(n.code,{children:"update_vo"}),". If the root user of a VO loses access to their account, the\nsuper_root can associate a new identity with it using\n",(0,a.jsx)(n.code,{children:"recover_vo_root_identity"}),". Finally, a list of current VOs and their\ndescriptions is accessible via ",(0,a.jsx)(n.code,{children:"list_vos"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"long-vo-name-mapping",children:"Long VO Name Mapping"}),"\n",(0,a.jsx)(n.p,{children:"The rucio database stores all VO references as a single three-character tag for\nperformance reasons. It's possible to create aliases for these tag to allow\nusers/clients to specify long VO names when getting a token (and modifying VOs)\nand have these converted to the internal tag automatically. Long VO names should\nonly use the basic DNS name character set of alphanumber charaters, hyphen and\ndot (a-zA-Z0-9-.). The alias mappings are stored in the vo-map section of the\nconfigs database table and can be edited via the usual methods for modifying\nthis config. The option name is the long VO name and the value is the short\nname; for example these can be added using the CLI:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rucio-admin config set --section vo-map --option my.long.vo --value mlv\nrucio-admin config set --section vo-map --option another.vo --value ant\n"})}),"\n",(0,a.jsx)(n.p,{children:"You may specify more than one alias for a VO if required."}),"\n",(0,a.jsx)(n.h2,{id:"converting-existing-instances",children:"Converting Existing Instances"}),"\n",(0,a.jsx)(n.p,{children:"As opposed to starting a new M-VO instance from scratch, it may be desirable to\nconvert the database for an existing (S-VO) Rucio instance into a M-VO instance\nso that additional VOs can be added without disrupting the original VO or\nneeding to create a second instance. Conversely, one VO within a M-VO instance\nmay grow to the point where it needs its own dedicated instance, and so\nconverting data from M-VO to S-VO may also be desirable. These operations can be\nperformed using utility functions included with Rucio."}),"\n",(0,a.jsx)(n.p,{children:"As mentioned above, in order to configure a M-VO instance of Rucio only the\nconfig file needs to change. However for an existing instance any entries\nalready in the database will not be associated with a VO (or associated with\ntheir old one if previously in M-VO mode). In order to change these, direct\noperations on the database are required. These commands are generated using\nSQLAlchemy, and can either be run directly on the database or printed out and\nrun manually."}),"\n",(0,a.jsx)(n.h2,{id:"practicalities",children:"Practicalities"}),"\n",(0,a.jsxs)(n.p,{children:['Before attempting to convert existing data, it is recommended that a backup of\nthe database is taken in case an issue arises. Furthermore, of the databases\nsupported by Rucio, only PostgreSQL has been tested on real data. Based on this\ntest (which was performed on a machine with 64GB memory and four Intel Xeon\nE5-2430 v2), the tables with 2 columns that needed updating were converted at a\nrate of 5GB of data per hour. However many tables do not need any changes, so\nthe process will likely be faster than this in practice. Another approach to\nspeed up the conversion is to skip the "history" tables, as these can be very\nlarge. Unlike other tables these do not have foreign key constraints set, and so\ndo not need to be updated in order to use the database. While the history will\nbe inaccessible from the new VO, it will still exist in the database and could\nbe accessed using the ',(0,a.jsx)(n.code,{children:"super_root"})," account if needed."]}),"\n",(0,a.jsx)(n.h2,{id:"s-vo-to-m-vo",children:"S-VO to M-VO"}),"\n",(0,a.jsxs)(n.p,{children:["Before starting, ensure that ",(0,a.jsx)(n.code,{children:"multi_vo"})," is set to ",(0,a.jsx)(n.code,{children:"True"})," in the config file.\nThe SQL commands needed to convert the database involve dropping foreign key\nconstraints that affect accounts/scopes, then altering the relevant columns,\nbefore re-adding the constraints. The 3 character identifier for the VO, a full\ndescription and an admin email should be provided:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ tools/convert_database_vo.py convert_to_mvo new \"New VO for existing data\" rucio@email.com\nALTER TABLE account_limits DROP CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\";\n...\nUPDATE account_limits SET account=(split_part(account_limits.account, '@', 1) \\\n  || CAST('@new' AS CHAR(4))) WHERE \\\n    split_part(account_limits.account, '@', 2) = '';\n...\nALTER TABLE account_limits ADD CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\" \\\n  FOREIGN KEY(account) REFERENCES accounts (account);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, no changes will be made to the database by running the script,\nand so the SQL will need to be run manually. After running the commands, a\n",(0,a.jsx)(n.code,{children:"super_root"})," account should be setup to allow administrative functions like\nadding more VOs:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ python\n>>> from rucio.db.sqla.util import create_root_account\n>>> create_root_account(create_counters=False)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively by specifying ",(0,a.jsx)(n.code,{children:"--commit_changes"})," the script will attempt to\nmodify the database as it runs, however this requires the account used by the\nRucio instance to access the database to be the owner of the the tables. In\nthis case, the ",(0,a.jsx)(n.code,{children:"super_root"})," account can be added as part of the script by\npassing the argument ",(0,a.jsx)(n.code,{children:"--create_super_root"}),". If there is an error during the\nconversion, then none of the changes will be committed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'$ tools/convert_database_vo.py --commit_changes \\\n  convert_to_mvo new "New VO for existing data" rucio@email.com \\\n  --create_super_root\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Finally, there is the option to skip the (potentially very large) tables of\nhistorical data using ",(0,a.jsx)(n.code,{children:"--skip_history"}),". In this case the commands to alter those\ntables are omitted:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'$ tools/convert_database_vo.py --skip_history \\\n  convert_to_mvo new "New VO for existing data" rucio@email.com\n'})}),"\n",(0,a.jsx)(n.h2,{id:"m-vo-to-s-vo",children:"M-VO to S-VO"}),"\n",(0,a.jsxs)(n.p,{children:["Before starting, ensure that ",(0,a.jsx)(n.code,{children:"multi_vo"})," is set to ",(0,a.jsx)(n.code,{children:"True"})," in the config file\n(this option can be removed after completing the conversion). The first stage of\nthe conversion is the same as before, dropping foreign key constraints and\nrenaming the entries that were associated with the old VO. The name of this VO\nis the only required argument:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ tools/convert_database_vo.py\nconvert_to_svo old ALTER TABLE account_limits DROP CONSTRAINT\n\"ACCOUNT_LIMITS_ACCOUNT_FK\"; ...  UPDATE account_limits SET\naccount=split_part(account_limits.account, '@', 1) WHERE\nsplit_part(account_limits.account, '@', 2) = 'old'; ...  ALTER TABLE\naccount_limits ADD CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\" FOREIGN KEY(account)\nREFERENCES accounts (account);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default data associated with any other VOs\nis left in the database, but will be inaccessible to Rucio users. By setting\npass the argument ",(0,a.jsx)(n.code,{children:"--delete_vos"}),", these entries will be deleted from the\ndatabase completely:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"tools/convert_database_vo.py convert_to_svo old --delete_vos ...  \\\n  DELETE FROM account_limits WHERE \\\n    split_part(account_limits.account, '@', 2) = 'xyz'; \\\n  ...  DELETE FROM account_limits WHERE \\\n    split_part(account_limits.account, '@', 2) = '123'; ...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Once again, historical tables skipped with ",(0,a.jsx)(n.code,{children:"--skip_history"}),", and the commands\ncan be run directly against the database using the ",(0,a.jsx)(n.code,{children:"--commit_changes"})," argument;\nif this is not set then the ",(0,a.jsx)(n.code,{children:"super_root"})," account should be manually deleted\nafter running the SQL:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ python\n>>> from rucio.common.types import InternalAccount\n>>> from rucio.core.account import del_account\n>>> del_account(InternalAccount('super_root', vo='def'))\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);