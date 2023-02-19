<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-semi-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        SPA Blog
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarColor03" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              id="postsDropdownLink"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Posts
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" :to="{ name: 'posts.index' }">
                Latest posts
              </router-link>
              <router-link
                class="dropdown-item"
                :to="{ name: 'posts.index', query: { popular: '1' } }"
              >
                Popular posts
              </router-link>
            </div>
          </li>
        </ul>
        <post-search />
      </div>
    </div>
  </nav>
  <!-- End navbar -->
</template>

<script>
import PostSearch from '@/components/PostSearch.vue';
export default {
  name: 'Navbar',
  components: { PostSearch },
};
</script>

<style lang="scss" scoped>
.bg-semi-light {
    background-color: #ECF0F1 !important
}
</style>
