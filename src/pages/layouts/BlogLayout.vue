<template>
  <div>
    <layout-navbar />
    <!-- Blog conotent -->
    <div class="container my-4">
      <div class="row">
        <router-view />
      </div>
    </div>
    <!-- End blog content -->
    <layout-footer />
  </div>
</template>

<script>
import LayoutFooter from './blogPartials/Footer.vue';
import LayoutNavbar from './blogPartials/Navbar.vue';

export default {
  name: 'BlogLayout',
  components: {
    LayoutFooter,
    LayoutNavbar,
  },
};
</script>

<style scoped></style>
