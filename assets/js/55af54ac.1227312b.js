(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),c=(t(0),t(346)),i={title:"Running rucio-sonar"},a={unversionedId:"bin/rucio-sonar",id:"bin/rucio-sonar",isDocsHomePage:!1,title:"Running rucio-sonar",description:"`",source:"@site/../docs/bin/rucio-sonar.md",sourceDirName:"bin",slug:"/bin/rucio-sonar",permalink:"/documentation/bin/rucio-sonar",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-sonar.md",version:"current",frontMatter:{title:"Running rucio-sonar"}},u=[],l={toc:u};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"2021-05-18 04:25:43,907 root    395 INFO    Starting sonar tests.\n2021-05-18 04:25:43,911 urllib3.connectionpool  395 DEBUG   Starting new HTTPS connection (1): localhost:443\n2021-05-18 04:25:43,912 baseclient  395 ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7fe2db37cc50>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-05-18 04:25:43,913 urllib3.connectionpool  395 DEBUG   Starting new HTTPS connection (2): localhost:443\n2021-05-18 04:25:43,913 baseclient  395 ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7fe2d9e67080>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-05-18 04:25:43,915 urllib3.connectionpool  395 DEBUG   Starting new HTTPS connection (3): localhost:443\n2021-05-18 04:25:43,915 baseclient  395 ERROR   ConnectionError: HTTPSConnectionPool(host='localhost', port=443): Max retries exceeded with url: /auth/userpass (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7fe2d9e67278>: Failed to establish a new connection: [Errno 111] Connection refused',))\n2021-05-18 04:25:43,915 baseclient  395 ERROR   Cannot retrieve authentication token!\n")))}s.isMDXComponent=!0},346:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||c;return t?o.a.createElement(f,a(a({ref:n},l),{},{components:t})):o.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);