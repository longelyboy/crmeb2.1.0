(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_store_attention-index"],{"111c":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.arrivalNoticeApi=function(t){return i.default.post("store/product/increase_take",t)},e.bagExplain=function(){return i.default.get("store/product/bag/explain")},e.bagRecommend=function(){return i.default.get("product/spu/bag/recommend")},e.collectAdd=function(t){return i.default.post("user/relation/create",t)},e.collectAll=function(t){return i.default.post("user/relation/batch/create",t)},e.collectDel=function(t){return i.default.post("user/relation/delete",t)},e.copyPasswordApi=function(t){return i.default.get("product/spu/copy",t,{noAuth:!0})},e.copyPasswordSearch=function(t){return i.default.get("command/copy",t,{noAuth:!0})},e.create=function(t){return i.default.post("intention/create",t)},e.discountsCartAdd=function(t){return i.default.post("user/cart/batchCreate",t)},e.express=function(t){return i.default.post("ordero/express/"+t,{noAuth:!0})},e.followStore=function(t){return i.default.post("user/relation/create",{type:10,type_id:t})},e.getApplicationRecordList=function(t){return i.default.get("intention/lst",t)},e.getBrandlist=function(t){return i.default.get("store/product/brand/lst",t,{noAuth:!0})},e.getBroadcastListApi=function(t){return i.default.get("broadcast/lst",t,{noAuth:!0})},e.getCaptcha=function(){return i.default.get("captcha")},e.getCategoryList=function(){return i.default.get("store/product/category/lst",{},{noAuth:!0})},e.getCollectUserList=function(t){return i.default.get("user/relation/product/lst",t)},e.getCouponProductlist=function(t){t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,o.default)({},t),t.brand_id=t.brand_id.toString());return i.default.get("product/spu/coupon_product",t,{noAuth:!0})},e.getDiscountsLst=function(t){return i.default.get("discounts/lst",t,{noAuth:!0})},e.getGeocoder=function(t){return i.default.get("lbs/geocoder?location=".concat(t.lat,",").concat(t.long),{},{noAuth:!0})},e.getGoodsDetails=function(t){return i.default.get("intention/detail/"+t,{})},e.getGroomList=function(t,e){return i.default.get("product/spu/hot/"+t,e,{noAuth:!0})},e.getHotBanner=function(t){return i.default.get("common/hot_banner/"+t,{},{noAuth:!0})},e.getLiveList=function(t){return i.default.get("broadcast/hot",t,{noAuth:!0})},e.getMerProductHot=function(t,e){return i.default.get("product/spu/recommend",{page:void 0===e.page?1:e.page,limit:void 0===e.limit?10:e.limit,mer_id:t||""},{noAuth:!0})},e.getMerchantLst=function(t){return i.default.get("user/relation/merchant/lst",t,{noAuth:!0})},e.getPresellProductDetail=function(t){return i.default.get("store/product/presell/detail/"+t,{},{noAuth:!0})},e.getPreviewProDetail=function(t){return i.default.get("store/product/preview",t,{noAuth:!0})},e.getProductCode=function(t,e){return i.default.get("store/product/qrcode/"+t,e)},e.getProductDetail=function(t){return i.default.get("store/product/detail/"+t,{},{noAuth:!0})},e.getProductHot=function(t,e){return i.default.get("product/spu/recommend",{page:void 0===t?1:t,limit:void 0===e?10:e},{noAuth:!0})},e.getProductslist=function(t){t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,o.default)({},t),t.brand_id=t.brand_id.toString());return i.default.get("product/spu/lst",t,{noAuth:!0})},e.getReplyConfig=function(t){return i.default.get("reply/config/"+t)},e.getReplyList=function(t,e){return i.default.get("store/product/reply/lst/"+t,e,{noAuth:!0})},e.getSearchKeyword=function(){return i.default.get("common/hot_keyword",{},{noAuth:!0})},e.getSeckillProductDetail=function(t){return i.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})},e.getStoreCategory=function(t,e){return i.default.get("store/merchant/category/lst/"+t,e,{noAuth:!0})},e.getStoreCoupon=function(t){return i.default.get("coupon/store/"+t,{noAuth:!0})},e.getStoreDetail=function(t,e){return i.default.get("store/merchant/detail/"+t,e,{noAuth:!0})},e.getStoreGoods=function(t,e){return i.default.get("product/spu/merchant/"+t,e,{noAuth:!0})},e.getStoreTypeApi=function(){return i.default.get("intention/type",{},{noAuth:!0})},e.merClassifly=function(){return i.default.get("intention/cate",{},{noAuth:!0})},e.merchantProduct=function(t,e){e.brand_id&&Array.isArray(e.brand_id)&&(e=(0,o.default)({},e),e.brand_id=e.brand_id.toString());return i.default.get("product/spu/merchant/"+t,e,{noAuth:!0})},e.merchantQrcode=function(t,e){return i.default.get("store/merchant/qrcode/"+t,e,{noAuth:!0})},e.postCartAdd=function(t){return i.default.post("user/cart/create",t)},e.priceRuleApi=function(t){return i.default.get("store/product/price_rule/".concat(t),{},{noAuth:!0})},e.productBag=function(t){return i.default.get("product/spu/bag",t,{noAuth:!0})},e.storeCategory=function(t){return i.default.get("store/product/category",t,{noAuth:!0})},e.storeCertificate=function(t){return i.default.post("store/certificate/".concat(t.merId),t)},e.storeListApi=function(t){return i.default.get("store_list",t,{noAuth:!0})},e.storeMerchantList=function(t){return i.default.get("store/merchant/lst",t,{noAuth:!0})},e.storeServiceList=function(t,e){return i.default.get("product/spu/local/".concat(t),e,{noAuth:!0})},e.unfollowStore=function(t){return i.default.post("user/relation/delete",{type:10,type_id:t})},e.updateGoodsRecord=function(t,e){return i.default.post("intention/update/"+t,e)},e.userCollectDel=function(t){return i.default.post("user/relation/lst/delete",t)},e.verify=function(t){return i.default.post("auth/verify",t)},n("d401"),n("d3b7"),n("25f0"),n("99af");var o=r(n("5530")),i=r(n("b5ef"))},2805:function(t,e,n){"use strict";n.r(e);var r=n("8263"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},7698:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={easyLoadimage:n("ae65").default},o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"user_store_attention",style:t.viewColor},[t._l(t.storeList,(function(e,n){return r("v-uni-view",{key:n,staticClass:"item",style:{"background-image":"url("+t.domain+"/static/diy/store_bg"+t.keyColor+".png)"}},[e.merchant?r("v-uni-view",{staticClass:"store_header",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goStore(e)}}},[r("v-uni-image",{attrs:{src:e.merchant.mer_avatar,mode:""}}),r("v-uni-view",{staticClass:"info"},[r("v-uni-view",{staticClass:"line1"},[r("v-uni-text",{staticClass:"name line1"},[t._v(t._s(e.merchant.mer_name))]),e.merchant.type_name?r("v-uni-text",{staticClass:"font-bg-red ml8"},[t._v(t._s(e.merchant.type_name))]):e.merchant.is_trader?r("v-uni-text",{staticClass:"font-bg-red ml8"},[t._v("自营")]):t._e()],1),r("v-uni-view",{staticClass:"btn",on:{click:function(r){r.stopPropagation(),arguments[0]=r=t.$handleEvent(r),t.bindDetele(e,n)}}},[t._v("取消关注")])],1)],1):t._e(),e.merchant&&e.merchant.showProduct.length>0?r("v-uni-view",{staticClass:"store_recommend"},[t._l(e.merchant.showProduct,(function(e,n){return n<3?[r("v-uni-navigator",{key:n+"_0",staticClass:"list",attrs:{url:"/pages/goods_details/index?id="+e.product_id,"hover-class":"none"}},[r("v-uni-view",{staticClass:"picture"},[r("easy-loadimage",{attrs:{mode:"widthFix","image-src":e.image}}),e.border_pic?r("v-uni-view",{staticClass:"border-picture",style:{backgroundImage:"url("+e.border_pic+")"}}):t._e()],1),r("v-uni-view",{staticClass:"price line1"},[t._v("¥ "+t._s(e.price))])],1)]:t._e()}))],2):t._e()],1)})),0==t.storeList.length?r("v-uni-view",{staticClass:"noCommodity"},[r("v-uni-view",{staticClass:"pictrue"},[r("v-uni-image",{attrs:{src:n("9832")}})],1),r("v-uni-view",{staticClass:"empty-txt"},[t._v("暂无数据")])],1):t._e()],2)},i=[]},8263:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af"),n("a434");var o=n("111c"),i=r(n("ae65")),a=n("26cb"),u=n("4f1b"),s=n("8342"),c=(getApp(),{components:{easyLoadimage:i.default},computed:(0,u.configMap)(["hide_mer_status"],(0,a.mapGetters)(["viewColor","keyColor"])),data:function(){return{domain:s.HTTP_REQUEST_URL,storeList:[],isScroll:!0,page:1,limit:20}},onLoad:function(){this.getList()},onReady:function(){},mounted:function(){},methods:{goStore:function(t){1!=this.hide_mer_status&&uni.navigateTo({url:"/pages/store/home/index?id=".concat(t.merchant.mer_id)})},getList:function(){var t=this;this.isScroll&&(0,o.getMerchantLst)({page:this.page,limit:this.limit}).then((function(e){t.isScroll=e.data.list.length>=t.limit,t.storeList=t.storeList.concat(e.data.list),t.page+=1}))},bindDetele:function(t,e){var n=this;(0,o.collectDel)({type:10,type_id:t.type_id}).then((function(t){uni.showToast({title:"已取消",icon:"none"}),n.storeList.splice(e,1)}))}},onReachBottom:function(){this.getList()},onPageScroll:function(t){uni.$emit("scroll")}});e.default=c},"918d":function(t,e,n){"use strict";var r=n("eaaa"),o=n.n(r);o.a},9832:function(t,e,n){t.exports=n.p+"static/img/noCart.67573212.png"},db09:function(t,e,n){"use strict";n.r(e);var r=n("7698"),o=n("2805");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("918d");var a=n("f0c5"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"e43416c8",null,!1,r["a"],void 0);e["default"]=u.exports},eaaa:function(t,e,n){var r=n("fefe");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("0213c4e6",r,!0,{sourceMap:!1,shadowMode:!1})},fefe:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.user_store_attention[data-v-e43416c8]{padding:%?20?%}.user_store_attention .item[data-v-e43416c8]{background-color:#fff;background-size:100%;background-repeat:no-repeat;border-radius:%?16?%;padding:0 %?20?%;margin-bottom:%?20?%}.user_store_attention .store_header[data-v-e43416c8]{position:relative;display:flex;padding:%?30?% %?10?%;align-items:center}.user_store_attention .store_header uni-image[data-v-e43416c8]{width:%?88?%;height:%?88?%;border-radius:50%}.user_store_attention .store_header .info[data-v-e43416c8]{flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:%?20?%;position:relative}.user_store_attention .store_header .info .name[data-v-e43416c8]{width:%?410?%;font-weight:700}.user_store_attention .store_header .info .des[data-v-e43416c8]{color:#666;font-size:%?22?%}.user_store_attention .store_header .info .btn[data-v-e43416c8]{display:flex;align-items:center;justify-content:center;position:absolute;right:0;top:50%;width:%?150?%;height:%?50?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border:1px solid #bbb;border-radius:%?25?%;font-size:%?26?%}.user_store_attention .store_recommend[data-v-e43416c8]{display:flex;padding-bottom:%?30?%}.user_store_attention .store_recommend .list[data-v-e43416c8]{width:%?210?%;margin-right:%?20?%}.user_store_attention .store_recommend .list .picture[data-v-e43416c8], .user_store_attention .store_recommend .list[data-v-e43416c8] uni-image, .user_store_attention .store_recommend .list[data-v-e43416c8] .easy-loadimage, .user_store_attention .store_recommend .list uni-image[data-v-e43416c8]{width:%?210?%;height:%?210?%;border-radius:%?10?%;position:relative}.user_store_attention .store_recommend .list .border-picture[data-v-e43416c8]{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:%?16?% %?16?% 0 0;background:50%/cover no-repeat}.user_store_attention .store_recommend .list[data-v-e43416c8]:last-child{margin-right:0}.user_store_attention .store_recommend .list .price[data-v-e43416c8]{text-align:center;color:var(--view-priceColor);font-size:%?24?%;margin-top:%?10?%;font-weight:700}',""]),t.exports=e}}]);