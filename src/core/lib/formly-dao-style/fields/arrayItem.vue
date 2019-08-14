<template>
  <formly-form
    class="formly-array-item"
    :form="form"
    :model="model"
    :fields="field">
    <button
      class="formly-array-btn dao-btn blue mini has-icon"
      @click="removeItem">
      <svg class="icon">
        <use xlink:href="#icon_trash"></use>
      </svg>
    </button>
  </formly-form>
</template>

<script>
export default {
  name: 'ArrayItem',

  props: {
    index: {
      type: Number,
      default: 1,
    },
    field: {
      type: Array,
      default: () => [],
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
    }
  },

  methods: {
    removeItem() {
      this.$emit('remove', this.index);
    }
  }
};
</script>

<style lang="scss">
.formly-array-item {
  position: relative;

  .formly-array-btn {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &:hover {
    .formly-array-btn {
      display: inline-block;
    }
  }
}
</style>
