(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_details-delivery"],{"04bf":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("a60b"),r=n("26cb"),a=n("8342"),s=i(n("f272")),u={components:{authorize:s.default},data:function(){return{isAuto:!1,isShowAuth:!1,orderId:"",code:"",status:0,deliveryInfo:{},expressList:[],domain:a.HTTP_REQUEST_URL}},computed:(0,r.mapGetters)(["isLogin"]),onLoad:function(e){if(!e.orderId)return this.$util.Tips({title:"缺少订单号"});this.orderId=e.orderId,this.isLogin?this.getExpress():(this.isAuto=!0,this.isShowAuth=!0)},onReady:function(){},methods:{onLoadFun:function(){this.getExpress(),this.isShowAuth=!1},authColse:function(e){this.isShowAuth=e},getExpress:function(){var e=this;(0,o.develiveryDetail)(e.orderId).then((function(t){var n=t.data.storeOrderStatus||{};e.$set(e,"deliveryInfo",t.data.storeOrder),e.$set(e,"code",t.data.finish_code),e.$set(e,"status",t.data.status),e.$set(e,"expressList",n||[])}))},call:function(){uni.makePhoneCall({phoneNumber:this.deliveryInfo.delivery_id})}}};t.default=u},"1c6c":function(e,t,n){"use strict";var i=n("d630"),o=n.n(i);o.a},"493d":function(e,t,n){"use strict";n.r(t);var i=n("e933"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},a296:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.Popup[data-v-ac292046]{flex:1;align-items:center;justify-content:center;width:%?500?%;background-color:#fff;position:fixed;top:%?500?%;left:%?125?%;z-index:1000}.Popup .logo-auth[data-v-ac292046]{z-index:-1;position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?150?%;height:%?150?%;display:flex;align-items:center;justify-content:center;border:%?8?% solid #fff;border-radius:50%;background:#fff}.Popup .image[data-v-ac292046]{height:%?42?%;margin-top:%?-54?%}.Popup .title[data-v-ac292046]{font-size:%?28?%;color:#000;text-align:center;margin-top:%?30?%;align-items:center;justify-content:center;width:%?500?%;display:flex}.Popup .tip[data-v-ac292046]{font-size:%?22?%;color:#555;padding:0 %?24?%;margin-top:%?25?%;display:flex;align-items:center;justify-content:center}.Popup .bottom .item[data-v-ac292046]{width:%?250?%;height:%?80?%;background-color:#eee;text-align:center;line-height:%?80?%;margin-top:%?54?%;font-size:%?24?%;color:#666}.Popup .bottom .item .text[data-v-ac292046]{font-size:%?24?%;color:#666}.Popup .bottom .item.on[data-v-ac292046]{width:%?500?%}.flex[data-v-ac292046]{display:flex;flex-direction:row}.Popup .bottom .item.grant[data-v-ac292046]{font-weight:700;background-color:#e93323;\n  /* background-color: var(--view-theme); */border-radius:0;padding:0}.Popup .bottom .item.grant .text[data-v-ac292046]{font-size:%?28?%;color:#fff}.mask[data-v-ac292046]{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);z-index:99}',""]),e.exports=t},a60b:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.applyInvoiceApi=function(e,t){return o.default.post("order/receipt/".concat(e),t)},t.cartDel=function(e){return o.default.post("user/cart/delete",e)},t.changeCartNum=function(e,t){return o.default.post("user/cart/change/"+e,t)},t.createOrder=function(e){return o.default.post("v2/order/create",e,{noAuth:!0})},t.develiveryDetail=function(e){return o.default.get("order/delivery/".concat(e))},t.express=function(e){return o.default.post("order/express/"+e)},t.expressList=function(){return o.default.get("common/express")},t.getCallBackUrlApi=function(e){return o.default.get("common/pay_key/"+e,{},{noAuth:!0})},t.getCartCounts=function(){return o.default.get("user/cart/count")},t.getCartList=function(){return o.default.get("user/cart/lst")},t.getCouponsOrderPrice=function(e,t){return o.default.get("coupons/order/"+e,t)},t.getOrderConfirm=function(e){return o.default.post("v2/order/check",e)},t.getOrderDetail=function(e){return o.default.get("order/detail/"+e)},t.getOrderList=function(e){return o.default.get("order/list",e)},t.getPayOrder=function(e){return o.default.get("order/status/"+e)},t.getReceiptOrder=function(e){return o.default.get("user/receipt/order/"+e)},t.groupOrderDetail=function(e){return o.default.get("order/group_order_detail/"+e)},t.groupOrderList=function(e){return o.default.get("order/group_order_list",e,{noAuth:!0})},t.ordeRefundReason=function(){return o.default.get("order/refund/reason")},t.orderAgain=function(e){return o.default.post("user/cart/again",e)},t.orderComment=function(e,t){return o.default.post("reply/"+e,t)},t.orderConfirm=function(e){return o.default.post("order/check",e)},t.orderCreate=function(e){return o.default.post("order/create",e,{noAuth:!0})},t.orderData=function(){return o.default.get("order/number")},t.orderDel=function(e){return o.default.post("order/del/"+e)},t.orderPay=function(e,t){return o.default.post("order/pay/"+e,t)},t.orderProduct=function(e){return o.default.get("reply/product/"+e)},t.orderRefundVerify=function(e){return o.default.post("order/refund/verify",e)},t.orderTake=function(e){return o.default.post("order/take/"+e)},t.postOrderComputed=function(e,t){return o.default.post("/order/computed/"+e,t)},t.presellOrderPay=function(e,t){return o.default.post("presell/pay/"+e,t)},t.receiptOrder=function(e){return o.default.get("user/receipt/order",e)},t.refundApply=function(e,t){return o.default.post("refund/apply/"+e,t,{noAuth:!0})},t.refundBackGoods=function(e,t){return o.default.post("refund/back_goods/"+e,t,{noAuth:!0})},t.refundBatch=function(e){return o.default.get("refund/batch_product/"+e,{noAuth:!0})},t.refundCancelApi=function(e){return o.default.post("refund/cancel/".concat(e))},t.refundDel=function(e){return o.default.post("refund/del/"+e,{noAuth:!0})},t.refundDetail=function(e){return o.default.get("refund/detail/"+e,{noAuth:!0})},t.refundExpress=function(e){return o.default.get("refund/express/"+e,{noAuth:!0})},t.refundList=function(e){return o.default.get("refund/list",e,{noAuth:!0})},t.refundMessage=function(){return o.default.get("common/refund_message",{noAuth:!0})},t.refundOrderExpress=function(e,t){return o.default.get("server/".concat(e,"/refund/express/").concat(t))},t.refundProduct=function(e,t){return o.default.get("refund/product/"+e,t,{noAuth:!0})},t.unOrderCancel=function(e){return o.default.post("order/cancel/"+e)},t.verifyCode=function(e){return o.default.get("order/verify_code/"+e)},n("99af");var o=i(n("b5ef"))},aaa8:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.logistics[data-v-1a51e16e]{padding:0 %?30?%}.order_head[data-v-1a51e16e]{text-align:center;color:#282828;font-size:%?24?%;border-bottom:1px dashed #d8d8d8;padding-bottom:%?40?%}.order_head .order_number[data-v-1a51e16e]{font-size:%?66?%;font-weight:700}.order_delivery[data-v-1a51e16e]{padding:%?30?%;display:flex;justify-content:space-between;align-items:center}.order_delivery .delivery_info[data-v-1a51e16e]{width:%?300?%;display:flex;justify-content:space-between;align-items:center}.order_delivery .delivery_info .delivery_name[data-v-1a51e16e]{color:#666}.order_delivery .delivery_info .delivery_name_not[data-v-1a51e16e]{font-weight:700}.order_delivery .delivery_info uni-image[data-v-1a51e16e], .order_delivery .delivery_info uni-image[data-v-1a51e16e]{width:%?80?%;height:%?80?%}.order_delivery .delivery_phone[data-v-1a51e16e]{width:%?44?%;height:%?44?%;border-radius:100%;background:#e7e7e7;text-align:center;line-height:%?44?%;font-size:%?20?%;color:#666}.logistics .logisticsCon[data-v-1a51e16e]{margin:%?12?% 0}.logistics .logisticsCon .company[data-v-1a51e16e]{background-color:#fff;padding:%?30?% 0;border-radius:%?16?%}.order_logistic[data-v-1a51e16e]{background-color:#fff;margin-top:%?30?%;border-radius:%?16?%;padding:%?30?%}.recip_info[data-v-1a51e16e]{border-bottom:1px dashed #d8d8d8;padding-bottom:%?30?%}.recip_info .title[data-v-1a51e16e]{font-size:%?30?%;font-weight:700;color:#282828;margin-bottom:%?30?%}.recip_info .items ~ .items[data-v-1a51e16e]{margin-top:%?24?%}.recip_info .items .conter[data-v-1a51e16e]{color:#868686;width:%?460?%;text-align:right}.logistic_count[data-v-1a51e16e]{margin-top:%?30?%}.logistics .logisticsCon .item[data-v-1a51e16e]{padding:0 %?40?%;position:relative}.logistics .logisticsCon .item .circular[data-v-1a51e16e]{width:%?20?%;height:%?20?%;border-radius:50%;position:absolute;top:%?-1?%;left:%?31.5?%;background-color:#ddd}.logistics .logisticsCon .item .circular.on[data-v-1a51e16e]{color:#e93323;background-color:initial;font-size:%?30?%;left:%?30?%}.logistics .logisticsCon .item .text.on-font[data-v-1a51e16e]{color:#282828;font-size:%?30?%;font-weight:700}.logistics .logisticsCon .item .text .data.on-font[data-v-1a51e16e]{color:#282828;font-weight:400}.logistics .logisticsCon .item .text[data-v-1a51e16e]{font-size:%?26?%;color:#666;width:%?615?%;border-left:1px solid #e6e6e6;padding:0 0 %?60?% %?38?%}.logistics .logisticsCon .item .text.on[data-v-1a51e16e]{border-left-color:#f8c1bd}.logistics .logisticsCon .item .text .data[data-v-1a51e16e]{font-size:%?24?%;color:#999;margin-top:%?10?%}.logistics .logisticsCon .item .text .data .time[data-v-1a51e16e]{margin-left:%?15?%}',""]),e.exports=t},c15c:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.isShowAuth&&e.code?n("v-uni-view",{staticClass:"mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}}):e._e(),e.isShowAuth&&e.code?n("v-uni-view",{staticClass:"Popup",style:"top:"+e.top+"px;"},[n("v-uni-view",{staticClass:"logo-auth"},[n("v-uni-image",{staticClass:"image",attrs:{src:e.routine_logo,mode:"aspectFit"}})],1),e.isWeixin?n("v-uni-text",{staticClass:"title"},[e._v("授权提醒")]):n("v-uni-text",{staticClass:"title"},[e._v(e._s(e.title))]),e.isWeixin?n("v-uni-text",{staticClass:"tip"},[e._v("请授权头像等信息，以便为您提供更好的服务！")]):n("v-uni-text",{staticClass:"tip"},[e._v(e._s(e.info))]),n("v-uni-view",{staticClass:"bottom flex"},[n("v-uni-text",{staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}},[e._v("随便逛逛")]),n("v-uni-button",{staticClass:"item grant",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toWecahtAuth.apply(void 0,arguments)}}},[e.isWeixin?n("v-uni-text",{staticClass:"text"},[e._v("去授权")]):n("v-uni-text",{staticClass:"text"},[e._v("去登录")])],1)],1)],1):e._e()],1)},o=[]},d2d2:function(e,t,n){"use strict";n.r(t);var i=n("d7bb0"),o=n("deb0");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("e1631");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"1a51e16e",null,!1,i["a"],void 0);t["default"]=s.exports},d630:function(e,t,n){var i=n("a296");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("8f383f98",i,!0,{sourceMap:!1,shadowMode:!1})},d7bb0:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"logistics"},[n("v-uni-view",{staticClass:"logisticsCon"},[n("v-uni-view",{staticClass:"company"},[0==e.status||2==e.status?n("v-uni-view",{staticClass:"order_head"},[n("v-uni-view",{staticClass:"order_number"},[e._v(e._s(0==e.status?"待接单":"待取货"))]),n("v-uni-view",{},[e._v("等待配送员接单完成后开始派送")])],1):e._e(),e.code&&0!=e.status&&2!=e.status?n("v-uni-view",{staticClass:"order_head"},[n("v-uni-view",{staticClass:"order_number"},[e._v(e._s(e.code))]),n("v-uni-view",[e._v("稍后请将收货码告诉配送员")])],1):e._e(),n("v-uni-view",{staticClass:"order_delivery"},[n("v-uni-view",{staticClass:"delivery_info"},[n("v-uni-view",{staticClass:"delivery_pic"},[n("v-uni-image",{attrs:{src:e.domain+"/static/images/delivery_man.png"}})],1),e.deliveryInfo.delivery_id?n("v-uni-view",{staticClass:"delivery_name"},[n("v-uni-view",[e._v(e._s(e.deliveryInfo.delivery_name)),n("br"),e._v(e._s(e.deliveryInfo.delivery_id))])],1):n("v-uni-view",{staticClass:"delivery_name_not"},[e._v("配送员未接单")])],1),n("v-uni-view",{staticClass:"delivery_phone iconfont",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.call.apply(void 0,arguments)}}},[e._v("")])],1)],1),n("v-uni-view",{staticClass:"order_logistic"},[n("v-uni-view",{staticClass:"recip_info"},[n("v-uni-view",{staticClass:"title"},[e._v("收件人信息")]),n("v-uni-view",[n("v-uni-view",{staticClass:"items acea-row row-between"},[n("v-uni-view",[e._v("姓名：")]),n("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.deliveryInfo.real_name))])],1),n("v-uni-view",{staticClass:"items acea-row row-between"},[n("v-uni-view",[e._v("手机号：")]),n("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.deliveryInfo.user_phone))])],1),n("v-uni-view",{staticClass:"items acea-row row-between"},[n("v-uni-view",[e._v("地址：")]),n("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.deliveryInfo.user_address))])],1)],1)],1),n("v-uni-view",{staticClass:"logistic_count"},e._l(e.expressList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"circular",class:0===i?"on iconfont icon-xuanzhong1":""}),n("v-uni-view",{staticClass:"text",class:0===i?"on-font on":""},[n("v-uni-view",[e._v(e._s(t.change_message))]),n("v-uni-view",{staticClass:"data",class:0===i?"on-font on":""},[e._v(e._s(t.change_time))])],1)],1)})),1)],1)],1)],1),n("authorize",{attrs:{isAuto:e.isAuto,isShowAuth:e.isShowAuth},on:{onLoadFun:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoadFun.apply(void 0,arguments)},authColse:function(t){arguments[0]=t=e.$handleEvent(t),e.authColse.apply(void 0,arguments)}}})],1)},o=[]},deb0:function(e,t,n){"use strict";n.r(t);var i=n("04bf"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},e00d:function(e,t,n){var i=n("aaa8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("0d9f978a",i,!0,{sourceMap:!1,shadowMode:!1})},e1631:function(e,t,n){"use strict";var i=n("e00d"),o=n.n(i);o.a},e933:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("5530")),r=i(n("ff56")),a=n("31bd"),s=n("5cac"),u=n("26cb"),d=i(n("dae1")),c=n("4f1b"),l=(i(n("8b6a")),n("713c")),f=getApp(),v={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},components:{},data:function(){return{title:"用户登录",info:"请登录，将为您提供更好的服务！",isWeixin:this.$wechat.isWeixin(),canUseGetUserProfile:!1,code:null,top:0,mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,editModal:!1}},computed:(0,o.default)((0,o.default)({},(0,u.mapGetters)(["isLogin","userInfo","viewColor"])),(0,c.configMap)(["routine_logo"])),watch:{isLogin:function(e){!0===e&&this.$emit("onLoadFun",this.userInfo)},isShowAuth:function(e){this.getCode(this.isShowAuth)}},created:function(){this.top=uni.getSystemInfoSync().windowHeight/2-70,wx.getUserProfile&&(this.canUseGetUserProfile=!0),this.setAuthStatus(),this.getCode(this.isShowAuth)},methods:{setAuthStatus:function(){},getCode:function(e){e&&(this.code=1)},toWecahtAuth:function(){(0,l.toLogin)(!0)},getUserProfile:function(){var e=this,t=this;d.default.getUserProfile().then((function(n){var i=n.userInfo;i.code=e.code,i.spread=f.globalData.spid,i.spread_code=f.globalData.code,(0,a.commonAuth)({auth:{type:"routine",auth:i}}).then((function(n){if(200!=n.data.status)return uni.setStorageSync("auth_token",n.data.result.key),uni.navigateTo({url:"/pages/users/login/index"});var i=n.data.result.expires_time-r.default.time();t.$store.commit("UPDATE_USERINFO",n.data.result.user),t.$store.commit("LOGIN",{token:n.data.result.token,time:i}),t.$store.commit("SETUID",n.data.result.user.uid),r.default.set(s.EXPIRES_TIME,n.data.result.expires_time,i),r.default.set(s.USER_INFO,n.data.result.user,i),e.$emit("onLoadFun",n.data.result.user),n.data.result.user.isNew&&e.mp_is_new&&(e.editModal=!0)})).catch((function(e){uni.hideLoading(),uni.showToast({title:e.message,icon:"none",duration:2e3})}))})).catch((function(e){uni.hideLoading()}))},close:function(){var e=getCurrentPages();e[e.length-1];this.$emit("authColse",!1)}}};t.default=v},f272:function(e,t,n){"use strict";n.r(t);var i=n("c15c"),o=n("493d");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("1c6c");var a=n("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"ac292046",null,!1,i["a"],void 0);t["default"]=s.exports}}]);