import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topicDetails: Object,
  },

  mutations: {
    SET_TOPIC_DETAILS(state, payload) {
      state.topicDetails = payload;
    },
  },

  actions: {},

  setters: {
    SET_TOPIC_DETAILS(state, payload) {
      state.topicDetails = payload;
    },
  },

  getters: {
    GET_TOPIC_DETAILS(state) {
      return state.topicDetails;
    },
  },

  modules: {},

  plugins: [createPersistedState()]
});
