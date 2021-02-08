import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/layout/Home.vue'
import store from '../store/index'
import getMenuRoute from "../utils/permission";
Vue.use(VueRouter)
const ayncRoutes = [
  {
    path: '/product',
    name: 'Product',
    redirect:"/product/list",
    meta: { title: '商品',hidden:false,icon:"appstore"},
    component: Home,
    children: [
      {
        path: 'list',
        name: 'ProductList',
        meta: { title: '商品列表',hidden:false,icon:"appstore" },
        component: () => import('../views/pages/productList.vue'),
      },
      {
        path: 'add',
        name: 'ProductAdd',
        meta: { title: '新增商品',hidden:false,icon:"appstore" },
        component: () => import('../views/pages/productAdd.vue'),
      },
      {
        path: 'edit/:id',
        name: 'ProductEdit',
        meta: { title: '编辑商品',hidden:true,icon:"appstore" },
        component: () => import('../views/pages/productAdd.vue'),
      },
      {
        path: 'category',
        name: 'Category',
        meta: { title: '类目管理',hidden:false,icon:"appstore" },
        component: () => import('../views/pages/category.vue'),
      },
    ]
  }
];
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/index',
    meta: { title: '首页',hidden:false,icon:"appstore" },
    children: [
      { path: 'index', name: 'Index', meta: { title: '统计',hidden:false,icon:"line-chart" }, component: () => import('../views/pages/index.vue') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录',hidden:true },
    component: () => import('../views/pages/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { title: '注册',hidden:true },
    component: () => import('../views/pages/register.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    meta: { title: '找回',hidden:true },
    component: () => import('../views/pages/forget.vue')
  }
]

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
    // console.log(location, onResolve, onReject)
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

let isAddRoute = false;
// 如果去的页面的不是登录页面  判断是否是登录状态 使用store中的值是否为空
router.beforeEach((to, from, next) => {
  if (to.path !== '/login'&&to.path!=='/register'&&to.path!=='/forget') {
    if (store.state.userInfo.appkey && store.state.userInfo.username && store.state.userInfo.role) {
      if (!isAddRoute) {
        const menuRoutes = getMenuRoute(store.state.userInfo.role, ayncRoutes);
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();
        });
        isAddRoute = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;