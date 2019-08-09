import Vue from 'vue'
import DaoStyle from 'dao-style-vue'
import 'dao-style-vue/styles/dao-style.css'

import App from './App.vue'

Vue.use(DaoStyle)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
