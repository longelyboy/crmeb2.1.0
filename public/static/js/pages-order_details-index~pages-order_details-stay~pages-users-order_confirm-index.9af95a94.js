(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_details-index~pages-order_details-stay~pages-users-order_confirm-index"],{"0fea":function(t,e,i){"use strict";i.r(e);var r=i("12e0"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},"12e0":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("d3b7"),i("159b"),i("99af");i("b640");var r=i("bd9e"),a=i("3b3e"),n=i("26cb"),o={props:{evaluate:{type:Number,default:0},activityType:{type:Number,default:0},cartInfo:{type:Array,default:function(){return[]}},orderId:{type:String,default:""},jump:{type:Boolean,default:!1},orderData:{type:Object,default:function(){return{}}}},computed:(0,n.mapGetters)(["viewColor"]),data:function(){return{totalNmu:"",isTimePay:!1}},watch:{cartInfo:function(t,e){var i=0;t.forEach((function(t,e){i+=t.cart_num})),this.totalNmu=i}},onShow:function(){this.isPayBalance()},mounted:function(){},methods:{evaluateTap:function(t,e){uni.navigateTo({url:"/pages/users/goods_comment_con/index?uni=".concat(t,"&order_id=").concat(e)})},isPayBalance:function(){10===this.orderData.status&&(new Date<new Date(this.orderData.presellOrder.final_start_time)?this.isTimePay=!1:new Date>=new Date(this.orderData.presellOrder.final_start_time)&&new Date<=new Date(this.orderData.presellOrder.final_start_time)&&(this.isTimePay=!0))},jumpCon:function(t){4==t.product_type&&(t.activity_id=t.cart_info&&t.cart_info.activeSku.product_group_id),3==t.product_type&&(t.activity_id=t.cart_info&&t.cart_info.productAssistAttr.product_assist_id),(0,r.goShopDetail)(t).then((function(e){(0,a.initiateAssistApi)(t.activity_id).then((function(t){var e=t.data.product_assist_set_id;uni.hideLoading(),uni.navigateTo({url:"/pages/activity/assist_detail/index?id="+e})})).catch((function(t){uni.showToast({title:t,icon:"none"})}))}))},refund:function(t){0==this.evaluate||9==this.evaluate||1==this.orderData.is_virtual?uni.navigateTo({url:"/pages/users/refund/confirm?order_id="+this.orderId+"&type=1&ids="+t.order_product_id+"&refund_type=1&order_type="+this.orderData.order_type}):uni.navigateTo({url:"/pages/users/refund/select?order_id="+this.orderId+"&type=1&order_type="+this.orderData.order_type+"&ids="+t.order_product_id})}}};e.default=o},"3b3e":function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.assistHelpList=function(t,e){return a.default.get("store/product/assist/user/"+t,e)},e.assistUserData=function(){return a.default.get("store/product/assist/count",{},{noAuth:!0})},e.getActivitycategory=function(t){return a.default.get("product/spu/active/category/"+t,{},{noAuth:!0})},e.getAssistDetail=function(t){return a.default.get("store/product/assist/detail/"+t)},e.getAssistList=function(t){return a.default.get("store/product/assist/lst",t,{noAuth:!0})},e.getAssistUser=function(t){return a.default.get("store/product/assist/share/"+t)},e.getBargainUserCancel=function(t){return a.default.post("store/product/assist/set/delete/"+t)},e.getBargainUserList=function(t){return a.default.get("store/product/assist/set/lst",t)},e.getCombinationDetail=function(t){return a.default.get("store/product/group/detail/"+t,{},{noAuth:!0})},e.getCombinationList=function(t){return a.default.get("store/product/group/lst",t,{noAuth:!0})},e.getCombinationPink=function(t){return a.default.get("store/product/group/get/"+t)},e.getCombinationPoster=function(t){return a.default.post("combination/poster",t)},e.getCombinationUser=function(t){return a.default.get("store/product/group/count",t,{noAuth:!0})},e.getCouponLst=function(t){return a.default.get("coupon/getlst",t,{noAuth:!0})},e.getMerchantServiceLst=function(t){return a.default.get("store/merchant/local",t,{noAuth:!0})},e.getNewPeopleCouponLst=function(t){return a.default.get("coupon/new_people",t,{noAuth:!0})},e.getPresellList=function(t){return a.default.get("store/product/presell/lst",t,{noAuth:!0})},e.getSeckillDetail=function(t){return a.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})},e.getSeckillIndexTime=function(){return a.default.get("store/product/seckill/select",{},{noAuth:!0})},e.getSeckillList=function(t){return a.default.get("store/product/seckill/lst",t,{noAuth:!0})},e.getTopicDetail=function(t){return a.default.get("activity/info/".concat(t),{},{noAuth:!0})},e.getTopicList=function(t,e){return a.default.get("activity/lst/".concat(t),e,{noAuth:!0})},e.getTopicProLst=function(t){return a.default.get("product/spu/labels",t,{noAuth:!0})},e.hotRankingApi=function(t){return a.default.get("product/spu/get_hot_ranking",t,{noAuth:!0})},e.initiateAssistApi=function(t){return a.default.post("store/product/assist/create/"+t)},e.postAssistHelp=function(t){return a.default.post("store/product/assist/set/"+t)},e.postCombinationRemove=function(t){return a.default.post("store/product/group/cancel",t)},e.presellAgreement=function(){return a.default.get("store/product/presell/agree")},e.scombinationCode=function(t){return a.default.get("combination/code/"+t)},e.seckillCode=function(t,e){return a.default.get("seckill/code/"+t,e)},e.spuTop=function(t){return a.default.get("store/product/category/hotranking",{},{noAuth:!0})},e.spuTopList=function(t){return a.default.get("product/spu/get_hot_ranking",t,{noAuth:!0})};var a=r(i("b5ef"))},5227:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"orderGoods",style:t.viewColor},[i("v-uni-view",{staticClass:"goodWrapper",class:"item"+t.orderData.order_type},[1==t.orderData.order_type?i("v-uni-view",{staticClass:"title acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"item-status",class:"status"+t.evaluate},[t._v(t._s(0==t.evaluate?"待核销":"已核销"))]),0!=t.evaluate&&t.orderData.verify_time?i("v-uni-view",{staticClass:"item-date"},[t._v(t._s(t.orderData.verify_time))]):t._e()],1):t._e(),t._l(t.cartInfo,(function(e,r){return i("v-uni-view",{key:r},[2===t.activityType?i("v-uni-view",[i("v-uni-view",{staticClass:"item presell_item"},[i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictrue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpCon(e)}}},[i("v-uni-image",{attrs:{src:e.cart_info.productAttr&&e.cart_info.productAttr.image||e.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name line1",staticStyle:{width:"360rpx"}},[i("v-uni-text",{staticClass:"event_name event_bg"},[t._v("预售")]),t._v(t._s(e.cart_info.product.store_name))],1),i("v-uni-view",{staticClass:"num"},[i("v-uni-text",{staticClass:"p-color"},[t._v("￥"+t._s(e.cart_info.productPresellAttr.presell_price))]),i("br"),t._v("x "+t._s(e.product_num))],1)],1),e.cart_info.productAttr.sku?i("v-uni-view",{staticClass:"attr line1",staticStyle:{"margin-top":"0"}},[t._v(t._s(e.cart_info.productAttr.sku))]):t._e(),0===t.evaluate||10===t.evaluate||11===t.evaluate?i("v-uni-view",{staticClass:"event_ship event_color"},[t._v("发货时间："),1===e.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===e.cart_info.productPresell.delivery_type?"支付成功后":"预售结束后")+t._s(e.cart_info.productPresell.delivery_day)+"天内")]):t._e(),2===e.cart_info.productPresell.presell_type?i("v-uni-text",[t._v(t._s(1===e.cart_info.productPresell.delivery_type?"支付尾款后":"预售结束后")+t._s(e.cart_info.productPresell.delivery_day)+"天内")]):t._e()],1):t._e(),i("v-uni-view",{staticClass:"right-btn-box event_box"},[0==e.is_refund&&10!=t.evaluate&&11!=t.evaluate&&t.orderData.refund_status||e.refund_num>0?i("v-uni-view",{staticClass:"btn-item",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.refund(e)}}},[t._v("申请退款")]):t._e(),1==e.is_refund?i("v-uni-view",{staticClass:"btn-item err"},[t._v("退款中 x "+t._s(e.product_num-e.refund_num))]):t._e(),e.is_refund>1?i("v-uni-view",{staticClass:"btn-item err"},[t._v("已退款 x "+t._s(e.product_num-e.refund_num))]):t._e(),0==e.is_reply&&2==t.evaluate&&0==e.is_refund?i("v-uni-view",{staticClass:"btn-item",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.evaluateTap(e.order_product_id,t.orderId)}}},[t._v("去评价")]):1==e.is_reply&&2==t.evaluate?i("v-uni-view",{staticClass:"btn-item on"},[t._v("已评价")]):t._e()],1)],1)],1)],1),t.orderData.status>=10?i("v-uni-view",{staticClass:"event_progress"},[i("v-uni-view",{staticClass:"progress_list"},[i("v-uni-view",{staticClass:"progress_name"},[t._v("阶段一： 买家已付款")]),i("v-uni-view",{staticClass:"progress_price"},[t._v("商品定金"),i("v-uni-text",{staticClass:"align_right"},[t._v("￥"+t._s(t.orderData.pay_price))])],1),i("v-uni-view",{staticClass:"progress_pay"},[t._v("定金实付款"),i("v-uni-text",{staticClass:"align_right t-color"},[t._v("￥"+t._s(t.orderData.pay_price))])],1)],1),i("v-uni-view",{staticClass:"progress_list"},[i("v-uni-view",{staticClass:"progress_name"},[t._v("阶段二："),10==t.orderData.status&&0==t.orderData.presellOrder.activeStatus?i("v-uni-text",[t._v("未开始")]):t._e(),10==t.orderData.status&&1==t.orderData.presellOrder.activeStatus?i("v-uni-text",[t._v("等待买家付尾款")]):t._e(),11==t.orderData.status||2==t.orderData.presellOrder.activeStatus?i("v-uni-text",[t._v("交易已关闭")]):t._e()],1),i("v-uni-view",{staticClass:"progress_price"},[t._v("商品尾款"),i("v-uni-text",{staticClass:"align_right"},[t._v("￥"+t._s(t.orderData.presellOrder.pay_price))])],1),i("v-uni-view",{staticClass:"progress_pay"},[t._v("尾款需付款"),i("v-uni-text",{staticClass:"align_right t-color"},[t._v("￥"+t._s(t.orderData.presellOrder.pay_price))])],1)],1)],1):t._e()],1):i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictrue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpCon(e)}}},[i("v-uni-image",{attrs:{src:e.cart_info.productAttr&&e.cart_info.productAttr.image||e.cart_info.product.image}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name line1"},[0!=e.product_type&&10!=e.product_type?i("v-uni-text",{class:"font_bg-red type"+e.product_type},[t._v(t._s(1==e.product_type?"秒杀":2==e.product_type?"预售":3==e.product_type?"助力":4==e.product_type?"拼团":""))]):t._e(),t._v(t._s(e.cart_info.product.store_name))],1),i("v-uni-view",{staticClass:"num"},[t._v("x "+t._s(e.product_num))])],1),e.cart_info.productAttr.sku?i("v-uni-view",{staticClass:"attr line1"},[t._v(t._s(e.cart_info.productAttr.sku))]):t._e(),3==e.cart_info.product_type?i("v-uni-view",{staticClass:"money p-color"},[t._v("￥"+t._s(e.cart_info.productAssistAttr.assist_price))]):4==e.cart_info.product_type?i("v-uni-view",{staticClass:"money p-color"},[t._v("￥"+t._s(e.cart_info.activeSku.active_price))]):i("v-uni-view",{staticClass:"money acea-row row-middle"},[i("v-uni-text",[t._v("￥"+t._s(e.cart_info.productAttr.price))]),e.cart_info.productAttr.show_svip_price?i("v-uni-image",{staticClass:"svip-img",attrs:{src:"/static/images/svip.png"}}):t._e()],1)],1)],1),i("v-uni-view",{staticClass:"right-btn-box"},[1==e.is_refund?i("v-uni-view",{staticClass:"btn-item err"},[t._v("退款中 x "+t._s(e.product_num-e.refund_num))]):t._e(),e.is_refund>1?i("v-uni-view",{staticClass:"btn-item err"},[t._v("已退款 x "+t._s(e.product_num-e.refund_num))]):t._e(),0==e.is_refund&&9!=t.evaluate&&t.orderData.refund_status||e.refund_num>0?i("v-uni-view",{staticClass:"btn-item",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.refund(e)}}},[t._v("申请退款")]):t._e(),0==e.is_reply&&2==t.evaluate&&e.refund_num>0?i("v-uni-view",{staticClass:"btn-item",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.evaluateTap(e.order_product_id,t.orderId)}}},[t._v("去评价")]):1==e.is_reply&&2==t.evaluate?i("v-uni-view",{staticClass:"btn-item on"},[t._v("已评价")]):t._e()],1)],1)],1)}))],2)],1)},a=[]},5236:function(t,e,i){"use strict";var r=i("c60e"),a=i.n(r);a.a},"7b30":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.orderGoods[data-v-3bc89ffd]{background-color:#fff}.p-color[data-v-3bc89ffd]{color:var(--view-priceColor)}.t-color[data-v-3bc89ffd]{color:var(--view-theme)}.svip-img[data-v-3bc89ffd]{width:%?65?%;height:%?28?%;margin:%?4?% 0 0 %?4?%}.title[data-v-3bc89ffd]{height:%?86?%;position:relative;padding:0 %?30?%}.title[data-v-3bc89ffd]::after{content:"";width:%?750?%;border-bottom:%?2?% dotted #d8d8d8;position:absolute;bottom:0;left:0}.title .item-status[data-v-3bc89ffd]{color:#999;font-size:%?30?%}.title .item-status.status0[data-v-3bc89ffd]{color:#2291f8}.title .item-date[data-v-3bc89ffd]{color:#666;font-size:%?28?%}.right-btn-box[data-v-3bc89ffd]{display:flex;align-items:center;justify-content:flex-end}.right-btn-box.event_box[data-v-3bc89ffd]{position:static}.right-btn-box .btn-item[data-v-3bc89ffd]{display:flex;align-items:center;justify-content:center;width:%?140?%;height:%?46?%;margin-left:%?10?%;border:1px solid #bbb;border-radius:%?23?%;font-size:%?24?%;color:#282828}.right-btn-box .btn-item.on[data-v-3bc89ffd]{background:#dcdcdc;border-color:#dcdcdc}.right-btn-box .btn-item.err[data-v-3bc89ffd]{background:#f7f7f7;border-color:#f7f7f7;color:#aaa}.event_bg[data-v-3bc89ffd]{background:#ff7f00}.event_color[data-v-3bc89ffd]{color:#ff7f00}.presell_item[data-v-3bc89ffd]{height:auto;padding-bottom:%?15?%}.event_progress[data-v-3bc89ffd]{margin-top:%?20?%;background:#fff}.event_progress .progress_name[data-v-3bc89ffd]{padding-left:%?30?%;height:%?60?%;line-height:%?60?%;font-size:%?24?%;font-weight:700;position:relative;color:var(--view-theme)}.event_progress .progress_name[data-v-3bc89ffd]::before{content:"";display:inline-block;width:%?5?%;height:%?34?%;background:var(--view-theme);position:absolute;top:%?15?%;left:0}.event_progress .align_right[data-v-3bc89ffd]{float:right;font-weight:700}.event_progress .progress_price[data-v-3bc89ffd]{padding:%?20?% %?30?%;color:#999;font-size:%?22?%}.event_progress .progress_pay[data-v-3bc89ffd]{padding:%?25?% %?30?%;background:var(--view-minorColor);font-size:%?26?%;color:#282828}.event_name[data-v-3bc89ffd]{display:inline-block;margin-right:%?9?%;color:#fff;font-size:%?20?%;padding:0 %?8?%;line-height:%?30?%;text-align:center;border-radius:%?6?%}.event_ship[data-v-3bc89ffd]{font-size:%?20?%;margin-top:%?10?%}.goodWrapper.item1[data-v-3bc89ffd]::after{content:"";display:block;width:%?750?%;height:%?14?%;background:#f0f0f0}',""]),t.exports=e},"974e":function(t,e,i){"use strict";i.r(e);var r=i("5227"),a=i("0fea");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("5236");var o=i("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"3bc89ffd",null,!1,r["a"],void 0);e["default"]=s.exports},bd9e:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=function(t,e){return new Promise((function(e){1===t.product_type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.product_id,"&time=").concat(t.stop_time)}):2===t.product_type?uni.navigateTo({url:"/pages/activity/presell_details/index?id=".concat(t.activity_id)}):0===t.product_type||10===t.product_type?uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.product_id)}):4===t.product_type?uni.navigateTo({url:"/pages/activity/combination_details/index?id=".concat(t.activity_id)}):40===t.product_type?uni.navigateTo({url:"/pages/activity/combination_status/index?id=".concat(t.activity_id)}):e(t)}))},i("d3b7"),i("99af")},c60e:function(t,e,i){var r=i("7b30");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("5a753720",r,!0,{sourceMap:!1,shadowMode:!1})}}]);