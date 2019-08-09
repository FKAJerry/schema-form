<template>
  <label :class="wrapClasses">
    <span :class="radioClasses">
      <input
        type="radio"
        class="dao-radio-input"
        :disabled="disabled"
        :name="name"
        :checked="currentValue"
        @change="change"
      >
      <span class="dao-radio-inner" />
    </span>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>

<script>
export default {
  name: 'DaoRadio',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: false
    }
  },
  computed: {
    wrapClasses () {
      return [
        'dao-radio-wrapper',
        {
          'dao-radio-wrapper--disabled': this.disabled
        }
      ]
    },
    radioClasses () {
      return [
        'dao-radio',
        {
          'dao-radio--checked': this.currentValue,
          'dao-radio--disabled': this.disabled
        }
      ]
    }
  },
  watch: {
    value () {
      this.updateValue()
    }
  },
  mounted () {
    this.updateValue()
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return
      }

      const { checked } = event.target
      this.currentValue = checked

      this.$emit('input', this.label)
      this.$emit('change', this.label)
    },
    updateValue () {
      this.currentValue = this.value === this.label
    }
  }
}
</script>

<style lang="scss">
@import './radio.scss';
</style>
