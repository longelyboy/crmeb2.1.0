(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-promoter-list-index"],{"0123":function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("4e82"),i("99af"),i("a9e3");var a=i("c6c3"),n=i("26cb"),s=o(i("f272")),r=i("8342"),c={components:{authorize:s.default},data:function(){return{domain:r.HTTP_REQUEST_URL,total:0,totalLevel:0,teamCount:0,page:1,limit:20,keyword:"",sort:"",grade:0,status:!1,recordList:[],isAuto:!1,isShowAuth:!1,userInfo:{}}},computed:(0,n.mapGetters)(["isLogin","viewColor","keyColor"]),onLoad:function(){this.isLogin?(this.userSpreadNewList(),this.getUserInfo()):(this.isAuto=!0,this.isShowAuth=!0)},onShow:function(){this.is_show&&(this.userSpreadNewList(),this.getUserInfo())},onHide:function(){this.is_show=!0},methods:{getUserInfo:function(){var t=this;(0,a.spreadInfo)().then((function(e){t.userInfo=e.data}))},onLoadFun:function(t){this.isShowAuth=!1,this.userSpreadNewList(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},setSort:function(t){this.sort=t,this.page=1,this.limit=20,this.status=!1,this.$set(this,"recordList",[]),this.userSpreadNewList()},submitForm:function(){this.page=1,this.limit=20,this.status=!1,this.$set(this,"recordList",[]),this.userSpreadNewList()},setType:function(t){this.grade!=t&&(this.grade=t,this.page=1,this.limit=20,this.keyword="",this.sort="",this.status=!1,this.$set(this,"recordList",[]),this.userSpreadNewList())},userSpreadNewList:function(){var t=this,e=t.page,i=t.limit,o=t.status,n=t.keyword,s=t.sort,r=t.grade,c=t.recordList,u=[];1!=o&&(0,a.spreadPeople)({page:e,limit:i,keyword:n,level:r+1,sort:s}).then((function(o){var a=o.data.list.length,n=o.data.list;u=c.concat(n),t.total=o.data.total,t.totalLevel=o.data.totalLevel,t.teamCount=t.$util.$h.Add(Number(o.data.total),Number(o.data.totalLevel)),t.status=i>a,t.page=e+1,t.$set(t,"recordList",u)}))}},onReachBottom:function(){this.userSpreadNewList()}};e.default=c},"01fb":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.viewColor},[i("v-uni-view",{staticClass:"promoter-list"},[i("v-uni-view",{staticClass:"promoterHeader"},[i("v-uni-view",{staticClass:"headerCon acea-row row-between-wrapper"},[i("v-uni-view",[i("v-uni-view",{staticClass:"name"},[t._v("推广人数")]),i("v-uni-view",[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.userInfo.spread_total))]),t._v("人")],1)],1),i("v-uni-view",{staticClass:"iconfont icon-tuandui"})],1)],1),i("v-uni-view",{staticClass:"nav acea-row row-around"},[i("v-uni-view",{class:0==t.grade?"item on":"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(0)}}},[t._v("一级("+t._s(t.userInfo.one_level_count)+")")]),i("v-uni-view",{class:1==t.grade?"item on":"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(1)}}},[t._v("二级("+t._s(t.userInfo.two_level_count)+")")])],1),i("v-uni-view",{staticClass:"search acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{attrs:{placeholder:"点击搜索会员名称","placeholder-class":"placeholder","confirm-type":"search",name:"search"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),i("v-uni-button",{staticClass:"iconfont icon-sousuo2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"sortNav acea-row row-middle"},["spread_count DESC"==t.sort?i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("spread_count ASC")}}},[t._v("团队排序"),i("v-uni-image",{attrs:{src:t.domain+"/static/diy/sort1"+t.keyColor+".png"}})],1):"spread_count ASC"==t.sort?i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("")}}},[t._v("团队排序"),i("v-uni-image",{attrs:{src:t.domain+"/static/diy/sort3"+t.keyColor+".png"}})],1):i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("spread_count DESC")}}},[t._v("团队排序"),i("v-uni-image",{attrs:{src:"/static/images/sort2.png"}})],1),"pay_price DESC"==t.sort?i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("pay_price ASC")}}},[t._v("金额排序"),i("v-uni-image",{attrs:{src:t.domain+"/static/diy/sort1"+t.keyColor+".png"}})],1):"pay_price ASC"==t.sort?i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("")}}},[t._v("金额排序"),i("v-uni-image",{attrs:{src:t.domain+"/static/diy/sort3"+t.keyColor+".png"}})],1):i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("pay_price DESC")}}},[t._v("金额排序"),i("v-uni-image",{attrs:{src:"/static/images/sort2.png"}})],1),"pay_count DESC"==t.sort?i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("pay_count ASC")}}},[t._v("订单排序"),i("v-uni-image",{attrs:{src:t.domain+"/static/diy/sort1"+t.keyColor+".png"}})],1):"pay_count ASC"==t.sort?i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("")}}},[t._v("订单排序"),i("v-uni-image",{attrs:{src:t.domain+"/static/diy/sort3"+t.keyColor+".png"}})],1):i("v-uni-view",{staticClass:"sortItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort("pay_count DESC")}}},[t._v("订单排序"),i("v-uni-image",{attrs:{src:"/static/images/sort2.png"}})],1)],1),t._l(t.recordList,(function(e,o){return[i("v-uni-view",{key:o+"_0",staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.avatar?e.avatar:"/static/images/f.png"}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.nickname))]),i("v-uni-view",[t._v("加入时间: "+t._s(e.spread_time))])],1)],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",[i("v-uni-text",{staticClass:"num t-color"},[t._v(t._s(e.spread_count?e.spread_count:0))]),t._v("人")],1),i("v-uni-view",[i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.pay_count?e.pay_count:0))]),t._v("单")],1),i("v-uni-view",[i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.pay_price?e.pay_price:0))]),t._v("元")],1)],1)],1)]}))],2)],1),i("authorize",{attrs:{isAuto:t.isAuto,isShowAuth:t.isShowAuth},on:{onLoadFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadFun.apply(void 0,arguments)},authColse:function(e){arguments[0]=e=t.$handleEvent(e),t.authColse.apply(void 0,arguments)}}})],1)},a=[]},"1c6c":function(t,e,i){"use strict";var o=i("d630"),a=i.n(o);a.a},"2bdb":function(t,e,i){"use strict";i.r(e);var o=i("01fb"),a=i("2fd2");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("92b9");var s=i("f0c5"),r=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"b33dd218",null,!1,o["a"],void 0);e["default"]=r.exports},"2fd2":function(t,e,i){"use strict";i.r(e);var o=i("0123"),a=i.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},"493d":function(t,e,i){"use strict";i.r(e);var o=i("e933"),a=i.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},6031:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.promoterHeader[data-v-b33dd218]{background-image:linear-gradient(90deg,var(--view-bntColor21) 0,var(--view-bntColor22))}.t-color[data-v-b33dd218]{color:var(--view-theme)}.promoter-list .nav[data-v-b33dd218]{background-color:#fff;height:%?86?%;line-height:%?86?%;font-size:%?28?%;color:#282828;border-bottom:1px solid #eee}.promoter-list .nav .item.on[data-v-b33dd218]{border-bottom:%?5?% solid var(--view-theme);color:var(--view-theme)}.promoter-list .search[data-v-b33dd218]{width:100%;background-color:#fff;height:%?86?%;padding-left:%?30?%;box-sizing:border-box}.promoter-list .search .input[data-v-b33dd218]{width:%?610?%;height:%?60?%;border-radius:%?50?%;background-color:#f5f5f5;text-align:center;position:relative}.promoter-list .search .input uni-input[data-v-b33dd218]{height:100%;font-size:%?26?%;width:%?610?%;text-align:center}.promoter-list .search .input .placeholder[data-v-b33dd218]{color:#bbb}.promoter-list .search .input .iconfont[data-v-b33dd218]{position:absolute;right:%?28?%;color:#999;font-size:%?28?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.promoter-list .search .iconfont[data-v-b33dd218]{font-size:%?45?%;color:#515151;width:%?110?%;height:%?60?%;line-height:%?60?%}.promoter-list .list[data-v-b33dd218]{margin-top:%?12?%}.promoter-list .list .sortNav[data-v-b33dd218]{background-color:#fff;height:%?76?%;border-bottom:1px solid #eee;color:#333;font-size:%?28?%}.promoter-list .list .sortNav .sortItem[data-v-b33dd218]{text-align:center;flex:1}.promoter-list .list .sortNav .sortItem uni-image[data-v-b33dd218]{width:%?24?%;height:%?24?%;margin-left:%?6?%;vertical-align:%?-3?%}.promoter-list .list .item[data-v-b33dd218]{background-color:#fff;border-bottom:1px solid #eee;height:%?152?%;padding:0 %?30?% 0 %?20?%;font-size:%?24?%;color:#666}.promoter-list .list .item .picTxt[data-v-b33dd218]{width:%?440?%}.promoter-list .list .item .picTxt .pictrue[data-v-b33dd218]{width:%?106?%;height:%?106?%;border-radius:50%}.promoter-list .list .item .picTxt .pictrue uni-image[data-v-b33dd218]{width:100%;height:100%;border-radius:50%;border:%?3?% solid #fff;box-shadow:0 0 %?10?% #aaa;box-sizing:border-box}.promoter-list .list .item .picTxt .text[data-v-b33dd218]{width:%?304?%;font-size:%?24?%;color:#666}.promoter-list .list .item .picTxt .text .name[data-v-b33dd218]{font-size:%?28?%;color:#333;margin-bottom:%?13?%}.promoter-list .list .item .right[data-v-b33dd218]{width:%?240?%;text-align:right;font-size:%?22?%;color:#333}.promoter-list .list .item .right .num[data-v-b33dd218]{margin-right:%?7?%}',""]),t.exports=e},"675f":function(t,e,i){var o=i("6031");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("0f46598a",o,!0,{sourceMap:!1,shadowMode:!1})},"92b9":function(t,e,i){"use strict";var o=i("675f"),a=i.n(o);a.a},a296:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.Popup[data-v-ac292046]{flex:1;align-items:center;justify-content:center;width:%?500?%;background-color:#fff;position:fixed;top:%?500?%;left:%?125?%;z-index:1000}.Popup .logo-auth[data-v-ac292046]{z-index:-1;position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?150?%;height:%?150?%;display:flex;align-items:center;justify-content:center;border:%?8?% solid #fff;border-radius:50%;background:#fff}.Popup .image[data-v-ac292046]{height:%?42?%;margin-top:%?-54?%}.Popup .title[data-v-ac292046]{font-size:%?28?%;color:#000;text-align:center;margin-top:%?30?%;align-items:center;justify-content:center;width:%?500?%;display:flex}.Popup .tip[data-v-ac292046]{font-size:%?22?%;color:#555;padding:0 %?24?%;margin-top:%?25?%;display:flex;align-items:center;justify-content:center}.Popup .bottom .item[data-v-ac292046]{width:%?250?%;height:%?80?%;background-color:#eee;text-align:center;line-height:%?80?%;margin-top:%?54?%;font-size:%?24?%;color:#666}.Popup .bottom .item .text[data-v-ac292046]{font-size:%?24?%;color:#666}.Popup .bottom .item.on[data-v-ac292046]{width:%?500?%}.flex[data-v-ac292046]{display:flex;flex-direction:row}.Popup .bottom .item.grant[data-v-ac292046]{font-weight:700;background-color:#e93323;\n  /* background-color: var(--view-theme); */border-radius:0;padding:0}.Popup .bottom .item.grant .text[data-v-ac292046]{font-size:%?28?%;color:#fff}.mask[data-v-ac292046]{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);z-index:99}',""]),t.exports=e},c15c:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.isShowAuth&&t.code?i("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),t.isShowAuth&&t.code?i("v-uni-view",{staticClass:"Popup",style:"top:"+t.top+"px;"},[i("v-uni-view",{staticClass:"logo-auth"},[i("v-uni-image",{staticClass:"image",attrs:{src:t.routine_logo,mode:"aspectFit"}})],1),t.isWeixin?i("v-uni-text",{staticClass:"title"},[t._v("授权提醒")]):i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),t.isWeixin?i("v-uni-text",{staticClass:"tip"},[t._v("请授权头像等信息，以便为您提供更好的服务！")]):i("v-uni-text",{staticClass:"tip"},[t._v(t._s(t.info))]),i("v-uni-view",{staticClass:"bottom flex"},[i("v-uni-text",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("随便逛逛")]),i("v-uni-button",{staticClass:"item grant",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toWecahtAuth.apply(void 0,arguments)}}},[t.isWeixin?i("v-uni-text",{staticClass:"text"},[t._v("去授权")]):i("v-uni-text",{staticClass:"text"},[t._v("去登录")])],1)],1)],1):t._e()],1)},a=[]},d630:function(t,e,i){var o=i("a296");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("8f383f98",o,!0,{sourceMap:!1,shadowMode:!1})},e933:function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("5530")),n=o(i("ff56")),s=i("31bd"),r=i("5cac"),c=i("26cb"),u=o(i("dae1")),d=i("4f1b"),l=(o(i("8b6a")),i("713c")),v=getApp(),p={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},components:{},data:function(){return{title:"用户登录",info:"请登录，将为您提供更好的服务！",isWeixin:this.$wechat.isWeixin(),canUseGetUserProfile:!1,code:null,top:0,mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,editModal:!1}},computed:(0,a.default)((0,a.default)({},(0,c.mapGetters)(["isLogin","userInfo","viewColor"])),(0,d.configMap)(["routine_logo"])),watch:{isLogin:function(t){!0===t&&this.$emit("onLoadFun",this.userInfo)},isShowAuth:function(t){this.getCode(this.isShowAuth)}},created:function(){this.top=uni.getSystemInfoSync().windowHeight/2-70,wx.getUserProfile&&(this.canUseGetUserProfile=!0),this.setAuthStatus(),this.getCode(this.isShowAuth)},methods:{setAuthStatus:function(){},getCode:function(t){t&&(this.code=1)},toWecahtAuth:function(){(0,l.toLogin)(!0)},getUserProfile:function(){var t=this,e=this;u.default.getUserProfile().then((function(i){var o=i.userInfo;o.code=t.code,o.spread=v.globalData.spid,o.spread_code=v.globalData.code,(0,s.commonAuth)({auth:{type:"routine",auth:o}}).then((function(i){if(200!=i.data.status)return uni.setStorageSync("auth_token",i.data.result.key),uni.navigateTo({url:"/pages/users/login/index"});var o=i.data.result.expires_time-n.default.time();e.$store.commit("UPDATE_USERINFO",i.data.result.user),e.$store.commit("LOGIN",{token:i.data.result.token,time:o}),e.$store.commit("SETUID",i.data.result.user.uid),n.default.set(r.EXPIRES_TIME,i.data.result.expires_time,o),n.default.set(r.USER_INFO,i.data.result.user,o),t.$emit("onLoadFun",i.data.result.user),i.data.result.user.isNew&&t.mp_is_new&&(t.editModal=!0)})).catch((function(t){uni.hideLoading(),uni.showToast({title:t.message,icon:"none",duration:2e3})}))})).catch((function(t){uni.hideLoading()}))},close:function(){var t=getCurrentPages();t[t.length-1];this.$emit("authColse",!1)}}};e.default=p},f272:function(t,e,i){"use strict";i.r(e);var o=i("c15c"),a=i("493d");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("1c6c");var s=i("f0c5"),r=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"ac292046",null,!1,o["a"],void 0);e["default"]=r.exports}}]);