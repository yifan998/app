<template>
  <div class="register">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="邮箱">
        <a-input v-decorator="['email',
        { rules: [{ required: true, message: '邮箱格式不正确',pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ }] },
          ]" />
      </a-form-item>
      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          用户名&nbsp;
          <a-tooltip title="用户名">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input v-decorator="['username',{rules:[{required: true,message: '请输入您的用户名',pattern:/^[a-z0-9]{3,8}$/g}],validateTrigger:'change'}]" />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
        <a-input v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: '请输入您的密码',
                  pattern:/^[a-z0-9]{3,8}$/g
                }
              ],
            },
          ]" type="password" />
      </a-form-item>
      <a-form-item label="用户角色" v-bind="formItemLayout">
        <a-radio-group v-decorator="['role']">
          <a-radio value="customer">
            普通用户
          </a-radio>
          <a-radio value="admin">
            管理员用户
          </a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="验证码">
        <a-row :gutter="8">
          <a-col :span="12">
            <a-input v-decorator="['code', {rules:[{ message: '验证码不正确',pattern:/^[a-z0-9]{6}$/g}]}]" />
          </a-col>
          <a-col :span="12">
            <a-button @click="handleCaptcha">获取验证码</a-button>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit" @click="register"> 注册 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import api from "@/api/user.js";
export default {
  data() {
    return {
      confirmDirty: false,
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 12 },
      },
      tailFormItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 12, offset: 10 },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
    },
    handleCaptcha() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          api.getCode(values.email).then(res => console.log(res))
        }
      });
    },
    register() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          api.register(values).then(() => this.$router.push({ name: "Login" }))
            .catch(err => this.form.$message.error(err))//form.$message.err
        }
      });
    },
  },
};
</script>
<style>
.register {
  padding-top: 80px;
}
</style>