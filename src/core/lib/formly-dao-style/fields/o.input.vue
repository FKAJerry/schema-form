<template>
  <dao-setting-section>
    <dao-setting-item>
      <template slot="label" v-if="to.label">
        {{ to.label }}
      </template>
      <template slot="content">
        <dao-input
          type="text"
          :class="to.classes"
          :id="to.id ? to.id : null"
          :placeholder="getAtts(to.atts, 'placeholder')"
          v-model="model[field.key]"
          icon-inside
          :status="status"
          :message="message"
          :disabled="to.disabled"
          @blur="onBlur"
          @focus="onFocus"
          @click="onClick"
          @change="onChange"
          @keyup="onKeyup"
          @keydown="onKeydown"
          v-formly-atts="to.atts"
          v-formly-input-type="to.inputType">
        </dao-input>
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
  computed: {
    fieldErrors() {
      return this.form.$errors[this.field.key];
    },
    fieldConfig() {
      return this.form[this.field.key];
    },
    status() {
      let status = '';

      if (!this.fieldConfig.$dirty) {
        return status;
      }

      const hasError = Object.entries(this.fieldErrors).some(([key, value]) => !key.startsWith('$') && value);
      if (hasError) {
        status = 'error';
      }
      return status;
    },
    message() {
      let message = '';

      if (!this.fieldConfig.$dirty) {
        return message;
      }

      const hasMsg = Object.entries(this.fieldErrors).some(([key, value]) => { // eslint-disable-line
        const has = typeof value === 'string';
        if (has) {
          message = value;
        }
        return has;
      });

      return message;
    },
  },
  methods: {
    onChange(e) {
      this.$set(this.form[this.field.key], '$dirty', true);
      this.runFunction('onChange', e);
    },
  },
};
</script>
