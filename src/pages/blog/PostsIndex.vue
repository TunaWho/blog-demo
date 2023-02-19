<template>
  <div class="row col-md-8">
    <div class="col-md-12">
      <h3 class="pb-4 mb-4 font-italic border-bottom">
        SPA Blog
      </h3>
      <b-form-select v-model="orderBy" :options="sortOption" />
    </div>
    <div class="col-sm-12 col-md-12 row mt-2">
      <div class="col-md-12">
        <post-view v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
    <pagination
      v-if="posts"
      :current-page="currentPage"
      :total-pages="totalPages"
      aria-controls="my-table"
      @pageChanged="onPageChange"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostView from '@/components/PostView.vue';
import Pagination from '@/components/Pagination.vue';
import { getPosts } from '@/api/blog';

export default {
  name: 'PostsIndex',
  components: {
    Pagination,
    PostView,
  },
  data() {
    return {
      posts: [],
      orderBy: null,
      sortOption: [
        { value: null, text: 'Sort' },
        { value: 'desc', text: 'New posts' },
        { value: 'asc', text: 'Old posts' },
      ],
      totalPages: 100,
    };
  },
  computed: {
    ...mapState(['currentPage', 'limit']),
  },
  watch: {
    async orderBy(newParam) {
      let order = newParam;
      this.posts = await getPosts({
        page: this.currentPage,
        limit: this.limit,
        order,
      });
    },
  },
  async created() {
    await this.loadPosts();
    this.totalPages = Math.ceil(this.totalPages / this.limit);
  },
  methods: {
    async loadPosts() {
      let order = this.orderBy;

      this.posts = await getPosts({
        page: this.currentPage,
        limit: this.limit,
        order,
      });
    },
    onPageChange(page) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0,
      });
      this.$store.dispatch('onPageChange', page);
      this.loadPosts();
    },
  },
};
</script>

<style scoped></style>
