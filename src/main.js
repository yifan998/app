import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/ant-design-vue.js'
import './assets/css/reset.css'
import VCharts from 'v-charts'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
