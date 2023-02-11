import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index.vue'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/table/index.vue')
    }
  ]
})

export default router