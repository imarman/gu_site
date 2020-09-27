<template>
  <div>
    <!-- 阿里云视频播放器样式 -->
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css" >
    <!-- 启用私有加密的防调式：生产环境使用 -->
    <script src="https://g.alicdn.com/de/prismplayer/2.8.0/hls/aliplayer-vod-anti-min.js" />
    <!-- 阿里云视频播放器脚本 -->
    <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js" />

    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player"/>
  </div>
</template>
<script>
import courseApi from '~/api/course'
export default {
  async asyncData(page) {
    // 获取视频 id
    const vid = page.route.params.vid
    // console.log(vid)
    // 根据视频 id 获取视频播放凭证
    const resp = await courseApi.getPlayAuth(vid)
    return {
      vid: vid,
      playAuth: resp.data.playAuth
    }
  },
  /**
   * 页面渲染完成时：此时js脚本已加载，Aliplayer 已定义，可以使用
   */
  mounted() {
    // 忽略 no-undef 检测
    /* eslint-disable no-undef */
    /* const player = */
    new Aliplayer({
      id: 'J_prismPlayer',
      width: '100%',
      vid: this.vid,
      playauth: this.playAuth,
      encryptType: '1' // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
    }, function(player) {
      console.log('播放器创建成功')
    })
  }
}

</script>
