(this.webpackJsonpso_showcase=this.webpackJsonpso_showcase||[]).push([[0],{106:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(12),i=a.n(o),s=a(41),l=a(15),u=a(80),m=a(184),p=a(175),d=a(176),f=a(82),b=a.n(f),h=a(76),g=a.n(h),E=a(77),w=a.n(E),y=a(78),O=a.n(y),v=a(34),x=a(39);!function(e){e.typescript="typescript",e.react="react",e.redux="redux"}(n||(n={}));var j={typescript:{questions:["56749824","57102790","57086672","56801439"]},react:{questions:["56979012","57132814","57066711","56926343","56893971","56828846"]},redux:{questions:["58449561","57210138","57197859","57085611","57044956","56694102"]}},k=a(163),N=a(165),S=a(29),I=Object(u.a)((function(e){return Object(m.a)({appBar:Object(l.a)({zIndex:e.zIndex.drawer+1},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240})})})),P=function(){var e=I();return c.a.createElement(k.a,{position:"fixed",className:e.appBar},c.a.createElement(N.a,null,c.a.createElement(S.a,{variant:"h6",noWrap:!0},"My best answers on StackOverflow")))},q=a(181),T=a(167),_=Object(u.a)((function(e){return Object(m.a)({drawer:Object(l.a)({overflowX:"hidden",width:e.spacing(7)+1,flexShrink:0},e.breakpoints.up("sm"),{width:240}),drawerPaper:Object(l.a)({overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:240}),toolbar:e.mixins.toolbar})})),R=function(e){var t=e.children,a=_();return c.a.createElement(q.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},anchor:"left"},c.a.createElement("div",{className:a.toolbar}),c.a.createElement(T.a,null),t)},L=a(86),D=a(168),A=Object(u.a)((function(e){return Object(m.a)({typography:{margin:"1rem"},header:{fontWeight:"bold",margin:"1rem"}})})),G=function(){var e=A();return c.a.createElement(L.a,null,c.a.createElement(S.a,{className:e.header},"Reasons to create this app"),c.a.createElement(S.a,{paragraph:!0,className:e.typography},"I carefully read Auth0 requirements for several jobs and many time seen suggestion to give link for personal blog.",c.a.createElement("br",null),"I'm not active blogger (may be yet?) so I've decided to share my best posts on StackOverflow. They can be considered as short blog posts.",c.a.createElement("br",null),"Also this app is located on glitch.com to showcase my development shills"),c.a.createElement(S.a,{className:e.header},"How does it works"),c.a.createElement(S.a,{paragraph:!0,className:e.typography},"This application will fetch selected posts from StackOverflow and present them grouped by primary Tag."),c.a.createElement(S.a,{paragraph:!0,className:e.typography,component:"div"},"Application (SPA) is based on:",c.a.createElement("ul",null,c.a.createElement("li",null,"React"),c.a.createElement("li",null,"Typescript"),c.a.createElement("li",null,"Redux for storing state (questions and answers)"),c.a.createElement("li",null,"Redux-Saga for async actions like fetching posts"),c.a.createElement("li",null,"Storybook for developing components in isolation"),c.a.createElement("li",null,"Jest for unittesting"),c.a.createElement("li",null,"Material UI for building interface"))),c.a.createElement(S.a,{paragraph:!0,className:e.typography},"The app is built from source, which is located on ",c.a.createElement(D.a,{href:"https://github.com/fyodore82/so_showcase"},"GitHub")),c.a.createElement(S.a,{paragraph:!0,className:e.typography},"Then app is built and put on Glitch where you can explore it."),c.a.createElement(S.a,{paragraph:!0,className:e.typography},"Hope you enjoy it!"))},Q=a(183),C=a(169),W=a(170),B=a(46),H=function(e){var t=e.to,a=e.name,n=e.Icon;return c.a.createElement(Q.a,{to:t,component:B.b},c.a.createElement(C.a,null,c.a.createElement(n,null)),c.a.createElement(W.a,{primary:a}))},z=a(182),M=a(171),U=a(172),J=a(55),V=a.n(J),X=a(173);a(106);function Y(e){var t={"<code>":"<code class='itembodycode'>","<pre>":"<pre class='itembodypre'>","<p>":"<p class='itembodyp'>"};return e.replace(/<\w+>/g,(function(e){return t[e]?t[e]:e}))}var F=Object(u.a)((function(e){return Object(m.a)({root:{overflowWrap:"break-word"}})})),$=function(e){var t=e.bodyText,a=F();return c.a.createElement("div",{className:a.root,dangerouslySetInnerHTML:{__html:Y(t)}})},K=Object(u.a)((function(e){return Object(m.a)({root:{marginBottom:"4px",width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},extensionDetail:{flexDirection:"column"},expansionSummary:{position:"sticky",top:0,backgroundColor:"inherit",boxShadow:"0px 2px gainsboro"},contentsGridItem:{flexGrow:1,minWidth:0},qaGridItem:{fontSize:"xx-large",padding:"1rem"},divider:{height:"3px",margin:"1rem"},link:{alignSelf:"flex-end",margin:"0.5rem"}})})),Z=function(e){var t=e.header,a=e.question,n=e.answer,r=e.questionNum,o=K();return c.a.createElement("div",{className:o.root},c.a.createElement(z.a,null,c.a.createElement(M.a,{className:o.expansionSummary,expandIcon:c.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},c.a.createElement(S.a,{className:o.heading,dangerouslySetInnerHTML:{__html:t}})),c.a.createElement(U.a,{className:o.extensionDetail},c.a.createElement(X.a,{container:!0,direction:"column",wrap:"nowrap"},c.a.createElement(X.a,{className:o.link,item:!0},c.a.createElement(D.a,{href:"https://stackoverflow.com/questions/".concat(r)},"Link to question on StackOverflow")),c.a.createElement(X.a,{item:!0,container:!0,direction:"row",wrap:"nowrap"},c.a.createElement(X.a,{item:!0,className:o.qaGridItem},"Q"),c.a.createElement(X.a,{item:!0,className:o.contentsGridItem},c.a.createElement($,{bodyText:a}))),c.a.createElement(X.a,{item:!0},c.a.createElement(T.a,{className:o.divider})),c.a.createElement(X.a,{item:!0,container:!0,direction:"row",wrap:"nowrap"},c.a.createElement(X.a,{item:!0,className:o.qaGridItem},"A"),c.a.createElement(X.a,{item:!0,className:o.contentsGridItem},c.a.createElement($,{bodyText:n})))))))},ee=a(174),te=Object(u.a)((function(e){return Object(m.a)({root:{marginBottom:"4px",width:"100%"},expansionPanel:{backgroundColor:"inherit !important"},lineralProgress:{width:"100%",height:"1rem"}})})),ae=function(){var e=te();return c.a.createElement("div",{className:e.root},c.a.createElement(z.a,{disabled:!0,className:e.expansionPanel},c.a.createElement(M.a,{expandIcon:c.a.createElement(V.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},c.a.createElement(ee.a,{className:e.lineralProgress}))))},ne=Object(u.a)((function(e){return Object(m.a)({answerList:{overflowY:"auto",overflowX:"hidden"}})})),re=function(e){var t=e.isLoading,a=e.answers,n=ne();return c.a.createElement("div",{className:n.answerList},t?c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,{key:1}),c.a.createElement(ae,{key:2}),c.a.createElement(ae,{key:3})):a&&Object.entries(a).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return c.a.createElement(Z,{key:a,header:n.title,question:n.question,answer:n.answer,questionNum:a})})))},ce=Object(u.a)((function(e){var t;return Object(m.a)({root:{display:"flex"},toolbar:e.mixins.toolbar,content:(t={flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3),height:"100%",width:"calc(100% - ".concat(e.spacing(7)+1,"px)"),left:e.spacing(7)+1},Object(l.a)(t,e.breakpoints.up("sm"),{left:240,width:"calc(100% - ".concat(240,"px)")}),Object(l.a)(t,"top",0),Object(l.a)(t,"position","absolute"),Object(l.a)(t,"display","flex"),Object(l.a)(t,"flexDirection","column"),t)})})),oe={typescript:{menuName:c.a.createElement(H,{key:"typescript",to:"/typescript",name:"TypeScript",Icon:function(){return c.a.createElement("img",{src:O.a,alt:"",style:{width:"24px"}})}}),route:function(e,t){return c.a.createElement(v.a,{key:"typescript",exact:!0,path:"/typescript",render:function(){return c.a.createElement(re,{answers:t,isLoading:e})}})}},react:{menuName:c.a.createElement(H,{key:"react",to:"/react",name:"React",Icon:function(){return c.a.createElement("img",{src:w.a,alt:"",style:{width:"24px"}})}}),route:function(e,t){return c.a.createElement(v.a,{key:"react",exact:!0,path:"/react",render:function(){return c.a.createElement(re,{answers:t,isLoading:e})}})}},redux:{menuName:c.a.createElement(H,{key:"redux",to:"/redux",name:"Redux",Icon:function(){return c.a.createElement("img",{src:g.a,alt:"",style:{width:"24px"}})}}),route:function(e,t){return c.a.createElement(v.a,{key:"redux",exact:!0,path:"/redux",render:function(){return c.a.createElement(re,{answers:t,isLoading:e})}})}}},ie=Object(x.b)((function(e){return e.answers}))((function(e){var t=e.isLoading,a=e.answers,n=ce();return c.a.createElement("div",{className:n.root},c.a.createElement(p.a,null),c.a.createElement(P,null),c.a.createElement(R,null,c.a.createElement(d.a,null,c.a.createElement(H,{key:"home",to:"/",name:"Home",Icon:b.a}),Object.values(oe).map((function(e){return e.menuName})))),c.a.createElement("main",{className:n.content},c.a.createElement("div",{className:n.toolbar}),c.a.createElement(v.c,null,Object.entries(oe).map((function(e){var n=Object(s.a)(e,2),r=n[0];return n[1].route(t,a[r])})),c.a.createElement(v.a,{key:"home",exact:!0,path:"/",component:G}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(177),le=a(166),ue=a(178),me=a(179),pe=a(180),de=a(129),fe=a(84),be=a.n(fe),he=Object(u.a)((function(e){return Object(m.a)({popper:{zIndex:1e4},card:{backgroundColor:"lightpink"},media:{height:0,paddingTop:"56.25%"}})})),ge=Object(x.b)((function(e){return{answersError:e.answers.error}}),{})((function(e){var t=e.answersError,a=he(),n=Object(r.useState)(!1),o=Object(s.a)(n,2),i=o[0],l=o[1],u=[t].join(" ").trim();return Object(r.useEffect)((function(){u&&l(!0)}),[u]),c.a.createElement(se.a,{id:"errorPopper",open:i,anchorEl:{clientHeight:100,clientWidth:200,getBoundingClientRect:function(){return{bottom:0,right:0,top:20,left:20,height:100,width:100}}},transition:!0,className:a.popper},(function(e){var t=e.TransitionProps;return c.a.createElement(le.a,Object.assign({},t,{timeout:350}),c.a.createElement(ue.a,{className:a.card},c.a.createElement(me.a,{action:c.a.createElement(de.a,{"aria-label":"settings",onClick:function(){return l(!1)}},c.a.createElement(be.a,null)),title:"Error"}),c.a.createElement(pe.a,null,c.a.createElement(S.a,{variant:"body2",color:"textSecondary",component:"p"},u))))}))})),Ee=a(32),we=a(85),ye=a(16),Oe=a.n(ye),ve=a(65),xe=a(22),je=a(64),ke=a.n(je);function Ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ne(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ie=Oe.a.mark(Te),Pe={answers:{},isLoading:!1},qe=[Oe.a.mark((function e(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.d)("REQUEST_QA",Te);case 2:case"end":return e.stop()}}),e)}))];function Te(){var e,t;return Oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.prev=0,t=Oe.a.mark((function t(){var a,n,r,c,o,i;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(xe.b)(ke.a.get,"https://api.stackexchange.com/2.2/questions/".concat(j[e].questions.join(";"),"?site=stackoverflow&filter=withbody"));case 2:return a=t.sent,n=a.data,r=n.items.filter((function(e){return e.accepted_answer_id})),t.next=7,Object(xe.b)(ke.a.get,"https://api.stackexchange.com/2.2/answers/".concat(r.map((function(e){return e.accepted_answer_id})).join(";"),"?site=stackoverflow&filter=withbody"));case 7:return c=t.sent,o=c.data,i=r.reduce((function(e,t,a){return e[t.question_id.toString()]={title:t.title,question:t.body,answer:o.items[a].body},e}),{}),t.next=12,Object(xe.c)({type:"RECEIVE_QA",tag:e,answers:i});case 12:case"end":return t.stop()}}),t)})),a.t0=Oe.a.keys(j);case 3:if((a.t1=a.t0()).done){a.next=8;break}return e=a.t1.value,a.delegateYield(t(),"t2",6);case 6:a.next=3;break;case 8:a.next=14;break;case 10:return a.prev=10,a.t3=a.catch(0),a.next=14,Object(xe.c)({type:"RECEIVE_QA",error:(n=a.t3,n.response?"Status ".concat(n.response.status," (").concat(n.response.statusText,"), info: ").concat(n.response.data&&n.response.data.error_message):n.request?n.request:n.message)});case 14:case"end":return a.stop()}var n}),Ie,null,[[0,10]])}var _e=[Oe.a.mark((function e(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.c)({type:"REQUEST_QA"});case 2:case"end":return e.stop()}}),e)}))],Re=Oe.a.mark(De),Le={answers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_QA":return Se({},e,{isLoading:!0,answers:{},error:void 0});case"RECEIVE_QA":return Se({},e,{isLoading:!1,answers:t.tag&&t.answers?Se({},e.answers,Object(l.a)({},t.tag,Se({},e.answers[t.tag],{},t.answers))):e.answers,error:t.error});default:return e}}};function De(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.a)([].concat(Object(ve.a)(qe.map(xe.b)),Object(ve.a)(_e.map(xe.b))));case 2:case"end":return e.stop()}}),Re)}function Ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ge=function(){var e=Object(we.a)(),t=Object(Ee.a)(e),a=function(e){return Object(Ee.c)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ae(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))}(Le),n=Object(Ee.e)(a,t);return e.run(De),n}();i.a.render(c.a.createElement(x.a,{store:Ge},c.a.createElement(ge,null),c.a.createElement(B.a,null,c.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){e.exports=a.p+"static/media/Redux.5c7392a9.svg"},77:function(e,t,a){e.exports=a.p+"static/media/React.8e26f220.svg"},78:function(e,t,a){e.exports=a.p+"static/media/TS.7595fea1.svg"},96:function(e,t,a){e.exports=a(126)}},[[96,1,2]]]);
//# sourceMappingURL=main.34ad856e.chunk.js.map