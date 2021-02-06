
// 角色权限
const roleToRoute = {
  'coustomer': ['Product', 'ProductList', 'ProductAdd','ProductEdit'],
  'admin': ['Product', 'ProductList', 'ProductAdd', 'Category','ProductEdit']
};
export default function getMenuRoute(role, routes) {
  const allowRouteName = roleToRoute[role];
  const resultRoutes = routes.filter((r) => {
    if (allowRouteName.indexOf(r.name) !== -1) {
      const children = r.children;//子路由
      r.children = children.filter((c) => allowRouteName.indexOf(c.name) !== -1)
      return true
    }
  })
  return resultRoutes;
}