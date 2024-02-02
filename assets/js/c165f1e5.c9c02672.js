"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6076],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>f});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(45072),o=n(95656),i=(n(11504),n(95788)),a=["components"],l={title:"rucio-dumper"},s=void 0,u={unversionedId:"bin/rucio-dumper",id:"bin/rucio-dumper",title:"rucio-dumper",description:"",source:"@site/../docs/bin/rucio-dumper.md",sourceDirName:"bin",slug:"/bin/rucio-dumper",permalink:"/documentation/bin/rucio-dumper",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-dumper.md",tags:[],version:"current",frontMatter:{title:"rucio-dumper"},sidebar:"docs",previous:{title:"rucio-dark-reaper",permalink:"/documentation/bin/rucio-dark-reaper"},next:{title:"rucio-follower",permalink:"/documentation/bin/rucio-follower"}},d={},c=[],p={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,o.c)(e,a);return(0,i.yg)(m,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-dumper [-h] [--fields FIELDS | --hide HIDE | --group-by GROUP_BY]\n                    [--sum SUM]\n                    [--csv | --csv-nohead | --tabulate {asciidoc,double_grid,double_outline,fancy_grid,fancy_outline,github,grid,heavy_grid,heavy_outline,html,jira,latex,latex_booktabs,latex_longtable,latex_raw,mediawiki,mixed_grid,mixed_outline,moinmoin,orgtbl,outline,pipe,plain,presto,pretty,psql,rounded_grid,rounded_outline,rst,simple,simple_grid,simple_outline,textile,tsv,unsafehtml,youtrack}]\n                    {dump-datasets,dump-complete-datasets,dump-replicas,consistency,consistency-manual}\n                    ...\n\nThis daemon is responsible to make file list dumps. The rucio-auditor daemon\nuse these dumps to discover dark data and check Rucio database consistency.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --fields FIELDS       Comma separated list of fields that should be printed\n  --hide HIDE           Comma separated list of fields that should not be\n                        printed\n  --group-by GROUP_BY   Group records, according to the the indicated fields\n                        FIXME\n  --sum SUM             Summatory of the values of the given fields (only\n                        numerical fields and should be used in combination\n                        with --group-by)\n  --csv                 Format the output as a CSV with headers\n  --csv-nohead          Format the output as a CSV without headers (default)\n  --tabulate {asciidoc,double_grid,double_outline,fancy_grid,fancy_outline,github,grid,heavy_grid,heavy_outline,html,jira,latex,latex_booktabs,latex_longtable,latex_raw,mediawiki,mixed_grid,mixed_outline,moinmoin,orgtbl,outline,pipe,plain,presto,pretty,psql,rounded_grid,rounded_outline,rst,simple,simple_grid,simple_outline,textile,tsv,unsafehtml,youtrack}\n                        Format the output as a table (printing large tables\n                        can take several minutes)\n\ndump:\n  {dump-datasets,dump-complete-datasets,dump-replicas,consistency,consistency-manual}\n                        dump data FIXME\n    dump-datasets       List the dump of all datasets for a given RSE\n    dump-complete-datasets\n                        List the dump of all complete datasets for a given RSE\n    dump-replicas       List the dump of all replicas for a given RSE\n    consistency         Consistency check to verify possible lost files and\n                        dark data (replica dumps are downloaded automatically)\n    consistency-manual  Consistency check to verify possible lost files and\n                        dark data (replica dumps should be provided by the\n                        user)\n")))}f.isMDXComponent=!0}}]);