(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-717a1121"],{"2df9":function(t,e,r){"use strict";r("602c")},"602c":function(t,e,r){},c24f:function(t,e,r){"use strict";var o=r("bb36");e["a"]={login:function(t){return o["a"].post("/passport/login",t)},register:function(t){return o["a"].post("/passport/logon",t)},getCode:function(t){return o["a"].post("/passport/getCode",{email:t})},findBack:function(t){return o["a"].post("/passport/findBack",t)}}},cd49:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form",{staticClass:"login-form",attrs:{form:t.form},on:{submit:t.handleSubmit}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"邮箱格式不正确",pattern:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/}]}],expression:"[\n        'email',\n        { rules: [{ required: true, message: '邮箱格式不正确',pattern: /\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/ }] },\n      ]"}],attrs:{placeholder:"邮箱"}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"密码格式3-8位数字加英文字母",pattern:/^[a-z0-9]{3,8}$/g}]}],expression:"[\n        'password',\n        { rules: [{ required: true, message: '密码格式3-8位数字加英文字母',pattern:/^[a-z0-9]{3,8}$/g}] },\n      ]"}],attrs:{type:"password",placeholder:"密码"}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),r("a-form-item",[r("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"},on:{click:t.login}},[t._v(" 登录 ")]),r("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"},on:{click:t.forget}},[t._v(" 找回密码 ")]),r("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"},on:{click:t.register}},[t._v(" 注册 ")])],1)],1)},s=[],a=r("c24f"),n={beforeCreate:function(){this.form=this.$form.createForm(this)},methods:{handleSubmit:function(t){t.preventDefault()},login:function(){var t=this;this.form.validateFields((function(e,r){e||a["a"].login(r).then((function(e){t.$store.dispatch("setUserInfo",e),t.$router.push({name:"Home"})})).catch((function(e){t.$message.error(e)}))}))},forget:function(){this.$router.push({name:"Forget"})},register:function(){this.$router.push({name:"Register"})}}},i=n,u=(r("2df9"),r("2877")),c=Object(u["a"])(i,o,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-717a1121.fb362b8b.js.map