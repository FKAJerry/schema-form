<template>
  <div id="app">
    <textarea
      cols="30"
      rows="10"
      v-model="schema">
    </textarea>
    <formly-form
      ref="form"
      :form="form"
      :model="model"
      :fields="fields">
      <button class="dao-btn" @click="validate">提交</button>
    </formly-form>
  </div>
</template>

<script>
import * as Parser from '@/core/lib/formly-dao-style-parser';
import UserSchema from './assets/schema.json';
import Model from './assets/model.json';

export default {
  name: 'app',

  data() {
    return {
      schema: '',
      form: {},
      model: Model,
      fields: [],
      JSONSchema: {},
    };
  },

  watch: {
    schema: {
      immediate: true,
      handler(schema) {
        let JSONSchema = UserSchema;
        if (schema) {
          try {
            JSONSchema = JSON.parse(schema);
          } catch (err) {
            console.log('bug', err);
          }
        }

        this.JSONSchema = Object.assign({}, JSONSchema);

        this.fields = Parser.fromJSONSchema(JSONSchema);
        this.model = Parser.getInitialState(JSONSchema, this.fields);

        console.log(this.form, this.model);
      },
    },
  },

  methods: {
    validate() {
      // model, schema
      const errors = Parser.validateFormData({}, this.JSONSchema);
      console.log(errors);
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
}
</style>
