(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-delivery-index"],{3222:function(e,t,i){"use strict";i.r(t);var r=i("77b7"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"3c86":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.checkPhone=function(e){return!!/^1(3|4|5|6|7|8|9)\d{9}$/.test(e)},t.isEmailAvailable=function(e){return!!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(e)},t.isMoney=function(e){return!!/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(e)},i("ac1f"),i("00b4")},"475c":function(e,t,i){"use strict";var r=i("5b68"),n=i.n(r);n.a},"5b68":function(e,t,i){var r=i("b096");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("5d74d71a",r,!0,{sourceMap:!1,shadowMode:!1})},"77b7":function(e,t,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("c7eb")),a=r(i("1da1"));i("14d9"),i("d3b7"),i("159b"),i("d81d"),i("ac1f"),i("00b4"),i("1276");var o=i("ed0f"),s=i("26cb"),d=i("a60b"),u=(i("3c86"),i("8342")),c={name:"GoodsDeliver",components:{},props:{},data:function(){return{types:[{type:1,title:"发货"},{type:2,title:"送货"},{type:3,title:"无需物流"}],splitList:[{title:"开启",key:1},{title:"关闭",key:0}],curSplit:0,curExpress:1,active:0,order_id:"",delivery:{user:{}},logistics:[],delivery_type:1,delivery_name:"",to_phone:"",to_name:"",remark:"",mark:"",cargo_weight:0,delivery_id:"",mer_config_temp_id:"",mer_from_com:"",seIndex:0,storeIndex:0,merId:"",expIndex:0,expTemp:[],from_name:"",from_tel:"",from_addr:"",fictitious_content:"",isTemp:!1,isDelivery:!1,is_virtual:0,splitProducts:[],storeList:[],activity_type:0,domain:u.HTTP_REQUEST_URL,isWeixin:this.$wechat.isWeixin()}},watch:{"$route.params.oid":function(e){void 0!=e&&(this.order_id=e,this.getIndex())}},computed:(0,s.mapGetters)(["viewColor"]),onLoad:function(e){this.order_id=e.id,this.merId=e.merId,this.getIndex(),this.expressList(),this.orderDeliveryInfo()},methods:{scanCode:function(){this.$wechat.isWeixin()&&this.$wechat.wechatEvevt("scanQRCode",{needResult:1,scanType:["barCode"]}).then((function(e){var t=e.resultStr.split(",");that.delivery_id=1==t.length?t[0]:t[1]}))},previewImage:function(){uni.previewImage({urls:[this.expTemp[this.expIndex].pic],success:function(){},fail:function(e){}})},isOpenDeliveryTemp:function(e){var t=this;(0,o.getTempAndDelivery)(t.merId).then((function(i){1==e?(t.delivery_type=3,t.types=[{type:3,title:"虚拟发货"}]):(1==i.data.crmeb_serve_dump&&t.types.push({type:4,title:"电子面单"}),1==i.data.delivery_status&&t.types.push({type:5,title:"同城配送"}))}),(function(e){t.$util.Tips({title:e})}))},getDump:function(){var e=this;e.expTemp.forEach((function(t,i){t.temp_id!=e.mer_config_temp_id||(e.expIndex=i)}))},getStoreList:function(){var e=this;(0,o.getDeliveryStoreLst)(this.merId).then((function(t){e.storeList=t.data})).catch((function(t){e.$util.Tips({title:t})}))},changeType:function(e,t){this.active=t,this.delivery_type=e.type,this.delivery_name="",this.delivery_id="",5==e.type&&this.getStoreList()},changeSplit:function(e,t){this.curSplit=e.key},getIndex:function(){var e=this;(0,o.getAdminOrderDetail)(e.merId,e.order_id).then((function(t){t.data.orderProduct.forEach((function(e,t){e.checked=!0,e.split_num=e.refund_num})),e.delivery=t.data,e.activity_type=t.data.activity_type,e.is_virtual=t.data.is_virtual,e.isOpenDeliveryTemp(e.is_virtual)}),(function(t){e.$util.Tips({title:t})}))},expressList:function(){var e=this;(0,d.expressList)().then((function(t){e.logistics=t.data,e.getExpTemp(t.data[0].value)}),(function(t){e.$util.Tips({title:t})}))},checkedChange:function(e){e.checked=!e.checked},getSplitProduct:function(){var e=[];return this.delivery.orderProduct.map((function(t){t.checked&&e.push({id:t.order_product_id,num:t.split_num})})),e},subCart:function(e){e.split_num>1&&e.split_num--},addCart:function(e){e.split_num<e.refund_num&&e.split_num++},saveInfo:function(){var e=this;return(0,a.default)((0,n.default)().mark((function t(){var i,r,a,o,s;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,r=i.delivery_type,a=i.logistics[i.seIndex].value,o=i.delivery_id,s={},s.delivery_name=a,s.delivery_type=r,s.is_split=i.curSplit,!i.curSplit){t.next=8;break}if(i.splitProducts=i.getSplitProduct(),0!=i.splitProducts.length){t.next=8;break}return t.abrupt("return",e.$util.Tips({title:"请选择分单商品"}));case 8:if(s.split=i.splitProducts,1!=r){t.next=14;break}if(o){t.next=12;break}return t.abrupt("return",e.$util.Tips({title:"请填写快递单号"}));case 12:s.delivery_id=o,i.setInfo(s);case 14:if(2!=r){t.next=24;break}if(i.to_name){t.next=17;break}return t.abrupt("return",e.$util.Tips({title:"请填写送货人姓名"}));case 17:if(i.to_phone){t.next=19;break}return t.abrupt("return",e.$util.Tips({title:"请填写送货人手机号码"}));case 19:if(/^1[3456789]\d{9}$/.test(i.to_phone)){t.next=21;break}return t.abrupt("return",e.$util.Tips({title:"请填写正确的手机号码"}));case 21:s.delivery_name=i.to_name,s.delivery_id=i.to_phone,i.setInfo(s);case 24:if(3==r&&(s.remark=i.remark,i.setInfo(s)),4!=r){t.next=41;break}if(i.from_name){t.next=28;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人姓名"}));case 28:if(i.from_tel){t.next=30;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人手机号码"}));case 30:if(/^1[3456789]\d{9}$/.test(i.from_tel)){t.next=32;break}return t.abrupt("return",e.$util.Tips({title:"请填写正确的手机号码"}));case 32:if(i.from_addr){t.next=34;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人地址"}));case 34:if(0!=i.expTemp.length){t.next=36;break}return t.abrupt("return",e.$util.Tips({title:"请选择电子面单"}));case 36:s.from_name=i.from_name,s.from_tel=i.from_tel,s.from_addr=i.from_addr,s.temp_id=i.expTemp[i.expIndex].temp_id,i.setInfo(s);case 41:5==r&&(s.station_id=i.storeList[i.storeIndex].value,s.cargo_weight=i.cargo_weight,s.mark=i.mark,i.setInfo(s));case 42:case"end":return t.stop()}}),t)})))()},setInfo:function(e){var t=this;(0,o.setAdminOrderDelivery)(t.merId,t.order_id,e).then((function(e){t.$util.Tips({title:e.message,icon:"success",mask:!0}),setTimeout((function(e){uni.redirectTo({url:"/pages/admin/orderList/index?types=3&merId=".concat(t.merId)})}),1e3)}),(function(e){t.$util.Tips({title:e})}))},bindPickerChange:function(e){this.seIndex=e.detail.value,this.getExpTemp(this.logistics[e.detail.value].value)},bindTempChange:function(e){this.expIndex=e.detail.value},bindStoreChange:function(e){this.storeIndex=e.detail.value},getExpTemp:function(e){var t=this;(0,o.orderExportTemp)({com:e}).then((function(e){t.expTemp=e.data.data}))},orderDeliveryInfo:function(){var e=this;(0,o.orderDeliveryInfo)(e.merId).then((function(t){e.from_name=t.data.mer_from_name,e.from_tel=t.data.mer_from_tel,e.from_addr=t.data.mer_from_addr,e.mer_config_temp_id=t.data.mer_config_temp_id,e.mer_from_com=t.data.mer_from_com}),(function(t){e.$util.Tips({title:t})}))}}};t.default=c},"901a":function(e,t,i){"use strict";i.r(t);var r=i("f085"),n=i("3222");for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("475c");var o=i("f0c5"),s=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"71451235",null,!1,r["a"],void 0);t["default"]=s.exports},a60b:function(e,t,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.applyInvoiceApi=function(e,t){return n.default.post("order/receipt/".concat(e),t)},t.cartDel=function(e){return n.default.post("user/cart/delete",e)},t.changeCartNum=function(e,t){return n.default.post("user/cart/change/"+e,t)},t.createOrder=function(e){return n.default.post("v2/order/create",e,{noAuth:!0})},t.develiveryDetail=function(e){return n.default.get("order/delivery/".concat(e))},t.express=function(e){return n.default.post("order/express/"+e)},t.expressList=function(){return n.default.get("common/express")},t.getCallBackUrlApi=function(e){return n.default.get("common/pay_key/"+e,{},{noAuth:!0})},t.getCartCounts=function(){return n.default.get("user/cart/count")},t.getCartList=function(){return n.default.get("user/cart/lst")},t.getCouponsOrderPrice=function(e,t){return n.default.get("coupons/order/"+e,t)},t.getOrderConfirm=function(e){return n.default.post("v2/order/check",e)},t.getOrderDetail=function(e){return n.default.get("order/detail/"+e)},t.getOrderList=function(e){return n.default.get("order/list",e)},t.getPayOrder=function(e){return n.default.get("order/status/"+e)},t.getReceiptOrder=function(e){return n.default.get("user/receipt/order/"+e)},t.groupOrderDetail=function(e){return n.default.get("order/group_order_detail/"+e)},t.groupOrderList=function(e){return n.default.get("order/group_order_list",e,{noAuth:!0})},t.ordeRefundReason=function(){return n.default.get("order/refund/reason")},t.orderAgain=function(e){return n.default.post("user/cart/again",e)},t.orderComment=function(e,t){return n.default.post("reply/"+e,t)},t.orderConfirm=function(e){return n.default.post("order/check",e)},t.orderCreate=function(e){return n.default.post("order/create",e,{noAuth:!0})},t.orderData=function(){return n.default.get("order/number")},t.orderDel=function(e){return n.default.post("order/del/"+e)},t.orderPay=function(e,t){return n.default.post("order/pay/"+e,t)},t.orderProduct=function(e){return n.default.get("reply/product/"+e)},t.orderRefundVerify=function(e){return n.default.post("order/refund/verify",e)},t.orderTake=function(e){return n.default.post("order/take/"+e)},t.postOrderComputed=function(e,t){return n.default.post("/order/computed/"+e,t)},t.presellOrderPay=function(e,t){return n.default.post("presell/pay/"+e,t)},t.receiptOrder=function(e){return n.default.get("user/receipt/order",e)},t.refundApply=function(e,t){return n.default.post("refund/apply/"+e,t,{noAuth:!0})},t.refundBackGoods=function(e,t){return n.default.post("refund/back_goods/"+e,t,{noAuth:!0})},t.refundBatch=function(e){return n.default.get("refund/batch_product/"+e,{noAuth:!0})},t.refundCancelApi=function(e){return n.default.post("refund/cancel/".concat(e))},t.refundDel=function(e){return n.default.post("refund/del/"+e,{noAuth:!0})},t.refundDetail=function(e){return n.default.get("refund/detail/"+e,{noAuth:!0})},t.refundExpress=function(e){return n.default.get("refund/express/"+e,{noAuth:!0})},t.refundList=function(e){return n.default.get("refund/list",e,{noAuth:!0})},t.refundMessage=function(){return n.default.get("common/refund_message",{noAuth:!0})},t.refundOrderExpress=function(e,t){return n.default.get("server/".concat(e,"/refund/express/").concat(t))},t.refundProduct=function(e,t){return n.default.get("refund/product/"+e,t,{noAuth:!0})},t.unOrderCancel=function(e){return n.default.post("order/cancel/"+e)},t.verifyCode=function(e){return n.default.get("order/verify_code/"+e)},i("99af");var n=r(i("b5ef"))},b096:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*发货*/.uni-input[data-v-71451235]{display:block;width:%?400?%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.input-inline[data-v-71451235]{width:auto}.deliver-goods header[data-v-71451235]{width:100%;background-color:#fff;margin-top:%?10?%}.deliver-goods header .order-num[data-v-71451235]{padding:0 %?30?%;border-bottom:1px solid #f5f5f5;height:%?67?%}.deliver-goods header .order-num .num[data-v-71451235]{width:%?430?%;font-size:%?26?%;color:#282828;position:relative}.deliver-goods header .order-num .num[data-v-71451235]:after{position:absolute;content:"";width:1px;height:%?30?%;background-color:#ddd;top:50%;margin-top:%?-15?%;right:0}.deliver-goods header .order-num .name[data-v-71451235]{width:%?260?%;font-size:%?26?%;color:#282828;text-align:center}.deliver-goods header .order-num .name .iconfont[data-v-71451235]{font-size:%?35?%;color:#477ef3;vertical-align:middle;margin-right:%?10?%}.deliver-goods header .address[data-v-71451235]{font-size:%?26?%;color:#868686;background-color:#fff;padding:%?30?%}.look[data-v-71451235]{margin-left:%?20?%;color:#1890ff}.deliver-goods header .address .name[data-v-71451235]{font-size:%?34?%;color:#282828;margin-bottom:%?10?%}.deliver-goods header .address .name .phone[data-v-71451235]{margin-left:%?40?%}.deliver-goods header .line[data-v-71451235]{width:100%;height:%?3?%}.deliver-goods header .line uni-image[data-v-71451235]{width:100%;height:100%;display:block}.deliver-goods .wrapper[data-v-71451235]{width:100%;background-color:#fff}.deliver-goods .wrapper .item[data-v-71451235]{border-bottom:1px solid #f0f0f0;padding:0 %?30?%;min-height:%?96?%;font-size:%?28?%;color:#282828;position:relative}.deliver-goods .wrapper .item .mode[data-v-71451235]{width:%?480?%;height:100%;text-align:right}.deliver-goods .wrapper .item .mode .iconfont[data-v-71451235]{font-size:%?30?%;margin-left:%?13?%}.deliver-goods .wrapper .item .mode .goods ~ .goods[data-v-71451235]{margin-left:%?30?%}.deliver-goods .wrapper .item .mode .goods[data-v-71451235]{color:#bbb;margin:%?10?% 0}.deliver-goods .wrapper .item .mode .goods.on[data-v-71451235]{color:#477ef3}.deliver-goods .wrapper .item .icon-up[data-v-71451235]{position:absolute;font-size:%?35?%;color:#2c2c2c;right:%?30?%}.deliver-goods .wrapper .item select[data-v-71451235]{direction:rtl;padding-right:%?60?%;position:relative;z-index:2}.deliver-goods .wrapper .item uni-input[data-v-71451235]::-webkit-input-placeholder{color:#bbb}.deliver-goods .wrapper .item uni-input[data-v-71451235]::placeholder{color:#bbb}.deliver-goods .confirm_btn[data-v-71451235]{position:fixed;bottom:0;padding:%?20?% %?30?%;background:#fff;width:100%}.deliver-goods .confirm[data-v-71451235]{font-size:%?32?%;color:#fff;width:100%;height:%?90?%;background-color:#477ef3;text-align:center;line-height:%?90?%;border-radius:%?60?%}.select-box[data-v-71451235]{flex:1;height:100%}.select-box .pickerBox[data-v-71451235]{display:flex;align-items:center;justify-content:flex-end;width:100%;height:100%;text-align:right;position:relative}.select-box .pickerBox .iconfont[data-v-71451235]{font-size:%?28?%;color:#bbb;position:absolute;right:0;top:%?10?%}.pro_list[data-v-71451235]{width:100%;padding:%?20?% %?30?%;position:relative;align-items:center;border-bottom:1px solid #f0f0f0;justify-content:space-between}.pro_list .checkbox[data-v-71451235]{width:%?60?%}.pro_list .checkbox .icon-xuanzhong1[data-v-71451235]{color:var(--view-theme)}.pro_list .picture[data-v-71451235]{width:%?180?%;height:%?180?%}[data-v-71451235] .pro_list .picture uni-image{width:%?180?%;height:%?180?%;border-radius:%?6?%}.pro_count .title[data-v-71451235]{padding:%?20?% %?30?%;line-height:%?50?%;border-bottom:1px solid #eee}.pro_list .info[data-v-71451235]{width:%?420?%;font-size:%?28?%;color:#282828}.pro_list .pro_info[data-v-71451235]{width:%?360?%}.pro_list .info_num[data-v-71451235]{color:#ff9600;margin-top:%?10?%}.pro_list .refund_num[data-v-71451235]{margin-top:%?10?%;font-size:%?24?%}.pro_list .pro_price[data-v-71451235]{text-align:right}.pro_list .info .name[data-v-71451235]{line-height:%?46?%}.pro_list .info .carnum[data-v-71451235]{height:%?47?%;position:absolute;bottom:%?30?%;right:%?30?%}.pro_list .info .carnum uni-view[data-v-71451235]{border:1px solid #a4a4a4;min-width:%?66?%;text-align:center;height:100%;line-height:%?46?%;font-size:%?28?%;color:#a4a4a4}.pro_list .info .carnum .reduce[data-v-71451235]{border-right:0;border-radius:%?3?% 0 0 %?3?%}.pro_list .info .carnum .reduce.on[data-v-71451235]{border-color:#e3e3e3;color:#dedede}.pro_list .info .carnum .plus[data-v-71451235]{border-left:0;border-radius:0 %?3?% %?3?% 0}.pro_list .info .carnum .num[data-v-71451235]{color:#282828}.pro_list .info .info_sku[data-v-71451235]{color:#868686;font-size:%?24?%;margin-top:%?6?%}.pro_list .pro_info .info_sku[data-v-71451235]{margin-top:%?20?%}.pro_list .info .info_price[data-v-71451235]{margin-top:%?30?%}.footer[data-v-71451235]{padding:%?20?% %?30?%;text-align:right;line-height:%?50?%}.footer uni-text[data-v-71451235]{color:#ff9600}',""]),e.exports=t},ed0f:function(e,t,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getAdminOrderDelivery=function(e){return n.default.get("admin/order/delivery/gain/"+e,{},{login:!0})},t.getAdminOrderDetail=function(e,t){return n.default.get("admin/"+e+"/order/"+t,{},{login:!0})},t.getAdminOrderList=function(e){return n.default.get("admin/order/list",e,{login:!0})},t.getDeliveryStoreLst=function(e){return n.default.get("admin/".concat(e,"/delivery_options"))},t.getLogistics=function(){return n.default.get("logistics",{},{login:!1})},t.getOrderList=function(e,t){return n.default.get("admin/".concat(t,"/order_list"),e,{login:!0})},t.getRefundOrderDetail=function(e,t){return n.default.get("server/".concat(e,"/refund/detail/").concat(t),{},{login:!0})},t.getRefundOrderInfo=function(e,t){return n.default.get("server/".concat(e,"/refund/get/").concat(t))},t.getRefundOrderList=function(e,t){return n.default.get("server/".concat(t,"/refund/lst"),e,{login:!0})},t.getStatisticsInfo=function(){return n.default.get("admin/order/statistics",{},{login:!0})},t.getStatisticsMonth=function(e){return n.default.get("admin/order/data",e,{login:!0})},t.getStatisticsTime=function(e){return n.default.get("admin/order/time",e,{login:!0})},t.getTempAndDelivery=function(e){return n.default.get("admin/".concat(e,"/delivery_config"))},t.orderCancellation=function(e,t){return n.default.post("admin/".concat(e,"/verify/").concat(t))},t.orderDeliveryInfo=function(e){return n.default.get("admin/".concat(e,"/mer_form"))},t.orderExportTemp=function(e){return n.default.get("store/expr/temps",e)},t.orderNumberStatistics=function(e,t){return n.default.get("admin/".concat(t,"/pay_number"),e,{login:!0})},t.orderPrice=function(e,t){return n.default.get("admin/"+t+"/order_price",e,{login:!0})},t.orderStatistics=function(e){return n.default.get("admin/"+e+"/statistics")},t.orderVerific=function(e,t,i){return n.default.post("verifier/".concat(e,"/").concat(t),i)},t.refundOrderReceive=function(e,t){return n.default.post("server/".concat(e,"/refund/confirm/").concat(t),{},{login:!0})},t.refundOrderSubmit=function(e,t,i){return n.default.post("server/".concat(e,"/refund/status/").concat(t),i,{login:!0})},t.setAdminOrderDelivery=function(e,t,i){return n.default.post("admin/"+e+"/delivery/"+t,i,{login:!0})},t.setAdminOrderPrice=function(e,t,i){return n.default.post("admin/"+e+"/price/"+t,i,{login:!0})},t.setAdminOrderRemark=function(e,t,i){return n.default.post("admin/"+e+"/mark/"+t,i,{login:!0})},t.setOfflinePay=function(e,t){return n.default.post("admin/"+e+"/order/offline",t,{login:!0})},t.setOrderRefund=function(e,t){return n.default.post("admin/"+e+"/order/refund",t,{login:!0})},t.setRefundMark=function(e,t,i){return n.default.post("server/".concat(e,"/refund/mark/").concat(t),i,{login:!0})},t.turnoverStatistics=function(e,t){return n.default.get("admin/".concat(t,"/pay_price"),e,{login:!0})},t.verifierOrder=function(e,t){return n.default.get("verifier/"+e+"/order/"+t)},i("99af");var n=r(i("b5ef"))},f085:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"deliver-goods",style:e.viewColor},[i("header",[i("v-uni-view",{staticClass:"order-num acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"num line1"},[e._v("订单号："+e._s(e.delivery.order_sn))]),i("v-uni-view",{staticClass:"name line1"},[i("span",{staticClass:"iconfont icon-yonghu2"}),e._v(e._s(e.delivery.user&&e.delivery.user.nickname))])],1),i("v-uni-view",{staticClass:"address"},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(e.delivery.real_name)),i("span",{staticClass:"phone"},[e._v(e._s(e.delivery.user&&e.delivery.user_phone))])]),i("v-uni-view",[e._v(e._s(e.delivery.user_address))])],1),i("v-uni-view",{staticClass:"line"},[i("v-uni-image",{attrs:{src:e.domain+"/static/images/line.jpg"}})],1)],1),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("发货方式")]),i("v-uni-view",{staticClass:"mode acea-row row-middle row-right"},e._l(e.types,(function(t,r){return i("v-uni-view",{key:r,staticClass:"goods",class:e.active===r?"on":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changeType(t,r)}}},[i("span",{staticClass:"iconfont icon-xuanzhong2"}),e._v(e._s(t.title))])})),1)],1),e.logistics.length>0?[i("v-uni-view",{staticClass:"list"},[1==e.delivery_type?[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("快递公司")]),i("v-uni-view",{staticClass:"select-box"},[i("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.seIndex,range:e.logistics,"range-key":"label"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.logistics[e.seIndex].label))])],1)],1)],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("快递单号")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写快递单号"},model:{value:e.delivery_id,callback:function(t){e.delivery_id=t},expression:"delivery_id"}}),e.isWeixin?i("v-uni-text",{staticClass:"iconfont icon-xiangji",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.scanCode.apply(void 0,arguments)}}}):e._e()],1)]:e._e(),4==e.delivery_type?[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("快递公司")]),i("v-uni-view",{staticClass:"select-box"},[i("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.seIndex,range:e.logistics,"range-key":"label"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.logistics[e.seIndex].label))])],1)],1)],1),e.expTemp.length>0&&4==e.delivery_type?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("电子面单")]),i("div",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.expIndex,range:e.expTemp,"range-key":"title"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTempChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input input-inline"},[e._v(e._s(e.expTemp[e.expIndex].title))])],1),i("div",{staticClass:"look",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}},[e._v("预览")])],1)],1):e._e(),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("寄件人姓名")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写寄件人姓名"},model:{value:e.from_name,callback:function(t){e.from_name=t},expression:"from_name"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("寄件人电话")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写寄件人电话"},model:{value:e.from_tel,callback:function(t){e.from_tel=t},expression:"from_tel"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("寄件人地址")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写寄件人地址"},model:{value:e.from_addr,callback:function(t){e.from_addr=t},expression:"from_addr"}})],1)]:e._e()],2)]:e._e(),2==e.delivery_type?i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("送货人姓名")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写送货人姓名",maxlength:"10"},model:{value:e.to_name,callback:function(t){e.to_name=t},expression:"to_name"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("送货人电话")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写送货人电话"},model:{value:e.to_phone,callback:function(t){e.to_phone=t},expression:"to_phone"}})],1)],1):e._e(),5==e.delivery_type?[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("发货点")]),i("v-uni-view",{staticClass:"select-box"},[i("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.storeIndex,range:e.storeList,"range-key":"label"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindStoreChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.storeList[e.storeIndex]&&e.storeList[e.storeIndex].label))])],1)],1)],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("包裹重量")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"number",placeholder:"填写包裹重量"},model:{value:e.cargo_weight,callback:function(t){e.cargo_weight=t},expression:"cargo_weight"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("配送备注")]),i("v-uni-input",{staticClass:"mode textarea",attrs:{type:"textarea",placeholder:"填写配送备注"},model:{value:e.mark,callback:function(t){e.mark=t},expression:"mark"}})],1)]:e._e(),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("发货备注")]),i("v-uni-input",{staticClass:"mode textarea",attrs:{type:"textarea",placeholder:"填写发货备注"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],1),e.delivery.orderProduct&&(e.delivery.orderProduct.length>1||1==e.delivery.orderProduct.length&&e.delivery.orderProduct[0]["refund_num"]>1)&&2!=e.activity_type?[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("分单发货")]),i("v-uni-view",{staticClass:"mode acea-row row-middle row-right"},e._l(e.splitList,(function(t,r){return i("v-uni-view",{key:r,staticClass:"goods",class:e.curSplit===t.key?"on":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changeSplit(t,r)}}},[i("span",{staticClass:"iconfont icon-xuanzhong2"}),e._v(e._s(t.title))])})),1)],1),e.curSplit?e._l(e.delivery.orderProduct,(function(t,r){return i("v-uni-view",[i("v-uni-view",{staticClass:"pro_list acea-row"},[i("v-uni-view",{staticClass:"checkbox",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.checkedChange(t)}}},[t.checked?i("v-uni-text",{staticClass:"iconfont icon-xuanzhong1"}):i("v-uni-text",{staticClass:"iconfont icon-weixuanzhong"})],1),t.cart_info&&t.cart_info.product?i("v-uni-view",{staticClass:"picture"},[i("v-uni-image",{attrs:{src:t.cart_info.product.image}})],1):e._e(),t.cart_info&&t.cart_info.product?i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"name line2"},[e._v(e._s(t.cart_info.product.store_name))]),t.cart_info&&t.cart_info.productAttr?i("v-uni-view",{staticClass:"info_sku"},[e._v(e._s(t.cart_info.productAttr.sku))]):e._e(),t.cart_info&&t.cart_info.productAttr?i("v-uni-view",{staticClass:"info_price"},[e._v("￥"),i("v-uni-text",[e._v(e._s(t.cart_info.productAttr.price))])],1):e._e(),i("v-uni-view",{staticClass:"carnum acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"reduce",class:t.numSub?"on":"",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.subCart(t)}}},[e._v("-")]),i("v-uni-view",{staticClass:"num"},[e._v(e._s(t.split_num))]),i("v-uni-view",{staticClass:"plus",class:t.numAdd?"on":"",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.addCart(t)}}},[e._v("+")])],1)],1):e._e()],1)],1)})):e._e()]:e._e(),e.curSplit?e._e():[e.delivery.orderProduct?i("v-uni-view",{staticClass:"pro_count"},[i("v-uni-view",{staticClass:"title"},[e._v("共"+e._s(e.delivery.orderProduct.length)+"件商品")]),e._l(e.delivery.orderProduct,(function(t,r){return i("v-uni-view",[i("v-uni-view",{staticClass:"pro_list acea-row"},[t.cart_info&&t.cart_info.product?i("v-uni-view",{staticClass:"picture"},[i("v-uni-image",{attrs:{src:t.cart_info.product.image}})],1):e._e(),t.cart_info&&t.cart_info.product?i("v-uni-view",{staticClass:"info pro_info"},[i("v-uni-view",{staticClass:"name line2"},[e._v(e._s(t.cart_info.product.store_name))]),t.cart_info&&t.cart_info.productAttr?i("v-uni-view",{staticClass:"info_sku"},[e._v(e._s(t.cart_info.productAttr.sku))]):e._e()],1):e._e(),t.cart_info&&t.cart_info.productAttr?i("v-uni-view",{staticClass:"pro_price"},[i("v-uni-view",{staticClass:"info_price"},[e._v("￥"+e._s(t.cart_info.productAttr.price))]),i("v-uni-view",{staticClass:"info_num"},[e._v("x"+e._s(t.product_num))]),t.product_num-t.refund_num>0?i("v-uni-view",{staticClass:"refund_num"},[e._v(e._s(t.product_num-t.refund_num)+"件"+e._s(1==t.is_refund?"退款中":2==t.is_refund?"已退款":3==t.is_refund?"全部退款":""))]):e._e()],1):e._e()],1)],1)})),i("v-uni-view",{staticClass:"footer"},[e._v("共"+e._s(e.delivery.orderProduct.length)+"件商品，应支付"),i("v-uni-text",[e._v("￥"+e._s(e.delivery.pay_price))]),e._v("（运费￥"+e._s(e.delivery.pay_postage)+"）")],1)],2):e._e()]],2),i("v-uni-view",{staticStyle:{height:"5.4rem"}}),i("v-uni-view",{staticClass:"confirm_btn"},[i("v-uni-view",{staticClass:"confirm",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveInfo.apply(void 0,arguments)}}},[e._v("确认提交")])],1)],1)},n=[]}}]);