"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2464],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},89873:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator_transfers/configure-rucio-fts3-plugins","title":"Configure A Tool to Determine Rules For FTS3 Tape Transfers","description":"Rucio includes functionality to pass instructions to FTS3 that describe how the transfer should be concluded","source":"@site/../docs/operator_transfers/configure_fts3_plugins.md","sourceDirName":"operator_transfers","slug":"/operator_transfers/configure-rucio-fts3-plugins","permalink":"/documentation/operator_transfers/configure-rucio-fts3-plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator_transfers/configure_fts3_plugins.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1744318612000,"frontMatter":{"id":"configure-rucio-fts3-plugins","title":"Configure A Tool to Determine Rules For FTS3 Tape Transfers","sidebar_label":"FTS3 Transfertool Plugins"},"sidebar":"docs","previous":{"title":"Suspicious Replica Recoverer","permalink":"/documentation/operator/suspicious-replica-recoverer"},"next":{"title":"Configure Rucio To Use Globus Online as a Transfer Tool","permalink":"/documentation/operator_transfers/configure-rucio-globus"}}');var s=i(74848),r=i(28453);const o={id:"configure-rucio-fts3-plugins",title:"Configure A Tool to Determine Rules For FTS3 Tape Transfers",sidebar_label:"FTS3 Transfertool Plugins"},l=void 0,a={},c=[{value:"Writing the plugin",id:"writing-the-plugin",level:2},{value:"Plugins with initialization rules",id:"plugins-with-initialization-rules",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Pre-built plugins",id:"pre-built-plugins",level:2},{value:"Activity Based Transfer Priority",id:"activity-based-transfer-priority",level:3},{value:"Tape Collocation",id:"tape-collocation",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Rucio includes functionality to pass instructions to FTS3 that describe how the transfer should be concluded\n(e.g., placement on tape).\nThis information is passed forward to the storage endpoint as a json of\n",(0,s.jsx)(n.code,{children:"archive_metadata"}),", ",(0,s.jsx)(n.a,{href:"https://fts3-docs.web.cern.ch/fts3-docs/fts-rest/docs/bulk.html",children:"as described by FTS3."})]}),"\n",(0,s.jsx)(n.p,{children:"The plugin ensures the metadata conforms to json encoding and size constraints before adding it to the\nparameters used in the transfer."}),"\n",(0,s.jsx)(n.h2,{id:"writing-the-plugin",children:"Writing the plugin"}),"\n",(0,s.jsxs)(n.p,{children:["Plugins are expected to be subclasses of ",(0,s.jsx)(n.code,{children:"rucio.transfertool.fts3_plugins.FTS3TapeMetadataPlugin"}),",\nand registered as ",(0,s.jsx)(n.code,{children:"fts3_tape_metadata_plugins"})," algorithms.\nThis is done by using the\n",(0,s.jsx)(n.code,{children:"FTS3TapeMetadataPlugin.register"})," method, which tells the algorithm which code to execute during runtime."]}),"\n",(0,s.jsx)(n.p,{children:"The return type of the selected policy code must be a json-encodable dictionary.\nThe only required keys are the keys that will be used by the storage endpoint, not any decorators for FTS3."}),"\n",(0,s.jsx)(n.p,{children:"During the transfer, the algorithm is passed the existing job parameters generated for the transfer in the form of a dictionary."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from rucio.transfertool.fts3_plugins import FTS3TapeMetadataPlugin\n\nclass ExperimentFTSPlugins(FTS3TapeMetadataPlugin):\n    def __init__(self, policy_algorithm="def"):\n        self.register("policy_algorithm", func=self.plugin_algorithm)  # Name and function for the new algorithm\n        super().__init__(policy_algorithm)\n\n    def plugin_algorithm(self, *hints):  # Code executed at runtime\n        return {"storage_location": "this_location"}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will result in the below transfer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"files": [{\n    "sources": [...],\n    ...\n    "archive_metadata": {\n        "storage_location": "this_location"\n        }\n    }]\n}\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"plugins-with-initialization-rules",children:"Plugins with initialization rules"}),"\n",(0,s.jsx)(n.p,{children:"If the plugin requires set-up that would slow down transfers, using a plugin initialization is recommended.\nThis includes things like querying the configuration file, performing a calculation that would not change\nbetween different transfers, or hard-coding parameters."}),"\n",(0,s.jsxs)(n.p,{children:["This is done by including a ",(0,s.jsx)(n.code,{children:"init_func"})," when registering the plugin."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from rucio.transfertool.fts3_plugins import FTS3TapeMetadataPlugin\n\nclass ExperimentFTSPlugins(FTS3TapeMetadataPlugin):\n    def __init__(self, policy_algorithm="def"):\n        self.register(\n            "policy_algorithm",\n            func=self.plugin_algorithm,\n            init_func=self.plugin_initialization)\n        super().__init__(policy_algorithm)\n\n    def plugin_algorithm(self, *hints):\n        # Can use `self.extra_params`\n        return {\n            "storage_location": self.extra_params[hints["name"]]\n            }\n\n    def plugin_initialization(self):\n        self.extra_params = dict(get_config("transfers", "extra_params"))\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"To trigger registration it is recommended to run the plugin in the class file with the default plugin name."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-{python}",children:'class ExperimentFTSPlugins(FTS3TapeMetadataPlugin):\n    ...\nExperimentFTSPlugins("def")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Configuration set in the ",(0,s.jsx)(n.code,{children:"rucio.cfg"}),". To use a plugin (here named ",(0,s.jsx)(n.code,{children:"policy_algorithm_1"}),"),\nmodify the config to include the below field.\nTo use multiple plugins, their names can be listed to make each plugin algorithm run in sequence."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[transfers]\nfts3tape_metadata_plugins = policy_algorithm_1, policy_algorithm_2\n"})}),"\n",(0,s.jsx)(n.p,{children:"Size constraints can be set with the below. (Default of 4096)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[transfers]\nmetadata_byte_limit = <byte limit of transfer metadata>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pre-built-plugins",children:"Pre-built plugins"}),"\n",(0,s.jsx)(n.h3,{id:"activity-based-transfer-priority",children:"Activity Based Transfer Priority"}),"\n",(0,s.jsxs)(n.p,{children:["To assign archive priority based on activity, we include the ",(0,s.jsx)(n.code,{children:"activity_hints"})," plugin.\nThis plugin assigns an integer priority between 0 and 100 based on the activity of the transfer in question."]}),"\n",(0,s.jsx)(n.p,{children:"Output of the plugin follows the form of"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"archive_metadata": {"scheduling_hints": {"priority": 0}}}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The plugin requires no code modification or subclassing, all set up is done in the ",(0,s.jsx)(n.code,{children:"rucio.cfg"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To set up, update your configuration as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[transfers]\nfts3tape_metadata_plugins = policy_algorithm\n\n[tape_priority]\n<Activity 1> = 100\n<Activity 2> = 80\n<Activity 3> = 50\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Baseline priority for any activity not listed is ",(0,s.jsx)(n.code,{children:"20"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"tape-collocation",children:"Tape Collocation"}),"\n",(0,s.jsxs)(n.p,{children:["In order to ensure data is placed on tape with similar data, a ",(0,s.jsx)(n.code,{children:"tape_collocation"})," plugin can be used.\nThis plugin requires custom logic, but behaves as a generic plugin does."]}),"\n",(0,s.jsxs)(n.p,{children:["The collocation can be set to up to 4 different levels, such that the passed ",(0,s.jsx)(n.code,{children:"archive_metadata"})," contains the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "collocation_hints":{\n        "0": Highest level of grouping,\n        "1": Second Highest level,\n        ...\n        "3": Lowest level of grouping\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Writing the plugin is similar to any other plugin, it just requires that these 4 levels be filled for a given transfer."}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"collocation"})," wrapper is used, this format is verified and put into the ",(0,s.jsx)(n.code,{children:"collocation_hints"}),"\nfield of the transfer parameters.\nThis is done below, where ",(0,s.jsx)(n.code,{children:"find_level_hints"})," is an arbitrary function written for an experiment's needs:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from rucio.transfertool.fts3_plugins import FTS3TapeMetadataPlugin\n\nclass ExperimentCollocationFTSPlugins(FTS3TapeMetadataPlugin):\n    def __init__(self, policy_algorithm="def"):\n        super().__init__(policy_algorithm)\n        self.register(\n            "policy_collocation_algorithm",\n            func= lambda x: self._collocation(self._experiment_plugin, x)\n        )\n\n    def find_level_hints(self, level, hints):\n        ...\n\n    def _experiment_plugin(self, *hints):\n        return {\n                "0": self.find_level_hints(level=0, hints=hints),\n                "1": self.find_level_hints(level=1, hints=hints),\n                "2": self.find_level_hints(level=2, hints=hints),\n                "3": self.find_level_hints(level=3, hints=hints),\n            }\n\nExperimentCollocationFTSPlugins("def")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);