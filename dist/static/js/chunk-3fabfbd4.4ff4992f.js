(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fabfbd4"],{6402:function(e,t,a){"use strict";a("997c")},"997c":function(e,t,a){},c24f:function(e,t,a){"use strict";var r=a("bb36");t["a"]={login:function(e){return r["a"].post("/passport/login",e)},register:function(e){return r["a"].post("/passport/logon",e)},getCode:function(e){return r["a"].post("/passport/getCode",{email:e})},findBack:function(e){return r["a"].post("/passport/findBack",e)}}},e8bb:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",e._b({attrs:{label:"邮箱"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"邮箱格式不正确",pattern:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/}]}],expression:"['email',\n      { rules: [{ required: true, message: '邮箱格式不正确',pattern: /\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/ }] },\n        ]"}]})],1),a("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[a("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 用户名 "),a("a-tooltip",{attrs:{title:"用户名"}},[a("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入您的用户名",pattern:/^[a-z0-9]{3,8}$/g}],validateTrigger:"change"}],expression:"['username',{rules:[{required: true,message: '请输入您的用户名',pattern:/^[a-z0-9]{3,8}$/g}],validateTrigger:'change'}]"}]})],1),a("a-form-item",e._b({attrs:{label:"密码","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入您的密码",pattern:/^[a-z0-9]{3,8}$/g}]}],expression:"[\n          'password',\n          {\n            rules: [\n              {\n                required: true,\n                message: '请输入您的密码',\n                pattern:/^[a-z0-9]{3,8}$/g\n              }\n            ],\n          },\n        ]"}],attrs:{type:"password"}})],1),a("a-form-item",e._b({attrs:{label:"用户角色"}},"a-form-item",e.formItemLayout,!1),[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["role"],expression:"['role']"}]},[a("a-radio",{attrs:{value:"customer"}},[e._v(" 普通用户 ")]),a("a-radio",{attrs:{value:"admin"}},[e._v(" 管理员用户 ")])],1)],1),a("a-form-item",e._b({attrs:{label:"验证码"}},"a-form-item",e.formItemLayout,!1),[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{rules:[{message:"验证码不正确",pattern:/^[a-z0-9]{6}$/g}]}],expression:"['code', {rules:[{ message: '验证码不正确',pattern:/^[a-z0-9]{6}$/g}]}]"}]})],1),a("a-col",{attrs:{span:12}},[a("a-button",{on:{click:e.handleCaptcha}},[e._v("获取验证码")])],1)],1)],1),a("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[a("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:e.register}},[e._v(" 注册 ")])],1)],1)],1)},o=[],n=a("c24f"),s={data:function(){return{confirmDirty:!1,formItemLayout:{labelCol:{span:5},wrapperCol:{span:12}},tailFormItemLayout:{labelCol:{span:5},wrapperCol:{span:12,offset:10}}}},beforeCreate:function(){this.form=this.$form.createForm(this)},methods:{handleSubmit:function(e){e.preventDefault()},handleCaptcha:function(){this.form.validateFields((function(e,t){e||(console.log(t),n["a"].getCode(t.email).then((function(e){return console.log(e)})))}))},register:function(){var e=this;this.form.validateFields((function(t,a){t||(console.log(a),n["a"].register(a).then((function(){return e.$router.push({name:"Login"})})).catch((function(t){return e.form.$message.error(t)})))}))}}},i=s,u=(a("6402"),a("2877")),m=Object(u["a"])(i,r,o,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-3fabfbd4.4ff4992f.js.map