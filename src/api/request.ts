import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import useUserStore from '@/store/modules/user.ts'
// 数据返回的接口
// 定义请求响应参数，不含data
interface Result {
  status: number
  message: string
}

// 请求响应参数，包含data
interface ResultData<T> extends Result {
  data?: T
}

const URL = import.meta.env.VITE_APP_BASE_API

enum RequestEnums {
  TIMEOUT = 20000,
  OVERDUE = 600, // 登录失效
  FAIL = 999, // 请求失败
  SUCCESS = 200, // 请求成功
}
const config = {
  // 默认地址
  baseURL: URL as string,
  // 设置超时时间
  timeout: RequestEnums.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true,
}

class RequestHttp {
  // 定义成员变量并指定类型
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config)

    /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if ((config as any).needLoading) {
          // this.loading = ElLoading.service({
          //   lock: true,
          //   text: '正在请求数据...',
          //   background: 'rgb(0,0,0,0.5)'
          // })
        }
        const token = localStorage.getItem('token') // 保存token到localStorage中
        if (token && config.url !== '/api/uaa/oauth/token') {
          (config as any).headers.Authorization = `Bearer ${token}` // 携带请求头
        }
        return config
      },
      (error: AxiosError) => {
        // 请求报错
        Promise.reject(error)
      },
    )

    /**
     * 响应拦截器
     * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        let { data } = response
        data = JSON.parse(JSON.stringify(data))
        // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        if (!data.status) {
          if (data.message && data.message === 'success') {
            return data
          }
          else {
            if (data.message) {
              return Promise.reject(data)
            }
            else {
              return data
            }
          }
        }
        if (data.status && data.status !== 200) {
          ElMessage.error(data.message) // 此处也可以使用组件提示报错信息
          return Promise.reject(data)
        }
        return data
      },
      (error: AxiosError) => {
        const { response } = error
        if (response) {
          this.handleCode(response.status)
        }
        if (!window.navigator.onLine) {
          ElMessage.error('网络连接失败')
          // 可以跳转到错误页面，也可以不做操作
          // return router.replace({
          //   path: '/404'
          // });
        }
      },
    )
  }

  handleCode(code: number): void {
    const userStore = useUserStore()
    switch (code) {
      case 401:
        userStore.logout()
        ElMessage.error(`登录失败，请重新登录${code}`)
        router.push({ name: 'login' })
        break
      case 500:
        ElMessage.error(`请求失败${code}`)
        break
      default:
        ElMessage.error('请求失败')
        break
    }
  }

  // 常用方法封装
  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.get(url, { params })
  }

  post<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.post(url, params)
  }

  put<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.put(url, params)
  }

  delete<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.delete(url, { params })
  }

  axios<T>(params: object): Promise<ResultData<T>> {
    return this.service(params)
  }
}

// 导出一个实例对象
export default new RequestHttp(config)
