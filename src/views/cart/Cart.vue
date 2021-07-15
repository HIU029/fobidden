<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center><div class="cart-word">购物车</div></template>
      <template v-slot:right><div class="cart-edit">编辑</div></template>
    </nav-bar>
    <cart-list>
      <template v-slot:pic><img :src="picUrl" alt="" class="pic_1"></template>
      <template v-slot:info>
        <p class="word_1">故宫口红•枫叶红</p>
        <select class="select-css">
          <option value="red1">枫叶红，哑光</option>
          <option value="red2">枫叶红，珠光</option>
          <option value="red3">番茄红，哑光</option>
          <option value="red4">番茄红，珠光</option>
        </select>
        <div class="things-info"></div>
        <div class="price-acount">
          <div class="price"><span>￥199</span></div>
          <div class="acount">
            <button>-</button>
            <span class="number">1</span>
            <button class="add">+</button>
          </div>
        </div>
      </template>
    </cart-list>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from '../../components/content/cartlist/CartList.vue'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList
  },
  data() {
    return {
      picUrl: require('../../assets/img/cart/cart_1@2x.png'),
    }
  }
}
</script>

<style scoped>
  .cart-word{
    color: #FAFAFA;
    font-size: 20pt;
  }
  .cart-edit{
    font-size: 12px;
    font-weight: 400;
    color: #FFFCFC;
    opacity: 1;
  }
  .pic_1{
    width: 114px;
    height: 114px;
  }
  .word_1{
    margin: 0;
    padding: 0;
    height: 19px;
    font-size: 14px;
    color: #333333;
    font-weight: 400;
  }
  .select-css{
    padding: 4px 0 5px 8px;
    width: 105px;
    height: 25px;
    border: none;
    background: #FBFBFB;
    font-size:16px;
    color: #999999;
    font-size: 12px;
    margin-top: 8px;
  }
  .things-info{
    width: 12px;
    height: 12px;
    background: #AD513A;
    border-radius: 50%;
    margin-top: 12px;
  }
  .price-acount{
    display: flex;
    margin-top: 13px;
  }
  .price{
    font-size: 18px;
    font-weight: 400;
    color: #C30D23;
    margin-left: -4px;
  }
  .acount{
    margin-left: 61px;
  }
  button{
    width: 18px;
    height: 18px;
    border: none;
    background-color: #F7F7F7;
    font-size: 11px;
  }
  .add{
    margin-left: 4px;
  }
  .number{
    display: inline-block;
    padding: 0 6px 2px 6px;
    font-size: 12px;
    background-color: #F7F7F7;
    margin-left: 4px;
  }
</style>