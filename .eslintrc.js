module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  globals: {},
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['prettier'],
  rules: {
    'no-useless-return': 0
  }
};
