<template>
  <div id="category">
    <category-bar></category-bar>
    <category-list :categories="categories" @clickitem="clickItem"></category-list>
    <div class="banner">
      <img :src="imgSrc" alt="">
      <category-pic-list></category-pic-list>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import CategoryBar from '../../components/content/category/CategoryBar.vue'
import CategoryList from '../../components/content/category/CategoryList.vue'
import CategoryPicList from '../../components/content/category/CategoryPicList.vue'

export default {
  name: 'Catagory',
  components: {
    CategoryBar,
    CategoryList,
    CategoryPicList
  },
  data() {
    return {
      path: ['/catagory/list_1','/catagory/list_2','/catagory/list_3','/catagory/list_4'],
      imgSrc: require('../../assets/img/category/classify_image_banner@2x.png'),
      categories: ['上新馆','出版馆','美妆馆','文房馆','香氛馆','首饰馆','铜器馆','陶瓷馆','丝绸馆','家居馆',]
    }
  },
  methods: {
    clickItem(index){
      console.log(index);
      switch(index){
        case 0:
          this.$router.replace(this.path[0]);
          break;
        case 1:
          this.$router.replace(this.path[1]);
          break;
        case 2:
          this.$router.replace(this.path[2]);
          break;
        case 3:
          this.$router.replace(this.path[3]);
          break;
        case 4:
          this.$router.replace(this.path[2]);
          break;
        case 5:
          this.$router.replace(this.path[3]);
          break;
        case 6:
          this.$router.replace(this.path[1]);
          break;
        case 7:
          this.$router.replace(this.path[3]);
          break;
        case 8:
          this.$router.replace(this.path[0]);
          break;
        case 9:
          this.$router.replace(this.path[2]);
          break;
        case 10:
          this.$router.replace(this.path[1]);
          break;
      }
    }
  }
}
</script>

<style scoped>
  @import '../../assets/css/category/base.css';
  .banner{
    float: left;
    margin: 12px 0 0 10px;
  }
  .banner img{
    width: 269px;
    height: 100px;
  }
</style>