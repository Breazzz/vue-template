<template>
  <form @submit.prevent>
    <h2>Создание поста</h2>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Название"/>
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Описание"/>
    <my-button @click="createPost" style="margin-top: 15px;">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
      this.$emit('close')
    },
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>