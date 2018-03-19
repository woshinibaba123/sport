<!--排行榜-->
<template>
  <div>
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-list theme="1" slot="list">
        <!--头部-->
        <z4-header></z4-header>
        <!--列表-->
        <!-- p4-go1 -->
        <div class="c4-p4-tab c4-colbg">
          <ul class="c4-p4-tab-box">
            <li><a href="javascript:;" :class="type==1?'active':''" @click="setType(1)">月公里数</a></li>
            <li><a href="javascript:;" :class="type==2?'active':''" @click="setType(2)">月打卡次数</a></li>
            <li><a href="javascript:;" :class="type==3?'active':''" @click="setType(3)">平均配速</a></li>
          </ul>
        </div>
        <!-- p4-go2 -->
        <div class="c4-p4-tit c4-colbg"><img src="/static/images/xxx.jpg">
          <h3>排行榜</h3>
          <div class="fr">
            <input id="checkbox-1-1" class="regular-checkbox" type="checkbox" v-model="is_striker" @change="setStriker">
            <label for="checkbox-1-1"></label>
            <span>只显示冲锋队</span></div>
        </div>
        <!-- p4-go-标题 -->
        <div class="c4-p4-bt ">
          <ul>
            <li class="kd01">姓名</li>
            <li class="kd02">昵称</li>
            <li class="kd03" v-show="type==1">月公里数</li>
            <li class="kd03" v-show="type==2">月打卡次数</li>
            <li class="kd03" v-show="type==3">平均配速</li>
          </ul>
        </div>
        <!-- p4-go-list -->
        <div class="c4-p4-list ">
          <ul>

            <li v-for="(item, index) in list">
              <div class="c4-p4-list-01">
                <img src="/static/images/xtb.jpg" class="c4-p4-list-02-bt" v-show="item.is_striker==1">
                <i class="c4-p4-list01-font01" v-show="index==0">{{index+1}}</i>
                <i class="c4-p4-list01-font02" v-show="index==1">{{index+1}}</i>
                <i class="c4-p4-list01-font03" v-show="index==2">{{index+1}}</i>
                <i class="c4-p4-list01-font04" v-show="index>2">{{index+1}}</i>

                <img src="/static/images/534654654.jpg" class="c4-p4-list-01-img">
                <h3>{{item.name}}</h3>
                <span v-show="item.is_striker==1">冲锋队成员</span>
              </div>
              <div class="c4-p4-list-02">{{item.nickname}}</div>
              <div class="c4-p4-list-03" v-show="type==1">{{item.total_km}}Km</div>
              <div class="c4-p4-list-03" v-show="type==2">{{item.cnt}}次</div>
              <div class="c4-p4-list-03" v-show="type==3">{{item.avg_pace}}</div>
            </li>
          </ul>
        </div>
      </yd-list>
      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
    </yd-infinitescroll>
  </div>
</template>
<script>
  import Z4Header from '../components/Z4Header'
  import user from '../api/user'

  export default {
    data() {
      return {
        type: 1,
        list: [],
        page: 1,
        is_striker: 0
      };
    },
    components: {
      Z4Header
    },
    mounted() {
      this.get();
    },
    methods: {
      /**
       * 滚动加载
       */
      loadList() {
        this.page += 1;
        this.get();
      },
      /**
       * 设置type值
       * @param val
       */
      setType(val) {
        this.type = val;
        this.list = [];
        this.page = 1;
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.reInit');
        this.get();
      },
      /**
       * 设置冲锋队
       */
      setStriker() {
        this.list = [];
        this.page = 1;
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.reInit');
        this.get();
      },
      /**
       * 数据获取
       */
      get() {
        let p = {page: this.page, is_striker: this.is_striker == true ? 1 : 0};
        if (this.type == 1) {
          user.getKmRanking(p, data => {
            if (data.length == 0) {
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
            } else {
              for (let i = 0; i < data.length; i++) {
                this.list.push(data[i]);
              }
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
            }
          })
        } else if (this.type == 2) {
          if (data.length == 0) {
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          } else {
            for (let i = 0; i < data.length; i++) {
              this.list.push(data[i]);
            }
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
          }
        } else if (this.type == 3) {
          if (data.length == 0) {
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          } else {
            for (let i = 0; i < data.length; i++) {
              this.list.push(data[i]);
            }
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
          }
        }
      }
    }
  }
