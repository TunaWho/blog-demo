<template>
  <div class="post-search--wrapper">
    <div class="form-inline my-2 my-lg-0">
      <input
        v-model="query"
        class="form-control mr-sm-2"
        type="text"
        placeholder="Search an article"
        @focus="showResults"
        @blur="removeResults"
        @keyup="loadResults"
      >
    </div>
    <div v-if="search" class="list-group list-group-flush shadow-sm post-search--results">
      <a
        v-for="result in results"
        :key="result.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center result"
        href="#"
        :data-result="result.id"
        @click.prevent="goTo(result)"
      >
        {{ result.title }}
      </a>
    </div>
  </div>
</template>

<script>
import { getPosts } from '@/api/blog';

export default {
  name: 'PostSearch',
  data() {
    return {
      query: '',
      search: false,
      results: [],
    };
  },
  methods: {
    showResults() {
      this.search = true;
    },
    removeResults(event) {
      let isResultClicked = event.relatedTarget.classList.contains('result');

      if (isResultClicked) {
        this.goTo(event.relatedTarget.dataset.result);
      }

      this.search = false;
    },
    async loadResults() {
      if (this.query.length < 3) {
        this.results = [];
        return;
      }

      this.results = await getPosts({
        search: this.query,
        order: 'desc',
      });
    },
    goTo(postId) {
      let result = this.results.find((result) => result.id === postId);

      this.$router.push({
        name: 'posts.show',
        params: {
          postId: result.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.post-search--wrapper {
  position: relative;
}

.post-search--results {
  position: absolute;
  width: 100%;
  z-index: 100;
  margin-top: 8px;
}
</style>
