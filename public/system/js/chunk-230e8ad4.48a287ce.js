(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-230e8ad4"],{8492:function(t,e,n){"use strict";n.d(e,"J",(function(){return r})),n.d(e,"H",(function(){return i})),n.d(e,"K",(function(){return o})),n.d(e,"I",(function(){return c})),n.d(e,"F",(function(){return s})),n.d(e,"C",(function(){return u})),n.d(e,"P",(function(){return d})),n.d(e,"D",(function(){return l})),n.d(e,"M",(function(){return f})),n.d(e,"L",(function(){return m})),n.d(e,"g",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"h",(function(){return _})),n.d(e,"f",(function(){return g})),n.d(e,"A",(function(){return k})),n.d(e,"Q",(function(){return b})),n.d(e,"T",(function(){return v})),n.d(e,"S",(function(){return y})),n.d(e,"R",(function(){return w})),n.d(e,"G",(function(){return C})),n.d(e,"q",(function(){return x})),n.d(e,"d",(function(){return R})),n.d(e,"p",(function(){return N})),n.d(e,"r",(function(){return O})),n.d(e,"i",(function(){return $})),n.d(e,"n",(function(){return F})),n.d(e,"o",(function(){return I})),n.d(e,"l",(function(){return L})),n.d(e,"bb",(function(){return D})),n.d(e,"E",(function(){return S})),n.d(e,"B",(function(){return T})),n.d(e,"X",(function(){return P})),n.d(e,"Z",(function(){return z})),n.d(e,"W",(function(){return j})),n.d(e,"ab",(function(){return E})),n.d(e,"Y",(function(){return V})),n.d(e,"O",(function(){return B})),n.d(e,"N",(function(){return H})),n.d(e,"m",(function(){return A})),n.d(e,"k",(function(){return M})),n.d(e,"j",(function(){return J})),n.d(e,"c",(function(){return Q})),n.d(e,"a",(function(){return q})),n.d(e,"b",(function(){return G})),n.d(e,"U",(function(){return K})),n.d(e,"V",(function(){return U})),n.d(e,"s",(function(){return W})),n.d(e,"v",(function(){return X})),n.d(e,"x",(function(){return Y})),n.d(e,"z",(function(){return Z})),n.d(e,"y",(function(){return tt})),n.d(e,"w",(function(){return et})),n.d(e,"u",(function(){return nt})),n.d(e,"t",(function(){return at}));var a=n("0c6d");function r(t){return a["a"].get("merchant/menu/lst",t)}function i(){return a["a"].get("merchant/menu/create/form")}function o(t){return a["a"].get("merchant/menu/update/form/".concat(t))}function c(t){return a["a"].delete("merchant/menu/delete/".concat(t))}function s(t){return a["a"].get("system/merchant/lst",t)}function u(){return a["a"].get("system/merchant/create/form")}function d(t){return a["a"].get("system/merchant/update/form/".concat(t))}function l(t){return a["a"].delete("system/merchant/delete/".concat(t))}function f(t,e){return a["a"].post("system/merchant/status/".concat(t),{status:e})}function m(t){return a["a"].get("system/merchant/password/form/".concat(t))}function h(t){return a["a"].get("system/merchant/category/lst",t)}function p(){return a["a"].get("system/merchant/category/form")}function _(t){return a["a"].get("system/merchant/category/form/".concat(t))}function g(t){return a["a"].delete("system/merchant/category/".concat(t))}function k(t,e){return a["a"].get("merchant/order/lst/".concat(t),e)}function b(t){return a["a"].get("merchant/order/mark/".concat(t,"/form"))}function v(t,e){return a["a"].get("merchant/order/refund/lst/".concat(t),e)}function y(t){return a["a"].get("merchant/order/refund/mark/".concat(t,"/form"))}function w(t,e){return a["a"].post("merchant/order/reconciliation/create/".concat(t),e)}function C(t){return a["a"].post("system/merchant/login/".concat(t))}function x(t){return a["a"].get("merchant/intention/lst",t)}function R(t){return a["a"].get("merchant/intention/mark/".concat(t,"/form"))}function N(t){return a["a"].delete("merchant/intention/delete/".concat(t))}function O(t){return a["a"].get("merchant/intention/status/".concat(t,"/form"))}function $(t){return a["a"].get("system/merchant/changecopy/".concat(t,"/form"))}function F(){return a["a"].get("agreement/sys_intention_agree")}function I(t){return a["a"].post("agreement/sys_intention_agree",t)}function L(t){return a["a"].get("agreement/".concat(t))}function D(t,e){return a["a"].post("agreement/".concat(t),e)}function S(t,e){return a["a"].post("system/merchant/close/".concat(t),{status:e})}function T(){return a["a"].get("system/merchant/count")}function P(t){return a["a"].post("merchant/type/create",t)}function z(t){return a["a"].get("merchant/type/lst",t)}function j(){return a["a"].get("merchant/mer_auth")}function E(t,e){return a["a"].post("merchant/type/update/".concat(t),e)}function V(t){return a["a"].delete("merchant/type/delete/".concat(t))}function B(t){return a["a"].get("merchant/type/mark/".concat(t))}function H(t){return a["a"].get("/merchant/type/detail/".concat(t))}function A(){return a["a"].get("merchant/type/options")}function M(){return a["a"].get("system/merchant/category/options")}function J(t){return a["a"].get("system/applyments/lst",t)}function Q(t,e){return a["a"].post("system/applyments/status/".concat(t),e)}function q(t){return a["a"].get("system/applyments/detail/".concat(t))}function G(t){return a["a"].get("profitsharing/lst",t)}function K(t){return a["a"].post("profitsharing/again/".concat(t))}function U(t){return a["a"].get("system/applyments/mark/".concat(t,"/form"))}function W(t){return a["a"].get("profitsharing/export",t)}function X(t){return a["a"].get("margin/lst",t)}function Y(t){return a["a"].get("margin/refund/lst",t)}function Z(t){return a["a"].get("margin/refund/status/".concat(t,"/form"))}function tt(t){return a["a"].get("margin/refund/mark/".concat(t,"/form"))}function et(t){return a["a"].get("margin/refund/show/".concat(t))}function nt(t,e){return a["a"].get("margin/list/".concat(t),e)}function at(t){return a["a"].get("margin/set/".concat(t,"/form"))}},beb7:function(t,e,n){"use strict";n("c9f2")},c9f2:function(t,e,n){},e2fd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card mb20"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},["1"===t.$route.params.type?n("router-link",{attrs:{to:{path:t.roterPre+"/merchant/list"}}},[n("el-button",{staticClass:"mr20 mb20",attrs:{size:"mini",icon:"el-icon-back"}},[t._v("返回")])],1):n("router-link",{attrs:{to:{path:t.roterPre+"/accounts/reconciliation"}}},[n("el-button",{staticClass:"mr20 mb20",attrs:{size:"mini",icon:"el-icon-back"}},[t._v("返回")])],1),t._v(" "),"1"===t.$route.params.type?n("div",{staticClass:"filter-container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{staticClass:"mr20",attrs:{label:"使用状态："}},[n("el-select",{attrs:{placeholder:"请选择评价状态"},on:{change:t.init},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},[n("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),n("el-option",{attrs:{label:"未对账",value:"0"}}),t._v(" "),n("el-option",{attrs:{label:"已对账",value:"1"}})],1)],1),t._v(" "),n("el-form-item",{staticClass:"mr10",attrs:{label:"时间选择："}},[n("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy/MM/dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1)],1)],1):t._e(),t._v(" "),"1"===t.$route.params.type?n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onAdd(0)}}},[t._v("商户对账")]):t._e()],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form",{staticClass:"demo-table-expand demo-table-expands",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"收货人："}},[n("span",[t._v(t._s(t._f("filterEmpty")(e.row.real_name)))])]),t._v(" "),n("el-form-item",{attrs:{label:"电话："}},[n("span",[t._v(t._s(t._f("filterEmpty")(e.row.user_phone)))])]),t._v(" "),n("el-form-item",{attrs:{label:"地址："}},[n("span",[t._v(t._s(t._f("filterEmpty")(e.row.user_address)))])]),t._v(" "),n("el-form-item",{attrs:{label:"商品总数："}},[n("span",[t._v(t._s(t._f("filterEmpty")(e.row.total_num)))])]),t._v(" "),n("el-form-item",{attrs:{label:"支付状态："}},[n("span",[t._v(t._s(t._f("payTypeFilter")(e.row.pay_type)))])]),t._v(" "),n("el-form-item",{attrs:{label:"支付时间："}},[n("span",[t._v(t._s(t._f("filterEmpty")(e.row.pay_time)))])]),t._v(" "),n("el-form-item",{attrs:{label:"对账备注："}},[n("span",[t._v(t._s(e.row.admin_mark))])])],1)]}}])}),t._v(" "),"1"===t.$route.params.type?n("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-popover",{staticClass:"tabPop",attrs:{placement:"top-start",width:"100",trigger:"hover"}},[n("div",[n("span",{staticClass:"spBlock onHand",class:{check:"dan"===t.chkName},on:{click:function(n){return t.onHandle("dan",e.$index)}}},[t._v("选中本页")]),t._v(" "),n("span",{staticClass:"spBlock onHand",class:{check:"duo"===t.chkName},on:{click:function(e){return t.onHandle("duo")}}},[t._v("选中全部")])]),t._v(" "),n("el-checkbox",{attrs:{slot:"reference",value:"dan"===t.chkName&&t.checkedPage.indexOf(t.tableFrom.page)>-1||"duo"===t.chkName},on:{change:t.changeType},slot:"reference"})],1)]}},{key:"default",fn:function(e){return[n("el-checkbox",{attrs:{value:t.checkedIds.indexOf(e.row.order_id)>-1||"duo"===t.chkName&&-1===t.noChecked.indexOf(e.row.order_id)},on:{change:function(n){return t.changeOne(n,e.row)}}})]}}],null,!1,3619774636)}):t._e(),t._v(" "),n("el-table-column",{attrs:{prop:"order_id",label:"ID",width:"60"}}),t._v(" "),n("el-table-column",{attrs:{label:"是否对账","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("reconciliationFilter")(e.row.reconciliation_id)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"order_sn",label:"订单编号","min-width":"190"}}),t._v(" "),n("el-table-column",{attrs:{label:"商品信息","min-width":"330"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.orderProduct,(function(e,a){return n("div",{key:a,staticClass:"tabBox acea-row row-middle"},[n("div",{staticClass:"demo-image__preview"},[n("el-image",{attrs:{src:e.cart_info.product.image,"preview-src-list":[e.cart_info.product.image]}})],1),t._v(" "),n("span",{staticClass:"tabBox_tit"},[t._v(t._s(e.cart_info.product.store_name+" | ")+t._s(e.cart_info.productAttr.sku))]),t._v(" "),n("span",{staticClass:"tabBox_pice"},[t._v(t._s("￥"+e.cart_info.productAttr.price+" x "+e.product_num))])])}))}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品总价","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t.getTotal(e.row.orderProduct)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"pay_price",label:"实际支付","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{label:"佣金金额","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(Number(e.row.extension_one)+Number(e.row.extension_two)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"total_postage",label:"邮费","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"order_rate",label:"手续费","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"create_time",label:"下单时间","min-width":"150"}}),t._v(" "),"1"===t.$route.params.type?n("el-table-column",{attrs:{label:"操作","min-width":"80",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.addMark(e.row.order_id)}}},[t._v("添加备注")])]}}],null,!1,96162191)}):t._e()],1),t._v(" "),n("div",{staticClass:"block mb20"},[n("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),n("el-card",{staticClass:"box-card"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.tableDataRefund.data,size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"订单号："}},[n("span",[t._v(t._s(e.row.order.order_sn))])]),t._v(" "),n("el-form-item",{attrs:{label:"退款商品总价："}},[n("span",[t._v(t._s(t.getTotalRefund(e.row.refundProduct)))])]),t._v(" "),n("el-form-item",{attrs:{label:"退款商品总数："}},[n("span",[t._v(t._s(e.row.refund_num))])]),t._v(" "),n("el-form-item",{attrs:{label:"申请退款时间："}},[n("span",[t._v(t._s(t._f("filterEmpty")(e.row.create_time)))])]),t._v(" "),n("el-form-item",{attrs:{label:"对账备注："}},[n("span",[t._v(t._s(e.row.admin_mark))])])],1)]}}])}),t._v(" "),"1"===t.$route.params.type?n("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-popover",{staticClass:"tabPop",attrs:{placement:"top-start",width:"100",trigger:"hover"}},[n("div",[n("span",{staticClass:"spBlock onHand",class:{check:"dan"===t.chkNameRefund},on:{click:function(n){return t.onHandleRefund("dan",e.$index)}}},[t._v("选中本页")]),t._v(" "),n("span",{staticClass:"spBlock onHand",class:{check:"duo"===t.chkNameRefund},on:{click:function(e){return t.onHandleRefund("duo")}}},[t._v("选中全部")])]),t._v(" "),n("el-checkbox",{attrs:{slot:"reference",value:"dan"===t.chkNameRefund&&t.checkedPage.indexOf(t.tableFrom.page)>-1||"duo"===t.chkNameRefund},on:{change:t.changeTypeRefund},slot:"reference"})],1)]}},{key:"default",fn:function(e){return[n("el-checkbox",{attrs:{value:t.refundCheckedIds.indexOf(e.row.refund_order_id)>-1||"duo"===t.chkNameRefund&&-1===t.refundNoChecked.indexOf(e.row.refund_order_id)},on:{change:function(n){return t.changeOneRefund(n,e.row)}}})]}}],null,!1,1428325602)}):t._e(),t._v(" "),n("el-table-column",{attrs:{prop:"refund_order_id",label:"ID",width:"60"}}),t._v(" "),n("el-table-column",{attrs:{label:"退款单号","min-width":"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{display:"block"},domProps:{textContent:t._s(e.row.refund_order_sn)}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.row.is_del>0,expression:"scope.row.is_del > 0"}],staticStyle:{color:"#ED4014",display:"block"}},[t._v("用户已删除")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"是否对账","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("reconciliationFilter")(e.row.reconciliation_id)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"user.nickname",label:"用户信息","min-width":"130"}}),t._v(" "),n("el-table-column",{attrs:{prop:"refund_price",label:"退款金额","min-width":"130"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"商品信息","min-width":"330"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.refundProduct,(function(e,a){return n("div",{key:a,staticClass:"tabBox acea-row row-middle"},[n("div",{staticClass:"demo-image__preview"},[n("el-image",{attrs:{src:e.product.cart_info.product.image,"preview-src-list":[e.product.cart_info.product.image]}})],1),t._v(" "),n("span",{staticClass:"tabBox_tit"},[t._v(t._s(e.product.cart_info.product.store_name+" | ")+t._s(e.product.cart_info.productAttr.sku))]),t._v(" "),n("span",{staticClass:"tabBox_pice"},[t._v(t._s("￥"+e.product.cart_info.productAttr.price+" x "+e.product.product_num))])])}))}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"serviceScore",label:"订单状态","min-width":"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{display:"block"}},[t._v(t._s(t._f("orderRefundFilter")(e.row.status)))]),t._v(" "),n("span",{staticStyle:{display:"block"}},[t._v("退款原因："+t._s(e.row.refund_message))]),t._v(" "),n("span",{staticStyle:{display:"block"}},[t._v("状态变更时间："+t._s(e.row.status_time))])]}}])}),t._v(" "),"1"===t.$route.params.type?n("el-table-column",{key:"10",attrs:{label:"操作","min-width":"80",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.onOrderMark(e.row.refund_order_id)}}},[t._v("订单备注")])]}}],null,!1,2548398108)}):t._e()],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableDataRefund.total},on:{"size-change":t.handleSizeChangeRefund,"current-change":t.pageChangeRefund}})],1)],1)],1)},r=[],i=(n("ac6a"),n("8492")),o=n("2801"),c=n("83d6"),s={name:"Record",data:function(){return{roterPre:c["roterPre"],chkName:"",chkNameRefund:"",isIndeterminate:!0,resource:[],visible:!1,timeVal:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-6048e5),t.$emit("pick",[n,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-2592e6),t.$emit("pick",[n,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-7776e6),t.$emit("pick",[n,e])}}]},listLoading:!0,tableData:{data:[],total:0},tableDataRefund:{data:[],total:0},tableFrom:{page:1,limit:10,date:"",status:""},ids:[],idsRefund:[],checkedPage:[],checkedIds:[],noChecked:[],refundCheckedIds:[],refundNoChecked:[]}},mounted:function(){this.init()},created:function(){this.tempRoute=Object.assign({},this.$route)},methods:{isDisabled:function(t){return 3===t.status},init:function(){this.tableFrom.page=1,this.getList(),this.getRefundList(),0===this.$route.params.type&&this.setTagsViewTitle()},onHandle:function(t){this.chkName=this.chkName===t?"":t,this.changeType(!(""===this.chkName))},changeOne:function(t,e){if(t)if("duo"===this.chkName){var n=this.noChecked.indexOf(e.order_id);n>-1&&this.noChecked.splice(n,1)}else{var a=this.checkedIds.indexOf(e.order_id);-1===a&&this.checkedIds.push(e.order_id)}else if("duo"===this.chkName){var r=this.noChecked.indexOf(e.order_id);-1===r&&this.noChecked.push(e.order_id)}else{var i=this.checkedIds.indexOf(e.order_id);i>-1&&this.checkedIds.splice(i,1)}},changeType:function(t){t?this.chkName||(this.chkName="dan"):this.chkName="";var e=this.checkedPage.indexOf(this.tableFrom.page);"dan"===this.chkName?this.checkedPage.push(this.tableFrom.page):e>-1&&this.checkedPage.splice(e,1),this.syncCheckedId()},syncCheckedId:function(){var t=this,e=this.tableData.data.map((function(t){return t.order_id}));"duo"===this.chkName?this.checkedIds=[]:"dan"===this.chkName?e.forEach((function(e){var n=t.checkedIds.indexOf(e);-1===n&&t.checkedIds.push(e)})):e.forEach((function(e){var n=t.checkedIds.indexOf(e);n>-1&&t.checkedIds.splice(n,1)}))},onHandleRefund:function(t){this.chkNameRefund=this.chkNameRefund===t?"":t,this.changeTypeRefund(!(""===this.chkNameRefund))},changeOneRefund:function(t,e){if(t)if("duo"===this.chkNameRefund){var n=this.refundNoChecked.indexOf(e.refund_order_id);n>-1&&this.refundNoChecked.splice(n,1)}else{var a=this.refundCheckedIds.indexOf(e.refund_order_id);-1===a&&this.refundCheckedIds.push(e.refund_order_id)}else if("duo"===this.chkNameRefund){var r=this.refundNoChecked.indexOf(e.refund_order_id);-1===r&&this.refundNoChecked.push(e.refund_order_id)}else{var i=this.refundCheckedIds.indexOf(e.refund_order_id);i>-1&&this.refundCheckedIds.splice(i,1)}},changeTypeRefund:function(t){t?this.chkNameRefund||(this.chkNameRefund="dan"):this.chkNameRefund="";var e=this.checkedPage.indexOf(this.tableFrom.page);"dan"===this.chkNameRefund?this.checkedPage.push(this.tableFrom.page):e>-1&&this.checkedPage.splice(e,1),this.syncCheckedIdRefund()},syncCheckedIdRefund:function(){var t=this,e=this.tableDataRefund.data.map((function(t){return t.refund_order_id}));"duo"===this.chkNameRefund?this.refundCheckedIds=[]:"dan"===this.chkNameRefund?e.forEach((function(e){var n=t.refundCheckedIds.indexOf(e);-1===n&&t.refundCheckedIds.push(e)})):e.forEach((function(e){var n=t.refundCheckedIds.indexOf(e);n>-1&&t.refundCheckedIds.splice(n,1)}))},onAdd:function(){var t=this,e={order_ids:this.checkedIds,order_out_ids:this.noChecked,order_type:"duo"===this.chkName?1:0,refund_order_ids:this.refundCheckedIds,refund_out_ids:this.refundNoChecked,refund_type:"duo"===this.chkNameRefund?1:0,date:this.tableFrom.date};this.$modalSure("发起商户对账吗").then((function(){Object(i["R"])(t.$route.params.id,e).then((function(e){var n=e.message;t.$message.success(n),t.tableFrom.page=1,t.getList(),t.getRefundList(),t.chkName="",t.chkNameRefund="",t.refundCheckedIds=[],t.checkedIds=[],t.noChecked=[],t.refundNoChecked=[]})).catch((function(e){var n=e.message;t.$message.error(n)}))}))},onchangeTime:function(t){this.timeVal=t,this.tableFrom.date=this.timeVal?this.timeVal.join("-"):"",this.tableFrom.page=1,this.getList(),this.getRefundList()},onOrderMark:function(t){var e=this;this.$modalForm(Object(i["S"])(t)).then((function(){return e.getRefundList()}))},addMark:function(t){var e=this;this.$modalForm(Object(i["Q"])(t)).then((function(){return e.getList()}))},getTotalRefund:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].product.cart_info.productAttr.price*t[n].refund_num;return e},getTotal:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].cart_info.productAttr.price*t[n].product_num;return e},getList:function(){var t=this;this.listLoading=!0,"1"===this.$route.params.type?Object(i["A"])(this.$route.params.id,this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.tableData.data.map((function(e){t.$set(e,{checked:!1})})),t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)})):Object(o["w"])(this.$route.params.id,this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.tableData.data.map((function(e){t.$set(e,{checked:!1})})),t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.chkName="",this.getList()},getRefundList:function(){var t=this;this.listLoading=!0,"1"===this.$route.params.type?Object(i["T"])(this.$route.params.id,this.tableFrom).then((function(e){t.tableDataRefund.data=e.data.list,t.tableDataRefund.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)})):Object(o["x"])(this.$route.params.id,this.tableFrom).then((function(e){t.tableDataRefund.data=e.data.list,t.tableDataRefund.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChangeRefund:function(t){this.tableFrom.page=t,this.getRefundList()},handleSizeChangeRefund:function(t){this.tableFrom.limit=t,this.getRefundList()},setTagsViewTitle:function(){var t="查看订单",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.$route.params.id)});this.$store.dispatch("tagsView/updateVisitedView",e)}}},u=s,d=(n("beb7"),n("2877")),l=Object(d["a"])(u,a,r,!1,null,"0d36f1ea",null);e["default"]=l.exports}}]);