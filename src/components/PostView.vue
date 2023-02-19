<template>
  <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-custom h-md-250 position-relative">
    <div class="col p-4 d-flex flex-column position-static col-md-8">
      <h3 class="mb-0">
        {{ post.title }}
      </h3>
      <div class="mb-1 text-muted">
        {{ dateTime }}
      </div>
      <p class="card-text">
        {{ post.content }}
      </p>
      <div class="d-flex justify-content-between">
        <router-link
          :to="{
            name: 'posts.show',
            params: {
              postId: post.id,
            },
          }"
          class="stretched-link"
        >
          Continue reading
        </router-link>
      </div>
    </div>
    <div class="col-auto d-none d-lg-block col-md-4 img-box">
      <img class="img-item" :src="post.image" :alt="post.title">
    </div>
  </div>
</template>

<script>
import { dateTimeFormatHuman } from '@/utils/helper';

export default {
  name: 'PostView',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dateTime() {
      const datetime = dateTimeFormatHuman(this.post.createdAt);
      return datetime;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-box {
  height: 200px;
  overflow: hidden;
}
.img-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
