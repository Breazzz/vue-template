<template>
  <div v-for="post in posts" v-if="posts.length > 0">
    <PostItem :post="post" :key="post.id" @remove="$emit('remove', post)" />
  </div>
  <h3 v-else class="empty-title">Список постов пуст</h3>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.empty-title {
  color: darkorange;
  margin-top: 15px;
  text-align: center;
}
</style>