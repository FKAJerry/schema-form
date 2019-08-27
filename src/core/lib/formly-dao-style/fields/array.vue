<template>
  <field-item :to="to">
    <array-item
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      :model="item"
      :field="field.fields"
      @remove="removeItem">
    ></array-item>

    <button
      class="dao-btn blue mini has-icon"
      @click="addItem">
      <svg class="icon">
        <use xlink:href="#icon_plus-circled"></use>
      </svg>
      <span class="text">添加</span>
    </button>
  </field-item>
</template>

<script>
import ArrayItem from './arrayItem.vue';
import FieldItem from '../components/field-item';

export default {
  components: {
    ArrayItem,
    FieldItem,
  },

  props: ['form', 'field', 'model', 'to'],

  computed: {
    items() {
      return this.model[this.field.key];
    },
  },

  methods: {
    addItem() {
      this.items.push({});
    },

    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
