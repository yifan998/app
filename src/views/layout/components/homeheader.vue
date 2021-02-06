<template>
  <div class="header-nav">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>{{ currentRoute[0].meta.title }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ currentRoute[1].meta.title }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>欢迎:{{$store.state.userInfo.username}}</li>
      <li @click="logout">退出
        <a-icon type="down" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('toggleCollapsed')
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({
        name: "Login"
      })
    }
  },
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  watch: {
    $route() {
      this.currentRoute = this.$router.currentRoute.matched;
    },
  },
}
</script>