(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_modify_pwd-index"],{"0b67":function(t,e,i){"use strict";var a=i("8912"),n=i.n(a);n.a},1390:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.isShowAuth&&t.code?i("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),t.isShowAuth&&t.code?i("v-uni-view",{staticClass:"Popup",style:"top:"+t.top+"px;"},[i("v-uni-view",{staticClass:"logo-auth"},[i("v-uni-image",{staticClass:"image",attrs:{src:t.routine_logo,mode:"aspectFit"}})],1),t.isWeixin?i("v-uni-text",{staticClass:"title"},[t._v("授权提醒")]):i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),t.isWeixin?i("v-uni-text",{staticClass:"tip"},[t._v("请授权头像等信息，以便为您提供更好的服务！")]):i("v-uni-text",{staticClass:"tip"},[t._v(t._s(t.info))]),i("v-uni-view",{staticClass:"bottom flex"},[i("v-uni-text",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("随便逛逛")]),i("v-uni-button",{staticClass:"item grant",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toWecahtAuth.apply(void 0,arguments)}}},[t.isWeixin?i("v-uni-text",{staticClass:"text"},[t._v("去授权")]):i("v-uni-text",{staticClass:"text"},[t._v("去登录")])],1)],1)],1):t._e()],1)},n=[]},1717:function(t,e,i){"use strict";i.r(e);var a=i("cbb2"),n=i("c1e3");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("0b67");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"787eb321",null,!1,a["a"],void 0);e["default"]=r.exports},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"26b3":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var i=setInterval((function(){e-=1,e<0&&clearInterval(i),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=a},"40ea":function(t,e,i){var a=i("eac8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0d096096",a,!0,{sourceMap:!1,shadowMode:!1})},"493d":function(t,e,i){"use strict";i.r(e);var a=i("e933"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"81cb":function(t,e,i){"use strict";var a=i("40ea"),n=i.n(a);n.a},8912:function(t,e,i){var a=i("b440");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e2282294",a,!0,{sourceMap:!1,shadowMode:!1})},b440:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ChangePassword[data-v-787eb321]{background:#fff;padding-top:%?53?%}.ChangePassword .phone[data-v-787eb321]{font-size:%?32?%}.ChangePassword .list .item[data-v-787eb321]{width:%?580?%;margin:0 auto;height:%?110?%;border-bottom:%?2?% solid #f0f0f0;display:flex;align-items:center}.ChangePassword .list .item uni-input[data-v-787eb321]{width:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-787eb321]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-787eb321]{width:%?340?%}.ChangePassword .list .item .code[data-v-787eb321]{font-size:%?32?%;position:relative;padding-left:%?26?%;color:var(--view-theme)}.ChangePassword .list .item .code[data-v-787eb321]::before{content:"";width:%?1?%;height:%?30?%;position:absolute;top:%?10?%;left:0;background:#ddd;display:inline-block}.ChangePassword .list .item .code.on[data-v-787eb321]{color:#b9b9bc!important}.ChangePassword .list .border[data-v-787eb321]{width:100%;height:%?21?%;background:#f5f5f5}.confirmBnt[data-v-787eb321]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?70?% auto 0 auto;text-align:center;line-height:%?90?%;background-color:var(--view-theme)}.getPhoneBtn[data-v-787eb321]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;border:1px solid var(--view-theme);color:var(--view-theme);margin:%?40?% auto 0 auto;text-align:center;line-height:%?90?%}.getPhoneBtn .iconfont[data-v-787eb321]{font-size:%?32?%;margin-right:%?12?%}',""]),t.exports=e},c1e3:function(t,e,i){"use strict";i.r(e);var a=i("c860"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c860:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("c7eb")),o=a(i("1da1")),s=a(i("26b3")),r=i("ef5b"),u=i("c6c3"),c=i("26cb"),d=a(i("f272")),l=a(i("025b")),f={mixins:[s.default],components:{authorize:d.default,Verify:l.default},data:function(){return{userInfo:{},phone:"",repassword:"",password:"",captcha:"",isAuto:!1,isShowAuth:!1,key:"",codeVal:"",disabled:!1}},computed:(0,c.mapGetters)(["isLogin","viewColor"]),onLoad:function(){this.isLogin?this.getUserInfo():(this.isAuto=!0,this.isShowAuth=!0)},methods:{onLoadFun:function(){this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,u.getUserInfo)().then((function(e){t.userInfo=e.data}))},confirmSubmit:function(){var t=this;return t.password?t.repassword?t.password!==t.repassword?t.$util.Tips({title:"两次密码不一致，请重新填写！"}):t.captcha?void(0,r.modifyPassword)({password:t.password,repassword:t.repassword,sms_code:t.captcha}).then((function(e){return t.$util.Tips({title:"修改成功！",icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(e){return t.$util.Tips({title:e})})):t.$util.Tips({title:"请填写验证码"}):t.$util.Tips({title:"请确认新密码！"}):t.$util.Tips({title:"请填写密码！"})},code:function(t){var e=this;return(0,o.default)((0,n.default)().mark((function i(){var a;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e,e.disabled=!0,i.next=4,(0,u.registerVerify)({phone:a.userInfo.phone,code:a.captcha,type:"change_pwd",captchaType:"blockPuzzle",captchaVerification:t.captchaVerification}).then((function(t){e.disabled=!1,a.$util.Tips({title:t.msg}),a.sendCode()})).catch((function(t){return e.disabled=!1,a.$util.Tips({title:t})}));case 4:case"end":return i.stop()}}),i)})))()},success:function(t){this.$refs.verify.hide(),this.code(t)},handleVerify:function(){this.$refs.verify.show()}}};e.default=f},cbb2:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.viewColor},[i("v-uni-form",{attrs:{"report-submit":"true"}},[i("v-uni-view",[i("v-uni-view",{staticClass:"ChangePassword"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"phone"},[t._v(t._s(t.userInfo.phone))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper codeVal"},[i("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:"验证码","placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),i("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleVerify.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1),i("v-uni-view",{staticClass:"border"}),i("v-uni-view",{staticClass:"item"},[i("v-uni-input",{attrs:{type:"password",placeholder:"新密码","placeholder-class":"placeholder",autocomplete:"off"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-input",{attrs:{type:"password",placeholder:"确认新密码","placeholder-class":"placeholder",autocomplete:"off"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],1)],1)],1),i("v-uni-button",{staticClass:"confirmBnt",attrs:{"form-type":"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmSubmit.apply(void 0,arguments)}}},[t._v("确认")])],1)],1),i("authorize",{attrs:{isAuto:t.isAuto,isShowAuth:t.isShowAuth},on:{onLoadFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadFun.apply(void 0,arguments)},authColse:function(e){arguments[0]=e=t.$handleEvent(e),t.authColse.apply(void 0,arguments)}}}),i("Verify",{ref:"verify",attrs:{captchaType:"blockPuzzle",imgSize:{width:"330px",height:"155px"}},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}})],1)},n=[]},e933:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),o=a(i("ff56")),s=i("31bd"),r=i("5cac"),u=i("26cb"),c=a(i("dae1")),d=i("4f1b"),l=(a(i("8b6a")),i("713c")),f=getApp(),p={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},components:{},data:function(){return{title:"用户登录",info:"请登录，将为您提供更好的服务！",isWeixin:this.$wechat.isWeixin(),canUseGetUserProfile:!1,code:null,top:0,mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,editModal:!1}},computed:(0,n.default)((0,n.default)({},(0,u.mapGetters)(["isLogin","userInfo","viewColor"])),(0,d.configMap)(["routine_logo"])),watch:{isLogin:function(t){!0===t&&this.$emit("onLoadFun",this.userInfo)},isShowAuth:function(t){this.getCode(this.isShowAuth)}},created:function(){this.top=uni.getSystemInfoSync().windowHeight/2-70,wx.getUserProfile&&(this.canUseGetUserProfile=!0),this.setAuthStatus(),this.getCode(this.isShowAuth)},methods:{setAuthStatus:function(){},getCode:function(t){t&&(this.code=1)},toWecahtAuth:function(){(0,l.toLogin)(!0)},getUserProfile:function(){var t=this,e=this;c.default.getUserProfile().then((function(i){var a=i.userInfo;a.code=t.code,a.spread=f.globalData.spid,a.spread_code=f.globalData.code,(0,s.commonAuth)({auth:{type:"routine",auth:a}}).then((function(i){if(200!=i.data.status)return uni.setStorageSync("auth_token",i.data.result.key),uni.navigateTo({url:"/pages/users/login/index"});var a=i.data.result.expires_time-o.default.time();e.$store.commit("UPDATE_USERINFO",i.data.result.user),e.$store.commit("LOGIN",{token:i.data.result.token,time:a}),e.$store.commit("SETUID",i.data.result.user.uid),o.default.set(r.EXPIRES_TIME,i.data.result.expires_time,a),o.default.set(r.USER_INFO,i.data.result.user,a),t.$emit("onLoadFun",i.data.result.user),i.data.result.user.isNew&&t.mp_is_new&&(t.editModal=!0)})).catch((function(t){uni.hideLoading(),uni.showToast({title:t.message,icon:"none",duration:2e3})}))})).catch((function(t){uni.hideLoading()}))},close:function(){var t=getCurrentPages();t[t.length-1];this.$emit("authColse",!1)}}};e.default=p},eac8:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.Popup[data-v-b811ad2a]{flex:1;align-items:center;justify-content:center;width:%?500?%;background-color:#fff;position:fixed;top:%?500?%;left:%?125?%;z-index:1000}.Popup .logo-auth[data-v-b811ad2a]{z-index:-1;position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?150?%;height:%?150?%;display:flex;align-items:center;justify-content:center;border:%?8?% solid #fff;border-radius:50%;background:#fff}.Popup .image[data-v-b811ad2a]{height:%?42?%;margin-top:%?-54?%}.Popup .title[data-v-b811ad2a]{font-size:%?28?%;color:#000;text-align:center;margin-top:%?30?%;align-items:center;justify-content:center;width:%?500?%;display:flex}.Popup .tip[data-v-b811ad2a]{font-size:%?22?%;color:#555;padding:0 %?24?%;margin-top:%?25?%;display:flex;align-items:center;justify-content:center}.Popup .bottom .item[data-v-b811ad2a]{width:%?250?%;height:%?80?%;background-color:#eee;text-align:center;line-height:%?80?%;margin-top:%?54?%;font-size:%?24?%;color:#666}.Popup .bottom .item .text[data-v-b811ad2a]{font-size:%?24?%;color:#666}.Popup .bottom .item.on[data-v-b811ad2a]{width:%?500?%}.flex[data-v-b811ad2a]{display:flex;flex-direction:row}.Popup .bottom .item.grant[data-v-b811ad2a]{font-weight:700;background-color:#e93323;\n  /* background-color: var(--view-theme); */border-radius:0;padding:0}.Popup .bottom .item.grant .text[data-v-b811ad2a]{font-size:%?28?%;color:#fff}.mask[data-v-b811ad2a]{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);z-index:99}',""]),t.exports=e},f272:function(t,e,i){"use strict";i.r(e);var a=i("1390"),n=i("493d");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("81cb");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"b811ad2a",null,!1,a["a"],void 0);e["default"]=r.exports}}]);