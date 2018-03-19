import http from './http'

/**
 * home 接口
 */
const home = {
  /**
   * 获取幻灯
   */
  getSlider: (fun) => {
    http.get('/swiper', {}, data => {
      fun(data)
    })
  },
  /**
   * 获取时间轴
   */
  getTimeLine: (fun) => {
    http.get('/zipper', {}, data => {
      fun(data);
    })
  },
  /**
   * 获取新闻
   */
  getNews: (fun) => {
    http.get('/article', {}, data => {
      fun(data);
    })
  }
}

export default home
