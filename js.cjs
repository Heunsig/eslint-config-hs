const globals = require("globals");
const pluginJs = require("@eslint/js");
const stylistic = require("@stylistic/eslint-plugin");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
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