</script>
<style scoped>
  /*p4-go1*/
  .c4-p4-tab .c4-p4-tab-box {
    background: #912f2f;
    width: 100%;
    float: left;
  }

  .c4-p4-tab .c4-p4-tab-box li {
    float: left;
    width: 33.333%;
    text-align: center;
  }

  .c4-p4-tab .c4-p4-tab-box li a {
    color: #fff !important;
    padding: 5px 20px;
    display: inline-block
  }

  .c4-p4-tab .c4-p4-tab-box li .active {
    display: inline-block;
    padding: 5px 20px;
    color: #333;
    transform: skew(-10deg);
    background: #c56a20
  }

  /*p4-go2*/
  .c4-p4-tit {
    padding: 10px 20px;
    width: 100%;
    float: left;
    box-sizing: border-box;
  }

  .c4-p4-tit img {
    float: left;
    width: 50px;
    height: 55px;
  }

  .c4-p4-tit h3 {
    float: left;
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 400;
    margin-top: 15px;
    margin-left: 10px;
  }

  .c4-p4-tit span {
    vertical-align: middle
  }

  .c4-p4-tit .fr {
    margin-top: 15px;
  }

  /*p4-go2选择*/

  .regular-checkbox {
    display: none;
  }

  .regular-checkbox:checked + label::after {
    color: #99a1a7;
    content: "✔";
    font-size: 14px;
    left: 1px;
    position: absolute;
    top: -5px;
  }

  .regular-checkbox:checked + label {
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    color: #99a1a7;
  }

  .regular-checkbox + label {
    background-color: #fafafa;
    border: 1px solid #cacece;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 -15px 10px -12px rgba(0, 0, 0, 0.05) inset;
    display: inline-block;
    padding: 9px;
    position: relative;
    vertical-align: middle;
  }

  /*p4-go2标题*/
  .c4-p4-bt {
    background: #912f2f;
    width: 100%;
    float: left;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .c4-p4-bt li {
    float: left;
    width: 33.333%;
    text-align: center;
    padding: 5px 0;
    color: #fff;
  }

  .c4-p4-bt .kd01 {
    width: 50%;
  }

  .c4-p4-bt .kd02 {
    width: 25%;
  }

  .c4-p4-bt .kd03 {
    width: 25%;
  }

  /*p4-list*/
  .c4-p4-list {
    padding: 0 20px;
    width: 100%;
    float: left;
    box-sizing: border-box;
    background: #fff
  }

  .c4-p4-list li {
    float: left;
    width: 100%;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #ddd
  }

  .c4-p4-list-01, .c4-p4-list-02, .c4-p4-list-03 {
    float: left;
    width: 33.333%;
    text-align: center;
    position: relative;
  }

  .c4-p4-list-01 {
    width: 50%;
  }

  .c4-p4-list-02 {
    width: 25%;
  }

  .c4-p4-list-03 {
    width: 25%;
  }

  .c4-p4-list-01 i {
    float: left;
    font-size: 30px;
    font-style: normal;
  }

  .c4-p4-list-01 .c4-p4-list-01-img {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 25px 5px 0 5px
  }

  .c4-p4-list-01 .c4-p4-list-02-bt {
    position: absolute;
    left: -5px;
    top: 5px;
    width: 30px;
    height: 30px;
  }

  .c4-p4-list-01 h3 {
    float: left;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  .c4-p4-list-01 span {
    position: absolute;
    right: 30px;
    bottom: 10px;
    line-height: 0;
    background: #eca11e;
    padding: 10px 5px;
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
    display: inline-block;
  }

  .c4-p4-list-01 .c4-p4-list01-font01 {
    font-weight: bold;
    color: #bd3f38
  }

  .c4-p4-list-01 .c4-p4-list01-font02 {
    font-weight: bold;
    color: #ea6464
  }

  .c4-p4-list-01 .c4-p4-list01-font03 {
    font-weight: bold;
    color: #eb8619
  }

  .c4-p4-list-02 {
  }

  .c4-p4-list-03 {
  }
</style>
