(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7288b5a6"],{"57cd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"container"},[n("el-form",{attrs:{size:"small","label-width":"100px",inline:""}},[n("el-form-item",{attrs:{label:"时间选择："}},[n("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small",clearable:""},on:{change:function(e){return t.selectChange(t.tableFrom.date)}},model:{value:t.tableFrom.date,callback:function(e){t.$set(t.tableFrom,"date",e)},expression:"tableFrom.date"}},t._l(t.fromList.fromTxt,(function(e,r){return n("el-radio-button",{key:r,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),t._v(" "),n("el-date-picker",{staticStyle:{width:"250px"},attrs:{"value-format":"yyyy/MM/dd",format:"yyyy/MM/dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间",clearable:""},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t._v(" "),n("div",[n("el-form-item",{attrs:{label:"配送订单号"}},[n("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入订单号",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[n("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"订单号"}},[n("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入订单号",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.order_sn,callback:function(e){t.$set(t.tableFrom,"order_sn",e)},expression:"tableFrom.order_sn"}},[n("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),n("el-form-item",{staticClass:"width100",attrs:{label:"发货点名称："}},[n("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.station_id,callback:function(e){t.$set(t.tableFrom,"station_id",e)},expression:"tableFrom.station_id"}},t._l(t.storeList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),n("el-form-item",{staticClass:"width100",attrs:{label:"状态："}},[n("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},t._l(t.statusList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)],1)]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini"}},[n("el-table-column",{attrs:{label:"序号","min-width":"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.$index+(t.tableFrom.page-1)*t.tableFrom.limit+1))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"station.station_name",label:"发货点名称","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"order_sn",label:"配送订单号","min-width":"60"}}),t._v(" "),n("el-table-column",{attrs:{prop:"storeOrder.order_sn",label:"订单号","min-width":"60"}}),t._v(" "),n("el-table-column",{attrs:{label:"配送起点","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.station&&e.row.station.station_address))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"配送终点","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(" "+t._s(e.row.to_address))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(" "+t._s(t._f("runErrandStatus")(e.row.status)))]),t._v(" "),-1==e.row.status&&e.row.reason?n("span",{staticStyle:{display:"block","font-size":"12px",color:"red"}},[t._v("原因: "+t._s(e.row.reason))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"distance",label:"配送距离","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"fee",label:"配送费用","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"create_time",label:"消费时间","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"mark",label:"备注","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1!=e.row.status?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.toCancle(e.row.delivery_order_id)}}},[t._v("取消")]):t._e()]}}])})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},a=[],o=n("f8b7"),i={components:{},data:function(){return{tableData:{data:[],total:0},listLoading:!0,loading:!0,tableFrom:{keyword:"",order_sn:"",date:"",station_id:"",page:1,limit:20},timeVal:[],fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},storeList:[],statusList:[{label:"已取消",value:"-1"},{label:"待接单",value:"0"},{label:"待取货",value:"2"},{label:"配送中",value:"3"},{label:"已完成",value:"4"},{label:"物品返回中",value:"9"},{label:"物品返回完成",value:"10"},{label:"骑士到店",value:"100"}]}},mounted:function(){this.getList(1),this.getStoreList()},methods:{selectChange:function(t){this.tableFrom.date=t,this.timeVal=[],this.getList(1)},onchangeTime:function(t){this.timeVal=t,this.tableFrom.date=t?this.timeVal.join("-"):"",this.getList(1)},getStoreList:function(){var t=this;Object(o["s"])(this.tableFrom).then((function(e){t.storeList=e.data})).catch((function(e){t.$message.error(e.message)}))},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(o["f"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.$message.error(t.message),e.listLoading=!1}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},toCancle:function(t){var e=this;this.$modalForm(Object(o["e"])(t)).then((function(){return e.getList("")}))},onDetails:function(t){}}},l=i,s=n("2877"),u=Object(s["a"])(l,r,a,!1,null,"43af11ed",null);e["default"]=u.exports},f8b7:function(t,e,n){"use strict";n.d(e,"E",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"I",(function(){return l})),n.d(e,"B",(function(){return s})),n.d(e,"C",(function(){return u})),n.d(e,"F",(function(){return c})),n.d(e,"H",(function(){return d})),n.d(e,"A",(function(){return f})),n.d(e,"G",(function(){return m})),n.d(e,"P",(function(){return p})),n.d(e,"N",(function(){return b})),n.d(e,"S",(function(){return g})),n.d(e,"R",(function(){return v})),n.d(e,"Q",(function(){return h})),n.d(e,"M",(function(){return _})),n.d(e,"d",(function(){return y})),n.d(e,"r",(function(){return k})),n.d(e,"O",(function(){return x})),n.d(e,"m",(function(){return w})),n.d(e,"l",(function(){return F})),n.d(e,"k",(function(){return L})),n.d(e,"j",(function(){return C})),n.d(e,"z",(function(){return z})),n.d(e,"t",(function(){return S})),n.d(e,"D",(function(){return O})),n.d(e,"U",(function(){return $})),n.d(e,"V",(function(){return V})),n.d(e,"T",(function(){return j})),n.d(e,"x",(function(){return D})),n.d(e,"w",(function(){return E})),n.d(e,"u",(function(){return M})),n.d(e,"v",(function(){return T})),n.d(e,"y",(function(){return W})),n.d(e,"i",(function(){return J})),n.d(e,"g",(function(){return B})),n.d(e,"h",(function(){return N})),n.d(e,"L",(function(){return q})),n.d(e,"o",(function(){return A})),n.d(e,"n",(function(){return G})),n.d(e,"a",(function(){return H})),n.d(e,"q",(function(){return I})),n.d(e,"s",(function(){return K})),n.d(e,"p",(function(){return P})),n.d(e,"f",(function(){return Q})),n.d(e,"e",(function(){return R})),n.d(e,"K",(function(){return U})),n.d(e,"J",(function(){return X}));var r=n("0c6d");function a(t){return r["a"].get("store/order/lst",t)}function o(){return r["a"].get("store/order/chart")}function i(t){return r["a"].get("store/order/title",t)}function l(t,e){return r["a"].post("store/order/update/".concat(t),e)}function s(t,e){return r["a"].post("store/order/delivery/".concat(t),e)}function u(t){return r["a"].get("store/order/detail/".concat(t))}function c(t,e){return r["a"].get("store/order/log/".concat(t),e)}function d(t){return r["a"].get("store/order/remark/".concat(t,"/form"))}function f(t){return r["a"].post("store/order/delete/".concat(t))}function m(t){return r["a"].get("store/order/printer/".concat(t))}function p(t){return r["a"].get("store/refundorder/lst",t)}function b(t){return r["a"].get("store/refundorder/detail/".concat(t))}function g(t){return r["a"].get("store/refundorder/status/".concat(t,"/form"))}function v(t){return r["a"].get("store/refundorder/mark/".concat(t,"/form"))}function h(t){return r["a"].get("store/refundorder/log/".concat(t))}function _(t){return r["a"].get("store/refundorder/delete/".concat(t))}function y(t){return r["a"].post("store/refundorder/refund/".concat(t))}function k(t){return r["a"].get("store/order/express/".concat(t))}function x(t){return r["a"].get("store/refundorder/express/".concat(t))}function w(t){return r["a"].get("store/order/excel",t)}function F(t){return r["a"].get("store/order/delivery_export",t)}function L(t){return r["a"].get("excel/lst",t)}function C(t){return r["a"].get("excel/download/".concat(t))}function z(t){return r["a"].get("store/order/verify/".concat(t))}function S(t,e){return r["a"].post("store/order/verify/".concat(t),e)}function O(){return r["a"].get("store/order/filtter")}function $(){return r["a"].get("store/order/takechart")}function V(t){return r["a"].get("store/order/takelst",t)}function j(t){return r["a"].get("store/order/take_title",t)}function D(t){return r["a"].get("store/receipt/lst",t)}function E(t){return r["a"].get("store/receipt/set_recipt",t)}function M(t){return r["a"].post("store/receipt/save_recipt",t)}function T(t){return r["a"].get("store/receipt/detail/".concat(t))}function W(t,e){return r["a"].post("store/receipt/update/".concat(t),e)}function J(t){return r["a"].get("store/import/lst",t)}function B(t,e){return r["a"].get("store/import/detail/".concat(t),e)}function N(t){return r["a"].get("store/import/excel/".concat(t))}function q(t){return r["a"].get("store/refundorder/excel",t)}function A(){return r["a"].get("expr/options")}function G(t){return r["a"].get("expr/temps",t)}function H(t){return r["a"].post("store/order/delivery_batch",t)}function I(){return r["a"].get("serve/config")}function K(){return r["a"].get("delivery/station/select")}function P(){return r["a"].get("delivery/station/options")}function Q(t){return r["a"].get("delivery/order/lst",t)}function R(t){return r["a"].get("delivery/order/cancel/".concat(t,"/form"))}function U(t){return r["a"].get("delivery/station/payLst",t)}function X(t){return r["a"].get("delivery/station/code",t)}}}]);