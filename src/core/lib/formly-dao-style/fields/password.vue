<template>
  <field-item :to="to">
    <div class="dao-input-password">
      <input
        class="dao-control"
        :type="inputType"
        autocomplete="false"
        v-model="model[field.key]"
        :placeholder="getAtts(to.atts, 'placeholder')"
        :disabled="to.disabled"
      />
      <span
        role="button"
        class="input_icon"
        :class="eyeClass"
        @click="toggle">
      </span>
    </div>
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

  props: {
    type: {
      type: String,
      default: 'password',
    },
  },

  data() {
    return {
      masked: true,
    };
  },

  computed: {
    inputType() {
      return this.masked ? 'password' : 'text';
    },

    eyeClass() {
      return `icon_eye${this.masked ? '-slash' : ''}`;
    },
  },

  methods: {
    toggle() {
      this.masked = !this.masked;
    },
  },
};
</script>

<style lang="scss">
.dao-input-password {
  position: relative;
}

.input_icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: absolute;
  right: 21px;
  top: 8px;
  cursor: pointer;

  &.icon_eye-slash {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPHRpdGxlPmljb25fPC90aXRsZT4KICA8ZyBpZD0iZXllLXNsYXNoIj4KICAgIDxwYXRoIGQ9Ik0yNS45MDksOS42MjYsMjIuNTM4LDEzQTcuMTksNy4xOSwwLDAsMSwxMywyMi41MzhsLTIuNTUxLDIuNTUxQTEzLjMyNCwxMy4zMjQsMCwwLDAsMTYsMjYuNEMyNC44MzYsMjYuNCwzMiwxNiwzMiwxNkEzMy4zMjMsMzMuMzIzLDAsMCwwLDI1LjkwOSw5LjYyNloiLz4KICAgIDxwYXRoIGQ9Ik0yNy4yOTMsMy4yOTNsLTQuMzMsNC4zM0ExNC4yMjcsMTQuMjI3LDAsMCwwLDE2LDUuNkM3LjE2Myw1LjYsMCwxNiwwLDE2YTMyLjY0MSwzMi42NDEsMCwwLDAsNy4zMDUsNy4yODFMMy4yOTMsMjcuMjkzbDEuNDE0LDEuNDE0LDI0LTI0Wk04LjgsMTZhNy4xOSw3LjE5LDAsMCwxLDExLjUyOS01Ljc0M0wxOC4yNCwxMi4zNDZhNC4yOCw0LjI4LDAsMCwwLTUuODk1LDUuODk0bC0yLjA4OCwyLjA4OUE3LjE1NSw3LjE1NSwwLDAsMSw4LjgsMTZaIi8+CiAgICA8cGF0aCBkPSJNMTUuMzA1LDIwLjIzYTQuMjI2LDQuMjI2LDAsMCwwLDQuOTI1LTQuOTI1WiIvPgogIDwvZz4KPC9zdmc+Cg==");
  }
  &.icon_eye {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8dGl0bGU+aWNvbl9leWU8L3RpdGxlPgogIDxwYXRoIGQ9Ik05LjM1OCw2LjMzM0EyLjE1MSwyLjE1MSwwLDEsMCwxMC4xNSw4SDhaTTgsNC40QTMuNiwzLjYsMCwxLDEsNC40LDgsMy42LDMuNiwwLDAsMSw4LDQuNFpNOCwyLjhDMy41ODIsMi44LDAsOCwwLDhzMy41ODIsNS4yLDgsNS4yUzE2LDgsMTYsOCwxMi40MTgsMi44LDgsMi44WiIgZmlsbD0iIzIzMTgxNSIvPgo8L3N2Zz4K");
  }
}
</style>
