import request from '@/utils/request'
import type { LoginDataType } from './types/LoginType'

/**
 * 登录
 * @param data
 */

export const Login = (loginpras: LoginDataType) => {
  return request('/park/login', 'POST', loginpras)
}

// export const oo = () => {
//   return request('/parking/statistics/charge/typeProportion', 'GET')
// }
