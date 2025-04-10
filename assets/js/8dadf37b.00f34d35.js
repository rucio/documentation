"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4138],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var c=t(96540);const o={},s=c.createContext(o);function a(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),c.createElement(s.Provider,{value:n},e.children)}},71518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"started/concepts/rucio_account","title":"Rucio account","description":"A Rucio account is the unit of assigning privileges in Rucio. It can represent","source":"@site/../docs/started/concepts/rucio_account.md","sourceDirName":"started/concepts","slug":"/started/concepts/rucio_account","permalink":"/documentation/started/concepts/rucio_account","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/rucio_account.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1744282266000,"frontMatter":{"title":"Rucio account"},"sidebar":"docs","previous":{"title":"RSE Expressions","permalink":"/documentation/started/concepts/rse_expressions"},"next":{"title":"Rucio Storage Element","permalink":"/documentation/started/concepts/rucio_storage_element"}}');var o=t(74848),s=t(28453);const a={title:"Rucio account"},r=void 0,i={},u=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A Rucio account is the unit of assigning privileges in Rucio. It can represent\nindividual users (such as user1, user2, user3, ...), a group of users (such as\ngroup1, group2, group3, ...) or a centralized production activity such as\nservice accounts for data generation (datagen) or the workflow management\nsystems (wfms). A Rucio account is identified by a string."}),"\n",(0,o.jsxs)(n.p,{children:["All interactions with Rucio are always conducted by a Rucio account. A Rucio\nuser is authenticated by credentials, such as X509 certificates,\nusername/password, SSH, OIDC, or tokens. Credentials can map to one or more\naccounts (N",":M"," mapping). The Rucio authentication system checks if the used\ncredentials are authorized to use the supplied Rucio account.  The figure below\ngives an example of the mapping between credentials and Rucio accounts:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mermaid",children:'graph LR\n    g["i"]\n\n    subgraph TB sgcred[Credentials]\n        b["X509 <br> (barisits)"]\n        v["X509 <br> (vgaronne)"]\n        g["X509 <br> (graemes)"]\n    end\n\n    subgraph TB sgaccount[Rucio Accounts]\n        account_b[barisits]\n        account_v[vgaronne]\n        account_p[prod]\n        account_h[higgs]\n    end\n\n    b --\x3e account_b\n    v --\x3e account_v\n    v --\x3e account_h\n    g --\x3e account_p \n    g --\x3e account_h\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);