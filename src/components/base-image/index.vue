<template>
    <nut-image :src="url" :width="width" :height="height" />
</template>

<script setup>
import { onMounted, reactive, ref } from "vue"

const props = defineProps({
    url,
    width,
    height
});
// emits
const emits = defineEmits([])
</script>
<style scoped lang='scss'></style>
