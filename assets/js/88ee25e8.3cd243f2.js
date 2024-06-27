"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3649],{79636:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var t=i(74848),s=i(28453);const l={title:"Setting Up the Rucio Client"},a=void 0,r={id:"user/setting_up_the_rucio_client",title:"Setting Up the Rucio Client",description:"Install via pip",source:"@site/../docs/user/setting_up_the_rucio_client.md",sourceDirName:"user",slug:"/user/setting_up_the_rucio_client",permalink:"/documentation/user/setting_up_the_rucio_client",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/setting_up_the_rucio_client.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:17194779e5,frontMatter:{title:"Setting Up the Rucio Client"},sidebar:"docs",previous:{title:"Release Notes",permalink:"/documentation/release-notes"},next:{title:"Using the Client",permalink:"/documentation/user/using_the_client"}},c={},o=[{value:"Install via pip",id:"install-via-pip",level:2},{value:"Upgrade via pip",id:"upgrade-via-pip",level:2},{value:"Install via pip and virtualenv",id:"install-via-pip-and-virtualenv",level:2},{value:"Installing using setup.py",id:"installing-using-setuppy",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"install-via-pip",children:"Install via pip"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"pip"})," is available, the distribution can be downloaded from the\nRucio PyPI server and installed in one step:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install rucio-clients\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will download the latest version of Rucio and install it to your\nsystem. The dependencies are listed in the file\n",(0,t.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/requirements.txt",children:(0,t.jsx)(n.code,{children:"requirements.txt"})}),"\nand will be pulled in as necessary."]}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-via-pip",children:"Upgrade via pip"}),"\n",(0,t.jsx)(n.p,{children:"To upgrade via pip:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade rucio-clients\n"})}),"\n",(0,t.jsx)(n.h2,{id:"install-via-pip-and-virtualenv",children:"Install via pip and virtualenv"}),"\n",(0,t.jsxs)(n.p,{children:["To install the Rucio clients in an isolated ",(0,t.jsx)(n.code,{children:"virtualenv"})," environment:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget --no-check-certificate https://raw.github.com/pypa/virtualenv/master/virtualenv.py\npython virtualenv.py rucio\nsource rucio/bin/activate.csh\npip install rucio-clients\nexport RUCIO_HOME=`pwd`/rucio/\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-using-setuppy",children:"Installing using setup.py"}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise, you can install from the distribution using the ",(0,t.jsx)(n.code,{children:"setup.py"}),"\nscript:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python setup.py install\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const s={},l=t.createContext(s);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);