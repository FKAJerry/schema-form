import Vue from 'vue';
import DaoStyle from 'dao-style-vue';
import VueFormly from 'vue-formly';
import SchemaForm from './core/lib/plugin';

import 'dao-style-vue/styles/dao-style.css';

import App from './App.vue';

Vue.use(DaoStyle);
Vue.use(VueFormly);
Vue.use(SchemaForm);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
