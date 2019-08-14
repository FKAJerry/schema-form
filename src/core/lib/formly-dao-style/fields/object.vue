<template>
  <dao-setting-section>
    <dao-setting-item>
      <template slot="label" v-if="to.label">{{ to.label }}</template>
       <template slot="content">
        <formly-form
          class="formly-array-item"
          :form="form"
          :model="model[field.key]"
          :fields="field.fields">
        </formly-form>
       </template>
    </dao-setting-item>
  </dao-setting-section>
</template>

<script>
export default {
  name: 'Object',

  props: {
    field: {
      type: Object,
      default: () => ({}),
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
    },
  },
};
</script>
