import request from '~/utils/request'

const baseUrl = 'http://localhost:9170'

export default {
  createOrder(courseId) {
    return request({
      baseURL: baseUrl,
      url: `/api/trade/order/auth/save/${courseId}`,
      method: 'post'
    })
  },
  getById(orderId) {
    return request({
      baseURL: baseUrl,
      url: `/api/trade/order/auth/get/${orderId}`,
      method: 'get'
    })
  },
  isBuy(courseId) {
    return request({
      baseURL: baseUrl,
      url: `/api/trade/order/auth/is-buy/${courseId}`,
      method: 'get'
    })
  },
  getList() {
    return request({
      baseURL: baseUrl,
      url: '/api/trade/order/auth/list',
      method: 'get'
    })
  },

  removeById(orderId) {
    return request({
      baseURL: baseUrl,
      url: `/api/trade/order/auth/remove/${orderId}`,
      method: 'delete'
    })
  }
}
