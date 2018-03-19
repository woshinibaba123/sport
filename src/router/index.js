import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login'
import Register from '../views/Register'
import ClockIn from '../views/ClockIn'
import ClockInView from '../views/ClockInView'
import Ranking from '../views/Ranking'
import Stat from '../views/Stat'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/clock-in',
      name: 'ClockIn',
      component: ClockIn
    }, {
      path: '/clock-in-view/:id',
      name: 'ClockInView',
      component: ClockInView
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    }, {
      path: '/stat',
      name: 'Stat',
      component: Stat
    }
  ]
})

/**
 * 全局登录认证
 */
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  //不是登录页
  if (to.path != '/login') {
    //验证token是否存在
    if (token == null) {
      //不存在跳转登录页
      next({
        path: '/login'
      })
    }
  } else {
    //是登录页，验证token是否存在，token存在跳转至首页
    if (token != null) {
      next({path: '/'})
    }
  }
  next();
});

export default router;
