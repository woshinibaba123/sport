<!--轮播图-->
<template>
  <yd-slider autoplay="3000">
      <yd-slider-item v-for="item in list" :key="item.id">
        <a href="javascript:;">
          <img :src="item.src|src">
        </a>
      </yd-slider-item>
  </yd-slider>
</template>

<script type="text/babel">
  import home from '../api/home'

  export default {
    data() {
      return {
        list: []
      }
    },
    filters: {
      src(val) {
        return 'http://123.57.75.120:9002/uploads' + val;
      }
    },
    mounted() {
      home.getSlider(data => {
        this.list = data
      });
    }
  }
</script>
