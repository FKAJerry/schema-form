import ArrayField from './fields/array';
import Checkbox from './fields/checkbox';
import Input from './fields/input';
import Integer from './fields/integer';
import Radio from './fields/radio';
import Select from './fields/select';
import Switch from './fields/switch';
import Textarea from './fields/textarea';

const Fields = {
  array: ArrayField,
  checkbox: Checkbox,
  text: Input,
  integer: Integer,
  number: Integer,
  radio: Radio,
  select: Select,
  switch: Switch,
  textarea: Textarea,
  // password: Password,
};

const FormlyDaoStyle = {
  install(Vue) {
    Object.keys(Fields).forEach(key => {
      Vue.$formly.addType(key, Fields[key]);
    });
  },
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FormlyDaoStyle);
}

export default FormlyDaoStyle;
