<!--App导航-->
<template>
  <div class="icon_lists">
    <ul>
      <li>
        <a href="#clock-in">
          <svg class="icon color01" aria-hidden="true">
            <use xlink:href="#icon-daqia"></use>
          </svg>
          <div class="name">打卡</div>
        </a>
      </li>
      <li>
        <a href="#ranking">
          <svg class="icon color02" aria-hidden="true">
            <use xlink:href="#icon-tongji1"></use>
          </svg>
          <div class="name">排名</div>
        </a>
      </li>
      <li>
        <a href="#clock-in-today">
          <svg class="icon color03" aria-hidden="true">
            <use xlink:href="#icon-tongji"></use>
          </svg>
          <div class="name">今日打卡</div>
        </a>
      </li>
      <li>
        <a href="#stat">
          <svg class="icon color04" aria-hidden="true">
            <use xlink:href="#icon-iconfonttongji"></use>
          </svg>
          <div class="name">统计</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style>
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

  .icon_lists {
    float: left;
    height: 120px;
    margin-top: 0;
    width: 100%;
    background-color: #FFFFFF
  }

  .icon_lists li {
    float: left;
    width: 25%;
    height: 70px;
    text-align: center;
    list-style: none !important;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
    margin-top: 15px;
  }

  .icon_lists li:last-child {
    border: none;
  }

  .icon_lists .icon {
    font-size: 42px;
    line-height: 100px;
    margin: 0px 0 10px 0;
    color: #333;
  }

  .icon_lists .color01 {
    color: #85b6de
  }

  .icon_lists .color02 {
    color: #82c383
  }

  .icon_lists .color03 {
    color: #f88887
  }

  .icon_lists .color04 {
    color: #ef933a
  }
</style>
