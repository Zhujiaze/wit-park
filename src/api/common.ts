import request from '@/utils/request'

/***
 * 公共路由信息
 */
export const MenuApi = () => {
  return request('/park/user/router', 'GET')
}
/**
 * 公共信息
 */
export const userInfo = () => {
  return request('/park/user/profile', 'GET')
}
