<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/setting">Setting</router-link> |
      <router-link to="/setting/privacy">Privacy</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/user/123">User Detail</router-link> |
      <router-link to="/pokemon">Pokemon</router-link>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
.container {
  margin-left: 50px;
  margin-right: 50px;
}
</style>