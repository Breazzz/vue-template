<template>
  <div>
    <h1>Main Page</h1>
    <my-button class="link" @click="$router.push('/posts')" style="margin-top: 30px;">
      Go to posts
    </my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton}
}
</script>

<style scoped>

</style>