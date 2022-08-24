import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [
      {id: 997, title: 'Vue JS', body: 'Post vue body'},
      {id: 998, title: 'React JS', body: 'Post react body'},
      {id: 999, title: 'Angular JS', body: 'Post angular body'},
    ],
    loading: false,
    search: '',
    count: 1
  }),
  getters: {
    filteredBySearchPosts(state) {
      return state.posts.filter(post => post.title.toLowerCase().includes(state.search.toLowerCase()))
    },
    removePost(state, id) {
      return state.posts.filter(post => post.id !== id)
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, bool) {
      state.loading = bool
    },
    setSearch(state, search) {
      state.search = search
    },
    incrementCount(state) {
      state.count++
    },
    decrementCount(state) {
      state.count--
    }
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        commit('setLoading', true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=7')
        commit('setPosts', [...state.posts, ...response.data])
      } catch (e) {
        console.log('====>e.message<====', e.message)
      } finally {
        commit('setLoading', false)
      }
    }
  },
  namespaced: true
}