import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router.js'
import { store } from './store/store.js'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
