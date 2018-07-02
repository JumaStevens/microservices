import Vue from 'vue'
import Vuex from 'vuex'

// modules
import error from './modules/error'
import auth from './modules/auth'
import media from './modules/media'
import services from './modules/services'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    error,
    auth,
    media,
    services
  },
  strict: process.env.NODE_ENV !== 'production'
})
