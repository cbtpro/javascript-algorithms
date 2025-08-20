<template>
  <div class="red">
    hello world, this is {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'peter'
    };
  }
};
</script>

<style scoped>
.red {
  color: green;
}
</style>