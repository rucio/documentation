(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return a})),t.d(e,"toc",(function(){return u})),t.d(e,"default",(function(){return s}));var r=t(3),o=t(7),c=(t(0),t(342)),i={title:"Running rucio-sonar"},a={unversionedId:"bin/rucio-sonar",id:"bin/rucio-sonar",isDocsHomePage:!1,title:"Running rucio-sonar",description:"`",source:"@site/../docs/bin/rucio-sonar.md",sourceDirName:"bin",slug:"/bin/rucio-sonar",permalink:"/documentation/bin/rucio-sonar",version:"current",frontMatter:{title:"Running rucio-sonar"}},u=[],l={toc:u};function s(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"2021-04-30 09:17:58,726 root    1013    INFO    Starting sonar tests.\n2021-04-30 09:17:58,729 urllib3.connectionpool  1013    DEBUG   Starting new HTTPS connection (1): localhost:443\n2021-04-30 09:17:58,729 baseclient  1013    ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7f63d45a2e48>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-04-30 09:17:58,730 urllib3.connectionpool  1013    DEBUG   Starting new HTTPS connection (2): localhost:443\n2021-04-30 09:17:58,731 baseclient  1013    ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7f63d45d3160>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-04-30 09:17:58,731 urllib3.connectionpool  1013    DEBUG   Starting new HTTPS connection (3): localhost:443\n2021-04-30 09:17:58,732 baseclient  1013    ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7f63d45d3240>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-04-30 09:17:58,732 baseclient  1013    ERROR   Cannot retrieve authentication token!\n")))}s.isMDXComponent=!0},342:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=o.a.createContext({}),s=function(n){var e=o.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=s(n.components);return o.a.createElement(l.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},f=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,c=n.originalType,i=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),p=s(t),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||c;return t?o.a.createElement(d,a(a({ref:e},l),{},{components:t})):o.a.createElement(d,a({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=n,a.mdxType="string"==typeof n?n:r,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);