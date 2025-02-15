import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
import { useAuthStore } from '@/stores/auth'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 50000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // 在发送请求之前做些什么
    const store = useAuthStore()
    const token = store.token
    if (token) {
    config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response: AxiosResponse) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error: AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

type ResponseDataType<T = any> = {
  code: number
  msg: string
  data: T
}

const request = <T = any>(
  url: string,
  method: string = 'GET',
  data?: any,
  options?: AxiosRequestConfig
) => {
  return service.request<T, ResponseDataType<T>>({
    url,
    method,
    [method === 'GET' ? 'params' : 'data']: data,
    ...options
  })
}

export default request
