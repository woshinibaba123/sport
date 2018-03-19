<!--首页-->
<template>
  <div>
    <!--头部-->
    <z4-header></z4-header>
    <!--轮播-->
    <z4-slider></z4-slider>
    <!--App导航-->
    <z4-app></z4-app>
    <!--时间轴-->
    <z4-time-line></z4-time-line>
    <!--文章列表-->
    <z4-news></z4-news>
  </div>
</template>
<script>
  import Z4Header from '../components/Z4Header'
  import Z4Slider from '../components/Z4Slider'
  import Z4App from '../components/Z4App'
  import Z4TimeLine from '../components/Z4TimeLine'
  import Z4News from '../components/Z4News'

  export default {
    components: {
      Z4Header, Z4Slider, Z4App, Z4TimeLine,Z4News
    }
  }
</script>
