<template>
  <div class="register">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="邮箱">
        <a-input v-decorator="['email',
        { rules: [{ required: true, message: '邮箱格式不正确',pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ }] },
          ]" />
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
        <a-button type="primary" html-type="submit" @click="findBack"> 提交 </a-button>
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
    findBack() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          api.findBack(values).then(() => this.$router.push({ name: "Login" }))
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