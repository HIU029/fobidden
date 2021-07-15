<template>
  <div id="main">
    <tab-bar>
      <tab-bar-item path='/home' activeColor="#C30D23">
        <template v-slot:item-icon>
          <div class="img-css"><img :src="srcImg_1" alt=""></div>
        </template>
        <template v-slot:item-active-icon>
          <div class="img-css"><img :src="srcActive_1" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div class="test">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/catagory'>
        <template v-slot:item-icon>
          <div class="img-css"><img :src="srcImg_2" alt=""></div>
        </template>
        <template v-slot:item-active-icon>
          <div class="img-css"><img :src="srcActive_2" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/Appear'>
        <template v-slot:item-icon>
          <div class="img-css"><img :src="srcImg_3" alt=""></div>
        </template>
        <template v-slot:item-active-icon>
          <div class="img-css"><img :src="srcActive_3" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div>发现</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <template v-slot:item-icon>
          <div class="img-css"><img :src="srcImg_4" alt=""></div>
        </template>
        <template v-slot:item-active-icon>
          <div class="img-css"><img :src="srcActive_4" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <template v-slot:item-icon>
          <div class="img-css"><img :src="srcImg_5" alt=""></div>
        </template>
        <template v-slot:item-active-icon>
          <div class="img-css"><img :src="srcActive_5" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div>个人中心</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      srcImg_1: require('../../assets/img/tabbar/tabbar_icon_home_nor@2x.png'),
      srcImg_2: require('../../assets/img/tabbar/tabbar_icon_classification_nor@2x.png'),
      srcImg_3: require('../../assets/img/tabbar/tabbar_icon_find_nor@2x.png'),
      srcImg_4: require('../../assets/img/tabbar/tabbar_icon_cart_nor@2x.png'),
      srcImg_5: require('../../assets/img/tabbar/tabbar_icon_personal center_nor@2x.png'),
      srcActive_1: require('../../assets/img/tabbar/tabbar_icon_home_pre@2x.png'),
      srcActive_2: require('../../assets/img/tabbar/tabbar_icon_classify_pre@2x.png'),
      srcActive_3: require('../../assets/img/tabbar/tabbar_icon_find_pre@2x.png'),
      srcActive_4: require('../../assets/img/tabbar/tabbar_icon_cart_pre@2x.png'),
      srcActive_5: require('../../assets/img/tabbar/tabbar_icon_personal center_pre@2x.png'),
    }
  }
}
</script>

<style>
  .img-css img{
    width: 24px;
    height: 24px;
    margin-top: 8px;
    vertical-align: middle;
  }
</style>