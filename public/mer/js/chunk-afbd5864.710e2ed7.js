(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afbd5864"],{"504c":function(t,e,s){var a=s("9e1e"),i=s("0d58"),l=s("6821"),o=s("52a7").f;t.exports=function(t){return function(e){var s,r=l(e),n=i(r),c=n.length,u=0,d=[];while(c>u)s=n[u++],a&&!o.call(r,s)||d.push(t?[s,r[s]]:r[s]);return d}}},8615:function(t,e,s){var a=s("5ca1"),i=s("504c")(!1);a(a.S,"Object",{values:function(t){return i(t)}})},9132:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divBox"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"container"},[s("el-form",{attrs:{size:"small","label-width":"120px",inline:""}},[s("el-form-item",{staticStyle:{display:"block"},attrs:{label:"状态："}},[s("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small",clearable:""},on:{change:function(e){return t.getList("")}},model:{value:t.tableFrom.product_status,callback:function(e){t.$set(t.tableFrom,"product_status",e)},expression:"tableFrom.product_status"}},t._l(t.fromList.fromTxt,(function(e,a){return s("el-radio-button",{key:a,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"商品搜索："}},[s("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入商品名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[s("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"助力活动状态："}},[s("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.type,callback:function(e){t.$set(t.tableFrom,"type",e)},expression:"tableFrom.type"}},t._l(t.assistStatusList,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"活动商品状态："}},[s("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:""},on:{change:t.getList},model:{value:t.tableFrom.us_status,callback:function(e){t.$set(t.tableFrom,"us_status",e)},expression:"tableFrom.us_status"}},t._l(t.productStatusList,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"标签："}},[s("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:"",filterable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.mer_labels,callback:function(e){t.$set(t.tableFrom,"mer_labels",e)},expression:"tableFrom.mer_labels"}},t._l(t.labelList,(function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1)],1),t._v(" "),s("router-link",{attrs:{to:{path:t.roterPre+"/marketing/assist/create"}}},[s("el-button",{attrs:{size:"small",type:"primary"}},[s("i",{staticClass:"add"},[t._v("+")]),t._v(" 添加助力商品\n        ")])],1)],1),t._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini","row-class-name":t.tableRowClassName},on:{rowclick:function(e){return e.stopPropagation(),t.closeEdit(e)}}},[s("el-table-column",{attrs:{prop:"product_assist_id",label:"ID","min-width":"50"}}),t._v(" "),s("el-table-column",{attrs:{label:"助力商品图","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("div",{staticClass:"demo-image__preview"},[s("el-image",{attrs:{src:t.row.product.image,"preview-src-list":[t.row.product.image]}})],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"store_name",label:"商品名称","min-width":"120"}}),t._v(" "),s("el-table-column",{attrs:{label:"助力价格","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(e.row.assistSku&&e.row.assistSku[0].assist_price?e.row.assistSku[0].assist_price:0))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"stock",label:"助力活动状态","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(0===e.row.assist_status?"未开始":1===e.row.assist_status?"正在进行":"已结束"))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"活动时间","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v("开始日期："+t._s(e.row.start_time&&e.row.start_time?e.row.start_time.slice(0,10):""))]),t._v(" "),s("div",[t._v("结束日期："+t._s(e.row.end_time&&e.row.end_time?e.row.end_time.slice(0,10):""))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"助力成功人数/参与人次","min-width":"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(e.row.success)+" / "+t._s(e.row.all))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"限量","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(e.row.assistSku&&e.row.assistSku[0]?e.row.assistSku[0].stock_count:0))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"限量剩余","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(e.row.assistSku&&e.row.assistSku[0]?e.row.assistSku[0].stock:0))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"product.sort",align:"center",label:"排序","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.index===t.tabClickIndex?s("span",[s("el-input",{attrs:{type:"number",maxlength:"300",size:"mini",autofocus:""},on:{blur:function(s){return t.inputBlur(e)}},model:{value:e.row["product"]["sort"],callback:function(s){t.$set(e.row["product"],"sort",t._n(s))},expression:"scope.row['product']['sort']"}})],1):s("span",{on:{dblclick:function(s){return s.stopPropagation(),t.tabClick(e.row)}}},[t._v(t._s(e.row["product"]["sort"]))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"status",label:"上/下架","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"上架","inactive-text":"下架"},on:{change:function(s){return t.onchangeIsShow(e.row)}},model:{value:e.row.is_show,callback:function(s){t.$set(e.row,"is_show",s)},expression:"scope.row.is_show"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"stock",label:"商品状态","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t._f("productStatusFilter")(e.row.us_status)))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"stock",label:"标签","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.mer_labels,(function(e,a){return s("div",{key:a,staticClass:"label-list"},[t._v(t._s(e.name))])}))}}])}),t._v(" "),s("el-table-column",{attrs:{label:"审核状态","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(0===e.row.product_status?"待审核":1===e.row.product_status?"审核通过":"审核失败"))]),t._v(" "),-1===e.row.product_status?s("span",{staticStyle:{"font-size":"12px"}},[s("br"),t._v("\n            原因："+t._s(e.row.refusal)+"\n          ")]):t._e()]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作","min-width":"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.product_status?s("router-link",{attrs:{to:{path:t.roterPre+"/marketing/assist/create/"+e.row.product_assist_id}}},[s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"}},[t._v("编辑")])],1):t._e(),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return t.handlePreview(e.row.product_assist_id)}}},[t._v("预览")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return t.onEditLabel(e.row)}}},[t._v("编辑标签")]),t._v(" "),s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(s){return t.goDetail(e.row.product_assist_id)}}},[t._v("详情")]),t._v(" "),1!==e.row.product_status||2==e.row.assist_status?s("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(s){return t.handleDelete(e.row.product_assist_id,e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),t._v(" "),s("div",{staticClass:"block"},[s("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),t.dialogVisible?s("el-dialog",{attrs:{title:"助力商品详情",center:"",visible:t.dialogVisible,width:"700px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("div",{staticClass:"box-container"},[s("div",{staticClass:"title"},[t._v("基本信息：")]),t._v(" "),s("div",{staticClass:"acea-row"},[s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("商品ID：")]),t._v(t._s(t.formValidate.product_id))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("商品名称：")]),s("span",[t._v(t._s(t.formValidate.store_name))])]),t._v(" "),s("div",{staticClass:"list sp100 image"},[s("label",{staticClass:"name"},[t._v("商品图：")]),t._v(" "),s("img",{staticStyle:{"max-width":"150px",height:"80px"},attrs:{src:t.formValidate.image}})])]),t._v(" "),s("div",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[t._v("助力商品活动信息：")]),t._v(" "),s("div",{staticClass:"acea-row"},[s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("助力活动简介：")]),t._v(t._s(t.formValidate.store_info))]),t._v(" "),s("div",{staticClass:"list sp100"},[s("label",{staticClass:"name"},[t._v("助力活动日期：")]),t._v(t._s(t.formValidate.start_time+"-"+t.formValidate.end_time))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("助力价：")]),t._v(t._s(t.formValidate.price)+"元")]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("已售商品数：")]),t._v(t._s(t.formValidate.pay)+t._s(t.formValidate.unit_name))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("限量：")]),t._v(t._s(t.formValidate.stock_count))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("限量剩余：")]),t._v(t._s(t.formValidate.stock))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("限购件数：")]),t._v(t._s(t.formValidate.pay_count)+t._s(t.formValidate.unit_name))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("助力次数：")]),t._v(t._s(t.formValidate.assist_user_count))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("助力人数：")]),t._v(t._s(t.formValidate.assist_count)+"人")]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("审核状态：")]),t._v(" "),s("span",[t._v(t._s(0===t.formValidate.reviewStatus?"待审核":1===t.formValidate.reviewStatus?"审核通过":"审核失败"))]),t._v(" "),-1===t.formValidate.reviewStatus?s("span",{staticStyle:{"font-size":"12px"}},[s("br"),t._v("\n              原因："+t._s(t.formValidate.refusal)+"\n            ")]):t._e()]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("助力成功/参与人次：")]),t._v(t._s(t.formValidate.success)+" / "+t._s(t.formValidate.all))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("助力活动状态：")]),t._v(t._s(0===t.formValidate.assist_status?"未开始":1===t.formValidate.assist_status?"正在进行":"已结束"))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("显示状态：")]),t._v(t._s(1===t.formValidate.is_show?"显示":"隐藏"))]),t._v(" "),s("div",{staticClass:"list sp"},[s("label",{staticClass:"name"},[t._v("创建时间：")]),t._v(t._s(t.formValidate.create_time))])])])])]):t._e(),t._v(" "),t.previewVisible?s("div",[s("div",{staticClass:"bg",on:{click:function(e){e.stopPropagation(),t.previewVisible=!1}}}),t._v(" "),t.previewVisible?s("preview-box",{ref:"previewBox",attrs:{"goods-id":t.goodsId,"product-type":3,"preview-key":t.previewKey}}):t._e()],1):t._e(),t._v(" "),t.dialogLabel?s("el-dialog",{attrs:{title:"选择标签",visible:t.dialogLabel,width:"800px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogLabel=e}}},[s("el-form",{ref:"labelForm",attrs:{model:t.labelForm},nativeOn:{submit:function(t){t.preventDefault()}}},[s("el-form-item",[s("el-select",{staticClass:"selWidth",attrs:{clearable:"",multiple:"",placeholder:"请选择"},model:{value:t.labelForm.mer_labels,callback:function(e){t.$set(t.labelForm,"mer_labels",e)},expression:"labelForm.mer_labels"}},t._l(t.labelList,(function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("labelForm")}}},[t._v("提交")])],1)],1):t._e()],1)},i=[],l=s("c80c"),o=(s("96cf"),s("3b8d")),r=(s("8615"),s("ac6a"),s("7f7f"),s("28a5"),s("55dd"),s("c4c8")),n=s("8c98"),c=s("83d6"),u=s("b7be"),d={name:"ProductList",components:{previewBox:n["a"]},data:function(){return{props:{emitPath:!1},roterPre:c["roterPre"],listLoading:!0,tableData:{data:[],total:0},assistStatusList:[{label:"未开始",value:0},{label:"正在进行",value:1},{label:"已结束",value:2}],productStatusList:[{label:"上架显示",value:1},{label:"下架",value:0},{label:"平台关闭",value:-1}],fromList:{custom:!0,fromTxt:[{text:"全部",val:""},{text:"待审核",val:"0"},{text:"已审核",val:"1"},{text:"审核失败",val:"-1"}]},tableFrom:{page:1,limit:20,keyword:"",product_status:this.$route.query.status?this.$route.query.status:"",type:"",us_status:"",mer_labels:"",product_assist_id:this.$route.query.id?this.$route.query.id:""},product_assist_id:this.$route.query.id?this.$route.query.id:"",product_id:"",modals:!1,dialogVisible:!1,loading:!1,manyTabTit:{},manyTabDate:{},formValidate:{},attrInfo:{},tabClickIndex:"",previewVisible:!1,goodsId:"",previewKey:"",dialogLabel:!1,labelList:[],labelForm:{}}},watch:{product_assist_id:function(t,e){this.getList("")}},mounted:function(){this.getList(""),this.getLabelLst()},methods:{tableRowClassName:function(t){var e=t.row,s=t.rowIndex;e.index=s},tabClick:function(t){this.tabClickIndex=t.index},inputBlur:function(t){var e=this;(!t.row.product.sort||t.row.product.sort<0)&&(t.row.product.sort=0),Object(u["a"])(t.row.product_assist_id,{sort:t.row.product.sort}).then((function(t){e.closeEdit()})).catch((function(t){}))},closeEdit:function(){this.tabClickIndex=null},renderheader:function(t,e){var s=e.column;e.$index;return t("span",{},[t("span",{},s.label.split("|")[0]),t("br"),t("span",{},s.label.split("|")[1])])},getLabelLst:function(){var t=this;Object(r["v"])().then((function(e){t.labelList=e.data})).catch((function(e){t.$message.error(e.message)}))},handleClose:function(){this.dialogLabel=!1},onEditLabel:function(t){if(this.dialogLabel=!0,this.product_id=t.product_assist_id,t.mer_labels&&t.mer_labels.length){var e=t.mer_labels.map((function(t){return t.id}));this.labelForm={mer_labels:e}}else this.labelForm={mer_labels:[]}},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){t&&Object(r["Ob"])(e.product_id,e.labelForm).then((function(t){var s=t.message;e.$message.success(s),e.getList(""),e.dialogLabel=!1}))}))},watCh:function(t){var e=this,s={},a={};this.formValidate.attr.forEach((function(t,e){s["value"+e]={title:t.value},a["value"+e]=""})),this.ManyAttrValue.forEach((function(t,s){var a=Object.values(t.detail).sort().join("/");e.attrInfo[a]&&(e.ManyAttrValue[s]=e.attrInfo[a])})),this.attrInfo={},this.ManyAttrValue.forEach((function(t){e.attrInfo[Object.values(t.detail).sort().join("/")]=t})),this.manyTabTit=s,this.manyTabDate=a},goDetail:function(t){var e=this;this.dialogVisible=!0,Object(r["f"])(t).then(function(){var t=Object(o["a"])(Object(l["a"])().mark((function t(s){var a;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!1,a=s.data,e.formValidate={product_id:a.product_assist_id,image:a.product.image,store_name:a.store_name,store_info:a.store_info,start_time:a.start_time?a.start_time:"",end_time:a.end_time?a.end_time:"",create_time:a.create_time,unit_name:a.product.unit_name,is_show:a.is_show,stock_count:a.assistSku[0].stock_count,stock:a.assistSku[0].stock,content:a.content,price:a.assistSku[0].assist_price,assist_status:a.assist_status,reviewStatus:a.product_status,refusal:a.refusal,all:a.all,pay:a.pay,assist_user_count:a.assist_user_count,assist_count:a.assist_count,pay_count:a.pay_count,success:a.success},e.fullscreenLoading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.$message.error(t.message)}))},handlePreview:function(t){this.previewVisible=!0,this.goodsId=t,this.previewKey=""},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(r["g"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},handleDelete:function(t,e){var s=this;this.$modalSure().then((function(){Object(r["b"])(t).then((function(t){var a=t.message;s.$message.success(a),s.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;s.$message.error(e)}))}))},onchangeIsShow:function(t){var e=this;Object(r["h"])(t.product_assist_id,t.is_show).then((function(t){var s=t.message;e.$message.success(s),e.getList("")})).catch((function(t){var s=t.message;e.$message.error(s)}))}}},_=d,m=(s("be9b"),s("2877")),v=Object(m["a"])(_,a,i,!1,null,"885fbd1c",null);e["default"]=v.exports},aa00:function(t,e,s){},be9b:function(t,e,s){"use strict";s("aa00")}}]);