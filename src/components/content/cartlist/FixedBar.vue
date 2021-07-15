<template>
    <div class="fixed-bar">
        <div class="select"><select-squre></select-squre></div>
        <div class="all-select">全选</div>
        <div class="total">合计：</div>
        <div class="pay">
            <button>结算</button>
        </div>
    </div>
</template>

<script>
import SelectSqure from './SelectSqure.vue'

export default {
  name: 'FixedBar',
  components: {
      SelectSqure
  }
}
</script>

<style scoped>
    .fixed-bar{
        width: 100%;
        height: 44px;
        background-color: #FFFFFF;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 49px;
    }
    .select{
        float: left;
    }
    .all-select,.total{
        float: left;
        font-size: 14px;
        color: #333;
    }
    .all-select{
        margin: 12px 0 0 20px;
    }
    .total{
        margin: 12px 0 0 82px;
    }
    .pay{
        float: right;
    }
    .pay button{
        width: 94px;
        height: 44px;
        border: none;
        background: #C30D23;
        font-size: 14px;
        color: #FAFAFA;
    }
</style>