(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[20],{102:function(e,t,a){"use strict";var s=a(11),i=a(3),n=a.n(i),r=a(1),o=a.n(r),l=(a(40),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),c=e=>{var t,a=e.tag,i=e.className,r=e.type,c=Object(s.a)(e,["tag","className","type"]),d=n()({[r]:!!r},i);return t=a||(!a&&l[r]?l[r]:"p"),o.a.createElement(t,Object.assign({},c,{className:d}))};c.defaultProps={type:"p"},t.a=c},103:function(e,t,a){"use strict";var s=a(11),i=a(1),n=a.n(i),r=(a(40),a(15)),o=a(598),l=a(599),c=a(102),d=r.a.create("page"),u=e=>{var t=e.title,a=e.breadcrumbs,i=e.tag,r=e.className,u=e.children,m=Object(s.a)(e,["title","breadcrumbs","tag","className","children"]),p=d.b("px-3",r);return n.a.createElement(i,Object.assign({className:p},m),n.a.createElement("div",{className:d.e("header")},t&&"string"===typeof t?n.a.createElement(c.a,{type:"h1",className:d.e("title")},t):t,a&&n.a.createElement(o.a,{className:d.e("breadcrumb")},n.a.createElement(l.a,null,"Home"),a.length&&a.map(({name:e,active:t},a)=>n.a.createElement(l.a,{key:a,active:t},e)))),u)};u.defaultProps={tag:"div",title:""},t.a=u},104:function(e,t,a){"use strict";var s=a(4),i=a(5),n=a(18),r=a(1),o=a.n(r),l=a(0),c=a.n(l),d=a(3),u=a.n(d),m=a(19),p=a(2),h=Object(n.a)({},m.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:p.m,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),g=Object(n.a)({},m.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var t=e.tag,a=e.baseClass,n=e.baseClassActive,r=e.className,l=e.cssModule,c=e.children,d=e.innerRef,h=Object(i.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),g=Object(p.k)(h,p.a),b=Object(p.j)(h,p.a);return o.a.createElement(m.Transition,g,(function(e){var i="entered"===e,m=Object(p.i)(u()(r,a,i&&n),l);return o.a.createElement(t,Object(s.a)({className:m},b,{ref:d}),c)}))}b.propTypes=h,b.defaultProps=g,t.a=b},120:function(e,t,a){"use strict";var s=a(4),i=a(5),n=a(1),r=a.n(n),o=a(0),l=a.n(o),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,wrapTag:u.m,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},p=function(e){var t,a=e.className,n=e.cssModule,o=e.children,l=e.toggle,c=e.tag,m=e.wrapTag,p=e.closeAriaLabel,h=e.charCode,g=e.close,b=Object(i.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),S=Object(u.i)(d()(a,"modal-header"),n);if(!g&&l){var f="number"===typeof h?String.fromCharCode(h):h;t=r.a.createElement("button",{type:"button",onClick:l,className:Object(u.i)("close",n),"aria-label":p},r.a.createElement("span",{"aria-hidden":"true"},f))}return r.a.createElement(m,Object(s.a)({},b,{className:S}),r.a.createElement(c,{className:Object(u.i)("modal-title",n)},o),g||t)};p.propTypes=m,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p},121:function(e,t,a){"use strict";var s=a(4),i=a(5),n=a(1),r=a.n(n),o=a(0),l=a.n(o),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(i.a)(e,["className","cssModule","tag"]),l=Object(u.i)(d()(t,"modal-body"),a);return r.a.createElement(n,Object(s.a)({},o,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},123:function(e,t,a){"use strict";var s=a(18),i=a(4),n=a(10),r=a(7),o=a(1),l=a.n(o),c=a(0),d=a.n(c),u=a(3),m=a.n(u),p=a(14),h=a.n(p),g=a(2),b={children:d.a.node.isRequired,node:d.a.any},S=function(e){function t(){return e.apply(this,arguments)||this}Object(n.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return g.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);S.propTypes=b;var f=S,E=a(104);function v(){}var O=d.a.shape(E.a.propTypes),N={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:O,modalTransition:O,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},C=Object.keys(N),y={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:v,onClosed:v,modalTransition:{timeout:g.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:g.c.Fade}},T=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(r.a)(Object(r.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(r.a)(Object(r.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(r.a)(Object(r.a)(a))),a.handleEscape=a.handleEscape.bind(Object(r.a)(Object(r.a)(a))),a.handleTab=a.handleTab.bind(Object(r.a)(Object(r.a)(a))),a.onOpened=a.onOpened.bind(Object(r.a)(Object(r.a)(a))),a.onClosed=a.onClosed.bind(Object(r.a)(Object(r.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||v)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||v)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(g.g.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,s=this.getFocusedChild(),i=0,n=0;n<a;n+=1)if(t[n]===s){i=n;break}e.shiftKey&&0===i?(e.preventDefault(),t[a-1].focus()):e.shiftKey||i!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(g.h)(),Object(g.e)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=m()(document.body.className,Object(g.i)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(g.i)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(g.l)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(g.j)(this.props,C);return l.a.createElement("div",Object(i.a)({},a,{className:Object(g.i)(m()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(g.i)(m()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,n=e.backdropClassName,r=e.cssModule,o=e.isOpen,c=e.backdrop,d=e.role,u=e.labelledBy,p=e.external,h=e.innerRef,b={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:d,tabIndex:"-1"},S=this.props.fade,v=Object(s.a)({},E.a.defaultProps,this.props.modalTransition,{baseClass:S?this.props.modalTransition.baseClass:"",timeout:S?this.props.modalTransition.timeout:0}),O=Object(s.a)({},E.a.defaultProps,this.props.backdropTransition,{baseClass:S?this.props.backdropTransition.baseClass:"",timeout:S?this.props.backdropTransition.timeout:0}),N=c&&(S?l.a.createElement(E.a,Object(i.a)({},O,{in:o&&!!c,cssModule:r,className:Object(g.i)(m()("modal-backdrop",n),r)})):l.a.createElement("div",{className:Object(g.i)(m()("modal-backdrop","show",n),r)}));return l.a.createElement(f,{node:this._element},l.a.createElement("div",{className:Object(g.i)(t)},l.a.createElement(E.a,Object(i.a)({},b,v,{in:o,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(g.i)(m()("modal",a),r),innerRef:h}),p,this.renderModalDialog()),N))}return null},t}(l.a.Component);T.propTypes=N,T.defaultProps=y,T.openCount=0;t.a=T},129:function(e,t,a){"use strict";var s=a(4),i=a(5),n=a(1),r=a.n(n),o=a(0),l=a.n(o),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(i.a)(e,["className","cssModule","tag"]),l=Object(u.i)(d()(t,"modal-footer"),a);return r.a.createElement(n,Object(s.a)({},o,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},137:function(e,t,a){"use strict";var s=a(4),i=a(5),n=a(1),r=a.n(n),o=a(0),l=a.n(o),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,n=e.top,o=e.bottom,l=e.tag,c=Object(i.a)(e,["className","cssModule","top","bottom","tag"]),m="card-img";n&&(m="card-img-top"),o&&(m="card-img-bottom");var p=Object(u.i)(d()(t,m),a);return r.a.createElement(l,Object(s.a)({},c,{className:p}))};p.propTypes=m,p.defaultProps={tag:"img"},t.a=p},330:function(e,t,a){e.exports=a.p+"static/media/CICDTool.8a16b75e.JPG"},610:function(e,t,a){"use strict";a.r(t);var s=a(111),i=a.n(s),n=a(112),r=a(103),o=a(1),l=a.n(o),c=a(330),d=a.n(c),u=a(94),m=a(95),p=a(96),h=a(210),g=a(137),b=a(207),S=a(82),f=a(83),E=a(84),v=a(85),O=a(86),N=a(123),C=a(120),y=a(121),T=a(129),j=(a(135),a(149)),w=a(124),k=a.n(w),P=(a(125),a(126),a(127)),x=a.n(P),F=a(128),R=a.n(F),D=a(113),I=a.n(D),M=(a(114),window.ENV.APIURL);function A({options:e}){return e.map(e=>l.a.createElement("option",{key:e.Environment},e.Environment))}function _(e){var t=[];return Object.keys(e).map(a=>t.push(e[a])),t}function B({options:e}){return Object.keys(e).map(t=>l.a.createElement("option",null,e[t]))}function L(e){try{var t=[];e.includes("+")&&(t=e.split("+"),e=t.join("auplussignau")),e.includes(":")&&(t=e.split(":"),e=t.join("aucolumnsignau")),e.includes("{")&&(t=e.split("{"),e=t.join("aucurlyopenbracketau")),e.includes("}")&&(t=e.split("}"),e=t.join("aucurlyclosebracketau")),e.includes("[")&&(t=e.split("["),e=t.join("aubigopenbracketau")),e.includes("]")&&(t=e.split("]"),e=t.join("aubigclosebracketau")),e.includes('"')&&(t=e.split('"'),e=t.join("audoublequotesau")),e.includes("=")&&(t=e.split("="),e=t.join("auequalsignau"))}catch(a){}return e}class V extends l.a.Component{constructor(e){var t;super(e),t=this,this.toggle=e=>()=>{if(!e)return this.setState({modal:!this.state.modal});this.setState({["modal_".concat(e)]:!this.state["modal_".concat(e)]})},this.handleOnSelect=(e,t)=>{t?this.setState(()=>({selected:[...this.state.selected,e.id]})):this.setState(()=>({selected:this.state.selected.filter(t=>t!==e.id)}))},this.handleOnSelectAll=(e,t)=>{var a=t.map(e=>e.id);e?this.setState(()=>({selected:a})):this.setState(()=>({selected:[]}))},this.state={Browser:"",ENV:"",RegressionENV:"",RegressionBrowser:"",CommonTestData:[],ConfigurationFile:[],loader:!0,loaderLoadTestScripts:!1,testSuiteData:[],selected:[],allModuleName:[],allModule:[],testSuiteResponce:[],NewTestSuite:"",allCICDSuite:"",apiTestSuiteName:"",cicdAPI:"",LoadScriptButtonenabled:!1,modalValidationText:"",PreSelectedTestScripts:[],EmailTrigger:"NO",FromEmail:"",FromPassword:"",ReceiverEmail:"",checkFromEmai:!1,checkPassword:!1,checkRecemail:!1,pageloadingStatus:!1},function(){var e=Object(n.a)(i.a.mark((function e(){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({pageloadingStatus:!0}),e.next=3,fetch(M+"dashboard");case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,t.setState({pageloadingStatus:!1}),s.success&&(t.setState({pageloadingStatus:!0}),t.setState({ConfigurationFile:s.Configuration}),t.setState({CommonTestData:s.CommonTestData}),t.setState({ENV:t.state.ConfigurationFile.DefaultEnvironment}),t.setState({Browser:t.state.ConfigurationFile.DefaultBrowser}),t.setState({RegressionENV:t.state.ConfigurationFile.DefaultEnvironment}),t.setState({RegressionBrowser:t.state.ConfigurationFile.DefaultBrowser}),function(){var e=Object(n.a)(i.a.mark((function e(){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(M+"testcase?moduleName=");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.setState({allModuleName:s}),function(){var e=Object(n.a)(i.a.mark((function e(){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(M+"execution");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.setState({testSuiteResponce:s}),function(){var e=Object(n.a)(i.a.mark((function e(){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(M+"cicd");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.setState({allCICDSuite:s}),t.setState({loader:!1}),t.setState({pageloadingStatus:!1});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}updateENV(e){this.setState({ENV:e.target.value})}updateBrowser(e){this.setState({Browser:e.target.value})}updateRegressionENV(e){var t=e.target.value;if(this.setState({RegressionENV:t}),""!==t.trim()){var a=this.state.RegressionBrowser;if(""!==a.trim()){var s=this.state.apiTestSuiteName;if(""!==s.trim()){var i=M+"cicd?env="+t+"&browser="+a+"&testsuitename="+s+"&baseAPI="+M;this.setState({cicdAPI:i})}else this.setState({cicdAPI:""})}else this.setState({cicdAPI:""})}else this.setState({cicdAPI:""})}updateRegressionBrowser(e){var t=e.target.value;if(this.setState({RegressionBrowser:t}),""!==t.trim()){var a=this.state.RegressionENV;if(""!==a.trim()){var s=this.state.apiTestSuiteName;if(""!==s.trim()){var i=M+"cicd?env="+a+"&browser="+t+"&testsuitename="+s+"&baseAPI="+M;this.setState({cicdAPI:i})}else this.setState({cicdAPI:""})}else this.setState({cicdAPI:""})}else this.setState({cicdAPI:""})}updateAPITestSuite(e){var t=e.target.value;if(this.setState({apiTestSuiteName:t}),""!==t.trim()){var a=this.state.RegressionENV;if(""!==a.trim()){var s=this.state.RegressionBrowser;if(""!==s.trim()){var i=M+"cicd?env="+a+"&browser="+s+"&testsuitename="+t+"&baseAPI="+M;this.setState({cicdAPI:i})}else this.setState({cicdAPI:""})}else this.setState({cicdAPI:""})}else this.setState({cicdAPI:""})}LoadallTestscripts(){this.setState({loaderLoadTestScripts:!0}),console.log(this.state.allModuleName);var e=_(this.state.allModuleName);this.setState({allModule:e});var t={},a=[],s=this.state.testSuiteResponce;Object.keys(s).map(e=>a.push(e));for(var i=0,n=[],r=1;r<=a.length;r++)for(var o=s[a[r-1]],l=1;l<=o.length;l++)i+=1,t.id=i,t.moduleName=a[r-1],t.testid=o[l-1].TestID,t.testcasename=o[l-1].TestName,n.push({id:i,moduleName:a[r-1],testid:o[l-1].TestID,testcasename:o[l-1].TestName});this.setState({testSuiteData:n}),this.setState({selected:[]}),this.setState({loaderLoadTestScripts:!1})}SaveTestSuite(){var e=this;if(0==this.state.testSuiteData.length)return this.setState({modal:!0}),this.setState({modalValidationText:"Please upload test scripts first."});var t=this.state.selected;if(0==t.length)return this.setState({modal:!0}),this.setState({modalValidationText:"Please select test scripts before saving new test suite."});var a=this.state.NewTestSuite;if(""===a.trim())return this.setState({modal:!0}),this.setState({modalValidationText:"Execution Suite Name* can not be empty."});var s=this.state.EmailTrigger,r="",o="",l="";if("YES"===s){var c="";if(r=this.state.FromEmail,o=this.state.FromPassword,l=this.state.ReceiverEmail,""===r.trim()?(c="From Email Address",this.setState({checkFromEmai:!0})):this.setState({checkFromEmai:!1}),""===o.trim()?(c+="Password",this.setState({checkPassword:!0})):this.setState({checkPassword:!1}),""===l.trim()?(c+="Reciever Email Address",this.setState({checkRecemail:!0})):this.setState({checkRecemail:!1}),""!==c.trim())return}var d=[],u={};u.EmailOption=L(s),u.FormEmailAddress=L(r),u.FEmailPassword=L(o),u.ReceiverEmailAddress=L(l),this.setState({loaderLoadTestScripts:!0}),d.push(u);for(var m=0;m<t.length;m++){var p={};p.Module=L(this.state.testSuiteData[t[m]-1].moduleName),p.TestID=L(this.state.testSuiteData[t[m]-1].testid),p.TestCaseName=L(this.state.testSuiteData[t[m]-1].testcasename),d.push(p)}var h=JSON.stringify(JSON.stringify(d));console.log(h);var g=M+"cicd?SuiteName="+a,b={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:h};(function(){var t=Object(n.a)(i.a.mark((function t(){var a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({pageloadingStatus:!0}),t.next=3,fetch(g,b);case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,e.setState({loaderLoadTestScripts:!1}),e.setState({pageloadingStatus:!1}),s.success&&(e.setState({testSuiteData:[]}),e.setState({NewTestSuite:""}),e.setState({PreSelectedTestScripts:[]}),e.setState({EmailTrigger:"NO"}),e.setState({FromEmail:""}),e.setState({FromPassword:""}),e.setState({ReceiverEmail:""})),e.setState({modal:!0}),e.setState({modalValidationText:s.servermessage});case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}updateRegressionSuite(e){var t=this,a=e,s=this.state.NewTestSuite;if(a!==s)if(this.setState({NewTestSuite:a}),""!==a.trim()){this.setState({testSuiteData:""});var r=function(e,t){var a=[];Object.keys(e).map(t=>a.push(e[t]));for(var s=0;s<a.length;s++)if(a[s].trim().toLowerCase()===t.trim().toLowerCase())return!0;return!1}(r=this.state.allCICDSuite,a),o="NO",l="",c="",d="";if(r)this.setState({LoadScriptButtonenabled:!0}),this.setState({loaderLoadTestScripts:!0}),function(){var e=Object(n.a)(i.a.mark((function e(){var s,n,r,u,m,p,h,g,b,S;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({pageloadingStatus:!0}),e.next=3,fetch(M+"cicd?TestSuiteName="+a);case 3:return s=e.sent,e.next=6,s.json();case 6:for(n=e.sent,t.setState({pageloadingStatus:!1}),o=n.EmailOption,l=n.FormEmailAddress,c=n.FEmailPassword,d=n.ReceiverEmailAddress,t.setState({EmailTrigger:o}),t.setState({FromEmail:l}),t.setState({FromPassword:c}),t.setState({ReceiverEmail:d}),r=n.TestSuite,console.log(r),u=0,m=[],p=[],{},h=0;h<r.length;h++)p.push(h+1),u+=1,g=r[h].Module,b=r[h].TestID,S=r[h].TestCaseName,m.push({id:u,moduleName:g,testid:b,testcasename:S});t.setState({selected:p}),t.setState({testSuiteData:m}),t.setState({loaderLoadTestScripts:!1}),t.setState({PreSelectedTestScripts:p});case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();else this.setState({LoadScriptButtonenabled:!0}),this.setState({PreSelectedTestScripts:[]}),this.setState({EmailTrigger:"NO"}),this.setState({FromEmail:""}),this.setState({FromPassword:""}),this.setState({ReceiverEmail:""})}else this.setState({LoadScriptButtonenabled:!1})}updateEmailOption(e){var t=e.target.value;this.setState({EmailTrigger:e.target.value}),"YES"===t?(this.setState({FromEmail:this.state.ConfigurationFile.SenderEmail}),this.setState({FromPassword:this.state.ConfigurationFile.SenderPassword}),this.setState({ReceiverEmail:this.state.ConfigurationFile.ReceiverEmail})):(this.setState({FromEmail:""}),this.setState({FromPassword:""}),this.setState({ReceiverEmail:""}),this.setState({checkFromEmai:!1}),this.setState({checkPassword:!1}),this.setState({checkRecemail:!1}))}UpdateFromEmail(e){this.setState({checkFromEmai:!1}),this.setState({FromEmail:e.target.value})}UpdatePassword(e){this.setState({checkPassword:!1}),this.setState({FromPassword:e.target.value})}UpdateRecieverEmail(e){this.setState({checkRecemail:!1}),this.setState({ReceiverEmail:e.target.value})}render(){var e={mode:"checkbox",selected:this.state.selected,onSelect:this.handleOnSelect,onSelectAll:this.handleOnSelectAll},t=[{dataField:"id",text:"#",headerStyle:{width:"50px"}},{dataField:"moduleName",text:"Module Name",filter:Object(F.textFilter)()},{dataField:"testid",text:"Test ID",filter:Object(F.textFilter)()},{dataField:"testcasename",text:"Test Case Name",filter:Object(F.textFilter)()}];return l.a.createElement(r.a,{title:"CI/CD Support",breadcrumbs:[{name:"CI/CD Support",active:!0}]},l.a.createElement(I.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loader}),l.a.createElement(u.a,null,l.a.createElement(m.a,{lg:12,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement(g.a,{className:"card-img-right",src:d.a,style:{width:"auto",height:100}})))),l.a.createElement(m.a,{lg:6,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Regression Suite"),l.a.createElement(b.a,null,l.a.createElement(S.a,null,l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:6},"Environment*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{disabled:this.state.pageloadingStatus,type:"select",name:"envlist",value:this.state.RegressionENV,onChange:this.updateRegressionENV.bind(this)},l.a.createElement(A,{options:this.state.CommonTestData})))),l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:6},"Browser*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{disabled:this.state.pageloadingStatus,type:"select",name:"browser",value:this.state.RegressionBrowser,onChange:this.updateRegressionBrowser.bind(this)},l.a.createElement("option",null,"CHROME"),l.a.createElement("option",null,"FIREFOX")))),l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:6},"Execution Suite Name*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{disabled:this.state.pageloadingStatus,type:"select",name:"testsuitename",value:this.state.apiTestSuiteName,onChange:this.updateAPITestSuite.bind(this)},l.a.createElement("option",null),l.a.createElement("option",null,"RegressionSuite"),l.a.createElement(B,{options:this.state.allCICDSuite})))),l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:6},"Execution API"),l.a.createElement(m.a,{disabled:"disabled"},l.a.createElement(v.a,{disabled:this.state.pageloadingStatus,readOnly:!0,value:this.state.cicdAPI}))))))),l.a.createElement(m.a,{lg:6,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Create Your Custom Test Suite"),l.a.createElement(b.a,null,l.a.createElement(S.a,null,l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:6},"Execution Suite Name*"),l.a.createElement(m.a,null,l.a.createElement(j.Combobox,{disabled:this.state.pageloadingStatus,name:"newTestSuite",value:this.state.NewTestSuite,data:_(this.state.allCICDSuite),caseSensitive:!1,minLength:3,filter:"contains",onChange:this.updateRegressionSuite.bind(this)})))),l.a.createElement(S.a,null,l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"Email Trigger*"),l.a.createElement(m.a,null,l.a.createElement(v.a,{disabled:this.state.pageloadingStatus,type:"select",name:"email",value:this.state.EmailTrigger,onChange:this.updateEmailOption.bind(this)},l.a.createElement("option",null,"YES"),l.a.createElement("option",null,"NO")))),l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"From Email"),l.a.createElement(m.a,null,l.a.createElement(v.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkFromEmai,type:"input",value:this.state.FromEmail,onChange:this.UpdateFromEmail.bind(this),type:"input",name:"fromemail",placeholder:"enter your Email Address"})))," ",l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"Password"),l.a.createElement(m.a,null,l.a.createElement(v.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkPassword,type:"password",value:this.state.FromPassword,onChange:this.UpdatePassword.bind(this),name:"fromPassword",placeholder:"enter your Password"})))," ",l.a.createElement(f.a,{col:!0},l.a.createElement(E.a,{for:"exampleSelect",sm:5},"Receiver Email"),l.a.createElement(m.a,null,l.a.createElement(v.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkRecemail,type:"input",value:this.state.ReceiverEmail,onChange:this.UpdateRecieverEmail.bind(this),name:"receiveremail",placeholder:"enter your Receiver email"})))," "))))),l.a.createElement(u.a,null,l.a.createElement(m.a,{lg:12,md:6,sm:6,xs:12},l.a.createElement(p.a,null,l.a.createElement(h.a,null,"Test Suite*",l.a.createElement(O.a,{disabled:this.state.pageloadingStatus,color:"primary",onClick:this.SaveTestSuite.bind(this),name:"saveTestScript"},"Save Test Suite"),l.a.createElement(O.a,{disabled:!this.state.LoadScriptButtonenabled,onClick:this.LoadallTestscripts.bind(this),name:"loadTestSuite",color:"primary"},"Load Test Scripts"),l.a.createElement(I.a,{type:"ThreeDots",color:"#00BFFF",height:30,width:100,timeout:12e4,visible:this.state.loaderLoadTestScripts}),l.a.createElement(N.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},l.a.createElement(C.a,{toggle:this.toggle()}," Information"),l.a.createElement(y.a,null,this.state.modalValidationText),l.a.createElement(T.a,null,l.a.createElement(O.a,{color:"secondary",onClick:this.toggle()},"OK")))),l.a.createElement(b.a,null,l.a.createElement(k.a,{keyField:"id",data:this.state.testSuiteData,columns:t,striped:!0,hover:!0,condensed:!0,pagination:x()({sizePerPage:20,hideSizePerPage:!0,hidePageListOnlyOnePage:!0}),selectRow:e,filter:R()()}))))))}}t.default=V}}]);
//# sourceMappingURL=20.dbf8e9bf.chunk.js.map