import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router.js'
import { store } from './store/store.js'

Vue.use(Vuex)
Vue.config.productionTip = false
const token = localStorage.getItem('token')
if (token) {
  Vue.$store.defaults.headers.common['Authorization'] = token
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
