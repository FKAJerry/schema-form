<template>
  <label :class="wrapClasses">
    <span :class="checkboxClasses">
      <input
        type="checkbox"
        class="dao-checkbox-input"
        :name="name"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
      >
      <span class="dao-checkbox-inner" />
    </span>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>

<script>
export default {
  name: 'DaoCheckbox',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number, Boolean],
      default: false,
    },
    label: {
      type: [String, Number, Boolean],
      default: true,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: false,
    };
  },
  computed: {
    wrapClasses() {
      return [
        'dao-checkbox-wrapper',
        {
          'dao-checkbox-wrapper--disabled': this.disabled,
        },
      ];
    },
    checkboxClasses() {
      return [
        'dao-checkbox',
        {
          'dao-checkbox--checked': this.currentValue,
          'dao-checkbox--indeterminate': this.indeterminate,
          'dao-checkbox--disabled': this.disabled,
        },
      ];
    },
  },
  watch: {
    value() {
      this.updateModel();
    },
  },
  mounted() {
    this.updateModel();
  },
  methods: {
    change(event) {
      if (this.disabled) {
        return;
      }

      const { checked } = event.target;
      this.currentValue = checked;

      const value = checked ? this.label : false;
      // 同步更新v-model值
      this.$emit('input', value);
      this.$emit('change', value, event);
    },
    updateModel() {
      this.currentValue = this.value === this.label;
    },
  },
};
</script>

<style lang="scss">
@import './checkbox.scss';
</style>
