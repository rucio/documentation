(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{149:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(3),o=n(7),i=(n(0),n(427)),c=["components"],a={title:"rucio-follower"},u={unversionedId:"bin/rucio-follower",id:"bin/rucio-follower",isDocsHomePage:!1,title:"rucio-follower",description:"`",source:"@site/../docs/bin/rucio-follower.md",sourceDirName:"bin",slug:"/bin/rucio-follower",permalink:"/documentation/bin/rucio-follower",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-follower.md",version:"current",frontMatter:{title:"rucio-follower"},sidebar:"docs",previous:{title:"rucio-dumper",permalink:"/documentation/bin/rucio-dumper"},next:{title:"rucio-hermes",permalink:"/documentation/bin/rucio-hermes"}},l=[],p={toc:l};function s(e){var r=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-follower [-h] [--run-once] [--threads THREADS]\n\noptional arguments:\n  -h, --help         show this help message and exit\n  --run-once         Runs one loop iteration\n  --threads THREADS  Concurrency control: total number of threads on this\n                     process\n")))}s.isMDXComponent=!0},427:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=t,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return n?o.a.createElement(d,a(a({ref:r},l),{},{components:n})):o.a.createElement(d,a({ref:r},l))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);