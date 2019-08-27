module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      // 'error',
      'always',
      {
        js: 'never',
        vue: 'never',
        ts: 'never',
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['warn', 'as-needed'],
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['off', 'as-needed'],
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'error',
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['off'],
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['off'],
    // https://eslint.org/docs/rules/no-console
    'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
    'linebreak-style': 'off',

    // vue lint
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never',
        },
        svg: 'any',
        math: 'always',
      },
    ],
    camelcase: ['off'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
