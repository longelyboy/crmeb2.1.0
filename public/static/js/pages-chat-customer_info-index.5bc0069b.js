(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-customer_info-index"],{"21d0":function(t,i,e){"use strict";e.r(i);var n=e("5e74"),s=e("7edf");for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("52d5");var o=e("f0c5"),u=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"783afe3c",null,!1,n["a"],void 0);i["default"]=u.exports},"52d5":function(t,i,e){"use strict";var n=e("c71d"),s=e.n(n);s.a},"5e74":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{style:t.viewColor},[e("v-uni-form",{attrs:{"report-submit":"true"}},[t.userInfo?e("v-uni-view",[e("v-uni-view",{staticClass:"user-info"},[e("v-uni-image",{staticClass:"image",attrs:{src:t.userInfo.user.avatar||"/static/images/f.png"}}),e("v-uni-text",[t._v(t._s(t.userInfo.user.nickname))])],1),e("v-uni-view",{staticClass:"customerInfo"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"text"},[t._v("备注昵称")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:t.userInfo.mark,callback:function(i){t.$set(t.userInfo,"mark",i)},expression:"userInfo.mark"}})],1)],1),t.userInfo.user.phone?e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"text"},[t._v("手机号")]),e("v-uni-view",{staticClass:"input"},[t._v(t._s(t.userInfo.user.phone))])],1):t._e(),e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"text"},[t._v("推广员")]),e("v-uni-view",{staticClass:"input"},[t._v(t._s(t.userInfo.user.is_promoter?"是":"否"))])],1)],1)],1),e("v-uni-button",{staticClass:"confirmBnt",attrs:{"form-type":"submit"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.saveMark.apply(void 0,arguments)}}},[t._v("确认")])],1):t._e()],1)],1)},s=[]},"7edf":function(t,i,e){"use strict";e.r(i);var n=e("c4f6"),s=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},"9a07":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.customerInfo[data-v-783afe3c]{background:#fff;margin-top:%?20?%}.customerInfo .phone[data-v-783afe3c]{font-size:%?32?%}.customerInfo .list[data-v-783afe3c]{width:%?650?%;margin:0 auto}.customerInfo .list .item[data-v-783afe3c]{width:100%;height:%?110?%;display:flex;align-items:center;border-bottom:%?2?% solid #f0f0f0}.customerInfo .list .item .title[data-v-783afe3c]{color:#333;font-size:%?30?%}.customerInfo .list .item .text[data-v-783afe3c]{width:%?160?%}.customerInfo .list .item .input[data-v-783afe3c]{width:100%;margin-left:%?60?%;color:#666;font-size:%?30?%}.customerInfo .list .item uni-input[data-v-783afe3c]{width:100%;height:100%;font-size:%?30?%;color:#666}.confirmBnt[data-v-783afe3c]{font-size:%?32?%;width:%?650?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?70?% auto 0 auto;text-align:center;line-height:%?90?%;background-color:var(--view-theme)}.user-info[data-v-783afe3c]{padding:%?50?% %?30?% %?30?%;display:flex;align-items:center;background-color:#fff}.user-info .image[data-v-783afe3c]{width:%?111?%;height:%?111?%;border-radius:100%}.user-info uni-text[data-v-783afe3c]{margin-left:%?24?%;color:#333;font-size:%?32?%;font-weight:700}',""]),t.exports=i},c4f6:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d3b7");var n=e("c6c3"),s=e("26cb"),a={data:function(){return{userInfo:null,merId:"",uid:"",loading:!1}},computed:(0,s.mapGetters)(["isLogin","viewColor"]),onLoad:function(t){this.mer_id=t.mer_id,this.uid=t.uid,this.serviceUser()},methods:{saveMark:function(){var t=this;this.loading||(this.loading=!0,(0,n.serviceSaveMark)(this.mer_id,this.uid,this.userInfo.mark).then((function(t){uni.showToast({icon:"success",title:"保存成功"}),setTimeout((function(t){uni.navigateBack()}),1e3)})).catch((function(t){uni.showToast({title:t,icon:"none"})})).finally((function(i){setTimeout((function(i){t.loading=!1}),2e3)})))},serviceUser:function(){var t=this;uni.showLoading({title:"加载中",mask:!0}),(0,n.serviceUser)(this.mer_id,this.uid).then((function(i){t.userInfo=i.data})).catch((function(t){uni.showToast({title:t,icon:"none"}),setTimeout((function(t){uni.navigateBack()}),1e3)})).finally((function(t){uni.hideLoading()}))}}};i.default=a},c71d:function(t,i,e){var n=e("9a07");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("e73c2784",n,!0,{sourceMap:!1,shadowMode:!1})}}]);