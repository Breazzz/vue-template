<template>
  <div>
    <h2 style="margin-bottom: 20px;">
      Store count: {{$store.state.post.count}}
      <my-button @click="$store.commit('post/incrementCount')" style="border: 1px solid black">+</my-button>
      <my-button @click="$store.commit('post/decrementCount')" style="border: 1px solid black">-</my-button>

    </h2>
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
import MyInput from "@/components/UI/MyInput";
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    MyInput,
    MyButton,
    PostList, PostForm
  },
  data() {
    return {
      search: '',
      show: false,
    }
  },
  methods: {
    ...mapMutations({

    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts'
    }),
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      loading: state => state.post.loading,
      search: state => state.post.loading,
      count: state => state.post.count
    }),
    ...mapGetters({
      filteredBySearchPosts: 'post/filteredBySearchPosts',
      removePost: 'post/removePost'
    })
  }
}
</script>