(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31c2299f"],{"70b7":function(t,e,a){"use strict";a("9b8a")},"9b8a":function(t,e,a){},f455:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"filter-container"},[a("div",{staticClass:"demo-input-suffix acea-row"},[a("span",{staticClass:"seachTiele"},[t._v("搜索：")]),t._v(" "),a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入物流公司名称或者编码",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:t.getList},slot:"append"})],1)],1)]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onSync}},[t._v("同步物流公司")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"物流公司名称","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code",label:"编码","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"120",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"是否显示","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(a){return t.onchangeIsShow(e.row)}},model:{value:e.row.is_show,callback:function(a){t.$set(e.row,"is_show",a)},expression:"scope.row.is_show"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onEdit(e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row.id,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},n=[],i=a("0c6d");function o(t){return i["a"].get("store/express/lst",t)}function r(){return i["a"].get("store/express/create/form")}function l(t){return i["a"].get("store/express/update/form/".concat(t))}function c(t){return i["a"].delete("store/express/delete/".concat(t))}function u(t,e){return i["a"].post("store/express/status/".concat(t),{is_show:e})}function d(){return i["a"].get("store/express/sync")}var h=a("83d6"),m={name:"FreightExpress",data:function(){return{roterPre:h["roterPre"],listLoading:!0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,keyword:""},imgList:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,o(this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.tableData.data.map((function(e){t.imgList.push(e.image)})),t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()},onAdd:function(){var t=this;this.$modalForm(r()).then((function(){return t.getList()}))},onSync:function(){var t=this;d().then((function(e){t.$message.success(e.message)})).catch((function(e){t.$message.error(e.message)}))},onEdit:function(t){var e=this;this.$modalForm(l(t)).then((function(){return e.getList()}))},handleDelete:function(t,e){var a=this;this.$modalSure().then((function(){c(t).then((function(t){var s=t.message;a.$message.success(s),a.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;a.$message.error(e)}))}))},onchangeIsShow:function(t){var e=this;u(t.id,t.is_show).then((function(t){var a=t.message;e.$message.success(a)})).catch((function(t){var a=t.message;e.$message.error(a)}))}}},g=m,p=(a("70b7"),a("2877")),f=Object(p["a"])(g,s,n,!1,null,"5b6e6280",null);e["default"]=f.exports}}]);