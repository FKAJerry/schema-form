<template>
  <field-item :to="to">
    <div
      class="dao-checkbox"
      v-for="item in to.options"
      :key="item.id">
      <label>
        <input
          type="checkbox"
          :value="item.value"
          v-model="model[field.key]"
        />
        {{ item.label }}
      </label>
    </div>
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
