"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3373],{32712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"bin/rucio-cache-client","title":"rucio-cache-client","description":"","source":"@site/../docs/bin/rucio-cache-client.md","sourceDirName":"bin","slug":"/bin/rucio-cache-client","permalink":"/documentation/bin/rucio-cache-client","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-cache-client.md","tags":[],"version":"current","frontMatter":{"title":"rucio-cache-client"},"sidebar":"docs","previous":{"title":"rucio-bb8","permalink":"/documentation/bin/rucio-bb8"},"next":{"title":"rucio-cache-consumer","permalink":"/documentation/bin/rucio-cache-consumer"}}');var o=t(74848),i=t(28453);const s={title:"rucio-cache-client"},r=void 0,a={},l=[];function u(e){const n={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"usage: rucio-cache-client [-h] [-b BROKER] [-p PORT] [-c SSL_CERT_FILE]\n                          [-k SSL_KEY_FILE] [-d DESTINATION] [-m MESSAGE]\n\nWARNING: section 'messaging-cache' not present in config! All arguments must\nbe manually set! This daemon is used to populate information of replicas on\nvolatile storage.\n\noptions:\n  -h, --help            show this help message and exit\n  -b BROKER, --broker BROKER\n                        Message broker name\n  -p PORT, --port PORT  Message broker port\n  -c SSL_CERT_FILE, --certificate SSL_CERT_FILE\n                        Certificate file\n  -k SSL_KEY_FILE, --certificate-key SSL_KEY_FILE\n                        Certificate key file\n  -d DESTINATION, --destination DESTINATION\n                        Message broker topic\n  -m MESSAGE, --message MESSAGE\n                        Add replicas message: {'files': [{'scope': scope,\n                        'name': name, 'bytes': 1L, 'adler32': ''}, {'scope':\n                        scope, 'name': name, 'bytes': 1L, 'adler32': ''},\n                        ...], 'rse': rse_cache_name, 'lifetime': seconds,\n                        'operation': 'add_replicas' } Delete replicas message:\n                        {'files': [{'scope': scope, 'name': name}, {'scope':\n                        scope, 'name': name}, ...], 'rse': rse_cache_name,\n                        'operation': 'delete_replicas' }\n"})})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var c=t(96540);const o={},i=c.createContext(o);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);