import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[]
  },
  mutations: {
    SET_USERS(state, value) {
      state.users = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
