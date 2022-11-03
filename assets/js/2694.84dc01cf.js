"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2694],{6068:(e,t,o)=>{o.d(t,{vz:()=>r,A3:()=>E,if:()=>w,uc:()=>c,y:()=>k});var a=o(67294),n=o(60338);function r(e){let{seriesName:t="Count",data:o,loading:r=!1,clear:l=!1,size:i,n:c,deps:s=[],categoryIndex:d,valueIndex:m,type:u="repo"}=e;i="lang"===u?48:i;const h=(0,a.useMemo)((()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:(l?0:8)+("owner"===u?24:0),top:l?0:16,bottom:l?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:o.map((e=>e[d])),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){switch(u){case"repo":default:return e;case"owner":case"lang":return`${e} {${e.replace(/[+-[\]]/g,"_")}|}`}},rich:(()=>{switch(u){case"owner":return o.reduce(((e,t)=>{var o;return e[String(t[d]).replace(/[-[\]]/g,"_")]={backgroundColor:{image:(o=`${t[d]}`,o.includes("[bot]")?"https://github.com/github.png":`https://github.com/${o}.png`)},width:24,height:24},e}),{});case"lang":return o.reduce(((e,t)=>(e[String(t[d]).replace(/\+/g,"_")]={backgroundColor:{image:`/img/lang/${t[d]}.png`},width:48,height:48},e)),{})}})()}},series:[{name:t,data:o.map((e=>e[m])),type:"bar",barWidth:l?i/2:i}]})),[o,...s,d,m,i,l]),p=(0,a.useMemo)((()=>r?400:Math.max(Math.min(c,o.length),5)*(i*(l?1:1.5))),[i,r,l]),b=(0,a.useMemo)((()=>({click:e=>{("repo"===u&&"name"in e||"owner"===u&&"name"in e)&&window.open(`https://github.com/${e.name}`)}})),[]);return a.createElement(n.ZP,{height:p,showLoading:r,option:h,notMerge:!1,lazyUpdate:!0,style:{marginBottom:16,borderRadius:"var(--ifm-global-radius)"},onEvents:b})}var l=o(55673),i=o(61802);function c(e){let{seriesName:t,loading:o,data:r,compareData:c,categoryIndex:s,valueIndex:d,deps:m=[]}=e;const u=function(e){return(0,a.useMemo)((()=>({type:"pie",radius:["35%","65%"],avoidLabelOverlap:!1,itemStyle:{borderColor:e?"#1e1e1f":"#ffffff",borderWidth:0},label:{show:!1,position:"center",formatter:"{b}: {d}%"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold",formatter:"{b}\n\n{c}"}},labelLine:{show:!1}})),[e])}((0,l.e)()),h=(0,a.useMemo)((()=>{const e=[],o={...u,name:t,data:r.map((e=>{const t=e[s];return{value:e[d],name:t}}))};if(e.push(o),(0,i.nf)(c)){o.center=["25%","55%"];const a={...u,name:t,center:["65%","55%"],data:c.map((e=>{const t=e[s];return{value:e[d],name:t}}))};e.push(a)}return e}),[u,r,c,...m,s,d]),p=(0,a.useMemo)((()=>({tooltip:Object.assign({trigger:"item"}),legend:{type:"scroll",orient:"vertical",right:"20px",top:20,bottom:20,x:"right",formatter:"{name}"},series:h,grid:{left:16,top:16,bottom:16,right:16,containLabel:!0}})),[h]);return a.createElement(n.ZP,{aspectRatio:16/9,showLoading:o,option:p,notMerge:!1,lazyUpdate:!0})}var s=o(91262),d=o(58316),m=o(54029),u=o(62097),h=o(61225),p=o(61953),b=o(55343),g=o(31538);const y=[];for(let M=-12;M<=13;M++)y.push(M);const f=["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"],x=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];function w(e){let{loading:t,data:o,xAxisColumnName:r,yAxisColumnName:l,valueColumnName:i,deps:c}=e;const w=(0,u.Z)(),v=(0,h.Z)(w.breakpoints.down("sm")),[S,C]=(0,a.useState)(0),E=(0,a.useCallback)((e=>{C(e.target.value)}),[C]),{data:L,min:k,max:M}=(0,a.useMemo)((()=>{let e=Number.MAX_VALUE,t=Number.MIN_VALUE;const a=o.map((o=>{const a=Number(o[i]);return a>t&&(t=a),a<e&&(e=a),[(o[r]+S+24)%24,o[l],a]}));return{data:a,min:e,max:t}}),[o,S,v]),N=(0,a.useMemo)((()=>({tooltip:{show:!0},grid:v?{top:"0",bottom:"0",left:"0",right:"0",containLabel:!0}:{top:"0",bottom:"16%",left:"0",right:"0",containLabel:!0},xAxis:{type:"category",data:f,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold"},inverse:!1},yAxis:{type:"category",data:x,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold",rotate:0,fontSize:v?8:void 0},position:"top"},visualMap:{show:!v,min:k,max:M,orient:v?void 0:"horizontal",left:"center",bottom:0},series:{type:"heatmap",data:L,label:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}})),[L,v,...c]);return a.createElement(s.Z,null,(()=>a.createElement(p.Z,null,a.createElement(p.Z,{sx:{minWidth:120,mb:1}},a.createElement(b.Z,{size:"small"},a.createElement(d.Z,{id:"zone-select-label"},"Timezone (UTC)"),a.createElement(m.Z,{labelId:"zone-select-label",id:"zone-select",value:S,label:"Timezone (UTC)",onChange:E,sx:{minWidth:120},variant:"standard"},y.map((e=>a.createElement(g.Z,{key:e,value:e},e>0?`+${e}`:e)))))),a.createElement(n.ZP,{aspectRatio:2.4,showLoading:t,option:N,notMerge:!1,lazyUpdate:!0}))))}var v=o(14850),S=o(34673),C=o(91655);function E(e){let{sql:t,children:o}=e;return a.createElement(a.Fragment,null,a.createElement(S.Z,{summary:a.createElement("summary",null,"Click here to expand SQL")},(e=>{let t;return t=e?a.createElement(v.Z,{className:"language-sql"},e):a.createElement(p.Z,{sx:{pt:.5}},a.createElement(C.Z,{width:"80%"}),a.createElement(C.Z,{width:"50%"}),a.createElement(C.Z,{width:"70%"})),t})(t)),o)}var L=o(30454);function k(e){void 0===e&&(e=!0);const t="#E9EAEE",o="#2c2c2c",a="#3c3c3c",n=function(){return{axisLine:{lineStyle:{color:a}},axisTick:{lineStyle:{color:a}},axisLabel:{textStyle:{color:"#ccc"}},splitLine:{lineStyle:{type:"dashed",color:"#2c2c2c",width:.5}},splitArea:{areaStyle:{color:t}},axisPointer:{label:{backgroundColor:o}},nameTextStyle:{fontStyle:"italic",color:"gray"}}},r=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],l={color:r,backgroundColor:"rgba(24, 25, 26)",tooltip:{backgroundColor:o,textStyle:{color:t},borderWidth:0,shadowBlur:8,shadowColor:"rgba(0, 0, 0, 0.618)",shadowOffsetX:0,shadowOffsetY:0,axisPointer:{lineStyle:{color:t},crossStyle:{color:t}},renderMode:"html"},grid:{containLabel:!0},legend:{textStyle:{color:t}},textStyle:{color:t},title:{left:"center",top:8,textStyle:{color:t,fontSize:14,align:"center"}},toolbox:{iconStyle:{normal:{borderColor:t}}},dataZoom:{textStyle:{color:t}},timeline:{lineStyle:{color:t},itemStyle:{normal:{color:r[1]}},label:{normal:{textStyle:{color:t}}},controlStyle:{normal:{color:t,borderColor:t}}},timeAxis:n(),logAxis:n(),valueAxis:n(),categoryAxis:n(),line:{symbol:"circle"},graph:{color:r},gauge:{title:{textStyle:{color:t}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}},visualMap:{textStyle:{color:t}}};l.categoryAxis.splitLine.show=!1,(0,L.aW)("dark",l)}},67350:(e,t,o)=>{o.r(t),o.d(t,{ECharts:()=>T,EChartsx:()=>R.zU,LineChart:()=>R.wW,RankChart:()=>R.V1,SortingBarChart:()=>R.NC,echarts:()=>W});var a=o(6068),n=o(61802),r=o(85267),l=o.n(r),i=o(30454),c=o(68023),s=o(38180),d=o(33989),m=o(91758),u=o(76010),h=o(31281),p=o(8690),b=o(82739),g=o(82811),y=o(20878),f=o(83520),x=o(27240),w=o(76395),v=o(91416),S=o(6378),C=o(72127),E=o(87462),L=o(67294),k=o(66284),M=o(40172),N=o(91262),Z=o(62466),A=o(10981),B=o(99845);const z=L.forwardRef((function(e,t){let{aspectRatio:o,height:a,style:r,opts:l,echartsStyle:i,observe:c,...s}=e;const d=(0,L.useMemo)((()=>(0,n.r)(o)?"100%":(0,n.ES)(a,400)),[o,a]),{inView:m}=(0,L.useContext)(A.Z),u=(0,L.useMemo)((()=>{const e=Object.assign({},i);return e.height=d,e.width="100%",e.overflow="hidden",e}),[r,o,d,m]),h=(0,L.useMemo)((()=>Object.assign({devicePixelRatio:"undefined"==typeof window?1:window.devicePixelRatio,renderer:"canvas",height:"auto",locale:"en"},l)),[l,d]),{echartsRef:p}=(0,L.useContext)(Z.Z),[b,g]=(0,L.useState)(),y=(0,L.useCallback)((e=>{(0,n.nf)(p)&&(p.current=e??null),g(e),(0,n.nf)(t)&&("function"==typeof t?t(e):t.current=e),null==c||c((null==e?void 0:e.ele)??null)}),[t,p,c]),f=(0,L.useMemo)((()=>L.createElement(I,{aspectRatio:o,height:d})),[o,d]);return(0,L.useLayoutEffect)((()=>{null==b||b.resize()}),[b]),L.createElement(N.Z,{fallback:f},(()=>{const e=L.createElement(k.Z,(0,E.Z)({},s,{opts:h,style:u,ref:y,theme:"dark",echarts:B}));return(0,n.z0)(o)?L.createElement(M.oM,{ratio:o,style:r},e):e}))})),I=e=>{let{height:t,aspectRatio:o}=e;return(0,n.z0)(o)?L.createElement(M.oM,{ratio:o},L.createElement("div",null)):L.createElement("div",{style:{height:(0,n.ES)(t,400),width:"100%"}})},T=z;var R=o(64705),W=o(29359);(0,a.y)(),(0,n.Rw)((0,i.FU)("world"))&&(0,i.je)("world",l()()),(0,c.D)([s.N,d.N,m.N,h.N,p.N,b.N,v.N,S.T,g.N,C.z,y.N,f.N,x.N,w.N,u.N])},8106:(e,t,o)=>{o.d(t,{Z:()=>i});var a=o(67294),n=o(86010),r=o(95999);const l={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function i(e){let{code:t,className:o}=e;const[i,c]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),d=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),c(!0),s.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":i?(0,r.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,r.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,r.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,n.Z)("clean-btn",o,l.copyButton,i&&l.copyButtonCopied),onClick:d},a.createElement("span",{className:l.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:l.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:l.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}}}]);