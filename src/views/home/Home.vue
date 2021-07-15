<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:left>
        <div class="home-img"><img :src="leftUrl"></div>
      </template>
      <template v-slot:center>
        <div class="home-word">故宫新品</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      leftUrl: require("../../assets/img/home/nav bar_icon_more_nor.png"),
    }
  }
}
</script>

<style scoped>
  .home-word{
    color: #FAFAFA;
    font-size: 20pt;
  }
  .home-img{
    margin-top: 5px;
  }
  .home-img img{
    width: 20px;
    height: 20px;
  }
</style>