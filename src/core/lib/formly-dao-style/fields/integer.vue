<template>
  <field-item :to="to">
    {{ model[field.key] }}
    <dao-input
      ref="integer"
      type="number"
      :class="to.classes"
      :id="to.id ? to.id : null"
      :placeholder="getAtts(to.atts, 'placeholder')"
      :status="status"
      :message="message"
      :disabled="to.disabled"
      v-model.number="model[field.key]"
      icon-inside
      @blur="onBlur"
      @focus="onFocus"
      @click="onClick"
      @change="onChange"
      @keyup="onKeyup"
      @keydown="onKeydown"
      :append-to-body="false"
      v-formly-atts="to.atts"
      v-formly-input-type="to.inputType">
      <span
        v-if="to.unit"
        slot="append">
        {{ to.unit }}
      </span>
    </dao-input>
  </field-item>
</template>

<script>
import baseField from './baseField';
import FieldItem from '../components/field-item';

export default {
  components: {
    FieldItem,
  },

  mixins: [baseField],

  data() {
    return {
      status: '',
      message: '',
    };
  },

  methods: {
    onChange(e) {
      if (e === '') return;

      if (!this.checkIsValidNumber(e)) {
        this.status = 'error';
        this.message = '请输入合法的字符';
      } else {
        this.status = '';
        this.message = '';
      }

      this.$set(this.form[this.field.key], '$dirty', true);
      this.runFunction('onChange', e);
    },

    checkIsValidNumber(input) {
      if (input === '-') {
        this.setModel(input);
        return true;
      }

      const integer = parseInt(input, 10);
      if (Number.isNaN(integer)) {
        this.setModel('');
        return false;
      }

      const { min = -Infinity, max = Infinity } = this.getIntegerRange();
      if (integer >= min && integer <= max) {
        this.setModel(integer);
        return true;
      }

      this.setModel(input);
      return false;
    },
  },
};
</script>
