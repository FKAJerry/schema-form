<template>
  <dao-setting-section>
    <dao-setting-item>
      <template slot="label">
        <label v-if="to.label" :for="to.id ? to.id : null">
          {{ to.label }}
        </label>
      </template>
      <template slot="content">
        <dao-switch
          :class="to.classes"
          :id="to.id ? to.id : null"
          :option="to.option"
          :with-notice="true"
          v-model="model[field.key]">
        </dao-switch>
      </template>
      <p slot="content-helper">
        <span>{{ to.description }}</span>
      </p>
    </dao-setting-item>
  </dao-setting-section>
</template>

<script>
import baseField from './baseField';

export default {
  mixins: [baseField],
};
</script>
