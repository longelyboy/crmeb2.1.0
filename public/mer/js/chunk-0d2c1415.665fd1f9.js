(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d2c1415","chunk-2d0da983"],{4553:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"mt20 ml20"},[i("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入视频链接"},model:{value:e.videoLink,callback:function(t){e.videoLink=t},expression:"videoLink"}}),e._v(" "),i("input",{ref:"refid",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.zh_uploadFile_change}}),e._v(" "),i("el-button",{staticClass:"ml10",attrs:{type:"primary",icon:"ios-cloud-upload-outline"},on:{click:e.zh_uploadFile}},[e._v(e._s(e.videoLink?"确认添加":"上传视频"))]),e._v(" "),e.upload.videoIng?i("el-progress",{staticStyle:{"margin-top":"20px"},attrs:{"stroke-width":20,percentage:e.progress,"text-inside":!0}}):e._e(),e._v(" "),e.formValidate.video_link?i("div",{staticClass:"iview-video-style"},[i("video",{staticStyle:{width:"100%",height:"100%!important","border-radius":"10px"},attrs:{src:e.formValidate.video_link,controls:"controls"}},[e._v("\n        您的浏览器不支持 video 标签。\n      ")]),e._v(" "),i("div",{staticClass:"mark"}),e._v(" "),i("i",{staticClass:"iconv el-icon-delete",on:{click:e.delVideo}})]):e._e()],1),e._v(" "),i("div",{staticClass:"mt50 ml20"},[i("el-button",{attrs:{type:"primary"},on:{click:e.uploads}},[e._v("确认")])],1)])},a=[],n=(i("7f7f"),i("c4c8")),s=(i("6bef"),{name:"Vide11o",props:{isDiy:{type:Boolean,default:!1}},data:function(){return{upload:{videoIng:!1},progress:20,videoLink:"",formValidate:{video_link:""}}},methods:{delVideo:function(){var e=this;e.$set(e.formValidate,"video_link","")},zh_uploadFile:function(){this.videoLink?this.formValidate.video_link=this.videoLink:this.$refs.refid.click()},zh_uploadFile_change:function(e){var t=this,i=e.target.files[0].name.substr(e.target.files[0].name.indexOf("."));if(".mp4"!==i)return t.$message.error("只能上传MP4文件");Object(n["db"])().then((function(i){t.$videoCloud.videoUpload({type:i.data.type,evfile:e,res:i,uploading:function(e,i){t.upload.videoIng=e,console.log(e,i)}}).then((function(e){t.formValidate.video_link=e.url||e.data.src,t.$message.success("视频上传成功"),t.progress=100,t.upload.videoIng=!1})).catch((function(e){t.$message.error(e)}))}))},uploads:function(){this.formValidate.video_link||this.videoLink?!this.videoLink||this.formValidate.video_link?this.isDiy?this.$emit("getVideo",this.formValidate.video_link):nowEditor&&(nowEditor.dialog.close(!0),nowEditor.editor.setContent("<video src='"+this.formValidate.video_link+"' controls='controls'></video>",!0)):this.$message.error("请点击确认添加按钮！"):this.$message.error("您还没有上传视频！")}}}),r=s,d=(i("8307"),i("2877")),l=Object(d["a"])(r,o,a,!1,null,"732b6bbd",null);t["default"]=l.exports},"6bef":function(e,t,i){"use strict";i.r(t);i("28a5"),i("a481");(function(){if(window.frameElement&&window.frameElement.id){var e=window.parent,t=e.$EDITORUI[window.frameElement.id.replace(/_iframe$/,"")],i=t.editor,o=e.UE,a=o.dom.domUtils,n=o.utils,s=(o.browser,o.ajax,function(e){return document.getElementById(e)});window.nowEditor={editor:i,dialog:t},n.loadFile(document,{href:i.options.themePath+i.options.theme+"/dialogbase.css?cache="+Math.random(),tag:"link",type:"text/css",rel:"stylesheet"});var r=i.getLang(t.className.split("-")[2]);r&&a.on(window,"load",(function(){var e=i.options.langPath+i.options.lang+"/images/";for(var t in r["static"]){var o=s(t);if(o){var d=o.tagName,l=r["static"][t];switch(l.src&&(l=n.extend({},l,!1),l.src=e+l.src),l.style&&(l=n.extend({},l,!1),l.style=l.style.replace(/url\s*\(/g,"url("+e)),d.toLowerCase()){case"var":o.parentNode.replaceChild(document.createTextNode(l),o);break;case"select":for(var c,u=o.options,v=0;c=u[v];)c.innerHTML=l.options[v++];for(var p in l)"options"!=p&&o.setAttribute(p,l[p]);break;default:a.setAttributes(o,l)}}}}))}})()},8307:function(e,t,i){"use strict";i("f5ee")},f5ee:function(e,t,i){}}]);