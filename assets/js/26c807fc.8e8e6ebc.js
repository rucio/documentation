"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1788],{2621:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"started/concepts/metadata_attributes","title":"Metadata attributes","description":"Meta-data associated with a dataset/file is represented using","source":"@site/../docs/started/concepts/metadata_attributes.md","sourceDirName":"started/concepts","slug":"/started/concepts/metadata_attributes","permalink":"/documentation/started/concepts/metadata_attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/metadata_attributes.md","tags":[],"version":"current","lastUpdatedBy":"zhangxt-ihep","lastUpdatedAt":1731343954000,"frontMatter":{"id":"metadata_attributes","title":"Metadata attributes"},"sidebar":"docs","previous":{"title":"Rucio Storage Element","permalink":"/documentation/started/concepts/rucio_storage_element"},"next":{"title":"Permission model","permalink":"/documentation/started/concepts/permission_model"}}');var n=a(74848),i=a(28453);const o={id:"metadata_attributes",title:"Metadata attributes"},r=void 0,c={},d=[];function u(t){const e={code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Meta-data associated with a dataset/file is represented using\nattribute/value pairs. Meta-data attributes are classified into four\ncategories:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"System-defined attributes"}),": size (bytes), checksums (adler32, md5),\ncreationtime, modificationtime, status, length (datasets/containers)"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Physics attributes"}),": GUID, number of events, project, datatype, run_number,\nstream_name, prod_step, version, campaign, lumiblocknr"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Workflow management attributes"}),": storing information like which task\n(task_id) or job (panda_id) produced the file"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"Data management attributes"}),": necessary for the organisation of data on the\ngrid (see Replica Management section)"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"For datasets, it is possible that the value of a meta-data attribute is\na function of the meta-data of its constituents, e.g. the total size is\nthe sum of the sizes of the constituents. In this case it is not\npossible to assign a value to it."})]})}function l(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},28453:(t,e,a)=>{a.d(e,{R:()=>o,x:()=>r});var s=a(96540);const n={},i=s.createContext(n);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);