(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xuesheng/add-or-update"],{1422:function(e,n,t){"use strict";t.r(n);var r=t("7f01"),i=t("ae84");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("74f9");var u,o=t("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"69047627",null,!1,r["a"],u);n["default"]=s.exports},"493c":function(e,n,t){"use strict";(function(e){t("398d");r(t("66fd"));var n=r(t("1422"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"74f9":function(e,n,t){"use strict";var r=t("d7bf"),i=t.n(r);i.a},"7f01":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},ae84:function(e,n,t){"use strict";t.r(n);var r=t("b19c"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},b19c:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function o(e){a(u,r,i,o,s,"next",e)}function s(e){a(u,r,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("f6da"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{xuehao:"",mima:"",xueshengxingming:"",xingbie:"",touxiang:"",banji:"",shouji:"",youxiang:""},xingbieOptions:[],xingbieIndex:0,banjiOptions:[],banjiIndex:0,user:{},ro:{xuehao:!1,mima:!1,xueshengxingming:!1,xingbie:!1,touxiang:!1,banji:!1,shouji:!1,youxiang:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return u(r.default.mark((function i(){var a,u,o,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.getStorageSync("nowTable"),i.next=3,t.$api.session(a);case 3:return u=i.sent,t.user=u.data,t.xingbieOptions="男,女".split(","),i.next=8,t.$api.option("banji","banji",{});case 8:if(u=i.sent,t.banjiOptions=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=18;break}return t.ruleForm.id=n.id,i.next=16,t.$api.info("xuesheng",t.ruleForm.id);case 16:u=i.sent,t.ruleForm=u.data;case 18:if(!n.cross){i.next=57;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 21:if((i.t1=i.t0()).done){i.next=57;break}if(s=i.t1.value,"xuehao"!=s){i.next=27;break}return t.ruleForm.xuehao=o[s],t.ro.xuehao=!0,i.abrupt("continue",21);case 27:if("mima"!=s){i.next=31;break}return t.ruleForm.mima=o[s],t.ro.mima=!0,i.abrupt("continue",21);case 31:if("xueshengxingming"!=s){i.next=35;break}return t.ruleForm.xueshengxingming=o[s],t.ro.xueshengxingming=!0,i.abrupt("continue",21);case 35:if("xingbie"!=s){i.next=39;break}return t.ruleForm.xingbie=o[s],t.ro.xingbie=!0,i.abrupt("continue",21);case 39:if("touxiang"!=s){i.next=43;break}return t.ruleForm.touxiang=o[s],t.ro.touxiang=!0,i.abrupt("continue",21);case 43:if("banji"!=s){i.next=47;break}return t.ruleForm.banji=o[s],t.ro.banji=!0,i.abrupt("continue",21);case 47:if("shouji"!=s){i.next=51;break}return t.ruleForm.shouji=o[s],t.ro.shouji=!0,i.abrupt("continue",21);case 51:if("youxiang"!=s){i.next=55;break}return t.ruleForm.youxiang=o[s],t.ro.youxiang=!0,i.abrupt("continue",21);case 55:i.next=21;break;case 57:t.styleChange();case 58:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},banjiChange:function(e){this.banjiIndex=e.target.value,this.ruleForm.banji=this.banjiOptions[this.banjiIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.xuehao){n.next=3;break}return e.$utils.msg("学号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.xueshengxingming){n.next=9;break}return e.$utils.msg("学生姓名不能为空"),n.abrupt("return");case 9:if(!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=12;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 12:if(!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 15:if(!e.ruleForm.id){n.next=20;break}return n.next=18,e.$api.update("xuesheng",e.ruleForm);case 18:n.next=22;break;case 20:return n.next=22,e.$api.add("xuesheng",e.ruleForm);case 22:e.$utils.msgBack("提交成功");case 23:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},d7bf:function(e,n,t){}},[["493c","common/runtime","common/vendor"]]]);