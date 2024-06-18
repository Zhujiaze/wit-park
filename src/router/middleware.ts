import type { RouteRecordRaw } from 'vue-router'
// 菜单仓库
import { useAuthStore } from '@/stores/auth'

// 获取动态路由
const moduleRoutes = import.meta.glob('./modules/*.ts', { eager: true })
type moduleRouteType = {
  default: RouteRecordRaw
}
// 合并路由
const staticRoutes: RouteRecordRaw[] = []
Object.keys(moduleRoutes).forEach((key: string) => {
  ;(moduleRoutes[key] as moduleRouteType).default &&
    staticRoutes.push((moduleRoutes[key] as moduleRouteType).default)
})

// console.log('staticRoutes', staticRoutes);
export const useMiddleware = (router: any) => {
  let fullPath = true
  // 路由鉴权
  router.beforeEach(async (to: any, from: any, next: any) => {
    // 菜单仓库
    const menuStore = useAuthStore()
    const token = menuStore.token
    if (token) {
      if (to.path === '/login') {
        next(from.fullPath)
      } else {
        if (menuStore.MenuList) {
          next()
        } else {
          await menuStore.InitMenu()
          await menuStore.getuserInfo()
          if (fullPath) {
            staticRoutes.forEach((route: RouteRecordRaw) => {
              router.addRoute(route)
            })
          }
          fullPath = false
          next(to.path)
        }
      }
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next('/login')
      }
    }
  })
}

