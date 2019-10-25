<template>
  <div id="app">
    <textarea
      cols="30"
      rows="10"
      v-model="schema">
    </textarea>
    <schema-form
      ref="scehmaForm"
      v-model="model"
      :schema="JSONSchema">
      <button class="dao-btn" @click="validate">提交</button>
    </schema-form>
  </div>
</template>

<script>
import Model from './assets/model.json';

export default {
  name: 'app',

  data() {
    return {
      schema: '',
      model: Model,
      JSONSchema: {},
    };
  },

  watch: {
    schema: {
      immediate: true,
      handler(schema) {
        let JSONSchema = {};
        if (schema) {
          try {
            JSONSchema = JSON.parse(schema);
          } catch (err) {
            console.log('bug', err);
          }
        }

        this.JSONSchema = Object.assign({}, JSONSchema);
      },
    },
  },

  methods: {
    validate() {
      console.log(this.$refs.scehmaForm.validate());
      console.log(this.model);
      // return Parser.validateFormData({}, this.JSONSchema);
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
}
textarea {
  min-width: 800px;
}
.text-danger {
  color: red;
}
</style>
