(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_seckill-index"],{"083d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-32401614]{background-color:#f5f5f5!important}body.?%PAGE?%[data-v-32401614]{background-color:#f5f5f5!important}.flash-sale .header[data-v-32401614]{width:%?710?%;height:%?300?%;margin:%?-215?% auto 0 auto;border-radius:%?20?%}.flash-sale .header uni-image[data-v-32401614]{width:100%;height:100%;border-radius:%?20?%}.flash-sale .seckillList[data-v-32401614]{padding:0 %?20?%}.flash-sale .seckillList .priceTag[data-v-32401614]{width:%?76?%;height:%?70?%}.flash-sale .seckillList .priceTag uni-image[data-v-32401614]{opacity:1}.flash-sale .seckillList .priceTag uni-image[data-v-32401614]{width:100%;height:100%}.flash-sale .timeLsit[data-v-32401614]{width:%?610?%;white-space:nowrap;margin:%?10?% 0}.flash-sale .timeLsit .item[data-v-32401614]{display:inline-block;font-size:%?20?%;color:#666;text-align:center;padding:%?11?% 0;box-sizing:border-box;height:%?96?%;margin-right:%?35?%}.flash-sale .timeLsit .item .time[data-v-32401614]{font-size:%?36?%;font-weight:600;color:#333}.flash-sale .timeLsit .item.on .time[data-v-32401614]{color:var(--view-theme)}.flash-sale .timeLsit .item.on .state[data-v-32401614]{width:%?90?%;height:%?30?%;line-height:%?28?%;border-radius:%?15?%;background-image:linear-gradient(90deg,var(--view-bntColor11),var(--view-bntColor12));color:#fff}.flash-sale .countDown[data-v-32401614]{height:%?92?%;border-bottom:1px solid #f0f0f0;margin-top:%?-14?%;font-size:%?28?%;color:#282828}.flash-sale .countDown .num[data-v-32401614]{font-size:%?28?%;font-weight:700;background-color:#ffcfcb;padding:%?4?% %?7?%;border-radius:%?3?%}.flash-sale .countDown .text[data-v-32401614]{font-size:%?28?%;color:#282828;margin-right:%?13?%}.flash-sale .list .item[data-v-32401614]{height:%?230?%;position:relative;width:%?710?%;margin:0 auto %?20?% auto;background-color:#fff;border-radius:%?20?%;padding:0 %?25?%}.flash-sale .list .item .pictrue[data-v-32401614]{width:%?180?%;height:%?180?%;border-radius:%?10?%}.flash-sale .list .item .pictrue uni-image[data-v-32401614]{width:100%;height:100%;border-radius:%?10?%}.flash-sale .list .item .text[data-v-32401614]{width:%?460?%;font-size:%?30?%;color:#333;height:%?166?%}.flash-sale .list .item .text .name[data-v-32401614]{width:100%}.flash-sale .list .item .text .money[data-v-32401614]{font-size:%?30?%;color:var(--view-priceColor)}.flash-sale .list .item .text .money .num[data-v-32401614]{font-size:%?40?%;font-weight:500}.flash-sale .list .item .text .money .y_money[data-v-32401614]{font-size:%?24?%;color:#999;-webkit-text-decoration-line:line-through;text-decoration-line:line-through;margin-left:%?15?%}.flash-sale .list .item .text .limit[data-v-32401614]{font-size:%?22?%;color:#999;margin-bottom:%?5?%}.flash-sale .list .item .text .limit .limitPrice[data-v-32401614]{margin-left:%?10?%}.flash-sale .list .item .text .progress[data-v-32401614]{overflow:hidden;background-color:var(--view-bgColor);width:%?260?%;border-radius:%?18?%;height:%?18?%;position:relative}.flash-sale .list .item .text .progress .bg-reds[data-v-32401614]{width:0;height:100%;transition:width .6s ease;background:linear-gradient(90deg,var(--view-bntColor11),var(--view-bntColor12))}.flash-sale .list .item .text .progress .piece[data-v-32401614]{position:absolute;left:8%;-webkit-transform:translateY(-50%);transform:translateY(-50%);top:49%;font-size:%?16?%;color:var(--view-theme)}.flash-sale .list .item .grab[data-v-32401614]{font-size:%?28?%;color:#fff;width:%?150?%;height:%?54?%;border-radius:%?27?%;text-align:center;line-height:%?54?%;position:absolute;right:%?30?%;bottom:%?30?%;background:#bbb}.flash-sale .list .item .grab.b-color[data-v-32401614]{background:var(--view-theme)}.flash-sale .saleBox[data-v-32401614]{width:100%;height:%?230?%;background:var(--view-theme);border-radius:0 0 %?50?% %?50?%}.tool-bar[data-v-32401614]{display:flex;align-items:center;height:40px}.fixed-head[data-v-32401614]{position:absolute;left:0;top:20px;width:100%;z-index:10}.fixed-head .icon-xiangzuo[data-v-32401614]{margin-right:%?40?%;margin-left:%?20?%;font-size:%?40?%;color:#fff}',""]),t.exports=e},1348:function(t,e,i){"use strict";i.r(e);var a=i("92e35"),n=i("1e7e");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("51d7");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"32401614",null,!1,a["a"],void 0);e["default"]=r.exports},"1e7e":function(t,e,i){"use strict";i.r(e);var a=i("784d"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"32e8":function(t,e,i){"use strict";i.r(e);var a=i("ae5c"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"3b3e":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.assistHelpList=function(t,e){return n.default.get("store/product/assist/user/"+t,e)},e.assistUserData=function(){return n.default.get("store/product/assist/count",{},{noAuth:!0})},e.getActivitycategory=function(t){return n.default.get("product/spu/active/category/"+t,{},{noAuth:!0})},e.getAssistDetail=function(t){return n.default.get("store/product/assist/detail/"+t)},e.getAssistList=function(t){return n.default.get("store/product/assist/lst",t,{noAuth:!0})},e.getAssistUser=function(t){return n.default.get("store/product/assist/share/"+t)},e.getBargainUserCancel=function(t){return n.default.post("store/product/assist/set/delete/"+t)},e.getBargainUserList=function(t){return n.default.get("store/product/assist/set/lst",t)},e.getCombinationDetail=function(t){return n.default.get("store/product/group/detail/"+t,{},{noAuth:!0})},e.getCombinationList=function(t){return n.default.get("store/product/group/lst",t,{noAuth:!0})},e.getCombinationPink=function(t){return n.default.get("store/product/group/get/"+t)},e.getCombinationPoster=function(t){return n.default.post("combination/poster",t)},e.getCombinationUser=function(t){return n.default.get("store/product/group/count",t,{noAuth:!0})},e.getCouponLst=function(t){return n.default.get("coupon/getlst",t,{noAuth:!0})},e.getMerchantServiceLst=function(t){return n.default.get("store/merchant/local",t,{noAuth:!0})},e.getNewPeopleCouponLst=function(t){return n.default.get("coupon/new_people",t,{noAuth:!0})},e.getPresellList=function(t){return n.default.get("store/product/presell/lst",t,{noAuth:!0})},e.getSeckillDetail=function(t){return n.default.get("store/product/seckill/detail/"+t,{},{noAuth:!0})},e.getSeckillIndexTime=function(){return n.default.get("store/product/seckill/select",{},{noAuth:!0})},e.getSeckillList=function(t){return n.default.get("store/product/seckill/lst",t,{noAuth:!0})},e.getTopicDetail=function(t){return n.default.get("activity/info/".concat(t),{},{noAuth:!0})},e.getTopicList=function(t,e){return n.default.get("activity/lst/".concat(t),e,{noAuth:!0})},e.getTopicProLst=function(t){return n.default.get("product/spu/labels",t,{noAuth:!0})},e.hotRankingApi=function(t){return n.default.get("product/spu/get_hot_ranking",t,{noAuth:!0})},e.initiateAssistApi=function(t){return n.default.post("store/product/assist/create/"+t)},e.postAssistHelp=function(t){return n.default.post("store/product/assist/set/"+t)},e.postCombinationRemove=function(t){return n.default.post("store/product/group/cancel",t)},e.presellAgreement=function(){return n.default.get("store/product/presell/agree")},e.scombinationCode=function(t){return n.default.get("combination/code/"+t)},e.seckillCode=function(t,e){return n.default.get("seckill/code/"+t,e)},e.spuTop=function(t){return n.default.get("store/product/category/hotranking",{},{noAuth:!0})},e.spuTopList=function(t){return n.default.get("product/spu/get_hot_ranking",t,{noAuth:!0})};var n=a(i("b5ef"))},"51d7":function(t,e,i){"use strict";var a=i("9283"),n=i.n(a);n.a},"784d":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d"),i("99af");var n=i("3b3e"),o=a(i("a394")),s=i("26cb"),r=i("4f1b"),l=i("8342"),c={components:{home:o.default},computed:(0,r.configMap)({statusBarHeight:0},(0,s.mapGetters)(["viewColor","keyColor"])),data:function(){return{domain:l.HTTP_REQUEST_URL,seckillList:[],timeList:[],active:5,scrollLeft:0,interval:0,status:1,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,intoindex:""}},onLoad:function(){this.getSeckillConfig()},methods:{goBack:function(){uni.navigateBack()},getSeckillConfig:function(){var t=this;(0,n.getSeckillIndexTime)().then((function(e){var i;t.timeList=e.data.seckillTime,t.active=e.data.seckillTimeIndex,t.$nextTick((function(){t.intoindex="sort"+e.data.seckillTimeIndex})),t.timeList.map((function(t){i=t.start_time>9?t.start_time+":00":"0"+t.start_time+":00",t.time=i})),t.timeList.length&&(setTimeout((function(){t.loading=!0}),2e3),t.seckillList=[],t.page=1,t.status=t.timeList[t.active].status,t.getSeckillList(),setTimeout((function(){}),500))}))},getSeckillList:function(){var t=this,e={page:t.page,limit:t.limit,start_time:t.timeList[t.active].start_time,end_time:t.timeList[t.active].end_time};t.loadend||t.pageloading||(this.pageloading=!0,(0,n.getSeckillList)(e).then((function(e){var i=e.data.list;i.map((function(t){t.percent=0===t.stock?"0%":(100*t.sales/t.stock).toFixed(2)+"%"}));var a=i.length<t.limit;t.page++,t.seckillList=t.seckillList.concat(i),t.pageloading=!1,t.loadend=a})).catch((function(e){t.pageloading=!1})))},settimeList:function(t,e){this.active=e,this.interval&&(clearInterval(this.interval),this.interval=null),this.interval=0,this.countDownHour="00",this.countDownMinute="00",this.countDownSecond="00",this.status=this.timeList[this.active].status,this.loadend=!1,this.page=1,this.seckillList=[],this.getSeckillList()},goDetails:function(t){uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id="+t.product_id})}},onReachBottom:function(){this.getSeckillList()}};e.default=c},"89a2":function(t,e,i){"use strict";var a=i("df3e"),n=i.n(a);n.a},9283:function(t,e,i){var a=i("083d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6154f507",a,!0,{sourceMap:!1,shadowMode:!1})},"92e35":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.viewColor},[i("v-uni-view",{staticClass:"flash-sale"},[i("v-uni-view",{staticClass:"fixed-head"},[i("v-uni-view",{staticClass:"sys-head",style:{height:t.statusBarHeight}}),i("v-uni-view",{staticClass:"tool-bar"},[i("v-uni-view",{staticClass:"iconfont icon-xiangzuo",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"saleBox"}),t.timeList.length>0?i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{attrs:{src:t.timeList[t.active].pic}})],1):t._e(),i("v-uni-view",{staticClass:"seckillList acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"priceTag"},[i("v-uni-image",{attrs:{src:t.domain+"/static/diy/priceTag"+t.keyColor+".png"}})],1),i("v-uni-view",{staticClass:"timeLsit"},[i("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden",height:"106rpx"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-into-view":t.intoindex}},[t._l(t.timeList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"item",class:t.active==a?"on":"",attrs:{id:"sort"+a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.settimeList(e,a)}}},[i("v-uni-view",{staticClass:"time"},[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"state"},[t._v(t._s(e.state))])],1)]}))],2)],1)],1),i("v-uni-view",{staticClass:"list"},[t._l(t.seckillList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-column-around"},[i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))]),i("v-uni-text",{staticClass:"y_money"},[t._v("￥"+t._s(e.ot_price))])],1),i("v-uni-view",{staticClass:"limit"},[t._v("限量"),i("v-uni-text",{staticClass:"limitPrice"},[t._v(t._s(e.stock)+t._s(e.unit_name||""))])],1),i("v-uni-view",{staticClass:"progress"},[i("v-uni-view",{staticClass:"bg-reds",style:"width:"+e.percent+";"}),i("v-uni-view",{staticClass:"piece"},[t._v("已抢"+t._s(e.percent))])],1)],1),1==t.status?i("v-uni-view",{staticClass:"grab b-color"},[t._v("马上抢")]):2==t.status?i("v-uni-view",{staticClass:"grab b-color"},[t._v("未开始")]):i("v-uni-view",{staticClass:"grab bg-color-hui"},[t._v("已结束")])],1)]}))],2)],1),0!=t.seckillList.length||1==t.page&&0!=t.active?t._e():i("v-uni-view",{staticClass:"noCommodity"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:"/static/images/noCart.png"}}),i("v-uni-view",[t._v("暂无商品，去看点什么吧")])],1)],1),i("home")],1)},n=[]},a394:function(t,e,i){"use strict";i.r(e);var a=i("e6ad"),n=i("32e8");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("89a2");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"e3ab8df0",null,!1,a["a"],void 0);e["default"]=r.exports},ae5c:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("26cb"),n=i("8342"),o={name:"Home",props:{},data:function(){return{domain:n.HTTP_REQUEST_URL,top:"",bottom:""}},computed:(0,a.mapGetters)(["homeActive","viewColor","keyColor"]),methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.top=t.touches[0].clientY,this.bottom="auto")},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){this.bottom="50px"}};e.default=o},df3e:function(t,e,i){var a=i("ef17");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("78caf9c6",a,!0,{sourceMap:!1,shadowMode:!1})},e6ad:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"},style:t.viewColor},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px",bottom:t.bottom},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart","open-type":"switchTab"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index","open-type":"switchTab"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image pictruea",attrs:{src:!0===t.homeActive?"/static/images/navbtn_open.gif":"/static/images/navbtn_close.gif"}})],1)],1)],1)],1)},n=[]},ef17:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-e3ab8df0]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-e3ab8df0]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-e3ab8df0]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-e3ab8df0]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)}.home .homeCon .iconfont[data-v-e3ab8df0]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-e3ab8df0]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme);box-shadow:0 %?5?% %?12?% rgba(0,0,0,.5)}.home .pictrue .image[data-v-e3ab8df0]{width:100%;height:100%}.pictruea[data-v-e3ab8df0]{width:100%;height:100%;display:block;object-fit:cover;vertical-align:middle}",""]),t.exports=e}}]);