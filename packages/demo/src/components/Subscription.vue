<template>
  <div class="form">
    <FormSchema
      ref="formSchema"
      class="dao-setting-layout"
      v-model="model"
      @submit.prevent
      :schema="schema"
      :components="components"
    >
      <div>
        <button type="primary" @click="submit">Subscribe</button>
        <button @click="reset">Reset</button>
      </div>
    </FormSchema>
  </div>
</template>

<script>
import FormSchema, { Components } from "../../../../src/components/FormSchema";
import ElementUIComponents from "../../../dao-schema-form/lib/ElementUIComponents";

export default {
  data: () => ({
    schema: require("../schema/newsletter"),
    // schema: require("../schema/sample"),
    components: ElementUIComponents(Components),
    model: {}
  }),
  methods: {
    submit() {
      console.log(JSON.stringify(this.model, null, 2));
    },
    reset() {
      this.$refs.formSchema.reset();
    }
  },
  components: { FormSchema }
};
</script>

<style>
.form {
  text-align: left;
  width: 600px;
  margin: auto;
}

h1 {
  font-size: 1.7em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.2em;
}

h1 + p {
  display: block;
  text-align: center;
  margin-bottom: 1.2em;
}

small {
  line-height: 20px;
  display: block;
}

.el-alert {
  margin-bottom: 15px;
}
</style>
