(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-addGoods-freightTemplate"],{"0797":function(t,e,i){"use strict";i.r(e);var n=i("75fc"),a=i.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},"0d73":function(t,e,i){"use strict";i.r(e);var n=i("f770"),a=i("bcdf");for(var c in a)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("e48d");var s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d91fc9fc",null,!1,n["a"],void 0);e["default"]=l.exports},"381e":function(t,e,i){var n=i("3b98");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7e9af91d",n,!0,{sourceMap:!1,shadowMode:!1})},"3b98":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container_input[data-v-d91fc9fc]{background:#fff;padding:0 %?20?%;width:%?710?%;margin:auto;margin-top:%?31?%;border-radius:%?10?%}.container_input_item .select_and_input[data-v-d91fc9fc]{height:%?106?%;display:flex;align-items:center;justify-content:space-between}.container_input_item .select_and_input .greyColor[data-v-d91fc9fc]{color:#bbb}.container_input_item .radio[data-v-d91fc9fc]{padding:%?30?% 0}.container_input_item_label[data-v-d91fc9fc]{padding-left:%?10?%;color:#333;font-size:%?30?%;display:flex;align-items:center}.container_input_item_label .select_label[data-v-d91fc9fc]{max-width:%?520?%}.container_input_item_label .select_check[data-v-d91fc9fc]{display:flex;align-items:center;justify-content:center;width:%?40?%;height:%?40?%;border:1px solid #ccc;border-radius:50%;margin-right:%?20?%}.container_input_item_label .select_check .iconfont[data-v-d91fc9fc]{font-size:%?24?%}.container_input_item_label .select[data-v-d91fc9fc]{background:#e93323;border:none}.container_input_item_label .select .iconfont[data-v-d91fc9fc]{color:#fff}.container_input_item_value[data-v-d91fc9fc]{padding-right:%?10?%;flex:1;display:flex;align-items:center;justify-content:flex-end}.container_input_item_value > span[data-v-d91fc9fc]:nth-child(1){display:inline-block;margin-right:%?15?%}.container_input_item_value .text[data-v-d91fc9fc]{color:#000;display:inline-block;max-width:%?400?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container_input_item_value uni-input[data-v-d91fc9fc]{text-align:right}.container_input_item_value .select_group[data-v-d91fc9fc]{display:flex}.container_input_item_value_select[data-v-d91fc9fc]{display:flex;margin-right:%?110?%}.container_input_item .flex_start[data-v-d91fc9fc]{padding:0 %?10?%;margin-top:%?40?%;justify-content:flex-start}.container_input > uni-view[data-v-d91fc9fc]:not(:last-child){border-bottom:1px solid #eee}.inputPlaceHolder[data-v-d91fc9fc]{color:#bbb}',""]),t.exports=e},"668d":function(t,e,i){"use strict";i.r(e);var n=i("f6fe"),a=i("0797");for(var c in a)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("8766");var s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"17d1dbe6",null,!1,n["a"],void 0);e["default"]=l.exports},"75fc":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530"));i("4de4"),i("d3b7"),i("159b"),i("99af"),i("14d9");i("a5eb");var c=n(i("816e")),s=n(i("0d73")),l=i("fdb9"),o={components:{search:c.default,selectForm:s.default},data:function(){return{mer_id:"",allSelect:!1,administrationFlag:!1,selectNum:0,loaded:!1,loading:!1,where:{page:1,limit:999},selectFormList:[]}},watch:{selectFormList:{handler:function(t){this.selectNum=t.filter((function(t){return t.select})).length,this.selectNum==t.length?this.allSelect=!0:this.allSelect=!1},deep:!0}},onLoad:function(t){this.mer_id=t.mer_id},onShow:function(){this.getShippingList("")},onReachBottom:function(){this.getShippingList("")},methods:{getShippingList:function(t){var e=this;uni.showLoading({title:"加载中",mask:!0}),(0,l.templateList)(e.mer_id,(0,a.default)((0,a.default)({},e.where),{},{name:t})).then((function(t){uni.hideLoading(),e.selectFormList=t.data.list,e.selectFormList.length>0&&t.data.list.forEach((function(t){e.$set(t,"type","select"),e.$set(t,"label",t.name),e.$set(t,"jumpLogic",!0),e.$set(t,"select",!1),e.administrationFlag||e.$delete(t,"select")}))}),(function(t){e.$util.Tips({title:t.msg})}))},handleJumpLogic:function(t){uni.navigateTo({url:"/pages/product/addGoods/addFreightTemplate?mer_id=".concat(this.mer_id,"&shipping_id=").concat(t.shipping_template_id)})},newSpecifications:function(){uni.navigateTo({url:"/pages/product/addGoods/addFreightTemplate?mer_id=".concat(this.mer_id)})},subDel:function(){var t=this,e=[];if(t.selectFormList.forEach((function(t){t.select&&e.push(t.shipping_template_id)})),0==e.length)return t.$util.Tips({title:"请选择规格"});(0,l.templateDelete)(t.mer_id,{ids:e}).then((function(e){t.$util.Tips({title:e.message,icon:"success"}),t.where.page=1,t.selectFormList=[],t.getShippingList("")})).catch((function(e){return t.$util.Tips({title:e})}))},selectAll:function(){var t=this;this.allSelect=!this.allSelect,this.allSelect?this.selectFormList.forEach((function(e){t.$set(e,"select",!0)})):this.selectFormList.forEach((function(e){t.$set(e,"select",!1)}))},handleAdministration:function(){var t=this;this.administrationFlag=!this.administrationFlag,this.administrationFlag?this.selectFormList.forEach((function(e){t.$set(e,"select",!1)})):this.selectFormList.forEach((function(e){t.$delete(e,"select")}))}}};e.default=o},"79fa":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-17d1dbe6]{padding-bottom:%?150?%}.title[data-v-17d1dbe6]{background:#fff;display:flex;align-items:center;justify-content:space-between;padding:%?30?% %?40?% %?30?% %?35?%}.title .search_box[data-v-17d1dbe6]{flex:1;margin-right:%?35?%}.administration[data-v-17d1dbe6]{color:#000;font-size:%?30?%}.handle[data-v-17d1dbe6]{position:fixed;left:0;bottom:0;display:flex;align-items:center;justify-content:center;width:%?750?%;height:%?126?%;background:#fff}.handle_button[data-v-17d1dbe6]{display:flex;align-items:center;justify-content:center;color:#fff;font-size:%?32?%;width:%?690?%;height:%?86?%;background:#e93323;border-radius:%?43?%}.finish[data-v-17d1dbe6]{display:flex;justify-content:space-between;align-items:center;padding:0 %?30?%;box-sizing:border-box;position:fixed;left:0;bottom:0;width:100%;height:%?126?%;background:#fff}.finish > uni-view[data-v-17d1dbe6]:nth-child(1){display:flex;align-items:center}.finish > uni-view:nth-child(1) > span[data-v-17d1dbe6]:nth-child(1){width:%?38?%;height:%?38?%;border:1px solid #ccc;border-radius:50%;display:inline-block;margin-right:%?24?%;display:flex;align-items:center;justify-content:center}.finish > uni-view[data-v-17d1dbe6]:nth-child(2){width:%?180?%;height:%?70?%;border:1px solid #e93323;border-radius:35px;display:flex;align-items:center;justify-content:center;color:#e93323}.select[data-v-17d1dbe6]{background:#e93323;border:none!important}.select .iconfont[data-v-17d1dbe6]{color:#fff;font-size:%?24?%}',""]),t.exports=e},"7f2c":function(t,e,i){var n=i("79fa");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3b4bd04d",n,!0,{sourceMap:!1,shadowMode:!1})},8766:function(t,e,i){"use strict";var n=i("7f2c"),a=i.n(n);a.a},"8a1a":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b");var n={props:{platformClassification:{type:Array,default:function(){return[]}},form:{type:Object,default:function(){return{}}}},data:function(){return{value:"",formData:this.form}},watch:{formData:{handler:function(t){this.$emit("input",t)},deep:!0},form:{handler:function(t){this.formData=t},deep:!0}},created:function(){var t=this;this.platformClassification.forEach((function(e){e.inforValue&&t.$emit("formInitData",e.inforValue,e.model)}))},methods:{selectItem:function(t){t.jumpLogic?this.$emit("handleJumpLogic",t):this.$emit("handleSelectItem",t)},radioChange:function(t,e){this.$emit("radioChange",t.detail.value,e)},switchChange:function(t,e){this.$emit("switchChange",t.detail.value,e)},selectRadio:function(t){t.select=!t.select},checkChange:function(t,e){this.$emit("checkChange",t.detail.value,e)}}};e.default=n},bcdf:function(t,e,i){"use strict";i.r(e);var n=i("8a1a"),a=i.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},e48d:function(t,e,i){"use strict";var n=i("381e"),a=i.n(n);a.a},f6fe:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"search_box"},[i("search",{attrs:{holder:"请输入运费模板"},on:{getList:function(e){arguments[0]=e=t.$handleEvent(e),t.getShippingList.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"administration",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleAdministration.apply(void 0,arguments)}}},[t._v(t._s(t.administrationFlag?"完成":"管理"))])],1),i("v-uni-view",[t.selectFormList.length?i("v-uni-view",[i("select-form",{attrs:{platformClassification:t.selectFormList},on:{handleJumpLogic:function(e){arguments[0]=e=t.$handleEvent(e),t.handleJumpLogic.apply(void 0,arguments)}}})],1):t._e()],1),t.administrationFlag?i("v-uni-view",{staticClass:"finish"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectAll.apply(void 0,arguments)}}},[i("span",{class:{select:t.allSelect}},[t.allSelect?i("span",{staticClass:"iconfont"},[t._v("")]):t._e()]),i("span",[t._v("全选("+t._s(t.selectNum)+")")])]),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subDel.apply(void 0,arguments)}}},[t._v("删除")])],1):i("v-uni-view",{staticClass:"handle"},[i("v-uni-view",{staticClass:"handle_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.newSpecifications.apply(void 0,arguments)}}},[t._v("新增运费模板")])],1)],1)},a=[]},f770:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container_input"},t._l(t.platformClassification,(function(e,n){return e.DoNotShow?t._e():i("v-uni-view",{key:n,staticClass:"container_input_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectItem(e)}}},["select"==e.type||"input"==e.type||"switch"==e.type?i("v-uni-view",{staticClass:"select_and_input"},[i("v-uni-view",{staticClass:"container_input_item_label"},[-1!=Object.keys(e).indexOf("select")?i("v-uni-text",{staticClass:"select_check",class:{select:e.select},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.selectRadio(e)}}},[e.select?i("v-uni-text",{staticClass:"iconfont"},[t._v("")]):t._e()],1):t._e(),i("v-uni-text",{staticClass:"select_label line1"},[t._v(t._s(e.label))])],1),"select"==e.type?i("v-uni-view",{staticClass:"container_input_item_value greyColor"},[e.value?i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.value))]):i("v-uni-text",[t._v(t._s(e.holder))]),i("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1):t._e(),"input"==e.type?i("v-uni-view",{staticClass:"container_input_item_value"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:e.holder,"placeholder-class":"inputPlaceHolder"},model:{value:t.formData[e.model],callback:function(i){t.$set(t.formData,e.model,i)},expression:"formData[item.model]"}})],1):t._e(),"switch"==e.type?i("v-uni-view",{staticClass:"container_input_item_value"},[i("v-uni-switch",{staticStyle:{transform:"scale(0.8)"},attrs:{checked:1==t.formData[e.model],color:"#E93323"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange(i,e)}}})],1):t._e()],1):t._e(),"radio"==e.type||"check"==e.type?i("v-uni-view",{staticClass:"radio"},[i("v-uni-view",{staticClass:"container_input_item_label"},[t._v(t._s(e.label))]),"radio"==e.type?i("v-uni-view",{staticClass:"container_input_item_value flex_start"},[i("v-uni-radio-group",{staticClass:"select_group",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.radioChange(i,e)}}},t._l(e.radioList,(function(n,a){return i("v-uni-label",{key:n.value,staticClass:"container_input_item_value_select"},[i("v-uni-view",[i("v-uni-radio",{attrs:{value:n.value,checked:n.value==e.inforValue}})],1),i("v-uni-view",[t._v(t._s(n.name))])],1)})),1)],1):t._e(),"check"==e.type?i("v-uni-view",{staticClass:"container_input_item_value flex_start"},[i("v-uni-checkbox-group",{staticClass:"select_group",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.checkChange(i,e)}}},t._l(e.checkList,(function(n,a){return i("v-uni-label",{key:n.value,staticClass:"container_input_item_value_select"},[i("v-uni-view",[i("v-uni-checkbox",{staticClass:"chenk_list",attrs:{value:n.value,checked:n.value==e.inforValue}})],1),i("v-uni-view",[t._v(t._s(n.name))])],1)})),1)],1):t._e()],1):t._e()],1)})),1)},a=[]}}]);