(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{142:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),c=(r(0),r(342)),i={title:"Running rucio-hermes2"},a={unversionedId:"bin/rucio-hermes2",id:"bin/rucio-hermes2",isDocsHomePage:!1,title:"Running rucio-hermes2",description:"`",source:"@site/../docs/bin/rucio-hermes2.md",sourceDirName:"bin",slug:"/bin/rucio-hermes2",permalink:"/documentation/bin/rucio-hermes2",version:"current",frontMatter:{title:"Running rucio-hermes2"}},u=[],s={toc:u};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"usage: rucio-hermes2 [-h] [--run-once] [--threads THREADS] [--bulk BULK]\n                     [--sleep-time SLEEP_TIME]\n\nHermes2 is a daemon that get the messages and sends them to external services (influxDB, ES, ActiveMQ).\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --sleep-time SLEEP_TIME\n                        Delay control: second control per cycle\n\nRun the daemon::\n\n  $ rucio-hermes2 --run-once\n    \n")))}l.isMDXComponent=!0},342:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=t,b=p["".concat(i,".").concat(f)]||p[f]||m[f]||c;return r?o.a.createElement(b,a(a({ref:n},s),{},{components:r})):o.a.createElement(b,a({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);