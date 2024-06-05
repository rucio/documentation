"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[312],{19471:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=o(74848),a=o(28453);const r={title:"rucio-judge-evaluator"},i=void 0,s={id:"bin/rucio-judge-evaluator",title:"rucio-judge-evaluator",description:"",source:"@site/../docs/bin/rucio-judge-evaluator.md",sourceDirName:"bin",slug:"/bin/rucio-judge-evaluator",permalink:"/documentation/bin/rucio-judge-evaluator",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-judge-evaluator.md",tags:[],version:"current",frontMatter:{title:"rucio-judge-evaluator"},sidebar:"docs",previous:{title:"rucio-judge-cleaner",permalink:"/documentation/bin/rucio-judge-cleaner"},next:{title:"rucio-judge-injector",permalink:"/documentation/bin/rucio-judge-injector"}},c={},d=[];function l(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"usage: rucio-judge-evaluator [-h] [--run-once] [--threads THREADS]\n                             [--sleep-time SLEEP_TIME] [--did-limit DID_LIMIT]\n\nThe Judge-Evaluator daemon is responsible for execution and reevaluation of replication rules. First it checks if there are DIDs that have changed content e.g. attached or detached DIDs.In case of a new attachment, the replication rule for the dataset has to be applied to the attached DID, too. If the attached DID has already a replica on a RSE that satisfies the RSE expression of the rule, then the lock counter of that replica gets increased. If it does not have any replica satisfying the rule, then a new replica has to be created. In case of a new detachment, the replica has to be removed or the lock counter of the replica has to be decreased, depending on which RSE the replica exist. If the DID is a dataset, its properties like size and length also get updated and also an entry is saved to mark a change for possible collection replicas which have to be updated by another daemon.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: total number of threads for this\n                        process\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n  --did-limit DID_LIMIT\n                        Maximum number of dids to evaluate\n\nSame RSEs:\nCreate a dataset with a replication rule and upload a file to the same RSE. Then attach it to the dataset::\n\n  $ rucio add-dataset mock:dataset\n  $ rucio add-rule mock:dataset 1 MOCK\n  $ rucio upload --scope mock --rse MOCK --name file filename.txt\n  $ rucio attach mock:dataset mock:file\n\nCheck the rules and locks for the dataset and the replica::\n\n  $ rucio list-rules mock:dataset\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  e95941c165d54e38b6e46990de06d3d4  root       mock:dataset  OK[0/0/0]               MOCK                     1                   2018-12-03 12:35:43\n\n  $ rucio list-rule mock:file\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  cfec9a944cdd4543b7267a34a2584631  root       mock:file     OK[1/0/0]               MOCK                     1                   2018-12-11 08:29:49\n\n  $ python\n  from rucio.db.sqla import session, models\n  from rucio.core.rse import get_rse_id\n  rse_id = get_rse_id('MOCK')\n  session.get_session().query(models.RSEFileAssociation).filter_by(name='file', scope='mock', rse_id=rse_id).first().lock_cnt // 1\n\nThere is one rule for the dataset which we created before and one lock and one rule for the replica which got created with the upload of the file.\n\nRun the daemon::\n\n  $ rucio-judge-evaluator --run-once\n\nCheck the locks for the replica again::\n\n  $ python\n  from rucio.db.sqla import session, models\n  from rucio.core.rse import get_rse_id\n  rse_id = get_rse_id('MOCK')\n  session.get_session().query(models.RSEFileAssociation).filter_by(name='file', scope='mock', rse_id=rse_id).first().lock_cnt // 2\n\nThe replica of the DID mock:file has now 2 locks on RSE MOCK, because it is protected by the replication rule of the dataset and the first replication rule\n\nDifferent RSEs:\nCreate a dataset with a replication rule and upload a file to another RSE. Then attach it to the dataset::\n\n  $ rucio add-dataset mock:dataset\n  $ rucio add-rule mock:dataset 1 MOCK\n  $ rucio upload --scope mock --rse MOCK2 --name file filename.txt\n  $ rucio attach mock:dataset mock:file\n\nCheck the rules and locks for the dataset and the replica::\n\n  $ rucio list-rules mock:dataset\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  e95941c165d54e38b6e46990de06d3d4  root       mock:dataset  OK[0/0/0]               MOCK                     1                   2018-12-03 12:35:43\n\n  $ rucio list-rule mock:file\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  cfec9a944cdd4543b7267a34a2584631  root       mock:file     OK[1/0/0]               MOCK2                    1                   2018-12-11 08:29:49\n\n  $ python\n  from rucio.db.sqla import session, models\n  from rucio.core.rse import get_rse_id\n  rse_id = get_rse_id('MOCK2')\n  session.get_session().query(models.RSEFileAssociation).filter_by(name='file', scope='mock', rse_id=rse_id).first().lock_cnt // 1\n\nThere is one rule for the dataset which we created before and one lock and one rule for the replica which got created with the upload of the file.\n\nRun the daemon::\n\n  $ rucio-judge-evaluator --run-once\n\nCheck the replicas for the DID mock:file::\n\n  $ python\n  from rucio.db.sqla import session, models\n  session.get_session().query(models.RSEFileAssociation).filter_by(name='file', scope='mock').first()\n  // [{'name': 'file','lock_cnt': 1, 'state': COPYING, 'scope': 'mock', 'rse_id': 'f81f366593754c01b0c340fa5ea0ab90'},\n  //  {'scope': 'mock', 'rse_id': '1330d5daee37474c88ba888101d7b859', 'name': 'file', 'state': AVAILABLE, 'lock_cnt': 1}]\n\nThe DID mock:file has now two replicas with one lock each.\nAs the file replica is attached to the dataset and the rule for the dataset specifies another RSE MOCK instead of the upload RSE, it has to be replicated to this RSE.\nTherefore a second replica in state COPYING got created on RSE MOCK.\n    \n"})})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>s});var n=o(96540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);