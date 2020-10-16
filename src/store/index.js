import { createStore } from 'vuex'

export default createStore({
  state: {
    items: []
  },
  mutations: {
    ADD(state, item) {
      state.items.push(item);
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('ADD', item);
    }
  },
  modules: {
  }
})
