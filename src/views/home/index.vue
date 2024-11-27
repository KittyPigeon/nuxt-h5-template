<template>
  <div class="container">
    <nut-button type="primary">Primary</nut-button>
    <nut-button type="info">Info</nut-button>
    <nut-button type="default">Default</nut-button>
    <nut-button type="danger">Danger</nut-button>
    <nut-button type="warning">Warning</nut-button>
    <nut-button type="success">Success</nut-button>

    <!-- 按钮使用二 -->
    <nut-button loading type="info"></nut-button>
    <div v-html="rawHtml"></div>

    <!-- 直至主题切换 -->
    <button>中文</button>
    <button>英文</button>
    <nut-button @click="test">提示</nut-button>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { useNotify } from '@/hooks/useNotify'
// import about from '@/views/about'
const props = defineProps({});
// emits
const emits = defineEmits([]);
const rawHtml = ref('<span>hello</span>')
const notify = useNotify();
const test=()=>{
  notify.primary('hello world')
}
</script>
<style scoped lang="scss"></style>
