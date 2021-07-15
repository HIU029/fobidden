<template>
    <div class="category-pic-list fixClear">
        <ul class="pic-list">
            <li class="left_1">
                <img :src="picUrl" alt="">
                <p>口红</p>
            </li>
            <li class="left_1">
                <img :src="picUrl" alt="">
                <p>口红</p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'CatagoryPicList',
  props: {
      path: String,
  },
  data() {
      return {
          picUrl: require('../../../assets/img/category/classify_image@2x.png'),
      }
  }
}
</script>

<style scoped>
    ul li{
       list-style: none; 
    }
    ul,li,p{
        margin: 0;
        padding: 0;
    }
    .category-pic-list{
        margin: 21px 0 0 -7px;
    }
    .pic-list li{
        text-align: center;
    }
    .pic-list li img{
        width: 80px;
        height: 80px;
    }
    .left_1{
        float: left;
        margin-left: 49px;
        margin-top: 19px;
    }
</style>