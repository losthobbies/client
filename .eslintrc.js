module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: 0,
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "eslint-disable-next-line": "off",
    "html-indent": "off"
  }
};
