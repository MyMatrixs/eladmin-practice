import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)






export default new Vuex.Store({
  state: {
    Sidebar:{
      opened:false
    }
  },
  getters: {
  },
  mutations: {
    changeOpened(state){
      state.Sidebar.opened = !state.Sidebar.opened
    }
  },
  actions: {
  },
  modules: {
  }
})
