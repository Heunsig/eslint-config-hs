export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
  },
  stylistic.configs.customize({
    quotes: "double",
    commaDangle: "only-multiline",
    semi: true,
    blockSpacing: true,
    indent: 2,
    arrowParens: false,
    braceStyle: "stroustrup",
    quoteProps: "consistent-as-needed",
    jsx: true,
    flat: true,
  }),
]