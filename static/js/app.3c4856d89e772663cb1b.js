webpackJsonp([10,8],{0:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var r=n(34),o=u(r),a=n(47),s=u(a),i=n(48),l=u(i),c=n(105),f=u(c);n(89);var d=n(4),m=u(d),p=n(62),h=u(p),b=n(59),v=u(b),y=n(200),_=u(y),g=n(140),M=u(g),S=n(203),w=u(S),j=n(204),L=u(j);m.default.use(f.default),m.default.use(h.default),m.default.http||m.default.use(v.default);var N=m.default.http,x=m.default.prototype.$alert;N.interceptors.push(function(e,t){t(function(e){if(!e.ok)return x("服务器繁忙"),console.log(e.status,e.statusText),e;var t=e.body;return"229"===t.responseStatus?w.default.push("/login"):"0"!==t.responseStatus&&x(t.object),e})});var O=!0,D=!1,F=void 0;try{for(var P,T=(0,s.default)((0,o.default)(_.default));!(O=(P=T.next()).done);O=!0){var U=P.value;m.default.filter(U,_.default[U])}}catch(e){D=!0,F=e}finally{try{!O&&T.return&&T.return()}finally{if(D)throw F}}l.default.prototype.finally=function(e){return this.then(function(t){e(t)},function(t){e(t)})},new m.default({el:"#app",render:function(e){return e(M.default)},router:w.default,store:L.default})},33:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(e){return new h.default(function(t){setTimeout(function(){t(e)},500)})}function o(e,t){return Math.round(Math.random()*(t-e)+e)}function a(e){var t="admin",n="admin",u="1234",o={body:{}};return t===e.username&&(0,M.default)(n)===e.password?u===e.captcha?o.body.responseStatus="0":(o.body.responseStatus="1",o.body.object="验证码错误"):(o.body.responseStatus="1",o.body.object="用户名或密码错误"),r(o)}function s(){var e={body:{responseStatus:"0",object:w}};return r(e)}function i(e){var t=e.pageSize*(e.pageNum-1),n=t+e.pageSize,u=j.slice(t,n),o={body:{responseStatus:"0",object:{total:L,list:u}}};return r(o)}function l(e){var t={customer_realName:e.customer_realName,customer_mobile:e.customer_mobile,customer_identity:e.customer_identity,customer_info:e.customer_info,credit_flow:j[j.length-1]+1,credit_state:1,credit_time:(new Date).getTime(),code_info:N[e.type_id-1]};return j.push(t),L++,r({body:{responseStatus:"0"}})}function c(e){for(var t=void 0,n=0,u=j.length;n<u;n++){var o=j[n];if(o.credit_flow===e.credit_flow){j.splice(n,1),L--,t={body:{responseStatus:"0"}};break}}return t||(t={body:{responseStatus:"1",object:"删除失败"}}),r(t)}function f(){return r({body:{responseStatus:"0",object:{}}})}function d(e){return r({body:{responseStatus:"0",object:{}}})}function m(e){return r({body:{responseStatus:"0",object:{total:0,list:[]}}})}Object.defineProperty(t,"__esModule",{value:!0});var p=n(48),h=u(p);t.doLogin=a,t.getMenu=s,t.getCreditList=i,t.addCustomer=l,t.delCustomer=c,t.fetchFundsAccount=f,t.fetchFundsLoan=d,t.fetchFundsFlowList=m;var b=n(4),v=u(b),y=n(59),_=u(y),g=n(63),M=u(g);v.default.use(_.default);var S=v.default.http;S.options.root="/zx",S.options.emulateJSON=!0;for(var w=[{menu:{menuName:"用户管理"},childrens:[{menuName:"用户列表",resourceUrl:"/userList",childrens:[{menuName:"查看详情",resourceUrl:"/userDetail"}]}]},{menu:{menuName:"权限管理"},childrens:[{menuName:"角色管理",resourceUrl:"/roleManage"},{menuName:"管理员管理",resourceUrl:"/adminManage"}]},{menu:{menuName:"商户管理"},childrens:[{menuName:"商户列表",resourceUrl:"/merchantManage"}]}],j=[],L=25,N=["公积金","移动","地税"],x=0;x<L;x++){var O={customer_realName:"a"+x,customer_mobile:"13000000000",customer_identity:"320705198102122967",customer_info:"The info of a"+x,credit_flow:x,credit_time:(new Date).getTime(),code_info:N[o(0,2)],credit_state:o(0,3)};j.push(O)}},89:function(e,t){},92:function(e,t){},140:function(e,t,n){n(92);var u=n(3)(n(206),n(157),null,null);e.exports=u.exports},157:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},200:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss.S",n=new Date(e),u={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),S:n.getMilliseconds()};if(/(y+)/.test(t)){var r=String(n.getFullYear()),o=RegExp.$1;t=t.replace(o,r.substr(4-o.length))}var s=!0,l=!1,c=void 0;try{for(var f,d=(0,i.default)((0,a.default)(u));!(s=(f=d.next()).done);s=!0){var m=f.value;if(new RegExp("("+m+")").test(t)){var p=RegExp.$1;t=t.replace(p,1===p.length?u[m]:("00"+u[m]).substr(String(u[m]).length))}}}catch(e){l=!0,c=e}finally{try{!s&&d.return&&d.return()}finally{if(l)throw c}}return t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(34),a=u(o),s=n(47),i=u(s);t.default={formatTime:r}},203:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),o=u(r),a=function(e){return n.e(3,function(t){var n=[t(142)];e.apply(null,n)}.bind(this))},s=function(e){return n.e(0,function(t){var n=[t(144)];e.apply(null,n)}.bind(this))},i=function(e){return n.e(7,function(t){var n=[t(148)];e.apply(null,n)}.bind(this))},l=function(e){return n.e(1,function(t){var n=[t(153)];e.apply(null,n)}.bind(this))},c=function(e){return n.e(2,function(t){var n=[t(152)];e.apply(null,n)}.bind(this))},f=function(e){return n.e(5,function(t){var n=[t(150)];e.apply(null,n)}.bind(this))},d=function(e){return n.e(6,function(t){var n=[t(149)];e.apply(null,n)}.bind(this))},m=function(e){return n.e(4,function(t){var n=[t(151)];e.apply(null,n)}.bind(this))},p=[{path:"/login",component:a,meta:{label:"登录"}},{path:"/",component:s,meta:{label:"首页"},children:[{path:"",component:i,meta:{label:"首页"}},{path:"userList",component:l,meta:{label:"用户列表",ancestors:["用户管理"]}},{path:"userDetail",component:c,meta:{label:"查看详情",ancestors:["用户管理","用户列表"]}},{path:"roleManage",component:f,meta:{label:"角色管理",ancestors:["权限管理"]}},{path:"adminManage",component:d,meta:{label:"管理员管理",ancestors:["权限管理"]}},{path:"merchantManage",component:m,meta:{label:"商户列表",ancestors:["商户管理"]}}]}];t.default=new o.default({routes:p})},204:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=u(r),a=n(61),s=u(a),i=n(205),l=u(i);o.default.use(s.default),t.default=new s.default.Store({modules:{menu:l.default}})},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(33),r={menuList:[]},o={setMenuList:function(e,t){e.menuList=t.menuList},clearMenuList:function(e){e.menuList=[]}},a={fetchMenu:function(e){var t=e.commit;return(0,u.getMenu)().then(function(e){var n=e.body;"0"===n.responseStatus&&t("setMenuList",{menuList:n.object})})}},s={menuList:function(e){return e.menuList}};t.default={state:r,mutations:o,actions:a,getters:s}},206:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},215:function(e,t){}});
//# sourceMappingURL=app.3c4856d89e772663cb1b.js.map