import request from '~/utils/request'
export default {
  getTopBannerAdList() {
    return request({
      baseURL: 'http://localhost:9140',
      // 因为这个是专门为了轮播图设计的，所以可以硬编码 带上参数 1
      url: '/api/cms/ad/list/1',
      method: 'get'
    })
  },
  getIndexData() {
    return request({
      url: '/api/edu/index',
      method: 'get'
    })
  }
}
