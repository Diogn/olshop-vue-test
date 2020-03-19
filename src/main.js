import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) return next()
  
  if (!store.getters.auth && window.$cookies.isKey('user') ) 
  store.dispatch('fetchUser', window.$cookies.get('user'))
  
  const middleware = to.meta.middleware

  const context = {
    to, 
    from,
    next, 
    store
  }

  return middleware[0] ({
    ...context
  })
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
