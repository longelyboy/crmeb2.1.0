(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c2e1ceb"],{"850c":function(t,e,a){"use strict";a("9af2")},"9af2":function(t,e,a){},e08e:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"container"},[a("el-form",{attrs:{size:"small","label-width":"100px"}},[a("el-form-item",{staticClass:"width100",attrs:{label:"核销时间："}},[a("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small",clearable:""},on:{change:function(e){return t.selectChange(t.tableFrom.date)}},model:{value:t.tableFrom.date,callback:function(e){t.$set(t.tableFrom,"date",e)},expression:"tableFrom.date"}},t._l(t.fromList.fromTxt,(function(e,r){return a("el-radio-button",{key:r,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),t._v(" "),a("el-date-picker",{staticStyle:{width:"250px"},attrs:{"value-format":"yyyy/MM/dd",format:"yyyy/MM/dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间",clearable:""},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t._v(" "),a("el-form-item",{staticClass:"width100",attrs:{label:"订单号："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入订单号/收货人/联系方式",size:"small",clearable:""},nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getList(1),t.getCardList()}},model:{value:t.tableFrom.keywords,callback:function(e){t.$set(t.tableFrom,"keywords",e)},expression:"tableFrom.keywords"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){t.getList(1),t.getCardList()}},slot:"append"})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{display:"inline-block"},attrs:{label:"商户类别："}},[a("el-select",{staticClass:"selWidth",attrs:{clearable:"",placeholder:"请选择"},on:{change:function(e){t.getList(1),t.getCardList()}},model:{value:t.tableFrom.is_trader,callback:function(e){t.$set(t.tableFrom,"is_trader",e)},expression:"tableFrom.is_trader"}},[a("el-option",{attrs:{label:"自营",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"非自营",value:"0"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"width100",staticStyle:{display:"inline-block"},attrs:{label:"用户信息："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入用户信息/联系电话",size:"small"},nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getList(1),t.getCardList()}},model:{value:t.tableFrom.username,callback:function(e){t.$set(t.tableFrom,"username",e)},expression:"tableFrom.username"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){t.getList(1),t.getCardList()}},slot:"append"})],1)],1)],1)],1),t._v(" "),a("cards-data",{attrs:{"card-lists":t.cardLists}})],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"商品总价："}},[a("span",[t._v(t._s(t._f("filterEmpty")(e.row.total_price)))])]),t._v(" "),a("el-form-item",{attrs:{label:"用户备注："}},[a("span",[t._v(t._s(t._f("filterEmpty")(e.row.mark)))])]),t._v(" "),a("el-form-item",{attrs:{label:"商家备注："}},[a("span",[t._v(t._s(t._f("filterEmpty")(e.row.remark)))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"订单编号","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{display:"block"},domProps:{textContent:t._s(e.row.order_sn)}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.row.is_del>0,expression:"scope.row.is_del > 0"}],staticStyle:{color:"#ED4014",display:"block"}},[t._v("用户已删除")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"订单类型","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.order_type?"普通订单":"核销订单"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商户名称","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.merchant?a("span",[t._v(t._s(e.row.merchant.mer_name))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"mer_name",label:"商户类别","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.merchant?a("span",{staticClass:"spBlock"},[t._v(t._s(e.row.merchant.is_trader?"自营":"非自营"))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"real_name",label:"收货人","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品信息","min-width":"330"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.orderProduct,(function(e,r){return a("div",{key:r,staticClass:"tabBox acea-row row-middle"},[a("div",{staticClass:"demo-image__preview"},[a("el-image",{attrs:{src:e.cart_info.product.image,"preview-src-list":[e.cart_info.product.image]}})],1),t._v(" "),a("span",{staticClass:"tabBox_tit"},[t._v(t._s(e.cart_info.product.store_name+" | ")+t._s(e.cart_info.productAttr.sku))]),t._v(" "),a("span",{staticClass:"tabBox_pice"},[t._v(t._s("￥"+e.cart_info.productAttr.price+" x "+e.product_num))])])}))}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"pay_price",label:"实际支付","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"serviceScore",label:"核销员","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.paid?a("span",[t._v(t._s(e.row.verifyService?e.row.verifyService.nickname:"管理员核销"))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"serviceScore",label:"核销状态","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.status>=2?"已核销":"未核销"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"verify_time",label:"核销时间","min-width":"150"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),a("file-list",{ref:"exportList"})],1)},n=[],i=a("f8b7"),s=a("30dc"),l=a("0f56"),o={components:{cardsData:l["a"],fileList:s["a"]},data:function(){return{orderId:0,tableData:{data:[],total:0},listLoading:!0,tableFrom:{order_sn:"",status:"",date:"",page:1,limit:20,order_type:"1",username:"",keywords:"",is_trader:""},orderChartType:{},timeVal:[],fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},selectionList:[],ids:"",tableFromLog:{page:1,limit:10},tableDataLog:{data:[],total:0},LogLoading:!1,dialogVisible:!1,fileVisible:!1,cardLists:[],orderDatalist:null}},mounted:function(){this.headerList(),this.getCardList(),this.getList("")},methods:{exportOrder:function(){var t=this;Object(i["g"])({status:this.tableFrom.status,date:this.tableFrom.date,take_order:1}).then((function(e){var a=t.$createElement;t.$msgbox({title:"提示",message:a("p",null,[a("span",null,'文件正在生成中，请稍后点击"'),a("span",{style:"color: teal"},"导出记录"),a("span",null,'"查看~ ')]),confirmButtonText:"我知道了"}).then((function(t){}))})).catch((function(e){t.$message.error(e.message)}))},getExportFileList:function(){this.fileVisible=!0,this.$refs.exportList.exportFileList("order")},pageChangeLog:function(t){this.tableFromLog.page=t,this.getList("")},handleSizeChangeLog:function(t){this.tableFromLog.limit=t,this.getList("")},printOrder:function(t){var e=this;orderPrintApi(t).then((function(t){e.$message.success(t.message)})).catch((function(t){e.$message.error(t.message)}))},selectChange:function(t){this.timeVal=[],this.tableFrom.date=t,this.tableFrom.page=1,this.getCardList(),this.getList(1)},onchangeTime:function(t){this.timeVal=t,this.tableFrom.date=t?this.timeVal.join("-"):"",this.tableFrom.page=1,this.getCardList(),this.getList(1)},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(i["w"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.$message.error(t.message),e.listLoading=!1}))},getCardList:function(){var t=this;Object(i["u"])(this.tableFrom).then((function(e){t.cardLists=e.data})).catch((function(e){t.$message.error(e.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},headerList:function(){var t=this;Object(i["v"])().then((function(e){t.orderChartType=e.data})).catch((function(e){t.$message.error(e.message)}))}}},c=o,u=(a("850c"),a("2877")),d=Object(u["a"])(c,r,n,!1,null,"184e8afc",null);e["default"]=d.exports},f8b7:function(t,e,a){"use strict";a.d(e,"n",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"p",(function(){return l})),a.d(e,"l",(function(){return o})),a.d(e,"m",(function(){return c})),a.d(e,"o",(function(){return u})),a.d(e,"t",(function(){return d})),a.d(e,"i",(function(){return f})),a.d(e,"j",(function(){return m})),a.d(e,"g",(function(){return p})),a.d(e,"h",(function(){return g})),a.d(e,"f",(function(){return b})),a.d(e,"v",(function(){return h})),a.d(e,"w",(function(){return _})),a.d(e,"u",(function(){return v})),a.d(e,"e",(function(){return y})),a.d(e,"d",(function(){return w})),a.d(e,"c",(function(){return L})),a.d(e,"s",(function(){return k})),a.d(e,"r",(function(){return x})),a.d(e,"q",(function(){return C}));var r=a("0c6d");function n(t){return r["a"].get("order/lst",t)}function i(){return r["a"].get("order/chart")}function s(t){return r["a"].get("order/title",t)}function l(t){return r["a"].get("store/order/update/".concat(t,"/form"))}function o(t){return r["a"].get("store/order/delivery/".concat(t,"/form"))}function c(t){return r["a"].get("order/detail/".concat(t))}function u(t,e){return r["a"].get("order/status/".concat(t),e)}function d(t){return r["a"].get("order/refund/lst",t)}function f(t){return r["a"].get("order/children/".concat(t))}function m(t){return r["a"].get("order/express/".concat(t))}function p(t){return r["a"].get("order/excel",t)}function g(t){return r["a"].get("order/refund/excel",t)}function b(t){return r["a"].get("excel/lst",t)}function h(){return r["a"].get("order/takechart")}function _(t){return r["a"].get("order/takelst",t)}function v(t){return r["a"].get("order/take_title",t)}function y(){return r["a"].get("excel/type")}function w(t){return r["a"].get("delivery/order/lst",t)}function L(t){return r["a"].get("delivery/order/cancel/".concat(t,"/form"))}function k(t){return r["a"].get("delivery/station/payLst",t)}function x(){return r["a"].get("delivery/title")}function C(){return r["a"].get("delivery/belence")}}}]);