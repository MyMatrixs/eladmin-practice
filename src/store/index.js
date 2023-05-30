import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters.js'

import permission from './modules/permission.js'
import user from './modules/user.js'

import app from './modules/app.js'
Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    permission:permission,
    app:app,
    user:user
  },
  getters: getters,
})
