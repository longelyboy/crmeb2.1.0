(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb47ee8"],{"2c59":function(t,a,e){"use strict";e("da13")},4221:function(t,a,e){},5711:function(t,a,e){"use strict";e("a8de")},"8b9d":function(t,a,e){"use strict";e("4221")},9406:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e(t.currentRole,{tag:"component"})],1)},i=[],n=e("db72"),r=e("2f62"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-editor-container"},[e("panel-group",{on:{handleSetLineChartData:t.handleSetLineChartData}}),t._v(" "),e("el-row",{staticStyle:{background:"#fff",margin:"20px 0"}},[e("div",{staticClass:"panel-title"},[e("el-col",{attrs:{span:12}},[e("span",[t._v("支付订单")])]),t._v(" "),e("el-col",{staticClass:"align-right",attrs:{span:12}},[e("el-radio-group",{attrs:{size:"mini"},on:{change:function(a){return t.getCurrentData(t.time3)}},model:{value:t.time3,callback:function(a){t.time3=a},expression:"time3"}},t._l(t.timeList1,(function(a){return e("el-radio-button",{key:a.value,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1)],1)],1),t._v(" "),e("line-chart",{ref:"lineChart",attrs:{"chart-data":t.lineChartData,date:t.time3}})],1),t._v(" "),e("el-row",{staticClass:"panel-warp",staticStyle:{height:"380px"},attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:24,lg:16}},[e("el-row",{staticClass:"panel-title",staticStyle:{background:"#fff",padding:"20px"}},[e("el-col",{attrs:{span:12}},[e("span",[t._v("成交用户")])]),t._v(" "),e("el-col",{staticClass:"align-right",attrs:{span:12}},[e("el-radio-group",{attrs:{size:"mini"},on:{change:function(a){return t.getCustomerData(t.time1)}},model:{value:t.time1,callback:function(a){t.time1=a},expression:"time1"}},t._l(t.timeList,(function(a){return e("el-radio-button",{key:a.value,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1)],1)],1),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("el-row",{staticStyle:{background:"#fff",height:"360px",padding:"0 20px",position:"relative"}},[e("span",{staticClass:"grid-floating",staticStyle:{position:"absolute"}},[t._v("\n            访客-下单转化率：\n            "),e("span",{staticClass:"grid-conversion-number"},[t._v(t._s(t.orderCustomer.orderRate?Math.floor(100*t.orderCustomer.orderRate):"0.00")+"%")])]),t._v(" "),e("span",{staticClass:"grid-floating"},[t._v("\n            下单-支付转化率：\n            "),e("span",{staticClass:"grid-conversion-number"},[t._v(t._s(t.orderCustomer.payOrderRate?Math.floor(100*t.orderCustomer.payOrderRate):"0.00")+"%")])]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content"},[e("el-col",{staticClass:"bg-color bg-blue",attrs:{span:18}},[e("span",{staticClass:"grid-count"},[t._v(t._s(t.orderCustomer.visitUser))]),t._v(" 访客人数\n              ")]),t._v(" "),e("el-col",{staticClass:"blue-trapezoid bg-trapezoid",attrs:{span:10}},[e("span",[t._v("访客")])])],1)]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content"},[e("el-col",{staticClass:"bg-color bg-green",attrs:{span:4}},[e("span",{staticClass:"grid-count"},[t._v(t._s(t.orderCustomer.orderUser))]),t._v("下单人数                   \n              ")]),t._v(" "),e("el-col",{staticClass:"bg-color bg-green",attrs:{span:4}},[e("span",{staticClass:"grid-count"},[t._v(t._s(t.orderCustomer.orderPrice))]),t._v("下单金额     \n              ")]),t._v(" "),e("el-col",{staticClass:"bg-color bg-green",staticStyle:{height:"100px"},attrs:{span:8}}),t._v(" "),e("el-col",{staticClass:"green-trapezoid bg-trapezoid",attrs:{span:10}},[e("span",[t._v("下单")])])],1)]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content"},[e("el-col",{staticClass:"bg-color bg-gray-dark",attrs:{span:4}},[e("span",{staticClass:"grid-count"},[t._v(t._s(t.orderCustomer.payOrderUser))]),t._v("\n                支付人数\n              ")]),t._v(" "),e("el-col",{staticClass:"bg-color bg-gray-dark",attrs:{span:4}},[e("span",{staticClass:"grid-count"},[t._v(t._s(t.orderCustomer.payOrderPrice))]),t._v("支付金额                  \n              ")]),t._v(" "),e("el-col",{staticClass:"bg-color bg-gray-dark",attrs:{span:4}},[e("span",{staticClass:"grid-count"},[t._v(t._s(t.orderCustomer.userRate))]),t._v("客单价                  \n              ")]),t._v(" "),e("el-col",{staticClass:"bg-color bg-gray-dark",staticStyle:{height:"100px"},attrs:{span:2}}),t._v(" "),e("el-col",{staticClass:"gray-dark-trapezoid bg-trapezoid",attrs:{span:10}},[e("span",[t._v("支付")])])],1)])],1)],1)],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("el-row",{staticClass:"panel-title",staticStyle:{background:"#fff",padding:"20px 20px 50px"}},[e("el-col",{attrs:{span:8}},[e("span",[t._v("用户统计")])]),t._v(" "),e("el-col",{staticClass:"align-right",attrs:{span:16}},[e("el-radio-group",{attrs:{size:"mini"},on:{change:function(a){return t.getCustomerRatioData(t.time2)}},model:{value:t.time2,callback:function(a){t.time2=a},expression:"time2"}},t._l(t.timeList,(function(a){return e("el-radio-button",{key:a.value,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1),t._v(" "),e("el-row",{staticClass:"pieChart-switch"},[e("el-button",{class:t.isAmount?"active":"",nativeOn:{click:function(a){return t.chooseAmount(a)}}},[t._v("金额")]),t._v(" "),e("el-button",{class:t.isAmount?"":"active",nativeOn:{click:function(a){return t.chooseCustomers(a)}}},[t._v("客户数")])],1)],1)],1),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("pie-chart",{ref:"pieChart",attrs:{amount:t.isAmount,date:t.time2}})],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:8},xl:{span:8}}},[e("el-row",{staticClass:"panel-title",staticStyle:{background:"#fff"}},[e("el-col",{attrs:{span:8}},[e("span",[t._v("商品支付排行")])]),t._v(" "),e("el-col",{staticClass:"align-right",attrs:{span:16}},[e("el-radio-group",{attrs:{size:"mini"},on:{change:function(a){return t.getRankingData(t.rankingTime1)}},model:{value:t.rankingTime1,callback:function(a){t.rankingTime1=a},expression:"rankingTime1"}},t._l(t.timeList,(function(a){return e("el-radio-button",{key:a.value,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1)],1)],1),t._v(" "),e("div",{staticClass:"grid-title-count"},[e("el-row",{staticClass:"grid-title"},[e("el-col",{attrs:{span:4}},[t._v("排名")]),t._v(" "),e("el-col",{attrs:{span:16}},[t._v("名称")]),t._v(" "),e("el-col",{attrs:{span:4}},[t._v("支付数")])],1)],1),t._v(" "),e("div",{staticClass:"grid-list-content"},t._l(t.commodityPaymentList,(function(a,s){return e("el-row",{key:s,staticClass:"grid-count"},[e("el-col",{staticClass:"grid-list",attrs:{span:4}},[e("span",{staticClass:"navy-blue",class:"gray"+s},[t._v(t._s(s+1))])]),t._v(" "),e("el-col",{staticClass:"grid-list",attrs:{span:16}},[e("img",{attrs:{src:a.picSrc,alt:""}}),t._v(" "),e("span",[t._v(t._s(a.name))])]),t._v(" "),e("el-col",{staticClass:"grid-list",attrs:{span:4}},[t._v(t._s(a.count))])],1)})),1)],1),t._v(" "),e("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:8},xl:{span:8}}},[e("el-row",{staticClass:"panel-title",staticStyle:{background:"#fff"}},[e("el-col",{attrs:{span:8}},[e("span",[t._v("商品访客排行")])]),t._v(" "),e("el-col",{staticClass:"align-right",attrs:{span:16}},[e("el-radio-group",{attrs:{size:"mini"},on:{change:function(a){return t.getVisitorRankingData(t.rankingTime2)}},model:{value:t.rankingTime2,callback:function(a){t.rankingTime2=a},expression:"rankingTime2"}},t._l(t.timeList,(function(a){return e("el-radio-button",{key:a.value,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1)],1)],1),t._v(" "),e("div",{staticClass:"grid-title-count"},[e("el-row",{staticClass:"grid-title"},[e("el-col",{attrs:{span:4}},[t._v("排名")]),t._v(" "),e("el-col",{attrs:{span:16}},[t._v("名称")]),t._v(" "),e("el-col",{attrs:{span:4}},[t._v("访问数")])],1)],1),t._v(" "),e("div",{staticClass:"grid-list-content"},t._l(t.visitorRankingList,(function(a,s){return e("el-row",{key:s,staticClass:"grid-count"},[e("el-col",{staticClass:"grid-list",attrs:{span:4}},[e("span",{staticClass:"navy-blue",class:"gray"+s},[t._v(t._s(s+1))])]),t._v(" "),e("el-col",{staticClass:"grid-list",attrs:{span:16}},[e("img",{attrs:{src:a.image,alt:""}}),t._v(" "),e("span",[t._v(t._s(a.store_name))])]),t._v(" "),e("el-col",{staticClass:"grid-list",attrs:{span:4}},[t._v(t._s(a.total))])],1)})),1)],1),t._v(" "),e("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:8},xl:{span:8}}},[e("el-row",{staticClass:"panel-title",staticStyle:{background:"#fff"}},[e("el-col",{attrs:{span:8}},[e("span",[t._v("商品加购排行")])]),t._v(" "),e("el-col",{staticClass:"align-right",attrs:{span:16}},[e("el-radio-group",{attrs:{size:"mini"},on:{change:function(a){return t.getProductPlusData(t.rankingTime3)}},model:{value:t.rankingTime3,callback:function(a){t.rankingTime3=a},expression:"rankingTime3"}},t._l(t.timeList,(function(a){return e("el-radio-button",{key:a.value,attrs:{label:a.value}},[t._v(t._s(a.label))])})),1)],1)],1),t._v(" "),e("div",{staticClass:"grid-title-count"},[e("el-row",{staticClass:"grid-title"},[e("el-col",{attrs:{span:4}},[t._v("排名")]),t._v(" "),e("el-col",{attrs:{span:16}},[t._v("名称")]),t._v(" "),e("el-col",{attrs:{span:4}},[t._v("加购数")])],1)],1),t._v(" "),e("div",{staticClass:"grid-list-content"},t._l(t.productPlusList,(function(a,s){return e("el-row",{key:s,staticClass:"grid-count"},[e("el-col",{staticClass:"grid-list",attrs:{span:4}},[e("span",{staticClass:"navy-blue",class:"gray"+s},[t._v(t._s(s+1))])]),t._v(" "),e("el-col",{staticClass:"grid-list",attrs:{span:16}},[e("img",{attrs:{src:a.image,alt:""}}),t._v(" "),e("span",[t._v(t._s(a.store_name))])]),t._v(" "),e("el-col",{staticClass:"grid-list",attrs:{span:4}},[t._v(t._s(a.total))])],1)})),1)],1)],1)],1)},l=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-container"},[e("el-row",{staticClass:"panel-group",attrs:{gutter:18}},[e("el-col",{staticClass:"card-panel-col",attrs:{span:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("messages")}}},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[e("span",{staticClass:"card-order"},[t._v("支付金额")]),t._v(" "),e("span",{staticClass:"card-date"},[t._v("今日")])]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.mainData.today.payPrice,duration:3e3}}),t._v(" "),e("div",{staticClass:"card-panel-compared"},[t._v(" \n            周环比：\n            "),e("span",{class:{isdecline:t.mainData.lastWeekRate.payPrice<0}},[t._v("\n              "+t._s(t.mainData.lastWeekRate.payPrice?(100*t.mainData.lastWeekRate.payPrice*1e3/1e3).toFixed(2):0)+"%\n            ")])])],1),t._v(" "),e("div",{staticClass:"card-panel-date"},[e("span",{staticClass:"date_text"},[t._v("昨日数据")]),t._v(" "),e("span",{staticClass:"date_num"},[t._v(t._s(t.mainData.yesterday.payPrice))])])])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{span:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("purchases")}}},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[e("span",{staticClass:"card-order"},[t._v("支付人数")]),t._v(" "),e("span",{staticClass:"card-date"},[t._v("今日")])]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.mainData.today.payUser,duration:3200}}),t._v(" "),e("div",{staticClass:"card-panel-compared"},[t._v("\n            周环比：\n            "),e("span",{class:{isdecline:t.mainData.lastWeekRate.payUser<0}},[t._v("\n              "+t._s(t.mainData.lastWeekRate.payUser?(100*t.mainData.lastWeekRate.payUser*1e3/1e3).toFixed(2):0)+"%\n            ")])])],1),t._v(" "),e("div",{staticClass:"card-panel-date"},[e("span",{staticClass:"date_text"},[t._v("昨日数据")]),t._v(" "),e("span",{staticClass:"date_num"},[t._v(t._s(t.mainData.yesterday.payUser))])])])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{span:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("shoppings")}}},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[e("span",{staticClass:"card-order"},[t._v("访客")]),t._v(" "),e("span",{staticClass:"card-date"},[t._v("今日")])]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.mainData.today.visitNum,duration:3600}}),t._v(" "),e("div",{staticClass:"card-panel-compared"},[t._v("\n            周环比：\n            "),e("span",{class:{isdecline:t.mainData.lastWeekRate.visitNum<0}},[t._v("\n              "+t._s(t.mainData.lastWeekRate.visitNum?100*t.mainData.lastWeekRate.visitNum*1e3/1e3:0)+"%\n            ")])])],1),t._v(" "),e("div",{staticClass:"card-panel-date"},[e("span",{staticClass:"date_text"},[t._v("昨日数据")]),t._v(" "),e("span",{staticClass:"date_num"},[t._v(t._s(t.mainData.yesterday.visitNum))])])])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{span:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("followers")}}},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[e("span",{staticClass:"card-order"},[t._v("关注店铺")]),t._v(" "),e("span",{staticClass:"card-date"},[t._v("今日")])]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.mainData.today.likeStore,duration:3600}}),t._v(" "),e("div",{staticClass:"card-panel-compared"},[t._v("\n            周环比：\n            "),e("span",{class:{isdecline:t.mainData.lastWeekRate.likeStore<0}},[t._v("\n              "+t._s(t.mainData.lastWeekRate.likeStore?(100*t.mainData.lastWeekRate.likeStore*1e3/1e3).toFixed(2):0)+"%")])])],1),t._v(" "),e("div",{staticClass:"card-panel-date"},[e("span",{staticClass:"date_text"},[t._v("昨日数据")]),t._v(" "),e("span",{staticClass:"date_num"},[t._v(t._s(t.mainData.yesterday.likeStore))])])])])],1),t._v(" "),e("el-row",{staticClass:"panel-group-count",attrs:{gutter:18}},[e("el-col",{staticClass:"card-panel-item",attrs:{span:3}},[e("router-link",{attrs:{to:{path:t.roterPre+"/product/list"}}},[e("div",{staticClass:"card-panel-count"},[e("span",{staticClass:"iconfont icon-shangpinguanli",staticStyle:{color:"#57D1A0"}}),t._v(" "),e("span",{staticClass:"panel-text"},[t._v("商品管理")])])])],1),t._v(" "),e("el-col",{staticClass:"card-panel-item",attrs:{span:3}},[e("router-link",{attrs:{to:{path:t.roterPre+"/user/list"}}},[e("div",{staticClass:"card-panel-count"},[e("span",{staticClass:"iconfont icon-yonghuguanli",staticStyle:{color:"#69C0FD"}}),t._v(" "),e("span",{staticClass:"panel-text"},[t._v("用户管理")])])])],1),t._v(" "),e("el-col",{staticClass:"card-panel-item",attrs:{span:3}},[e("router-link",{attrs:{to:{path:t.roterPre+"/order/list"}}},[e("div",{staticClass:"card-panel-count"},[e("span",{staticClass:"iconfont icon-dingdanguanli",staticStyle:{color:"#EF9B6F"}}),t._v(" "),e("span",{staticClass:"panel-text"},[t._v("订单管理")])])])],1),t._v(" "),e("el-col",{staticClass:"card-panel-item",attrs:{span:3}},[e("router-link",{attrs:{to:{path:t.roterPre+"/accounts/capitalFlow"}}},[e("div",{staticClass:"card-panel-count"},[e("span",{staticClass:"iconfont icon-caiwuguanli",staticStyle:{color:"#B27FEB"}}),t._v(" "),e("span",{staticClass:"panel-text"},[t._v("财务管理")])])])],1),t._v(" "),e("el-col",{staticClass:"card-panel-item",attrs:{span:3}},[e("router-link",{attrs:{to:{path:t.roterPre+"/setting/sms/sms_config/index"}}},[e("div",{staticClass:"card-panel-count"},[e("span",{staticClass:"iconfont icon-yihaotong",staticStyle:{color:"#EFB32C"}}),t._v(" "),e("span",{staticClass:"panel-text"},[t._v("一号通")])])])],1),t._v(" "),e("el-col",{staticClass:"card-panel-item",attrs:{span:3}},[e("router-link",{attrs:{to:{path:t.roterPre+"/marketing/coupon/list"}}},[e("div",{staticClass:"card-panel-count"},[e("span",{staticClass:"iconfont icon-youhuiquan",staticStyle:{color:"#5CC7C1"}}),t._v(" "),e("span",{staticClass:"panel-text"},[t._v("优惠券")])])])],1),t._v(" "),e("el-col",{staticClass:"card-panel-item",attrs:{span:3}},[e("router-link",{attrs:{to:{path:t.roterPre+"/systemForm/modifyStoreInfo"}}},[e("div",{staticClass:"card-panel-count"},[e("span",{staticClass:"iconfont icon-xitongshezhi",staticStyle:{color:"#EFB32C"}}),t._v(" "),e("span",{staticClass:"panel-text"},[t._v("系统设置")])])])],1),t._v(" "),e("el-col",{staticClass:"card-panel-item",attrs:{span:3}},[e("router-link",{attrs:{to:{path:t.roterPre+"/export/list"}}},[e("div",{staticClass:"card-panel-count"},[e("span",{staticClass:"iconfont icon-daochuwenjian",staticStyle:{color:"#EF9B6F"}}),t._v(" "),e("span",{staticClass:"panel-text"},[t._v("导出文件")])])])],1)],1)],1)},d=[],u=e("ec1b"),p=e.n(u),v=e("0c6d");function m(){return v["a"].get("statistics/main")}function h(t){return v["a"].get("statistics/order",t)}function g(t){return v["a"].get("statistics/user",t)}function f(t){return v["a"].get("statistics/user_rate",t)}function _(t){return v["a"].get("statistics/product",t)}function C(t){return v["a"].get("statistics/product_visit",t)}function y(t){return v["a"].get("statistics/product_cart",t)}var b=e("83d6"),x={data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},value1:"",value2:"",decline:1,mainData:{yesterday:{},today:{},lastWeekRate:{}},today:{},lastWeekRate:{},yesterday:{},roterPre:b["roterPre"]}},components:{CountTo:p.a},mounted:function(){this.getMainData()},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)},getMainData:function(){var t=this;m().then((function(a){200===a.status&&(t.mainData=a.data)})).catch((function(a){t.$message.error(a.message)}))}}},k=x,D=(e("8b9d"),e("2877")),w=Object(D["a"])(k,c,d,!1,null,"27299f7a",null),S=w.exports,T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},$=[],E=(e("c5f6"),e("313e")),R=e.n(E),L=e("ed08"),P={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(L["a"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};e("817d");var z={mixins:[P],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0},date:{type:String,default:"lately7"}},data:function(){return{chart:null,horizontalAxis:[],PaymentAmount:[],orderNumber:[],user:[]}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}},date:{deep:!0,handler:function(t){this.date=t;this.date}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=R.a.init(this.$el,"macarons")},getOrderData:function(t){var a=this,e=this;h(t).then((function(t){if(200===t.status){e.horizontalAxis.splice(0,e.horizontalAxis.length),e.PaymentAmount.splice(0,e.PaymentAmount.length),e.orderNumber.splice(0,e.orderNumber.length),e.user.splice(0,e.user.length),t.data.map((function(t){e.horizontalAxis.push(t.day),e.PaymentAmount.push(t.pay_price),e.orderNumber.push(t.total),e.user.push(t.user)}));var s=e.horizontalAxis,i=e.PaymentAmount;console.log(i);var n=e.orderNumber,r=e.user;e.chart.setOption({xAxis:{data:s,axisLine:{lineStyle:{color:"#606266"}},boundaryGap:!1,axisTick:{show:!1},axisLabel:{interval:0}},grid:{left:50,right:50,bottom:20,top:70,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:[{name:"订单/支付人数",max:parseFloat(a.arrayMax(n))+5,type:"value",axisLabel:{formatter:"{value}"}},{name:"支付金额",type:"value",max:parseFloat(a.arrayMax(i))+50,min:a.arrayMin(i),splitLine:{show:!1}}],legend:{data:["订单数","支付人数","支付金额"],left:10},series:[{name:"订单数",markPoint:{data:[{type:"max",name:"峰值"}]},itemStyle:{normal:{color:"#5b8ff9",lineStyle:{color:"#5b8ff9",width:2}}},smooth:!1,type:"line",data:n,animationDuration:2800,animationEasing:"cubicInOut"},{name:"支付人数",smooth:!1,type:"line",markPoint:{data:[{type:"max",name:"峰值"}]},itemStyle:{normal:{color:"#5d7092",lineStyle:{color:"#5d7092",width:2},areaStyle:{color:"rgba(255,255,255,.4)"}}},data:r,animationDuration:2800,animationEasing:"quadraticOut"},{name:"支付金额",yAxisIndex:1,smooth:!1,type:"line",markPoint:{data:[{type:"max",name:"峰值"}]},itemStyle:{normal:{color:"#5ad8a6",lineStyle:{color:"#5ad8a6",width:2},areaStyle:{color:"rgba(255,255,255,.4)"}}},data:i,animationDuration:2800,animationEasing:"quadraticOut"}]})}})).catch((function(t){a.$message.error(t.message)}))},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.expectedData,t.actualData,t.payer},arrayMin:function(t){for(var a=t[0],e=1,s=t.length;e<s;e+=1)t[e]<a&&(a=t[e]);return a},arrayMax:function(t){for(var a=t[0],e=1,s=t.length;e<s;e++)Number(t[e])>a&&(a=t[e]);return a}}},O=z,A=Object(D["a"])(O,T,$,!1,null,null,null),N=A.exports,W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},j=[];e("817d");var F=3e3,B={mixins:[P],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=R.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},radar:{radius:"66%",center:["50%","42%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,95,132,.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"Sales",max:1e4},{name:"Administration",max:2e4},{name:"Information Technology",max:2e4},{name:"Customer Support",max:2e4},{name:"Development",max:2e4},{name:"Marketing",max:2e4}]},legend:{left:"center",bottom:"10",data:["Allocated Budget","Expected Spending","Actual Spending"]},series:[{type:"radar",symbolSize:0,areaStyle:{normal:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1}},data:[{value:[5e3,7e3,12e3,11e3,15e3,14e3],name:"Allocated Budget"},{value:[4e3,9e3,15e3,15e3,13e3,11e3],name:"Expected Spending"},{value:[5500,11e3,12e3,15e3,12e3,12e3],name:"Actual Spending"}],animationDuration:F}]})}}},M=B,U=Object(D["a"])(M,W,j,!1,null,null,null),H=U.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},V=[];e("9fad");var q={mixins:[P],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},amount:{type:Boolean,default:!0},date:{type:String,default:"lately7"}},data:function(){return{chart:null,newData:"",oldData:"",Comment:[]}},watch:{amount:{deep:!0,handler:function(t){this.amount=t,this.getTurnoverRatio()}},date:{deep:!0,handler:function(t){this.date=t}}},mounted:function(){this.$nextTick((function(){}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{getTurnoverRatio:function(){var t=this;f({date:this.date}).then((function(a){200===a.status&&(t.orderCustomer=a.data,t.newData=t.amount?a.data.newTotalPrice:a.data.newUser,t.oldData=t.amount?a.data.oldTotalPrice:a.data.oldUser,t.chart=R.a.init(t.$el,"shine"),t.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",bottom:0,left:"5%",data:["新用户","老用户"]},series:[{name:t.amount?"金额":"客户数",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:t.newData,name:"新用户",itemStyle:{color:"#6394F9"}},{value:t.oldData,name:"老用户",itemStyle:{color:"#EFAE23"}}],animationEasing:"cubicInOut",animationDuration:2600}]}))})).catch((function(a){t.$message.error(a.message)}))}}},J=q,G=Object(D["a"])(J,I,V,!1,null,null,null),X=G.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},K=[];e("817d");var Q=6e3,Z={mixins:[P],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=R.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[79,52,200,334,390,330,220],animationDuration:Q},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220],animationDuration:Q},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[30,52,200,334,390,330,220],animationDuration:Q}]})}}},tt=Z,at=Object(D["a"])(tt,Y,K,!1,null,null,null),et=at.exports,st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"todoapp"},[e("header",{staticClass:"header"},[e("input",{staticClass:"new-todo",attrs:{autocomplete:"off",placeholder:"Todo List"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addTodo(a)}}})]),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[e("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:t.allChecked},on:{change:function(a){return t.toggleAll({done:!t.allChecked})}}}),t._v(" "),e("label",{attrs:{for:"toggle-all"}}),t._v(" "),e("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,(function(a,s){return e("todo",{key:s,attrs:{todo:a},on:{toggleTodo:t.toggleTodo,editTodo:t.editTodo,deleteTodo:t.deleteTodo}})})),1)]),t._v(" "),e("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[e("span",{staticClass:"todo-count"},[e("strong",[t._v(t._s(t.remaining))]),t._v("\n      "+t._s(t._f("pluralize")(t.remaining,"item"))+" left\n    ")]),t._v(" "),e("ul",{staticClass:"filters"},t._l(t.filters,(function(a,s){return e("li",{key:s},[e("a",{class:{selected:t.visibility===s},on:{click:function(a){a.preventDefault(),t.visibility=s}}},[t._v(t._s(t._f("capitalize")(s)))])])})),0)])])},it=[],nt=(e("ac6a"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[e("div",{staticClass:"view"},[e("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(a){return t.toggleTodo(t.todo)}}}),t._v(" "),e("label",{domProps:{textContent:t._s(t.todo.text)},on:{dblclick:function(a){t.editing=!0}}}),t._v(" "),e("button",{staticClass:"destroy",on:{click:function(a){return t.deleteTodo(t.todo)}}})]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.doneEdit(a)},function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:t.cancelEdit(a)}],blur:t.doneEdit}})])}),rt=[],ot={name:"Todo",directives:{focus:function(t,a,e){var s=a.value,i=e.context;s&&i.$nextTick((function(){t.focus()}))}},props:{todo:{type:Object,default:function(){return{}}}},data:function(){return{editing:!1}},methods:{deleteTodo:function(t){this.$emit("deleteTodo",t)},editTodo:function(t){var a=t.todo,e=t.value;this.$emit("editTodo",{todo:a,value:e})},toggleTodo:function(t){this.$emit("toggleTodo",t)},doneEdit:function(t){var a=t.target.value.trim(),e=this.todo;a?this.editing&&(this.editTodo({todo:e,value:a}),this.editing=!1):this.deleteTodo({todo:e})},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}}},lt=ot,ct=Object(D["a"])(lt,nt,rt,!1,null,null,null),dt=ct.exports,ut="todos",pt={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.done}))},completed:function(t){return t.filter((function(t){return t.done}))}},vt=[{text:"star this repository",done:!1},{text:"fork this repository",done:!1},{text:"follow author",done:!1},{text:"vue-element-admin",done:!0},{text:"vue",done:!0},{text:"element-ui",done:!0},{text:"axios",done:!0},{text:"webpack",done:!0}],mt={components:{Todo:dt},filters:{pluralize:function(t,a){return 1===t?a:a+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},data:function(){return{visibility:"all",filters:pt,todos:vt}},computed:{allChecked:function(){return this.todos.every((function(t){return t.done}))},filteredTodos:function(){return pt[this.visibility](this.todos)},remaining:function(){return this.todos.filter((function(t){return!t.done})).length}},methods:{setLocalStorage:function(){window.localStorage.setItem(ut,JSON.stringify(this.todos))},addTodo:function(t){var a=t.target.value;a.trim()&&(this.todos.push({text:a,done:!1}),this.setLocalStorage()),t.target.value=""},toggleTodo:function(t){t.done=!t.done,this.setLocalStorage()},deleteTodo:function(t){this.todos.splice(this.todos.indexOf(t),1),this.setLocalStorage()},editTodo:function(t){var a=t.todo,e=t.value;a.text=e,this.setLocalStorage()},clearCompleted:function(){this.todos=this.todos.filter((function(t){return!t.done})),this.setLocalStorage()},toggleAll:function(t){var a=this,e=t.done;this.todos.forEach((function(t){t.done=e,a.setLocalStorage()}))}}},ht=mt,gt=(e("2c59"),Object(D["a"])(ht,st,it,!1,null,null,null)),ft=gt.exports,_t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{staticClass:"box-card-component",staticStyle:{"margin-left":"8px"}},[e("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[e("img",{attrs:{src:"https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"}})]),t._v(" "),e("div",{staticStyle:{position:"relative"}},[e("pan-thumb",{staticClass:"panThumb",attrs:{image:t.avatar}}),t._v(" "),e("mallki",{attrs:{"class-name":"mallki-text",text:"vue-element-admin"}}),t._v(" "),e("div",{staticClass:"progress-item",staticStyle:{"padding-top":"35px"}},[e("span",[t._v("Vue")]),t._v(" "),e("el-progress",{attrs:{percentage:70}})],1),t._v(" "),e("div",{staticClass:"progress-item"},[e("span",[t._v("JavaScript")]),t._v(" "),e("el-progress",{attrs:{percentage:18}})],1),t._v(" "),e("div",{staticClass:"progress-item"},[e("span",[t._v("Css")]),t._v(" "),e("el-progress",{attrs:{percentage:12}})],1),t._v(" "),e("div",{staticClass:"progress-item"},[e("span",[t._v("ESLint")]),t._v(" "),e("el-progress",{attrs:{percentage:100,status:"success"}})],1)],1)])},Ct=[],yt={filters:{statusFilter:function(t){var a={success:"success",pending:"danger"};return a[t]}},data:function(){return{statisticsData:{article_count:1024,pageviews_count:1024}}},computed:Object(n["a"])({},Object(r["b"])(["name","avatar","roles"]))},bt=yt,xt=(e("5711"),e("ceee"),Object(D["a"])(bt,_t,Ct,!1,null,"5acc1735",null)),kt=xt.exports,Dt=e("c24f"),wt={newVisitis:{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145],payer:[100,120,98,130,150,140,180]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130],payer:[150,90,98,130,150,140,180]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130],payer:[150,90,98,130,150,140,180]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130],payer:[150,90,98,130,150,140,180]},followers:{expectedData:[150,90,98,130,150,140,180],actualData:[120,82,91,154,162,140,130],payer:[130,140,141,142,145,150,160]}},St={name:"DashboardAdmin",components:{PanelGroup:S,LineChart:N,RaddarChart:H,PieChart:X,BarChart:et,TodoList:ft,BoxCard:kt},data:function(){return{value1:"",value2:"",time1:"lately30",time2:"lately30",time3:"lately30",rankingTime1:"year",rankingTime2:"year",rankingTime3:"year",lineChartData:wt.newVisitis,isAmount:!0,timeList:[{value:"lately7",label:"近7天"},{value:"lately30",label:"近30天"},{value:"month",label:"本月"},{value:"year",label:"本年"}],timeList1:[{value:"lately7",label:"近7天"},{value:"lately30",label:"近30天"},{value:"month",label:"本月"},{value:"year",label:"本年"}],commodityPaymentList:[],visitorRankingList:[],productPlusList:[],orderCustomer:{}}},activated:function(){this.getUserMessage()},mounted:function(){this.getUserMessage(),this.getCurrentData(),this.getCustomerData(this.time1),this.getCustomerRatioData(),this.getRankingData(this.rankingTime1),this.getVisitorRankingData(this.rankingTime2),this.getProductPlusData(this.rankingTime3)},methods:{chooseAmount:function(){this.isAmount||(this.isAmount=!0)},chooseCustomers:function(){this.isAmount&&(this.isAmount=!1)},handleSetLineChartData:function(t){this.lineChartData=wt[t]},getCurrentData:function(){this.$refs.lineChart.getOrderData({date:this.time3})},getCustomerData:function(t){var a=this,e={date:t};g(e).then((function(t){200===t.status&&(a.orderCustomer=t.data)})).catch((function(t){a.$message.error(t.message)}))},getCustomerRatioData:function(){this.$refs.pieChart.getTurnoverRatio()},getRankingData:function(t){var a=this,e={date:t};_(e).then((function(t){200===t.status&&(a.commodityPaymentList.length=0,t.data.map((function(t){a.commodityPaymentList.push({name:t.cart_info.product.store_name,picSrc:t.cart_info.product.image,count:t.total})})))})).catch((function(t){a.$message.error(t.message)}))},getVisitorRankingData:function(t){var a=this,e={date:t};C(e).then((function(t){200===t.status&&(a.visitorRankingList=t.data)})).catch((function(t){a.$message.error(t.message)}))},getProductPlusData:function(t){var a=this,e={date:t};y(e).then((function(t){200===t.status&&(a.productPlusList=t.data)})).catch((function(t){a.$message.error(t.message)}))},getUserMessage:function(){var t=this;Object(Dt["i"])().then((function(a){var e=a.data;console.log(e),e.mer_avatar&&e.mer_banner&&e.mer_info&&e.mer_address||t.$alert("您好，请前往左侧菜单【设置】-【商户信息】完善商户基础信息",{confirmButtonText:"确定",callback:function(a){t.$router.push({name:"ModifyStoreInfo"})}})}))}}},Tt=St,$t=(e("a633"),Object(D["a"])(Tt,o,l,!1,null,"d29d6e6c",null)),Et=$t.exports,Rt={name:"Dashboard",components:{adminDashboard:Et},data:function(){return{currentRole:"adminDashboard"}},computed:Object(n["a"])({},Object(r["b"])(["roles"])),created:function(){}},Lt=Rt,Pt=Object(D["a"])(Lt,s,i,!1,null,null,null);a["default"]=Pt.exports},a633:function(t,a,e){"use strict";e("b29e")},a8de:function(t,a,e){},b29e:function(t,a,e){},b546:function(t,a,e){},ceee:function(t,a,e){"use strict";e("b546")},da13:function(t,a,e){}}]);