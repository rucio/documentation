"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13019"],{19214(e,t,a){a.d(t,{S:()=>l});var i=a(10843);function l(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}(0,a(99389).K2)(l,"populateCommonDb"),(0,i.K)(l,"populateCommonDb")},95862(e,t,a){a.d(t,{diagram:()=>k});var i=a(19214),l=a(38695);a(59212);var r=a(36863);a(34532),a(96761),a(17383),a(3782),a(78287),a(64452),a(39880),a(74469),a(11893),a(26279),a(14973),a(91414),a(64056),a(47553),a(94144);var n=a(13619);a(88750);var s=a(96724),o=a(8132),c=a(10843);a(99389);var p=a(47829),d=s.UI.pie,h={sections:new Map,showData:!1,config:d},g=h.sections,u=h.showData,m=structuredClone(d),f=(0,c.K)(()=>structuredClone(m),"getConfig"),$=(0,c.K)(()=>{g=new Map,u=h.showData,(0,s.IU)()},"clear"),x=(0,c.K)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,t),o.Rm.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),w=(0,c.K)(()=>g,"getSections"),S=(0,c.K)(e=>{u=e},"setShowData"),v=(0,c.K)(()=>u,"getShowData"),b={getConfig:f,clear:$,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:x,getSections:w,setShowData:S,getShowData:v},y=(0,c.K)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),C={parse:(0,c.K)(async e=>{let t=await (0,l.q)("pie",e);o.Rm.debug(t),y(t,b)},"parse")},D=(0,c.K)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),T=(0,c.K)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return(0,p.rLf)().value(e=>e.value).sort(null)(a)},"createPieArcs"),k={parser:C,db:b,renderer:{draw:(0,c.K)((e,t,a,i)=>{o.Rm.debug("rendering pie chart\n"+e);let l=i.db,c=(0,s.D7)(),d=(0,n.$t)(l.getConfig(),c.pie),h=(0,r.D)(t),g=h.append("g");g.attr("transform","translate(225,225)");let{themeVariables:u}=c,[m]=(0,n.I5)(u.pieOuterStrokeWidth);m??=2;let f=d.legendPosition,$=d.textPosition,x=d.donutHole>0&&d.donutHole<=.9?d.donutHole:0,w=(0,p.JLW)().innerRadius(185*x).outerRadius(185),S=(0,p.JLW)().innerRadius(185*$).outerRadius(185*$),v=g.append("g");v.append("circle").attr("cx",0).attr("cy",0).attr("r",185+m/2).attr("class","pieOuterCircle");let b=l.getSections(),y=T(b),C=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],D=0;b.forEach(e=>{D+=e});let k=y.filter(e=>"0"!==(e.data.value/D*100).toFixed(0)),K=(0,p.UMr)(C).domain([...b.keys()]);v.selectAll("mySlices").data(k).enter().append("path").attr("d",w).attr("fill",e=>K(e.data.label)).attr("class",e=>{let t="pieCircle";return"hover"===d.highlightSlice?t+=" highlightedOnHover":d.highlightSlice===e.data.label&&(t+=" highlighted"),t}),v.selectAll("mySlices").data(k).enter().append("text").text(e=>(e.data.value/D*100).toFixed(0)+"%").attr("transform",e=>"translate("+S.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let A=g.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText"),R=[...b.entries()].map(([e,t])=>({label:e,value:t})),O=g.selectAll(".legend").data(R).enter().append("g").attr("class","legend");O.append("rect").attr("width",18).attr("height",18).style("fill",e=>K(e.label)).style("stroke",e=>K(e.label)),O.append("text").attr("x",22).attr("y",14).text(e=>l.getShowData()?`${e.label} [${e.value}]`:e.label);let M=Math.max(...O.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),z=450,W=490,F=22*R.length;switch(f){case"center":O.attr("transform",(e,t)=>"translate("+(-M/2-22)+","+(22*t-22*R.length/2)+")");break;case"top":z+=F,O.attr("transform",(e,t)=>`translate(${-M/2-22}, ${22*t-185})`),v.attr("transform",()=>`translate(0, ${F+22})`);break;case"bottom":z+=F,O.attr("transform",(e,t)=>"translate("+(-M/2-22)+","+(22*t- -207)+")");break;case"left":W+=22+M,O.attr("transform",(e,t)=>"translate(-207,"+(22*t-22*R.length/2)+")"),v.attr("transform",()=>`translate(${M+18+4}, 0)`);break;default:W+=22+M,O.attr("transform",(e,t)=>"translate(216,"+(22*t-22*R.length/2)+")")}let H=A.node()?.getBoundingClientRect().width??0,L=Math.min(0,225-H/2),I=Math.max(W,225+H/2)-L;h.attr("viewBox",`${L} 0 ${I} ${z}`),(0,s.a$)(h,z,I,d.useMaxWidth)},"draw")},styles:D}}}]);