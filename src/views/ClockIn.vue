<!--打卡页面-->
<template>
  <div>
    <!--头部-->
    <z4-header></z4-header>
    <!--打卡-->
    <div style="clear: both;">
      <yd-cell-group>
        <yd-cell-item arrow>
          <span slot="left">时间：</span>
          <yd-datetime type="datetime" v-model="form.clock_in_at" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">公里数：</span>
          <yd-input slot="right" required max="3" v-model="form.km" placeholder="请输入公里数（km）"></yd-input>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">用时：</span>
          <yd-datetime type="time" v-model="form.time" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">上传图片：</span>
          <span slot="left">
            <div class="upload">
              <file-upload ref="upload" @input-file="inputFile" :post-action="postAction">
                <img :src="src" alt="">
              </file-upload>
            </div>
          </span>
        </yd-cell-item>
      </yd-cell-group>
      <div class="but">
        <yd-button size="large" type="warning" @click.native="add">提交打卡</yd-button>
      </div>
    </div>
    <!--打卡历史-->
    <clock-in-list></clock-in-list>
  </div>
</template>
<script>
  import Z4Header from '../components/Z4Header'
  import FileUpload from 'vue-upload-component'
  import config from '../config/index'
  import clock_in from '../api/clock_in'
  import ClockInList from '../components/ClockInList'

  export default {
    data() {
      return {
        form: {
          clock_in_at: '',
          km: '',
          time: '00:00',
          img: ''
        },
        postAction: config.UPLOAD_URL,
        src: '/static/images/ifle.jpg',
      }
    },
    methods: {
      /**
       * 打卡提交
       */
      add() {
        clock_in.add(this.form);
      },
      inputFile(newFile, oldFile) {
        //上传文件
        this.$refs.upload.active = true;

        //验证上传完成
        if (newFile && oldFile && !newFile.active && oldFile.active) {
          // 获得结果
          let data = newFile.response;

          //判断上传是否成功
          if (data.status == "success") {
            //更新图片地址
            this.src = config.SERVICE_STATIC_URI + data.result.path;
            this.form.img = data.result.path;
          }
        }
      }
    },
    components: {
      Z4Header, FileUpload, ClockInList
    },
    mounted() {
      let date = new Date();

      let year = date.getFullYear();
      let month = (date.getMonth() + 1);
      if (month < 10) {
        month = '0' + month;
      }
      let day = date.getDate();
      if (day < 10) {
        day = '0' + day;
      }
      let h = date.getHours();
      if (h < 10) {
        h = '0' + h;
      }
      let m = date.getMinutes();
      if (m < 10) {
        m = '0' + m;
      }

      let mydate = year + "-" + month + "-" + day + " ";
      mydate += h + ":" + m;

      this.form.clock_in_at = mydate;
    }
  }
</script>

<style scoped>
  .but {
    padding: 0px 30px 0px 30px;
  }

  .upload {
    padding: 5px 5px 5px 5px;
  }

  .upload img {
    width: 100px;
    height: auto;
  }
</style>
