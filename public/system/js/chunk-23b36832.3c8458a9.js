(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b36832"],{b60c:function(t,e,a){"use strict";a("e511")},e511:function(t,e,a){},e8f3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"container"},[a("div",{staticClass:"demo-input-suffix acea-row"},[a("el-form",{attrs:{inline:"",size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{label:"搜索："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入参数模板名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.template_name,callback:function(e){t.$set(t.tableFrom,"template_name",e)},expression:"tableFrom.template_name"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商户名称："}},[a("el-select",{staticClass:"selWidth",attrs:{clearable:"",filterable:"",placeholder:"请选择"},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.mer_id,callback:function(e){t.$set(t.tableFrom,"mer_id",e)},expression:"tableFrom.mer_id"}},t._l(t.merSelect,(function(t){return a("el-option",{key:t.mer_id,attrs:{label:t.mer_name,value:t.mer_id}})})),1)],1)],1)],1)])]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small"}},[a("el-table-column",{attrs:{prop:"template_id",label:"ID","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"merchant.mer_name",label:"商户名称","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"template_name",label:"参数模板名称","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onDetail(e.row.template_id)}}},[t._v("查看")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onCopy(e.row.template_id)}}},[t._v("复制")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"400px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticStyle:{"min-height":"500px"}},[a("div",{staticClass:"description"},[a("div",{staticClass:"acea-row"},t._l(t.specsInfo.parameter,(function(e,i){return a("div",{key:i,staticClass:"description-term"},[a("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"value"},[t._v(t._s(e.value))])])})),0)])])])],1)},l=[],n=(a("ac6a"),a("83d6")),s=a("c4c8"),o={name:"SpecsList",data:function(){return{listLoading:!0,merSelect:[],tableData:{data:[],total:0},tableFrom:{page:1,limit:20,mer_id:"",template_name:""},specsInfo:{},dialogVisible:!1,title:""}},mounted:function(){this.getMerSelect(),this.getList("")},methods:{getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(s["Q"])(this.tableFrom).then((function(t){t.data.list.forEach((function(t,e){t.cate_name=[],t.cateId.forEach((function(e,a){t.cate_name.push(e.category.cate_name)}))})),e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},getMerSelect:function(){var t=this;Object(s["P"])().then((function(e){t.merSelect=e.data})).catch((function(e){t.$message.error(e.message)}))},onCopy:function(t){this.$router.push("".concat(n["roterPre"],"/product/specs/create/").concat(t,"?type=copy"))},onDetail:function(t){var e=this;Object(s["hb"])(t).then((function(t){e.specsInfo=t.data,e.title=t.data.template_name.length>10?t.data.template_name.slice(0,10)+"...":t.data.template_name,e.dialogVisible=!0})).catch((function(t){e.$message.error(t.message)}))}}},r=o,c=(a("b60c"),a("2877")),m=Object(c["a"])(r,i,l,!1,null,"0005c5ad",null);e["default"]=m.exports}}]);