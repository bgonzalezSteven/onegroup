
const routes = [
  {
    path: '/menu',
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // Listado de productos del Comercio
      { path: '/product', component: () => import('pages/Store/List.vue'), meta: { permissions: 'producto.list' } },
      { path: '/product/agg_product', component: () => import('pages/Store/Form.vue'), meta: { permissions: 'producto.product' } },
      { path: '/product/edit_product/:id', component: () => import('pages/Store/Form.vue'), meta: { permissions: 'producto.product' } },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Login.vue')
  },
  {
    path: '/register',
    component: () => import('layouts/Register/register.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
export default routes
