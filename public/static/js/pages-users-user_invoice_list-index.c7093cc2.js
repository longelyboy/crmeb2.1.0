(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_invoice_list-index"],{"1f3e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"},style:t.viewColor},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image pictruea",attrs:{src:!0===t.homeActive?"/static/images/navbtn_open.gif":"/static/images/navbtn_close.gif"}})],1)],1)],1)],1)},r=[]},"32e8":function(t,e,i){"use strict";i.r(e);var n=i("ae5c"),r=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"458b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-6d33dd08]{width:%?130?%;height:%?120?%}\n/*返回主页按钮*/.home[data-v-6d33dd08]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-6d33dd08]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-6d33dd08]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)}.home .homeCon .iconfont[data-v-6d33dd08]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-6d33dd08]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme);box-shadow:0 %?5?% %?12?% rgba(0,0,0,.5)}.home .pictrue .image[data-v-6d33dd08]{width:100%;height:100%}.pictruea[data-v-6d33dd08]{width:100%;height:100%;display:block;object-fit:cover;vertical-align:middle}",""]),t.exports=e},"4aa6":function(t,e,i){var n=i("d60f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("23ef825a",n,!0,{sourceMap:!1,shadowMode:!1})},"6cb5":function(t,e,i){var n=i("458b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("545af455",n,!0,{sourceMap:!1,shadowMode:!1})},7351:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.viewColor},[n("v-uni-view",{staticClass:"acea-row nav"},[n("v-uni-view",{staticClass:"acea-row row-center-wrapper",class:{on:1==t.tabCur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(1)}}},[t._v("发票记录")]),n("v-uni-view",{staticClass:"acea-row row-center-wrapper",class:{on:2==t.tabCur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(2)}}},[t._v("抬头管理")])],1),1==t.tabCur?[t.orderList.length?n("v-uni-view",{staticClass:"store-list"},t._l(t.orderList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"hd"},[e.storeOrder.orderProduct[0].cart_info.productAttr.image?n("v-uni-image",{attrs:{src:e.storeOrder.orderProduct[0].cart_info.productAttr.image,mode:""}}):n("v-uni-image",{attrs:{src:e.storeOrder.orderProduct[0].cart_info.product.image,mode:""}}),n("v-uni-view",{staticClass:"line2 name"},[t._v(t._s(e.storeOrder.orderProduct[0].cart_info.product.store_name))])],1),n("v-uni-view",{staticClass:"bd"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(1==e.receipt_info.receipt_type?"普通发票":"专用发票"))]),n("v-uni-view",{staticClass:"time"},[t._v("申请时间 "+t._s(e.create_time))]),n("v-uni-view",{staticClass:"price"},[n("v-uni-text",[t._v("￥")]),t._v(t._s(e.order_price))],1)],1),n("v-uni-view",{staticClass:"ft"},[n("v-uni-text",[t._v(t._s(t._f("filterTxt")(e.status)))]),1==e.storeOrder.paid?n("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetail(e)}}},[t._v("查看详情")]):t._e()],1)],1)})),1):n("v-uni-view",{staticClass:"nothing"},[n("v-uni-image",{attrs:{src:i("b723")}}),n("v-uni-view",{staticClass:"nothing_text"},[t._v("您还没有发票记录哟~")])],1)]:t._e(),2==t.tabCur?[t.invoiceList&&t.invoiceList.length?n("v-uni-view",{staticClass:"list"},t._l(t.invoiceList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row item-hd"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.receipt_title))]),e.is_default?n("v-uni-view",{staticClass:"label"},[t._v("默认")]):t._e()],1),n("v-uni-view",{staticClass:"type",class:1==e.receipt_type?"":"special"},[t._v(t._s(1==e.receipt_type?"普通发票":"专用发票"))])],1),n("v-uni-view",{staticClass:"item-bd"},[1==e.receipt_title_type?n("v-uni-view",{staticClass:"cell"},[t._v("邮箱 "+t._s(e.email))]):n("v-uni-view",[n("v-uni-view",{staticClass:"cell"},[t._v("联系电话 "+t._s(e.tel))]),n("v-uni-view",{staticClass:"cell"},[t._v("企业税号 "+t._s(e.duty_paragraph))])],1)],1),n("v-uni-view",{staticClass:"acea-row row-right item-ft"},[n("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editInvoice(e.user_receipt_id)}}},[n("v-uni-text",{staticClass:"iconfont icon-bianji"}),t._v("编辑")],1),n("v-uni-view",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deleteInvoice(e.user_receipt_id,i)}}},[n("v-uni-text",{staticClass:"iconfont icon-shanchu"}),t._v("删除")],1)],1)],1)})),1):n("v-uni-view",{staticClass:"nothing"},[n("v-uni-image",{attrs:{src:i("b723")}}),n("v-uni-view",{staticClass:"nothing_text"},[t._v("您还没有添加发票信息哟~")])],1),n("v-uni-button",{staticClass:"add-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addInvoice.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-fapiao"}),t._v("添加新发票抬头")],1)]:t._e(),n("home")],2)},r=[]},"92b0":function(t,e,i){"use strict";var n=i("6cb5"),r=i.n(n);r.a},"9ba4":function(t,e,i){"use strict";i.r(e);var n=i("9d56"),r=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"9d56":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af"),i("a434");var r=n(i("a394")),o=i("26cb"),a=i("c6c3"),s=i("a60b"),c={components:{home:r.default},props:{},filters:{filterTxt:function(t){return{0:"未开票",1:"已开票",10:"未寄出"}[t]}},data:function(){return{tabCur:1,invoiceList:[],query:{page:1,limit:20},loading:!1,finished:!1,isScroll:!1,orderList:[],orderPage:1}},computed:(0,o.mapGetters)(["isLogin","viewColor"]),watch:{loading:function(t){t?uni.showLoading({title:"加载中"}):uni.hideLoading()}},onLoad:function(t){if(t.type)this.tabCur=t.type;else try{this.tabCur=uni.getStorageSync("user_invoice_list")?uni.getStorageSync("user_invoice_list"):1,uni.removeStorageSync("user_invoice_list")}catch(e){}},onShow:function(){this.orderPage=1,this.orderList=[],this.query.page=1,this.invoiceList=[],this.finished=!1,this.isScroll=!1,this.receiptOrder(),this.getInvoiceList()},methods:{goOrderDetail:function(t){uni.navigateTo({url:"/pages/users/user_invoice_order/index?order_id=".concat(t.storeOrder.group_order_id,"&invoice_id=").concat(t.order_receipt_id)})},tab:function(t){this.tabCur!==t&&(this.tabCur=t,uni.setStorageSync("user_invoice_list",t))},receiptOrder:function(){var t=this;this.isScroll||(0,s.receiptOrder)({page:this.orderPage,limit:this.query.limit}).then((function(e){t.orderList=t.orderList.concat(e.data.list),t.isScroll=t.orderList.length>=e.data.count,t.orderPage++}))},getInvoiceList:function(t){var e=this;t&&(this.invoiceList=[],this.query.page=1,this.finished=!1),this.loading||this.finished||(this.loading=!0,(0,a.invoice)().then((function(t){var i=t.data;e.loading=!1,e.invoiceList=t.data,e.finished=i.length<e.query.limit,e.query.page++})).catch((function(t){e.loading=!1,e.$util.Tips({title:t})})))},addInvoice:function(){uni.navigateTo({url:"/pages/users/user_invoice_form/index"})},editInvoice:function(t){uni.navigateTo({url:"/pages/users/user_invoice_form/index?id=".concat(t)})},deleteInvoice:function(t,e){var i=this;uni.showModal({content:"删除该发票？",confirmColor:"#E93323",success:function(n){n.confirm&&(0,a.invoiceDelete)(t).then((function(){i.$util.Tips({title:"删除成功",icon:"success"},(function(){i.invoiceList.splice(e,1)}))})).catch((function(t){return i.$util.Tips({title:t})}))}})}},onReachBottom:function(){this.receiptOrder()}};e.default=c},a394:function(t,e,i){"use strict";i.r(e);var n=i("1f3e"),r=i("32e8");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("92b0");var a=i("f0c5"),s=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"6d33dd08",null,!1,n["a"],void 0);e["default"]=s.exports},a60b:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.applyInvoiceApi=function(t,e){return r.default.post("order/receipt/".concat(t),e)},e.cartDel=function(t){return r.default.post("user/cart/delete",t)},e.changeCartNum=function(t,e){return r.default.post("user/cart/change/"+t,e)},e.createOrder=function(t){return r.default.post("v2/order/create",t,{noAuth:!0})},e.develiveryDetail=function(t){return r.default.get("order/delivery/".concat(t))},e.express=function(t){return r.default.post("order/express/"+t)},e.expressList=function(){return r.default.get("common/express")},e.getCallBackUrlApi=function(t){return r.default.get("common/pay_key/"+t,{},{noAuth:!0})},e.getCartCounts=function(){return r.default.get("user/cart/count")},e.getCartList=function(){return r.default.get("user/cart/lst")},e.getCouponsOrderPrice=function(t,e){return r.default.get("coupons/order/"+t,e)},e.getOrderConfirm=function(t){return r.default.post("v2/order/check",t)},e.getOrderDetail=function(t){return r.default.get("order/detail/"+t)},e.getOrderList=function(t){return r.default.get("order/list",t)},e.getPayOrder=function(t){return r.default.get("order/status/"+t)},e.getReceiptOrder=function(t){return r.default.get("user/receipt/order/"+t)},e.groupOrderDetail=function(t){return r.default.get("order/group_order_detail/"+t)},e.groupOrderList=function(t){return r.default.get("order/group_order_list",t,{noAuth:!0})},e.ordeRefundReason=function(){return r.default.get("order/refund/reason")},e.orderAgain=function(t){return r.default.post("user/cart/again",t)},e.orderComment=function(t,e){return r.default.post("reply/"+t,e)},e.orderConfirm=function(t){return r.default.post("order/check",t)},e.orderCreate=function(t){return r.default.post("order/create",t,{noAuth:!0})},e.orderData=function(){return r.default.get("order/number")},e.orderDel=function(t){return r.default.post("order/del/"+t)},e.orderPay=function(t,e){return r.default.post("order/pay/"+t,e)},e.orderProduct=function(t){return r.default.get("reply/product/"+t)},e.orderRefundVerify=function(t){return r.default.post("order/refund/verify",t)},e.orderTake=function(t){return r.default.post("order/take/"+t)},e.postOrderComputed=function(t,e){return r.default.post("/order/computed/"+t,e)},e.presellOrderPay=function(t,e){return r.default.post("presell/pay/"+t,e)},e.receiptOrder=function(t){return r.default.get("user/receipt/order",t)},e.refundApply=function(t,e){return r.default.post("refund/apply/"+t,e,{noAuth:!0})},e.refundBackGoods=function(t,e){return r.default.post("refund/back_goods/"+t,e,{noAuth:!0})},e.refundBatch=function(t){return r.default.get("refund/batch_product/"+t,{noAuth:!0})},e.refundCancelApi=function(t){return r.default.post("refund/cancel/".concat(t))},e.refundDel=function(t){return r.default.post("refund/del/"+t,{noAuth:!0})},e.refundDetail=function(t){return r.default.get("refund/detail/"+t,{noAuth:!0})},e.refundExpress=function(t){return r.default.get("refund/express/"+t,{noAuth:!0})},e.refundList=function(t){return r.default.get("refund/list",t,{noAuth:!0})},e.refundMessage=function(){return r.default.get("common/refund_message",{noAuth:!0})},e.refundOrderExpress=function(t,e){return r.default.get("server/".concat(t,"/refund/express/").concat(e))},e.refundProduct=function(t,e){return r.default.get("refund/product/"+t,e,{noAuth:!0})},e.unOrderCancel=function(t){return r.default.post("order/cancel/"+t)},e.verifyCode=function(t){return r.default.get("order/verify_code/"+t)},i("99af");var r=n(i("b5ef"))},ab8a:function(t,e,i){"use strict";i.r(e);var n=i("7351"),r=i("9ba4");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("ea82");var a=i("f0c5"),s=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"8c5ef054",null,!1,n["a"],void 0);e["default"]=s.exports},ae5c:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),r=i("8342"),o={name:"Home",props:{},data:function(){return{domain:r.HTTP_REQUEST_URL,top:"",bottom:""}},computed:(0,n.mapGetters)(["homeActive","viewColor","keyColor"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY,this.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=o},b723:function(t,e,i){t.exports=i.p+"static/img/noInvoice.10bd0fdf.png"},d60f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.nav[data-v-8c5ef054]{position:fixed;top:0;left:0;z-index:9;width:100%;height:%?90?%;background-color:#fff}.nav .acea-row[data-v-8c5ef054]{flex:1;border-top:%?3?% solid transparent;border-bottom:%?3?% solid transparent;font-size:%?30?%;color:#282828}.nav .on[data-v-8c5ef054]{border-bottom-color:var(--view-theme);color:var(--view-theme)}.list[data-v-8c5ef054]{padding:%?14?% %?32?%;margin-top:%?90?%;padding-bottom:%?220?%}.list .item[data-v-8c5ef054]{padding:%?28?% %?32?%;background-color:#fff}.list .item ~ .item[data-v-8c5ef054]{margin-top:%?14?%}.list .item-hd .acea-row[data-v-8c5ef054]{flex:1;min-width:0}.list .name[data-v-8c5ef054]{font-weight:600;font-size:%?30?%;color:#282828;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list .label[data-v-8c5ef054]{width:%?70?%;height:%?28?%;border:%?1?% solid var(--view-theme);margin-left:%?18?%;font-size:%?20?%;line-height:%?26?%;text-align:center;color:var(--view-theme)}.list .type[data-v-8c5ef054]{width:%?124?%;height:%?42?%;background-color:#fcf0e0;font-size:%?24?%;line-height:%?42?%;text-align:center;color:#d67300}.list .type.special[data-v-8c5ef054]{background-color:var(--view-minorColor);color:var(--view-theme)}.list .item-bd[data-v-8c5ef054]{margin-top:%?18?%}.list .cell[data-v-8c5ef054]{font-size:%?26?%;color:#666}.list .cell ~ .cell[data-v-8c5ef054]{margin-top:%?12?%}.list .item-ft[data-v-8c5ef054]{margin-top:%?11?%}.list .btn[data-v-8c5ef054]{font-size:%?26?%;color:#282828;cursor:pointer}.list .btn ~ .btn[data-v-8c5ef054]{margin-left:%?35?%}.list .btn .iconfont[data-v-8c5ef054]{margin-right:%?10?%;font-size:%?24?%;color:#000}.add-btn[data-v-8c5ef054]{position:fixed;right:%?30?%;bottom:%?20?%;left:%?30?%;z-index:9;height:%?86?%;border-radius:%?43?%;background-color:var(--view-theme);font-size:%?30?%;line-height:%?86?%;color:#fff}.nothing[data-v-8c5ef054]{margin-top:%?200?%;text-align:center}.nothing_text[data-v-8c5ef054]{margin-top:%?20?%;color:#999}.store-list[data-v-8c5ef054]{margin-top:%?110?%;padding:0 %?30?% %?30?%}.store-list .item[data-v-8c5ef054]{padding:%?30?%;margin-bottom:%?20?%;background:#fff;border-radius:%?6?%}.store-list .item .hd[data-v-8c5ef054]{display:flex}.store-list .item .hd uni-image[data-v-8c5ef054]{width:%?78?%;height:%?78?%}.store-list .item .hd .name[data-v-8c5ef054]{flex:1;margin-left:%?24?%;line-height:1.8;font-size:%?26?%;color:#282828}.store-list .item .bd[data-v-8c5ef054]{position:relative;padding:%?25?% %?36?%;margin-top:%?36?%;background:#f5f6f7;border-radius:%?20?%}.store-list .item .bd .title[data-v-8c5ef054]{font-size:%?26?%;color:#282828;font-weight:700}.store-list .item .bd .time[data-v-8c5ef054]{margin-top:%?8?%;font-size:%?26?%;color:#818181}.store-list .item .bd .price[data-v-8c5ef054]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#282828;font-size:%?32?%;font-weight:700}.store-list .item .bd .price uni-text[data-v-8c5ef054]{font-weight:400;font-size:%?24?%}.store-list .item .ft[data-v-8c5ef054]{display:flex;align-items:center;justify-content:space-between;margin-top:%?39?%}.store-list .item .ft uni-text[data-v-8c5ef054]{color:#282828;font-size:%?28?%;font-weight:700}.store-list .item .ft .btn[data-v-8c5ef054]{display:flex;align-items:center;justify-content:center;width:%?150?%;height:%?57?%;background:#fff;border:1px solid #707070;border-radius:%?29?%;font-size:%?26?%}',""]),t.exports=e},ea82:function(t,e,i){"use strict";var n=i("4aa6"),r=i.n(n);r.a}}]);