(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c73eba"],{"0d83":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"filter-container"},[n("el-form",{attrs:{size:"small"}},[n("el-form-item",{staticClass:"mr10",attrs:{label:""}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-s-tools"},on:{click:t.syncApplet}},[t._v("同步小程序订阅消息")]),t._v(" "),n("el-button",{attrs:{type:"success",icon:"el-icon-s-tools"},on:{click:t.syncPublic}},[t._v("同步公众号模板消息")])],1),t._v(" "),n("el-form-item",{staticClass:"mr10",attrs:{label:""}},[n("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-collapse-item",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("div",{staticStyle:{"font-size":"14px","font-weight":"bold",color:"#1890ff"}},[t._v("同步消息必读 "),n("i",{staticClass:"header-icon el-icon-info"})])]),t._v(" "),n("div",{staticStyle:{"font-weight":"bold"}},[t._v("小程序订阅消息")]),t._v(" "),n("div",[t._v("登录微信小程序后台，基本设置，服务类目增加《生活服务 > 百货/超市/便利店》 "),n("span",{staticStyle:{color:"#FF9400"}},[t._v("(否则同步小程序订阅消息会报错)")])]),t._v(" "),n("div",[t._v("同步小程序订阅消息 是在小程序后台未添加订阅消息模板的前提下使用的，会新增一个模板消息并把信息同步过来，如果小程序后台已经添加过的，会跳过不会更新本项目数据库。")]),t._v(" "),n("div",{staticStyle:{"font-weight":"bold"}},[t._v("微信模板消息")]),t._v(" "),n("div",[t._v("登录微信公众号后台，选择模板消息，将模板消息的所在行业修改副行业为《其他/其他》 "),n("span",{staticStyle:{color:"#FF9400"}},[t._v("(否则同步模板消息不成功)")])]),t._v(" "),n("div",[t._v("同步公众号模板消息 同步公众号模板会删除公众号后台现有的模板，并重新添加新的模板，然后同步信息到数据库，如果多个项目使用同一个公众号的模板，请谨慎操作。")])],2)],1)],1)],1)],1),t._v(" "),t.headeNum.length>0?n("el-tabs",{on:{"tab-click":function(e){return t.getList(1)}},model:{value:t.tableForm.type,callback:function(e){t.$set(t.tableForm,"type",e)},expression:"tableForm.type"}},t._l(t.headeNum,(function(t,e){return n("el-tab-pane",{key:e,attrs:{name:t.type.toString(),label:t.title}})})),1):t._e()],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"ID",prop:"notice_config_id","min-width":"90"}}),t._v(" "),n("el-table-column",{attrs:{prop:"notice_title",label:"通知类型","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"notice_info",label:"通知场景说明","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{label:"公众号模板","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.notice_wechat||1==e.row.notice_wechat?n("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭"},nativeOn:{click:function(n){return t.onchangeIsShow(e.row,"notice_wechat")}},model:{value:e.row.notice_wechat,callback:function(n){t.$set(e.row,"notice_wechat",n)},expression:"scope.row.notice_wechat"}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"小程序订阅","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.notice_routine||1==e.row.notice_routine?n("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭"},nativeOn:{click:function(n){return t.onchangeIsShow(e.row,"notice_routine")}},model:{value:e.row.notice_routine,callback:function(n){t.$set(e.row,"notice_routine",n)},expression:"scope.row.notice_routine"}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"发送短信","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.notice_sms||1==e.row.notice_sms?n("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"开启","inactive-text":"关闭"},nativeOn:{click:function(n){return t.onchangeIsShow(e.row,"notice_sms")}},model:{value:e.row.notice_sms,callback:function(n){t.$set(e.row,"notice_sms",n)},expression:"scope.row.notice_sms"}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"90",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.onChange(e.row.notice_config_id)}}},[t._v("设置")])]}}])})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableForm.limit,"current-page":t.tableForm.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},o=[],a=n("90e7"),i=n("8593"),c=n("83d6"),u={name:"Notification",data:function(){return{loading:!1,roterPre:c["roterPre"],listLoading:!0,tableData:{data:[],total:0},tableForm:{page:1,limit:20,type:"0"},ruleForm:{status:"0"},headeNum:[{type:0,title:"通知会员"},{type:1,title:"通知商户"}],noticeConfig:{sms_use_type:0},activeName:1}},computed:{},mounted:function(){this.getList("")},methods:{add:function(){var t=this;this.$modalForm(Object(a["a"])()).then((function(){return t.getList()}))},onSet:function(t){var e=this;this.$modalForm(Object(a["B"])(t)).then((function(){return e.getList()}))},onChange:function(t){var e=this;this.$modalForm(Object(a["z"])(t)).then((function(){return e.getList()}))},getList:function(t){var e=this;this.listLoading=!0,this.tableForm.page=t||this.tableForm.page,Object(i["p"])().then((function(t){e.noticeConfig=t.data})),Object(a["A"])(this.tableForm).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},syncApplet:function(){var t=this;Object(a["U"])().then((function(e){var n=e.message;t.$message.success(n)})).catch((function(e){var n=e.message;t.$message.error(n)}))},syncPublic:function(){var t=this;Object(a["V"])().then((function(e){var n=e.message;t.$message.success(n)})).catch((function(e){var n=e.message;t.$message.error(n)}))},onchangeIsShow:function(t,e){var n=this,r={status:t[e],key:e};Object(a["C"])(t.notice_config_id,r).then((function(t){var e=t.message;n.$message.success(e),n.getList("")})).catch((function(t){var e=t.message;n.$message.error(e)}))},pageChange:function(t){this.tableForm.page=t,this.getList("")},handleSizeChange:function(t){this.tableForm.limit=t,this.getList("")}}},s=u,l=n("2877"),f=Object(l["a"])(s,r,o,!1,null,"fea802c8",null);e["default"]=f.exports},"90e7":function(t,e,n){"use strict";n.d(e,"x",(function(){return o})),n.d(e,"H",(function(){return a})),n.d(e,"K",(function(){return i})),n.d(e,"I",(function(){return c})),n.d(e,"J",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"i",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"h",(function(){return m})),n.d(e,"g",(function(){return g})),n.d(e,"f",(function(){return v})),n.d(e,"u",(function(){return h})),n.d(e,"L",(function(){return p})),n.d(e,"S",(function(){return _})),n.d(e,"w",(function(){return b})),n.d(e,"n",(function(){return w})),n.d(e,"D",(function(){return y})),n.d(e,"T",(function(){return k})),n.d(e,"P",(function(){return x})),n.d(e,"O",(function(){return F})),n.d(e,"N",(function(){return C})),n.d(e,"p",(function(){return S})),n.d(e,"q",(function(){return L})),n.d(e,"l",(function(){return $})),n.d(e,"Q",(function(){return O})),n.d(e,"m",(function(){return z})),n.d(e,"M",(function(){return j})),n.d(e,"s",(function(){return N})),n.d(e,"Z",(function(){return D})),n.d(e,"b",(function(){return I})),n.d(e,"j",(function(){return P})),n.d(e,"k",(function(){return A})),n.d(e,"Y",(function(){return B})),n.d(e,"o",(function(){return J})),n.d(e,"G",(function(){return E})),n.d(e,"F",(function(){return U})),n.d(e,"y",(function(){return V})),n.d(e,"A",(function(){return q})),n.d(e,"a",(function(){return G})),n.d(e,"B",(function(){return H})),n.d(e,"z",(function(){return K})),n.d(e,"C",(function(){return M})),n.d(e,"U",(function(){return Q})),n.d(e,"V",(function(){return R})),n.d(e,"t",(function(){return T})),n.d(e,"R",(function(){return Y})),n.d(e,"v",(function(){return Z})),n.d(e,"r",(function(){return W})),n.d(e,"E",(function(){return X}));var r=n("0c6d");function o(t){return r["a"].get("system/role/lst",t)}function a(){return r["a"].get("system/role/create/form")}function i(t){return r["a"].get("system/role/update/form/".concat(t))}function c(t){return r["a"].delete("system/role/delete/".concat(t))}function u(t,e){return r["a"].post("system/role/status/".concat(t),{status:e})}function s(t){return r["a"].get("system/admin/lst",t)}function l(){return r["a"].get("/system/admin/create/form")}function f(t){return r["a"].get("system/admin/update/form/".concat(t))}function d(t){return r["a"].delete("system/admin/delete/".concat(t))}function m(t,e){return r["a"].post("system/admin/status/".concat(t),{status:e})}function g(t){return r["a"].get("system/admin/password/form/".concat(t))}function v(t){return r["a"].get("system/admin/log",t)}function h(){return r["a"].get("serve/user/is_login")}function p(){return r["a"].get("serve/user/info")}function _(t){return r["a"].get("serve/mealList/".concat(t))}function b(){return r["a"].get("sms/logout")}function w(t){return r["a"].post("serve/login",t)}function y(t){return r["a"].get("serve/paymeal",t)}function k(t){return r["a"].get("sms/record",t)}function x(t){return r["a"].get("serve/record",t)}function F(t){return r["a"].get("serve/us_lst",t)}function C(t){return r["a"].post("serve/open",t)}function S(){return r["a"].get("serve/expr/lst")}function L(t){return r["a"].get("serve/expr/temps",t)}function $(t){return r["a"].get("serve/captcha/".concat(t))}function O(t){return r["a"].post("serve/change_sign",t)}function z(t){return r["a"].post("serve/captcha",t)}function j(t){return r["a"].post("serve/change_password",t)}function N(){return r["a"].get("serve/config")}function D(t){return r["a"].post("serve/config",t)}function I(){return r["a"].get("serve/meal/create/form")}function P(t){return r["a"].get("serve/meal/lst",t)}function A(t,e){return r["a"].post("serve/meal/status/".concat(t),e)}function B(t){return r["a"].get("serve/meal/update/".concat(t,"/form"))}function J(t){return r["a"].delete("serve/meal/detele/".concat(t))}function E(t){return r["a"].get("serve/paylst",t)}function U(t){return r["a"].get("serve/mer/paylst",t)}function V(t){return r["a"].get("serve/mer/lst",t)}function q(t){return r["a"].get("notice/config/lst",t)}function G(){return r["a"].get("notice/config/create/form")}function H(t){return r["a"].get("notice/config/update/".concat(t,"/form"))}function K(t){return r["a"].get("notice/config/change/".concat(t,"/form"))}function M(t,e){return r["a"].post("notice/config/status/".concat(t),e)}function Q(){return r["a"].get("wechat/template/min/sync")}function R(){return r["a"].get("wechat/template/sync")}function T(){return r["a"].get("change/color")}function Y(t){return r["a"].post("change/color",t)}function Z(){return r["a"].get("agreement/keylst")}function W(t){return r["a"].get("agreement/".concat(t))}function X(t,e){return r["a"].post("agreement/".concat(t),e)}}}]);