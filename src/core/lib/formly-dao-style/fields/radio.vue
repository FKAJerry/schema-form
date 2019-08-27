<template>
  <field-item :to="to">
    <dao-radio-group type="simple">
      <dao-radio
        v-for="item in to.options"
        :class="to.classes"
        :key="item.value"
        :label="item.value"
        v-model="model[field.key]">
        {{ item.label }}
      </dao-radio>
    </dao-radio-group>
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
