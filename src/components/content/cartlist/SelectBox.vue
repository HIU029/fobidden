<template>
    <div class="select-shadow">
        <input type="checkbox" class="Checkbox" id="check1">
        <label for="check1"></label>
    </div>
</template>

<script>

export default {
  name: 'SelectBox',
}
</script>
<style scoped>
    .select-shadow {
        width: 20px;
        height: 20px;
        box-shadow: 0px 0px 5px #F2F2F2;
        border-radius: 50%;
        background-color: #F2F2F2;
        line-height: 20px;
        position: relative;
        margin: 61px 0 0 5px;
    }
    .Checkbox {
        position: absolute;
        visibility: hidden;
    }
    .Checkbox+label {
        position:absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color:#DEDEDE;
        left: 3px;
        top: 3px;
    } 
    .Checkbox:checked+label:after {
        content: "";
        position: absolute;
        left: 2px;
        top:2px;
        width: 9px;
        height: 4px;
        border: 2px solid #424242;
        border-top-color: transparent;
        border-right-color: transparent; 
        transform: rotate(-45deg);
        -ms-transform: rotate(-60deg);
        -moz-transform: rotate(-60deg);
        -webkit-transform: rotate(-60deg);
    }
</style>