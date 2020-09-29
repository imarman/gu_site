import axios from 'axios'
import { Message } from 'element-ui'
import cookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9110',
  timeout: 12000 // 请求超时时间
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    // 当 cookie 中获取到了 token 信息时,则将 token 放在 header 中随请求发送给服务端接口
    if (cookie.get('guli_jwt_token')) {
      config.headers['token'] = cookie.get('guli_jwt_token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data

    if (res.code === 20000) {
      // 正确的结果
      return response.data
    } else if (res.code === 23004) {
      // 获取用户信息失败, 不希望弹出警告
      // 清除 cookie
      cookie.set('guli_jwt_token', '', { domain: 'localhost' })
      return response.data
    } else {
      Message({
        message: res.message || 'error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    }
  },
  error => {
    console.log('err：' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
