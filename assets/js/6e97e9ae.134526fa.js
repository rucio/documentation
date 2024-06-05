"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5868],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,d=p["".concat(l,".").concat(g)]||p[g]||f[g]||i;return t?o.createElement(d,a(a({ref:n},c),{},{components:t})):o.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},72138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var o=t(58168),r=t(98587),i=(t(96540),t(15680)),a=["components"],s={id:"qos_rse_config",title:"QoS RSE Configuration"},l=void 0,u={unversionedId:"operator/qos_rse_config",id:"operator/qos_rse_config",title:"QoS RSE Configuration",description:"QoS RSE Configuration",source:"@site/../docs/operator/qos_rse_config.md",sourceDirName:"operator",slug:"/operator/qos_rse_config",permalink:"/documentation/operator/qos_rse_config",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/qos_rse_config.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1717586588,formattedLastUpdatedAt:"Jun 5, 2024",frontMatter:{id:"qos_rse_config",title:"QoS RSE Configuration"},sidebar:"docs",previous:{title:"S3 Storage Configuration",permalink:"/documentation/operator/s3_rse_config"},next:{title:"Notifications",permalink:"/documentation/operator/notifications"}},c={},p=[{value:"QoS RSE Configuration",id:"qos-rse-configuration",level:2},{value:"How to Configure an RSE for QoS",id:"how-to-configure-an-rse-for-qos",level:3}],f={toc:p},g="wrapper";function d(e){var n=e.components,t=(0,r.A)(e,a);return(0,i.yg)(g,(0,o.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"qos-rse-configuration"},"QoS RSE Configuration"),(0,i.yg)("p",null,"The following steps show how to configure an RSE to use the Rucio storage-managed QoS feature (with two classes, disk-buffer and tape).  Rucio now supports a site's ability to set how long data lives on a tape or disk-buffer at the RSE level.  Data is pinned with a value (in seconds) at the time of injection/creation/buffering allowing data site operators to better tune data persistence and movement. "),(0,i.yg)("h3",{id:"how-to-configure-an-rse-for-qos"},"How to Configure an RSE for QoS"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Set the following RSE attributes:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"staging_required: True\nmaximum_pin_lifetime: 345600 (in seconds)\nstaging_buffer: {{value}} # this value can be the name of the RSE.\n")))),(0,i.yg)("p",null,"Upon executing ",(0,i.yg)("inlineCode",{parentName:"p"},"rucio-admin rse info <RSE>")," command one should see something like the following in settings:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"```bash\n                                .\n                                .\nAttributes:\n===========\n  maximum_pin_lifetime: 345600\n  staging_buffer: <RSE>\n  staging_required: True\n                                .\n                                .\n```\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Either values of ",(0,i.yg)("inlineCode",{parentName:"li"},"DISK")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"TAPE")," are supported for the RSE setting ",(0,i.yg)("inlineCode",{parentName:"li"},"rse_type"),".  However workflows using PanDA job brokerage require this value to be ",(0,i.yg)("inlineCode",{parentName:"li"},"DISK"),".")),(0,i.yg)("p",null,"Upon executing ",(0,i.yg)("inlineCode",{parentName:"p"},"rucio-admin rse info <RSE>")," command one should see something like the following in settings:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"```bash\n                                .\n                                .\nSettings:\n=========\n  rse: <RSE>\n  rse_type: DISK\n                                .\n                                .\n```\n")))}d.isMDXComponent=!0}}]);