import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App.vue'

import './config/bootstrap'

import router from './config/router'

Vue.config.productionTip = false

// Temporário
require('axios').defaults.headers.common['Authorization'] = ''

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
