import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// plugins
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
