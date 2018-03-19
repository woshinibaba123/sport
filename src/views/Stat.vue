<!--统计-->
<template>
  <div>
    <z4-header></z4-header>
    <div style="clear:both; margin-top: 20px;padding-top: 20px; text-align: center">
      <yd-button type="primary" @click.native="setType(1)">公里数</yd-button>
      <yd-button type="danger" @click.native="setType(2)">打卡次数</yd-button>
      <yd-button type="warning" @click.native="setType(3)">平均配速</yd-button>
    </div>
    <div id="container" style="height: 300px"></div>
    <yd-button size="large" type="primary" @click.native="week()">周</yd-button>
    <yd-button size="large" type="danger" @click.native="month()">月</yd-button>
  </div>
</template>
<script>
  import * as echarts from 'echarts';
  import stat from '../api/stat'
  import Z4Header from '../components/Z4Header'

  export default {
    data() {
      return {
        type: 1,
        dateType: 1,
        result: {},
        xAxisData: [],
        seriesData: [],
        danwei: 'km'
      }
    },
    components: {
      Z4Header
    },
    methods: {
      setType(val) {
        this.type = val;
        if (this.type == 1) {
          this.danwei = 'km';
        } else if (this.type == 2) {
          this.danwei = '次';
        } else if (this.type == 3) {
          this.danwei = 's/km';
        }
        this.get();
      },
      week() {
        this.dateType = 1;
        this.get();
      },
      month() {
        this.dateType = 2;
        this.get();
      },
      /**
       * 获取数据
       */
      get() {
        if (this.dateType == 1) {
          stat.getWeek(data => {
            if (data.status == true) {
              this.result = data.result;
              console.log(this.result);
              this.xAxisData = this.result.date;
              if (this.type == 1) {
                //公里数
                this.seriesData = this.result.km;
              } else if (this.type == 2) {
                //打卡次数
                this.seriesData = this.result.cnt;
              } else if (this.type == 3) {
                //平均配速
                this.seriesData = this.result.pace;
              }
              this.createChart();
            }
          })
        } else {
          stat.getMonth(data => {
            if (data.status == true) {
              this.result = data.result;
              console.log(this.result);
              this.xAxisData = this.result.date;
              if (this.type == 1) {
                //公里数
                this.seriesData = this.result.km;
              } else if (this.type == 2) {
                //打卡次数
                this.seriesData = this.result.cnt;
              } else if (this.type == 3) {
                //平均配速
                this.seriesData = this.result.pace;
              }
              this.createChart();
            }
          })
        }
      },
      /**
       * 创建报表
       */
      createChart() {
        let dom = document.getElementById("container");
        let myChart = echarts.init(dom);
        let option = {
          xAxis: {
            type: 'category',
            data: this.xAxisData
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} ' + this.danwei
            }
          },
          series: [{
            data: this.seriesData,
            type: 'line'
          }]
        };
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      }
    },
    mounted() {
      this.get();
    }
  }
</script>
<style scoped>

</style>
