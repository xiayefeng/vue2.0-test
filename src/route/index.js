/*
 * @Author: xiayefeng xiayu_12@yeah.net
 * @Date: 2023-02-11 16:51:03
 * @LastEditors: xiayefeng xiayu_12@yeah.net
 * @LastEditTime: 2023-04-04 23:44:07
 * @FilePath: \vue2.0-test\src\route\index.js
 * @Description: 
 */
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
    },
    {
      path: '/table2',
      name: 'table2',
      component: () => import('@/views/table/MyTable.vue')
    },
    {
      path: '/table3',
      name: 'table3',
      component: () => import('@/views/table/TableData3.vue')
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('@/views/select/MySelect.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('@/views/tree/index.vue')
    },
    {
      path: '/flex',
      name: 'flex',
      component: () => import('@/views/flex/index.vue')
    }
  ]
})

export default router