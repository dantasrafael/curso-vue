import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhZmFlbCBEYW50YXMiLCJlbWFpbCI6ImRhbnRhc3JhZmFlbEB5YWhvby5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4ODIzOTkyLCJleHAiOjE1Njg5MTAzOTJ9.g3K1n8sSovALOc40lJ5MFSIj25P8Zn41ztPqbf-QyNA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')