(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[6],{15:function(e,a,t){"use strict";var n,r=t(3),o=t.n(r),s=(n="cr",{create:e=>{var a=e;return"string"===typeof n&&(a="".concat(n,"-").concat(e)),{b:(...e)=>o()(a,e),e:(e,...t)=>o()("".concat(a,"__").concat(e),t),m:(e,...t)=>o()("".concat(a,"--").concat(e),t)}}});a.a=s},23:function(e,a,t){e.exports=t.p+"static/media/LeftNavBack.cc6110cc.JPG"},34:function(e,a,t){e.exports=t.p+"static/media/logo_200.5faf4221.png"},36:function(e,a,t){e.exports=t.p+"static/media/QAAutomator.3dac03e8.JPG"},41:function(e,a,t){"use strict";var n=t(17),r=t(0),o=t.n(r);Object(n.a)(Object(n.a)({},o.a),{},{ID:o.a.oneOfType([o.a.string,o.a.number]).isRequired,component:o.a.oneOfType([o.a.string,o.a.func]),date:o.a.oneOfType([o.a.instanceOf(Date),o.a.string])})},43:function(e,a,t){e.exports=t(80)},79:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(13),s=t.n(o),c=(t(48),t(49),t(50),t(34)),i=t.n(c),l=t(82),p=t(83),m=t(84),d=t(85),u=t(86);class h extends r.a.Component{constructor(...e){super(...e),this.changeAuthState=e=>a=>{a.preventDefault(),this.props.onChangeAuthState(e)},this.handleSubmit=e=>{e.preventDefault()}}get isLogin(){return this.props.authState===b}get isSignup(){return this.props.authState===g}renderButtonText(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}render(){var e=this.props,a=e.showLogo,t=e.usernameLabel,n=e.usernameInputProps,o=e.passwordLabel,s=e.passwordInputProps,c=e.confirmPasswordLabel,h=e.confirmPasswordInputProps,f=e.children,E=e.onLogoClick;return r.a.createElement(l.a,{onSubmit:this.handleSubmit},a&&r.a.createElement("div",{className:"text-center pb-4"},r.a.createElement("img",{src:i.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:E})),r.a.createElement(p.a,null,r.a.createElement(m.a,{for:t},t),r.a.createElement(d.a,n)),r.a.createElement(p.a,null,r.a.createElement(m.a,{for:o},o),r.a.createElement(d.a,s)),this.isSignup&&r.a.createElement(p.a,null,r.a.createElement(m.a,{for:c},c),r.a.createElement(d.a,h)),r.a.createElement(p.a,{check:!0},r.a.createElement(m.a,{check:!0},r.a.createElement(d.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),r.a.createElement("hr",null),r.a.createElement(u.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),r.a.createElement("div",{className:"text-center pt-1"},r.a.createElement("h6",null,"or"),r.a.createElement("h6",null,this.isSignup?r.a.createElement("a",{href:"#login",onClick:this.changeAuthState(b)},"Login"):r.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(g)},"Signup"))),f)}}var b="LOGIN",g="SIGNUP";h.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:()=>{}};var f=h,E=t(0),x=t.n(E),y=t(24);y.a.initialize("UA-110410381-1");class S extends r.a.Component{componentDidMount(){this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView)}sendPageView(e){y.a.set({page:e.pathname}),y.a.pageview(e.pathname)}render(){return this.props.children}}S.contextTypes={router:x.a.object};var v=S,k=t(11),I=t(15),C=t(87),w=I.a.create("content"),P=e=>{var a=e.tag,t=e.className,n=Object(k.a)(e,["tag","className"]),o=w.b(t);return r.a.createElement(a,Object.assign({className:o},n))};P.defaultProps={tag:C.a};var N=P,O=e=>{var a=e.children,t=Object(k.a)(e,["children"]);return r.a.createElement("main",Object.assign({className:"cr-app bg-light"},t),r.a.createElement(N,{fluid:!0},a))},z=t(88),A=t(89),L=t(90),W=()=>r.a.createElement(z.a,null,r.a.createElement(A.a,{navbar:!0},r.a.createElement(L.a,null,"Copyright \xa9 2021 by QA Automator (Pravesh Jha)"))),M=t(17),D=(t(41),t(3)),j=t.n(D),T=t(36),B=e=>{var a=e.rounded,t=e.circle,n=e.src,o=e.size,s=e.tag,c=e.className,i=e.style,l=Object(k.a)(e,["rounded","circle","src","size","tag","className","style"]),p=j()({"rounded-circle":t,rounded:a},c);return r.a.createElement(s,Object.assign({src:n,style:Object(M.a)({width:o,height:o},i),className:p},l))};B.defaultProps={tag:"img",rounded:!1,circle:!0,size:50,src:t.n(T).a,style:{}};var R=B,U=t(6),G=t(91),q=I.a.create("header");class J extends r.a.Component{constructor(...e){super(...e),this.state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},this.toggleNotificationPopover=()=>{this.setState({isOpenNotificationPopover:!this.state.isOpenNotificationPopover}),this.state.isNotificationConfirmed||this.setState({isNotificationConfirmed:!0})},this.toggleUserCardPopover=()=>{this.setState({isOpenUserCardPopover:!this.state.isOpenUserCardPopover})},this.handleSidebarControlButton=e=>{e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")}}render(){return r.a.createElement(z.a,{light:!0,expand:!0,className:q.b("bg-white")},r.a.createElement(A.a,{navbar:!0,className:"mr-2"},r.a.createElement(u.a,{outline:!0,onClick:this.handleSidebarControlButton},r.a.createElement(U.a,{size:25}))),r.a.createElement(A.a,{navbar:!0,className:q.e("nav-right")},r.a.createElement(L.a,null,r.a.createElement(G.a,{id:"Popover2"},r.a.createElement(R,{size:50,className:"can-click"})))))}}var _=J,Q=t(39),V=e=>{var a=e.component,t=e.layout,n=Object(k.a)(e,["component","layout"]);return r.a.createElement(Q.a,Object.assign({},n,{render:e=>r.a.createElement(t,null,r.a.createElement(a,e))}))},F=t(37),H=t.n(F),K={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};class X extends r.a.Component{constructor(...e){super(...e),this.handleContentClick=e=>{!X.isSidebarOpen()||"xs"!==this.props.breakpoint&&"sm"!==this.props.breakpoint&&"md"!==this.props.breakpoint||this.openSidebar("close")}}static isSidebarOpen(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}componentWillReceiveProps({breakpoint:e}){e!==this.props.breakpoint&&this.checkBreakpoint(e)}componentDidMount(){this.checkBreakpoint(this.props.breakpoint)}checkBreakpoint(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}openSidebar(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}render(){var e=this.props.children;return r.a.createElement("main",{className:"cr-app bg-light"},r.a.createElement(le,null),r.a.createElement(N,{fluid:!0,onClick:this.handleContentClick},r.a.createElement(_,null),e,r.a.createElement(W,null)),r.a.createElement(H.a,{dismissible:!1,ref:e=>this.notificationSystem=e,style:K}))}}var Y=X,Z=t(23),$=t.n(Z),ee=e=>r.a.createElement("a",Object.assign({href:"",target:"_blank",rel:"noopener noreferrer"},e)),ae=t(99),te=t(92),ne={backgroundImage:'url("'.concat($.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},re=[{to:"/auwebtestattribute",name:"Test Attribute",exact:!1,Icon:U.f},{to:"/auweblocatorproperty",name:"Locator Property",exact:!1,Icon:U.f},{to:"/auwebtestdata",name:"Test Data",exact:!1,Icon:U.f},{to:"/auwebupdatetestscript",name:"Update Test Script",exact:!1,Icon:U.f},{to:"/auwebcustomfunction",name:"Custom Function",exact:!1,Icon:U.f},{to:"/auwebseleniumgrid",name:"Selenium Grid",exact:!1,Icon:U.f},{to:"/auwebconfiguration",name:"Configuration Setup",exact:!1,Icon:U.f}],oe=[{to:"/auwebdashboard",name:"dashboard",exact:!1,Icon:U.b},{to:"/auwebexecutionlabpage",name:"Execution Lab",exact:!1,Icon:U.d},{to:"/auwebtestscripts",name:"Test Scripts",exact:!1,Icon:U.g},{to:"/auwebcicd",name:"CI/CD Support",exact:!1,Icon:U.g}],se=[{to:"/auapidashboard",name:"dashboard",exact:!1,Icon:U.b},{to:"/auapiapiscripts",name:"API Scripts",exact:!1,Icon:U.g},{to:"/auapiupdateapiscripts",name:"Update API Scripts",exact:!1,Icon:U.g},{to:"/auapiexecutionlabpage",name:"Execution Lab",exact:!1,Icon:U.d},{to:"/auapicicd",name:"CI/CD Support",exact:!1,Icon:U.g},{to:"/auapiconfiguration",name:"Configuration",exact:!1,Icon:U.g}],ce=I.a.create("sidebar");class ie extends r.a.Component{constructor(...e){super(...e),this.state={isOpenComponents:!1,isOpenContents:!1,isOpenPages:!1,IsOpenWeb:!1,IsOpenMob:!1,IsOpenAPI:!1,IsOpenWebMaintenance:!1},this.handleClick=e=>()=>{this.setState(a=>{var t=a["isOpen".concat(e)];return console.log(e),{["isOpen".concat(e)]:!t}})}}handleClickAPI(e){this.state.IsOpenAPI?this.setState({IsOpenAPI:!1}):this.setState({IsOpenAPI:!0})}handleClickWeb(e){this.state.IsOpenWeb?(this.setState({IsOpenWeb:!1}),this.setState({IsOpenWebMaintenance:!1})):this.setState({IsOpenWeb:!0})}handleClickMobile(e){this.state.IsOpenMob?this.setState({IsOpenMob:!1}):this.setState({IsOpenMob:!0})}handleClickWebMaintenance(e){this.state.IsOpenWebMaintenance?this.setState({IsOpenWebMaintenance:!1}):this.setState({IsOpenWebMaintenance:!0})}render(){return r.a.createElement("aside",{className:ce.b(),"data-image":$.a},r.a.createElement("div",{className:ce.e("background"),style:ne}),r.a.createElement("div",{className:ce.e("content")},r.a.createElement(z.a,null,r.a.createElement(ee,{className:"navbar-brand d-flex"},r.a.createElement("span",{className:"text-white"},"QA Automator"))),r.a.createElement(A.a,{vertical:!0},r.a.createElement(L.a,{onClick:this.handleClickWeb.bind(this),className:ce.e("nav-item")},r.a.createElement(G.a,{className:ce.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(U.c,{className:ce.e("nav-item-icon"),Icon:$.a}),r.a.createElement("span",{className:" align-self-start"},"Web Testing")),r.a.createElement(U.e,{className:ce.e("nav-item-icon"),style:{padding:0,transform:this.state.IsOpenWeb?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(te.a,{isOpen:this.state.IsOpenWeb},oe.map(({to:e,name:a,exact:t,Icon:n},o)=>r.a.createElement(L.a,{key:o,className:ce.e("nav-item")},r.a.createElement(G.a,{id:"navItem-".concat(a,"-").concat(o),className:"text-uppercase",tag:ae.a,to:e,activeClassName:"active",exact:t},r.a.createElement(n,{className:ce.e("nav-item-icon")}),r.a.createElement("span",{className:""},a)))),r.a.createElement(L.a,{className:ce.e("nav-item"),onClick:this.handleClickWebMaintenance.bind(this)},r.a.createElement(G.a,{className:ce.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement("span",{className:" align-self-start"},"Maintenance")),r.a.createElement(U.e,{className:ce.e("nav-item-icon"),style:{padding:0,transform:this.state.IsOpenWebMaintenance?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(te.a,{isOpen:this.state.IsOpenWebMaintenance},re.map(({to:e,name:a,exact:t,Icon:n},o)=>r.a.createElement(L.a,{key:o,className:ce.e("nav-item")},r.a.createElement(G.a,{id:"navItem-".concat(a,"-").concat(o),className:"text-uppercase",tag:ae.a,to:e,activeClassName:"active",exact:t},r.a.createElement(n,{className:ce.e("nav-item-icon")}),r.a.createElement("span",{className:""},a)))))),r.a.createElement(L.a,{onClick:this.handleClickAPI.bind(this),className:ce.e("nav-item")},r.a.createElement(G.a,{className:ce.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(U.c,{className:ce.e("nav-item-icon")}),r.a.createElement("span",{className:" align-self-start"},"API Testing")),r.a.createElement(U.e,{className:ce.e("nav-item-icon"),style:{padding:0,transform:this.state.IsOpenAPI?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(te.a,{isOpen:this.state.IsOpenAPI},se.map(({to:e,name:a,exact:t,Icon:n},o)=>r.a.createElement(L.a,{key:o,className:ce.e("nav-item")},r.a.createElement(G.a,{id:"navItem-".concat(a,"-").concat(o),className:"text-uppercase",tag:ae.a,to:e,activeClassName:"active",exact:t},r.a.createElement(n,{className:ce.e("nav-item-icon")}),r.a.createElement("span",{className:""},a))))))))}}var le=ie,pe=t(93),me=({color:e="primary"})=>r.a.createElement("div",{className:"cr-page-spinner"},r.a.createElement(pe.a,{color:e})),de=t(94),ue=t(95),he=t(96);class be extends r.a.Component{constructor(...e){super(...e),this.handleAuthState=e=>{e===b?this.props.history.push("/login"):this.props.history.push("/signup")},this.handleLogoClick=()=>{this.props.history.push("/")}}render(){return r.a.createElement(de.a,{style:{height:"100vh",justifyContent:"center",alignItems:"center"}},r.a.createElement(ue.a,{md:6,lg:4},r.a.createElement(he.a,{body:!0},r.a.createElement(f,{authState:this.props.authState,onChangeAuthState:this.handleAuthState,onLogoClick:this.handleLogoClick}))))}}var ge=be,fe=t(38),Ee=t.n(fe),xe=t(97),ye=t(100),Se=t(98),ve=(t(79),r.a.lazy(()=>Promise.all([t.e(0),t.e(24)]).then(t.bind(null,589)))),ke=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(19)]).then(t.bind(null,608))),Ie=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(15)]).then(t.bind(null,592))),Ce=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,593))),we=r.a.lazy(()=>Promise.all([t.e(0),t.e(22)]).then(t.bind(null,594))),Pe=r.a.lazy(()=>Promise.all([t.e(0),t.e(21)]).then(t.bind(null,595))),Ne=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(26)]).then(t.bind(null,596))),Oe=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(23)]).then(t.bind(null,597))),ze=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,598))),Ae=r.a.lazy(()=>Promise.all([t.e(0),t.e(17)]).then(t.bind(null,599))),Le=r.a.lazy(()=>Promise.all([t.e(0),t.e(16)]).then(t.bind(null,600))),We=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(5),t.e(20)]).then(t.bind(null,601))),Me=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(3),t.e(5),t.e(25)]).then(t.bind(null,602))),De=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,603))),je=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,604))),Te=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(9)]).then(t.bind(null,605))),Be=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(18)]).then(t.bind(null,606))),Re=r.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(5),t.e(10)]).then(t.bind(null,607)));class Ue extends r.a.Component{render(){return r.a.createElement(xe.a,{basename:"/".concat(".".split("/").pop())},r.a.createElement(v,null,r.a.createElement(ye.a,null,r.a.createElement(V,{exact:!0,path:"/login",layout:O,component:e=>r.a.createElement(ge,Object.assign({},e,{authState:b}))}),r.a.createElement(V,{exact:!0,path:"/signup",layout:O,component:e=>r.a.createElement(ge,Object.assign({},e,{authState:g}))}),r.a.createElement(Y,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(me,null)},r.a.createElement(Q.a,{exact:!0,path:"/",component:ve}),r.a.createElement(Q.a,{exact:!0,path:"/auwebdashboard",component:ke}),r.a.createElement(Q.a,{exact:!0,path:"/auwebexecutionlabpage",component:Ie}),r.a.createElement(Q.a,{exact:!0,path:"/auwebtestscripts",component:Ce}),r.a.createElement(Q.a,{exact:!0,path:"/auwebtestattribute",component:we}),r.a.createElement(Q.a,{exact:!0,path:"/auweblocatorproperty",component:Pe}),r.a.createElement(Q.a,{exact:!0,path:"/auwebtestdata",component:Ne}),r.a.createElement(Q.a,{exact:!0,path:"/auwebupdatetestscript",component:Oe}),r.a.createElement(Q.a,{exact:!0,path:"/auwebcustomfunction",component:ze}),r.a.createElement(Q.a,{exact:!0,path:"/auwebseleniumgrid",component:Ae}),r.a.createElement(Q.a,{exact:!0,path:"/auwebconfiguration",component:Le}),r.a.createElement(Q.a,{exact:!0,path:"/auwebcicd",component:We}),r.a.createElement(Q.a,{exact:!0,path:"/auapiconfiguration",component:Me}),r.a.createElement(Q.a,{exact:!0,path:"/auapiapiscripts",component:De}),r.a.createElement(Q.a,{exact:!0,path:"/auapiupdateapiscripts",component:je}),r.a.createElement(Q.a,{exact:!0,path:"/auapiexecutionlabpage",component:Te}),r.a.createElement(Q.a,{exact:!0,path:"/auapicicd",component:Re}),r.a.createElement(Q.a,{exact:!0,path:"/auapidashboard",component:Be}))),r.a.createElement(Se.a,{to:"/"}))))}}var Ge=Ee()(({width:e})=>e<575?{breakpoint:"xs"}:576<e&&e<767?{breakpoint:"sm"}:768<e&&e<991?{breakpoint:"md"}:992<e&&e<1199?{breakpoint:"lg"}:e>1200?{breakpoint:"xl"}:{breakpoint:"xs"})(Ue);s.a.render(r.a.createElement(Ge,null),document.getElementById("root"))}},[[43,7,13]]]);
//# sourceMappingURL=main.3f0c6bc0.chunk.js.map