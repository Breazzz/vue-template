<template>
  <div v-if="show" class="modal" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <slot />
      <span class="close" @click="$emit('close')">&#10007;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
  .modal {
    position: fixed;
    background: rgba(0,0,0,.5);
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
  }

  .modal-content {
    background: white;
    position: relative;
    padding: 20px;
    margin: auto;
    border-radius: 6px;
    min-width: 500px;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }

  .close:hover {
    color: darkviolet;
  }
</style>