import Vue from 'vue'
import App from './App.vue'
import router from '@/route'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import './reg_component'

Vue.use(router)
Vue.use(VXETable)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
