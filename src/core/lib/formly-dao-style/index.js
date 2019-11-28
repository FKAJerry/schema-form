import ArrayField from './fields/array';
import Checkbox from './fields/checkbox';
import HTMLInput from './fields/HTMLInput';
import Integer from './fields/integer';
import ObjectField from './fields/object';
import Radio from './fields/radio';
import Select from './fields/select';
import Switch from './fields/switch';
import Textarea from './fields/textarea';
import Password from './fields/password';

import input from './fields/input.js';

const Fields = {
  array: ArrayField,
  checkbox: Checkbox,
  text: HTMLInput,
  integer: Integer,
  number: Integer,
  object: ObjectField,
  radio: Radio,
  select: Select,
  switch: Switch,
  textarea: Textarea,
  password: Password,
  email: input('email'),
  url: input('url'),
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
