(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-columnGoods-goods_coupon_list-index~pages-columnGoods-goods_list-index~pages-columnGoods-goods~39995178"],{"58afa":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={WaterfallsFlowItem:i("ada9").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"wf-page wf-page"+t.type},[i("v-uni-view",[t.leftList.length?i("v-uni-view",{attrs:{id:"left"}},t._l(t.leftList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"wf-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.itemTap(e)}}},[i("WaterfallsFlowItem",{attrs:{item:e,isStore:t.isStore,type:t.type},on:{goShop:function(e){arguments[0]=e=t.$handleEvent(e),t.goShop.apply(void 0,arguments)}}})],1)})),1):t._e()],1),i("v-uni-view",[t.rightList.length?i("v-uni-view",{attrs:{id:"right"}},t._l(t.rightList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"wf-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.itemTap(e)}}},[i("WaterfallsFlowItem",{attrs:{item:e,isStore:t.isStore,type:t.type},on:{goShop:function(e){arguments[0]=e=t.$handleEvent(e),t.goShop.apply(void 0,arguments)}}})],1)})),1):t._e()],1)],1)},n=[]},"6b13":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var s=a(i("ae65")),n=i("26cb"),o={components:{easyLoadimage:s.default},computed:(0,n.mapGetters)(["viewColor"]),props:{item:{type:Object,require:!0},type:{type:Number,default:0},isStore:{type:[String,Number],default:"1"},isLogin:{type:Boolean,require:!1}},data:function(){return{}},methods:{goShop:function(t){this.$emit("goShop",t)},authOpen:function(){this.$emit("authOpen")},followToggle:function(t){this.$emit("followToggle",t)}}};e.default=o},"6d4f":function(t,e,i){var a=i("8bf5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("5eb4ecd0",a,!0,{sourceMap:!1,shadowMode:!1})},7629:function(t,e,i){"use strict";i.r(e);var a=i("e66d"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"8ac3":function(t,e,i){"use strict";i.r(e);var a=i("6b13"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"8bf5":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.wf-page[data-v-a7a22a3c]{display:grid;grid-template-columns:1fr 1fr;grid-gap:10px}.wf-item[data-v-a7a22a3c]{width:calc((100vw - 2 * 10px - 10px) / 2);padding-bottom:10px}.wf-page1 .wf-item[data-v-a7a22a3c]{margin-top:%?20?%;background-color:#fff;border-radius:%?20?%;padding-bottom:0}.wf-item-page[data-v-a7a22a3c]{padding-bottom:%?20?%}',""]),t.exports=e},"8ce8":function(t,e,i){var a=i("e67a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("925c34b6",a,!0,{sourceMap:!1,shadowMode:!1})},9920:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAAAcCAMAAAA6Lv8SAAAAM1BMVEUAAADoLh7pMiLqMyLpMiLpMyLqMCHpMiPrMiHpMyLqMiLoMyPoMSHoMSLqMSLpMiLpMyMht9apAAAAEHRSTlMADvTYrW4mUUzowb9Nh4ZS0H70hQAAAIhJREFUWMPt2FsOwzAIRNGL37HThv2vtkr70S0Mis8KRlgGAbSSXFcqDdpRDV1Wj0apaKuFpFzFmyUcdb4z7oxCHJ8DZWM6duU3ul75MsCybiXPbHz1iarV/51cVbJAGQO8teUTVb8/Y12893TDl27nuY0VZBaibmd8UsYIO1eE3TXCDSDALeUDS4UW35zX530AAAAASUVORK5CYII="},ada9:function(t,e,i){"use strict";i.r(e);var a=i("d34b"),s=i("8ac3");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("af6a");var o=i("f0c5"),r=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"7139f91b",null,!1,a["a"],void 0);e["default"]=r.exports},af6a:function(t,e,i){"use strict";var a=i("8ce8"),s=i.n(a);s.a},d34b:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={easyLoadimage:i("ae65").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return 0==t.type?i("v-uni-view",{staticClass:"wf-item-page wf-page0",style:t.viewColor},[i("v-uni-view",{staticClass:"pictrue"},[i("easy-loadimage",{attrs:{mode:"widthFix","image-src":t.item.image}}),0==t.item.stock?i("v-uni-view",{staticClass:"sell_out"},[t._v("已售罄")]):t._e(),t.item.border_pic?i("v-uni-view",{staticClass:"border-picture",style:{backgroundImage:"url("+t.item.border_pic+")"}}):t._e()],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.item.store_name))]),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"money"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.item.price))])],1)],1),t.item.show_svip_info&&t.item.show_svip_info.show_svip_price&&t.item.svip_price?i("v-uni-view",{staticClass:"acea-row row-middle svip"},[i("v-uni-text",{staticClass:"vip-money"},[t._v("￥"+t._s(t.item.svip_price))]),i("v-uni-view",{staticClass:"vipImg"},[i("v-uni-image",{attrs:{src:"/static/images/svip.png"}})],1)],1):t._e(),i("v-uni-view",{staticClass:"item_tags"},[0==t.item.product_type&&t.item.merchant.type_name?i("v-uni-text",{staticClass:"font-bg-red b-color"},[t._v(t._s(t.item.merchant.type_name))]):0==t.item.product_type&&t.item.merchant.is_trader?i("v-uni-text",{staticClass:"font-bg-red b-color"},[t._v("自营")]):t._e(),0!=t.item.product_type?i("v-uni-text",{class:"font_bg-red type"+t.item.product_type},[t._v(t._s(1==t.item.product_type?"秒杀":2==t.item.product_type?"预售":3==t.item.product_type?"助力":4==t.item.product_type?"拼团":""))]):t._e(),t.item.issetCoupon?i("v-uni-text",{staticClass:"tags_item ticket"},[t._v("领券")]):t._e(),1==t.item.delivery_free?i("v-uni-text",{staticClass:"tags_item delivery"},[t._v("包邮")]):t._e()],1)],1)],1):1==t.type?i("v-uni-view",{staticClass:"wf-page1",style:t.viewColor},[i("v-uni-view",{staticClass:"pictrue"},[i("easy-loadimage",{attrs:{mode:"widthFix","image-src":t.item.image}}),0==t.item.stock?i("v-uni-view",{staticClass:"sell_out"},[t._v("已售罄")]):t._e(),t.item.border_pic?i("v-uni-view",{staticClass:"border-picture",style:{backgroundImage:"url("+t.item.border_pic+")"}}):t._e()],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.item.store_name))]),i("v-uni-view",{staticClass:"money"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.item.price))])],1),t.item.show_svip_info.show_svip&&t.item.show_svip_info.show_svip_price?i("v-uni-view",{staticClass:"acea-row row-middle svip"},[i("v-uni-text",{staticClass:"vip-money"},[t._v("￥"+t._s(t.item.svip_price))]),i("v-uni-view",{staticClass:"vipImg"},[i("v-uni-image",{attrs:{src:"/static/images/svip.png"}})],1)],1):t._e(),i("v-uni-view",{staticClass:"item_tags acea-row"},[t.item.merchant.type_name&&0==t.item.product_type?i("v-uni-text",{staticClass:"font-bg-red b-color"},[t._v(t._s(t.item.merchant.type_name))]):t.item.merchant.is_trader&&0==t.item.product_type?i("v-uni-text",{staticClass:"font-bg-red b-color"},[t._v("自营")]):t._e(),0!=t.item.product_type?i("v-uni-text",{class:"font_bg-red type"+t.item.product_type},[t._v(t._s(1==t.item.product_type?"秒杀":2==t.item.product_type?"预售":3==t.item.product_type?"助力":4==t.item.product_type?"拼团":""))]):t._e(),t.item.issetCoupon?i("v-uni-text",{staticClass:"tags_item ticket"},[t._v("领券")]):t._e(),1==t.item.delivery_free?i("v-uni-text",{staticClass:"tags_item delivery"},[t._v("包邮")]):t._e()],1),i("v-uni-view",{staticClass:"score"},[t._v(t._s(t.item.rate)+"评分 "+t._s(t.item.reply_count)+"条评论")]),t.item.merchant?i("v-uni-view",{staticClass:"company",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goShop(t.item.merchant.mer_id)}}},[i("v-uni-text",{staticClass:"line1"},[t._v(t._s(t.item.merchant.mer_name))]),"1"!=t.isStore?i("v-uni-view",{staticClass:"flex"},[t._v("进店"),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1):t._e()],1):t._e()],1),t.item.max_extension>0&&(0==t.item.product_type||2==t.item.product_type)?[i("v-uni-view",{staticClass:"foot-bar"},[i("v-uni-text",{staticClass:"iconfont icon-fenxiang"}),t._v("最高赚 ¥"+t._s(t.item.max_extension))],1)]:t._e()],2):t._e()},n=[]},d920:function(t,e,i){"use strict";i.r(e);var a=i("58afa"),s=i("7629");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("e979");var o=i("f0c5"),r=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"a7a22a3c",null,!1,a["a"],void 0);e["default"]=r.exports},e66d:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("d3b7"),i("159b"),i("14d9"),i("ac1f");var s=a(i("ada9")),n={components:{WaterfallsFlowItem:s.default},props:{wfList:{type:Array,require:!0},updateNum:{type:Number,default:10},type:{type:Number,default:0},isStore:{type:[String,Number],default:"1"}},data:function(){return{allList:[],leftList:[],rightList:[],mark:0,boxHeight:[]}},watch:{wfList:{handler:function(t,e){var i=this;(!this.wfList.length||this.wfList.length===this.updateNum&&this.wfList.length<=this.allList.length)&&(this.allList=[],this.leftList=[],this.rightList=[],this.boxHeight=[],this.mark=0),this.wfList.length&&(this.allList=this.wfList,this.leftList=[],this.rightList=[],this.boxHeight=[],this.allList.forEach((function(t,e){(i.allList.length<3||i.allList.length<=7&&i.allList.length-e>1||i.allList.length>7&&i.allList.length-e>2)&&(e%2?i.rightList.push(t):i.leftList.push(t))})),this.allList.length<3?this.mark=this.allList.length+1:this.allList.length<=7?this.mark=this.allList.length-1:this.mark=this.allList.length-2,this.mark<this.allList.length&&this.waterFall())},immediate:!0,deep:!0},mounted:function(){},mark:function(){var t=this.allList.length;this.mark<t&&0!==this.mark&&this.boxHeight.length&&this.waterFall()}},methods:{waterFall:function(){var t=this.mark;if(0==t)this.leftList.push(this.allList[t]),this.getViewHeight(0);else if(1==t)this.rightList.push(this.allList[t]),this.getViewHeight(1);else{if(this.boxHeight.length){var e=this.boxHeight[0]>this.boxHeight[1]?1:0;e?this.rightList.push(this.allList[t]):this.leftList.push(this.allList[t])}else this.rightList.length<this.leftList.length?this.rightList.push(this.allList[t]):this.leftList.push(this.allList[t]);this.getViewHeight()}},getViewHeight:function(){var t=this;this.$nextTick((function(){setTimeout((function(){uni.createSelectorQuery().in(t).select("#right").boundingClientRect((function(e){e&&(t.boxHeight[1]=e.height),uni.createSelectorQuery().in(t).select("#left").boundingClientRect((function(e){e&&(t.boxHeight[0]=e.height),t.mark=t.mark+1})).exec()})).exec()}),100)}))},itemTap:function(t){this.$emit("itemTap",t)},goShop:function(t){this.$emit("goShop",t)}}};e.default=n},e67a:function(t,e,i){var a=i("24fb"),s=i("1de5"),n=i("9920");e=a(!1);var o=s(n);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.wf-item-page[data-v-7139f91b]{background:#fff;overflow:hidden;border-radius:%?16?%;padding-bottom:%?20?%}.wf-page0 .coupon[data-v-7139f91b]{background:#fff8f7;border:1px solid #e93323;border-radius:%?4?%;font-size:%?20?%;margin-left:%?18?%;padding:%?1?% %?4?%}.wf-page0 .pictrue[data-v-7139f91b]{width:100%!important;height:%?345?%;position:relative}.wf-page0 .pictrue[data-v-7139f91b] uni-image, .wf-page0 .pictrue[data-v-7139f91b] .easy-loadimage, .wf-page0 .pictrue uni-image[data-v-7139f91b]{height:%?345?%;border-radius:%?16?% %?16?% 0 0}.wf-page0 .pictrue .border-picture[data-v-7139f91b]{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:%?16?% %?16?% 0 0;background:50%/cover no-repeat}.loadfail-img[data-v-7139f91b]{width:100%;height:%?360?%}.svip[data-v-7139f91b]{margin:%?5?% 0 %?15?%}.vip-money[data-v-7139f91b]{color:#282828;font-size:%?22?%;margin-left:%?6?%;font-weight:700}.vipImg[data-v-7139f91b]{width:%?65?%;height:%?28?%;margin-left:%?4?%}.vipImg uni-image[data-v-7139f91b]{width:100%;height:100%;display:block}.wf-page0 .name[data-v-7139f91b]{color:#282828;margin:%?20?% 0 %?10?% 0;font-size:13px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.wf-page0 .text[data-v-7139f91b]{padding:0 %?20?%}.wf-page0 .money[data-v-7139f91b]{font-size:%?20?%;font-weight:700;color:var(--view-priceColor)}.b-color[data-v-7139f91b]{background-color:var(--view-theme);border:1px solid var(--view-theme)}.wf-page0 .money .num[data-v-7139f91b]{font-size:%?34?%}.wf-page1 .wf-item .name[data-v-7139f91b]{font-size:13px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.wf-page1 .pictrue[data-v-7139f91b]{position:relative;height:%?345?%;width:100%!important}.wf-page1 .pictrue[data-v-7139f91b] uni-image, .wf-page1 .pictrue[data-v-7139f91b] .easy-loadimage, .wf-page1 .pictrue uni-image[data-v-7139f91b]{height:%?345?%;border-radius:%?20?% %?20?% 0 0}.wf-page1 .pictrue .border-picture[data-v-7139f91b]{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:%?20?% %?20?% 0 0;background:50%/cover no-repeat}.sell_out[data-v-7139f91b]{display:flex;width:%?150?%;height:%?150?%;align-items:center;justify-content:center;border-radius:100%;background:rgba(0,0,0,.6);color:#fff;font-size:%?30?%;position:absolute;top:50%;left:50%;margin:%?-75?% 0 0 %?-75?%}.sell_out[data-v-7139f91b]::before{content:"";display:block;width:%?140?%;height:%?140?%;border-radius:100%;border:1px dashed #fff;position:absolute;top:%?5?%;left:%?5?%}.loading-img[data-v-7139f91b]{height:%?345?%;max-height:%?360?%}.wf-page1 .text[data-v-7139f91b]{padding:%?20?% %?17?% %?26?% %?17?%;font-size:%?30?%;color:#222}.wf-page1 .text .money[data-v-7139f91b]{display:flex;align-items:center;font-size:%?26?%;font-weight:700;margin-top:%?8?%;color:var(--view-priceColor)}.wf-page1 .text .money .num[data-v-7139f91b]{font-size:%?34?%}.item_tags[data-v-7139f91b]{margin-top:%?8?%;display:flex}.item_tags .tags_item[data-v-7139f91b]{display:flex;font-size:%?20?%;text-align:center;border-radius:%?5?%;padding:0 %?4?%;height:%?28?%;align-items:center;justify-content:center;margin-right:%?8?%}.item_tags .tags_item.ticket[data-v-7139f91b]{color:var(--view-theme);border:1px solid var(--view-theme)}.item_tags .tags_item.delivery[data-v-7139f91b]{color:#ff9000;border:1px solid #ff9000}.wf-page1 .text .money .ticket-big[data-v-7139f91b]{display:flex;align-items:center;justify-content:center;max-width:%?163?%;padding:0 %?6?%;height:%?28?%;margin-left:%?10?%;background-image:url('+o+");background-size:100% 100%;font-size:%?20?%;font-weight:400}.wf-page1 .text .score[data-v-7139f91b]{margin-top:%?10?%;color:#737373;font-size:%?20?%}.wf-page1 .text .company[data-v-7139f91b]{display:flex;align-items:center;color:#737373;font-size:%?20?%;margin-top:%?10?%}.wf-page1 .text .company .line1[data-v-7139f91b]{max-width:%?200?%}.wf-page1 .text .company .flex[data-v-7139f91b]{display:flex;align-items:center;margin-left:%?10?%;color:#282828}.wf-page1 .text .company .flex .iconfont[data-v-7139f91b]{font-size:%?16?%;margin-top:%?4?%}.foot-bar[data-v-7139f91b]{width:100%;height:%?52?%;display:flex;align-items:center;justify-content:center;background-image:linear-gradient(-90deg,var(--view-bntColor21),var(--view-bntColor22));border-radius:0 0 %?16?% %?16?%;color:#fff;font-size:%?24?%}.foot-bar .icon-fenxiang[data-v-7139f91b]{font-size:%?24?%;margin-right:%?10?%}",""]),t.exports=e},e979:function(t,e,i){"use strict";var a=i("6d4f"),s=i.n(a);s.a}}]);