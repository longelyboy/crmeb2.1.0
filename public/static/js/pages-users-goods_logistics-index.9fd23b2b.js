(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-goods_logistics-index"],{"0de1":function(t,e,n){"use strict";n.r(e);var o=n("d82c"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},1390:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.isShowAuth&&t.code?n("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),t.isShowAuth&&t.code?n("v-uni-view",{staticClass:"Popup",style:"top:"+t.top+"px;"},[n("v-uni-view",{staticClass:"logo-auth"},[n("v-uni-image",{staticClass:"image",attrs:{src:t.routine_logo,mode:"aspectFit"}})],1),t.isWeixin?n("v-uni-text",{staticClass:"title"},[t._v("授权提醒")]):n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),t.isWeixin?n("v-uni-text",{staticClass:"tip"},[t._v("请授权头像等信息，以便为您提供更好的服务！")]):n("v-uni-text",{staticClass:"tip"},[t._v(t._s(t.info))]),n("v-uni-view",{staticClass:"bottom flex"},[n("v-uni-text",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("随便逛逛")]),n("v-uni-button",{staticClass:"item grant",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toWecahtAuth.apply(void 0,arguments)}}},[t.isWeixin?n("v-uni-text",{staticClass:"text"},[t._v("去授权")]):n("v-uni-text",{staticClass:"text"},[t._v("去登录")])],1)],1)],1):t._e()],1)},i=[]},2624:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.logistics .header[data-v-956c13e8]{padding:%?23?% %?30?%;background-color:#fff;height:%?166?%;box-sizing:border-box}.logistics .header .pictrue[data-v-956c13e8]{width:%?120?%;height:%?120?%}.logistics .header .pictrue uni-image[data-v-956c13e8]{width:100%;height:100%;border-radius:%?6?%}.logistics .header .text[data-v-956c13e8]{width:%?540?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.logistics .header .text .name[data-v-956c13e8]{width:%?365?%;color:#282828}.logistics .header .text .money[data-v-956c13e8]{text-align:right}.logistics .logisticsCon[data-v-956c13e8]{background-color:#fff;margin:%?12?% 0}.logistics .logisticsCon .company[data-v-956c13e8]{height:%?120?%;margin:0 0 %?45?% %?30?%;padding-right:%?30?%;border-bottom:1px solid #f5f5f5}.logistics .logisticsCon .company .picTxt[data-v-956c13e8]{width:%?520?%}.logistics .logisticsCon .company .picTxt .iconfont[data-v-956c13e8]{width:%?50?%;height:%?50?%;background-color:#666;text-align:center;line-height:%?50?%;color:#fff;font-size:%?35?%}.logistics .logisticsCon .company .picTxt .text[data-v-956c13e8]{width:%?450?%;font-size:%?26?%;color:#282828}.logistics .logisticsCon .company .picTxt .text .name[data-v-956c13e8]{color:#999}.logistics .logisticsCon .company .picTxt .text .express[data-v-956c13e8]{margin-top:%?5?%}.logistics .logisticsCon .company .copy[data-v-956c13e8]{font-size:%?20?%;width:%?106?%;height:%?40?%;text-align:center;display:flex;align-items:center;justify-content:center;border-radius:%?3?%;border:1px solid #999}.logistics .logisticsCon .item[data-v-956c13e8]{padding:0 %?40?%;position:relative}.logistics .logisticsCon .item .circular[data-v-956c13e8]{width:%?20?%;height:%?20?%;border-radius:50%;position:absolute;top:%?-1?%;left:%?31.5?%;background-color:#ddd}.logistics .logisticsCon .item .circular.on[data-v-956c13e8]{background-color:#e93323}.logistics .logisticsCon .item .text.on-font[data-v-956c13e8]{color:#e93323}.logistics .logisticsCon .item .text .data.on-font[data-v-956c13e8]{color:#e93323}.logistics .logisticsCon .item .text[data-v-956c13e8]{font-size:%?26?%;color:#666;width:%?615?%;border-left:1px solid #e6e6e6;padding:0 0 %?60?% %?38?%}.logistics .logisticsCon .item .text.on[data-v-956c13e8]{border-left-color:#f8c1bd}.logistics .logisticsCon .item .text .data[data-v-956c13e8]{font-size:%?24?%;color:#999;margin-top:%?10?%}.logistics .logisticsCon .item .text .data .time[data-v-956c13e8]{margin-left:%?15?%}',""]),t.exports=e},"32f5":function(t,e,n){"use strict";var o=n("fff6"),i=n.n(o);i.a},"37bb":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"logistics"},[t.product.cart_info?n("v-uni-view",{staticClass:"header acea-row row-between row-top"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t.product.cart_info.product.image}})],1),n("v-uni-view",{staticClass:"text acea-row row-between"},[n("v-uni-view",{staticClass:"name line2"},[t._v(t._s(t.product.cart_info.product.store_name))]),n("v-uni-view",{staticClass:"money"},[n("v-uni-view",[t._v("￥"+t._s(t.product.product_price))]),n("v-uni-view",[t._v("x"+t._s(t.product.product_num))])],1)],1)],1):t._e(),n("v-uni-view",{staticClass:"logisticsCon"},[n("v-uni-view",{staticClass:"company acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"iconfont icon-wuliu"}),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",[n("v-uni-text",{staticClass:"name line1"},[t._v("物流公司：")]),t._v(t._s(t.orderInfo.delivery_name?t.orderInfo.delivery_name:""))],1),n("v-uni-view",{staticClass:"express line1"},[n("v-uni-text",{staticClass:"name"},[t._v("快递单号：")]),t._v(t._s(t.orderInfo.delivery_id?t.orderInfo.delivery_id:""))],1)],1)],1),n("v-uni-view",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.orderInfo.delivery_id}},[t._v("复制单号")])],1),t._l(t.expressList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"item"},[n("v-uni-view",{staticClass:"circular",class:0===o?"on":""}),n("v-uni-view",{staticClass:"text",class:0===o?"on-font on":""},[n("v-uni-view",[t._v(t._s(e.status))]),n("v-uni-view",{staticClass:"data",class:0===o?"on-font on":""},[t._v(t._s(e.time))])],1)],1)}))],2),1==t.recommend_switch?n("recommend",{attrs:{hostProduct:t.hostProduct,isLogin:t.isLogin}}):t._e()],1),n("authorize",{attrs:{isAuto:t.isAuto,isShowAuth:t.isShowAuth},on:{onLoadFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadFun.apply(void 0,arguments)},authColse:function(e){arguments[0]=e=t.$handleEvent(e),t.authColse.apply(void 0,arguments)}}})],1)},i=[]},"40ea":function(t,e,n){var o=n("eac8");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("0d096096",o,!0,{sourceMap:!1,shadowMode:!1})},"493d":function(t,e,n){"use strict";n.r(e);var o=n("e933"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"81cb":function(t,e,n){"use strict";var o=n("40ea"),i=n.n(o);i.a},"8dd8":function(t,e,n){"use strict";n.r(e);var o=n("37bb"),i=n("0de1");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("32f5");var a=n("f0c5"),s=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"956c13e8",null,!1,o["a"],void 0);e["default"]=s.exports},a60b:function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.applyInvoiceApi=function(t,e){return i.default.post("order/receipt/".concat(t),e)},e.cartDel=function(t){return i.default.post("user/cart/delete",t)},e.changeCartNum=function(t,e){return i.default.post("user/cart/change/"+t,e)},e.createOrder=function(t){return i.default.post("v2/order/create",t,{noAuth:!0})},e.develiveryDetail=function(t){return i.default.get("order/delivery/".concat(t))},e.express=function(t){return i.default.post("order/express/"+t)},e.expressList=function(){return i.default.get("common/express")},e.getCallBackUrlApi=function(t){return i.default.get("common/pay_key/"+t,{},{noAuth:!0})},e.getCartCounts=function(){return i.default.get("user/cart/count")},e.getCartList=function(){return i.default.get("user/cart/lst")},e.getCouponsOrderPrice=function(t,e){return i.default.get("coupons/order/"+t,e)},e.getOrderConfirm=function(t){return i.default.post("v2/order/check",t)},e.getOrderDetail=function(t){return i.default.get("order/detail/"+t)},e.getOrderList=function(t){return i.default.get("order/list",t)},e.getPayOrder=function(t){return i.default.get("order/status/"+t)},e.getReceiptOrder=function(t){return i.default.get("user/receipt/order/"+t)},e.groupOrderDetail=function(t){return i.default.get("order/group_order_detail/"+t)},e.groupOrderList=function(t){return i.default.get("order/group_order_list",t,{noAuth:!0})},e.ordeRefundReason=function(){return i.default.get("order/refund/reason")},e.orderAgain=function(t){return i.default.post("user/cart/again",t)},e.orderComment=function(t,e){return i.default.post("reply/"+t,e)},e.orderConfirm=function(t){return i.default.post("order/check",t)},e.orderCreate=function(t){return i.default.post("order/create",t,{noAuth:!0})},e.orderData=function(){return i.default.get("order/number")},e.orderDel=function(t){return i.default.post("order/del/"+t)},e.orderPay=function(t,e){return i.default.post("order/pay/"+t,e)},e.orderProduct=function(t){return i.default.get("reply/product/"+t)},e.orderRefundVerify=function(t){return i.default.post("order/refund/verify",t)},e.orderTake=function(t){return i.default.post("order/take/"+t)},e.postOrderComputed=function(t,e){return i.default.post("/order/computed/"+t,e)},e.presellOrderPay=function(t,e){return i.default.post("presell/pay/"+t,e)},e.receiptOrder=function(t){return i.default.get("user/receipt/order",t)},e.refundApply=function(t,e){return i.default.post("refund/apply/"+t,e,{noAuth:!0})},e.refundBackGoods=function(t,e){return i.default.post("refund/back_goods/"+t,e,{noAuth:!0})},e.refundBatch=function(t){return i.default.get("refund/batch_product/"+t,{noAuth:!0})},e.refundCancelApi=function(t){return i.default.post("refund/cancel/".concat(t))},e.refundDel=function(t){return i.default.post("refund/del/"+t,{noAuth:!0})},e.refundDetail=function(t){return i.default.get("refund/detail/"+t,{noAuth:!0})},e.refundExpress=function(t){return i.default.get("refund/express/"+t,{noAuth:!0})},e.refundList=function(t){return i.default.get("refund/list",t,{noAuth:!0})},e.refundMessage=function(){return i.default.get("common/refund_message",{noAuth:!0})},e.refundOrderExpress=function(t,e){return i.default.get("server/".concat(t,"/refund/express/").concat(e))},e.refundProduct=function(t,e){return i.default.get("refund/product/"+t,e,{noAuth:!0})},e.unOrderCancel=function(t){return i.default.post("order/cancel/"+t)},e.verifyCode=function(t){return i.default.get("order/verify_code/"+t)},n("99af");var i=o(n("b5ef"))},d82c:function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var i=n("a60b"),r=n("111c"),a=o(n("5fa0")),s=n("26cb"),u=n("4f1b"),d=o(n("5380")),c=o(n("f272")),l={components:{recommend:d.default,authorize:c.default},data:function(){return{orderId:"",refundId:"",merId:"",product:{},orderInfo:{},expressList:[],hostProduct:[],scroll:!1,isAuto:!1,isShowAuth:!1,page:1,limit:10}},computed:(0,u.configMap)({recommend_switch:0},(0,s.mapGetters)(["isLogin"])),onLoad:function(t){if(!t.orderId&&!t.refundId)return this.$util.Tips({title:"缺少订单号"});this.orderId=t.orderId,this.refundId=t.refundId,this.merId=t.merId,this.isLogin?(this.getExpress(),this.get_host_product()):(this.isAuto=!0,this.isShowAuth=!0)},onReady:function(){this.$nextTick((function(){var t=this,e=new a.default(".copy-data");e.on("success",(function(){t.$util.Tips({title:"复制成功"})}))}))},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product(),this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},copyOrderId:function(){uni.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this;t.orderId?(0,i.express)(t.orderId).then((function(e){var n=e.data.express||{};t.$set(t,"product",e.data.order.orderProduct[0]||{}),t.$set(t,"orderInfo",e.data.order),t.$set(t,"expressList",n||[])})):(0,i.refundOrderExpress)(t.merId,t.refundId).then((function(e){var n=e.data.express||{};t.$set(t,"product",e.data.refund.refundProduct[0].product||{}),t.$set(t,"orderInfo",e.data.refund),t.$set(t,"expressList",n||[])}))},get_host_product:function(){var t=this;t.scroll||(t.scroll=!0,(0,r.getProductHot)(t.page,t.limit).then((function(e){t.page++,t.scroll=e.data.list.length<t.limit,t.hostProduct=t.hostProduct.concat(e.data.list)})))}},onReachBottom:function(){this.get_host_product()},onPageScroll:function(){uni.$emit("scroll")}};e.default=l},e933:function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("5530")),r=o(n("ff56")),a=n("31bd"),s=n("5cac"),u=n("26cb"),d=o(n("dae1")),c=n("4f1b"),l=(o(n("8b6a")),n("713c")),f=getApp(),p={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},components:{},data:function(){return{title:"用户登录",info:"请登录，将为您提供更好的服务！",isWeixin:this.$wechat.isWeixin(),canUseGetUserProfile:!1,code:null,top:0,mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,editModal:!1}},computed:(0,i.default)((0,i.default)({},(0,u.mapGetters)(["isLogin","userInfo","viewColor"])),(0,c.configMap)(["routine_logo"])),watch:{isLogin:function(t){!0===t&&this.$emit("onLoadFun",this.userInfo)},isShowAuth:function(t){this.getCode(this.isShowAuth)}},created:function(){this.top=uni.getSystemInfoSync().windowHeight/2-70,wx.getUserProfile&&(this.canUseGetUserProfile=!0),this.setAuthStatus(),this.getCode(this.isShowAuth)},methods:{setAuthStatus:function(){},getCode:function(t){t&&(this.code=1)},toWecahtAuth:function(){(0,l.toLogin)(!0)},getUserProfile:function(){var t=this,e=this;d.default.getUserProfile().then((function(n){var o=n.userInfo;o.code=t.code,o.spread=f.globalData.spid,o.spread_code=f.globalData.code,(0,a.commonAuth)({auth:{type:"routine",auth:o}}).then((function(n){if(200!=n.data.status)return uni.setStorageSync("auth_token",n.data.result.key),uni.navigateTo({url:"/pages/users/login/index"});var o=n.data.result.expires_time-r.default.time();e.$store.commit("UPDATE_USERINFO",n.data.result.user),e.$store.commit("LOGIN",{token:n.data.result.token,time:o}),e.$store.commit("SETUID",n.data.result.user.uid),r.default.set(s.EXPIRES_TIME,n.data.result.expires_time,o),r.default.set(s.USER_INFO,n.data.result.user,o),t.$emit("onLoadFun",n.data.result.user),n.data.result.user.isNew&&t.mp_is_new&&(t.editModal=!0)})).catch((function(t){uni.hideLoading(),uni.showToast({title:t.message,icon:"none",duration:2e3})}))})).catch((function(t){uni.hideLoading()}))},close:function(){var t=getCurrentPages();t[t.length-1];this.$emit("authColse",!1)}}};e.default=p},eac8:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.Popup[data-v-b811ad2a]{flex:1;align-items:center;justify-content:center;width:%?500?%;background-color:#fff;position:fixed;top:%?500?%;left:%?125?%;z-index:1000}.Popup .logo-auth[data-v-b811ad2a]{z-index:-1;position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?150?%;height:%?150?%;display:flex;align-items:center;justify-content:center;border:%?8?% solid #fff;border-radius:50%;background:#fff}.Popup .image[data-v-b811ad2a]{height:%?42?%;margin-top:%?-54?%}.Popup .title[data-v-b811ad2a]{font-size:%?28?%;color:#000;text-align:center;margin-top:%?30?%;align-items:center;justify-content:center;width:%?500?%;display:flex}.Popup .tip[data-v-b811ad2a]{font-size:%?22?%;color:#555;padding:0 %?24?%;margin-top:%?25?%;display:flex;align-items:center;justify-content:center}.Popup .bottom .item[data-v-b811ad2a]{width:%?250?%;height:%?80?%;background-color:#eee;text-align:center;line-height:%?80?%;margin-top:%?54?%;font-size:%?24?%;color:#666}.Popup .bottom .item .text[data-v-b811ad2a]{font-size:%?24?%;color:#666}.Popup .bottom .item.on[data-v-b811ad2a]{width:%?500?%}.flex[data-v-b811ad2a]{display:flex;flex-direction:row}.Popup .bottom .item.grant[data-v-b811ad2a]{font-weight:700;background-color:#e93323;\n  /* background-color: var(--view-theme); */border-radius:0;padding:0}.Popup .bottom .item.grant .text[data-v-b811ad2a]{font-size:%?28?%;color:#fff}.mask[data-v-b811ad2a]{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);z-index:99}',""]),t.exports=e},f272:function(t,e,n){"use strict";n.r(e);var o=n("1390"),i=n("493d");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("81cb");var a=n("f0c5"),s=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"b811ad2a",null,!1,o["a"],void 0);e["default"]=s.exports},fff6:function(t,e,n){var o=n("2624");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("5392195a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);