import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'
import Register from '../views/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component:Register,
    // route level code-splitting
    // this generates a separate chunk (Register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
