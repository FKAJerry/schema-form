<template>
  <field-item :to="to">
    <input
      :type="inputType"
      class="dao-control"
      v-model="model[field.key]"
      :placeholder="getAtts(to.atts, 'placeholder')"
      :disabled="to.disabled"
    />
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


  props: {
    type: {
      type: String,
      default: 'text',
    },
  },

  computed: {
    inputType() {
      const { attrs = ({}) } = this.field;
      if (attrs.inputType) {
        return attrs.inputType;
      }
      return this.type;
    },
  },
};
</script>
