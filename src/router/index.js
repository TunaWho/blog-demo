import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'src/pages/blog' */ '@/pages/blog/PostsIndex.vue'),
    name: 'posts.index',
  },
  {
    path: '/:postId/detail',
    component: () => import(/* webpackChunkName: 'src/pages/blog' */ '@/pages/blog/PostDetail.vue'),
    name: 'posts.show',
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: 'src/pages' */ '@/pages/NotFound.vue'),
  },
];

const router = new VueRouter({
  /* eslint-disable no-unused-vars */
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    };
  },
  mode: 'history',
  routes,
});

export default router;
