<template>
  <div class="category-bar">
    <div class="absolute-css">
      <input type="text" value="故宫口红">
      <!-- <div class="img-src"><img :src="imgSrc" alt=""></div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'CatagoryBar',
  data() {
    return {
      imgSrc: require('../../../assets/img/category/classify_icon_search@2x.png'),
    }
  }
}
</script>

<style scoped>
  .category-bar{
    height: 44px;
    line-height: 44px;
    background-color: #C30D23;
    text-align: center;
  }
  /* .absolute-css{
    position: relative;
  } */
  input[type='text']{
    width: 262px;
    height: 32px;
    border: none;
    /* background: #fff; */
    /* opacity: 0.25; */
    background: rgba(255, 255, 255, 0.25) url('../../../assets/img/category/classify_icon_search@2x.png') no-repeat;
    background-size: 28px 28px;
    background-position: 11px 2px;
    border-radius: 6px;
    padding-left: 53px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
  }
  .img-src{
    position: absolute;
    left: 41px;
    top: 10px;
  }
  .img-src img{
    width: 28px;
    height: 28px;
  }
</style>