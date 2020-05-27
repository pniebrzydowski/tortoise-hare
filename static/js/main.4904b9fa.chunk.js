(this["webpackJsonptortoise-hare"]=this["webpackJsonptortoise-hare"]||[]).push([[0],{148:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(41),i=t.n(c),u=t(5),l=t(6),o=t(11),m=t(4);function d(){var e=Object(u.a)(["\n  color: ",";\n  text-decoration: none;\n"]);return d=function(){return e},e}function s(){var e=Object(u.a)(["\n  background-color: ",";\n  padding: ",";\n"]);return s=function(){return e},e}var f=Object(m.d)("header")(s(),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.spacing.medium})),p=Object(m.d)(l.b)(d(),(function(e){return e.theme.colors.xLight})),b=function(){return a.a.createElement(f,null,a.a.createElement(p,{to:"/"},a.a.createElement("h1",null,"Tortoise and Hare")))};function E(){var e=Object(u.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: 16px;\n    line-height: 1.4;\n  }\n\n  html, body {\n    background-color: ",";\n    color: ",";\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  h1, h2, h3, h4, h5, h6, p, ul, li {\n    padding: 0;\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n  h2 {\n    font-size: 1.6rem;\n  }\n  h3 {\n    font-size: 1.2rem;\n  }\n  h4 {\n    font-size: 1.1rem;\n  }\n  h5 {\n    font-size: 1rem;\n  }\n  h6 {\n    font-size: 0.8rem;\n  }\n\n  td, th {\n    padding: 0;\n    text-align: left;\n    font-weight: normal;\n  }\n\n  a {\n    color: inherit\n  }\n\n  p a {\n    color: ","\n  }\n\n  ul, li {\n    list-style: none;\n  }\n"]);return E=function(){return e},e}var h=Object(m.b)(E(),(function(e){return e.theme.colors.xLight}),(function(e){return e.theme.colors.xDark}),(function(e){return e.theme.colors.secondary})),g={colors:{primary:"#f4e439",secondary:"#4A5D68",tertiary:"#87BBA2",error:"#C14443",xDark:"#1a1a1a",dark:"#232B31",light:"#D3ECDF",xLight:"#FAFEF8"},borders:{radius:"5px",style:"1px solid"},spacing:{xSmall:"4px",small:"8px",medium:"16px",large:"24px",xLarge:"36px"}},v=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"What is it?"),a.a.createElement(l.b,{to:"/series"},"View All Series"))},O=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Login"))},j=t(12),y=t(8),I=[{id:"4",name:"Patrick Niebrzydowski"},{id:"5",name:"Ann Niebrzydowski"},{id:"6",name:"Christina Wallner"}],T=[{id:"1",name:"Leon Niebrzydowski"},{id:"2",name:"Michael Niebrzydowski"},{id:"3",name:"Vicki Niebrzydowski"}].concat(I),k=function(e){var n;return null===(n=x(e))||void 0===n?void 0:n.name},x=function(e){return T.find((function(n){return n.id===e}))};function S(){var e=Object(u.a)(["\n  border: ",";\n  border-color: ",";\n  color: ",";\n"]);return S=function(){return e},e}function N(){var e=Object(u.a)(["\n  background: ",";\n  color: ",";\n"]);return N=function(){return e},e}function w(){var e=Object(u.a)(["\n  cursor: pointer;\n  appearance: none;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border-color: transparent;\n"]);return w=function(){return e},e}var D=Object(m.d)("button")(w(),(function(e){return"".concat(e.theme.spacing.small," ").concat(e.theme.spacing.medium)}),(function(e){return e.theme.borders.radius}),(function(e){return e.theme.borders.style})),R=Object(m.d)(D)(N(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.xDark})),C=Object(m.d)(D)(S(),(function(e){return e.theme.borders.style}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.dark}));t(40);function Y(){var e=Object(u.a)(["\n  display: flex;\n\n  button + button {\n    margin-left: ",";\n  }\n"]);return Y=function(){return e},e}function F(){var e=Object(u.a)(["\n  & + & {\n    border-top: ",";\n  }\n\n  &:nth-child(even) button {\n    background: #fff;\n  }\n  button {\n    display: flex;\n    justify-content: space-between;\n    background: none;\n    border: none;\n    cursor: pointer;\n    font-size: 1rem;\n    width: 100%;\n    padding: ",";\n  }\n"]);return F=function(){return e},e}var V=Object(m.d)("li")(F(),(function(e){return e.theme.borders.style}),(function(e){return"".concat(e.theme.spacing.small," ").concat(e.theme.spacing.medium)})),M=Object(m.d)("div")(Y(),(function(e){return e.theme.spacing.medium})),A=function(e){var n=e.raceId,t=e.possibleVolunteers,c=Object(r.useState)(!1),i=Object(y.a)(c,2),u=i[0],l=i[1],o=Object(r.useState)([]),m=Object(y.a)(o,2),d=m[0],s=m[1],f=function(e){return d.find((function(n){return n.id===e}))};return u?a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,t.map((function(e){var n=k(e.id);return n?a.a.createElement(V,{key:e.id},a.a.createElement("button",{onClick:function(){return function(e){f(e.id)?s(d.filter((function(n){return e.id!==n.id}))):s([].concat(Object(j.a)(d),[e]))}(e)}},n,f(e.id)&&a.a.createElement("strong",null,"X"))):null}))),a.a.createElement(M,null,a.a.createElement(R,{onClick:function(){return function(e){var t=e.map((function(e){return e.name}));alert("Volunteers added to race ".concat(n,": ").concat(t.join(", "))),l(!1),s([])}(d)}},"Add Volunteers"),a.a.createElement(C,{onClick:function(){l(!1),s([])}},"Cancel"))):a.a.createElement(R,{onClick:function(){return l(!0)}},"Add Volunteers")},L=t(7),q={HOME:"/",LOGIN:"/login",SERIES_LIST:"/series",SERIES_DETAIL:"/series/:seriesId",RACE_DETAIL:"/race/:raceId",RUNNER_DETAIL:"/runner/:runnerId"},_=t(16),P=t.n(_),z="".concat("YYYY-MM-DD"," ").concat("HH:mm:ss"),U="".concat("MM/DD/YYYY"," ").concat("h:mma"),B="".concat("MM/dd/yyyy"," ").concat("h:mma"),H=function(){return P()().startOf("day").format("YYYY-MM-DD")},W=function(e){return P()(e).valueOf()},G=function(e){return P()(e)>P()()},J=function(e,n){return P()(e).valueOf()-P()(n).valueOf()},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"month";return P()().startOf("day").add(e,n).format("YYYY-MM-DD")},$=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY";return P()(e).format(n)},K=function(e){var n=Math.floor(e/3600),t=Math.floor(e/60)%60,r=Math.floor(e)%60,a=[];return n&&a.push(n<10?"0".concat(n):n),a.push(t<10?"0".concat(t):t),a.push(r<10?"0".concat(r):r),a.join(":")};function Q(){var e=Object(u.a)(["\n  ","\n"]);return Q=function(){return e},e}function Z(){var e=Object(u.a)(["\n  ","\n"]);return Z=function(){return e},e}function ee(){var e=Object(u.a)(["\n  ","\n"]);return ee=function(){return e},e}function ne(){var e=Object(u.a)(["\n  appearance: none;\n  background: #fff;\n  border-radius: ",";\n  padding: ",";\n  border: ",";\n  font-size: 1rem;\n  width: 100%;\n\n  &:focus {\n    outline-color: ",";\n  }\n"]);return ne=function(){return e},e}var te=Object(m.c)(ne(),(function(e){return e.theme.borders.radius}),(function(e){return e.theme.spacing.medium}),(function(e){return"".concat(e.theme.borders.style," ").concat(e.theme.colors.light)}),(function(e){return e.theme.colors.tertiary})),re=Object(m.d)("select")(ee(),te),ae=Object(m.d)("input")(Z(),te),ce=Object(m.d)("textarea")(Q(),te);function ie(){var e=Object(u.a)(["\n  color: ",";\n"]);return ie=function(){return e},e}function ue(){var e=Object(u.a)(["\n  font-size: 0.8rem;\n  font-weight: bold;\n  padding: ",";\n"]);return ue=function(){return e},e}function le(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return le=function(){return e},e}var oe=Object(m.d)("div")(le()),me=Object(m.d)("label")(ue(),(function(e){return"".concat(e.theme.spacing.xSmall," ").concat(e.theme.spacing.medium)})),de=Object(m.d)(me)(ie(),(function(e){return e.theme.colors.error})),se=function(e){var n=e.fieldId,t=e.label,r=e.error,c=e.children;return a.a.createElement(oe,null,t&&a.a.createElement(me,{htmlFor:n},t),c,r&&a.a.createElement(de,null,r))},fe=function(e){var n=e.formName,t=e.fieldName,r=e.label,c=e.error,i=e.defaultValue,u=e.required,l=Object(L.d)().register,o="".concat(n,"_").concat(t);return a.a.createElement(se,{fieldId:o,label:r,error:c},a.a.createElement(ae,{type:"text",id:o,name:t,defaultValue:i,ref:l({required:u,pattern:/^\d?\d?:?[0-5]?[0-9]:[0-5][0-9]$/})}))};function pe(){var e=Object(u.a)(["\n  border-spacing: 0;\n  border-radius: ",";\n  width: 100%;\n  margin-top: ",";\n\n  th,\n  td {\n    padding: ",";\n    border-top: ",";\n    border-right: ",";\n  }\n  tr {\n    th:first-of-type,\n    td:first-of-type {\n      border-left: ",";\n    }\n    &:nth-child(even) td {\n      background: #fff;\n    }\n    &:last-of-type {\n      td {\n        border-bottom: ",";\n\n        :first-of-type {\n          border-bottom-left-radius: ",";\n        }\n        :last-of-type {\n          border-bottom-right-radius: ",";\n        }\n      }\n    }\n  }\n\n  th {\n    background: ",";\n    font-weight: bold;\n\n    :first-of-type {\n      border-top-left-radius: ",";\n    }\n    :last-of-type {\n      border-top-right-radius: ",";\n    }\n  }\n"]);return pe=function(){return e},e}var be=Object(m.d)("table")(pe(),(function(e){return e.theme.borders.radius}),(function(e){return e.theme.spacing.small}),(function(e){return"".concat(e.theme.spacing.xSmall," ").concat(e.theme.spacing.small)}),(function(e){return"".concat(e.theme.borders.style," ").concat(e.theme.colors.light)}),(function(e){return"".concat(e.theme.borders.style," ").concat(e.theme.colors.light)}),(function(e){return"".concat(e.theme.borders.style," ").concat(e.theme.colors.light)}),(function(e){return"".concat(e.theme.borders.style," ").concat(e.theme.colors.light)}),(function(e){return e.theme.borders.radius}),(function(e){return e.theme.borders.radius}),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.borders.radius}),(function(e){return e.theme.borders.radius})),Ee=function(e){var n=e.title,t=e.columns,r=e.children;return a.a.createElement("section",null,n&&a.a.createElement("h3",null,n),a.a.createElement(be,null,a.a.createElement("thead",null,a.a.createElement("tr",null,t.map((function(e){return a.a.createElement("th",{key:e},e)})))),a.a.createElement("tbody",null,r)))};function he(){var e=Object(u.a)(["\n  margin-top: ",";\n\n  button + button {\n    margin-left: ",";\n  }\n"]);return he=function(){return e},e}var ge,ve=Object(m.d)("div")(he(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.medium})),Oe=function(e){var n=e.results,t=e.raceId,r=Object(L.c)(),c=Object(o.f)(),i=n.sort((function(e,n){return e.predictedTime&&n.predictedTime?e.predictedTime-n.predictedTime:0})),u=function(){c.push(q.RACE_DETAIL.replace(":raceId",t))};return a.a.createElement(L.b,r,a.a.createElement("form",{onSubmit:r.handleSubmit((function(e){console.log(e),u()}))},a.a.createElement("input",{type:"hidden",id:"results_raceId",name:"raceId",value:t,ref:r.register({required:!0})}),a.a.createElement(Ee,{columns:["Name","Predicted Time","Actual Time"]},i.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,a.a.createElement(l.b,{to:"/runner/".concat(e.runnerId)},k(e.runnerId))),a.a.createElement("td",null,e.predictedTime&&K(e.predictedTime)),a.a.createElement("td",null,a.a.createElement(fe,{formName:"results",fieldName:"runner_".concat(e.runnerId),defaultValue:K(e.actualTime),error:r.errors["runner_".concat(e.runnerId)]&&"Please enter a time"})))}))),a.a.createElement(ve,null,a.a.createElement(R,{type:"submit"},"Complete Race and Calculate Points"),a.a.createElement(C,{onClick:function(){return u()}},"Cancel"))))},je=[{id:"1",raceId:"1",runnerId:"1",predictedTime:1080,actualTime:1095,points:0},{id:"2",raceId:"1",runnerId:"2",predictedTime:1120,actualTime:1100,points:5},{id:"3",raceId:"1",runnerId:"3",predictedTime:1200,actualTime:1145,points:10}],ye=[{id:"4",raceId:"2",runnerId:"1",predictedTime:1080,actualTime:0,points:0},{id:"5",raceId:"2",runnerId:"3",predictedTime:1200,actualTime:0,points:0},{id:"6",raceId:"2",runnerId:"4",predictedTime:0,actualTime:0,points:0}],Ie=[].concat(je,ye);!function(e){e.km="km",e.mi="mi"}(ge||(ge={}));var Te=[{id:"1",seriesId:"1",name:"Stoney Creek 5k",startTime:"2020-11-01 08:00:00",distance:5,unit:ge.km,description:"This is going to be a fun race!",isFinished:!0,results:je,volunteers:I},{id:"2",seriesId:"1",name:"Stoney Creek 10k",startTime:"2020-11-08 13:00:00",distance:10,unit:ge.km,description:"Good luck :-)",results:ye,volunteers:[I[0],I[1]]}],ke=[{id:"3",seriesId:"2",name:"Utica 5k",startTime:"2021-03-23 08:00:00",distance:5,unit:ge.km},{id:"4",seriesId:"2",name:"Utica 10 mile",startTime:"2021-04-01 13:00:00",distance:10,unit:ge.mi,description:"Long one!"}],xe=[].concat(Te,ke),Se=function(e){return xe.find((function(n){return n.id===e}))},Ne=xe,we=function(e,n){var t,r=null===(t=Se(n))||void 0===t?void 0:t.results;if(r)return r.find((function(n){return n.runnerId===e}))},De=t(60);function Re(){var e=Object(u.a)(["\n  margin-left: ",";\n  padding: ",";\n"]);return Re=function(){return e},e}function Ce(){var e=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n"]);return Ce=function(){return e},e}var Ye=Object(m.d)("div")(Ce()),Fe=Object(m.d)(R)(Re(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.medium})),Ve=function(e){var n=e.raceId,t=e.runnerId,r=e.onSuccess,c=Object(L.c)();return a.a.createElement(L.b,c,a.a.createElement("form",{onSubmit:c.handleSubmit((function(e){var n=function(e){var n=e.split(":").reverse();if(0===n.length)return 0;var t=parseInt(n[0],10);return n[1]&&(t+=60*parseInt(n[1],10)),n[2]&&(t+=60*parseInt(n[2],10)*60),t}(e.predictedTime),t=Object(De.a)(Object(De.a)({},e),{},{predictedTime:n});console.log(t),r&&r(n)}))},a.a.createElement("input",{type:"hidden",id:"predictedTime_raceId",name:"raceId",value:n,ref:c.register({required:!0})}),a.a.createElement("input",{type:"hidden",id:"predictedTime_runnerId",name:"runnerId",value:t,ref:c.register({required:!0})}),a.a.createElement(Ye,null,a.a.createElement(fe,{formName:"predictedTime",fieldName:"predictedTime",required:!0,error:c.errors.predictedTime&&"Please enter a time (hh:mm:ss)"}),a.a.createElement(Fe,{type:"submit"},"Submit"))))},Me=function(e){var n,t=e.raceId,c=e.runnerId,i=Object(r.useState)(function(e,n){var t;return(null===(t=we(e,n))||void 0===t?void 0:t.predictedTime)||0}(c,t)),u=Object(y.a)(i,2),l=u[0],o=u[1],m=null===(n=Se(t))||void 0===n?void 0:n.startTime;return l>0?a.a.createElement(a.a.Fragment,null,l&&a.a.createElement("p",null,a.a.createElement("strong",null,"Your predicted time: "),K(l)),m&&a.a.createElement("p",null,a.a.createElement("strong",null,"Your start time: "),$(m,"h:mma"))):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"You don't have any results yet, please enter your estimated time"),a.a.createElement(Ve,{raceId:t,runnerId:c,onSuccess:function(e){o(e)}}))};function Ae(){var e=Object(u.a)(["\n  & > * + * {\n    margin: "," 0;\n  }\n"]);return Ae=function(){return e},e}var Le=Object(m.d)("section")(Ae(),(function(e){return e.theme.spacing.small})),qe=function(e){var n=e.raceId,t=e.raceName,c=e.runnerId,i=!!c&&we(c,n),u=Object(r.useState)(i),o=Object(y.a)(u,2),m=o[0],d=o[1],s=t?a.a.createElement(l.b,{to:q.RACE_DETAIL.replace(":raceId",n)},t):null;return a.a.createElement(Le,null,a.a.createElement("header",null,a.a.createElement("h3",null,t?"Next Race":"Registration")),m?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"You are registered for ",t?s:"this race","!"),c&&a.a.createElement(Me,{raceId:n,runnerId:c})):a.a.createElement(a.a.Fragment,null,t&&a.a.createElement("div",null,s),a.a.createElement(R,{onClick:function(){console.log("Registered for race ".concat(n)),d(!0)}},"Register")))};function _e(){var e=Object(u.a)(["\n  color: ",";\n"]);return _e=function(){return e},e}function Pe(){var e=Object(u.a)(["\n  font-weight: bold;\n  padding-right: ",";\n"]);return Pe=function(){return e},e}function ze(){var e=Object(u.a)(["\n  & > * + * {\n    margin: "," 0;\n  }\n"]);return ze=function(){return e},e}var Ue=Object(m.d)("section")(ze(),(function(e){return e.theme.spacing.small})),Be=Object(m.d)("th")(Pe(),(function(e){return e.theme.spacing.medium})),He=Object(m.d)("p")(_e(),(function(e){return e.theme.colors.secondary})),We=function(e){var n=e.id,t=Se(n);return t?a.a.createElement(Ue,null,a.a.createElement("header",null,a.a.createElement("h2",null,t.name)),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement(Be,null,"Start:"),a.a.createElement("td",null,$(t.startTime,U))),a.a.createElement("tr",null,a.a.createElement(Be,null,"Distance:"),a.a.createElement("td",null,t.distance," ",t.unit)))),t.description&&a.a.createElement(He,null,t.description)):null},Ge=function(e){var n=e.results.sort((function(e,n){return n.points-e.points}));return a.a.createElement(Ee,{title:"Results",columns:["Name","Time","Points"]},n.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,a.a.createElement(l.b,{to:"/runner/".concat(e.runnerId)},k(e.runnerId))),a.a.createElement("td",null,e.actualTime&&K(e.actualTime)),a.a.createElement("td",null,e.points))})))},Je=function(e){var n=e.volunteers;return a.a.createElement(Ee,{title:"Volunteers",columns:["Name"]},n.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,a.a.createElement(l.b,{to:"/runner/".concat(e.id)},k(e.id))))})))},Xe=function(e){var n=e.results,t=e.raceStartTime,r=n.sort((function(e,n){return e.predictedTime&&n.predictedTime?e.predictedTime-n.predictedTime:0}));return a.a.createElement(Ee,{title:"Runners",columns:["Name","Predicted Time","Start Time"]},r.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,a.a.createElement(l.b,{to:"/runner/".concat(e.runnerId)},k(e.runnerId))),a.a.createElement("td",null,e.predictedTime&&K(e.predictedTime)),a.a.createElement("td",null,t&&$(t,"h:mma")))})))};function $e(){var e=Object(u.a)(["\n  flex: 1 2 auto;\n  & > * + * {\n    margin-top: ",";\n  }\n"]);return $e=function(){return e},e}function Ke(){var e=Object(u.a)(["\n  display: block;\n  margin-top: ",";\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(u.a)(["\n  & > * + * {\n    margin-top: ",";\n  }\n  @media screen and (min-width: 680px) {\n    display: flex;\n    justify-content: space-between;\n\n    & > * {\n      margin-top: 0;\n      width: 100%;\n    }\n    & > * + * {\n      margin-left: ",";\n    }\n  }\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(u.a)(["\n  padding-top: ",";\n  padding-bottom: ",";\n  text-decoration: none;\n  display: block;\n  margin-bottom: ",";\n"]);return Ze=function(){return e},e}var en=Object(m.d)(l.b)(Ze(),(function(e){return e.theme.spacing.small}),(function(e){return e.theme.spacing.small}),(function(e){return e.theme.spacing.small})),nn=Object(m.d)("div")(Qe(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.xLarge})),tn=Object(m.d)(l.b)(Ke(),(function(e){return e.theme.spacing.medium})),rn=Object(m.d)("section")($e(),(function(e){return e.theme.spacing.medium})),an=function(){var e=Object(o.g)().raceId,n=Object(o.h)().path;if(!e)return null;var t=Se(e);if(!t)return null;var r=T.filter((function(e){var n;return-1===(null===(n=t.volunteers)||void 0===n?void 0:n.findIndex((function(n){return n.id===e.id})))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",null,a.a.createElement(en,{to:"/series/".concat(t.seriesId)},"< Back to Series")),a.a.createElement(nn,null,a.a.createElement(We,{id:e}),a.a.createElement(o.a,{path:n,exact:!0},!t.isFinished&&G(t.startTime)&&a.a.createElement(qe,{raceId:e}))),t.results&&(t.isFinished?a.a.createElement(Ge,{results:t.results}):a.a.createElement(o.c,null,a.a.createElement(o.a,{path:"".concat(n,"/edit")},a.a.createElement(Oe,{results:t.results,raceId:t.id})),a.a.createElement(o.a,null,a.a.createElement(nn,null,a.a.createElement("div",null,a.a.createElement(Xe,{results:t.results,raceStartTime:t.startTime}),a.a.createElement(tn,{to:"".concat(t.id,"/edit")},a.a.createElement(R,null,"Add results"))),a.a.createElement(rn,null,t.volunteers&&a.a.createElement(Je,{volunteers:t.volunteers}),a.a.createElement(A,{raceId:t.id,possibleVolunteers:r})))))))},cn=function(e){var n=e.id,t=x(n);return t?a.a.createElement("header",null,a.a.createElement("h2",null,t.name)):null},un=function(e){var n=e.results.sort((function(e,n){return n.points-e.points}));return a.a.createElement(Ee,{title:"Previous Results",columns:["Race","Time","Points"]},n.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,a.a.createElement(l.b,{to:"/race/".concat(e.raceId)},function(e){var n;return null===(n=Se(e))||void 0===n?void 0:n.name}(e.raceId))),a.a.createElement("td",null,e.actualTime&&K(e.actualTime)),a.a.createElement("td",null,e.points))})))},ln=function(e){var n;return null===(n=Se(e))||void 0===n?void 0:n.startTime},on=function(e){var n=e.results.sort((function(e,n){var t=ln(e.raceId),r=ln(n.raceId);return t&&r?J(t,r):0}));return a.a.createElement(Ee,{title:"Upcoming Races",columns:["Race","Race Start","Predicted Time","Your Start"]},n.map((function(e){var n=ln(e.raceId);return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,a.a.createElement(l.b,{to:"/race/".concat(e.raceId)},function(e){var n;return null===(n=Se(e))||void 0===n?void 0:n.name}(e.raceId))),a.a.createElement("td",null,n&&function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U;return P()(e).format(n)}(n)),a.a.createElement("td",null,e.predictedTime&&K(e.predictedTime)),a.a.createElement("td",null,n&&$(n,"h:mma")))})))};function mn(){var e=Object(u.a)(["\n  & > * + * {\n    margin-top: ",";\n  }\n  @media screen and (min-width: 1000px) {\n    display: flex;\n    justify-content: space-between;\n\n    & > * {\n      margin-top: 0;\n      width: 100%;\n    }\n    & > * + * {\n      margin-left: ",";\n    }\n  }\n"]);return mn=function(){return e},e}function dn(){var e=Object(u.a)(["\n  & > * + * {\n    margin-top: ",";\n  }\n  @media screen and (min-width: 680px) {\n    display: flex;\n    justify-content: space-between;\n\n    & > * {\n      margin-top: 0;\n      width: 100%;\n    }\n    & > * + * {\n      margin-left: ",";\n    }\n  }\n"]);return dn=function(){return e},e}var sn=Object(m.d)("div")(dn(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.xLarge})),fn=Object(m.d)("div")(mn(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.xLarge})),pn=function(){var e=Object(o.g)().runnerId;if(!e)return null;var n=function(e){return Ie.filter((function(n){return n.runnerId===e}))}(e)||[],t=n.filter((function(e){return!!e.actualTime})),r=n.filter((function(e){return!e.actualTime})),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,n=e.filter((function(e){return!e.isFinished&&W(e.startTime)>W(H())})),t=n.sort((function(e,n){return J(e.startTime,n.startTime)}));if(t)return t[0]}();return a.a.createElement(a.a.Fragment,null,a.a.createElement(sn,null,a.a.createElement(cn,{id:e}),c&&a.a.createElement(qe,{raceId:c.id,raceName:c.name,runnerId:e})),a.a.createElement(fn,null,r.length>0&&a.a.createElement(on,{results:r}),t.length>0&&a.a.createElement("div",{style:{flex:"1 2 auto"}},a.a.createElement(un,{results:t}))))},bn=t(78),En=t(75),hn=t.n(En),gn=function(e){var n=e.formName,t=e.fieldName,r=e.label,c=e.defaultValue,i=e.error,u=e.required,l=e.includeTime,o="".concat(n,"_").concat(t);return a.a.createElement(se,{fieldId:o,label:r,error:i},a.a.createElement(L.a,{as:function(e){var n,t=e.value,r=(e.defaultValue,Object(bn.a)(e,["value","defaultValue"]));return a.a.createElement(hn.a,Object.assign({selected:(n=t,new Date(P()(n).valueOf())),dateFormat:l?B:"MM/dd/yyyy",customInput:a.a.createElement(ae,null),showTimeSelect:l},r))},name:t,id:"".concat(n,"_").concat(t),defaultValue:c,rules:{required:u},onChange:function(e){var n,t=Object(y.a)(e,1)[0];return l?(n=t,P()(n).format(z)):function(e){return P()(e).startOf("day").format("YYYY-MM-DD")}(t)}}))},vn=function(e){var n=e.formName,t=e.fieldName,r=e.label,c=e.min,i=e.max,u=e.defaultValue,l=e.error,o=e.required,m="".concat(n,"_").concat(t);return a.a.createElement(se,{fieldId:m,label:r,error:l},a.a.createElement(L.a,{as:ae,type:"number",step:"0.1",id:m,min:c,max:i,name:t,defaultValue:u,rules:{required:o},onChange:function(e){var n=Object(y.a)(e,1)[0];return n.target.value?Math.abs(parseFloat(n.target.value)):""}}))},On=function(e){var n=e.formName,t=e.fieldName,r=e.label,c=e.options,i=e.defaultValue,u=e.error,l=e.required,o=Object(L.d)().register,m="".concat(n,"_").concat(t);return a.a.createElement(se,{fieldId:m,label:r,error:u},a.a.createElement(re,{id:m,name:t,defaultValue:i,ref:o({required:l})},c.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value||e.label},e.value)}))))},jn=function(e){var n=e.formName,t=e.fieldName,r=e.label,c=e.error,i=e.defaultValue,u=e.required,l=Object(L.d)().register,o="".concat(n,"_").concat(t);return a.a.createElement(se,{fieldId:o,label:r,error:c},a.a.createElement(ae,{type:"text",id:o,name:t,defaultValue:i,ref:l({required:u})}))},yn=function(e){var n=e.formName,t=e.fieldName,r=e.label,c=e.defaultValue,i=e.error,u=e.required,l=Object(L.d)().register,o="".concat(n,"_").concat(t);return a.a.createElement(se,{fieldId:o,label:r,error:i},a.a.createElement(ce,{id:o,name:t,defaultValue:c,ref:l({required:u})}))};function In(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: ",";\n\n  button + button {\n    margin-left: ",";\n  }\n"]);return In=function(){return e},e}function Tn(){var e=Object(u.a)(["\n  grid-area: desc;\n"]);return Tn=function(){return e},e}function kn(){var e=Object(u.a)(["\n  max-width: 150px;\n  grid-area: unit;\n"]);return kn=function(){return e},e}function xn(){var e=Object(u.a)(["\n  grid-area: distance;\n"]);return xn=function(){return e},e}function Sn(){var e=Object(u.a)(["\n  grid-area: start;\n"]);return Sn=function(){return e},e}function Nn(){var e=Object(u.a)(["\n  grid-area: name;\n"]);return Nn=function(){return e},e}function wn(){var e=Object(u.a)(["\n  display: grid;\n  grid-gap: ",';\n  grid-template-areas:\n    "name name"\n    "start start"\n    "distance unit"\n    "desc desc";\n  grid-template-columns: 1fr 1fr;\n\n  @media screen and (min-width: 480px) {\n    grid-template-areas:\n      "name name name name"\n      "start start distance unit"\n      "desc desc desc desc";\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n\n  @media screen and (min-width: 800px) {\n    grid-template-areas:\n      "name name start start"\n      "desc desc distance unit";\n  }\n']);return wn=function(){return e},e}var Dn=Object(m.d)("div")(wn(),(function(e){return e.theme.spacing.medium})),Rn=Object(m.d)("div")(Nn()),Cn=Object(m.d)("div")(Sn()),Yn=Object(m.d)("div")(xn()),Fn=Object(m.d)("div")(kn()),Vn=Object(m.d)("div")(Tn()),Mn=Object(m.d)("div")(In(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.medium})),An=function(e){var n=e.seriesId,t=Object(r.useState)(!1),c=Object(y.a)(t,2),i=c[0],u=c[1],l=Object(L.c)();if(!i)return a.a.createElement(R,{style:{float:"right"},onClick:function(){return u(!0)}},"Add new race");var o,m;return a.a.createElement(L.b,l,a.a.createElement("form",{onSubmit:l.handleSubmit((function(e){console.log(e)}))},a.a.createElement("input",{type:"hidden",id:"newRace_seriesId",name:"seriesId",value:n,ref:l.register({required:!0})}),a.a.createElement(Dn,null,a.a.createElement(Rn,null,a.a.createElement(jn,{formName:"newRace",fieldName:"name",label:"Race Name",required:!0,error:l.errors.name&&"Please enter a name"})),a.a.createElement(Cn,null,a.a.createElement(gn,{formName:"newRace",fieldName:"startTime",label:"Start Time",defaultValue:(o=7,m=8,P()().startOf("day").add(o,"day").add(m,"hour").format(z)),required:!0,error:l.errors.startTime&&"Please enter a start time",includeTime:!0})),a.a.createElement(Yn,null,a.a.createElement(vn,{min:0,formName:"newRace",fieldName:"distance",label:"Distance",defaultValue:5,required:!0,error:l.errors.distance&&"Please enter a distance"})),a.a.createElement(Fn,null,a.a.createElement(On,{formName:"newRace",fieldName:"unit",label:"Unit",defaultValue:ge.km,options:[{value:"km"},{value:"mi"}],error:l.errors.unit&&"Please enter a unit"})),a.a.createElement(Vn,null,a.a.createElement(yn,{formName:"newRace",fieldName:"description",label:"Description"}))),a.a.createElement(Mn,null,a.a.createElement(R,{type:"submit"},"Save"),a.a.createElement(C,{onClick:function(){return u(!1)}},"Cancel"))))};function Ln(){var e=Object(u.a)(["\n  color: ",";\n"]);return Ln=function(){return e},e}function qn(){var e=Object(u.a)(["\n  & + & {\n    margin-top: ",";\n  }\n"]);return qn=function(){return e},e}function _n(){var e=Object(u.a)(["\n  display: flex;\n  text-decoration: none;\n  border: ",";\n  border-radius: ",";\n  background: #fff;\n  padding: ",";\n\n  div:first-of-type {\n    margin-right: auto;\n  }\n"]);return _n=function(){return e},e}var Pn=Object(m.d)(l.b)(_n(),(function(e){return"".concat(e.theme.borders.style," ").concat(e.theme.colors.light)}),(function(e){return e.theme.borders.radius}),(function(e){return e.theme.spacing.medium})),zn=Object(m.d)("li")(qn(),(function(e){return e.theme.spacing.small})),Un=Object(m.d)("ul")(Ln(),(function(e){return e.theme.colors.secondary})),Bn=function(e){var n=e.linkUrl,t=e.linkText,r=void 0===t?"Details":t,c=e.title,i=e.info;return a.a.createElement(zn,null,a.a.createElement(Pn,{to:n},a.a.createElement("div",null,a.a.createElement("h3",null,c),a.a.createElement(Un,null,i.map((function(e){return a.a.createElement("li",{key:e},e)})))),a.a.createElement("span",null,r," >")))},Hn=function(e){var n=e.races;return a.a.createElement("ul",null,n.map((function(e){return a.a.createElement(Bn,{key:e.id,linkUrl:"/race/".concat(e.id),linkText:e.results&&"Results",title:e.name,info:[$(e.startTime,U),"".concat(e.distance," ").concat(e.unit)]})})))},Wn=[{id:"1",name:"Winter 2020",startDate:"2020-11-01",endDate:"2021-02-28",description:"Welcome back after Coronavirus! We are excited to be back and out there again."},{id:"2",name:"Spring 2021",startDate:"2021-03-01",endDate:"2021-05-31"}],Gn=function(e){var n=[];return function(e){return Ne.filter((function(n){return n.seriesId===e}))}(e).forEach((function(e){console.log(e.results&&e.isFinished),e.results&&e.isFinished&&(n=n.concat(e.results))})),n},Jn=Wn;function Xn(){var e=Object(u.a)(["\n  color: ",";\n"]);return Xn=function(){return e},e}function $n(){var e=Object(u.a)(["\n  font-weight: bold;\n  padding-right: ",";\n"]);return $n=function(){return e},e}function Kn(){var e=Object(u.a)(["\n  & > * + * {\n    margin: "," 0;\n  }\n"]);return Kn=function(){return e},e}var Qn=Object(m.d)("section")(Kn(),(function(e){return e.theme.spacing.small})),Zn=Object(m.d)("th")($n(),(function(e){return e.theme.spacing.medium})),et=Object(m.d)("p")(Xn(),(function(e){return e.theme.colors.secondary})),nt=function(e){var n=function(e){return Wn.find((function(n){return n.id===e}))}(e.id);return n?a.a.createElement(Qn,null,a.a.createElement("header",null,a.a.createElement("h2",null,n.name)),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement(Zn,null,"Start:"),a.a.createElement("td",null,$(n.startDate))),a.a.createElement("tr",null,a.a.createElement(Zn,null,"End:"),a.a.createElement("td",null,$(n.endDate))))),n.description&&a.a.createElement(et,null,n.description)):null},tt=function(e){var n=function(e){var n=Gn(e),t={};if(!n.length)return[];n.forEach((function(e){t[e.runnerId]?t[e.runnerId].points+=e.points:t[e.runnerId]={runnerId:e.runnerId,runnerName:k(e.runnerId)||"Runner ".concat(e.runnerId),points:e.points}}));var r=[];for(var a in t)r.push(t[a]);return r.sort((function(e,n){return n.points-e.points})),r}(e.seriesId);return n.length?a.a.createElement(Ee,{title:"Current Standings",columns:["Name","Points"]},n.map((function(e){return a.a.createElement("tr",{key:e.runnerId},a.a.createElement("td",null,e.runnerName),a.a.createElement("td",null,e.points))}))):null};function rt(){var e=Object(u.a)(["\n  & > * + * {\n    margin-top: ",";\n  }\n"]);return rt=function(){return e},e}function at(){var e=Object(u.a)(["\n  & > * + * {\n    margin-top: ",";\n  }\n  @media screen and (min-width: 800px) {\n    display: flex;\n    justify-content: space-between;\n\n    & > * {\n      margin-top: 0;\n      width: 100%;\n    }\n    & > * + * {\n      margin-left: ",";\n    }\n  }\n"]);return at=function(){return e},e}function ct(){var e=Object(u.a)(["\n  padding-top: ",";\n  padding-bottom: ",";\n  text-decoration: none;\n  display: block;\n  margin-bottom: ",";\n"]);return ct=function(){return e},e}var it=Object(m.d)(l.b)(ct(),(function(e){return e.theme.spacing.small}),(function(e){return e.theme.spacing.small}),(function(e){return e.theme.spacing.small})),ut=Object(m.d)("div")(at(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.xLarge})),lt=Object(m.d)("div")(rt(),(function(e){return e.theme.spacing.medium})),ot=function(){var e=Object(o.g)().seriesId;if(!e)return null;var n=function(e){return xe.filter((function(n){return n.seriesId===e}))}(e),t=n.filter((function(e){return G(e.startTime)&&!e.isFinished})),r=n.filter((function(e){return e.isFinished||!G(e.startTime)}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",null,a.a.createElement(it,{to:"/series"},"< Back to All Series")),a.a.createElement(nt,{id:e}),a.a.createElement(ut,null,a.a.createElement(lt,null,t.length>0&&a.a.createElement(lt,null,a.a.createElement("header",null,a.a.createElement("h3",{style:{display:"inline"}},"Upcoming Races"),a.a.createElement(An,{seriesId:e})),a.a.createElement(Hn,{races:t})),r.length>0&&a.a.createElement(lt,null,a.a.createElement("header",null,a.a.createElement("h3",null,"Past Races")),a.a.createElement(Hn,{races:r}))),a.a.createElement(tt,{seriesId:e})))};function mt(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: ",";\n\n  button + button {\n    margin-left: ",";\n  }\n"]);return mt=function(){return e},e}function dt(){var e=Object(u.a)(["\n  grid-column-start: 1;\n  grid-column-end: 3;\n"]);return dt=function(){return e},e}function st(){var e=Object(u.a)(["\n  display: grid;\n  grid-gap: ",";\n  grid-template-columns: 1fr 1fr;\n\n  @media screen and (min-width: 800px) {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n"]);return st=function(){return e},e}var ft=Object(m.d)("div")(st(),(function(e){return e.theme.spacing.medium})),pt=Object(m.d)("div")(dt()),bt=Object(m.d)("div")(mt(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.medium})),Et=function(){var e=Object(r.useState)(!1),n=Object(y.a)(e,2),t=n[0],c=n[1],i=Object(L.c)();if(!t)return a.a.createElement(R,{onClick:function(){return c(!0)}},"Add new series");return a.a.createElement(L.b,i,a.a.createElement("form",{onSubmit:i.handleSubmit((function(e){console.log(e)}))},a.a.createElement(ft,null,a.a.createElement(pt,null,a.a.createElement(jn,{formName:"newSeries",fieldName:"name",label:"Series Name",required:!0,error:i.errors.name&&"Please enter a name"})),a.a.createElement(gn,{formName:"newSeries",fieldName:"startDate",label:"Start Date",defaultValue:H(),required:!0,error:i.errors.startDate&&"Please enter a start date"}),a.a.createElement(gn,{formName:"newSeries",fieldName:"endDate",label:"End Date",defaultValue:X(3,"month"),required:!0,error:i.errors.endDate&&"Please enter a start date"}),a.a.createElement(pt,null,a.a.createElement(yn,{formName:"newSeries",fieldName:"description",label:"Description"}))),a.a.createElement(bt,null,a.a.createElement(R,{type:"submit"},"Save"),a.a.createElement(C,{onClick:function(){return c(!1)}},"Cancel"))))},ht=function(){return a.a.createElement("section",null,a.a.createElement("header",null,a.a.createElement("h2",null,"All Series")),a.a.createElement("ul",null,Jn.map((function(e){return a.a.createElement(Bn,{key:e.id,linkUrl:"/series/".concat(e.id),title:e.name,info:["".concat($(e.startDate)," - ").concat($(e.endDate))]})}))))},gt=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ht,null),a.a.createElement(Et,null))};function vt(){var e=Object(u.a)(["\n  padding: ",";\n\n  & > *:not(nav) + * {\n    margin-top: ",";\n  }\n"]);return vt=function(){return e},e}var Ot=Object(m.d)("main")(vt(),(function(e){return e.theme.spacing.medium}),(function(e){return e.theme.spacing.xLarge})),jt=function(){return a.a.createElement(m.a,{theme:g},a.a.createElement(h,null),a.a.createElement(l.a,{basename:"/tortoise-hare/"},a.a.createElement(b,null),a.a.createElement(Ot,null,a.a.createElement(o.c,null,a.a.createElement(o.a,{path:q.HOME,exact:!0},a.a.createElement(v,null)),a.a.createElement(o.a,{path:q.SERIES_LIST,exact:!0},a.a.createElement(gt,null)),a.a.createElement(o.a,{path:q.SERIES_DETAIL},a.a.createElement(ot,null)),a.a.createElement(o.a,{path:q.RACE_DETAIL},a.a.createElement(an,null)),a.a.createElement(o.a,{path:q.RUNNER_DETAIL},a.a.createElement(pn,null)),a.a.createElement(o.a,{path:q.LOGIN,exact:!0},a.a.createElement(O,null))))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(jt,null)),document.getElementById("root"))},79:function(e,n,t){e.exports=t(148)}},[[79,1,2]]]);
//# sourceMappingURL=main.4904b9fa.chunk.js.map