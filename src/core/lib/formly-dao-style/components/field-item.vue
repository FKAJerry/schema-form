<template>
  <dao-setting-section>
    <dao-setting-item>
      <template slot="label" v-if="label">
        <label>{{ label }}</label>
        <span v-if="required" class="text-danger">*</span>
      </template>
      <template slot="content">
        <slot></slot>
      </template>
      <p slot="content-helper" v-if="description">
        {{ description }}
      </p>
    </dao-setting-item>
  </dao-setting-section>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    miniCheckbox() {
      return this.to.type === 'checkbox' && this.to.description === this.to.label;
    },
    label() {
      return this.miniCheckbox ? '' : this.to.label;
    },
    required() {
      return this.to.required;
    },
    description() {
      return this.miniCheckbox ? '' : this.to.description;
    },
  },
};
</script>
