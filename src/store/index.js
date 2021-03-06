import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// initial state
const state = {
  userImgInfo: null,
  editor: null
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  setUserImgInfo (state, data) {
    state.userImgInfo = data
  },
  setEditor (state, data) {
    state.editor = data
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
