<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  color: white;
  background: darkviolet;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

</style>