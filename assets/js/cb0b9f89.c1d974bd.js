(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{284:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),i=(n(0),n(342)),c={title:"Running rucio-transmogrifier"},a={unversionedId:"bin/rucio-transmogrifier",id:"bin/rucio-transmogrifier",isDocsHomePage:!1,title:"Running rucio-transmogrifier",description:"`",source:"@site/../docs/bin/rucio-transmogrifier.md",sourceDirName:"bin",slug:"/bin/rucio-transmogrifier",permalink:"/documentation/bin/rucio-transmogrifier",version:"current",frontMatter:{title:"Running rucio-transmogrifier"}},u=[],s={toc:u};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'usage: rucio-transmogrifier [-h] [--run-once] [--threads THREADS]\n                            [--bulk BULK] [--sleep-time SLEEP_TIME]\n\nThe Transmogrifier daemon is responsible for the creation of replication rules\nfor DIDs matching a subscription.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep between two cycles\n\nCreate a DID:: $ python from rucio.core.did import add_did from\nrucio.db.sqla.constants import DIDType add_did(scope=\'mock\', name=\'test\',\ntype=DIDType.DATASET, account=\'root\', meta={\'project\': \'test_project\'}) Create\na subscription that matches the DID:: $ rucio-admin subscription add test\n\'{"scope": ["mock"], "project": ["test_project"]}\' \'[{"copies": 1,\n"rse_expression": "MOCK", "activity": "User Subscriptions"}]\' \'df\' Check if\nthere are rules for the DID:: $ rucio list-rules mock:test ID ACCOUNT\nSCOPE:NAME STATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED\n(UTC) -------------------------------- --------- ------------\n---------------------- ---------------- -------- ---------------\n------------------- Run the daemon:: $ rucio-transmogrifier --run-once Check\nagain if there are rules for the DID:: $ rucio list-rules mock:test ID ACCOUNT\nSCOPE:NAME STATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED\n(UTC) -------------------------------- --------- ------------\n---------------------- ---------------- -------- ---------------\n------------------- e658f6f47f444326aad624dabef7b785 root mock:test OK[0/0/0]\nMOCK 1 2018-12-03 14:01:19\n')))}p.isMDXComponent=!0},342:function(e,r,n){"use strict";n.d(r,"a",(function(){return f})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},f=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(n),m=t,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||i;return n?o.a.createElement(d,a(a({ref:r},s),{},{components:n})):o.a.createElement(d,a({ref:r},s))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);