<template>
  <field-item :to="to">
    <formly-form
      class="formly-array-item"
      :form="form"
      :model="model[field.key]"
      :fields="field.fields">
    </formly-form>
  </field-item>
</template>

<script>
import FieldItem from '../components/field-item';

export default {
  components: {
    FieldItem,
  },

  name: 'Object',

  props: {
    field: {
      type: Object,
      default: () => ({}),
    },
    form: {
      type: Object,
      default: () => ({}),
    },
    model: {
      type: Object,
      default: () => ({}),
    },
    to: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
