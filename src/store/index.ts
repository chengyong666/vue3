import { createStore } from 'vuex'

export default createStore({
  state: {
    value: 33,
  },
  getters: {},
  mutations: {
    add(state) {
      state.value + 2
    },
  },
  actions: {
    yibu({ commit }) {
      setTimeout((e: any) => {
        commit('add', 11)
      })
    },
  },
  modules: {},
})
