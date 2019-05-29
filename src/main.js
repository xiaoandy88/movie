import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
import Scroll from '@/components/Scroll'
import Loading from '@/components/Loading'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.component('Scroll', Scroll)
Vue.component('Loading', Loading)

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
