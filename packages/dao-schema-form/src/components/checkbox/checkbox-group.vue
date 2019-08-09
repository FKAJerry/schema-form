<template>
  <div :class="checkboxGroupClasess">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DaoCheckboxGroup',
  props: {
    vertical: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    checkboxGroupClasess() {
      return [
        'dao-checkbox-group',
        {
          'dao-checkbox-group--vertical': this.vertical,
          'dao-checkbox-group--horizontal': !this.vertical,
        },
      ];
    },
  },
};
</script>

<style lang="scss">
@import './checkbox-group.scss';
</style>
