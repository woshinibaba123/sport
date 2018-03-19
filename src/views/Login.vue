<template>
  <div>
    <!--头部-->
    <z4-header></z4-header>
    <!--form表单-->
    <div style="clear: both"></div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">手机号：</span>
        <yd-input slot="right" required v-model="form.phone" max="11" placeholder="请输入手机号"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input slot="right" type="password" v-model="form.password" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <div class="but">
      <yd-button size="large" type="primary" @click.native="login">登录</yd-button>
      <yd-button size="large" type="warning" @click.native="register">注册</yd-button>
    </div>
  </div>
</template>
<script>
  import Z4Header from '../components/Z4Header'
  import user from '../api/user'

  export default {
    data() {
      return {
        form: {
          phone: '',
          password: ''
        }
      }
    },
    methods: {
      /**
       * 注册跳转
       */
      register() {
        console.log('reginter');
        //路由跳转
        this.$router.push({path: 'register'});
      },
      /**
       * 登录
       */
      login() {
        user.login(this.form);
      }
    },
    components: {
      Z4Header
    }
  }
</script>
<style scoped>
  .but {
    padding: 0px 20px 0px 20px;
  }
</style>
