import request from '~/utils/request'

export default {
  createOrder(courseId) {
    return request({
      baseURL: 'http://localhost:9170',
      url: `/api/trade/order/auth/save/${courseId}`,
      method: 'post'
    })
  },
  getById(orderId) {
    return request({
      baseURL: 'http://localhost:9170',
      url: `/api/trade/order/auth/get/${orderId}`,
      method: 'get'
    })
  }
}
