"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3571],{32967:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator/monitoring","title":"Monitoring","description":"There are three different monitoring components:","source":"@site/../docs/operator/monitoring.md","sourceDirName":"operator","slug":"/operator/monitoring","permalink":"/documentation/operator/monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/monitoring.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1732116969000,"frontMatter":{"title":"Monitoring","sidebar_label":"Monitoring"},"sidebar":"docs","previous":{"title":"Multi-VO Rucio","permalink":"/documentation/operator/multi_vo_rucio"},"next":{"title":"Database Operations","permalink":"/documentation/operator/database"}}');var s=r(74848),o=r(28453);const i={title:"Monitoring",sidebar_label:"Monitoring"},a=void 0,c={},l=[{value:"Internal Monitoring",id:"internal-monitoring",level:2},{value:"Set up the Rucio internal monitoring dashboard",id:"set-up-the-rucio-internal-monitoring-dashboard",level:3},{value:"The list of Rucio internal metrics",id:"the-list-of-rucio-internal-metrics",level:3},{value:"Transfer monitoring",id:"transfer-monitoring",level:2},{value:"Set up the Rucio internal monitoring dashboard",id:"set-up-the-rucio-internal-monitoring-dashboard-1",level:3},{value:"Transfer events",id:"transfer-events",level:3},{value:"Deletion events",id:"deletion-events",level:3},{value:"Access monitoring",id:"access-monitoring",level:2},{value:"Rucio database dumping",id:"rucio-database-dumping",level:2},{value:"Footnotes",id:"footnotes",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"There are three different monitoring components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rucio internal monitoring using Graphite/Grafana"}),"\n",(0,s.jsx)(n.li,{children:"Transfer monitoring using the messages sent by Hermes"}),"\n",(0,s.jsx)(n.li,{children:"File/Dataset Access monitoring using the traces"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"internal-monitoring",children:"Internal Monitoring"}),"\n",(0,s.jsxs)(n.p,{children:["This is to monitor the internals of Rucio servers and daemons, e.g., submission\nrate of the conveyor, state of conveyor queues, reaper deletion rate, server\nresponse times, server active session, etc. We use Graphite",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),' for this. It\'s\neasy to setup and then you have to point your Rucio instance to the Graphite\nserver using the "carbon_server" options in the "monitor" section in\netc/rucio.cfg.']}),"\n",(0,s.jsxs)(n.p,{children:['The different Rucio components will then send metrics using those "record"\nfunctions you will find all over the code. Graphite has a built-in web interface\nto show graphs but more comfortable to use is the Grafana',(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," tool."]}),"\n",(0,s.jsx)(n.p,{children:"The internal monitoring functions are defined in core/monitor.py, it includes:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"record_counter. This is to send the StatsD counter metrics. Counters are the\nmost basic and default type. They are treated as a count of a type of event per\nsecond, and are, in Graphite, typically averaged over one minute. That is, when\nlooking at a graph, you are usually seeing the average number of events per\nsecond during a one-minute period."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"record_timer. Timers are meant to track how long something took. They are an\ninvaluable tool for tracking application performance. The statsd server collects\nall timers under the stats.timers prefix, and will calculate the lower bound,\nmean, 90th percentile, upper bound, and count of each timer for each period (by\nthe time you see it in Graphite, that\u2019s usually per minute)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"record_timer_block. This is the same to record_timer, just for simple using,\nto calculate timer of a certain code block."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"record_gauge. Gauges are a constant data type. They are not subject to\naveraging, and they don\u2019t change unless you change them. That is, once you set a\ngauge value, it will be a flat line on the graph until you change it again."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"set-up-the-rucio-internal-monitoring-dashboard",children:"Set up the Rucio internal monitoring dashboard"}),"\n",(0,s.jsx)(n.p,{children:"Set up a rucio server for development"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/rucio/rucio.git\ndocker-compose --file etc/docker/dev/docker-compose.yml up -d\n"})}),"\n",(0,s.jsx)(n.p,{children:"The command will fire up four containers: dev_rucio_1, dev_graphite_1,\ndev_mysql_1, dev_activemq_1. Dev_graphite_1 is the one collecting internal\nmetrics from Rucio. The configurations of Rucio internal metrics sender are\ndefined under the [monitor] section of rucio.cfg. Change the carbon_server and\ncarbon_port according to your setting"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"[monitor]\ncarbon_server = graphite\ncarbon_port = 8125\nuser_scope = docker\n"})}),"\n",(0,s.jsx)(n.p,{children:"The Graphite builtin web page is on port 80 of the host. To use Grafana, setup\nGrafana and enable the graphite data source"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull grafana/grafana\ndocker run -d --name=grafana -p 3000:3000 grafana/grafana\n"})}),"\n",(0,s.jsxs)(n.p,{children:['The Grafana web-portal is on port 3000 of the host. Add one data source of the\ntype Graphite, choose access method to "Browser" and set URL to ',(0,s.jsx)(n.a,{href:"http://ip:80",children:"http://ip:80"}),",\nwhere ip is the address of the server hosting the Graphite container\n",(0,s.jsx)(n.code,{children:"dev_graphite_1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A set of pre-defined Grafana Rucio internal plots is provided\n",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/tools/monitoring/visualization/rucio-internal.json",children:"here"}),".\nUsers could import them directly into Grafana."]}),"\n",(0,s.jsx)(n.h3,{id:"the-list-of-rucio-internal-metrics",children:"The list of Rucio internal metrics"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Core"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"credential.signswift, credential.signs3 (timer)\ntrace.nongrid_trace\ncore.request.* (counter)\ncore.request.archive_request.* (timer)\nrule.add_rule, rule.add_rule.*, rule.delete_rule, rule.evaluate_did_detach, rule.evaluate_did_attach.(timer)\ntrace.trace (counter)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Transfertool"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"transfertool.fts3.delegate_proxy.success.*, \\\n  transfertool.fts3.delegate_proxy.fail.* (timer)\ntransfertool.fts3.submit_transfer.[externalhost] (timer)\ntransfertool.fts3.[externalhost].submission.success/failure (counter)\ntransfertool.fts3.[externalhost].cancel.success/failure (counter)\ntransfertool.fts3.[externalhost].update_priority.success/failure  (counter)\ntransfertool.fts3.[externalhost].query.success/failure  (counter)\ntransfertool.fts3.[externalhost].whoami.failure (counter)\ntransfertool.fts3.[externalhost].Version.failure (counter)\ntransfertool.fts3.[externalhost].query_details.failure (counter)\ntransfertool.fts3.[externalhost].bulk_query.failure (counter)\ntransfertool.fts3.[externalhost].query_latest.failure (counter)\ntransfertool.fts3myproxy.[externalhost].submission.success/failure (counter)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Judge"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"rule.judge.exceptions.*\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Transmogrified"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"transmogrifier.addnewrule.errortype.* (counter)\ntransmogrifier.addnewrule.activity.* (counter)\ntransmogrifier.did.*.processed (counter)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Tracer"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"daemons.tracer.kronos.* (counter)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Reaper"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"reaper.list_unlocked_replicas, reaper.delete_replicas (timer)\nreaper.deletion.being_deleted, reaper.deletion.done (counter)\ndaemons.reaper.delete.[scheme].[rse] (timer)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"Undertaker"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"undertaker.delete_dids, undertaker.delete_dids.exceptions.LocksDetected (counter)\nundertaker.rules, undertaker.parent_content, undertaker.content, \\\n  undertaker.dids (timer)\nundertaker.content.rowcount (counter)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsx)(n.li,{children:"Replicarecover"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"replica.recoverer.exceptions.* (counter)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsx)(n.li,{children:"Hermes"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"daemons.hermes.reconnect.* (counter)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"10",children:["\n",(0,s.jsx)(n.li,{children:"Conveyor"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"daemons.conveyor.[submitter].submit_bulk_transfer.per_file, \\\n  daemons.conveyor.[submitter].submit_bulk_transfer.files (timer)\ndaemons.conveyor.[submitter].submit_bulk_transfer (counter)\ndaemons.conveyor.finisher.000-get_next (timer)\ndaemons.conveyor.finisher.handle_requests (timer & counter)\ndaemons.conveyor.common.update_request_state.request-requeue_and_archive (timer)\ndaemons.conveyor.poller.000-get_next (timer)\ndaemons.conveyor.poller.bulk_query_transfers (timer)\ndaemons.conveyor.poller.transfer_lost (counter)\ndaemons.conveyor.poller.query_transfer_exception (counter)\ndaemons.conveyor.poller.update_request_state.* (counter)\ndaemons.conveyor.receiver.error\ndaemons.conveyor.receiver.message_all\ndaemons.conveyor.receiver.message_rucio\ndaemons.conveyor.receiver.update_request_state.*\ndaemons.conveyor.receiver.set_transfer_update_time\ndaemons.messaging.fts3.reconnect.*\ndaemons.conveyor.stager.get_stagein_transfers.per_transfer, \\\n  daemons.conveyor.stager.get_stagein_transfers.transfer (timer)\ndaemons.conveyor.stager.get_stagein_transfers (count)\ndaemons.conveyor.stager.bulk_group_transfer (timer)\ndaemons.conveyor.submitter.get_stagein_transfers.per_transfer, \\\n  daemons.conveyor.submitter.get_stagein_transfers.transfer (timer)\ndaemons.conveyor.submitter.get_stagein_transfers (count)\ndaemons.conveyor.submitter.bulk_group_transfer (timer)\ndaemons.conveyor.throttler.set_rse_transfer_limits.\\\n  [rse].max_transfers/transfers/waitings (gauge)\ndaemons.conveyor.throttler.delete_rse_transfer_limits.[rse] (counter)\ndaemons.conveyor.throttler.delete_rse_transfer_limits.[activity].[rse] (counter)\ndaemons.conveyor.throttler.set_rse_transfer_limits.[activitiy].[rse] (gauge)\ndaemons.conveyor.throttler.release_waiting_requests.[activity].[rse].[account] (counter)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"11",children:["\n",(0,s.jsx)(n.li,{children:"Necromancer"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"necromancer.badfiles.lostfile, necromancer.badfiles.recovering (counter)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"transfer-monitoring",children:"Transfer monitoring"}),"\n",(0,s.jsxs)(n.p,{children:["If a transfer is submitted, queued, waiting, done or failed messages are sent to\nActiveMQ via Hermes and are also archived in the messages_history table. Same is\ntrue for deletions. In the case of ATLAS we have a dedicated monitoring\ninfrastructure that reads the messages from\n",(0,s.jsx)(n.a,{href:"https://activemq.apache.org",children:"ActiveMQ"}),", aggregates them and then writes the\naggregated data into ElasticSearch/InfluxDB from where it then can be visualised\nusing Kibana/Grafana."]}),"\n",(0,s.jsx)(n.h3,{id:"set-up-the-rucio-internal-monitoring-dashboard-1",children:"Set up the Rucio internal monitoring dashboard"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Configure Rucio"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Rucio need to be configured to enable the message broker. In Rucio, message are\nsent by the Hermes daemon. Settings are defined in therucio.cfg under the\n[messaging-hermes] section"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:"[messaging-hermes]\nusername =\npassword =\nport = 61613\nnonssl_port = 61613\nuse_ssl = False\nssl_key_file = /etc/grid-security/hostkey.pem\nssl_cert_file = /etc/grid-security/hostcert.pem\ndestination = /topic/rucio.events\nbrokers = activemq\nvoname = atlas\nemail_from =\nemail_test =\n"})}),"\n",(0,s.jsx)(n.p,{children:'The default settings are listed above. If ssl is not used, set use_ssl to False\nand define username and password. They should be "admin", "admin" for the\ndefault activemq settings. If you are not using the containers created by the\ndocker-compose command, change the brokers and port to the server hosting the\nmessage queue.'}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Setup Elasticsearch and Kibana"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Next is to setup and configure Elasticsearch and Kibana for storing and\nvisualising the messages. This is an example of creating them in containers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run -d \\\n  -p 9200:9200 \\\n  -p 9300:9300 \\\n  -e "discovery.type=single-node" \\\n  --name elasticsearch \\\n  docker.elastic.co/elasticsearch/elasticsearch:7.8.1\n\ndocker run -d \\\n  --link elasticsearch \\\n  -p 5601:5601 \\\n  --name kibana \\\n  docker.elastic.co/kibana/kibana:7.8.1\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Import Elasticsearch indices"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Before transferring messages from the message queue to Elasticsearch, indices\nneed to be defined in Elasticsearch. This is a list of the message formats of\nRucio."}),"\n",(0,s.jsx)(n.h3,{id:"transfer-events",children:"Transfer events"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsi",children:"{\n  created_at: when the message was created (yyyy-MM-dd HH:mm:ss.SSSSSS)\n  event_type: type of this event (transfer-submitted, \\\n    transfer-submittion_failed, transfer-queued, transfer-failed, \\\n    transfer-done)\n  payload: {\n    account: account submitting the request\n    activity: activity of the request\n    bytes: size of the transferred file (byte)\n    checksum-adler: checksum using adler algorithm\n    checksum-md5: checksum using md5 alrogithm\n    created_at: Time when the message was created (yyyy-MM-dd HH:mm:ss.SSSSSS)\n    dst-rse: destination rse\n    dst-type: type of destination rse (disk, tape)\n    dst-url: destination url of the transferred file\n    duration: duration of the transfer (second)\n    event_type: type of this event (transfer-submitted, \\\n      transfer-submittion_failed, transfer-queued, \\\n      transfer-failed, transfer-done)\n    file-size: same as bytes\n    guid: guid of the transfer\n    name: name of transferred file\n    previous-request-id: id of previous request\n    protocol: transfer protocol\n    reason: reason of the failure\n    request-id: id of this request\n    scope: scope of the transferred data\n    src-rse: source rse\n    src-type: type of source rse (disk, tape)\n    src-url: source file url\n    started_at: start time of the transfer\n    submitted_at: submittion time of the transfer\n    tool-id: id of the transfer tool in rucio (rucio-conveyor)\n    transfer-endpoint: endpoint holder of the transfer (fts)\n    transfer-id: uuid of this transfer\n    transfer-link: link of this transfer (in form of fts url)\n    transferred_at: done time of this transfer\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"deletion-events",children:"Deletion events"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"{\n  created_at: when the message was created (yyyy-MM-dd HH:mm:ss.SSSSSS)\n  event_type: type of this event (deletion-done,deletion-failed)\n  payload: {\n    scope: scope of the deleted replica\n    name: name of the deleted replica\n    rse: rse holding the deleted replica\n    file-size: size of the file\n    bytes: size of the file\n    url: url of the file\n    duration: duration of the deletion\n    protocol: prococol used in the deletion\n    reason: reason of the failure\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The formats of them are defined in ",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/tools/monitoring/rucio-transfer.json",children:(0,s.jsx)(n.code,{children:"rucio-transfer.json"})}),"\nand ",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/tools/monitoring/rucio-deletion.json",children:(0,s.jsx)(n.code,{children:"rucio_deletion.json"})}),"\nwhich could be imported into Kibana."]}),"\n",(0,s.jsx)(n.p,{children:"Rucio also sends messages when adding/deleting rules/DIDs and for file/dataset\naccess. So the monitoring is not limited to data transferring."}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Transmit messages from message queue to Elastisearch"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This could be done via Logstash. Please refer to ",(0,s.jsx)(n.a,{href:"https://www.elastic.co/blog/integrating-jms-with-elasticsearch-service-using-logstash",children:"Elastic's documentation."}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively you could use a simple Python script such as ",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/tools/monitoring/extract.py",children:(0,s.jsx)(n.code,{children:"extract.py"})})," for\nthis after installing the required tools"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade pip\npip install elasticsearch\nwget https://files.pythonhosted.org/packages/52/7e/22ca617f61e0d5904e06c1ebd5d453adf30099526c0b64dca8d74fff0cad/stomp.py-4.1.22.tar.gz\ntar -zxvf stomp.py-4.1.22.tar.gz\ncd stomp.py-4.1.22\npython setup.py install\n"})}),"\n",(0,s.jsx)(n.p,{children:"Change the configurations (message broker and elastisearch cluster) in\nexporter.py and start it. It could be made as a systemd service for convenience."}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Create Kibana dashboards based on the imported messages."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A set of pre-defined dashboards can be found\n",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/tree/master/tools/monitoring/visualization",children:"here"})," in\njson format which could be imported to Kibana directly. But you may have to\nresolve different UUIDs in Kibana."]}),"\n",(0,s.jsx)(n.h2,{id:"access-monitoring",children:"Access monitoring"}),"\n",(0,s.jsx)(n.p,{children:"The traces are sent by the pilots or the rucio clients whenever a file is\ndownloaded/uploaded. This is simillar with the data transferring monitoring."}),"\n",(0,s.jsx)(n.h2,{id:"rucio-database-dumping",children:"Rucio database dumping"}),"\n",(0,s.jsx)(n.p,{children:"Besides the internal, data transferring/deletion/accessing monitoring, it's also\npossible to dump the Rucio internal database directly to Elasticsearch. Then\ninformation like data location, accounting, RSE summary could be visualised\nusing Kibana or Grafana."}),"\n",(0,s.jsx)(n.p,{children:"We provide several examples of dumping Rucio DB tables using the logstash jdbc\nplugin and making plots based on them."}),"\n",(0,s.jsx)(n.p,{children:"To start a logstash pipeline, run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"logstash -f rse.conf\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where the rse.conf contains"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'input {\n  jdbc {\n    jdbc_connection_string => ""\n    jdbc_user => ""\n    jdbc_password => ""\n    jdbc_driver_library => "/usr/share/logstash/java/postgresql-42.2.6.jar"\n    jdbc_driver_class => "org.postgresql.Driver"\n    statement => "SELECT rses.rse, rse_usage.source, rse_usage.used, \\\n      rse_usage.free, rse_usage.files FROM rse_usage INNER JOIN rses ON \\\n      rse_usage.rse_id=rses.id WHERE rse_usage.files IS NOT NULL AND \\\n      rse_usage.files!=0;"\n  }\n}\noutput {\n  elasticsearch {\n    hosts => [""]\n    action => "index"\n    index => "rucio_rse"\n    user => ""\n    password => ""\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The rse pipeline dumps data like how large is the total space, how large is the\nused space, how many files are saved on each RSE etc. Please fill in the jdbc\nconnection details and Elastisearch connection details in the config file."}),"\n",(0,s.jsxs)(n.p,{children:["More pipeline definitions can be found ",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/tree/master/tools/monitoring/logstash-pipeline",children:"here"}),",\nand users could design their own DB queries for their specific monitoring\nneeds. Also users could directly import the Elasticsearch indices and Kibana\ndashboard from ",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/tree/master/tools/monitoring/visualization/db_dump",children:"these"}),".\njson files."]}),"\n",(0,s.jsx)(n.h2,{id:"footnotes",children:"Footnotes"}),"\n","\n",(0,s.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(n.p,{children:["[",(0,s.jsx)(n.a,{href:"https://graphiteapp.org/",children:"https://graphiteapp.org/"}),"] ",(0,s.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(n.p,{children:["[",(0,s.jsx)(n.a,{href:"https://grafana.com/",children:"https://grafana.com/"}),"] ",(0,s.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);