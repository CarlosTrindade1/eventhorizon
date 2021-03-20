import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App.vue'

import './config/bootstrap'

import router from './config/router'

Vue.config.productionTip = false

// Temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkNhcmxvcyIsImVtYWlsIjoiY2FybG9zQGNhcmxvcy5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE2MjUwNTQzLCJleHAiOjE2MTY1MDk3NDN9.NKy8uF10-5IJwizXOYOnryNEgUsmuRgdFjm9VMRwYj4'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
