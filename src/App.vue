<template>
  <div class="h-100">
    <!-- Layout section -->
    <component :is="layout" />
    <!-- End layout section -->
  </div>
</template>

<script>
import BlogLayout from '@/pages/layouts/BlogLayout.vue';

export default {
  name: 'App',
  components: {
    BlogLayout
  },
  data() {
    return {
      defaultLayout: 'blog-layout',
    };
  },
  computed: {
    layout() {
      return this.$route.meta.layout ? this.$route.meta.layout : this.defaultLayout;
    },
  },
};
</script>

<style scoped></style>
