"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Monitoring",sidebar_label:"Monitoring"},l=void 0,c={unversionedId:"operator/monitoring",id:"operator/monitoring",title:"Monitoring",description:"There are three different monitoring components:",source:"@site/../docs/operator/monitoring.md",sourceDirName:"operator",slug:"/operator/monitoring",permalink:"/documentation/operator/monitoring",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/monitoring.md",tags:[],version:"current",lastUpdatedBy:"Anton Schwarz",lastUpdatedAt:1692888845,formattedLastUpdatedAt:"Aug 24, 2023",frontMatter:{title:"Monitoring",sidebar_label:"Monitoring"},sidebar:"docs",previous:{title:"Multi-VO Rucio",permalink:"/documentation/operator/multi_vo_rucio"},next:{title:"Database Operations",permalink:"/documentation/operator/database"}},u={},d=[{value:"Internal Monitoring",id:"internal-monitoring",level:2},{value:"Set up the Rucio internal monitoring dashboard",id:"set-up-the-rucio-internal-monitoring-dashboard",level:3},{value:"The list of Rucio internal metrics",id:"the-list-of-rucio-internal-metrics",level:3},{value:"Transfer monitoring",id:"transfer-monitoring",level:2},{value:"Set up the Rucio internal monitoring dashboard",id:"set-up-the-rucio-internal-monitoring-dashboard-1",level:3},{value:"Transfer events",id:"transfer-events",level:3},{value:"Deletion events",id:"deletion-events",level:3},{value:"Access monitoring",id:"access-monitoring",level:2},{value:"Rucio database dumping",id:"rucio-database-dumping",level:2},{value:"Footnotes",id:"footnotes",level:2}],p={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are three different monitoring components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rucio internal monitoring using Graphite/Grafana"),(0,o.kt)("li",{parentName:"ul"},"Transfer monitoring using the messages sent by Hermes"),(0,o.kt)("li",{parentName:"ul"},"File/Dataset Access monitoring using the traces")),(0,o.kt)("h2",{id:"internal-monitoring"},"Internal Monitoring"),(0,o.kt)("p",null,"This is to monitor the internals of Rucio servers and daemons, e.g., submission\nrate of the conveyor, state of conveyor queues, reaper deletion rate, server\nresponse times, server active session, etc. We use Graphite",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' for this. It\'s\neasy to setup and then you have to point your Rucio instance to the Graphite\nserver using the \\"carbon_server" options in the "monitor" section in\netc/rucio.cfg.'),(0,o.kt)("p",null,'The different Rucio components will then send metrics using those "record"\nfunctions you will find all over the code. Graphite has a built-in web interface\nto show graphs but more comfortable to use is the Grafana',(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," tool."),(0,o.kt)("p",null,"The internal monitoring functions are defined in core/monitor.py, it includes:"),(0,o.kt)("p",null,"1) record_counter. This is to send the StatsD counter metrics. Counters are the\nmost basic and default type. They are treated as a count of a type of event per\nsecond, and are, in Graphite, typically averaged over one minute. That is, when\nlooking at a graph, you are usually seeing the average number of events per\nsecond during a one-minute period."),(0,o.kt)("p",null,"2) record_timer. Timers are meant to track how long something took. They are an\ninvaluable tool for tracking application performance. The statsd server collects\nall timers under the stats.timers prefix, and will calculate the lower bound,\nmean, 90th percentile, upper bound, and count of each timer for each period (by\nthe time you see it in Graphite, that\u2019s usually per minute)."),(0,o.kt)("p",null,"3) record_timer_block. This is the same to record_timer, just for simple using,\nto calculate timer of a certain code block."),(0,o.kt)("p",null,"4) record_gauge. Gauges are a constant data type. They are not subject to\naveraging, and they don\u2019t change unless you change them. That is, once you set a\ngauge value, it will be a flat line on the graph until you change it again."),(0,o.kt)("h3",{id:"set-up-the-rucio-internal-monitoring-dashboard"},"Set up the Rucio internal monitoring dashboard"),(0,o.kt)("p",null,"Set up a rucio server for development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/rucio/rucio.git\ndocker-compose --file etc/docker/dev/docker-compose.yml up -d\n")),(0,o.kt)("p",null,"The command will fire up four containers: dev_rucio_1, dev_graphite_1,\ndev_mysql_1, dev_activemq_1. Dev_graphite_1 is the one collecting internal\nmetrics from Rucio. The configurations of Rucio internal metrics sender are\ndefined under the ","[monitor]"," section of rucio.cfg. Change the carbon_server and\ncarbon_port according to your setting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"[monitor]\ncarbon_server = graphite\ncarbon_port = 8125\nuser_scope = docker\n")),(0,o.kt)("p",null,"The Graphite builtin web page is on port 80 of the host. To use Grafana, setup\nGrafana and enable the graphite data source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull grafana/grafana\ndocker run -d --name=grafana -p 3000:3000 grafana/grafana\n")),(0,o.kt)("p",null,'The Grafana web-portal is on port 3000 of the host. Add one data source of the\ntype Graphite, choose access method to "Browser" and set URL to ',(0,o.kt)("a",{parentName:"p",href:"http://ip:80"},"http://ip:80"),",\nwhere ip is the address of the server hosting the Graphite container\n",(0,o.kt)("inlineCode",{parentName:"p"},"dev_graphite_1"),"."),(0,o.kt)("p",null,"A set of pre-defined Grafana Rucio internal plots is provided here\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/tools/monitoring/visualization/rucio-internal.json"},"https://github.com/rucio/rucio/blob/master/tools/monitoring/visualization/rucio-internal.json"),".\nUsers could import them directly into Grafana."),(0,o.kt)("h3",{id:"the-list-of-rucio-internal-metrics"},"The list of Rucio internal metrics"),(0,o.kt)("p",null,"1) Core"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"credential.signswift, credential.signs3 (timer)\ntrace.nongrid_trace\ncore.request.* (counter)\ncore.request.archive_request.* (timer)\nrule.add_rule, rule.add_rule.*, rule.delete_rule, rule.evaluate_did_detach, rule.evaluate_did_attach.(timer)\ntrace.trace (counter)\n")),(0,o.kt)("p",null,"2) Transfertool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"transfertool.fts3.delegate_proxy.success.*, \\\n  transfertool.fts3.delegate_proxy.fail.* (timer)\ntransfertool.fts3.submit_transfer.[externalhost] (timer)\ntransfertool.fts3.[externalhost].submission.success/failure (counter)\ntransfertool.fts3.[externalhost].cancel.success/failure (counter)\ntransfertool.fts3.[externalhost].update_priority.success/failure  (counter)\ntransfertool.fts3.[externalhost].query.success/failure  (counter)\ntransfertool.fts3.[externalhost].whoami.failure (counter)\ntransfertool.fts3.[externalhost].Version.failure (counter)\ntransfertool.fts3.[externalhost].query_details.failure (counter)\ntransfertool.fts3.[externalhost].bulk_query.failure (counter)\ntransfertool.fts3.[externalhost].query_latest.failure (counter)\ntransfertool.fts3myproxy.[externalhost].submission.success/failure (counter)\n")),(0,o.kt)("p",null,"3) Judge"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"rule.judge.exceptions.*\n")),(0,o.kt)("p",null,"4) Transmogrified"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"transmogrifier.addnewrule.errortype.* (counter)\ntransmogrifier.addnewrule.activity.* (counter)\ntransmogrifier.did.*.processed (counter)\n")),(0,o.kt)("p",null,"5) Tracer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"daemons.tracer.kronos.* (counter)\n")),(0,o.kt)("p",null,"6) Reaper"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"reaper.list_unlocked_replicas, reaper.delete_replicas (timer)\nreaper.deletion.being_deleted, reaper.deletion.done (counter)\ndaemons.reaper.delete.[scheme].[rse] (timer)\n")),(0,o.kt)("p",null,"7) Undertaker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"undertaker.delete_dids, undertaker.delete_dids.exceptions.LocksDetected (counter)\nundertaker.rules, undertaker.parent_content, undertaker.content, \\\n  undertaker.dids (timer)\nundertaker.content.rowcount (counter)\n")),(0,o.kt)("p",null,"8) Replicarecover"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"replica.recoverer.exceptions.* (counter)\n")),(0,o.kt)("p",null,"9) Hermes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"daemons.hermes.reconnect.* (counter)\n")),(0,o.kt)("p",null,"10) Conveyor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"daemons.conveyor.[submitter].submit_bulk_transfer.per_file, \\\n  daemons.conveyor.[submitter].submit_bulk_transfer.files (timer)\ndaemons.conveyor.[submitter].submit_bulk_transfer (counter)\ndaemons.conveyor.finisher.000-get_next (timer)\ndaemons.conveyor.finisher.handle_requests (timer & counter)\ndaemons.conveyor.common.update_request_state.request-requeue_and_archive (timer)\ndaemons.conveyor.poller.000-get_next (timer)\ndaemons.conveyor.poller.bulk_query_transfers (timer)\ndaemons.conveyor.poller.transfer_lost (counter)\ndaemons.conveyor.poller.query_transfer_exception (counter)\ndaemons.conveyor.poller.update_request_state.* (counter)\ndaemons.conveyor.receiver.error\ndaemons.conveyor.receiver.message_all\ndaemons.conveyor.receiver.message_rucio\ndaemons.conveyor.receiver.update_request_state.*\ndaemons.conveyor.receiver.set_transfer_update_time\ndaemons.messaging.fts3.reconnect.*\ndaemons.conveyor.stager.get_stagein_transfers.per_transfer, \\\n  daemons.conveyor.stager.get_stagein_transfers.transfer (timer)\ndaemons.conveyor.stager.get_stagein_transfers (count)\ndaemons.conveyor.stager.bulk_group_transfer (timer)\ndaemons.conveyor.submitter.get_stagein_transfers.per_transfer, \\\n  daemons.conveyor.submitter.get_stagein_transfers.transfer (timer)\ndaemons.conveyor.submitter.get_stagein_transfers (count)\ndaemons.conveyor.submitter.bulk_group_transfer (timer)\ndaemons.conveyor.throttler.set_rse_transfer_limits.\\\n  [rse].max_transfers/transfers/waitings (gauge)\ndaemons.conveyor.throttler.delete_rse_transfer_limits.[rse] (counter)\ndaemons.conveyor.throttler.delete_rse_transfer_limits.[activity].[rse] (counter)\ndaemons.conveyor.throttler.set_rse_transfer_limits.[activitiy].[rse] (gauge)\ndaemons.conveyor.throttler.release_waiting_requests.[activity].[rse].[account] (counter)\n")),(0,o.kt)("p",null,"11) Necromancer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"necromancer.badfiles.lostfile, necromancer.badfiles.recovering (counter)\n")),(0,o.kt)("h2",{id:"transfer-monitoring"},"Transfer monitoring"),(0,o.kt)("p",null,"If a transfer is submitted, queued, waiting, done or failed messages are sent to\nActiveMQ via Hermes and are also archived in the messages_history table. Same is\ntrue for deletions. In the case of ATLAS we have a dedicated monitoring\ninfrastructure that reads the messages from\n",(0,o.kt)("a",{parentName:"p",href:"https://activemq.apache.org"},"ActiveMQ"),", aggregates them and then writes the\naggregated data into ElasticSearch/InfluxDB from where it then can be visualised\nusing Kibana/Grafana."),(0,o.kt)("h3",{id:"set-up-the-rucio-internal-monitoring-dashboard-1"},"Set up the Rucio internal monitoring dashboard"),(0,o.kt)("p",null,"1) Configure Rucio"),(0,o.kt)("p",null,"Rucio need to be configured to enable the message broker. In Rucio, message are\nsent by the Hermes daemon. Settings are defined in therucio.cfg under the\n","[messaging-hermes]"," section"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},"[messaging-hermes]\nusername =\npassword =\nport = 61613\nnonssl_port = 61613\nuse_ssl = False\nssl_key_file = /etc/grid-security/hostkey.pem\nssl_cert_file = /etc/grid-security/hostcert.pem\ndestination = /topic/rucio.events\nbrokers = activemq\nvoname = atlas\nemail_from =\nemail_test =\n")),(0,o.kt)("p",null,'The default settings are listed above. If ssl is not used, set use_ssl to False\nand define username and password. They should be "admin", "admin" for the\ndefault activemq settings. If you are not using the containers created by the\ndocker-compose command, change the brokers and port to the server hosting the\nmessage queue.'),(0,o.kt)("p",null,"2) Setup Elasticsearch and Kibana"),(0,o.kt)("p",null,"Next is to setup and configure Elasticsearch and Kibana for storing and\nvisualising the messages. This is an example of creating them in containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d \\\n  -p 9200:9200 \\\n  -p 9300:9300 \\\n  -e "discovery.type=single-node" \\\n  --name elasticsearch \\\n  docker.elastic.co/elasticsearch/elasticsearch:7.8.1\n\ndocker run -d \\\n  --link elasticsearch \\\n  -p 5601:5601 \\\n  --name kibana \\\n  docker.elastic.co/kibana/kibana:7.8.1\n')),(0,o.kt)("p",null,"3) Import Elasticsearch indices"),(0,o.kt)("p",null,"Before transferring messages from the message queue to Elasticsearch, indices\nneed to be defined in Elasticsearch. This is a list of the message formats of\nRucio."),(0,o.kt)("h3",{id:"transfer-events"},"Transfer events"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsi"},"{\n  created_at: when the message was created (yyyy-MM-dd HH:mm:ss.SSSSSS)\n  event_type: type of this event (transfer-submitted, \\\n    transfer-submittion_failed, transfer-queued, transfer-failed, \\\n    transfer-done)\n  payload: {\n    account: account submitting the request\n    activity: activity of the request\n    bytes: size of the transferred file (byte)\n    checksum-adler: checksum using adler algorithm\n    checksum-md5: checksum using md5 alrogithm\n    created_at: Time when the message was created (yyyy-MM-dd HH:mm:ss.SSSSSS)\n    dst-rse: destination rse\n    dst-type: type of destination rse (disk, tape)\n    dst-url: destination url of the transferred file\n    duration: duration of the transfer (second)\n    event_type: type of this event (transfer-submitted, \\\n      transfer-submittion_failed, transfer-queued, \\\n      transfer-failed, transfer-done)\n    file-size: same as bytes\n    guid: guid of the transfer\n    name: name of transferred file\n    previous-request-id: id of previous request\n    protocol: transfer protocol\n    reason: reason of the failure\n    request-id: id of this request\n    scope: scope of the transferred data\n    src-rse: source rse\n    src-type: type of source rse (disk, tape)\n    src-url: source file url\n    started_at: start time of the transfer\n    submitted_at: submittion time of the transfer\n    tool-id: id of the transfer tool in rucio (rucio-conveyor)\n    transfer-endpoint: endpoint holder of the transfer (fts)\n    transfer-id: uuid of this transfer\n    transfer-link: link of this transfer (in form of fts url)\n    transferred_at: done time of this transfer\n  }\n}\n")),(0,o.kt)("h3",{id:"deletion-events"},"Deletion events"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"{\n  created_at: when the message was created (yyyy-MM-dd HH:mm:ss.SSSSSS)\n  event_type: type of this event (deletion-done,deletion-failed)\n  payload: {\n    scope: scope of the deleted replica\n    name: name of the deleted replica\n    rse: rse holding the deleted replica\n    file-size: size of the file\n    bytes: size of the file\n    url: url of the file\n    duration: duration of the deletion\n    protocol: prococol used in the deletion\n    reason: reason of the failure\n  }\n}\n")),(0,o.kt)("p",null,"The formats of them are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"rucio-transfer.json\n<https://github.com/rucio/rucio/blob/master/tools/monitoring/rucio-transfer.json>"),(0,o.kt)("strong",{parentName:"p"},"\nand ",(0,o.kt)("inlineCode",{parentName:"strong"},"rucio_deletion.json\n<https://github.com/rucio/rucio/blob/master/tools/monitoring/rucio-deletion.json>")),"\nwhich could be imported into Kibana."),(0,o.kt)("p",null,"Rucio also sends messages when adding/deleting rules/DIDs and for file/dataset\naccess. So the monitoring is not limitted to data transferring."),(0,o.kt)("p",null,"4) Transmit messages from message queue to Elastisearch"),(0,o.kt)("p",null,"This could be done via Logstash. Please refer to\n",(0,o.kt)("a",{parentName:"p",href:"https://www.elastic.co/blog/integrating-jms-with-elasticsearch-service-using-logstash"},"https://www.elastic.co/blog/integrating-jms-with-elasticsearch-service-using-logstash"),"."),(0,o.kt)("p",null,"Alternatively you could use a simple python script ",(0,o.kt)("inlineCode",{parentName:"p"},"extract.py\n<https://github.com/rucio/rucio/blob/master/tools/monitoring/extract.py>"),"__. for\nthis after installing the required tools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade pip\npip install elasticsearch\nwget https://files.pythonhosted.org/packages/52/7e/22ca617f61e0d5904e06c1ebd5d453adf30099526c0b64dca8d74fff0cad/stomp.py-4.1.22.tar.gz\ntar -zxvf stomp.py-4.1.22.tar.gz\ncd stomp.py-4.1.22\npython setup.py install\n")),(0,o.kt)("p",null,"Change the configurations (message broker and elastisearch cluster) in\nexporter.py and start it. It could be made as a systemd service for convenience."),(0,o.kt)("p",null,"5) Create Kibana dashboards based on the imported messages."),(0,o.kt)("p",null,"A set of pre-defined dashboards can be found ",(0,o.kt)("inlineCode",{parentName:"p"},"here\n<https://github.com/rucio/rucio/tree/master/tools/monitoring/visualization>"),"__. in\njson format which could be imported to Kibana directly. But you may have to\nresolve different UUIDs in Kibana."),(0,o.kt)("h2",{id:"access-monitoring"},"Access monitoring"),(0,o.kt)("p",null,"The traces are sent by the pilots or the rucio clients whenever a file is\ndownloaded/uploaded. This is simillar with the data transferring monitoring."),(0,o.kt)("h2",{id:"rucio-database-dumping"},"Rucio database dumping"),(0,o.kt)("p",null,"Besides the internal, data transferring/deletion/accessing monitoring, it's also\npossible to dump the Rucio internal database directly to Elasticsearch. Then\ninformation like data location, accounting, RSE summary could be visualised\nusing Kibana or Grafana."),(0,o.kt)("p",null,"We provide several examples of dumping Rucio DB tables using the logstash jdbc\nplugin and making plots based on them."),(0,o.kt)("p",null,"To start a logstash pipeline, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logstash -f rse.conf\n")),(0,o.kt)("p",null,"Where the rse.conf contains"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'input {\n  jdbc {\n    jdbc_connection_string => ""\n    jdbc_user => ""\n    jdbc_password => ""\n    jdbc_driver_library => "/usr/share/logstash/java/postgresql-42.2.6.jar"\n    jdbc_driver_class => "org.postgresql.Driver"\n    statement => "SELECT rses.rse, rse_usage.source, rse_usage.used, \\\n      rse_usage.free, rse_usage.files FROM rse_usage INNER JOIN rses ON \\\n      rse_usage.rse_id=rses.id WHERE rse_usage.files IS NOT NULL AND \\\n      rse_usage.files!=0;"\n  }\n}\noutput {\n  elasticsearch {\n    hosts => [""]\n    action => "index"\n    index => "rucio_rse"\n    user => ""\n    password => ""\n  }\n}\n')),(0,o.kt)("p",null,"The rse pipeline dumps data like how large is the total space, how large is the\nused space, how many files are saved on each RSE etc. Please fill in the jdbc\nconnection details and Elastisearch connection details in the config file."),(0,o.kt)("p",null,"More pipeline definitions can be found ",(0,o.kt)("inlineCode",{parentName:"p"},"here\n<https://github.com/rucio/rucio/tree/master/tools/monitoring/logstash-pipeline>"),(0,o.kt)("strong",{parentName:"p"},",\nand users could design their own DB queries for their specific monitoring\nneeds. Also users could directly import the Elasticsearch indices and Kibana\ndashboard from ",(0,o.kt)("inlineCode",{parentName:"strong"},"these\n<https://github.com/rucio/rucio/tree/master/tools/monitoring/visualization/db_dump>")),"\njson files."),(0,o.kt)("h2",{id:"footnotes"},"Footnotes"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://graphiteapp.org/"},"https://graphiteapp.org/"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/"},"https://grafana.com/"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);