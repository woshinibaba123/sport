import http from './http'
import {Toast} from 'vue-ydui/dist/lib.rem/dialog';
import router from "../router";

/**
 * 打卡api
 * @type {{}}
 */
const clockIn = {
  /**
   * 获取历史列表
   */
  getList: (fun) => {
    http.get('/clock-in/month', {}, data => {
      fun(data);
    });
  },
  /**
   * 获取详情
   */
  get: (id, fun) => {
    http.get('/clock-in/' + id, {}, data => {
      fun(data);
    })
  },
  /**
   * 添加打卡
   */
  add: (form) => {
    http.post('/clock-in/add', form, data => {
      if (data.status == true) {
        let id = data.result.id
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'success',
          callback: () => {
            router.push('/clock-in-view/' + id);
          }
        });
      } else {
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'error'
        });
      }
    })
  }

}

export default clockIn
