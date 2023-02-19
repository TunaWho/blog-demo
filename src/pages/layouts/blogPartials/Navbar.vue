<template>
  <!-- Navbar -->
  <b-navbar
    toggleable="sm"
    class="bg-semi-light"
    type="light"
    variant="light"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        SPA Blog
      </router-link>
      <b-navbar-toggle class="navbar-toggler" target="nav-text-collapse" />

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <post-search />
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
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
  background-color: #ecf0f1 !important;
}
</style>
