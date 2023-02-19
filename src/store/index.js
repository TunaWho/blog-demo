import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentPage: 1,
    limit: 10,
  },

  actions: {
    onPageChange({ commit }, payload) {
      commit('setPageChange', payload);
    },
  },

  mutations: {
    setPageChange(state, payload) {
      state.currentPage = payload;
    },
  },

  modules: {},
});

export default store;
