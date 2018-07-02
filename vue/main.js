import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import utils from './plugins'
import filters from './filters'

window.onload = () => {
  new Vue({
    el: '#vue-app',
    store,
    router,
    render: h => h(App)
  })
}
