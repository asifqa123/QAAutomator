(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[21],{124:function(e,t,a){"use strict";var s=a(11),n=a(3),o=a.n(n),r=a(1),i=a.n(r),l=(a(41),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),c=e=>{var t,a=e.tag,n=e.className,r=e.type,c=Object(s.a)(e,["tag","className","type"]),d=o()({[r]:!!r},n);return t=a||(!a&&l[r]?l[r]:"p"),i.a.createElement(t,Object.assign({},c,{className:d}))};c.defaultProps={type:"p"},t.a=c},125:function(e,t,a){"use strict";t.a={common_deleteIteminJarrayBasedonIndex(e,t,a){try{for(var s=e.filter(e=>e.id!==t),n=t;n<=s.length;n++)s[n-1][a]=n;return s}catch(o){}return e},common_AddIteminJarrayBasedonIndex(e,t,a,s){try{for(var n=[],o=0;o<Number(t);o++)n[o]=e[o];for(var r={},i=0;i<a.length;i++)r[a[i]]="";r[s]=Number(t)+1,n.push(r);for(var l=Number(t);l<e.length;l++)e[l].id=Number(l)+2,n.push(e[l]);return n}catch(c){}return e},common_checkblankvalueinJarray(e,t){try{for(var a=0;a<=e.length;a++)if(""===e[a][t].trim())return!0;return!1}catch(s){}return!1},common_CheckValueFromJson(e,t){var a=[];Object.keys(e).map(t=>a.push(e[t]));for(var s=0;s<a.length;s++)if(a[s].trim().toLowerCase()===t.trim().toLowerCase())return!0;return!1},common_GetListvalueFromJsonResponce(e){var t=[];try{Object.keys(e).map(a=>t.push(e[a]))}catch(a){}return t},common_GetListKeyFromJsonResponce(e){var t=[];return Object.keys(e).map(e=>t.push(e)),t},common_ChangeJsoncontentforServer(e){try{var t=[];e.includes("+")&&(t=e.split("+"),e=t.join("auplussignau")),e.includes(":")&&(t=e.split(":"),e=t.join("aucolumnsignau")),e.includes("{")&&(t=e.split("{"),e=t.join("aucurlyopenbracketau")),e.includes("}")&&(t=e.split("}"),e=t.join("aucurlyclosebracketau")),e.includes("[")&&(t=e.split("["),e=t.join("aubigopenbracketau")),e.includes("]")&&(t=e.split("]"),e=t.join("aubigclosebracketau")),e.includes('"')&&(t=e.split('"'),e=t.join("audoublequotesau")),e.includes("=")&&(t=e.split("="),e=t.join("auequalsignau"))}catch(a){}return e},checkJsonFormat(e){if(""===e.trim())return!0;try{return JSON.parse(e),!0}catch(t){}return!1},getListItem(e,t){var a=[];try{for(var s=0;s<Object.keys(e).length;s++)a.push(e[s][t])}catch(n){}return a},common_RemoveItesmfromListinJobject(e,t){for(var a=Object.keys(e).length,s={},n=1;n<=a;n++){var o=Object.keys(e)[n-1];o.trim().toLowerCase()!==t.trim().toLowerCase()&&(s[o]=e[o])}return s}}},126:function(e,t,a){"use strict";var s=a(11),n=a(1),o=a.n(n),r=(a(41),a(15)),i=a(728),l=a(729),c=a(124),d=r.a.create("page"),m=e=>{var t=e.title,a=e.breadcrumbs,n=e.tag,r=e.className,m=e.children,h=Object(s.a)(e,["title","breadcrumbs","tag","className","children"]),u=d.b("px-3",r);return o.a.createElement(n,Object.assign({className:u},h),o.a.createElement("div",{className:d.e("header")},t&&"string"===typeof t?o.a.createElement(c.a,{type:"h1",className:d.e("title")},t):t,a&&o.a.createElement(i.a,{className:d.e("breadcrumb")},o.a.createElement(l.a,null,"Home"),a.length&&a.map(({name:e,active:t},a)=>o.a.createElement(l.a,{key:a,active:t},e)))),m)};m.defaultProps={tag:"div",title:""},t.a=m},146:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(18),r=a(1),i=a.n(r),l=a(0),c=a.n(l),d=a(3),m=a.n(d),h=a(19),u=a(2),p=Object(o.a)({},h.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:u.m,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),v=Object(o.a)({},h.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:u.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,a=e.baseClass,o=e.baseClassActive,r=e.className,l=e.cssModule,c=e.children,d=e.innerRef,p=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),v=Object(u.k)(p,u.a),g=Object(u.j)(p,u.a);return i.a.createElement(h.Transition,v,(function(e){var n="entered"===e,h=Object(u.i)(m()(r,a,n&&o),l);return i.a.createElement(t,Object(s.a)({className:h},g,{ref:d}),c)}))}g.propTypes=p,g.defaultProps=v,t.a=g},175:function(e,t,a){e.exports=a.p+"static/media/deleterow.9eb1ed86.JPG"},176:function(e,t,a){e.exports=a.p+"static/media/addnewrow.11af4dc5.JPG"},231:function(e,t,a){"use strict";t.a={getExecutionStatusListValue(e,t,a){for(var s=[],n=0;n<e.length;n++){for(var o=e[n],r=0,i=0;i<t.length;i++){if(t[i].moduleName===o)t[i].status.toLowerCase().includes(a.toLowerCase())&&(r=Number(r)+1)}s.push(r)}return s},GetListOfListItemforCommonItem(e){for(var t=Object.keys(e).length,a=[],s=1;s<=t;s++){var n=Object.keys(e)[s-1],o={id:s,commonKeyName:n,commonKeyValue:e[n]};a.push(o)}return a},GetListOfListforActionName(e){for(var t=Object.keys(e).length,a=[],s=1;s<=t;s++){var n=Object.keys(e)[s-1],o={value:n,label:n};a.push(o)}return a},GetModule:(e,t,a)=>e[a[t]-1].moduleName,GetTestID:(e,t,a)=>e[a[t]-1].testid,GetTestName:(e,t,a)=>e[a[t]-1].testcasename,TestInformationForTestSummaryReports(e,t,a,s,n,o){var r={};return r.Module=e,r.testid=t,r.testcasename=a,r.status=s,n=n.split("\\").join("{"),r.reportpath=n,r.duration=o,r}}},257:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),r=a.n(o),i=a(0),l=a.n(i),c=a(3),d=a.n(c),m=a(2),h={tag:m.m,wrapTag:m.m,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},u=function(e){var t,a=e.className,o=e.cssModule,i=e.children,l=e.toggle,c=e.tag,h=e.wrapTag,u=e.closeAriaLabel,p=e.charCode,v=e.close,g=Object(n.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(m.i)(d()(a,"modal-header"),o);if(!v&&l){var b="number"===typeof p?String.fromCharCode(p):p;t=r.a.createElement("button",{type:"button",onClick:l,className:Object(m.i)("close",o),"aria-label":u},r.a.createElement("span",{"aria-hidden":"true"},b))}return r.a.createElement(h,Object(s.a)({},g,{className:f}),r.a.createElement(c,{className:Object(m.i)("modal-title",o)},i),v||t)};u.propTypes=h,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=u},258:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),r=a.n(o),i=a(0),l=a.n(i),c=a(3),d=a.n(c),m=a(2),h={tag:m.m,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(m.i)(d()(t,"modal-body"),a);return r.a.createElement(o,Object(s.a)({},i,{className:l}))};u.propTypes=h,u.defaultProps={tag:"div"},t.a=u},259:function(e,t,a){"use strict";var s=a(18),n=a(4),o=a(10),r=a(7),i=a(1),l=a.n(i),c=a(0),d=a.n(c),m=a(3),h=a.n(m),u=a(13),p=a.n(u),v=a(2),g={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return v.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),p.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);f.propTypes=g;var b=f,S=a(146);function E(){}var C=d.a.shape(S.a.propTypes),y={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:C,modalTransition:C,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},D=Object.keys(y),T={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:E,onClosed:E,modalTransition:{timeout:v.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:v.c.Fade}},O=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(r.a)(Object(r.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(r.a)(Object(r.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(r.a)(Object(r.a)(a))),a.handleEscape=a.handleEscape.bind(Object(r.a)(Object(r.a)(a))),a.handleTab=a.handleTab.bind(Object(r.a)(Object(r.a)(a))),a.onOpened=a.onOpened.bind(Object(r.a)(Object(r.a)(a))),a.onClosed=a.onClosed.bind(Object(r.a)(Object(r.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||E)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||E)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(v.g.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,s=this.getFocusedChild(),n=0,o=0;o<a;o+=1)if(t[o]===s){n=o;break}e.shiftKey&&0===n?(e.preventDefault(),t[a-1].focus()):e.shiftKey||n!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(v.h)(),Object(v.e)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=h()(document.body.className,Object(v.i)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(v.i)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(v.l)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(v.j)(this.props,D);return l.a.createElement("div",Object(n.a)({},a,{className:Object(v.i)(h()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(v.i)(h()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,o=e.backdropClassName,r=e.cssModule,i=e.isOpen,c=e.backdrop,d=e.role,m=e.labelledBy,u=e.external,p=e.innerRef,g={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":m,role:d,tabIndex:"-1"},f=this.props.fade,E=Object(s.a)({},S.a.defaultProps,this.props.modalTransition,{baseClass:f?this.props.modalTransition.baseClass:"",timeout:f?this.props.modalTransition.timeout:0}),C=Object(s.a)({},S.a.defaultProps,this.props.backdropTransition,{baseClass:f?this.props.backdropTransition.baseClass:"",timeout:f?this.props.backdropTransition.timeout:0}),y=c&&(f?l.a.createElement(S.a,Object(n.a)({},C,{in:i&&!!c,cssModule:r,className:Object(v.i)(h()("modal-backdrop",o),r)})):l.a.createElement("div",{className:Object(v.i)(h()("modal-backdrop","show",o),r)}));return l.a.createElement(b,{node:this._element},l.a.createElement("div",{className:Object(v.i)(t)},l.a.createElement(S.a,Object(n.a)({},g,E,{in:i,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(v.i)(h()("modal",a),r),innerRef:p}),u,this.renderModalDialog()),y))}return null},t}(l.a.Component);O.propTypes=y,O.defaultProps=T,O.openCount=0;t.a=O},264:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),r=a.n(o),i=a(0),l=a.n(i),c=a(3),d=a.n(c),m=a(2),h={tag:m.m,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(m.i)(d()(t,"modal-footer"),a);return r.a.createElement(o,Object(s.a)({},i,{className:l}))};u.propTypes=h,u.defaultProps={tag:"div"},t.a=u},734:function(e,t,a){"use strict";a.r(t);var s=a(165),n=a.n(s),o=a(166),r=a(126),i=a(1),l=a.n(i),c=a(175),d=a.n(c),m=a(176),h=a.n(m),u=a(125),p=a(231),v=a(94),g=a(95),f=a(96),b=a(322),S=a(313),E=a(82),C=a(83),y=a(84),D=a(85),T=a(86),O=a(259),k=a(257),w=a(258),j=a(264),N=a(260),x=a(167),I=a.n(x),M=(a(168),a(171)),L=a.n(M),_=(a(172),a(173),a(233)),F=a.n(_),R=a(174),P=a.n(R),V=a(229),K=a.n(V),B=window.ENV.APIURL;function J({options:e}){return e.map(e=>l.a.createElement("option",{key:e.Environment},e.Environment))}function z({options:e}){return Object.keys(e).map(t=>l.a.createElement("option",null,e[t]))}class A extends l.a.Component{constructor(e){var t;super(e),t=this,this.addNewCommonData=()=>{if(""!==this.state.modEnv.trim()){var e=this.state.CommonDataItem.length;if(e>0)if(""===this.state.CommonDataItem[e-1].commonKeyName.trim())return this.setState({modal:!0}),this.setState({modalValidationText:"Before adding new Common key, add previous Common key."});this.setState({loader:!0});var t=this.state.CommonDataItem.length+1;this.setState({CommonDataItem:[...this.state.CommonDataItem,{id:"".concat(t),commonKeyName:"",commonKeyValue:""}]}),this.setState({loader:!1})}else this.setState({checkmodEnv:!0})},this.deleteCommonData=()=>{var e=this.state.CommonDataItem.length;if(0!==e){var t=this.state.selectedCommonID;if(0===t)return this.setState({modal:!0}),this.setState({modalValidationText:"Please select record before delete action."});this.setState({loader:!0});for(var a=this.state.CommonDataItem.filter(e=>e.id!==t),s=t-1;s<e-1;s++)a[s].id=s+1;this.setState({CommonDataItem:a}),this.setState({selectedCommonID:t}),this.setState({loader:!1})}},this.handleOnSelect=(e,t)=>{if(t){var a=e.id;this.setState({selectedCommonID:a})}},this.handleOnSelectForTestData=(e,t)=>{if(t){var a=e.id;this.setState({selectedTestData:a})}},this.addNewTestDataRow=()=>{var e=this.state.testDataItemrowList,t=this.state.testDatacolumns;if(1!==t.length){if(e.length>1)for(var a=0;a<e.length;a++){if(""===e[a].testdatacolid1.trim())return this.setState({modal:!0}),this.setState({modalValidationText:"Please add the test data information for record number "+(a+1)+", before adding new record."})}this.setState({loaderTestData:!0});var s=this.state.selectedTestData;s>e.length&&(s=0),0===s&&(s=e.length);for(var n=[],o=0;o<s;o++)n[o]=this.state.testDataItemrowList[o];var r={};try{s=parseInt(s.trim())}catch(c){}r.id=s+1,r.testdatacolid1="";for(var i=2;i<t.length;i++){r["testdatacolid"+i]=""}n.push(r);for(var l=s;l<e.length;l++)e[l].id=l+2,n.push(e[l]);this.setState({testDataItemrowList:n}),this.setState({loaderTestData:!1})}},this.deleteTestDataRow=()=>{if(0!==this.state.testDataItemrowList.length){var e=this.state.selectedTestData;if(0!==e){this.setState({loaderTestData:!0});for(var t=this.state.testDataItemrowList.filter(t=>t.id!==e),a=e;a<=t.length;a++)t[a-1].id=a;this.setState({testDataItemrowList:t}),this.setState({selectedTestData:e}),this.setState({loaderTestData:!1})}}},this.toggle=e=>()=>{if(!e)return this.setState({modal:!this.state.modal});this.setState({["modal_".concat(e)]:!this.state["modal_".concat(e)]})},this.state={envEnv:"",testdataEnv:"",checkenvEnv:!1,envCopy:"",checkenvCopy:!1,envRename:"",checkenvRename:!1,CommonDataItem:[],modEnv:"",checkmodEnv:!1,CommonDataTotalSize:0,CommonTestDataChange:!1,selectedCommonID:0,selectedTestData:0,testDataModule:"",allModuleName:[],testDatacolumns:[{}],testDataItemrowList:[],checkTestDataEnv:!1,checkTestDataModule:!1,PreviousTestDataState:[],CommonTestData:[],loader:!0,loaderTestData:!1,pageloadingStatus:!1},function(){var e=Object(o.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({pageloadingStatus:!0}),e.next=3,fetch(B+"dashboard");case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,t.setState({CommonTestData:s.CommonTestData}),t.setState({loader:!1}),t.setState({pageloadingStatus:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}SelectenvEnv(e){this.setState({envEnv:e.target.value})}SaveModuleTestData(){var e=this,t=this.state.testdataEnv,a=this.state.testDataModule,s="";if(""===t.trim()&&(this.setState({checkTestDataEnv:!0}),s="Environment can not be blank"),""===a.trim()&&(this.setState({checkTestDataModule:!0}),s="Module can not be blank"),""===s.trim()){var r=this.state.testDataItemrowList,i=this.state.testDatacolumns;if(0===r.length)return this.setState({modal:!0}),this.setState({modalValidationText:"Please add the test data information."});if(1===i.length||0===i.length)return this.setState({modal:!0}),this.setState({modalValidationText:"Please add the test data information."});for(var l=0;l<r.length;l++){if(""===r[l].testdatacolid1.trim())return this.setState({modal:!0}),this.setState({modalValidationText:"Please add the test data information for record number "+(l+1)+", before saving the record."})}this.setState({loaderTestData:!0});for(var c=[],d=0;d<r.length;d++){var m={};m.id=d+1;for(var h=1;h<i.length;h++)m[i[h].text]=r[d]["testdatacolid"+h];c.push(m)}var p=u.a.common_ChangeJsoncontentforServer(c);console.log(p);var v=B+"testdata/"+t+"/"+a,g={method:"POST",headers:{Accept:"*/*","Content-type":"application/json"},body:JSON.stringify(p)};(function(){var t=Object(o.a)(n.a.mark((function t(){var a,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({pageloadingStatus:!0}),t.next=3,fetch(v,g);case 3:return a=t.sent,t.next=6,a.json();case 6:return s=t.sent,e.setState({loaderTestData:!1}),e.setState({pageloadingStatus:!1}),e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:s.servermessage}));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}}SelectTestDataEnv(e){var t=this,a=e.target.value,s=this.state.testdataEnv;(this.setState({testdataEnv:a}),this.setState({checkTestDataEnv:!1}),a.trim().toString()!==s.trim().toString())&&(this.setState({loaderTestData:!0}),function(){var e=Object(o.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({pageloadingStatus:!0}),e.next=3,fetch(B+"testcase/0");case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,t.setState({allModuleName:s}),t.setState({loaderTestData:!1}),t.setState({pageloadingStatus:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}SelectTestDataModule(e){var t=this,a=e.target.value,s=this.state.testDataModule;this.setState({testDataModule:a}),this.setState({checkTestDataModule:!1});var r="",i="",l=this.state.testdataEnv;if(a.trim().toString()!==s.trim().toString())try{this.setState({loaderTestData:!0}),this.setState({pageloadingStatus:!0}),this.setState({PreviousTestDataState:[]});var c=[],d={};(function(){var e=Object(o.a)(n.a.mark((function e(){var s,o,m,h,u,p,v,g,f,b,S,E,C,y,D,T,O,k,w;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(B+"testdata/"+l+"/"+a);case 2:return s=e.sent,e.next=5,s.json();case 5:for(o=e.sent,d=o,m=Object.keys(d),h=0;h<m.length;h++)for(u=d[m[h]][0][1],p=Object.keys(u),v=0;v<p.length;v++)r=p[v],c.includes(r)||c.push(r);for(t.setState({testDatacolumns:[]}),g=[{dataField:"id",text:"#"},{dataField:"testdatacolid1",text:"TESTID"}],t.setState({testDatacolumns:g}),t.setState({testDataItemrowList:[]}),f=0;f<c.length;f++)({}),b={dataField:"testdatacolid"+(f+2),text:c[f]},g.push(b);for(t.setState({testDatacolumns:g}),S=[],E=0,C=0;C<m.length;C++)for(y=m[C],D=d[y][0],T=Object.keys(D),O=0;O<T.length;O++){for((k={}).id=E+=1,k.testdatacolid1=y,w=0;w<c.length;w++){r=c[w],i="";try{void 0===(i=D[O+1][r])&&(i="")}catch(n){i=""}k["testdatacolid"+(w+2)]=i}S.push(k)}t.setState({testDataItemrowList:S}),t.setState({PreviousTestDataState:S}),t.setState({loaderTestData:!1}),t.setState({pageloadingStatus:!1});case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(m){return this.setState({testDatacolumns:[]}),this.setState({testDataItemrowList:[]}),this.setState({loaderTestData:!1}),this.setState({pageloadingStatus:!1}),null}}SelectenvCopy(e){var t=e.target.value;this.setState({envCopy:e.target.value}),this.setState({checkenvCopy:!1});for(var a=this.state.CommonTestData,s=0;s<a.length;s++)if(a[s].Environment.toString().trim().toLowerCase()===t.trim().toString().toLowerCase())return this.setState({checkenvCopy:!0}),this.setState({modalValidationText:"Env is already present"})}SelectenvRename(e){var t=e.target.value;this.setState({envRename:e.target.value}),this.setState({checkenvRename:!1});for(var a=this.state.CommonTestData,s=0;s<a.length;s++)if(a[s].Environment.toString().trim().toLowerCase()===t.trim().toString().toLowerCase())return this.setState({checkenvRename:!0}),this.setState({modalValidationText:"Env is already present"})}DeleteEnv(){var e=this,t=this.state.envEnv;if(""===t.trim())return this.setState({checkenvEnv:!0});this.setState({loader:!0}),this.setState({pageloadingStatus:!0});var a=B+"or/"+t;(function(){var t=Object(o.a)(n.a.mark((function t(){var s,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a);case 2:return s=t.sent,t.next=5,s.json();case 5:if(o=t.sent,e.setState({loader:!1}),e.setState({pageloadingStatus:!1}),"true"!==o.success.toLowerCase()){t.next=14;break}return e.state.envEnv="",e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:o.servermessage}));case 14:return e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:o.servermessage}));case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}CreateNewEnvCopy(){var e=this,t="",a=this.state.envEnv,s=this.state.envCopy;if(""===a.trim()&&(this.setState({checkenvEnv:!0}),t+="Environment* can not be left blank."),""===s.trim()&&(this.setState({checkenvCopy:!0}),t+="New Env. Copy* can not be left blank."),""!==t.trim())return this.setState({modalValidationText:t});if(a.trim().toLowerCase()===s.trim().toLowerCase())return this.setState({checkenvCopy:!0}),this.setState({modalValidationText:"No Changes to Save"});this.setState({loader:!0});for(var r=this.state.CommonTestData,i=0;i<r.length;i++)if(r[i].Environment.toString().trim().toLowerCase()===s.trim().toString().toLowerCase())return this.setState({checkenvCopy:!0}),this.setState({modalValidationText:"No Changes to Save"});var l=B+"or/"+a+"/"+s+"/0";(function(){var t=Object(o.a)(n.a.mark((function t(){var a,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({pageloadingStatus:!0}),t.next=3,fetch(l);case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,e.setState({pageloadingStatus:!1}),"true"!==s.success.toLowerCase()){t.next=15;break}return e.setState({loader:!1}),e.state.envEnv="",e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:s.servermessage}));case 15:return e.setState({loader:!1}),e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:s.servermessage}));case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}SaveCommonTestData(){var e=this,t="",a=this.state.modEnv;if(""===a.trim()&&(this.setState({checkmodEnv:!0}),t+="Environment* can not be left blank."),""!==t.trim())return this.setState({modalValidationText:t});if(!this.state.CommonTestDataChange)return this.setState({modal:!0}),this.setState({modalValidationText:"No Changes to Save"});this.setState({loader:!0});for(var s=this.state.CommonDataItem,r={},i=0;i<s.length;i++)r[s[i].commonKeyName.toString()]=s[i].commonKeyValue.toString();var l=u.a.common_ChangeJsoncontentforServer(r),c=B+"testdata/"+a,d={method:"POST",headers:{Accept:"*/*","Content-type":"application/json"},body:JSON.stringify(l)};(function(){var t=Object(o.a)(n.a.mark((function t(){var a,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({pageloadingStatus:!0}),t.next=3,fetch(c,d);case 3:return a=t.sent,t.next=6,a.json();case 6:return s=t.sent,e.setState({modal:!0}),e.setState({loader:!1}),e.setState({pageloadingStatus:!1}),t.abrupt("return",e.setState({modalValidationText:s.servermessage}));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}SelectmodEnv(e){var t=this;this.setState({CommonDataItem:[]}),this.setState({modEnv:""}),this.setState({CommonDataTotalSize:0}),this.setState({checkmodEnv:!1});var a=e.target.value;this.setState({modEnv:e.target.value}),this.setState({loader:!0});var s=B+"testscript/"+a;(function(){var e=Object(o.a)(n.a.mark((function e(){var a,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({pageloadingStatus:!0}),e.next=3,fetch(s);case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,t.setState({CommonDataItem:p.a.GetListOfListItemforCommonItem(o)}),t.setState({CommonDataTotalSize:t.state.CommonDataItem.length}),t.setState({loader:!1}),t.setState({pageloadingStatus:!1});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}RenameEnv(){var e=this,t="",a=this.state.envEnv,s=this.state.envRename;if(""===a.trim()&&(this.setState({checkenvEnv:!0}),t+="Environment* can not be left blank."),""===s.trim()&&(this.setState({checkenvRename:!0}),t+="Rename Env* can not be left blank."),""!==t.trim())return this.setState({modalValidationText:t});if(a.trim().toLowerCase()===s.trim().toLowerCase())return this.setState({checkenvRename:!0}),this.setState({modalValidationText:"No Changes to Save"});for(var r=this.state.CommonTestData,i=0;i<r.length;i++)if(r[i].Environment.toString().trim().toLowerCase()===s.trim().toString().toLowerCase())return this.setState({checkenvRename:!0}),this.setState({modalValidationText:"Env is already present"});this.setState({loader:!0});var l=B+"or/"+a+"/"+s+"/0/0";(function(){var t=Object(o.a)(n.a.mark((function t(){var a,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({pageloadingStatus:!0}),t.next=3,fetch(l);case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,e.setState({pageloadingStatus:!1}),e.setState({loader:!1}),"true"!==s.success.toLowerCase()){t.next=15;break}return e.state.envEnv="",e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:s.servermessage}));case 15:return e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:s.servermessage}));case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}render(){var e=this.state.allModuleName,t={mode:"radio",onSelect:this.handleOnSelect},a={mode:"radio",onSelect:this.handleOnSelectForTestData},s={sizePerPage:20,hideSizePerPage:!0,hidePageListOnlyOnePage:!0},n=[{dataField:"id",text:"#",headerStyle:{width:"40px"},Cell:e=>l.a.createElement("div",null,l.a.createElement("span",{title:e.value},e.value))},{dataField:"commonKeyName",text:"Key Name*",filter:Object(V.textFilter)(),validator:(e,t,a)=>{if(""===e.trim())return{valid:!1,message:"Key Name* can not be blank."};for(var s=this.state.CommonDataItem.length,n=0;n<s;n++){if(this.state.CommonDataItem[n].commonKeyName.trim().toLowerCase()===e.trim().toLowerCase())return{valid:!1,message:"Key Name* can not be duplicate."}}return!0}},{dataField:"commonKeyValue",text:"Key Value",filter:Object(V.textFilter)()}];return l.a.createElement(r.a,{title:"Test Data",breadcrumbs:[{name:"Test Data",active:!0}]},l.a.createElement(I.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loader}),l.a.createElement(v.a,null,l.a.createElement(g.a,{lg:6,md:6,sm:6,xs:12},l.a.createElement(f.a,null,l.a.createElement(b.a,null,"Update Environment"),l.a.createElement(S.a,null,l.a.createElement(E.a,{inline:!0},l.a.createElement(C.a,{row:!0},l.a.createElement(y.a,{for:"exampleSelect"},"Environment*"),l.a.createElement(g.a,null,l.a.createElement(D.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkenvEnv,type:"select",name:"envEnv",value:this.state.envEnv,onChange:this.SelectenvEnv.bind(this)},l.a.createElement("option",{selected:"selected"},this.state.envEnv),l.a.createElement(J,{options:this.state.CommonTestData})))),l.a.createElement(g.a,null,l.a.createElement(T.a,{disabled:this.state.pageloadingStatus,onClick:this.DeleteEnv.bind(this),color:"primary",name:"envDelete"},"Delete"),l.a.createElement(O.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},l.a.createElement(k.a,{toggle:this.toggle()}," Information"),l.a.createElement(w.a,null,this.state.modalValidationText),l.a.createElement(j.a,null,l.a.createElement(T.a,{color:"secondary",onClick:this.toggle()},"OK")))),l.a.createElement(C.a,{row:!0},l.a.createElement(y.a,{for:"exampleSelect"},"New Env. Copy*"),l.a.createElement(g.a,null,l.a.createElement(D.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkenvCopy,value:this.state.envCopy,type:"input",name:"newEnvCopy",placeholder:"New env name.",onChange:this.SelectenvCopy.bind(this)}))),l.a.createElement(g.a,null,l.a.createElement(T.a,{disabled:this.state.pageloadingStatus,onClick:this.CreateNewEnvCopy.bind(this),color:"primary",name:"newEnvCopy"},"Save")),l.a.createElement(C.a,{row:!0},l.a.createElement(y.a,{for:"exampleSelect"},"Rename Env.*"),l.a.createElement(g.a,null,l.a.createElement(D.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkenvRename,value:this.state.envRename,type:"input",name:"newEnvName",placeholder:"New env name.",onChange:this.SelectenvRename.bind(this)}))),l.a.createElement(g.a,null,l.a.createElement(T.a,{disabled:this.state.pageloadingStatus,onClick:this.RenameEnv.bind(this),color:"primary",name:"newEnvName"},"Save")))))),l.a.createElement(g.a,{lg:6,md:6,sm:6,xs:12},l.a.createElement(f.a,null,l.a.createElement(b.a,null,"Common Test Data",l.a.createElement("row",null,l.a.createElement(T.a,{disabled:this.state.pageloadingStatus,onClick:this.SaveCommonTestData.bind(this),color:"primary",name:"saveCommonTestData"},"Save"))),l.a.createElement(b.a,null,"Environment*",l.a.createElement(C.a,{row:!0},l.a.createElement(g.a,null,l.a.createElement(D.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkmodEnv,type:"select",name:"modEnv",value:this.state.modEnv,onChange:this.SelectmodEnv.bind(this)},l.a.createElement("option",{selected:"selected"},this.state.modEnv),l.a.createElement(J,{options:this.state.CommonTestData}))),l.a.createElement(N.a,{className:"card-img-right",disabled:this.state.pageloadingStatus,src:h.a,style:{width:"auto",height:30},onClick:()=>this.addNewCommonData()}),l.a.createElement(N.a,{className:"card-img-right",disabled:this.state.pageloadingStatus,src:d.a,style:{width:"auto",height:30},onClick:()=>this.deleteCommonData()}))),l.a.createElement(S.a,null,l.a.createElement(L.a,{keyField:"id",disabled:this.state.pageloadingStatus,data:this.state.CommonDataItem,columns:n,striped:!0,hover:!0,condensed:!0,pagination:P()(s),rowEvents:{onClick:(e,t,a)=>{}},onDataSizeChange:this.handleDataChange,filter:K()(),selectRow:t,cellEdit:F()({mode:"click",blurToSave:!0,afterSaveCell:(e,t)=>{this.setState({CommonTestDataChange:!0})}})}))))),l.a.createElement(v.a,null,l.a.createElement(g.a,{lg:12,md:6,sm:6,xs:12},l.a.createElement(f.a,null,l.a.createElement(b.a,null,"Update Test Script Data",l.a.createElement(N.a,{className:"card-img-right",src:h.a,style:{width:"auto",height:30},onClick:()=>this.addNewTestDataRow(),disabled:this.state.pageloadingStatus}),l.a.createElement(N.a,{className:"card-img-right",src:d.a,style:{width:"auto",height:30},onClick:()=>this.deleteTestDataRow(),disabled:this.state.pageloadingStatus}),l.a.createElement(T.a,{disabled:this.state.pageloadingStatus,onClick:this.SaveModuleTestData.bind(this),color:"primary",name:"saveTestData"},"Save"),l.a.createElement(I.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loaderTestData})),l.a.createElement(S.a,null,l.a.createElement(E.a,null,l.a.createElement(C.a,{row:!0},l.a.createElement(y.a,{for:"exampleSelect"},"Environment*"),l.a.createElement(g.a,null,l.a.createElement(D.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkTestDataEnv,type:"select",name:"testdataEnv",value:this.state.testdataEnv,onChange:this.SelectTestDataEnv.bind(this)},l.a.createElement("option",{selected:"selected"},this.state.testdataEnv),l.a.createElement(J,{options:this.state.CommonTestData}))),l.a.createElement(y.a,{for:"exampleSelect"},"Module*"),l.a.createElement(g.a,null,l.a.createElement(D.a,{disabled:this.state.pageloadingStatus,invalid:this.state.checkTestDataModule,type:"select",name:"testDataModule",value:this.state.testDataModule,onChange:this.SelectTestDataModule.bind(this)},l.a.createElement("option",{selected:"selected"},this.state.testDataModule),l.a.createElement(z,{options:e})))),l.a.createElement(S.a,null,l.a.createElement(L.a,{keyField:"id",disabled:this.state.pageloadingStatus,data:this.state.testDataItemrowList,columns:this.state.testDatacolumns,striped:!0,hover:!0,condensed:!0,pagination:P()(s),selectRow:a,cellEdit:F()({mode:"click",blurToSave:!0})}))))))))}}t.default=A}}]);
//# sourceMappingURL=21.a3c6136b.chunk.js.map