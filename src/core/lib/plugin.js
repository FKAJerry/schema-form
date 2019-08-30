import VueFormlyDaoStyle from '@/core/lib/formly-dao-style';
import SchemaForm from './schema-form.vue';

let installed = false;

export default {
  install(Vue) {
    if (!installed) {
      Vue.use(VueFormlyDaoStyle);

      Vue.component('SchemaForm', SchemaForm);

      installed = true;
    }
  },
};
