import axios from 'axios'
import config from "../config";
import {Toast, Loading} from 'vue-ydui/dist/lib.rem/dialog';
import router from '../router/index'

axios.defaults.baseURL = config.API_URL

//请求前拦截
axios.interceptors.request.use(config => {
  Loading.open('正在加载...');
  let token = localStorage.getItem('token');
  if (token) {
    config.url += '?token=' + token;
  }
  return config;
}, error => {
  return Promise.reject(error);
})

//请求返回拦截
axios.interceptors.response.use(response => {
  Loading.close();
  if (typeof response.data.code !== 'undefined') {
    if (response.data.code == 401) {
      router.push({path: 'login'});
    }
  }
  return response;
}, error => {
  return Promise.reject(error);
})

const http = {
  /**
   * get请求
   */
  get: (url, params, fun) => {
    axios.get(url, {params: params}).then(res => {
      fun(res.data);
    }).catch(err => {
      fun(null);
      Toast({
        mes: '网络请求错误！',
        timeout: 2000,
        icon: 'error'
      });
      console.log(err)
    })
  },
  /**
   * post请求
   */
  post: (url, params, fun) => {
    axios.post(url, params).then(res => {
      fun(res.data);
    }).catch(err => {
      fun(null);
      Toast({
        mes: '网络请求错误！',
        timeout: 2000,
        icon: 'error'
      });
      console.log(err);
    });
  }
}

export default http
