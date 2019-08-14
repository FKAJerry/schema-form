<template>
  <dao-setting-section>
    <dao-setting-item>
      <template slot="label">
        <label v-if="to.label" :for="to.id ? to.id : null">
          {{ to.label }}
        </label>
      </template>
      <template slot="content">
        <dao-radio-group type="simple">
          <dao-radio
            v-for="item in to.options"
            :class="to.classes"
            :key="item.value"
            :label="item.value"
            v-model="model[field.key]">
            {{ item.label }}
          </dao-radio>
        </dao-radio-group>
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
