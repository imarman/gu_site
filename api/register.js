import request from '~/utils/request'
export default {

  // 获取验证码的接口
  sendMessage(mobile) {
    return request({
      baseURL: 'http://localhost:9150',
      url: `/api/sms/send/${mobile}`,
      method: 'get'
    })
  },

  register(member) {
    return request({
      baseURL: 'http://localhost:9160',
      url: '/api/ucenter/member/register',
      method: 'post',
      data: member
    })
  }
}
