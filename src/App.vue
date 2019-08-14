<template>
  <div id="app">
    <pre>{{ model }}</pre>
    <formly-form ref="form" :form="form" :model="model" :fields="fields"></formly-form>
  </div>
</template>

<script>
import * as Parser from "@/core/lib/formly-dao-style-parser";
import UserSchema from "./assets/schema.json";
import Model from './assets/model.json';

export default {
  name: "app",

  data() {
    const fields = Parser.fromJSONSchema(UserSchema);
    console.log(JSON.stringify(fields, null, 2));

    return {
      form: {},
      model: Model,
      fields
    };
  }
};
</script>
