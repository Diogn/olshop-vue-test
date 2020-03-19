import Vue from 'vue';
import Router from 'vue-router'
import auth from './middleware/auth'
// import isSubscribed from './middleware/isSubscribed'
// import middlewarePipeline from './middlewarePipeline'

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      meta: {
        middleware: [
          auth
        ]
      },
      component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        middleware: [
          auth
        ]
      },
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (!to.meta.middleware) {
//       return next()
//   }
//   const middleware = to.meta.middleware

//   const context = {
//       to,
//       from,
//       next,
//       store
//   }


//   return middleware[0]({
//       ...context,
//       next: middlewarePipeline(context, middleware, 1)
//   })

// })

export default router;