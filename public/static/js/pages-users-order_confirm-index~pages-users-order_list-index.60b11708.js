(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-order_confirm-index~pages-users-order_list-index"],{"02a0":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d401"),i("d3b7"),i("25f0"),i("7db0"),i("ac1f"),i("00b4");var n=a(i("5530")),o=i("c6c3"),r=i("26cb"),s={props:{invoice:{type:Object,default:function(){return{invoice:!1,mer_id:0}}}},computed:(0,n.default)({},(0,r.mapGetters)(["viewColor"])),data:function(){return{id:"",receipt_title_type:"1",receipt_type:"1",drawer_phone:"",receipt_title:"",duty_paragraph:"",tel:"",address:"",bank_name:"",bank_code:"",is_default:0,email:"",isDefault:[],typeName:"增值税电子普通发票",popupType:!1,popupTitle:!1,invoiceTypeList:[{type:"1",name:"增值税电子普通发票",info:"默认发送至所提供的电子邮件"},{type:"2",name:"增值税专用发票",info:"纸质发票开出后将以邮寄形式交付"}],special_invoice:!0,invoice_func:!0,invoiceList:[],invoice_checked:"",invoice_id:"",order_id:"",news:"",cartId:"",pinkId:"",couponId:"",addressId:"",invoiceData:{},formvalidate:!1}},watch:{},onLoad:function(t){this.news=t.news,this.cartId=t.cartId,this.pinkId=t.pinkId,this.couponId=t.couponId,this.addressId=t.addressId,"false"==t.special_invoice&&this.$set(this,"special_invoice",!1)},onShow:function(){this.getInvoiceDefault(),this.popupTitle=!1},methods:{getInvoiceList:function(){var t=this;(0,o.invoice)().then((function(e){for(var i=0;i<e.data.length;i++)e.data[i].user_receipt_id=e.data[i].user_receipt_id.toString(),e.data[i].is_default&&(t.invoice_id=e.data[i].user_receipt_id);t.$set(t,"invoiceList",e.data)})).catch((function(e){t.$util.Tips({title:e})}))},getInvoiceDefault:function(){var t=this;(0,o.invoice)({is_default:1}).then((function(e){var i=e.data[0];t.typeName="1"==i.receipt_type?"增值税电子普通发票":"增值税专用发票",t.receipt_title_type=i.receipt_title_type,t.receipt_type=i.receipt_type,t.receipt_title=i.receipt_title,t.email=i.email,t.duty_paragraph=i.duty_paragraph,t.bank_name=i.bank_name,t.bank_code=i.bank_code,t.address=i.address,t.tel=i.tel,t.invoice_id=i.user_receipt_id.toString()})).catch((function(t){}))},getInvoiceDetail:function(t){var e=this;(0,o.invoiceDetail)(t).then((function(t){uni.hideLoading(),e.receipt_title_type=t.data.receipt_title_type,e.receipt_type=t.data.receipt_type,e.typeName="1"==e.receipt_type?"增值税电子普通发票":"增值税专用发票",e.receipt_title=t.data.receipt_title,e.email=t.data.email,e.duty_paragraph=t.data.duty_paragraph,e.bank_name=t.data.bank_name,e.bank_code=t.data.bank_code,e.address=t.data.address,e.tel=t.data.tel,e.is_default=t.data.is_default})).catch((function(t){uni.hideLoading(),e.$util.Tips({title:t})}))},close:function(){this.formvalidate?this.$emit("changeInvoiceClose",this.invoiceData):this.$emit("changeInvoiceClose","")},noInvoice:function(){uni.setStorage({key:"invoice_Data",data:{},success:function(){}}),this.$emit("changeInvoiceClose","")},callType:function(){this.popupType=!0},changeType:function(t){var e=this;this.receipt_type=t.detail.value,this.typeName=this.invoiceTypeList.find((function(t){return t.type==e.receipt_type})).name},closeType:function(){this.popupType=!1},callTitle:function(){this.popupTitle=!0},changeTitle:function(t){this.invoice_id=t.detail.value.toString(),this.getInvoiceDetail(t.detail.value),this.popupTitle=!1},addTitle:function(){this.popupType=!1,this.popupTitle=!1,uni.navigateTo({url:"/pages/users/user_invoice_form/index?mer_id="+this.invoice.mer_id})},closeTitle:function(){this.popupTitle=!1},changeHeader:function(t){this.receipt_title_type=t.detail.value,1==t.detail.value&&(this.receipt_type=1,this.typeName="增值税电子普通发票"),this.receipt_type},changeDefault:function(t){this.is_default=t.detail.value.length?1:0},formSubmit:function(t){var e=t.detail.value;if(!e.receipt_title_type)return this.$util.Tips({title:"请填写发票抬头"});if(!e.email)return this.$util.Tips({title:"请填写邮箱"});if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.email))return this.$util.Tips({title:"请输入正确的邮箱"});if(2==e.receipt_title_type){if(!e.duty_paragraph)return this.$util.Tips({title:"请填写税号"});if("增值税专用发票"==e.receipt_type){if(!e.bank_name)return this.$util.Tips({title:"请填写开户行"});if(!e.bank_code)return this.$util.Tips({title:"请填写银行账号"});if(!e.address)return this.$util.Tips({title:"请填写企业地址"});if(!e.tel)return this.$util.Tips({title:"请填写企业电话"});if(!/^(\d{9}|\d{14}|\d{18})$/.test(e.bank_code))return this.$util.Tips({title:"请输入正确的银行账号"});if(!/(^(\d{3,4})?\d{7,8})$|(13[0-9]{9})/.test(e.tel))return this.$util.Tips({title:"请输入正确的电话号码"})}}this.formvalidate=!0,e.mer_id=this.invoice.mer_id,e.receipt_type=this.receipt_type,this.invoiceData=e,uni.setStorage({key:"invoice_Data",data:[this.invoiceData],success:function(){}}),this.$emit("changeInvoiceClose",this.invoiceData)}}};e.default=s},"35ae":function(t,e,i){"use strict";var a=i("8b2f"),n=i.n(a);n.a},4673:function(t,e,i){"use strict";i.r(e);var a=i("02a0"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"6fe1":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.add_invoicing[data-v-30d217b6]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:77;border-radius:%?16?% %?16?% 0 0;padding-bottom:%?20?%;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9)}.add_invoicing.on[data-v-30d217b6]{-webkit-transform:translateZ(0);transform:translateZ(0)}.add_invoicing .title[data-v-30d217b6]{font-size:%?32?%;font-weight:700;text-align:center;height:%?123?%;line-height:%?123?%;position:relative}.add_invoicing .title .iconfont[data-v-30d217b6]{position:absolute;right:%?30?%;color:#8a8a8a;font-size:%?35?%}uni-form[data-v-30d217b6]{font-size:%?28?%;color:#282828}uni-form uni-input[data-v-30d217b6], uni-form uni-radio-group[data-v-30d217b6]{flex:1;text-align:right}uni-form uni-input[data-v-30d217b6]{font-size:%?26?%}uni-form uni-label[data-v-30d217b6]{margin-right:%?50?%}uni-form uni-radio[data-v-30d217b6]{margin-right:%?8?%}uni-form uni-checkbox-group[data-v-30d217b6]{height:%?90?%}uni-form uni-checkbox[data-v-30d217b6]{margin-right:%?20?%}[data-v-30d217b6] uni-radio .uni-radio-input.uni-radio-input-checked{border:1px solid var(--view-theme)!important;background-color:var(--view-theme)!important}uni-form uni-button[data-v-30d217b6]{height:%?76?%;border-radius:%?38?%;margin:%?16?% %?30?%;background-color:var(--view-theme);font-size:%?30?%;line-height:%?76?%;color:#fff}.panel[data-v-30d217b6]{padding-right:%?30?%;padding-left:%?30?%;background-color:#fff}.panel ~ .panel[data-v-30d217b6]{margin-top:%?14?%}.panel .acea-row[data-v-30d217b6]{height:%?90?%}.panel .acea-row ~ .acea-row[data-v-30d217b6]{border-top:1px solid #eee}.input-placeholder[data-v-30d217b6]{font-size:%?26?%;color:#bbb}.icon-xiangyou[data-v-30d217b6]{margin-left:%?25?%;font-size:%?18?%;color:#bfbfbf}.btn-wrap[data-v-30d217b6]{width:100%;border-top:1px solid #f5f5f5}.btn-wrap .button[data-v-30d217b6]{height:%?86?%;line-height:%?86?%;border-radius:%?50?%}.btn-wrap .back[data-v-30d217b6]{border-radius:%?50?%;height:%?86?%;line-height:%?86?%;border:%?1?% solid var(--view-theme);background:none;color:var(--view-theme)}.popup[data-v-30d217b6]{position:fixed;bottom:0;left:0;z-index:99;width:100%;padding-bottom:%?100?%;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;background-color:#f5f5f5;overflow:hidden;-webkit-transform:translateY(100%);transform:translateY(100%);transition:.3s}.popup.on[data-v-30d217b6]{-webkit-transform:translateY(0);transform:translateY(0)}.popup .title[data-v-30d217b6]{position:relative;height:%?137?%;font-size:%?32?%;line-height:%?137?%;text-align:center}.popup uni-scroll-view[data-v-30d217b6]{height:%?466?%;padding-right:%?30?%;padding-left:%?30?%;box-sizing:border-box}.popup uni-label[data-v-30d217b6]{padding:%?35?% %?30?%;border-radius:%?16?%;margin-bottom:%?20?%;background-color:#fff}.popup .text[data-v-30d217b6]{flex:1;min-width:0;font-size:%?28?%;color:#282828}.popup .info[data-v-30d217b6]{margin-top:%?10?%;font-size:%?22?%;color:#909090}.popup .icon-guanbi[data-v-30d217b6]{position:absolute;top:50%;right:%?30?%;z-index:2;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?30?%;color:#707070;cursor:pointer}.popup uni-button[data-v-30d217b6]{height:%?86?%;border-radius:%?43?%;margin-right:%?30?%;margin-left:%?30?%;background-color:var(--view-theme);font-size:%?30?%;line-height:%?86?%;color:#fff}uni-button.btn-default[data-v-30d217b6]{background-color:initial;color:var(--view-theme);border:1px solid var(--view-theme)}.popup .text .acea-row[data-v-30d217b6]{display:inline-flex;max-width:100%}.popup .name[data-v-30d217b6]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?30?%}.popup .label[data-v-30d217b6]{width:%?70?%;height:%?28?%;border:1px solid #e93323;margin-left:%?18?%;font-size:%?16?%;line-height:%?26?%;text-align:center;color:#e93323}.popup .type[data-v-30d217b6]{width:%?124?%;height:%?42?%;margin-top:%?14?%;background-color:#fcf0e0;font-size:%?24?%;line-height:%?42?%;text-align:center;color:#d67300}.popup .type.special[data-v-30d217b6]{background-color:#fde9e7;color:#e93323}.nothing[data-v-30d217b6]{margin:%?50?% 0;text-align:center}.nothing uni-image[data-v-30d217b6], .nothing uni-image[data-v-30d217b6]{width:%?400?%;height:%?260?%}.nothing_text[data-v-30d217b6]{margin-top:%?20?%;color:#999}',""]),t.exports=e},"8b2f":function(t,e,i){var a=i("6fe1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("47a5f817",a,!0,{sourceMap:!1,shadowMode:!1})},a572:function(t,e,i){"use strict";i.r(e);var a=i("e716"),n=i("4673");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("35ae");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"30d217b6",null,!1,a["a"],void 0);e["default"]=s.exports},b723:function(t,e,i){t.exports=i.p+"static/img/noInvoice.10bd0fdf.png"},e716:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:t.viewColor},[a("v-uni-view",{staticClass:"add_invoicing",class:1==t.invoice.invoice?"on":""},[a("v-uni-view",{staticClass:"title"},[t._v("选择发票"),a("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1),a("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"panel"},["1"==t.receipt_title_type?a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("发票类型")]),a("v-uni-input",{attrs:{name:"receipt_type",value:t.typeName,disabled:"true"}})],1):t._e(),"2"==t.receipt_title_type?a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("发票类型")]),a("v-uni-input",{attrs:{name:"receipt_type",value:t.typeName,disabled:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.callType.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1):t._e(),a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("抬头类型")]),a("v-uni-radio-group",{attrs:{name:"receipt_title_type"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeHeader.apply(void 0,arguments)}}},[a("v-uni-label",[a("v-uni-radio",{attrs:{value:"1",checked:"1"==t.receipt_title_type}}),a("v-uni-text",[t._v("个人")])],1),a("v-uni-label",[a("v-uni-radio",{attrs:{value:"2",checked:"2"==t.receipt_title_type}}),a("v-uni-text",[t._v("企业")])],1)],1)],1),a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("发票抬头")]),a("v-uni-input",{attrs:{name:"receipt_title",value:t.receipt_title,maxlength:20,placeholder:"需要开具发票的企业名称"}}),a("v-uni-text",{staticClass:"iconfont icon-xiangyou",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.callTitle.apply(void 0,arguments)}}})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"2"==t.receipt_title_type,expression:"receipt_title_type == '2'"}],staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("税号")]),a("v-uni-input",{attrs:{name:"duty_paragraph",value:t.duty_paragraph,placeholder:"纳税人识别号"}})],1),a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("邮箱")]),a("v-uni-input",{attrs:{name:"email",value:t.email,placeholder:"您的联系邮箱"}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"2"==t.receipt_title_type&&"2"==t.receipt_type,expression:"receipt_title_type == '2' && receipt_type == '2'"}],staticClass:"panel"},[a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("开户银行")]),a("v-uni-input",{attrs:{name:"bank_name",value:t.bank_name,placeholder:"您的开户银行"}})],1),a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("银行账号")]),a("v-uni-input",{attrs:{name:"bank_code",value:t.bank_code,placeholder:"您的银行账号"}})],1),a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("企业地址")]),a("v-uni-input",{attrs:{name:"address",value:t.address,placeholder:"您所在的企业地址"}})],1),a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",[t._v("企业电话")]),a("v-uni-input",{attrs:{name:"tel",value:t.tel,placeholder:"您的企业电话"}})],1)],1),a("v-uni-view",{staticClass:"btn-wrap"},[a("v-uni-button",{staticClass:"button",attrs:{"form-type":"submit"}},[t._v("提交申请")]),a("v-uni-button",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.noInvoice.apply(void 0,arguments)}}},[t._v("不开发票")])],1)],1),a("v-uni-view",{class:{mask:t.popupType||t.popupTitle}}),a("v-uni-view",{staticClass:"popup",class:{on:t.popupType}},[a("v-uni-view",{staticClass:"title"},[t._v("发票类型选择"),a("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeType.apply(void 0,arguments)}}})],1),a("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[a("v-uni-radio-group",{attrs:{name:"invoice-type"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeType.apply(void 0,arguments)}}},t._l(t.invoiceTypeList,(function(e){return a("v-uni-label",{key:e.type,staticClass:"acea-row row-middle"},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"info"},[t._v(t._s(e.info))])],1),a("v-uni-radio",{attrs:{value:e.type,checked:t.receipt_type==e.type}})],1)})),1)],1),a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeType.apply(void 0,arguments)}}},[t._v("确定")])],1),a("v-uni-view",{staticClass:"popup",class:{on:t.popupTitle}},[a("v-uni-view",{staticClass:"title"},[t._v("抬头选择"),a("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeTitle.apply(void 0,arguments)}}})],1),t.invoiceList.length>0?a("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[a("v-uni-radio-group",{attrs:{name:"invoice-title"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTitle.apply(void 0,arguments)}}},[t._l(t.invoiceList,(function(e){return[a("v-uni-label",{key:e.user_receipt_id,staticClass:"acea-row row-middle"},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"acea-row row-middle"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.receipt_title))]),e.is_default?a("v-uni-view",{staticClass:"label"},[t._v("默认")]):t._e()],1),a("v-uni-view",{staticClass:"type",class:{special:"2"==e.receipt_type}},[t._v(t._s(1==e.receipt_type?"普通发票":"专用发票"))])],1),a("v-uni-radio",{attrs:{value:e.user_receipt_id,checked:e.user_receipt_id==t.invoice_id}})],1)]}))],2)],1):a("v-uni-view",{staticClass:"nothing"},[a("v-uni-image",{attrs:{src:i("b723")}}),a("v-uni-view",{staticClass:"nothing_text"},[t._v("您还没有添加发票信息哟~")])],1),t.invoice.add?a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addTitle.apply(void 0,arguments)}}},[t._v("添加新的抬头")]):a("v-uni-button",{staticClass:"btn-default",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("不开发票")])],1)],1),a("v-uni-view",{staticClass:"mask",attrs:{catchtouchmove:"true",hidden:0==t.invoice.invoice},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1)},n=[]}}]);