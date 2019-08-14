<template>
  <dao-setting-section>
    <dao-setting-item>
      <template slot="label">
        <label v-if="to.label" :for="to.id ? to.id : null">
          {{ to.label }}
        </label>
      </template>
      <template slot="content">
        <textarea
          class="dao-control"
          type="text"
          rows="3"
          :disabled="to.disabled"
          :placeholder="getAtts(to.atts, 'placeholder')"
          v-model="model[field.key]">
        </textarea>
      </template>
      <p slot="content-helper">
        <span>{{ to.description }} </span>
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
