<template>
  <dao-setting-section>
    <dao-setting-item>
      <template slot="label" v-if="to.label">
        {{ to.label }}
      </template>
      <template slot="content">
        <input
          :type="inputType"
          class="dao-control"
          v-model="model[field.key]"
          :placeholder="getAtts(to.atts, 'placeholder')"
          :disabled="to.disabled"
        />
      </template>
      <p slot="content-helper" v-if="to.description">
        {{ to.description }}
      </p>
    </dao-setting-item>
  </dao-setting-section>
</template>

<script>
import baseField from './baseField';

export default {
  mixins: [baseField],

  props: {
    type: {
      type: String,
      default: 'text',
    },
  },

  computed: {
    inputType() {
      const { attrs = ({}) } = this.field;
      if (attrs.inputType) {
        return attrs.inputType;
      }
      return this.type;
    },
  },
};
</script>
