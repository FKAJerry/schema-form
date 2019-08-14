<template>
  <span
    v-if="message"
    class="help-block form-text text-danger">
    {{ message }}
  </span>
</template>

<script>
export default {
  props: {
    field: { type: String, default: '' },
    form: { type: Object, default: () => ({}) },
  },
  computed: {
    message() {
      let message = false;
      if (
        !(this.field in this.form.$errors)
        || !(this.field in this.form)
        || this.form[this.field].$active
        || !this.form[this.field].$dirty
      ) {
        return message;
      }

      const errors = this.form.$errors[this.field];
      Object.keys(errors).some(errorKey => {
        if (typeof errors[errorKey] !== 'boolean') {
          message = errors[errorKey];
          return true;
        }
        return false;
      });
      return message;
    },
  },
};
</script>
