<template>
  <div class="home">
    <slider-menu :key="key" />
    <div :class="{'home-header':true,'menu-unfold':$store.state.collapsed}">
    <home-header />
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
import homeHeader from "./components/homeheader";
import sliderMenu from "./components/slidermenu";
export default {
  data(){
    return {
      key:new Date().getTime()//绑定key值 实现菜单栏根据route信息切换
    }
  },
  watch:{
    $route(){
      this.key = new Date().getTime()
    }
  },
  components: {
    homeHeader,
    sliderMenu
  }
};
</script>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>
