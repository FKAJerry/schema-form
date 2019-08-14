<template>
  <div id="app">
    <textarea
cols="30"
rows="10"
v-model="schema"></textarea>
    <formly-form
ref="form"
:form="form"
:model="model"
:fields="fields"></formly-form>
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

        this.fields = Parser.fromJSONSchema(JSONSchema);
        this.model = Parser.getInitialState(JSONSchema, this.fields);
      },
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
}
</style>
