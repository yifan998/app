import Vue from 'vue'
import Vuex from 'vuex'
import { setUserCookie, getUserCookie, removeUserCookie } from "@/utils/cookie.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,//切换菜单栏是否闭合 false不闭合
    userInfo: getUserCookie(),// 用户信息
    menuRoutes:[],
  },
  mutations: {
    toggleCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) { //获取用户信息
      state.userInfo = userInfo
    },
    logout(state) {//退出登录 信息清空
      state.userInfo = {
        username: "",
        appkey: "",
        role: "",
        email: ""
      }
    },
    changeMenuRoutes(state,routes){
      state.menuRoutes = routes
    }
  },
  actions: {
    toggleCollapsed({ commit }) {
      commit('toggleCollapsed')
    },
    setUserInfo({ commit }, userInfo) { 
      commit('setUserInfo', userInfo);
      setUserCookie(userInfo)//存储在cookie中
    },
    logout({ commit }) {
      commit('logout')
      removeUserCookie()
    },
    changeMenuRoutes({commit},routes){
      commit('changeMenuRoutes',routes)
    }
  },
  modules: {
  }
})
