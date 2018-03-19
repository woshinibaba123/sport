<!--注册页-->
<template>
  <div>
    <!--头部-->
    <z4-header></z4-header>
    <!--form 表单-->
    <!--form表单-->
    <div style="clear: both">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">手机号：</span>
          <yd-input slot="right" required v-model="form.phone" max="11" placeholder="请输入手机号"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">姓名：</span>
          <yd-input slot="right" required v-model="form.name" max="8" placeholder="请输入姓名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">昵称：</span>
          <yd-input slot="right" required v-model="form.nickname" max="16" placeholder="请输入昵称"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">密码：</span>
          <yd-input slot="right" required type="password" v-model="form.password" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">确认密码：</span>
          <yd-input slot="right" required type="password" v-model="repassword" placeholder="请输入确认密码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <div class="but">
        <yd-button size="large" type="primary" @click.native="register">注册</yd-button>
        <yd-button size="large" type="warning" @click.native="login">登录</yd-button>
      </div>
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
          name: '',
          nickname: '',
          password: ''
        },
        repassword: ''
      }
    },
    methods: {
      /**
       * 跳转登录
       */
      login() {
        this.$router.push({path: 'login'});
      },
      /**
       * 注册
       */
      register() {
        user.register(this.form);
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
