<template>
  <field-item :to="to">
    <textarea
      class="dao-control"
      type="text"
      rows="3"
      :disabled="to.disabled"
      :placeholder="getAtts(to.atts, 'placeholder')"
      v-model="model[field.key]">
    </textarea>
  </field-item>
</template>

<script>
import baseField from './baseField';
import FieldItem from '../components/field-item';

export default {
  components: {
    FieldItem,
  },

  mixins: [baseField],
};
</script>
