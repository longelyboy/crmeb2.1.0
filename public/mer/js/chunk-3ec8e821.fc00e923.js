(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ec8e821"],{"0928":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-steps",{attrs:{active:e.currentTab,"align-center":"","finish-status":"success"}},[a("el-step",{attrs:{title:"选择拼团商品"}}),e._v(" "),a("el-step",{attrs:{title:"填写基础信息"}}),e._v(" "),a("el-step",{attrs:{title:"修改商品详情"}})],1)],1),e._v(" "),a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.fullscreenLoading,expression:"fullscreenLoading"}],ref:"formValidate",staticClass:"formValidate mt20",attrs:{rules:e.ruleValidate,model:e.formValidate,"label-width":"160px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.currentTab,expression:"currentTab === 0"}],staticStyle:{overflow:"hidden"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",e._b({},"el-col",e.grid2,!1),[a("el-form-item",{attrs:{label:"选择商品：",prop:"image"}},[a("div",{staticClass:"upLoadPicBox",on:{click:function(t){return e.add()}}},[e.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:e.formValidate.image}})]):a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])])],1)],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.currentTab,expression:"currentTab === 1"}]},[a("el-row",{attrs:{gutter:24}},[a("el-col",e._b({},"el-col",e.grid2,!1),[a("el-form-item",{attrs:{label:"商品主图：",prop:"image"}},[a("div",{staticClass:"upLoadPicBox",on:{click:function(t){return e.modalPicTap("1")}}},[e.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:e.formValidate.image}})]):a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])])],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"商品轮播图：",prop:"slider_image"}},[a("div",{staticClass:"acea-row"},[e._l(e.formValidate.slider_image,(function(t,i){return a("div",{key:i,staticClass:"pictrue",attrs:{draggable:"false"},on:{dragstart:function(a){return e.handleDragStart(a,t)},dragover:function(a){return a.preventDefault(),e.handleDragOver(a,t)},dragenter:function(a){return e.handleDragEnter(a,t)},dragend:function(a){return e.handleDragEnd(a,t)}}},[a("img",{attrs:{src:t}}),e._v(" "),a("i",{staticClass:"el-icon-error btndel",on:{click:function(t){return e.handleRemove(i)}}})])})),e._v(" "),e.formValidate.slider_image.length<10?a("div",{staticClass:"upLoadPicBox",on:{click:function(t){return e.modalPicTap("2")}}},[a("div",{staticClass:"upLoad"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])]):e._e()],2)])],1),e._v(" "),a("el-col",{staticClass:"sp100"},[a("el-form-item",{attrs:{label:"拼团名称：",prop:"store_name"}},[a("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:e.formValidate.store_name,callback:function(t){e.$set(e.formValidate,"store_name",t)},expression:"formValidate.store_name"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{staticClass:"sp100"},[a("el-form-item",{attrs:{label:"拼团简介：",prop:"store_info"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入秒杀活动简介"},model:{value:e.formValidate.store_info,callback:function(t){e.$set(e.formValidate,"store_info",t)},expression:"formValidate.store_info"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"拼团时间：",required:""}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},on:{change:e.onchangeTime},model:{value:e.timeVal,callback:function(t){e.timeVal=t},expression:"timeVal"}}),e._v(" "),a("span",{staticClass:"item_desc"},[e._v("设置活动开启结束时间，用户可以在设置时间内发起参与拼团")])],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"送货方式：",prop:"delivery_way"}},[a("div",{staticClass:"acea-row"},[a("el-checkbox-group",{model:{value:e.formValidate.delivery_way,callback:function(t){e.$set(e.formValidate,"delivery_way",t)},expression:"formValidate.delivery_way"}},e._l(e.deliveryList,(function(t){return a("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v("\n                    "+e._s(t.name)+"\n                  ")])})),1)],1)])],1),e._v(" "),2==e.formValidate.delivery_way.length||1==e.formValidate.delivery_way.length&&2==e.formValidate.delivery_way[0]?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"是否包邮："}},[a("el-radio-group",{model:{value:e.formValidate.delivery_free,callback:function(t){e.$set(e.formValidate,"delivery_free",t)},expression:"formValidate.delivery_free"}},[a("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("否")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("是")])],1)],1)],1):e._e(),e._v(" "),0==e.formValidate.delivery_free&&(2==e.formValidate.delivery_way.length||1==e.formValidate.delivery_way.length&&2==e.formValidate.delivery_way[0])?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"运费模板：",prop:"temp_id"}},[a("div",{staticClass:"acea-row"},[a("el-select",{staticClass:"selWidthd mr20",attrs:{placeholder:"请选择"},model:{value:e.formValidate.temp_id,callback:function(t){e.$set(e.formValidate,"temp_id",t)},expression:"formValidate.temp_id"}},e._l(e.shippingList,(function(e){return a("el-option",{key:e.shipping_template_id,attrs:{label:e.name,value:e.shipping_template_id}})})),1),e._v(" "),a("el-button",{staticClass:"mr15",attrs:{size:"small"},on:{click:e.addTem}},[e._v("添加运费模板")])],1)])],1):e._e(),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"平台保障服务："}},[a("div",{staticClass:"acea-row"},[a("el-select",{staticClass:"selWidthd mr20",attrs:{placeholder:"请选择",clearable:""},model:{value:e.formValidate.guarantee_template_id,callback:function(t){e.$set(e.formValidate,"guarantee_template_id",t)},expression:"formValidate.guarantee_template_id"}},e._l(e.guaranteeList,(function(e){return a("el-option",{key:e.guarantee_template_id,attrs:{label:e.template_name,value:e.guarantee_template_id}})})),1),e._v(" "),a("el-button",{staticClass:"mr15",attrs:{size:"small"},on:{click:e.addServiceTem}},[e._v("添加服务说明模板")])],1)])],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"拼团时效(单位：小时)：",prop:"time"}},[a("el-input-number",{attrs:{min:1,placeholder:"请输入时效"},model:{value:e.formValidate.time,callback:function(t){e.$set(e.formValidate,"time",t)},expression:"formValidate.time"}}),e._v(" "),a("span",{staticClass:"item_desc"},[e._v("用户发起拼团后开始计时，需在设置时间内邀请到规定好友人数参团，超过时效时间，则系统判定拼团失败，自动发起退款")])],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"拼团人数：",prop:"buying_count_num"}},[a("el-input-number",{attrs:{min:2,placeholder:"请输入人数"},on:{change:e.calFictiCount},model:{value:e.formValidate.buying_count_num,callback:function(t){e.$set(e.formValidate,"buying_count_num",t)},expression:"formValidate.buying_count_num"}}),e._v(" "),a("span",{staticClass:"item_desc"},[e._v("单次拼团需要参与的用户数")])],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"活动期间限购件数：",prop:"pay_count"}},[a("el-input-number",{attrs:{min:1,placeholder:"请输入数量"},model:{value:e.formValidate.pay_count,callback:function(t){e.$set(e.formValidate,"pay_count",t)},expression:"formValidate.pay_count"}}),e._v(" "),a("span",{staticClass:"item_desc"},[e._v("该商品活动期间内，用户可购买的最大数量。例如设置为4，表示本地活动有效期内，每个用户最多可购买4件")])],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"单次限购件数：",prop:"once_pay_count"}},[a("el-input-number",{attrs:{min:1,max:e.formValidate.pay_count,placeholder:"请输入数量"},model:{value:e.formValidate.once_pay_count,callback:function(t){e.$set(e.formValidate,"once_pay_count",t)},expression:"formValidate.once_pay_count"}}),e._v(" "),a("span",{staticClass:"item_desc"},[e._v("用户参与拼团时，一次购买最大数量限制。例如设置为2，表示每次参与拼团时，用户一次购买数量最大可选择2个")])],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"单位：",prop:"unit_name"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入单位"},model:{value:e.formValidate.unit_name,callback:function(t){e.$set(e.formValidate,"unit_name",t)},expression:"formValidate.unit_name"}})],1)],1)],1),e._v(" "),1==e.combinationData.ficti_status?a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"虚拟成团："}},[a("el-switch",{attrs:{"active-text":"开启","inactive-text":"关闭"},model:{value:e.formValidate.ficti_status,callback:function(t){e.$set(e.formValidate,"ficti_status",t)},expression:"formValidate.ficti_status"}})],1)],1),e._v(" "),1==e.formValidate.ficti_status?a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"虚拟成团补齐人数：",prop:"ficti_num"}},[a("el-input-number",{attrs:{min:0,max:e.max_ficti_num,placeholder:"请输入数量"},model:{value:e.formValidate.ficti_num,callback:function(t){e.$set(e.formValidate,"ficti_num",t)},expression:"formValidate.ficti_num"}}),e._v(" "),a("span",{staticClass:"item_desc"},[e._v("拼团时效到时，系统自动补齐的最大拼团人数")])],1)],1):e._e()],1):e._e(),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"排序：",prop:"sort"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入排序数值"},model:{value:e.formValidate.sort,callback:function(t){e.$set(e.formValidate,"sort",t)},expression:"formValidate.sort"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"显示状态"}},[a("el-radio-group",{model:{value:e.formValidate.is_show,callback:function(t){e.$set(e.formValidate,"is_show",t)},expression:"formValidate.is_show"}},[a("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("关闭")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("开启")])],1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[0===e.formValidate.spec_type?a("el-form-item",[a("el-table",{staticClass:"tabNumWidth",attrs:{data:e.OneattrValue,border:"",size:"mini"}},[a("el-table-column",{attrs:{align:"center",label:"图片","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"upLoadPicBox",on:{click:function(t){return e.modalPicTap("1","dan","pi")}}},[e.formValidate.image?a("div",{staticClass:"pictrue tabPic"},[a("img",{attrs:{src:t.row.image}})]):a("div",{staticClass:"upLoad tabPic"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])]}}],null,!1,1357914119)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"市场价","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["price"]))])]}}],null,!1,1703924291)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"拼团价","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"priceBox",attrs:{type:"number",min:0,max:t.row["price"]},on:{blur:function(a){return e.limitPrice(t.row)}},model:{value:t.row["active_price"],callback:function(a){e.$set(t.row,"active_price",e._n(a))},expression:"scope.row['active_price']"}})]}}],null,!1,1431579223)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"成本价","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["cost"]))])]}}],null,!1,4236060069)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"库存","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["old_stock"]))])]}}],null,!1,1655454038)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"限量","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"priceBox",attrs:{type:"number",max:t.row["old_stock"],min:0},on:{change:function(a){return e.limitInventory(t.row)}},model:{value:t.row["stock"],callback:function(a){e.$set(t.row,"stock",e._n(a))},expression:"scope.row['stock']"}})]}}],null,!1,3327557396)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品编号","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["bar_code"]))])]}}],null,!1,2057585133)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"重量（KG）","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["weight"]))])]}}],null,!1,1649766542)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"体积（m³）","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["volume"]))])]}}],null,!1,2118841126)})],1)],1):e._e()],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[1===e.formValidate.spec_type?a("el-form-item",{staticClass:"labeltop",attrs:{label:"规格列表："}},[a("el-table",{ref:"multipleSelection",attrs:{data:e.ManyAttrValue,"tooltip-effect":"dark","row-key":function(e){return e.id}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection","reserve-selection":!0,"min-width":"50"}}),e._v(" "),e.manyTabDate?e._l(e.manyTabDate,(function(t,i){return a("el-table-column",{key:i,attrs:{align:"center",label:e.manyTabTit[i].title,"min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"priceBox",domProps:{textContent:e._s(t.row[i])}})]}}],null,!0)})})):e._e(),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"图片","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"upLoadPicBox",on:{click:function(a){return e.modalPicTap("1","duo",t.$index)}}},[t.row.image?a("div",{staticClass:"pictrue tabPic"},[a("img",{attrs:{src:t.row.image}})]):a("div",{staticClass:"upLoad tabPic"},[a("i",{staticClass:"el-icon-camera cameraIconfont"})])])]}}],null,!1,3478746955)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"市场价","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["price"]))])]}}],null,!1,1703924291)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"拼团价","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"priceBox",attrs:{type:"number",min:0,max:t.row["price"]},on:{blur:function(a){return e.limitPrice(t.row)}},model:{value:t.row["active_price"],callback:function(a){e.$set(t.row,"active_price",e._n(a))},expression:" scope.row['active_price']"}})]}}],null,!1,3314660055)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"成本价","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["cost"]))])]}}],null,!1,4236060069)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"库存","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["old_stock"]))])]}}],null,!1,1655454038)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"限量","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"priceBox",attrs:{type:"number",min:0,max:t.row["old_stock"]},model:{value:t.row["stock"],callback:function(a){e.$set(t.row,"stock",e._n(a))},expression:"scope.row['stock']"}})]}}],null,!1,4025255182)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品编号","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["bar_code"]))])]}}],null,!1,2057585133)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"重量（KG）","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["weight"]))])]}}],null,!1,1649766542)}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"体积（m³）","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row["volume"]))])]}}],null,!1,2118841126)})],2)],1):e._e()],1)],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:2===e.currentTab,expression:"currentTab === 2"}]},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"商品详情："}},[a("ueditorFrom",{attrs:{content:e.formValidate.content},model:{value:e.formValidate.content,callback:function(t){e.$set(e.formValidate,"content",t)},expression:"formValidate.content"}})],1)],1)],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-top":"30px"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.currentTab>0,expression:"currentTab>0"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:e.handleSubmitUp}},[e._v("上一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:0==e.currentTab,expression:"currentTab == 0"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleSubmitNest1("formValidate")}}},[e._v("下一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==e.currentTab,expression:"currentTab == 1"}],staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleSubmitNest2("formValidate")}}},[e._v("下一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===e.currentTab,expression:"currentTab===2"}],staticClass:"submission",attrs:{loading:e.loading,type:"primary",size:"small"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提交")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===e.currentTab,expression:"currentTab===2"}],staticClass:"submission",attrs:{loading:e.loading,type:"primary",size:"small"},on:{click:e.handlePreview}},[e._v("预览")])],1)],1)],1),e._v(" "),a("goods-list",{ref:"goodsList",on:{getProduct:e.getProduct}}),e._v(" "),a("guarantee-service",{ref:"serviceGuarantee",on:{"get-list":e.getGuaranteeList}}),e._v(" "),e.previewVisible?a("div",[a("div",{staticClass:"bg",on:{click:function(t){t.stopPropagation(),e.previewVisible=!1}}}),e._v(" "),e.previewVisible?a("preview-box",{ref:"previewBox",attrs:{"product-type":4,"preview-key":e.previewKey}}):e._e()],1):e._e()],1)},r=[],n=a("75fc"),l=(a("7f7f"),a("c80c")),s=(a("c5f6"),a("96cf"),a("3b8d")),o=(a("8615"),a("55dd"),a("ac6a"),a("ef0d")),c=a("6625"),u=a.n(c),m=a("7719"),d=a("ae43"),f=a("8c98"),p=a("c4c8"),_=a("b7be"),g=a("83d6"),h={product_id:"",image:"",slider_image:[],store_name:"",store_info:"",start_time:"",end_time:"",time:1,is_show:1,keyword:"",brand_id:"",cate_id:"",mer_cate_id:[],pay_count:1,unit_name:"",sort:0,is_good:0,temp_id:"",guarantee_template_id:"",buying_count_num:2,ficti_status:!0,ficti_num:1,once_pay_count:1,delivery_way:[],mer_labels:[],delivery_free:0,attrValue:[{image:"",price:null,active_price:null,cost:null,ot_price:null,old_stock:null,stock:null,bar_code:"",weight:null,volume:null}],attr:[],extension_type:0,content:"",spec_type:0,is_gift_bag:0},b=[{name:"店铺推荐",value:"is_good"}],v={name:"CombinationProductAdd",components:{ueditorFrom:o["a"],goodsList:m["a"],VueUeditorWrap:u.a,guaranteeService:d["a"],previewBox:f["a"]},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},timeVal:"",max_ficti_num:0,dialogVisible:!1,product_id:"",multipleSelection:[],optionsCate:{value:"store_category_id",label:"cate_name",children:"children",emitPath:!1},roterPre:g["roterPre"],selectRule:"",checkboxGroup:[],recommend:b,tabs:[],fullscreenLoading:!1,props:{emitPath:!1},propsMer:{emitPath:!1,multiple:!0},active:0,OneattrValue:[Object.assign({},h.attrValue[0])],ManyAttrValue:[Object.assign({},h.attrValue[0])],ruleList:[],merCateList:[],categoryList:[],shippingList:[],guaranteeList:[],deliveryList:[],labelList:[],BrandList:[],formValidate:Object.assign({},h),maxStock:"",addNum:0,singleSpecification:{},multipleSpecifications:[],formDynamics:{template_name:"",template_value:[]},manyTabTit:{},manyTabDate:{},grid2:{lg:10,md:12,sm:24,xs:24},formDynamic:{attrsName:"",attrsVal:""},isBtn:!1,manyFormValidate:[],images:[],currentTab:0,isChoice:"",combinationData:{ficti_status:0,group_buying_rate:""},grid:{xl:8,lg:8,md:12,sm:24,xs:24},loading:!1,ruleValidate:{store_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],timeVal:[{required:!0,message:"请选择拼团活动日期",trigger:"blur"}],time:[{required:!0,message:"请输入拼团时效",trigger:"blur"}],buying_count_num:[{required:!0,message:"请输入拼团人数",trigger:"blur"}],pay_count:[{required:!0,message:"请输入限购量",trigger:"blur"}],sort:[{required:!0,message:"请输入排序数值",trigger:"blur"}],once_pay_count:[{required:!0,message:"请输入单人单次限购数量",trigger:"blur"}],unit_name:[{required:!0,message:"请输入单位",trigger:"blur"}],store_info:[{required:!0,message:"请输入拼团活动简介",trigger:"blur"}],temp_id:[{required:!0,message:"请选择运费模板",trigger:"change"}],ficti_num:[{required:!0,message:"请输入虚拟成团补齐人数",trigger:"blur"}],image:[{required:!0,message:"请上传商品图",trigger:"change"}],slider_image:[{required:!0,message:"请上传商品轮播图",type:"array",trigger:"change"}],delivery_way:[{required:!0,message:"请选择送货方式",trigger:"change"}]},attrInfo:{},keyNum:0,extensionStatus:0,isNew:!1,previewVisible:!1,previewKey:"",deliveryType:[]}},computed:{attrValue:function(){var e=Object.assign({},h.attrValue[0]);return delete e.image,e},oneFormBatch:function(){var e=[Object.assign({},h.attrValue[0])];return delete e[0].bar_code,e}},watch:{"formValidate.attr":{handler:function(e){1===this.formValidate.spec_type&&this.watCh(e)},immediate:!1,deep:!0},"formValidate.buying_count_num":{handler:function(e,t){e&&1==this.formValidate.ficti_status&&(this.max_ficti_num=Math.round((1-this.combinationData.group_buying_rate/100)*this.formValidate.buying_count_num),this.isNew&&this.formValidate.ficti_num>this.max_ficti_num&&(this.formValidate.ficti_num=this.max_ficti_num))},immediate:!1,deep:!0}},created:function(){this.tempRoute=Object.assign({},this.$route),this.$route.params.id&&1===this.formValidate.spec_type&&this.$watch("formValidate.attr",this.watCh)},mounted:function(){var e=this;this.formValidate.slider_image=[],this.getCombinationData(),this.$route.params.id?(this.setTagsViewTitle(),this.getInfo(this.$route.params.id),this.currentTab=1):this.formValidate.attr.map((function(t){e.$set(t,"inputVisible",!1)})),this.getCategorySelect(),this.getCategoryList(),this.getBrandListApi(),this.getShippingList(),this.getGuaranteeList(),this.productCon(),this.getLabelLst(),this.$store.dispatch("settings/setEdit",!0)},methods:{getLabelLst:function(){var e=this;Object(p["v"])().then((function(t){e.labelList=t.data})).catch((function(t){e.$message.error(t.message)}))},productCon:function(){var e=this;Object(p["W"])().then((function(t){e.deliveryType=t.data.delivery_way.map(String),2==e.deliveryType.length?e.deliveryList=[{value:"1",name:"到店自提"},{value:"2",name:"快递配送"}]:1==e.deliveryType.length&&"1"==e.deliveryType[0]?e.deliveryList=[{value:"1",name:"到店自提"}]:e.deliveryList=[{value:"2",name:"快递配送"}]})).catch((function(t){e.$message.error(t.message)}))},getCombinationData:function(){var e=this;Object(_["q"])().then((function(t){e.combinationData=t.data})).catch((function(t){e.$message.error(t.message)}))},calFictiCount:function(){this.max_ficti_num=Math.round((1-this.combinationData.group_buying_rate/100)*this.formValidate.buying_count_num),this.isNew=!0,this.formValidate.ficti_num>this.max_ficti_num&&(this.formValidate.ficti_num=this.max_ficti_num)},limitInventory:function(e){e.stock-e.old_stock>0&&(e.stock=e.old_stock)},limitPrice:function(e){e.active_price-e.price>0&&(e.active_price=e.price)},add:function(){this.$refs.goodsList.dialogVisible=!0},getProduct:function(e){this.formValidate.image=e.src,this.product_id=e.id,console.log(this.product_id)},handleSelectionChange:function(e){this.multipleSelection=e},onchangeTime:function(e){this.timeVal=e,console.log(this.moment(e[0]).format("YYYY-MM-DD HH:mm:ss")),this.formValidate.start_time=e?this.moment(e[0]).format("YYYY-MM-DD HH:mm:ss"):"",this.formValidate.end_time=e?this.moment(e[1]).format("YYYY-MM-DD HH:mm:ss"):""},setTagsViewTitle:function(){var e="编辑商品",t=Object.assign({},this.tempRoute,{title:"".concat(e,"-").concat(this.$route.params.id)});this.$store.dispatch("tagsView/updateVisitedView",t)},watCh:function(e){var t=this,a={},i={};this.formValidate.attr.forEach((function(e,t){a["value"+t]={title:e.value},i["value"+t]=""})),this.ManyAttrValue.forEach((function(e,a){var i=Object.values(e.detail).sort().join("/");t.attrInfo[i]&&(t.ManyAttrValue[a]=t.attrInfo[i])})),this.attrInfo={},this.ManyAttrValue.forEach((function(e){t.attrInfo[Object.values(e.detail).sort().join("/")]=e})),this.manyTabTit=a,this.manyTabDate=i,console.log(this.manyTabTit),console.log(this.manyTabDate)},addTem:function(){var e=this;this.$modalTemplates(0,(function(){e.getShippingList()}))},addServiceTem:function(){this.$refs.serviceGuarantee.add()},getCategorySelect:function(){var e=this;Object(p["r"])().then((function(t){e.merCateList=t.data})).catch((function(t){e.$message.error(t.message)}))},getCategoryList:function(){var e=this;Object(p["q"])().then((function(t){e.categoryList=t.data})).catch((function(t){e.$message.error(t.message)}))},getBrandListApi:function(){var e=this;Object(p["p"])().then((function(t){e.BrandList=t.data})).catch((function(t){e.$message.error(t.message)}))},productGetRule:function(){var e=this;Object(p["Nb"])().then((function(t){e.ruleList=t.data}))},getShippingList:function(){var e=this;Object(p["wb"])().then((function(t){e.shippingList=t.data}))},getGuaranteeList:function(){var e=this;Object(p["B"])().then((function(t){e.guaranteeList=t.data}))},getInfo:function(e){var t=this;this.fullscreenLoading=!0,this.$route.params.id?Object(_["t"])(e).then(function(){var e=Object(s["a"])(Object(l["a"])().mark((function e(a){var i,r;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=a.data,t.formValidate={product_id:i.product_group_id,image:i.product.image,slider_image:i.product.slider_image,store_name:i.product.store_name,store_info:i.product.store_info,unit_name:i.product.unit_name,time:i.time,buying_count_num:i.buying_count_num,guarantee_template_id:i.product.guarantee_template_id,ficti_status:!!i.ficti_status,start_time:i.start_time?i.start_time:"",end_time:i.end_time?i.end_time:"",brand_id:i.product.brand_id,cate_id:i.cate_id?i.cate_id:"",mer_cate_id:i.mer_cate_id,pay_count:i.pay_count,once_pay_count:i.once_pay_count,sort:i.product.sort,is_good:i.product.is_good,temp_id:i.product.temp_id,is_show:i.is_show,attr:i.product.attr,extension_type:i.extension_type,content:i.product.content.content,spec_type:i.product.spec_type,is_gift_bag:i.product.is_gift_bag,ficti_num:i.ficti_num,delivery_way:i.product.delivery_way&&i.product.delivery_way.length?i.product.delivery_way.map(String):t.deliveryType,delivery_free:i.product.delivery_free?i.product.delivery_free:0,mer_labels:i.mer_labels&&i.mer_labels.length?i.mer_labels.map(Number):[]},1===t.combinationData.ficti_status&&(t.max_ficti_num=Math.round((1-t.combinationData.group_buying_rate/100)*i.buying_count_num)),0===t.formValidate.spec_type?(t.OneattrValue=i.product.attrValue,t.OneattrValue.forEach((function(e,a){t.attrInfo[Object.values(e.detail).sort().join("/")]=e,t.$set(t.OneattrValue[a],"active_price",e._sku?e._sku.active_price:e.price),t.$set(t.OneattrValue[a],"stock",e._sku?e._sku.stock:e.old_stock)})),t.singleSpecification=JSON.parse(JSON.stringify(i.product.attrValue)),t.formValidate.attrValue=t.OneattrValue):(r=[],t.ManyAttrValue=i.product.attrValue,t.ManyAttrValue.forEach((function(e,a){t.attrInfo[Object.values(e.detail).sort().join("/")]=e,t.$set(t.ManyAttrValue[a],"active_price",e._sku?e._sku.active_price:e.price),t.$set(t.ManyAttrValue[a],"stock",e._sku?e._sku.stock:e.old_stock),e._sku&&(t.multipleSpecifications=JSON.parse(JSON.stringify(i.product.attrValue)),r.push(e))})),t.multipleSpecifications=JSON.parse(JSON.stringify(r)),t.$nextTick((function(){r.forEach((function(e){t.$refs.multipleSelection.toggleRowSelection(e,!0)}))})),t.formValidate.attrValue=t.multipleSelection),console.log(t.ManyAttrValue),t.fullscreenLoading=!1,t.timeVal=[new Date(t.formValidate.start_time),new Date(t.formValidate.end_time)],t.$store.dispatch("settings/setEdit",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.fullscreenLoading=!1,t.$message.error(e.message)})):Object(p["cb"])(e).then(function(){var e=Object(s["a"])(Object(l["a"])().mark((function e(a){var i;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=a.data,t.formValidate={product_id:i.product_id,image:i.image,slider_image:i.slider_image,store_name:i.store_name,store_info:i.store_info,unit_name:i.unit_name,time:1,buying_count_num:2,ficti_status:!0,start_time:"",end_time:"",brand_id:i.brand_id,cate_id:i.cate_id,mer_cate_id:i.mer_cate_id,pay_count:1,once_pay_count:1,sort:i.sort?i.sort:0,is_good:i.is_good,temp_id:i.temp_id,is_show:i.is_show,attr:i.attr,extension_type:i.extension_type,content:i.content,spec_type:i.spec_type,is_gift_bag:i.is_gift_bag,ficti_num:1===t.combinationData.ficti_status?Math.round(1-t.combinationData.group_buying_rate/100):"",delivery_way:i.delivery_way&&i.delivery_way.length?i.delivery_way.map(String):t.deliveryType,delivery_free:i.delivery_free?i.delivery_free:0,mer_labels:i.mer_labels&&i.mer_labels.length?i.mer_labels.map(Number):[]},1===t.combinationData.ficti_status&&(t.max_ficti_num=Math.round(1*(1-t.combinationData.group_buying_rate/100))),t.timeVal=[],0===t.formValidate.spec_type?(t.OneattrValue=i.attrValue,t.OneattrValue.forEach((function(e,a){t.$set(t.OneattrValue[a],"active_price",t.OneattrValue[a].price)})),t.singleSpecification=JSON.parse(JSON.stringify(i.attrValue)),t.formValidate.attrValue=t.OneattrValue):(t.ManyAttrValue=i.attrValue,t.multipleSpecifications=JSON.parse(JSON.stringify(i.attrValue)),t.ManyAttrValue.forEach((function(e,a){t.attrInfo[Object.values(e.detail).sort().join("/")]=e,t.$set(t.ManyAttrValue[a],"active_price",t.ManyAttrValue[a].price)})),t.multipleSelection=i.attrValue,t.$nextTick((function(){i.attrValue.forEach((function(e){t.$refs.multipleSelection.toggleRowSelection(e,!0)}))}))),1===t.formValidate.is_good&&t.checkboxGroup.push("is_good"),t.fullscreenLoading=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.fullscreenLoading=!1,t.$message.error(e.message)}))},handleRemove:function(e){this.formValidate.slider_image.splice(e,1)},modalPicTap:function(e,t,a){var i=this,r=[];this.$modalUpload((function(n){"1"!==e||t||(i.formValidate.image=n[0],i.OneattrValue[0].image=n[0]),"2"!==e||t||n.map((function(e){r.push(e.attachment_src),i.formValidate.slider_image.push(e),i.formValidate.slider_image.length>10&&(i.formValidate.slider_image.length=10)})),"1"===e&&"dan"===t&&(i.OneattrValue[0].image=n[0]),"1"===e&&"duo"===t&&(i.ManyAttrValue[a].image=n[0]),"1"===e&&"pi"===t&&(i.oneFormBatch[0].image=n[0])}),e)},handleSubmitUp:function(){this.currentTab--<0&&(this.currentTab=0)},handleSubmitNest1:function(e){this.formValidate.image?(this.currentTab++,this.$route.params.id||this.getInfo(this.product_id)):this.$message.warning("请选择商品！")},handleSubmitNest2:function(e){var t=this;1===this.formValidate.spec_type?this.formValidate.attrValue=this.multipleSelection:this.formValidate.attrValue=this.OneattrValue,console.log(this.formValidate),this.$refs[e].validate((function(e){if(e){if(!t.formValidate.store_name||!t.formValidate.store_info||!t.formValidate.image||!t.formValidate.slider_image)return void t.$message.warning("请填写完整拼团商品信息！");if(!t.formValidate.start_time||!t.formValidate.end_time)return void t.$message.warning("请选择拼团时间！");if(!t.formValidate.attrValue||0===t.formValidate.attrValue.length)return void t.$message.warning("请选择商品规格！");t.currentTab++}}))},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(a){a?(t.$store.dispatch("settings/setEdit",!1),t.fullscreenLoading=!0,t.loading=!0,console.log(t.formValidate),t.$route.params.id?(console.log(t.ManyAttrValue),Object(_["w"])(t.$route.params.id,t.formValidate).then(function(){var a=Object(s["a"])(Object(l["a"])().mark((function a(i){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.fullscreenLoading=!1,t.$message.success(i.message),t.$router.push({path:t.roterPre+"/marketing/combination/combination_goods"}),t.$refs[e].resetFields(),t.formValidate.slider_image=[],t.loading=!1;case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){t.fullscreenLoading=!1,t.loading=!1,t.$message.error(e.message)}))):Object(_["p"])(t.formValidate).then(function(){var a=Object(s["a"])(Object(l["a"])().mark((function a(i){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.fullscreenLoading=!1,t.$message.success(i.message),t.$router.push({path:t.roterPre+"/marketing/combination/combination_goods"}),t.$refs[e].resetFields(),t.formValidate.slider_image=[],t.loading=!1;case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){t.fullscreenLoading=!1,t.loading=!1,t.$message.error(e.message)}))):t.formValidate.store_name&&t.formValidate.store_info&&t.formValidate.image&&t.formValidate.slider_image||t.$message.warning("请填写完整商品信息！")}))},handlePreview:function(){var e=this;Object(p["x"])(this.formValidate).then(function(){var t=Object(s["a"])(Object(l["a"])().mark((function t(a){return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.previewVisible=!0,e.previewKey=a.data.preview_key;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$message.error(t.message)}))},validate:function(e,t,a){!1===t&&this.$message.warning(a)},handleDragStart:function(e,t){this.dragging=t},handleDragEnd:function(e,t){this.dragging=null},handleDragOver:function(e){e.dataTransfer.dropEffect="move"},handleDragEnter:function(e,t){if(e.dataTransfer.effectAllowed="move",t!==this.dragging){var a=Object(n["a"])(this.formValidate.slider_image),i=a.indexOf(this.dragging),r=a.indexOf(t);a.splice.apply(a,[r,0].concat(Object(n["a"])(a.splice(i,1)))),this.formValidate.slider_image=a}}}},y=v,w=(a("d562"),a("2877")),V=Object(w["a"])(y,i,r,!1,null,"1cc142ff",null);t["default"]=V.exports},3910:function(e,t,a){"use strict";a("901b")},"504c":function(e,t,a){var i=a("9e1e"),r=a("0d58"),n=a("6821"),l=a("52a7").f;e.exports=function(e){return function(t){var a,s=n(t),o=r(s),c=o.length,u=0,m=[];while(c>u)a=o[u++],i&&!l.call(s,a)||m.push(e?[a,s[a]]:s[a]);return m}}},6494:function(e,t,a){},7719:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.dialogVisible?a("el-dialog",{attrs:{title:"商品信息",visible:e.dialogVisible,width:"1200px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"divBox"},[a("div",{staticClass:"header clearfix"},[a("div",{staticClass:"container"},[a("el-form",{attrs:{size:"small",inline:"","label-width":"100px"}},[a("el-form-item",{staticClass:"width100",attrs:{label:"商品分类："}},[a("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:""},on:{change:function(t){return e.getList()}},model:{value:e.tableFrom.mer_cate_id,callback:function(t){e.$set(e.tableFrom,"mer_cate_id",t)},expression:"tableFrom.mer_cate_id"}},e._l(e.merCateList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{staticClass:"width100",attrs:{label:"商品搜索："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入商品名称，关键字，产品编号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getList(t)}},model:{value:e.tableFrom.keyword,callback:function(t){e.$set(e.tableFrom,"keyword",t)},expression:"tableFrom.keyword"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getList},slot:"append"})],1)],1)],1)],1)]),e._v(" "),e.resellShow?a("el-alert",{attrs:{title:"注：添加为预售商品后，原普通商品会下架；如该商品已开启其它营销活动，请勿选择！",type:"warning","show-icon":""}}):e._e(),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:e.tableData.data,size:"mini"}},[a("el-table-column",{attrs:{width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio",{attrs:{label:t.row.product_id},nativeOn:{change:function(a){return e.getTemplateRow(t.row)}},model:{value:e.templateRadio,callback:function(t){e.templateRadio=t},expression:"templateRadio"}},[e._v(" ")])]}}],null,!1,3465899556)}),e._v(" "),a("el-table-column",{attrs:{prop:"product_id",label:"ID","min-width":"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品图","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:e.row.image,"preview-src-list":[e.row.image]}})],1)]}}],null,!1,2331550732)}),e._v(" "),a("el-table-column",{attrs:{prop:"store_name",label:"商品名称","min-width":"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"stock",label:"库存","min-width":"80"}})],1),e._v(" "),a("div",{staticClass:"block mb20"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":e.tableFrom.limit,"current-page":e.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.total},on:{"size-change":e.handleSizeChange,"current-change":e.pageChange}})],1)],1)]):e._e()},r=[],n=a("c4c8"),l=a("83d6"),s={name:"GoodsList",props:{resellShow:{type:Boolean,default:!1}},data:function(){return{dialogVisible:!1,templateRadio:0,merCateList:[],roterPre:l["roterPre"],listLoading:!0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,cate_id:"",store_name:"",keyword:"",is_gift_bag:0,status:1},multipleSelection:{},checked:[]}},mounted:function(){var e=this;this.getList(),this.getCategorySelect(),window.addEventListener("unload",(function(t){return e.unloadHandler(t)}))},methods:{getTemplateRow:function(e){this.multipleSelection={src:e.image,id:e.product_id},this.dialogVisible=!1,this.$emit("getProduct",this.multipleSelection)},getCategorySelect:function(){var e=this;Object(n["r"])().then((function(t){e.merCateList=t.data})).catch((function(t){e.$message.error(t.message)}))},getList:function(){var e=this;this.listLoading=!0,Object(n["eb"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(e){this.tableFrom.page=e,this.getList()},handleSizeChange:function(e){this.tableFrom.limit=e,this.getList()}}},o=s,c=(a("3910"),a("2877")),u=Object(c["a"])(o,i,r,!1,null,"5e74a40e",null);t["a"]=u.exports},8615:function(e,t,a){var i=a("5ca1"),r=a("504c")(!1);i(i.S,"Object",{values:function(e){return r(e)}})},"901b":function(e,t,a){},d562:function(e,t,a){"use strict";a("6494")}}]);