// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    user: null
  },
  mutations: {
    setAuth(state, { isAuthenticated, user }) {
      console.log('setAuth', isAuthenticated, user)
      state.isAuthenticated = isAuthenticated
      state.user = user
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
    }
  },
  actions: {
    login({ commit }, user) {
      console.log('login', user)
      commit('setAuth', { isAuthenticated: true, user })
    },
    logout({ commit }) {
      console.log('logout')
      commit('setAuth', { isAuthenticated: false, user: null })
    }
  }
})
