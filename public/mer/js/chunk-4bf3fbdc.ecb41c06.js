(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bf3fbdc"],{"0afe":function(t,e,i){"use strict";i("5770")},"29d7":function(t,e,i){"use strict";i("fceb")},5770:function(t,e,i){},"951a":function(t,e,i){t.exports=i.p+"mer/img/default.6b914f9c.jpg"},"9a9b":function(t,e,i){t.exports=i.p+"mer/img/laber.0bc21b94.png"},"9ed6":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-account"},[i("div",{staticClass:"container",class:[t.fullWidth>768?"containerSamll":"containerBig"]},[t.fullWidth>768?i("swiper",{staticClass:"swiperPross",attrs:{options:t.swiperOption}},[t._l(t.swiperList,(function(t,e){return i("swiper-slide",{key:e,staticClass:"swiperPic"},[i("img",{attrs:{src:t.pic}})])})),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),t._v(" "),i("div",{staticClass:"index_from page-account-container"},[t._m(0),t._v(" "),i("div",{staticClass:"page-account-top"},[i("div",{staticClass:"page-account-top-logo"},[i("img",{attrs:{src:t.loginLogo,alt:"logo"}})])]),t._v(" "),i("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}}},[i("el-form-item",{attrs:{prop:"account"}},[i("el-input",{ref:"account",attrs:{placeholder:"用户名","prefix-icon":"el-icon-user",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.account,callback:function(e){t.$set(t.loginForm,"account",e)},expression:"loginForm.account"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on","prefix-icon":"el-icon-lock"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),i("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[i("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),i("el-button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")])],1)],1)],1),t._v(" "),i("div",{staticClass:"record_number"},[-1==t.copyright.status?[i("span",{staticClass:"cell"},[t._v("Copyright "+t._s(t.copyright.year))]),t._v(" "),i("a",{staticClass:"cell",attrs:{href:"http://"+t.copyright.url,target:"_blank"}},[t._v(t._s(t.copyright.version))])]:[t._v(t._s(t.copyright.Copyright))]],2),t._v(" "),i("Verify",{ref:"verify",attrs:{captchaType:"blockPuzzle",imgSize:{width:"330px",height:"155px"}},on:{success:t.success}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"labelPic"},[n("img",{attrs:{src:i("9a9b")}})])}],s=(i("ac6a"),i("456d"),i("c24f")),a=i("8593"),r=i("6618");!function(){function t(t,e,i){return t.getAttribute(e)||i}function e(t){return document.getElementsByTagName(t)}function i(){var i=e("script"),n=i.length,o=i[n-1];return{l:n,z:t(o,"zIndex",-2),o:t(o,"opacity",.8),c:t(o,"color","255,255,255"),n:t(o,"count",240)}}function n(){s=r.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=r.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function o(){if(d+=1,d<5)u(o);else{d=0,h.clearRect(0,0,s,a);var t,e,i,n,r,l,f=[p].concat(g);g.forEach((function(o){for(o.x+=o.xa,o.y+=o.ya,o.xa*=o.x>s||o.x<0?-1:1,o.ya*=o.y>a||o.y<0?-1:1,h.fillRect(o.x-.5,o.y-.5,2,2),h.fillStyle="#FFFFFF",e=0;e<f.length;e++)t=f[e],o!==t&&null!==t.x&&null!==t.y&&(n=o.x-t.x,r=o.y-t.y,l=n*n+r*r,l<t.max&&(t===p&&l>=t.max/2&&(o.x-=.03*n,o.y-=.03*r),i=(t.max-l)/t.max,h.beginPath(),h.lineWidth=i/2,h.strokeStyle="rgba("+c.c+","+(i+.2)+")",h.moveTo(o.x,o.y),h.lineTo(t.x,t.y),h.stroke()));f.splice(f.indexOf(o),1)})),u(o)}}var s,a,r=document.createElement("canvas"),c=i(),l="c_n"+c.l,h=r.getContext("2d"),d=0,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/45)},f=Math.random,p={x:null,y:null,max:2e4};r.id=l,r.style.cssText="position:fixed;top:0;left:0;z-index:"+c.z+";opacity:"+c.o,e("body")[0].appendChild(r),n(),window.onresize=n,window.onmousemove=function(t){t=t||window.event,p.x=t.clientX,p.y=t.clientY},window.onmouseout=function(){p.x=null,p.y=null};for(var g=[],m=0;c.n>m;m++){var v=f()*s,y=f()*a,b=2*f()-1,w=2*f()-1;g.push({x:v,y:y,xa:b,ya:w,max:6e3})}setTimeout((function(){o()}),100)}();var c=i("a78e"),l=i.n(c),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.showBox,expression:"showBox"}],class:"pop"==t.mode?"verify-mask":""},[i("div",{class:"pop"==t.mode?"verifybox":"",style:{"max-width":parseInt(t.imgSize.width)+30+"px"}},["pop"==t.mode?i("div",{staticClass:"verifybox-top"},[t._v("\n      请完成安全验证\n      "),i("span",{staticClass:"verifybox-close",on:{click:t.closeBox}},[i("i",{staticClass:"iconfont icon-close"})])]):t._e(),t._v(" "),i("div",{staticClass:"verifybox-bottom",style:{padding:"pop"==t.mode?"15px":"0"}},[t.componentType?i(t.componentType,{ref:"instance",tag:"components",attrs:{"captcha-type":t.captchaType,type:t.verifyType,figure:t.figure,arith:t.arith,mode:t.mode,"v-space":t.vSpace,explain:t.explain,"img-size":t.imgSize,"block-size":t.blockSize,"bar-size":t.barSize,"default-img":t.defaultImg}}):t._e()],1)])])},d=[],u=(i("6b54"),i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},["2"===t.type?i("div",{staticClass:"verify-img-out",style:{height:parseInt(t.setSize.imgHeight)+t.vSpace+"px"}},[i("div",{staticClass:"verify-img-panel",style:{width:t.setSize.imgWidth,height:t.setSize.imgHeight}},[i("img",{staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:t.backImgBase?"data:image/png;base64,"+t.backImgBase:t.defaultImg,alt:""}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",on:{click:t.refresh}},[i("i",{staticClass:"iconfont icon-refresh"})]),t._v(" "),i("transition",{attrs:{name:"tips"}},[t.tipWords?i("span",{staticClass:"verify-tips",class:t.passFlag?"suc-bg":"err-bg"},[t._v(t._s(t.tipWords))]):t._e()])],1)]):t._e(),t._v(" "),i("div",{staticClass:"verify-bar-area",style:{width:t.setSize.imgWidth,height:t.barSize.height,"line-height":t.barSize.height}},[i("span",{staticClass:"verify-msg",domProps:{textContent:t._s(t.text)}}),t._v(" "),i("div",{staticClass:"verify-left-bar",style:{width:void 0!==t.leftBarWidth?t.leftBarWidth:t.barSize.height,height:t.barSize.height,"border-color":t.leftBarBorderColor,transaction:t.transitionWidth}},[i("span",{staticClass:"verify-msg",domProps:{textContent:t._s(t.finishText)}}),t._v(" "),i("div",{staticClass:"verify-move-block",style:{width:t.barSize.height,height:t.barSize.height,"background-color":t.moveBlockBackgroundColor,left:t.moveBlockLeft,transition:t.transitionLeft},on:{touchstart:t.start,mousedown:t.start}},[i("i",{class:["verify-icon iconfont",t.iconClass],style:{color:t.iconColor}}),t._v(" "),"2"===t.type?i("div",{staticClass:"verify-sub-block",style:{width:Math.floor(47*parseInt(t.setSize.imgWidth)/310)+"px",height:t.setSize.imgHeight,top:"-"+(parseInt(t.setSize.imgHeight)+t.vSpace)+"px","background-size":t.setSize.imgWidth+" "+t.setSize.imgHeight}},[i("img",{staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:"data:image/png;base64,"+t.blockBackImgBase,alt:""}})]):t._e()])])])])}),f=[];i("a481");function p(t){return t}function g(t){var e,i,n,o,s=t.$el.parentNode.offsetWidth||window.offsetWidth,a=t.$el.parentNode.offsetHeight||window.offsetHeight;return e=-1!=t.imgSize.width.indexOf("%")?parseInt(this.imgSize.width)/100*s+"px":this.imgSize.width,i=-1!=t.imgSize.height.indexOf("%")?parseInt(this.imgSize.height)/100*a+"px":this.imgSize.height,n=-1!=t.barSize.width.indexOf("%")?parseInt(this.barSize.width)/100*s+"px":this.barSize.width,o=-1!=t.barSize.height.indexOf("%")?parseInt(this.barSize.height)/100*a+"px":this.barSize.height,{imgWidth:e,imgHeight:i,barWidth:n,barHeight:o}}var m={name:"VerifySlide",props:{captchaType:{type:String,default:"blockPuzzle"},type:{type:String,default:"1"},mode:{type:String,default:"fixed"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object,default:function(){return{width:"310px",height:"40px"}}},defaultImg:{type:String,default:""}},data:function(){return{secretKey:"",passFlag:"",backImgBase:"",blockBackImgBase:"",backToken:"",startMoveTime:"",endMovetime:"",tipsBackColor:"",tipWords:"",text:"",finishText:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},top:0,left:0,moveBlockLeft:void 0,leftBarWidth:void 0,moveBlockBackgroundColor:void 0,leftBarBorderColor:"#ddd",iconColor:void 0,iconClass:"icon-right",status:!1,isEnd:!1,showRefresh:!0,transitionLeft:"",transitionWidth:""}},computed:{barArea:function(){return this.$el.querySelector(".verify-bar-area")},resetSize:function(){return g}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){this.$el.onselectstart=function(){return!1},console.log(this.defaultImg)},methods:{init:function(){var t=this;this.text=this.explain,this.getPictrue(),this.$nextTick((function(){var e=t.resetSize(t);for(var i in e)t.$set(t.setSize,i,e[i]);t.$parent.$emit("ready",t)}));var e=this;window.removeEventListener("touchmove",(function(t){e.move(t)})),window.removeEventListener("mousemove",(function(t){e.move(t)})),window.removeEventListener("touchend",(function(){e.end()})),window.removeEventListener("mouseup",(function(){e.end()})),window.addEventListener("touchmove",(function(t){e.move(t)})),window.addEventListener("mousemove",(function(t){e.move(t)})),window.addEventListener("touchend",(function(){e.end()})),window.addEventListener("mouseup",(function(){e.end()}))},start:function(t){if(t=t||window.event,t.touches)e=t.touches[0].pageX;else var e=t.clientX;this.startLeft=Math.floor(e-this.barArea.getBoundingClientRect().left),this.startMoveTime=+new Date,0==this.isEnd&&(this.text="",this.moveBlockBackgroundColor="#337ab7",this.leftBarBorderColor="#337AB7",this.iconColor="#fff",t.stopPropagation(),this.status=!0)},move:function(t){if(t=t||window.event,this.status&&0==this.isEnd){if(t.touches)e=t.touches[0].pageX;else var e=t.clientX;var i=this.barArea.getBoundingClientRect().left,n=e-i;n>=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2&&(n=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2),n<=0&&(n=parseInt(parseInt(this.blockSize.width)/2)),this.moveBlockLeft=n-this.startLeft+"px",this.leftBarWidth=n-this.startLeft+"px"}},end:function(){var t=this;this.endMovetime=+new Date;var e=this;if(this.status&&0==this.isEnd){var i=parseInt((this.moveBlockLeft||"").replace("px",""));i=310*i/parseInt(this.setSize.imgWidth);var n={captchaType:this.captchaType,pointJson:this.secretKey?p(JSON.stringify({x:i,y:5}),this.secretKey):JSON.stringify({x:i,y:5}),token:this.backToken};Object(a["c"])(n).then((function(e){t.moveBlockBackgroundColor="#5cb85c",t.leftBarBorderColor="#5cb85c",t.iconColor="#fff",t.iconClass="icon-check",t.showRefresh=!1,t.isEnd=!0,"pop"==t.mode&&setTimeout((function(){t.$parent.clickShow=!1,t.refresh()}),1500),t.passFlag=!0,t.tipWords="".concat(((t.endMovetime-t.startMoveTime)/1e3).toFixed(2),"s验证成功");var n=t.secretKey?p(t.backToken+"---"+JSON.stringify({x:i,y:5}),t.secretKey):t.backToken+"---"+JSON.stringify({x:i,y:5});setTimeout((function(){t.tipWords="",t.$parent.closeBox(),t.$parent.$emit("success",{captchaVerification:n})}),1e3)})).catch((function(i){t.moveBlockBackgroundColor="#d9534f",t.leftBarBorderColor="#d9534f",t.iconColor="#fff",t.iconClass="icon-close",t.passFlag=!1,setTimeout((function(){e.refresh()}),1e3),t.$parent.$emit("error",t),t.tipWords="验证失败",setTimeout((function(){t.tipWords=""}),1e3)})),this.status=!1}},refresh:function(){var t=this;this.showRefresh=!0,this.finishText="",this.transitionLeft="left .3s",this.moveBlockLeft=0,this.leftBarWidth=void 0,this.transitionWidth="width .3s",this.leftBarBorderColor="#ddd",this.moveBlockBackgroundColor="#fff",this.iconColor="#000",this.iconClass="icon-right",this.isEnd=!1,this.getPictrue(),setTimeout((function(){t.transitionWidth="",t.transitionLeft="",t.text=t.explain}),300)},getPictrue:function(){var t=this;console.log("sssss");var e={captchaType:this.captchaType,clientUid:localStorage.getItem("slider"),ts:Date.now()};console.log(e),Object(a["b"])(e).then((function(e){t.backImgBase=e.data.originalImageBase64,t.blockBackImgBase=e.data.jigsawImageBase64,t.backToken=e.data.token,t.secretKey=e.data.secretKey})).catch((function(e){t.tipWords=e.msg,t.backImgBase=null,t.blockBackImgBase=null}))}}},v=m,y=i("2877"),b=Object(y["a"])(v,u,f,!1,null,null,null),w=b.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[i("div",{staticClass:"verify-img-out"},[i("div",{staticClass:"verify-img-panel",style:{width:t.setSize.imgWidth,height:t.setSize.imgHeight,"background-size":t.setSize.imgWidth+" "+t.setSize.imgHeight,"margin-bottom":t.vSpace+"px"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showRefresh,expression:"showRefresh"}],staticClass:"verify-refresh",staticStyle:{"z-index":"3"},on:{click:t.refresh}},[i("i",{staticClass:"iconfont icon-refresh"})]),t._v(" "),i("img",{ref:"canvas",staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:t.pointBackImgBase?"data:image/png;base64,"+t.pointBackImgBase:t.defaultImg,alt:""},on:{click:function(e){t.bindingClick&&t.canvasClick(e)}}}),t._v(" "),t._l(t.tempPoints,(function(e,n){return i("div",{key:n,staticClass:"point-area",style:{"background-color":"#1abd6c",color:"#fff","z-index":9999,width:"20px",height:"20px","text-align":"center","line-height":"20px","border-radius":"50%",position:"absolute",top:parseInt(e.y-10)+"px",left:parseInt(e.x-10)+"px"}},[t._v("\n        "+t._s(n+1)+"\n      ")])}))],2)]),t._v(" "),i("div",{staticClass:"verify-bar-area",style:{width:t.setSize.imgWidth,color:this.barAreaColor,"border-color":this.barAreaBorderColor,"line-height":this.barSize.height}},[i("span",{staticClass:"verify-msg"},[t._v(t._s(t.text))])])])},x=[],S={name:"VerifyPoints",props:{mode:{type:String,default:"fixed"},captchaType:{type:String,default:"blockPuzzle"},vSpace:{type:Number,default:5},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},barSize:{type:Object,default:function(){return{width:"310px",height:"40px"}}},defaultImg:{type:String,default:""}},data:function(){return{secretKey:"",checkNum:3,fontPos:[],checkPosArr:[],num:1,pointBackImgBase:"",poinTextList:[],backToken:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},tempPoints:[],text:"",barAreaColor:void 0,barAreaBorderColor:void 0,showRefresh:!0,bindingClick:!0}},computed:{resetSize:function(){return g}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){this.$el.onselectstart=function(){return!1}},methods:{init:function(){var t=this;this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.getPictrue(),this.$nextTick((function(){t.setSize=t.resetSize(t),t.$parent.$emit("ready",t)}))},canvasClick:function(t){var e=this;this.checkPosArr.push(this.getMousePos(this.$refs.canvas,t)),this.num==this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,t)),this.checkPosArr=this.pointTransfrom(this.checkPosArr,this.setSize),setTimeout((function(){var t=e.secretKey?p(e.backToken+"---"+JSON.stringify(e.checkPosArr),e.secretKey):e.backToken+"---"+JSON.stringify(e.checkPosArr),i={captchaType:e.captchaType,pointJson:e.secretKey?p(JSON.stringify(e.checkPosArr),e.secretKey):JSON.stringify(e.checkPosArr),token:e.backToken};Object(a["c"])(i).then((function(i){"0000"==i.repCode?(e.barAreaColor="#4cae4c",e.barAreaBorderColor="#5cb85c",e.text="验证成功",e.bindingClick=!1,"pop"==e.mode&&setTimeout((function(){e.$parent.clickShow=!1,e.refresh()}),1500),e.$parent.$emit("success",{captchaVerification:t})):(e.$parent.$emit("error",e),e.barAreaColor="#d9534f",e.barAreaBorderColor="#d9534f",e.text="验证失败",setTimeout((function(){e.refresh()}),700))}))}),400)),this.num<this.checkNum&&(this.num=this.createPoint(this.getMousePos(this.$refs.canvas,t)))},getMousePos:function(t,e){var i=e.offsetX,n=e.offsetY;return{x:i,y:n}},createPoint:function(t){return this.tempPoints.push(Object.assign({},t)),++this.num},refresh:function(){this.tempPoints.splice(0,this.tempPoints.length),this.barAreaColor="#000",this.barAreaBorderColor="#ddd",this.bindingClick=!0,this.fontPos.splice(0,this.fontPos.length),this.checkPosArr.splice(0,this.checkPosArr.length),this.num=1,this.getPictrue(),this.text="验证失败",this.showRefresh=!0},getPictrue:function(){var t=this,e={captchaType:this.captchaType,clientUid:localStorage.getItem("point"),ts:Date.now()};Object(a["b"])(e).then((function(e){"0000"==e.repCode?(t.pointBackImgBase=e.repData.originalImageBase64,t.backToken=e.repData.token,t.secretKey=e.repData.secretKey,t.poinTextList=e.repData.wordList,t.text="请依次点击【"+t.poinTextList.join(",")+"】"):t.text=e.repMsg,"6201"==e.repCode&&(t.pointBackImgBase=null)}))},pointTransfrom:function(t,e){var i=t.map((function(t){var i=Math.round(310*t.x/parseInt(e.imgWidth)),n=Math.round(155*t.y/parseInt(e.imgHeight));return{x:i,y:n}}));return i}}},C=S,z=Object(y["a"])(C,k,x,!1,null,null,null),B=z.exports,T={name:"Vue2Verify",components:{VerifySlide:w,VerifyPoints:B},props:{locale:{require:!1,type:String,default:function(){if(navigator.language)var t=navigator.language;else t=navigator.browserLanguage;return t}},captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number},explain:{type:String},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object},barSize:{type:Object}},data:function(){return{clickShow:!1,verifyType:void 0,componentType:void 0,defaultImg:i("951a")}},computed:{instance:function(){return this.$refs.instance||{}},showBox:function(){return"pop"!=this.mode||this.clickShow}},watch:{captchaType:{immediate:!0,handler:function(t){switch(t.toString()){case"blockPuzzle":this.verifyType="2",this.componentType="VerifySlide";break;case"clickWord":this.verifyType="",this.componentType="VerifyPoints";break}}}},mounted:function(){this.uuid()},methods:{uuid:function(){for(var t=[],e="0123456789abcdef",i=0;i<36;i++)t[i]=e.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var n="slider-"+t.join(""),o="point-"+t.join("");console.log(localStorage.getItem("slider")),localStorage.getItem("slider")||localStorage.setItem("slider",n),localStorage.getItem("point")||localStorage.setItem("point",o)},i18n:function(t){if(this.$t)return this.$t(t);var e=this.$options.i18n.messages[this.locale]||this.$options.i18n.messages["en-US"];return e[t]},refresh:function(){this.instance.refresh&&this.instance.refresh()},closeBox:function(){this.clickShow=!1,this.refresh()},show:function(){"pop"==this.mode&&(this.clickShow=!0)}}},_=T,I=(i("0afe"),Object(y["a"])(_,h,d,!1,null,null,null)),$=I.exports,P={name:"Login",components:{Verify:$},data:function(){var t=function(t,e,i){e?i():i(new Error("请输入用户名"))},e=function(t,e,i){e?e.length<6?i(new Error("请输入不少于6位数的密码")):i():i(new Error("请输入密码"))};return{fullWidth:document.body.clientWidth,swiperOption:{pagination:{el:".pagination"},autoplay:{enabled:!0,disableOnInteraction:!1,delay:3e3}},captchatImg:"",loginLogo:"",beian_sn:"",swiperList:[],loginForm:{account:"",password:"",key:"",code:""},loginRules:{account:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}],code:[{required:!0,message:"请输入正确的验证码",trigger:"blur"}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},copyright:""}},watch:{$route:{fullWidth:function(t){if(!this.timer){this.screenWidth=t,this.timer=!0;var e=this;setTimeout((function(){e.timer=!1}),400)}},handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},created:function(){var t=this;document.onkeydown=function(e){if(-1!==t.$route.path.indexOf("login")){var i=window.event.keyCode;13===i&&t.handleLogin()}},window.addEventListener("resize",this.handleResize)},mounted:function(){var t=this;this.getInfo(),this.$nextTick((function(){t.screenWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"})),this.getCaptcha(),this.getVersion()},beforeCreate:function(){this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg")},destroyed:function(){},methods:{getInfo:function(){var t=this;Object(s["r"])().then((function(e){var i=e.data;t.swiperList=i.login_banner,t.loginLogo=i.login_logo,t.beian_sn=i.beian_sn,l.a.set("MerInfo",JSON.stringify(i))})).catch((function(e){var i=e.message;t.$message.error(i)}))},getVerify:function(){var t=this;return t.loginForm.account?t.loginForm.password?void this.$refs.verify.show():t.$message.error("请填写密码"):t.$message.error("请填写账号码")},getCaptcha:function(){var t=this;Object(s["f"])().then((function(e){var i=e.data;t.captchatImg=i.captcha,t.loginForm.key=i.key})).catch((function(e){var i=e.message;t.$message.error(i)}))},checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.loginForm.captchaVerification="",this.$refs["loginForm"].validate((function(e){if(!e)return!1;t.loading=!0,Object(a["d"])({account:t.loginForm.account}).then((function(e){e.data.status?t.getVerify():t.loginIn()})).catch((function(e){t.$message.error(e.message)}))}))},loginIn:function(){var t=this;this.$store.dispatch("user/login",this.loginForm).then((function(e){console.log(e),t.$router.push({path:"/"}),t.loading=!1,t.$root.closeNotice(),t.$root.notice=Object(r["a"])(e.token)})).catch((function(e){t.loginForm.code="",t.$message.error(e.message),t.loading=!1}))},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,i){return"redirect"!==i&&(e[i]=t[i]),e}),{})},handleResize:function(t){this.fullWidth=document.body.clientWidth,this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},getVersion:function(){var t=this;Object(s["l"])().then((function(e){t.copyright=e.data}))},success:function(t){this.isShow=!1,this.loginForm.captchaType="blockPuzzle",this.loginForm.captchaVerification=t.captchaVerification,this.loginIn()}}},W=P,O=(i("29d7"),i("b2f3"),Object(y["a"])(W,n,o,!1,null,"7b864943",null));e["default"]=O.exports},b2f3:function(t,e,i){"use strict";i("d778")},d778:function(t,e,i){},fceb:function(t,e,i){}}]);