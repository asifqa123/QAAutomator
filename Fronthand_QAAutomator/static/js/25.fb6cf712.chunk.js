(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[25],{102:function(e,t,a){"use strict";var r=a(11),s=a(3),o=a.n(s),n=a(1),i=a.n(n),c=(a(40),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),d=e=>{var t,a=e.tag,s=e.className,n=e.type,d=Object(r.a)(e,["tag","className","type"]),l=o()({[n]:!!n},s);return t=a||(!a&&c[n]?c[n]:"p"),i.a.createElement(t,Object.assign({},d,{className:l}))};d.defaultProps={type:"p"},t.a=d},103:function(e,t,a){"use strict";var r=a(11),s=a(1),o=a.n(s),n=(a(40),a(15)),i=a(598),c=a(599),d=a(102),l=n.a.create("page"),u=e=>{var t=e.title,a=e.breadcrumbs,s=e.tag,n=e.className,u=e.children,h=Object(r.a)(e,["title","breadcrumbs","tag","className","children"]),m=l.b("px-3",n);return o.a.createElement(s,Object.assign({className:m},h),o.a.createElement("div",{className:l.e("header")},t&&"string"===typeof t?o.a.createElement(d.a,{type:"h1",className:l.e("title")},t):t,a&&o.a.createElement(i.a,{className:l.e("breadcrumb")},o.a.createElement(c.a,null,"Home"),a.length&&a.map(({name:e,active:t},a)=>o.a.createElement(c.a,{key:a,active:t},e)))),u)};u.defaultProps={tag:"div",title:""},t.a=u},137:function(e,t,a){"use strict";var r=a(4),s=a(5),o=a(1),n=a.n(o),i=a(0),c=a.n(i),d=a(3),l=a.n(d),u=a(2),h={tag:u.m,top:c.a.bool,bottom:c.a.bool,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.top,i=e.bottom,c=e.tag,d=Object(s.a)(e,["className","cssModule","top","bottom","tag"]),h="card-img";o&&(h="card-img-top"),i&&(h="card-img-bottom");var m=Object(u.i)(l()(t,h),a);return n.a.createElement(c,Object(r.a)({},d,{className:m}))};m.propTypes=h,m.defaultProps={tag:"img"},t.a=m},386:function(e,t,a){e.exports=a.p+"static/media/testscriptdev.ef00e36d.JPG"},387:function(e,t,a){e.exports=a.p+"static/media/testexecution.e1f70852.JPG"},388:function(e,t,a){e.exports=a.p+"static/media/testmain.6b460da0.JPG"},389:function(e,t,a){e.exports=a.p+"static/media/integration.344753cd.JPG"},597:function(e,t,a){"use strict";a.r(t);var r=a(111),s=a.n(r),o=a(112),n=a(103),i=a(1),c=a.n(i),d=a(386),l=a.n(d),u=a(387),h=a.n(u),m=a(388),b=a.n(m),S=a(389),p=a.n(S),f=a(94),g=a(95),C=a(137),v=a(113),k=a.n(v),H=(a(114),window.ENV.APIURL);class E extends c.a.Component{constructor(e){var t;super(e),t=this,this.toggle=e=>()=>{if(!e)return this.setState({modal:!this.state.modal});this.setState({["modal_".concat(e)]:!this.state["modal_".concat(e)]})},this.state={DefaultEnvironment:"",defaultBrowser:"",checkDashboardHistoryCount:!1,feedbackDashboardHistoryCount:"",DashBoardHistoryCount:"",checkDashboardDays:!1,feedbackDashboardDays:"",DashboardDays:"",HubMachineName:"",checkHubMachineName:!1,feedbackHubMachineName:"",HubPortNumber:"",checkHubPort:!1,feedbackHubPort:"",ConfigurationFile:[],CommonTestData:[],loader:!0,RepotingHeaderName:"",ReportingHeaderColCode:"",ReportingSubHeaderColCode:"",feedbackReportingHeader:"",checkReportingHeader:!1,checkHeaderColCode:!1,feedbackHeaderColCode:"",checkSubHeaderColCode:!1,feedbackSubHeaderColCode:"",checkSenderEmail:!1,feedbackSenderEmailAddress:"",SenderEmailAddress:"",checkSenderPassword:!1,feedbackSenderPassword:"",SenderPassword:"",checkReceiverEmail:!1,ReceiverEmail:"",feedbackReceiverEmail:""},function(){var e=Object(o.a)(s.a.mark((function e(){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H+"dashboard");case 2:return a=e.sent,e.next=5,a.json();case 5:(r=e.sent).success&&(t.setState({ConfigurationFile:r.Configuration}),t.setState({CommonTestData:r.CommonTestData}),t.setState({DefaultEnvironment:t.state.ConfigurationFile.DefaultEnvironment}),t.setState({defaultBrowser:t.state.ConfigurationFile.DefaultBrowser}),t.setState({DashBoardHistoryCount:t.state.ConfigurationFile.DashboardHistoryCount}),t.setState({DashboardDays:t.state.ConfigurationFile.DashboardTotalDayCount}),t.setState({HubMachineName:t.state.ConfigurationFile.HUBMachineName}),t.setState({HubPortNumber:t.state.ConfigurationFile.HUBPort}),t.setState({RepotingHeaderName:t.state.ConfigurationFile.ReportingHeaderName}),t.setState({ReportingHeaderColCode:t.state.ConfigurationFile.HeaderColorCode}),t.setState({ReportingSubHeaderColCode:t.state.ConfigurationFile.SubHeaderColorCode}),t.setState({SenderEmailAddress:t.state.ConfigurationFile.SenderEmail}),t.setState({SenderPassword:t.state.ConfigurationFile.SenderPassword}),t.setState({ReceiverEmail:t.state.ConfigurationFile.ReceiverEmail}),t.setState({loader:!1}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}UpdateEnv(e){this.setState({DefaultEnvironment:e.target.value})}UpdateBrowser(e){this.setState({defaultBrowser:e.target.value})}UpdateDashBoardHistoryCount(e){this.setState({checkDashboardHistoryCount:!1}),this.setState({DashBoardHistoryCount:e.target.value})}UpdateHubMachineName(e){this.setState({checkHubMachineName:!1}),this.setState({HubMachineName:e.target.value})}UpdateHubPort(e){this.setState({checkHubPort:!1}),this.setState({HubPortNumber:e.target.value})}UpdateDashBoardDays(e){this.setState({checkDashboardDays:!1}),this.setState({DashboardDays:e.target.value})}UpdateReportingHeaderName(e){this.setState({checkReportingHeader:!1}),this.setState({feedbackReportingHeader:""}),this.setState({RepotingHeaderName:e.target.value})}UpdateHeaderColorCode(e){this.setState({checkHeaderColCode:!1}),this.setState({feedbackHeaderColCode:""}),this.setState({ReportingHeaderColCode:e.target.value})}UpdateSubHeaderColorCode(e){this.setState({checkSubHeaderColCode:!1}),this.setState({feedbackSubHeaderColCode:""}),this.setState({ReportingSubHeaderColCode:e.target.value})}UpdateSenderEmailAddress(e){this.setState({checkSenderEmail:!1}),this.setState({feedbackSenderEmailAddress:""}),this.setState({SenderEmailAddress:e.target.value})}UpdateSenderPassword(e){this.setState({checkSenderPassword:!1}),this.setState({feedbackSenderPassword:""}),this.setState({SenderPassword:e.target.value})}UpdateRecieverEmailAddress(e){this.setState({checkReceiverEmail:!1}),this.setState({feedbackReceiverEmail:""}),this.setState({ReceiverEmail:e.target.value})}SaveConfig(){var e=this,t=this.state.DefaultEnvironment,a=this.state.defaultBrowser,r=this.state.DashBoardHistoryCount,n=this.state.DashboardDays,i="";if((isNaN(r)||""===r.trim())&&(this.setState({checkDashboardHistoryCount:!0}),this.setState({feedbackDashboardHistoryCount:"Dashboard History Count* takes only numeric value."}),i+="Dashboard History Count* takes only numeric value.."),(isNaN(n)||""===n.trim())&&(this.setState({checkDashboardDays:!0}),this.setState({feedbackDashboardDays:"Dashboard Total Day Count* takes only numeric value."}),i+="Dashboard Total Day Count* takes only numeric value.."),""===i.trim()){this.setState({loader:!0});var c={};c.DefaultEnvironment=t,c.DefaultBrowser=a,c.DashboardHistoryCount=r,c.DashboardTotalDayCount=n;var d=JSON.stringify(c),l=H+"configuration",u={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:d};(function(){var t=Object(o.a)(s.a.mark((function t(){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l,u);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,e.setState({loader:!1}),e.setState({modal:!0}),e.setState({modalValidationText:r.servermessage});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}}SaveHUBconfig(){var e=this,t="",a=this.state.HubMachineName,r=this.state.HubPortNumber;if(""===a.trim()&&(this.setState({checkHubMachineName:!0}),this.setState({feedbackHubMachineName:"Hub Machine Name* can not be blank"}),t+="Hub Machine Name* can not be blank"),isNaN(r)&&(this.setState({checkHubPort:!0}),this.setState({feedbackHubPort:"Port Number* takes only numeric value."}),t+="Port Number* takes only numeric value.."),""===r.trim()&&(this.setState({checkHubPort:!0}),this.setState({feedbackHubPort:"Port Number* can not be blank"}),t+="Port Number* can not be blank"),""===t.trim()){this.setState({loader:!0});var n={};n.HUBMachineName=a,n.HUBPort=r;var i=JSON.stringify(n),c=H+"configuration?id=1",d={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:i};(function(){var t=Object(o.a)(s.a.mark((function t(){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c,d);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,e.setState({loader:!1}),e.setState({modal:!0}),e.setState({modalValidationText:r.servermessage});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}}SaveReportSettingconfig(){var e=this,t="",a=this.state.RepotingHeaderName,r=this.state.ReportingHeaderColCode,n=this.state.ReportingSubHeaderColCode;if(""===a.trim()&&(this.setState({checkReportingHeader:!0}),this.setState({feedbackReportingHeader:"Reporting Header Name* can not be blank"}),t="Reporting Header Name* can not be blank"),""===r.trim()&&(this.setState({checkHeaderColCode:!0}),this.setState({feedbackHeaderColCode:"Header Color Code* can not be blank"}),t+="Header Color Code* can not be blank"),""===n.trim()&&(this.setState({checkSubHeaderColCode:!0}),this.setState({feedbackSubHeaderColCode:"SubHeader Color Code* can not be blank"}),t+="SubHeader Color Code* can not be blank"),""===t.trim()){this.setState({loader:!0});var i={};i.ReportingHeaderName=a,i.HeaderColorCode=r,i.SubHeaderColorCode=n;var c=JSON.stringify(i),d=H+"configuration?id=2",l={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:c};(function(){var t=Object(o.a)(s.a.mark((function t(){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d,l);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,e.setState({loader:!1}),e.setState({modal:!0}),e.setState({modalValidationText:r.servermessage});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}}SaveEmailSetUp(){var e=this,t="",a=this.state.SenderEmailAddress,r=this.state.SenderPassword,n=this.state.ReceiverEmail;if(""===a.trim()&&(this.setState({checkSenderEmail:!0}),this.setState({feedbackSenderEmailAddress:"Sender Email Address* can not be blank"}),t="Sender Email Address* can not be blank"),""===r.trim()&&(this.setState({checkSenderPassword:!0}),this.setState({feedbackSenderPassword:"Password* can not be blank"}),t+="Password* can not be blank"),""===n.trim()&&(this.setState({checkReceiverEmail:!0}),this.setState({feedbackReceiverEmail:"Receiver Email Address* can not be blank"}),t+="Receiver Email Address* can not be blank"),""===t.trim()){this.setState({loader:!0});var i={};i.SenderEmail=a,i.SenderPassword=r,i.ReceiverEmail=n;var c=JSON.stringify(i),d=H+"configuration?id=3",l={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:c};(function(){var t=Object(o.a)(s.a.mark((function t(){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d,l);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,e.setState({loader:!1}),e.setState({modal:!0}),e.setState({modalValidationText:r.servermessage});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}}render(){return c.a.createElement(n.a,{title:"QA Automator"},c.a.createElement(k.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loader}),c.a.createElement(f.a,null,c.a.createElement(g.a,{lg:12,md:12,sm:12,xs:12},c.a.createElement("div",null,"QA Automator is complete testing solution for Web and API testing. It is codeless automation framework on cloud platform with artificial intelligence Support which reduce 90% business cost.")),c.a.createElement(g.a,{lg:6,md:6,sm:6,xs:6},c.a.createElement(C.a,{className:"card-img-right",src:l.a}),c.a.createElement(C.a,null)),c.a.createElement(g.a,{lg:6,md:6,sm:6,xs:6},c.a.createElement(C.a,{className:"card-img-right",src:h.a}),c.a.createElement(C.a,null)),c.a.createElement(g.a,{lg:6,md:6,sm:6,xs:6},c.a.createElement(C.a,{className:"card-img-right",src:b.a}),c.a.createElement(C.a,null)),c.a.createElement(g.a,{lg:6,md:6,sm:6,xs:6},c.a.createElement(C.a,{className:"card-img-right",src:p.a}),c.a.createElement(C.a,null))))}}t.default=E}}]);
//# sourceMappingURL=25.fb6cf712.chunk.js.map