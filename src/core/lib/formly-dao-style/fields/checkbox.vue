<template>
  <dao-setting-section>
    <dao-setting-item>
      <template slot="label" v-if="to.label">
        {{ to.label }}
      </template>
      <template slot="content">
        <div
          class="dao-checkbox"
          v-for="item in to.options"
          :key="item.id">
          <label>
            <input
              type="checkbox"
              :value="item.value"
              v-model="model[field.key]"
            />
            {{ item.label }}
          </label>
        </div>
      </template>
      <p class="helper-text" v-if="to.description">
        {{ to.description }}
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
