<!--header-->
<template>
  <!--头部-->
  <div id="header">
    <div class="logo fl">
      <div class="logoimg"><a href="#"><img src="/static/images/logo.png"></a></div>
      <p>北大光华征4平安训练营</p>
    </div>
    <div class="ad-kb fr">
      <span @click="login">个人中心</span>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      login(){
        this.$router.push({path:'/login'})
      }

    }

  }
</script>
<style scoped>
  /*header*/
  #header {
    background: linear-gradient(#680d0c, #851d21);;
    height: 70px;
    float: left;
    width: 100%;
    line-height: 0px;
  }

  .logo {
    width: 50%;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    float: left;
    height: 70px;
  }

  .logoimg {
    float: left;
    width: 100%;
  }

  .logo img {
    width: 80px;
    height: 30px;
    float: left;
  }

  .logo p {
    font-size: 12px;
    float: left;
    margin-top: 10px;
    color: #fff;
  }

  .ad-kb {
    color: #fff;
    width: 20%;
    font-style: italic;
    margin-top: 35px;
    text-align: right;
    margin-right: 10px;
    font-weight: bold;
  }

  .ad-kb svg {
    font-size: 30px;
  }
</style>
