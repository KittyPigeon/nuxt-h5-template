<template>
  <div class="layout">
    <div class="header">
        头部
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">底部</div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue"
const props = defineProps({});
// emits
const emits = defineEmits([])
</script>
<style scoped lang='scss'>
  .layout{
    height: 100vh;
    display: flex;
    flex-direction: column;
    .header{
      height: 40px;
    }
    .main{
      flex:1;
    }
    .footer{
      height: 40px;
      background: red;
    }
  }
</style>
