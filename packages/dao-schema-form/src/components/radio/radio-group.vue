<template>
  <div :class="radioGroupClasess">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DaoRadioGroup',
  props: {
    vertical: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    radioGroupClasess () {
      return [
        'dao-radio-group',
        {
          'dao-radio-group--vertical': this.vertical,
          'dao-radio-group--horizontal': !this.vertical
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './radio-group.scss';
</style>
