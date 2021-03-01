<template>
  <a-form :form="form" class="login-form" @submit="handleSubmit">
    <a-form-item>
      <a-input v-decorator="[
          'email',
          { rules: [{ required: true, message: '邮箱格式不正确',pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ }] },
        ]" placeholder="邮箱">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: '密码格式3-8位数字加英文字母',pattern:/^[a-zA-Z0-9]{3,8}$/g}] },
        ]" type="password" placeholder="密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="login" class="login-form-button">
        登录
      </a-button>
      <a-button type="primary" html-type="submit" @click="forget" class="login-form-button">
        找回密码
      </a-button>
      <a-button type="primary" html-type="submit" @click="register" class="login-form-button">
        注册
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import api from "@/api/user.js";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    },
    login() {
      this.form.validateFields((err, values) => {
        if (!err) {
          api.login(values).then(res => {
            this.$store.dispatch('setUserInfo', res)
            this.$router.push({
              name: 'Home'
            })
          }).catch(err=>{
           this.$message.error(err)
          })
        }
      });
    },
    forget() {
      this.$router.push({
        name: 'Forget'
      })
    },
    register() {
      this.$router.push({
        name: 'Register'
      })
    },
  },
};
</script>
<style lang="less">
.login-form {
  width: 300px;
  margin: 0 auto;
  padding-top: 120px;
  .login-form-button {
    width: 100%;
  }
}
</style>