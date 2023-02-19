<template>
  <div class="row col-md-8">
    <div class="col-sm-12 col-md-12 row mt-2">
      <div class="col-md-12 blog-main">
        <div class="blog-img mb-4 text-center">
          <img
            :src="post?.image"
            alt=""
            class="w-100"
            style="max-height: 300px"
          >
        </div>

        <div class="blog-post">
          <h2 class="blog-post-title">
            {{ post?.title }}
          </h2>
          <p class="blog-post-meta">
            {{ dateTime }}
          </p>
          <div v-html="post?.content" />
        </div>
        <div v-if="post?.body" class="blog-post-body">
          <h3 class="blog-post-body-title">
            {{ post.body.title }}
          </h3>
          <img class="blog-post-body-image" :src="post.body.image">
          <p class="blog-post-body-content">
            {{ post.body.content }}
          </p>
        </div>
        <!-- /.blog-post -->
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment';
import { postDetail } from '@/api/blog';
import { dateTimeFormatHuman } from '@/utils/helper';

export default {
  name: 'PostDetail',
  data() {
    return {
      post: null,
    };
  },
  computed: {
    dateTime() {
      const datetime = dateTimeFormatHuman(this.post?.createdAt);
      return datetime; 
    }
  },
  watch: {
    '$route.params'(value) {
      this.fetchPost(value?.postId);
    },
  },
  async created() {
    await this.fetchPost(this.$route.params?.postId);
  },
  methods: {
    async fetchPost(postId) {
      this.post = await postDetail(postId);
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-post-body {
  background-color: #f7f7f7;
  padding: 30px;
  margin-top: 20px;
}

.blog-post-body-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  line-height: 1.2;
  color: #2d2d2d;
}

.blog-post-body-image {
  display: block;
  width: 200px;
  height: auto;
  margin-bottom: 20px;
  object-fit: cover;
}

.blog-post-body-content {
  font-size: 18px;
  margin: 0 0 20px;
  line-height: 1.5;
  color: #4d4d4d;
}
</style>
