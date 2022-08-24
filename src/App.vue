<template>
  <div class="app">
    <div class="header">
      <h1 @click="$router.push('/')">Vue 3</h1>
      <div class="nav">
        <router-link to="/">Main</router-link>
        <router-link to="/posts">Posts</router-link>
        <router-link to="/store">Store</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 15px;
}

.header {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  gap: 15px;
}

.header h1 {
  color: darkviolet;
  font-weight: 900;
  cursor: pointer;
}

.header .nav a {
  font-weight: 900;
  color: black;
  text-decoration: none;
}

.router-link-active {
  color: darkviolet !important;
}
</style>