(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-vip_grade-index"],{"0e21":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a394")),a=n("c6c3"),r=n("111c"),u={components:{home:o.default},data:function(){return{info:{},codeList:[{name:"付款码"},{name:"核销码"}],codeIndex:0,config:{qrc:{code:"",size:380,level:3,bgColor:"#FFFFFF",border:{color:["#eee","#eee"],lineWidth:1},color:["#333","#333"]}},user_latitude:0,user_longitude:0,storeList:[]}},onLoad:function(){this.levelInfo(),this.getCode();try{this.user_latitude=uni.getStorageSync("user_latitude"),this.user_longitude=uni.getStorageSync("user_longitude")}catch(t){}},onReady:function(){},onShow:function(){uni.removeStorageSync("form_type_cart")},mounted:function(){this.user_latitude&&this.user_longitude?this.getList():this.selfLocation()},methods:{goMap:function(){uni.navigateTo({url:"/pages/store/map/index"})},selfLocation:function(){var t=this,e=this;e.$wechat.isWeixin()?e.$wechat.location().then((function(n){t.user_latitude=n.latitude,t.user_longitude=n.longitude,uni.setStorageSync("user_latitude",n.latitude),uni.setStorageSync("user_longitude",n.longitude),e.getList()})):uni.getLocation({type:"wgs84",success:function(n){try{t.user_latitude=n.latitude,t.user_longitude=n.longitude,uni.setStorageSync("user_latitude",n.latitude),uni.setStorageSync("user_longitude",n.longitude)}catch(i){}e.getList()},complete:function(){e.getList()}})},getList:function(){var t=this,e={latitude:this.user_latitude||"",longitude:this.user_longitude||"",page:1,limit:1};(0,r.storeListApi)(e).then((function(e){t.storeList=e.data.list.list})).catch((function(e){t.$util.Tips({title:e})}))},getCode:function(){var t=this;(0,a.getRandCode)().then((function(e){var n=e.data.code;t.config.qrc.code=n})).catch((function(e){return t.$util.Tips(e)}))},levelInfo:function(){var t=this;(0,a.getlevelInfo)().then((function(e){t.info=e.data})).catch((function(e){return t.$util.Tips({title:e})}))},tapCode:function(t){if(this.codeIndex=t,0==t)this.getCode();else{var e=this.info.user.bar_code;this.config.qrc.code=e}},hello:function(t){}},onReachBottom:function(){}};e.default=u},"111c":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.arrivalNoticeApi=function(t){return a.default.post("store/product/increase_take",t)},e.bagExplain=function(){return a.default.get("store/product/bag/explain")},e.bagRecommend=function(){return a.default.get("product/spu/bag/recommend")},e.collectAdd=function(t){return a.default.post("user/relation/create",t)},e.collectAll=function(t){return a.default.post("user/relation/batch/create",t)},e.collectDel=function(t){return a.default.post("user/relation/delete",t)},e.copyPasswordApi=function(t){return a.default.get("product/spu/copy",t,{noAuth:!0})},e.copyPasswordSearch=function(t){return a.default.get("command/copy",t,{noAuth:!0})},e.create=function(t){return a.default.post("intention/create",t)},e.discountsCartAdd=function(t){return a.default.post("user/cart/batchCreate",t)},e.express=function(t){return a.default.post("ordero/express/"+t,{noAuth:!0})},e.followStore=function(t){return a.default.post("user/relation/create",{type:10,type_id:t})},e.getApplicationRecordList=function(t){return a.default.get("intention/lst",t)},e.getBrandlist=function(t){return a.default.get("store/product/brand/lst",t,{noAuth:!0})},e.getBroadcastListApi=function(t){return a.default.get("broadcast/lst",t,{noAuth:!0})},e.getCaptcha=function(){return a.default.get("captcha")},e.getCategoryList=function(){return a.default.get("store/product/category/lst",{},{noAuth:!0})},e.getCollectUserList=function(t){return a.default.get("user/relation/product/lst",t)},e.getCouponProductlist=function(t){t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,o.default)({},t),t.brand_id=t.brand_id.toString());return a.default.get("product/spu/coupon_product",t,{noAuth:!0})},e.getDiscountsLst=function(t){return a.default.get("discounts/lst",t,{noAuth:!0})},e.getGeocoder=function(t){return a.default.get("lbs/geocoder?location=".concat(t.lat,",").concat(t.long),{},{noAuth:!0})},e.getGoodsDetails=function(t){return a.default.get("intention/detail/"+t,{})},e.getGroomList=function(t,e){return a.default.get("product/spu/hot/"+t,e,{noAuth:!0})},e.getHotBanner=function(t){return a.default.get("common/hot_banner/"+t,{},{noAuth:!0})},e.getLiveList=function(t){return a.default.get("broadcast/hot",t,{noAuth:!0})},e.getMerProductHot=function(t,e){return a.default.get("product/spu/recommend",{page:void 0===e.page?1:e.page,limit:void 0===e.limit?10:e.limit,mer_id:t||""},{noAuth:!0})},e.getMerchantLst=function(t){return a.default.get("user/relation/merchant/lst",t,{noAuth:!0})},e.getPresellProductDetail=function(t){return a.default.get("store/product/presell/detail/"+t,{},{noAuth:!0})},e.getPreviewProDetail=function(t){return a.default.get("store/product/preview",t,{noAuth:!0})},e.getProductCode=function(t,e){return a.default.get("store/product/qrcode/"+t,e)},e.getProductDetail=function(t){return a.default.get("store/product/detail/"+t,{},{noAuth:!0})},e.getProductHot=function(t,e){return a.default.get("product/spu/recommend",{page:void 0===t?1:t,limit:void 0===e?10:e},{noAuth:!0})},e.getProductslist=function(t){t.brand_id&&Array.isArray(t.brand_id)&&(t=(0,o.default)({},t),t.brand_id=t.brand_id.toString());return a.default.get("product/spu/lst",t,{noAuth:!0})},e.getReplyConfig=function(t){return a.default.get("reply/config/"+t)},e.getReplyList=function(t,e){return a.default.get("store/product/reply/lst/"+t,e,{noAuth:!0})},e.getSearchKeyword=function(){return a.default.get("common/hot_keyword",{},{noAuth:!0})},e.getSeckillProductDetail=function(t){return a.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})},e.getStoreCategory=function(t,e){return a.default.get("store/merchant/category/lst/"+t,e,{noAuth:!0})},e.getStoreCoupon=function(t){return a.default.get("coupon/store/"+t,{noAuth:!0})},e.getStoreDetail=function(t,e){return a.default.get("store/merchant/detail/"+t,e,{noAuth:!0})},e.getStoreGoods=function(t,e){return a.default.get("product/spu/merchant/"+t,e,{noAuth:!0})},e.getStoreTypeApi=function(){return a.default.get("intention/type",{},{noAuth:!0})},e.merClassifly=function(){return a.default.get("intention/cate",{},{noAuth:!0})},e.merchantProduct=function(t,e){e.brand_id&&Array.isArray(e.brand_id)&&(e=(0,o.default)({},e),e.brand_id=e.brand_id.toString());return a.default.get("product/spu/merchant/"+t,e,{noAuth:!0})},e.merchantQrcode=function(t,e){return a.default.get("store/merchant/qrcode/"+t,e,{noAuth:!0})},e.postCartAdd=function(t){return a.default.post("user/cart/create",t)},e.priceRuleApi=function(t){return a.default.get("store/product/price_rule/".concat(t),{},{noAuth:!0})},e.productBag=function(t){return a.default.get("product/spu/bag",t,{noAuth:!0})},e.storeCategory=function(t){return a.default.get("store/product/category",t,{noAuth:!0})},e.storeCertificate=function(t){return a.default.post("store/certificate/".concat(t.merId),t)},e.storeListApi=function(t){return a.default.get("store_list",t,{noAuth:!0})},e.storeMerchantList=function(t){return a.default.get("store/merchant/lst",t,{noAuth:!0})},e.storeServiceList=function(t,e){return a.default.get("product/spu/local/".concat(t),e,{noAuth:!0})},e.unfollowStore=function(t){return a.default.post("user/relation/delete",{type:10,type_id:t})},e.updateGoodsRecord=function(t,e){return a.default.post("intention/update/"+t,e)},e.userCollectDel=function(t){return a.default.post("user/relation/lst/delete",t)},e.verify=function(t){return a.default.post("auth/verify",t)},n("d401"),n("d3b7"),n("25f0"),n("99af");var o=i(n("5530")),a=i(n("b5ef"))},"19c0":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"vipGrade"},[n("v-uni-view",{staticClass:"headerBg"},[t.info.user?n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"top acea-row row-middle"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t.info.user.avatar}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name acea-row row-middle"},[n("v-uni-view",{staticClass:"nameCon line1"},[t._v(t._s(t.info.user.nickname))]),t.info.level_info.grade?n("v-uni-view",{staticClass:"num"},[t._v("lv."+t._s(t.info.level_info.grade))]):t._e()],1),n("v-uni-view",{staticClass:"idNum"},[t._v("ID："+t._s(t.info.user.uid))])],1)],1),n("v-uni-view",{staticClass:"list acea-row row-around row-middle"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"num"},[t._v(t._s(t.info.user.now_money))]),n("v-uni-view",[t._v("余额")])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"num"},[t._v(t._s(t.info.user.integral))]),n("v-uni-view",[t._v("积分")])],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"num"},[t._v(t._s(t.info.level_info.discount?parseFloat(t.info.level_info.discount)/10:"0"))]),n("v-uni-view",[t._v("折扣")])],1)],1)],1):t._e()],1),n("v-uni-view",{staticClass:"qrCode"},[n("v-uni-view",{staticClass:"header acea-row row-between-wrapper"},t._l(t.codeList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"title",class:{on:t.codeIndex==i,onLeft:1==t.codeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapCode(i)}}},[t._v(t._s(e.name))])})),1),n("v-uni-view",{staticClass:"acea-row row-center-wrapper",staticStyle:{"margin-top":"35rpx"}},[n("w-qrcode",{attrs:{options:t.config.qrc},on:{generate:function(e){arguments[0]=e=t.$handleEvent(e),t.hello.apply(void 0,arguments)}}})],1)],1),t.storeList.length?n("v-uni-view",{staticClass:"store acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"iconfont icon-mendian1"}),t._v("附近门店")],1),n("v-uni-view",{staticClass:"acea-row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goMap.apply(void 0,arguments)}}},[t._v("距"),n("v-uni-view",{staticClass:"storeName line1"},[t._v(t._s(t.storeList[0].name))]),t._v(t._s(t.storeList[0].range)+"km"),n("v-uni-text",{staticClass:"iconfont icon-gengduo3"})],1)],1):t._e(),t.navigation?n("home"):t._e()],1)},o=[]},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"32e8":function(t,e,n){"use strict";n.r(e);var i=n("ae5c"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"401e":function(t,e,n){"use strict";var i=n("6893"),o=n.n(i);o.a},"46e8":function(t,e,n){t.exports=n.p+"static/img/grade-bg.b7ee9213.png"},6893:function(t,e,n){var i=n("6d29");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1fd4bb2e",i,!0,{sourceMap:!1,shadowMode:!1})},"6d05":function(t,e,n){"use strict";n.r(e);var i=n("0e21"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"6d29":function(t,e,n){var i=n("24fb"),o=n("1de5"),a=n("a063"),r=n("46e8");e=i(!1);var u=o(a),d=o(r);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-f068e138]{background:linear-gradient(121deg,#f5ebe1,#ffdfbe)}body.?%PAGE?%[data-v-f068e138]{background:linear-gradient(121deg,#f5ebe1,#ffdfbe)}.vipGrade .headerBg[data-v-f068e138]{background:url('+u+") no-repeat;background-size:100% 100%;width:100%;height:%?476?%;padding-top:%?1?%}.vipGrade .headerBg .header[data-v-f068e138]{background:url("+d+") no-repeat;background-size:100% 100%;width:%?690?%;height:%?286?%;margin:%?26?% auto;padding:%?28?% %?28?% 0 %?28?%}.vipGrade .headerBg .header .top .pictrue[data-v-f068e138]{width:%?92?%;height:%?92?%;border:1px solid #fff;margin-right:%?20?%;border-radius:50%}.vipGrade .headerBg .header .top .pictrue uni-image[data-v-f068e138]{border-radius:50%;width:100%;height:100%}.vipGrade .headerBg .header .top .text[data-v-f068e138]{width:%?400?%}.vipGrade .headerBg .header .top .text .name .nameCon[data-v-f068e138]{color:#edcaac;font-size:%?28?%;max-width:%?332?%;margin-right:%?10?%}.vipGrade .headerBg .header .top .text .name .num[data-v-f068e138]{border-radius:4px;border:1px solid #edcaac;background:rgba(215,177,144,.2);font-size:%?20?%;font-weight:400;color:#edcaac;padding:0 %?4?%}.vipGrade .headerBg .header .top .text .idNum[data-v-f068e138]{font-weight:400;color:#edcaac;font-size:%?24?%;margin-top:%?5?%}.vipGrade .headerBg .list[data-v-f068e138]{margin-top:%?46?%}.vipGrade .headerBg .list .item[data-v-f068e138]{color:#edcaac;font-size:%?22?%;text-align:center}.vipGrade .headerBg .list .item .num[data-v-f068e138]{font-size:%?40?%;margin-bottom:%?15?%}.vipGrade .qrCode[data-v-f068e138]{width:%?690?%;height:%?700?%;background:#fff;border-radius:%?18?%;margin:%?-134?% auto 0 auto;padding-top:%?60?%}.vipGrade .qrCode .header[data-v-f068e138]{width:%?330?%;height:%?60?%;border-radius:%?30?%;background:#eee;color:#333;font-size:%?30?%;margin:0 auto}.vipGrade .qrCode .header .title[data-v-f068e138]{width:%?146?%;height:100%;line-height:%?60?%;border-radius:%?30?%;text-align:center;padding-right:%?20?%}.vipGrade .qrCode .header .title.onLeft[data-v-f068e138]{padding-left:%?34?%}.vipGrade .qrCode .header .title.on[data-v-f068e138]{width:%?170?%;background-color:#333!important;color:#fff;padding:0!important}.vipGrade .store[data-v-f068e138]{width:%?690?%;height:%?100?%;background:linear-gradient(90deg,#ffae49,#fcc887);border-radius:%?18?%;margin:%?26?% auto;padding:0 %?30?%;color:#fff;font-weight:500;font-size:%?28?%}.vipGrade .store .iconfont[data-v-f068e138]{margin-right:%?20?%;font-size:%?38?%}.vipGrade .store .icon-gengduo3[data-v-f068e138]{font-size:%?24?%;margin-left:%?5?%;margin-right:0;margin-top:%?6?%}.vipGrade .store .storeName[data-v-f068e138]{display:inline-block;max-width:%?284?%;vertical-align:middle}",""]),t.exports=e},"89a2":function(t,e,n){"use strict";var i=n("df3e"),o=n.n(i);o.a},a063:function(t,e,n){t.exports=n.p+"static/img/big-bg.320aae07.png"},a394:function(t,e,n){"use strict";n.r(e);var i=n("e6ad"),o=n("32e8");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("89a2");var r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"e3ab8df0",null,!1,i["a"],void 0);e["default"]=u.exports},ae5c:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("26cb"),o=n("8342"),a={name:"Home",props:{},data:function(){return{domain:o.HTTP_REQUEST_URL,top:"",bottom:""}},computed:(0,i.mapGetters)(["homeActive","viewColor","keyColor"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY,this.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=a},c50a:function(t,e,n){"use strict";n.r(e);var i=n("19c0"),o=n("6d05");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("401e");var r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"f068e138",null,!1,i["a"],void 0);e["default"]=u.exports},df3e:function(t,e,n){var i=n("ef17");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("78caf9c6",i,!0,{sourceMap:!1,shadowMode:!1})},e6ad:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"touch-action":"none"},style:t.viewColor},[n("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?n("v-uni-view",{staticClass:"homeCon",class:!0===t.homeActive?"on":""},[n("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),n("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),n("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),n("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{staticClass:"image pictruea",attrs:{src:!0===t.homeActive?"/static/images/navbtn_open.gif":"/static/images/navbtn_close.gif"}})],1)],1)],1)],1)},o=[]},ef17:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".pictrueBox[data-v-e3ab8df0]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-e3ab8df0]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-e3ab8df0]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-e3ab8df0]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)}.home .homeCon .iconfont[data-v-e3ab8df0]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-e3ab8df0]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme);box-shadow:0 %?5?% %?12?% rgba(0,0,0,.5)}.home .pictrue .image[data-v-e3ab8df0]{width:100%;height:100%}.pictruea[data-v-e3ab8df0]{width:100%;height:100%;display:block;object-fit:cover;vertical-align:middle}",""]),t.exports=e}}]);