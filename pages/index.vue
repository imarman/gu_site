<template>

  <div>
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(topBannerAd, index) in topBannerAdList"
          :key="index"
          :style="'background:'+topBannerAd.color"
          class="swiper-slide">
          <a :href="topBannerAd.linkUrl" target="_blank">
            <img :src="topBannerAd.imageUrl" :alt="topBannerAd.title">
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"/>
      <div slot="button-prev" class="swiper-button-prev swiper-button-white"/>
      <div slot="button-next" class="swiper-button-next swiper-button-white"/>
    </div>
    <!-- 幻灯片 结束 -->

    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul id="bna" class="of">
                <li v-for="(course, index) in courseList" :key="index">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        :alt="course.title"
                        class="img-responsive"
                      >
                      <div class="cc-mask">
                        <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a :title="course.title" href="#" class="course-title fsize18 c-333">{{ course.title }}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span v-if="Number(course.price) === 0" class="fr jgTag bg-green">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span v-else class="fr jgTag ">
                        <i class="c-orange fsize12 f-fA"> ￥{{ course.price }}</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">{{ course.viewCount }}人学习</i>
                        |
                        <i class="c-999 f-fA">{{ course.buyCount }}评论</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear"/>
            </article>
            <section class="tac pt20">
              <a href="course" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="(teacher, index) in teacherList" :key="index">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name">
                        <img :alt="teacher.name" :src="teacher.avatar" width="142">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name" class="fsize18 c-666">{{ teacher.name }}</a>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"/>
            </article>
            <section class="tac pt20">
              <a href="teacher" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>

<script>
import indexApi from '~/api/index'

export default {

  async asyncData(page) {
    // 首页 banner 数据的获取
    const topBannerAdListResp = await indexApi.getTopBannerAdList()
    const topBannerAdList = topBannerAdListResp.data.items

    // 获取热门课程和讲师数据
    const indexDataResp = await indexApi.getIndexData()
    const courseList = indexDataResp.data.courseList
    const teacherList = indexDataResp.data.teacherList

    return {
      topBannerAdList,
      teacherList,
      courseList
    }
  },

  // 幻灯片导航的定义
  data() {
    return {
      swiperOption: {
        // 配置分页
        pagination: {
          el: '.swiper-pagination'// 分页的dom节点
        },
        // 配置导航
        navigation: {
          nextEl: '.swiper-button-next', // 下一页dom节点
          prevEl: '.swiper-button-prev'// 前一页dom节点
        }
      }
    }
  }
}
</script>
