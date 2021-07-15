<template>
  <div class="category-list">
    <ul class="list">
        <li v-for='(i,index) in categories' class="category-list-item" :class="{active: index === currentIndex}" @click="clickActive(index)"><img v-if="index === currentIndex" :src="urlpic" alt="" class="click-active">{{i}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'CategoryList',
  data() {
      return {
        currentIndex: 0,
        urlpic: require('../../../assets/img/category/classify_pickers@2x.png'),
      }
  },
  props: {
      path: String,
      categories: {
          type: Array,
          default() {
              return [];
          }
      }
  },
  methods: {
    clickActive(index){
        this.currentIndex = index;
        this.$emit('clickitem',index);
    }
  }
}
</script>

<style scoped>
    ul li{
       list-style: none; 
    }
    ul,li{
        margin: 0;
        padding: 0;
    }
    .category-list{
        float: left;
    }
    .list{
        width: 82px;
        height: auto;
        padding: 20px 0;
        background: #F7F7F7;
    }
    .list li{
        width: 82px;
        height: 56px;
        /* background: #F7F7F7; */
        text-align: center;
        line-height: 56px;
        font-size: 14px;
        font-weight: bold;
        color: #333333;
        position: relative;
    }
    .click-active{
        position: absolute;
        left: 0;
        top: 18px;
        width: 6px;
        height: 22px;
    }
    .active{
        background-color: #FFFCFC;
        color: #C30D23 !important;
    }
</style>