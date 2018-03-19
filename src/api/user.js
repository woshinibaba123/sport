import axios from 'axios'
import router from '../router/index'
import {Toast} from 'vue-ydui/dist/lib.rem/dialog';
import config from '../config/index'
import http from './http'

axios.defaults.baseURL = config.API_URL

const user = {
  /**
   * 登录
   */
  login: (params) => {
    http.post('/login', params, data => {
      if (data == null) {
        return;
      }
      if (data.status == true) {
        localStorage.setItem('token', data.data.token)
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'success',
          callback: () => {
            router.push({path: '/'});
          }
        });
      } else {
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'error'
        });
      }
    });
  },
  /**
   * 注册
   */
  register: (params) => {
    axios.post('/register', params).then(res => {
      let data = res.data;
      if (data.status == true) {
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'success',
          callback: () => {
            this.$router.push({path: 'login'});
          }
        });
      } else {
        Toast({
          mes: data.msg,
          timeout: 3000,
          icon: 'error'
        });
      }

      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  },
  /**
   * 获取总公里排行榜
   */
  getKmRanking: (params, fun) => {
    http.get('/user/km/ranking', params, data => {
      fun(data);
    })
  },
  /**
   * 获取打卡次数排行榜
   */
  getCountRanking: (params, fun) => {
    http.get('/user/count/ranking', params, data => {
      fun(data);
    })
  },
  /**
   * 获取平均配速排行榜
   */
  getPaceRanking: (params, fun) => {
    http.get('/user/pace/ranking', params, data => {
      fun(data);
    })
  }
}

export default user;
