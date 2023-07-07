(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4505560"],{5907:function(t,e,n){"use strict";n("7cd2")},"7cd2":function(t,e,n){},a4a1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"container"},[n("el-form",{attrs:{size:"small",inline:"","label-width":"100px"}},[n("el-form-item",{attrs:{label:"套餐类型：",clearable:""}},[n("el-select",{attrs:{placeholder:"请选择套餐类型",clearable:""},on:{change:function(e){return t.getList("")}},model:{value:t.tableFrom.type,callback:function(e){t.$set(t.tableFrom,"type",e)},expression:"tableFrom.type"}},[n("el-option",{attrs:{value:"0",label:"固定套餐"}},[t._v("固定套餐")]),t._v(" "),n("el-option",{attrs:{value:"1",label:"搭配套餐"}},[t._v("搭配套餐")])],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"套餐状态："}},[n("el-select",{attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.getList("")}},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},[n("el-option",{attrs:{value:"",label:"全部"}},[t._v("全部")]),t._v(" "),n("el-option",{attrs:{value:"1",label:"上架"}},[t._v("上架")]),t._v(" "),n("el-option",{attrs:{value:"0",label:"下架"}},[t._v("下架")])],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"套餐搜索："}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入套餐名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList("")}},model:{value:t.tableFrom.title,callback:function(e){t.$set(t.tableFrom,"title",e)},expression:"tableFrom.title"}})],1)],1)],1)]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data}},[n("el-table-column",{attrs:{label:"ID",prop:"discount_id","min-width":"80"}}),t._v(" "),n("el-table-column",{attrs:{label:"套餐名称",prop:"title","min-width":"120"}}),t._v(" "),n("el-table-column",{attrs:{label:"套餐类型","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(0==e.row.type?"固定套餐":"搭配套餐")+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"显示状态","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(n){return t.onchangeIsShow(e.row)}},model:{value:e.row.status,callback:function(n){t.$set(e.row,"status",n)},expression:"scope.row.status"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"限时","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.start_time?n("div",[t._v("不限时")]):n("div",[n("div",[t._v("起："+t._s(e.row.start_time||"--"))]),t._v(" "),n("div",[t._v("止："+t._s(e.row.stop_time||"--"))])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建时间",prop:"create_time","min-width":"120"}}),t._v(" "),n("el-table-column",{attrs:{label:"剩余数量","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.is_limit?e.row.limit_num:"不限量")+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleDetail(e.row.discount_id)}}},[t._v("查看")])]}}])})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),t.dialogVisible?n("el-dialog",{attrs:{title:"套餐详情",center:"",visible:t.dialogVisible,width:"700px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}]},[n("div",{staticClass:"box-container"},[n("div",{staticClass:"title"},[t._v("基本信息：")]),t._v(" "),n("div",{staticClass:"acea-row"},[n("div",{staticClass:"list sp"},[n("label",{staticClass:"name"},[t._v("套餐名称：")]),t._v(t._s(t.formValidate.title))]),t._v(" "),1==t.formValidate.type?n("div",{staticClass:"list sp100"},[n("label",{staticClass:"name"},[t._v("套餐主商品：")]),t._v(" "),n("div",[n("el-table",{staticClass:"tabNumWidth",attrs:{data:t.specsMainData,border:"",size:"mini"}},[n("el-table-column",{attrs:{prop:"store_name",label:"商品名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"product-data"},[e.row.product?n("img",{staticClass:"image",attrs:{src:e.row.product.image}}):t._e(),t._v(" "),n("div",[t._v(t._s(e.row.product.store_name))])])]}}],null,!1,1244405286)}),t._v(" "),n("el-table-column",{attrs:{label:"参与规格","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.attr,(function(e,a){return n("div",{key:a},[t._v("\n                        "+t._s(e.sku)+" | "+t._s(e.price)+"\n                      ")])}))}}],null,!1,14888251)})],1)],1)]):t._e(),t._v(" "),n("div",{staticClass:"list sp100"},[n("label",{staticClass:"name"},[t._v(t._s(1==t.formValidate.type?"套餐搭配商品：":"套餐商品：")+" ")]),t._v(" "),n("div",{staticClass:"labeltop"},[n("el-table",{staticClass:"tabNumWidth",attrs:{data:t.specsData,border:"",size:"mini",height:"260"}},[n("el-table-column",{attrs:{prop:"store_name",label:"商品名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"product-data"},[e.row.product?n("img",{staticClass:"image",attrs:{src:e.row.product.image}}):t._e(),t._v(" "),n("div",[t._v(t._s(e.row.product.store_name))])])]}}],null,!1,1244405286)}),t._v(" "),n("el-table-column",{attrs:{label:"参与规格","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.attr,(function(e,a){return n("div",{key:a},[t._v("\n                        "+t._s(e.sku)+" | "+t._s(e.price)+"\n                      ")])}))}}],null,!1,14888251)})],1)],1)])]),t._v(" "),n("div",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[t._v("套餐活动信息：")]),t._v(" "),n("div",{staticClass:"acea-row"},[n("div",{staticClass:"list sp100"},[n("label",{staticClass:"name"},[t._v("活动日期：")]),t._v(" "),t.formValidate.is_time?n("span",[t._v(t._s(t.formValidate.time[0]+"-"+t.formValidate.time[1]))]):n("span",[t._v("不限时")])]),t._v(" "),n("div",{staticClass:"list sp"},[n("label",{staticClass:"name"},[t._v("套餐数量：")]),t._v(t._s(t.formValidate.is_limit?t.formValidate.limit_num:"不限量"))]),t._v(" "),n("div",{staticClass:"list sp"},[n("label",{staticClass:"name"},[t._v("显示状态：")]),t._v(t._s(1===t.formValidate.status?"显示":"不显示"))]),t._v(" "),n("div",{staticClass:"list sp"},[n("label",{staticClass:"name"},[t._v("创建时间：")]),t._v(t._s(t.formValidate.create_time))])])])])]):t._e()],1)},r=[],o=n("c80c"),i=(n("96cf"),n("3b8d")),u=(n("2f62"),n("b7be")),c=n("61f7"),s=n("83d6"),l={name:"Discounts",filters:{formatDate:function(t){if(0!==t){var e=new Date(1e3*t);return Object(c["formatDate"])(e,"yyyy-MM-dd hh:mm")}}},data:function(){return{loading:!1,dialogLoading:!1,roterPre:s["roterPre"],dialogVisible:!1,tableData:{data:[],total:0},tableFrom:{status:"",title:"",page:1,type:"",limit:15},specsMainData:[],specsData:[],formValidate:{title:"",type:0,image:"",is_time:0,is_limit:0,limit_num:0,link_ids:[],time:[],sort:0,free_shipping:1,status:1,products:[]}}},computed:{},created:function(){this.getList("")},methods:{handleDetail:function(t){var e=this;this.dialogVisible=!0,this.dialogLoading=!0,Object(u["R"])(t).then((function(t){e.formValidate=t.data,e.formValidate.time=t.data.time||[],e.dialogLoading=!1;for(var n=0;n<t.data.discountsProduct.length;n++){var a=t.data.discountsProduct[n];a.attr=[];for(var r=a["product"]&&a["product"]["attrValue"]||[],o=0;o<r.length;o++){var i=r[o];i.productSku&&a.attr.push(i)}1==a.type?e.specsMainData.push(a):e.specsData.push(a)}}))},getList:function(t){var e=this;this.loading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(u["S"])(this.tableFrom).then(function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(n){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tableData.data=n.data.list,e.tableData.total=n.data.count,e.loading=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},onchangeIsShow:function(t){var e=this;Object(u["Q"])(t.discount_id,t.status).then(function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(n){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$message.success(n.message),e.getList("");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.message),e.getList("")}))}}},d=l,f=(n("5907"),n("2877")),p=Object(f["a"])(d,a,r,!1,null,"2a7f11ec",null);e["default"]=p.exports},b7be:function(t,e,n){"use strict";n.d(e,"gb",(function(){return r})),n.d(e,"fb",(function(){return o})),n.d(e,"bb",(function(){return i})),n.d(e,"ab",(function(){return u})),n.d(e,"Z",(function(){return c})),n.d(e,"cb",(function(){return s})),n.d(e,"db",(function(){return l})),n.d(e,"eb",(function(){return d})),n.d(e,"N",(function(){return f})),n.d(e,"I",(function(){return p})),n.d(e,"J",(function(){return m})),n.d(e,"L",(function(){return g})),n.d(e,"K",(function(){return b})),n.d(e,"W",(function(){return v})),n.d(e,"H",(function(){return _})),n.d(e,"o",(function(){return h})),n.d(e,"u",(function(){return w})),n.d(e,"m",(function(){return y})),n.d(e,"l",(function(){return k})),n.d(e,"n",(function(){return C})),n.d(e,"X",(function(){return x})),n.d(e,"Y",(function(){return V})),n.d(e,"pb",(function(){return D})),n.d(e,"r",(function(){return S})),n.d(e,"q",(function(){return F})),n.d(e,"v",(function(){return L})),n.d(e,"a",(function(){return j})),n.d(e,"ob",(function(){return O})),n.d(e,"lb",(function(){return z})),n.d(e,"nb",(function(){return $})),n.d(e,"kb",(function(){return M})),n.d(e,"mb",(function(){return P})),n.d(e,"hb",(function(){return N})),n.d(e,"qb",(function(){return I})),n.d(e,"p",(function(){return E})),n.d(e,"t",(function(){return J})),n.d(e,"s",(function(){return W})),n.d(e,"F",(function(){return q})),n.d(e,"x",(function(){return B})),n.d(e,"A",(function(){return K})),n.d(e,"B",(function(){return Q})),n.d(e,"z",(function(){return R})),n.d(e,"C",(function(){return A})),n.d(e,"G",(function(){return G})),n.d(e,"E",(function(){return H})),n.d(e,"D",(function(){return T})),n.d(e,"w",(function(){return U})),n.d(e,"y",(function(){return X})),n.d(e,"M",(function(){return Y})),n.d(e,"V",(function(){return Z})),n.d(e,"U",(function(){return tt})),n.d(e,"jb",(function(){return et})),n.d(e,"T",(function(){return nt})),n.d(e,"rb",(function(){return at})),n.d(e,"S",(function(){return rt})),n.d(e,"Q",(function(){return ot})),n.d(e,"R",(function(){return it})),n.d(e,"ib",(function(){return ut})),n.d(e,"O",(function(){return ct})),n.d(e,"f",(function(){return st})),n.d(e,"e",(function(){return lt})),n.d(e,"d",(function(){return dt})),n.d(e,"c",(function(){return ft})),n.d(e,"b",(function(){return pt})),n.d(e,"P",(function(){return mt})),n.d(e,"k",(function(){return gt})),n.d(e,"i",(function(){return bt})),n.d(e,"h",(function(){return vt})),n.d(e,"j",(function(){return _t})),n.d(e,"g",(function(){return ht}));var a=n("0c6d");function r(t){return a["a"].get("/store/coupon/platformLst",t)}function o(t){return a["a"].get("/store/coupon/update/".concat(t,"/form"))}function i(t){return a["a"].get("/store/coupon/show/".concat(t))}function u(t){return a["a"].delete("store/coupon/delete/".concat(t))}function c(t){return a["a"].get("/store/coupon/sys/clone/".concat(t,"/form"))}function s(t){return a["a"].get("store/coupon/sys/issue",t)}function l(t,e){return a["a"].get("store/coupon/show_lst/".concat(t),e)}function d(t){return a["a"].get("/store/coupon/send/lst",t)}function f(t){return a["a"].post("store/coupon/send",t)}function p(t){return a["a"].get("store/coupon/detail/".concat(t))}function m(t){return a["a"].get("store/coupon/lst",t)}function g(t,e){return a["a"].post("store/coupon/status/".concat(t),{status:e})}function b(){return a["a"].get("store/coupon/create/form")}function v(t){return a["a"].get("store/coupon/issue",t)}function _(t){return a["a"].delete("store/coupon/delete/".concat(t))}function h(t){return a["a"].get("broadcast/room/lst",t)}function w(t,e){return a["a"].post("broadcast/room/status/".concat(t),e)}function y(t){return a["a"].delete("broadcast/room/delete/".concat(t))}function k(t){return a["a"].get("broadcast/room/apply/form/".concat(t))}function C(t){return a["a"].get("broadcast/room/detail/".concat(t))}function x(t,e){return a["a"].post("broadcast/room/feedsPublic/".concat(t),{status:e})}function V(t,e){return a["a"].post("broadcast/room/comment/".concat(t),{status:e})}function D(t,e){return a["a"].post("broadcast/room/closeKf/".concat(t),{status:e})}function S(t){return a["a"].get("broadcast/goods/lst",t)}function F(t){return a["a"].get("broadcast/goods/detail/".concat(t))}function L(t,e){return a["a"].post("broadcast/goods/status/".concat(t),e)}function j(t){return a["a"].get("broadcast/goods/apply/form/".concat(t))}function O(){return a["a"].get("seckill/config/create/form")}function z(t){return a["a"].get("seckill/config/lst",t)}function $(t){return a["a"].get("seckill/config/update/".concat(t,"/form"))}function M(t){return a["a"].delete("seckill/config/delete/".concat(t))}function P(t,e){return a["a"].post("seckill/config/status/".concat(t),{status:e})}function N(t,e){return a["a"].get("seckill/product/detail/".concat(t),e)}function I(t,e){return a["a"].get("broadcast/room/goods/".concat(t),e)}function E(t){return a["a"].delete("broadcast/goods/delete/".concat(t))}function J(t,e){return a["a"].post("broadcast/room/sort/".concat(t),e)}function W(t,e){return a["a"].post("broadcast/goods/sort/".concat(t),e)}function q(t){return a["a"].post("config/others/group_buying",t)}function B(){return a["a"].get("config/others/group_buying")}function K(t){return a["a"].get("store/product/group/lst",t)}function Q(t){return a["a"].get("store/product/group/get/".concat(t))}function R(t){return a["a"].get("store/product/group/detail/".concat(t))}function A(t){return a["a"].post("store/product/group/status",t)}function G(t,e){return a["a"].post("store/product/group/is_show/".concat(t),{status:e})}function H(t){return a["a"].get("store/product/group/get/".concat(t))}function T(t,e){return a["a"].post("store/product/group/update/".concat(t),e)}function U(t){return a["a"].get("store/product/group/buying/lst",t)}function X(t,e){return a["a"].get("store/product/group/buying/detail/".concat(t),e)}function Y(t,e){return a["a"].get("store/coupon/product/".concat(t),e)}function Z(){return a["a"].get("user/integral/title")}function tt(t){return a["a"].get("user/integral/lst",t)}function et(t){return a["a"].get("user/integral/excel",t)}function nt(){return a["a"].get("user/integral/config")}function at(t){return a["a"].post("user/integral/config",t)}function rt(t){return a["a"].get("discounts/lst",t)}function ot(t,e){return a["a"].post("discounts/status/".concat(t),{status:e})}function it(t){return a["a"].get("discounts/detail/".concat(t))}function ut(t){return a["a"].get("marketing/spu/lst",t)}function ct(t){return a["a"].post("activity/atmosphere/create",t)}function st(t,e){return a["a"].post("activity/atmosphere/update/".concat(t),e)}function lt(t){return a["a"].get("activity/atmosphere/lst",t)}function dt(t){return a["a"].get("activity/atmosphere/detail/".concat(t))}function ft(t,e){return a["a"].post("activity/atmosphere/status/".concat(t),{status:e})}function pt(t){return a["a"].delete("activity/atmosphere/delete/".concat(t))}function mt(t){return a["a"].post("activity/border/create",t)}function gt(t,e){return a["a"].post("activity/border/update/".concat(t),e)}function bt(t){return a["a"].get("activity/border/lst",t)}function vt(t){return a["a"].get("activity/border/detail/".concat(t))}function _t(t,e){return a["a"].post("activity/border/status/".concat(t),{status:e})}function ht(t){return a["a"].delete("activity/border/delete/".concat(t))}}}]);