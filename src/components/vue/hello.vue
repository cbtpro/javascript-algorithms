<template>
  <div class="red">
    你好世界, 我是 {{ name }}
  </div>
</template>

<script setup>

defineProps({
  name: {
    type: String,
    default: 'peter1'
  },
});
</script>

<style scoped>
.red {
  color: red;
  font-size: 66px;
}
</style>