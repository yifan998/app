<template>
  <div class="menu-list" v-if="render">
    <a-menu :default-selected-keys="selectKey" :default-open-keys="openKeys" mode="inline" theme="dark" :inline-collapsed="$store.state.collapsed">
      <template v-for="route in $store.state.menuRoutes">
        <a-sub-menu v-if="!route.meta.hidden" :key="route.name">
          <span slot="title">
            <a-icon :type="route.meta.icon" />
            <span>{{ route.meta.title }}</span>
          </span>
          <template v-for="child in route.children">
            <a-menu-item v-if="!child.meta.hidden" :key="child.name">
              <router-link :to="{ name: child.name }">
                <a-icon :type="child.meta.icon" />
                {{ child.meta.title }}
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      render: true,
      openKeys: [],
      selectKey: []
    }
  },
  // computed: {
  //   defaultSelectKey: {
  //     get() {
  //       return 
  //     },
  //   },
  //   defaultOpenKey: {
  //     get() {
  //       return this.$router.currentRoute.matched[0].name;
  //     },
  //   },
  // },
  watch: {
    $route: {
      handler(route) {
        this.render = false
        console.log(route)
        this.openKeys = [route.matched[0].name];
        this.selectKey = [route.matched[1]
          ? route.matched[1].name
          : '']
        this.$nextTick(() => {
          this.render = true
        })

      },
      deep: true,

    }
  }
};
</script>