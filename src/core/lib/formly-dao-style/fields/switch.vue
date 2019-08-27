<template>
  <field-item :to="to">
    <dao-switch
      :class="to.classes"
      :id="to.id ? to.id : null"
      :option="to.option"
      :with-notice="true"
      v-model="model[field.key]">
    </dao-switch>
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
