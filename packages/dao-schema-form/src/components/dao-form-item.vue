<template>
  <div class="dao-setting-section">
    <div class="dao-setting-item">
      <div class="dao-setting-label" v-if="hasLabel()">
        {{ label }}
      </div>
      <div class="dao-setting-content">
        <slot></slot>
        <div class="helper-text" v-if="hasContentHelper()">
          <slot name="content-helper">
            {{ description }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaoFormItem',

  props: {
    label: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },

  methods: {
    hasLabel () {
      return this.label || this.$slots.label
    },
    hasContentHelper () {
      return this.description || this.$slots['content-helper']
    }
  }
}
</script>
