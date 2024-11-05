"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3649],{82526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"user/setting_up_the_rucio_client","title":"Setting Up the Rucio Client","description":"Install via pip","source":"@site/../docs/user/setting_up_the_rucio_client.md","sourceDirName":"user","slug":"/user/setting_up_the_rucio_client","permalink":"/documentation/user/setting_up_the_rucio_client","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/user/setting_up_the_rucio_client.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1729601659000,"frontMatter":{"title":"Setting Up the Rucio Client"},"sidebar":"docs","previous":{"title":"Release Notes","permalink":"/documentation/release-notes"},"next":{"title":"Configuring the Client","permalink":"/documentation/user/configuring_the_client"}}');var s=t(74848),l=t(28453);const a={title:"Setting Up the Rucio Client"},r=void 0,c={},o=[{value:"Install via pip",id:"install-via-pip",level:2},{value:"Upgrade via pip",id:"upgrade-via-pip",level:2},{value:"Install via pip and virtualenv",id:"install-via-pip-and-virtualenv",level:2},{value:"Installing using setup.py",id:"installing-using-setuppy",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"install-via-pip",children:"Install via pip"}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"pip"})," is available, the distribution can be downloaded from the\nRucio PyPI server and installed in one step:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install rucio-clients\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command will download the latest version of Rucio and install it to your\nsystem. The dependencies are listed in the file\n",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/requirements/requirements.client.txt",children:(0,s.jsx)(n.code,{children:"requirements.client.txt"})}),"\nand will be pulled in as necessary."]}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-via-pip",children:"Upgrade via pip"}),"\n",(0,s.jsx)(n.p,{children:"To upgrade via pip:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade rucio-clients\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-via-pip-and-virtualenv",children:"Install via pip and virtualenv"}),"\n",(0,s.jsxs)(n.p,{children:["To install the Rucio clients in an isolated ",(0,s.jsx)(n.code,{children:"virtualenv"})," environment:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget --no-check-certificate https://raw.github.com/pypa/virtualenv/master/virtualenv.py\npython virtualenv.py rucio\nsource rucio/bin/activate.csh\npip install rucio-clients\nexport RUCIO_HOME=`pwd`/rucio/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-using-setuppy",children:"Installing using setup.py"}),"\n",(0,s.jsxs)(n.p,{children:["Otherwise, you can install from the distribution using the ",(0,s.jsx)(n.code,{children:"setup.py"}),"\nscript:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python setup.py install\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);