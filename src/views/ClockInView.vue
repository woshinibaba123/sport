<!--打卡详情-->
<template>
  <div>
    <!--头部-->
    <z4-header></z4-header>
    <!--详情-->
    <!-- p3-go1 -->
    <div class="c4-p3-form c4-colbg">
      <div class="c4-p3-form-box1">
        <img src="/static/images/icon02.jpg">
        <span>{{clock.year}}<br>{{clock.date}}</span>
      </div>
      <div class="c4-p3-form-box2">
        <ul>
          <li><b>{{clock.km}}Km</b> <span>公里数</span></li>
          <li><b>{{clock.time}}</b> <span>总用时</span></li>
          <li><b>{{clock.pace}}</b> <span>平均配速</span></li>
        </ul>
      </div>
      <div class="c4-p3-form-box3"><a href="#" class="link-a link-l">上一个</a> <a href="#" class="link-a link-r">下一个</a>
        <div class="c4-p3-form-c"><img :src="clock.imgs[0]|img"></div>
      </div>
    </div>
    <!--历史列表-->
    <clock-in-list></clock-in-list>
  </div>
</template>
<script>
  import Z4Header from '../components/Z4Header';
  import ClockInList from '../components/ClockInList'
  import clock_in from '../api/clock_in'
  import config from '../config/index'

  export default {
    data() {
      return {
        clock: {
          imgs: [
            '',
          ]
        }
      }
    },
    components: {
      Z4Header, ClockInList
    },
    filters: {
      img(val) {
        if (val == '') {
          return '/static/images/default.jpg';
        }
        return config.SERVICE_STATIC_URI + val;
      }
    },
    mounted() {
      let id = this.$route.params.id;
      clock_in.get(id, data => {
        if (data.status == true) {
          this.clock = data.result;
        }
      });
    },
    watch: {
      '$route'() {
        this.$router.go(0);
      }
    }
  }
</script>
<style scoped>
  /*p3-go1*/
  .c4-p3-form {
    float: left;
    width: 100%;
  }

  .c4-p3-form-box1 {
    color: #841d20;
    font-size: 20px;
    font-weight: bold;
    width: 70%;
    margin: 15px auto;
    text-align: center;
  }

  .c4-p3-form-box1 img {
    display: inline-block;
    width: 25%;
    margin-right: 5%;
    margin-left: 5%;
    vertical-align: middle;
  }

  .c4-p3-form-box1 span {
    text-align: left;
    display: inline-block;
    width: 50%;
    font-size: 18px;
    vertical-align: middle
  }

  .c4-p3-form-box2 {
    width: 100%;
    float: left;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    margin: 20px 0 20px 0
  }

  .c4-p3-form-box2 li {
    width: 33.333%;
    float: left;
    text-align: center;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    padding: 10px 0;
    list-style: none
  }

  .c4-p3-form-box2 li b {
    width: 100%;
    color: #bd6d17;
    float: left;
    font-size: 22px;
    font-weight: 400
  }

  .c4-p3-form-box2 li span {
    width: 100%;
    color: #333;
    float: left;
    margin-top: 0px;
  }

  .c4-p3-form-box3 {
    position: relative;
    float: left;
    width: 100%;
    margin-bottom: 20px;
  }

  .c4-p3-form-box3 .link-a {
    width: 20px;
    font-size: 12px;
    background: #ec8517;
    color: #fff !important;
    position: absolute;
    text-align: center;
    padding: 20px 0;
  }

  .c4-p3-form-box3 .link-l {
    left: 0;
    top: 20px
  }

  .c4-p3-form-box3 .link-r {
    right: 0;
    top: 20px
  }

  .c4-p3-form-box3 .c4-p3-form-c {
    width: 80%;
    margin: 0 auto;
  }

  .c4-za-img {
    width: 48%;
    float: left;
    margin-right: 2%;
  }
</style>
