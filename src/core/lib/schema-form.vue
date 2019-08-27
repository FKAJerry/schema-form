<template>
  <div>
    <ul class="text-red">
      <li v-for="error in  errorsText" :key="error">
        {{ error }}
      </li>
    </ul>
    <formly-form
      ref="form"
      :form="form"
      :model="model"
      :fields="fields"
    >
      <slot ></slot>
    </formly-form>
  </div>
</template>

<script>
import JSONPointer from 'json-pointer';
import localize from 'ajv-i18n/localize/zh';
import * as Parser from '@/core/lib/formly-dao-style-parser';

export default {
  name: 'SchemaForm',

  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },

    value: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      form: {},
      fields: [],
      errors: [],
      errorsText: [],
    };
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  watch: {
    schema: {
      immediate: true,
      handler(schema) {
        this.fields = Parser.fromJSONSchema(schema);
        this.model = Parser.getInitialState(schema, this.fields, this.model);
      },
    },
  },

  methods: {
    validate() {
      const ajv = Parser.validateFormData(this.model, this.schema);
      localize(ajv.errors); // mutable function

      this.errors = ajv.errors.slice();
      this.errorsText = this.errors.map(this.getErrorText);

      return Boolean(this.errors.length);
    },

    getErrorText(e) {
      return `${e.dataPath.slice(1)} ${e.message}`;
    }
  },
};
</script>
