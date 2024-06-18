import type { Data, MenuDataType } from '@/api/types/CommonType'
import { defineStore } from 'pinia'
import { MenuApi, userInfo } from '@/api/common'
export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<string>('')
    const MenuList = ref<MenuDataType[] | null>(null)
    const info = ref<Data | null>(null)
    // 设置token
    const setToken = (value: string) => {
      token.value = value
    }
    // 获取菜单列表
    const InitMenu = async () => {
      const res = await MenuApi()
      MenuList.value = res.data
      return res.data
    }
    //获取用户数据列表
    const getuserInfo = async () => {
      const res = await userInfo()
      info.value = res.data
      return res
    }

    return { token, setToken, MenuList, InitMenu, getuserInfo, info }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['token', 'info']
    }
  }
)
