<template>
    <div class="cart-list">
        <select-box></select-box>
        <div class="imgBox">
            <slot name="pic"></slot>
        </div>
        <div class="cart-info">
            <slot name="info"></slot>
        </div>
        <fixed-bar></fixed-bar>
    </div>
</template>

<script>
import FixedBar from './FixedBar.vue'
import SelectBox from './SelectBox.vue'

export default {
  name: 'CartList',
  components: {
      FixedBar,
      SelectBox
  }
}
</script>

<style scoped>
    .cart-list{
        width: 335px;
        height: 146px;
        background: #FFFFFF;
        margin: 8px 0 0 12px;
        padding-top: 1px;
        display: flex;
    }
    .imgBox{
        width: 114px;
        height: 114px;
        /* border: 1px solid #333; */
        margin: 16px 0 0 9px;
    }
    .cart-info{
        /* width: 100%; */
        margin: 16px 0 0 12px;
    }
</style>