import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import axios from '@/api'
import plugin from '@/components/index.js'
import '@/styles/index.less'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(plugin)
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
