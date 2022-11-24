(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{131:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),c=t(7),o=(t(0),t(451)),i=["components"],a={title:"rucio-cache-client"},s={unversionedId:"bin/rucio-cache-client",id:"bin/rucio-cache-client",isDocsHomePage:!1,title:"rucio-cache-client",description:"`",source:"@site/../docs/bin/rucio-cache-client.md",sourceDirName:"bin",slug:"/bin/rucio-cache-client",permalink:"/documentation/bin/rucio-cache-client",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-cache-client.md",version:"current",frontMatter:{title:"rucio-cache-client"},sidebar:"docs",previous:{title:"rucio-c3po",permalink:"/documentation/bin/rucio-c3po"},next:{title:"rucio-cache-consumer",permalink:"/documentation/bin/rucio-cache-consumer"}},u=[],p={toc:u};function l(e){var n=e.components,t=Object(c.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"usage: rucio-cache-client [-h] [-b BROKER] [-p PORT] [-c SSL_CERT_FILE]\n                          [-k SSL_KEY_FILE] [-d DESTINATION] [-m MESSAGE]\n\nThis daemons is used to populate information of replicas on volatile storage.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -b BROKER, --broker BROKER\n                        Message broker name\n  -p PORT, --port PORT  Message broker port\n  -c SSL_CERT_FILE, --certificate SSL_CERT_FILE\n                        Certificate file\n  -k SSL_KEY_FILE, --certificate-key SSL_KEY_FILE\n                        Certificate key file\n  -d DESTINATION, --destination DESTINATION\n                        Message broker topic\n  -m MESSAGE, --message MESSAGE\n                        Add replicas message: {'files': [{'scope': scope,\n                        'name': name, 'bytes': 1L, 'adler32': ''}, {'scope':\n                        scope, 'name': name, 'bytes': 1L, 'adler32': ''},\n                        ...], 'rse': rse_cache_name, 'lifetime': seconds,\n                        'operation': 'add_replicas' } Delete replicas message:\n                        {'files': [{'scope': scope, 'name': name}, {'scope':\n                        scope, 'name': name}, ...], 'rse': rse_cache_name,\n                        'operation': 'delete_replicas' }\n")))}l.isMDXComponent=!0},451:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),p=function(e){var n=c.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return c.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},f=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||o;return t?c.a.createElement(d,a(a({ref:n},u),{},{components:t})):c.a.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);