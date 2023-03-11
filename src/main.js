/*
 * @Author: Anyuxuan xiayu_12@yeah.net
 * @Date: 2023-02-11 16:42:48
 * @LastEditors: Anyuxuan xiayu_12@yeah.net
 * @LastEditTime: 2023-03-11 13:26:31
 * @FilePath: \vue2.0-test\src\main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/route'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import './reg_component'
import ElementUI from 'element-ui'
import './vxeTable.js'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(router)
Vue.use(VXETable)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
