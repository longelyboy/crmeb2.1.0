(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213a3e"],{ae15:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onAdd(0)}}},[t._v("添加城市")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small","row-key":"id",lazy:"",load:t.load,"tree-props":{children:"children"}}},[a("el-table-column",{attrs:{prop:"name",label:"地区名称","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"parent.name",label:"上级名称","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.parent&&e.row.parent.name||"中国"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onAdd(e.row.id)}}},[t._v("添加")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onEdit(e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row.id,e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)],1)},i=[],s=a("8593"),l={name:"CityList",data:function(){return{listLoading:!0,tableData:{data:[],total:0},childrenData:[],tableFrom:{page:1,limit:20}}},mounted:function(){this.getList(0)},methods:{getList:function(t){var e=this;this.listLoading=!0,Object(s["m"])(t).then((function(t){e.tableData.data=t.data,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},getChildren:function(t){var e=this;Object(s["m"])(t).then((function(t){e.childrenData=t.data})).catch((function(t){e.$message.error(t.message)}))},load:function(t,e,a){var n=this;n.getChildren(t.id),setTimeout((function(){a(n.childrenData)}),1e3)},onAdd:function(t){var e=this;this.$modalForm(Object(s["k"])(t)).then((function(){return e.getList(0)}))},onEdit:function(t){var e=this;this.$modalForm(Object(s["n"])(t)).then((function(){return e.getList(0)}))},handleDelete:function(t,e,a){var n=this;this.$modalSure("确定删除该城市").then((function(){Object(s["l"])(t).then((function(t){var i=t.message;if(a.parent){var s=n.childrenData.map((function(t){return t})).indexOf(a);n.childrenData.splice(s,1)}else n.tableData.data.splice(e,1);n.$message.success(i)})).catch((function(t){var e=t.message;n.$message.error(e)}))}))}}},r=l,o=a("2877"),c=Object(o["a"])(r,n,i,!1,null,"b9fff3fe",null);e["default"]=c.exports}}]);