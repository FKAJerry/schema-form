import getValue from 'lodash.get';

export default {
  props: ['form', 'field', 'model', 'to'],
  created() {
    const state = {
      $dirty: false,
      $active: false,
      $hasError: false,
    };
    this.$set(this.form, this.field.key, state);
  },
  methods: {
    runFunction(action, e) {
      if (typeof this.to[action] === 'function') this.to[action].call(this, e);
    },
    getAtts(atts, key) {
      return getValue(atts, key);
    },
    setModel(value) {
      this.model[this.field.key] = value;
    },
    getModel() {
      return this.model[this.field.key];
    },
    onFocus(e) {
      this.$set(this.form[this.field.key], '$active', true);
      this.runFunction('onFocus', e);
    },
    onBlur(e) {
      this.$set(this.form[this.field.key], '$dirty', true);
      this.$set(this.form[this.field.key], '$active', false);
      this.runFunction('onBlur', e);
    },
    onClick(e) {
      this.runFunction('onClick', e);
    },
    onChange(e) {
      this.$set(this.form[this.field.key], '$dirty', true);
      this.runFunction('onChange', e);
    },
    onKeyup(e) {
      this.runFunction('onKeyup', e);
    },
    onKeydown(e) {
      this.runFunction('onKeydown', e);
    },
    getIntegerRange() {
      let { min = -Infinity, max = Infinity } = this.to;
      if (typeof min === 'string' && min.startsWith('$')) {
        min = this.model[min.substr(1)] || min;
        if (typeof min === 'string') min = parseInt(min, 10);
      }
      if (typeof max === 'string' && max.startsWith('$')) {
        max = this.model[max.substr(1)] || max;
        if (typeof max === 'string') max = parseInt(max, 10);
      }

      return {
        min,
        max,
      };
    },
  },
  computed: {
    hasError() {
      if (
        this.form[this.field.key].$dirty === false
        || this.form[this.field.key].$active === true
      ) {
        return false;
      }
      const errors = this.form.$errors[this.field.key];
      let hasErrors = false;
      Object.keys(errors).forEach(err => {
        if (errors[err] !== false) hasErrors = true;
      });
      this.$set(this.form[this.field.key], '$hasError', hasErrors);
      return hasErrors;
    },
  },
};
