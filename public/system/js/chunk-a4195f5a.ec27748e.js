(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4195f5a"],{"11c4":function(t,e,a){},6437:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"container"},[a("el-form",{attrs:{size:"small","label-width":"79px",inline:!0}},[a("el-form-item",{attrs:{label:"品牌分类："}},[a("el-cascader",{staticClass:"selWidth",attrs:{options:t.brandCategory,clearable:"",props:t.props},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.brand_category_id,callback:function(e){t.$set(t.tableFrom,"brand_category_id",e)},expression:"tableFrom.brand_category_id"}})],1)],1)],1),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onAdd}},[t._v("添加品牌")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small","row-key":"brand_id","default-expand-all":!1,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{prop:"brand_id",label:"ID","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{label:"品牌名称",prop:"brand_name","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"是否显示","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(a){return t.onchangeIsShow(e.row)}},model:{value:e.row.is_show,callback:function(a){t.$set(e.row,"is_show",a)},expression:"scope.row.is_show"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onEdit(e.row.brand_id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row.brand_id,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},i=[],s=a("c4c8"),r={name:"BrandList",data:function(){return{props:{value:"store_brand_category_id",label:"cate_name",children:"children",emitPath:!1},isChecked:!1,listLoading:!0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20},imgList:[],brandCategory:[]}},mounted:function(){this.getBrandCategory(),this.getList()},methods:{getBrandCategory:function(){var t=this;Object(s["o"])({page:1,limit:9999,status:1}).then((function(e){t.brandCategory=e.data})).catch((function(e){t.$message.error(e.message)}))},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(s["t"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.tableData.data.map((function(t){e.imgList.push(t.pic)})),e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()},onAdd:function(){var t=this;this.$modalForm(Object(s["r"])()).then((function(){return t.getList()}))},onEdit:function(t){var e=this;this.$modalForm(Object(s["v"])(t)).then((function(){return e.getList()}))},handleDelete:function(t,e){var a=this;this.$modalSure().then((function(){Object(s["s"])(t).then((function(t){var e=t.message;a.$message.success(e),a.getList()})).catch((function(t){var e=t.message;a.$message.error(e)}))}))},onchangeIsShow:function(t){var e=this;Object(s["u"])(t.brand_id,t.is_show).then((function(t){var a=t.message;e.$message.success(a),e.getList()})).catch((function(t){var a=t.message;e.$message.error(a)}))}}},l=r,o=(a("7738"),a("2877")),c=Object(o["a"])(l,n,i,!1,null,"625720d3",null);e["default"]=c.exports},7738:function(t,e,a){"use strict";a("11c4")}}]);