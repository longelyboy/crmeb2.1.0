(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_details-stay"],{2322:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{style:e.viewColor},[a("v-uni-view",{staticClass:"order-details"},[e.orderInfo.orderList&&2!=e.orderInfo.orderList[0].activity_type?a("v-uni-view",[a("v-uni-view",{staticClass:"header acea-row row-middle"},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:e.imgUrl+"/static/order_1.gif"}})],1),a("v-uni-view",{staticClass:"data"},[a("v-uni-view",{staticClass:"state"},[e._v("请在"+e._s(e.orderInfo.cancel_time)+"前完成支付!")]),a("v-uni-view",[e._v(e._s(e.orderInfo.add_time_y)),a("v-uni-text",{staticClass:"time"},[e._v(e._s(e.orderInfo.create_time))])],1)],1)],1),a("v-uni-view",{staticClass:"nav"},[a("v-uni-view",{staticClass:"navCon acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"on"},[e._v("待付款")]),a("v-uni-view",[e._v("待发货")]),a("v-uni-view",[e._v("待收货")]),a("v-uni-view",[e._v("待评价")]),a("v-uni-view",[e._v("已完成")])],1),a("v-uni-view",{staticClass:"progress acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"iconfont icon-webicon318 t-color"}),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"iconfont icon-yuandianxiao"}),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"iconfont icon-yuandianxiao"}),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"iconfont icon-yuandianxiao"}),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"iconfont icon-yuandianxiao"})],1)],1)],1):a("v-uni-view",{staticClass:"presell_bg_header"},[a("v-uni-view",{staticClass:"header presell_header",style:{"background-image":"url("+e.domain+"/static/diy/presell_header"+e.keyColor+".png)"}},[e.orderInfo.orderList?a("v-uni-view",{staticClass:"presell_payment"},[a("v-uni-text",{staticClass:"iconfont icon-shijian1"}),e._v(e._s(1==e.orderInfo.orderList[0].orderProduct[0].cart_info.productPresell.presell_type?"待支付":"待付定金"))],1):e._e(),a("v-uni-view",{staticClass:"data"},[a("v-uni-view",{staticClass:"state"},[e._v("请在"+e._s(e.orderInfo.cancel_time)+"前完成支付,超时订单将自动取消")])],1)],1)],1),a("v-uni-view",[e.orderInfo.orderList&&2!=e.orderInfo.orderList[0].order_type?a("v-uni-view",{staticClass:"address"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.orderInfo.real_name)),a("v-uni-text",{staticClass:"phone"},[e._v(e._s(e.orderInfo.user_phone))])],1),a("v-uni-view",[e._v(e._s(e.orderInfo.user_address))])],1):e._e(),a("v-uni-view",{staticClass:"line"},[a("v-uni-image",{attrs:{src:e.imgUrl+"/static/images/line.jpg"}})],1)],1),e._l(e.orderInfo.orderList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"order-wrapper"},[a("v-uni-view",{staticClass:"title",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goStore(t)}}},[e._v(e._s(t.merchant.mer_name)),a("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),a("v-uni-view",{staticClass:"goods-box"},e._l(t.orderProduct,(function(i,r){return a("v-uni-view",{key:i.order_product_id,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goProduct(i)}}},[2===t.activity_type?a("v-uni-view",[a("v-uni-view",{staticClass:"item"},[a("v-uni-image",{attrs:{src:i.cart_info.product.image}}),a("v-uni-view",{staticClass:"info-box"},[a("v-uni-view",{staticClass:"name line1"},[a("v-uni-text",{staticClass:"event_name event_bg"},[e._v("预售")]),e._v(e._s(i.cart_info.product.store_name))],1),a("v-uni-view",{staticClass:"msg"},[e._v(e._s(i.cart_info.productAttr.sku))]),a("v-uni-view",{staticClass:"event_ship event_color"},[e._v("发货时间："),1===i.cart_info.productPresell.presell_type?a("v-uni-text",[e._v(e._s(1===i.cart_info.productPresell.delivery_type?"支付成功后":"预售结束后")+e._s(i.cart_info.productPresell.delivery_day)+"天内")]):e._e(),2===i.cart_info.productPresell.presell_type?a("v-uni-text",[e._v(e._s(1===i.cart_info.productPresell.delivery_type?"支付尾款后":"预售结束后")+e._s(i.cart_info.productPresell.delivery_day)+"天内")]):e._e()],1)],1),a("v-uni-view",{staticClass:"num"},[a("v-uni-text",{staticClass:"font-color"},[e._v("￥"+e._s(i.cart_info.productPresellAttr.presell_price))]),a("br"),e._v("x"+e._s(i.product_num))],1)],1),1!=i.cart_info.productPresell.presell_type?a("v-uni-view",{staticClass:"event_progress"},[a("v-uni-view",{staticClass:"progress_list"},[a("v-uni-view",{staticClass:"progress_name"},[e._v("阶段一： 等待买家付款")]),a("v-uni-view",{staticClass:"progress_price"},[e._v("商品定金"),a("v-uni-text",{staticClass:"align_right"},[e._v("￥"+e._s(t.pay_price))])],1),a("v-uni-view",{staticClass:"progress_pay"},[e._v("定金需付款"),a("v-uni-text",{staticClass:"align_right gColor"},[e._v("￥"+e._s(t.pay_price))])],1)],1),a("v-uni-view",{staticClass:"progress_list"},[a("v-uni-view",{staticClass:"progress_name"},[e._v("阶段二： 未开始")]),a("v-uni-view",{staticClass:"progress_price"},[e._v("商品尾款"),a("v-uni-text",{staticClass:"align_right"},[e._v("￥"+e._s(t.presellOrder.pay_price))])],1),a("v-uni-view",{staticClass:"progress_pay"},[e._v("尾款需付款"),a("v-uni-text",{staticClass:"align_right gColor"},[e._v("￥"+e._s(t.presellOrder.pay_price))])],1)],1)],1):e._e()],1):a("v-uni-view",{staticClass:"item"},[a("v-uni-image",{attrs:{src:i.cart_info.product.image}}),a("v-uni-view",{staticClass:"info-box"},[a("v-uni-view",{staticClass:"name line1"},[e._v(e._s(i.cart_info.product.store_name))]),a("v-uni-view",{staticClass:"msg"},[e._v(e._s(i.cart_info.productAttr.sku))]),a("v-uni-view",{staticClass:"price"},[e._v("￥"+e._s(i.cart_info.productAttr.price))])],1),a("v-uni-view",{staticClass:"num"},[e._v("x"+e._s(i.product_num))])],1)],1)})),1),a("div",{staticClass:"goodCall",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goGoodCall(t)}}},[a("span",{staticClass:"iconfont icon-kefu"}),a("span",{staticStyle:{"font-size":"28rpx"}},[e._v("联系客服")])])],1)})),a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("订单编号：")]),a("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.group_order_sn)),a("v-uni-text",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.orderInfo.group_order_sn}},[e._v("复制")])],1)],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("下单时间：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.create_time||0))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("支付状态：")]),a("v-uni-view",{staticClass:"conter"},[e._v("未支付")])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("商品总额：")]),a("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.orderInfo.total_price))])],1)],1),e.orderInfo.orderList&&1==e.orderInfo.orderList[0].is_virtual&&e.orderInfo.orderList[0].order_extend?a("v-uni-view",{staticClass:"wrapper"},e._l(e.orderInfo.orderList[0].order_extend,(function(t,i){return t?a("v-uni-view",{key:i,staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v(e._s(i)+"：")]),Array.isArray(t)?a("v-uni-view",{staticClass:"conter virtual_image"},e._l(t,(function(i,r){return a("v-uni-image",{key:r,staticClass:"picture",attrs:{src:i},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.getPhotoClickIdx(t,r)}}})})),1):a("v-uni-view",{staticClass:"conter"},[e._v(e._s(t))])],1):e._e()})),1):e._e(),a("v-uni-view",{staticClass:"wrapper"},[e.orderInfo.pay_postage>0?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("运费：")]),a("v-uni-view",{staticClass:"conter"},[e._v("+￥"+e._s(e.orderInfo.pay_postage))])],1):e._e(),e.orderInfo.coupon_price>0?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("优惠券抵扣：")]),a("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.orderInfo.coupon_price))])],1):e._e(),e.orderInfo.integral?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("积分抵扣：")]),a("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.orderInfo.integral_price))])],1):e._e(),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("实付款：")]),a("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.orderInfo.pay_price))])],1)],1),a("v-uni-view",{staticClass:"content-clip"}),a("v-uni-view",{staticClass:"footer acea-row row-right row-middle"},[a("v-uni-view",{staticClass:"bnt cancel",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.cancelOrder.apply(void 0,arguments)}}},[e._v("取消订单")]),a("v-uni-view",{staticClass:"bnt bgColor",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pay_open(e.orderInfo.order_id)}}},[e._v("立即付款")])],1)],2),a("authorize",{attrs:{isAuto:e.isAuto,isShowAuth:e.isShowAuth},on:{onLoadFun:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoadFun.apply(void 0,arguments)},authColse:function(t){arguments[0]=t=e.$handleEvent(t),e.authColse.apply(void 0,arguments)}}}),a("payment",{attrs:{payMode:e.payMode,pay_close:e.pay_close,order_id:e.pay_order_id,totalPrice:e.totalPrice},on:{onChangeFun:function(t){arguments[0]=t=e.$handleEvent(t),e.onChangeFun.apply(void 0,arguments)}}})],1)},r=[]},"2b51":function(e,t,a){"use strict";a.r(t);var i=a("c9d4"),r=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"2b67":function(e,t,a){var i=a("5f07");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("0b1e892a",i,!0,{sourceMap:!1,shadowMode:!1})},"41e7":function(e,t,a){"use strict";var i=a("2b67"),r=a.n(i);r.a},"4a01":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".qs-btn[data-v-9c7354ea]{width:auto;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%;padding:0 3%;color:#aaa;border:1px solid #ddd;margin-right:%?20?%}",""]),e.exports=t},"506f":function(e,t,a){var i=a("4a01");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("8bfab5a6",i,!0,{sourceMap:!1,shadowMode:!1})},"5f07":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.event_bg[data-v-9c7354ea]{background:#ff7f00}.event_color[data-v-9c7354ea]{color:#ff7f00}.presell_bg_header[data-v-9c7354ea]{background:linear-gradient(90deg,var(--view-bntColor21),var(--view-bntColor22))}.goodCall[data-v-9c7354ea]{text-align:center;width:100%;height:%?86?%;padding:0 %?30?%;border-top:1px solid #f0f0f0;font-size:%?30?%;line-height:%?86?%;background:#fff;color:#282828}.goodCall .icon-kefu[data-v-9c7354ea]{font-size:%?32?%;margin-right:%?15?%}.order-details .header[data-v-9c7354ea]{padding:0 %?30?%;height:%?150?%;background-image:linear-gradient(90deg,var(--view-bntColor21) 0,var(--view-bntColor22))}.order-details .header.presell_header[data-v-9c7354ea]{background-repeat:no-repeat;background-size:cover;padding:%?35?% %?50?%}.order-details .header.presell_header .data[data-v-9c7354ea]{margin:%?8?% 0 0 %?26?%}.order-details .header.presell_header .data .state[data-v-9c7354ea]{font-weight:400;font-size:%?24?%}.order-details .header.on[data-v-9c7354ea]{background-color:#666!important}.order-details .header .pictrue[data-v-9c7354ea]{width:%?110?%;height:%?110?%}.order-details .header .pictrue uni-image[data-v-9c7354ea]{width:100%;height:100%}.order-details .header .data[data-v-9c7354ea]{color:hsla(0,0%,100%,.8);font-size:%?24?%;margin-left:%?27?%}.order-details .header .data.on[data-v-9c7354ea]{margin-left:0}.order-details .header .data .state[data-v-9c7354ea]{font-size:%?30?%;font-weight:700;color:#fff;margin-bottom:%?7?%}.presell_header .presell_payment[data-v-9c7354ea]{color:#fff;font-size:%?30?%;font-weight:700;margin-left:%?26?%}.presell_header .presell_payment .iconfont[data-v-9c7354ea]{font-weight:400;margin-right:%?8?%}.order-details .nav[data-v-9c7354ea]{background-color:#fff;font-size:%?26?%;color:#282828;padding:%?25?% 0}.order-details .nav .navCon[data-v-9c7354ea]{padding:0 %?40?%}.order-details .nav .on[data-v-9c7354ea]{color:var(--view-theme)}.order-details .nav .progress[data-v-9c7354ea]{padding:0 %?65?%;margin-top:%?10?%}.order-details .nav .progress .line[data-v-9c7354ea]{width:%?100?%;height:%?2?%;background-color:#939390}.order-details .nav .progress .iconfont[data-v-9c7354ea]{font-size:%?25?%;color:#939390;margin-top:%?-2?%}.order-details .nav .progress .iconfont.t-color[data-v-9c7354ea]{color:var(--view-theme)}.order-details .address[data-v-9c7354ea]{font-size:%?26?%;color:#868686;background-color:#fff;margin-top:%?13?%;padding:%?35?% %?30?%}.order-details .address .name[data-v-9c7354ea]{font-size:%?30?%;color:#282828;margin-bottom:%?15?%}.order-details .address .name .phone[data-v-9c7354ea]{margin-left:%?40?%}.order-details .line[data-v-9c7354ea]{width:100%;height:%?3?%}.order-details .line uni-image[data-v-9c7354ea]{width:100%;height:100%;display:block}.order-details .wrapper[data-v-9c7354ea]{background-color:#fff;margin-top:%?12?%;padding:%?30?%}.order-details .wrapper .item[data-v-9c7354ea]{font-size:%?28?%;color:#282828}.order-details .wrapper .item ~ .item[data-v-9c7354ea]{margin-top:%?20?%}.order-details .wrapper .item .conter[data-v-9c7354ea]{color:#868686;width:%?460?%;text-align:right}.order-details .wrapper .item .virtual_image[data-v-9c7354ea]{margin-left:%?50?%}.order-details .wrapper .item .virtual_image .picture[data-v-9c7354ea]{width:%?106?%;height:%?106?%;border-radius:%?8?%;margin-right:%?10?%}.order-details .wrapper .item .virtual_image .picture[data-v-9c7354ea]:last-child{margin-right:0}.order-details .wrapper .item .conter .copy[data-v-9c7354ea]{font-size:%?20?%;color:#333;border-radius:%?17?%;border:1px solid #666;padding:%?3?% %?15?%;margin-left:%?24?%}.order-details .wrapper .actualPay[data-v-9c7354ea]{border-top:1px solid #eee;margin-top:%?30?%;padding-top:%?30?%}.order-details .wrapper .actualPay .money[data-v-9c7354ea]{font-weight:700;font-size:%?30?%}.order-details .footer[data-v-9c7354ea]{width:100%;position:fixed;bottom:0;left:0;background-color:#fff;padding:0 %?30?%;height:%?100?%;height:calc(100rpx+ constant(safe-area-inset-bottom));height:calc(%?100?% + env(safe-area-inset-bottom));box-sizing:border-box}.content-clip[data-v-9c7354ea]{height:%?120?%;height:calc(120rpx+ constant(safe-area-inset-bottom));height:calc(%?120?% + env(safe-area-inset-bottom))}.order-details .footer .bnt[data-v-9c7354ea]{width:%?176?%;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%}.bgColor[data-v-9c7354ea]{background-color:var(--view-theme)}.order-details .footer .bnt.cancel[data-v-9c7354ea]{color:#aaa;border:1px solid #ddd}.order-details .footer .bnt ~ .bnt[data-v-9c7354ea]{margin-left:%?18?%}.order-details .writeOff[data-v-9c7354ea]{background-color:#fff;margin-top:%?13?%;padding-bottom:%?30?%}.order-details .writeOff .title[data-v-9c7354ea]{font-size:%?30?%;color:#282828;height:%?87?%;border-bottom:1px solid #f0f0f0;padding:0 %?30?%;line-height:%?87?%}.order-details .writeOff .grayBg[data-v-9c7354ea]{background-color:#f2f5f7;width:%?590?%;height:%?384?%;border-radius:%?20?% %?20?% 0 0;margin:%?50?% auto 0 auto;padding-top:%?55?%}.order-details .writeOff .grayBg .pictrue[data-v-9c7354ea]{width:%?290?%;height:%?290?%;margin:0 auto}.order-details .writeOff .grayBg .pictrue uni-image[data-v-9c7354ea]{width:100%;height:100%;display:block}.order-details .writeOff .gear[data-v-9c7354ea]{width:%?590?%;height:%?30?%;margin:0 auto}.order-details .writeOff .gear uni-image[data-v-9c7354ea]{width:100%;height:100%;display:block}.order-details .writeOff .num[data-v-9c7354ea]{background-color:#f0c34c;width:%?590?%;height:%?84?%;color:#282828;font-size:%?48?%;margin:0 auto;border-radius:0 0 %?20?% %?20?%;text-align:center;padding-top:%?4?%}.order-details .writeOff .rules[data-v-9c7354ea]{margin:%?46?% %?30?% 0 %?30?%;border-top:1px solid #f0f0f0;padding-top:%?10?%}.order-details .writeOff .rules .item[data-v-9c7354ea]{margin-top:%?20?%}.order-details .writeOff .rules .item .rulesTitle[data-v-9c7354ea]{font-size:%?28?%;color:#282828}.order-details .writeOff .rules .item .rulesTitle .iconfont[data-v-9c7354ea]{font-size:%?30?%;color:#333;margin-right:%?8?%;margin-top:%?5?%}.order-details .writeOff .rules .item .info[data-v-9c7354ea]{font-size:%?28?%;color:#999;margin-top:%?7?%}.order-details .writeOff .rules .item .info .time[data-v-9c7354ea]{margin-left:%?20?%}.order-details .map[data-v-9c7354ea]{height:%?86?%;font-size:%?30?%;color:#282828;line-height:%?86?%;border-bottom:1px solid #f0f0f0;margin-top:%?13?%;background-color:#fff;padding:0 %?30?%}.order-details .map .place[data-v-9c7354ea]{font-size:%?26?%;width:%?176?%;height:%?50?%;border-radius:%?25?%;line-height:%?50?%;text-align:center}.order-details .map .place .iconfont[data-v-9c7354ea]{font-size:%?27?%;height:%?27?%;line-height:%?27?%;margin:%?2?% %?3?% 0 0}.order-details .address .name .iconfont[data-v-9c7354ea]{font-size:%?34?%;margin-left:%?10?%}.refund[data-v-9c7354ea]{padding:0 %?30?% %?30?%;margin-top:%?24?%;background-color:#fff}.refund .title[data-v-9c7354ea]{display:flex;align-items:center;font-size:%?30?%;color:#333;height:%?86?%;border-bottom:1px solid #f5f5f5}.refund .title uni-image[data-v-9c7354ea]{width:%?32?%;height:%?32?%;margin-right:%?10?%}.refund .con[data-v-9c7354ea]{padding-top:%?25?%;font-size:%?28?%;color:#868686}.order-wrapper[data-v-9c7354ea]{margin-top:%?15?%}.order-wrapper .title[data-v-9c7354ea]{display:flex;align-items:center;height:%?86?%;padding:0 %?30?%;border-bottom:1px solid #f0f0f0;background-color:#fff}.order-wrapper .title .iconfont[data-v-9c7354ea]{font-size:%?24?%;color:#666;margin-top:%?6?%;margin-left:%?5?%}.order-wrapper .goods-box .item[data-v-9c7354ea]{display:flex;padding:%?25?% %?30?% %?25?% %?30?%;background-color:#fff}.order-wrapper .goods-box .item uni-image[data-v-9c7354ea]{width:%?130?%;height:%?130?%;border-radius:%?16?%}.order-wrapper .goods-box .item .info-box[data-v-9c7354ea]{display:flex;flex-direction:column;justify-content:space-between;margin-left:%?25?%;width:%?450?%}.order-wrapper .goods-box .item .info-box .msg[data-v-9c7354ea]{color:#868686;font-size:%?20?%}.order-wrapper .goods-box .item .info-box .price[data-v-9c7354ea]{font-size:%?26?%;color:var(--view-priceColor)}.order-wrapper .goods-box .item .num[data-v-9c7354ea]{flex:1;text-align:right;font-size:%?26?%;color:#868686}.order-wrapper .goods-box .event_name[data-v-9c7354ea]{display:inline-block;margin-right:%?9?%;color:#fff;font-size:%?20?%;padding:0 %?8?%;line-height:%?30?%;text-align:center;border-radius:%?6?%}.order-wrapper .goods-box .event_ship[data-v-9c7354ea]{font-size:%?20?%;margin-top:%?10?%}.order-wrapper .event_progress[data-v-9c7354ea]{margin-top:%?20?%;background:#fff}.order-wrapper .event_progress .progress_name[data-v-9c7354ea]{padding-left:%?30?%;height:%?60?%;line-height:%?60?%;font-size:%?24?%;font-weight:700;position:relative;color:var(--view-theme)}.order-wrapper .event_progress .progress_name[data-v-9c7354ea]::before{content:"";display:inline-block;width:%?5?%;height:%?34?%;background:var(--view-theme);position:absolute;top:%?15?%;left:0}.order-wrapper .event_progress .align_right[data-v-9c7354ea]{float:right;font-weight:700}.order-wrapper .event_progress .gColor[data-v-9c7354ea]{color:var(--view-theme)}.order-wrapper .event_progress .progress_price[data-v-9c7354ea]{padding:%?20?% %?30?%;color:#999;font-size:%?22?%}.order-wrapper .event_progress .progress_pay[data-v-9c7354ea]{padding:%?25?% %?30?%;background:var(--view-minorColor);font-size:%?26?%;color:#282828}',""]),e.exports=t},"947f":function(e,t,a){"use strict";var i=a("506f"),r=a.n(i);r.a},b950:function(e,t,a){"use strict";a.r(t);var i=a("2322"),r=a("2b51");for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a("41e7"),a("947f");var n=a("f0c5"),s=Object(n["a"])(r["default"],i["b"],i["c"],!1,null,"9c7354ea",null,!1,i["a"],void 0);t["default"]=s.exports},c9d4:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("99af"),a("d401"),a("d3b7"),a("25f0");var r=a("8342"),o=a("bd9e"),n=a("a60b"),s=(a("b640"),a("c6c3")),d=i(a("baf4")),c=i(a("974e")),l=i(a("5fa0")),v=a("4f1b"),u=a("26cb"),p=i(a("f272")),f=(getApp(),{components:{payment:d.default,orderGoods:c.default,authorize:p.default},data:function(){return{order_id:"",evaluate:0,cartInfo:[],orderInfo:{system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},isClose:!1,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"wechat",title:"微信快捷支付",payStatus:1},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"支付宝支付",payStatus:this.$store.getters.globalData.alipay_open},{name:"余额支付",icon:"icon-yuezhifu",value:"balance",title:"可用余额:",number:0,payStatus:this.$store.getters.globalData.yue_pay_status}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,imgUrl:r.HTTP_REQUEST_URL,invoice:{invoice:!1,add:!1}}},watch:{alipay_open:function(e){this.payMode[1].payStatus=e},yue_pay_status:function(e){this.payMode[2].payStatus=e}},computed:(0,v.configMap)({hide_mer_status:0,alipay_open:0,yue_pay_status:0},(0,u.mapGetters)(["isLogin","uid","viewColor","keyColor"])),onLoad:function(e){e.order_id&&this.$set(this,"order_id",e.order_id)},onShow:function(){this.isLogin?(this.getOrderInfo(),this.getUserInfo()):(this.isAuto=!0,this.isShowAuth=!0)},onHide:function(){this.isClose=!0},onReady:function(){this.$nextTick((function(){var e=this,t=new l.default(".copy-data");t.on("success",(function(){e.$util.Tips({title:"复制成功"})}))}))},mounted:function(){},methods:{getPhotoClickIdx:function(e,t){uni.previewImage({current:e[t],urls:e})},goStore:function(e){1!=this.hide_mer_status&&uni.navigateTo({url:"/pages/store/home/index?id=".concat(e.merchant.mer_id)})},goProduct:function(e){e.activity_id=e.cart_info&&e.cart_info.activeSku&&e.cart_info.activeSku.product_group_id,(0,o.goShopDetail)(e,"").then((function(t){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(e.product_id)})}))},goGoodCall:function(e){uni.navigateTo({url:"/pages/chat/customer_list/chat?mer_id=".concat(e.mer_id,"&uid=").concat(this.uid,"&order_id=").concat(this.order_id)})},onChangeFun:function(e){var t=e,a=t.action||null,i=void 0!=t.value?t.value:null;a&&this[a]&&this[a](i)},makePhone:function(){uni.makePhoneCall({phoneNumber:this.system_store.phone})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.group_order_id.toString(),this.totalPrice=this.orderInfo.pay_price},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",uni.redirectTo({url:"/pages/users/order_list/index?status=1"})},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.isShowAuth=!1,this.getOrderInfo(),this.getUserInfo()},authColse:function(e){this.isShowAuth=e},getUserInfo:function(){var e=this;(0,s.getUserInfo)().then((function(t){e.payMode[2].number=t.data.now_money,e.$set(e,"payMode",e.payMode)}))},getOrderInfo:function(){var e=this;uni.showLoading({title:"正在加载中"}),(0,n.groupOrderDetail)(this.order_id).then((function(t){uni.hideLoading(),e.$set(e,"orderInfo",t.data)})).catch((function(t){uni.hideLoading(),e.$util.Tips({title:t},"/pages/users/order_list/index")}))},cancelOrder:function(){var e=this;uni.showModal({title:"提示",content:"确认取消该订单?",success:function(t){t.confirm?(0,n.unOrderCancel)(e.order_id).then((function(t){e.$util.Tips({title:t.message},{tab:3})})).catch((function(){e.getDetail()})):t.cancel}})}}});t.default=f}}]);