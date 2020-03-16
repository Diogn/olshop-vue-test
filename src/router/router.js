import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Ice',
      name: 'Ice Products',
      component: () => import(/* webpackChunkName: "home-epaper" */ '../components/Products.vue'),
    }, 
  ]
})