<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /*全局样式*/
  body {
    margin: 0px;
    padding: 0px;
    background: #f5f5f5;
  }

  #app {
    font-family: "微软雅黑";
    font-size: 16px;
    color: #333;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  #app .clear {
    clear: both;
  }

  #app .center {
    text-align: center
  }

  #app a {
    color: #333;
    text-decoration: none;
  }

  #app a:hover {
    color: #0069ad;
    text-decoration: none;
  }

  #app .fl {
    float: left;
  }

  #app .fr {
    float: right;
  }

  #app ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  #app ul li {
    list-style: none;
  }

  #app img {
    border: 0px;
    max-width: 100%;
  }

  .c4-colbg {
    margin-top: 15px;
    background: #fff;
  }
  /*图标链接*/
  .icon {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1em;
    height: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
       normalize.css 中也包含这行 */
    overflow: hidden;
  }
</style>
