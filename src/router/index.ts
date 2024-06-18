import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { useMiddleware } from './middleware'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/workbench',
    name: 'Workbench',
    component: () => import('@/layouts/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  scrollBehavior() {
    return { top: 0 }
  }
})
useMiddleware(router)

export default router
