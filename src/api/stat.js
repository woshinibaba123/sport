import http from '../api/http'

export default {
  /**
   * 按月获取报表
   * @param fun
   */
  getMonth: (fun) => {
    http.get('/stat/month', {}, data => {
      fun(data);
    })
  },
  /**
   * 按周获取报表
   * @param fun
   */
  getWeek: (fun) => {
    http.get('/stat/week', {}, data => {
      fun(data);
    })
  }
}
