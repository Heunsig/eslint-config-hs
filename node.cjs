module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  {
    languageOptions: {
      globals: globals.node,
    }
  },
  pluginJs.configs.recommended,
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