<template>
  <div>
    <my-button @click="show = !show">Создать статью</my-button>
    <my-button @click="fetchPosts" style="margin-left: 10px;">Fetch posts</my-button>
    <my-input placeholder="Поиск..." v-model="search" />
    <my-modal :show="show" @close="show = !show">
      <post-form @create="createPost" @close="show = !show" />
    </my-modal>
    <PostList
        @remove="removePost"
        :posts="filteredBySearchPosts"
    />
    <h3 v-if="loading">loading</h3>
  </div>
</template>

<script>
import PostList from "@/components/PostList"
import PostForm from "@/components/PostForm"
import MyButton from "@/components/UI/MyButton"
import axios from 'axios'
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    MyInput,
    MyButton,
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 997, title: 'Vue JS', body: 'Post vue body'},
        {id: 998, title: 'React JS', body: 'Post react body'},
        {id: 999, title: 'Angular JS', body: 'Post angular body'},
      ],
      show: false,
      loading: false,
      search: ''
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    inputTitle(e) {
      this.title = e.target.value
    },
    removePost(post) {
      this.posts = this.posts.filter(el => el.id !== post.id)
    },
    async fetchPosts() {
      try {
        this.loading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=7')
        this.posts.push(...response.data)
        this.loading = false
      } catch (e) {
        console.log('====>e.message<====', e.message)
        this.loading = false
      }
    }
  },
  mounted() {
    console.log('====>mounted<====')
  },
  computed: {
    filteredBySearchPosts() {
      return this.posts.filter(post => post.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>