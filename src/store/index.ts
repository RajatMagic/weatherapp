import Vue from 'vue'
import Vuex from 'vuex'
import { GlobalModule } from './global/globalModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    globalModule: GlobalModule
  }
})
