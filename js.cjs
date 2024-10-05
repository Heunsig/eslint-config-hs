const pluginJs = require("@eslint/js");
const stylistic = require("@stylistic/eslint-plugin");

module.exports = [
  {
    ignores: [
      'node_modules/*',
      'dist/*',
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  pluginJs.configs.recommended,
  stylistic.configs.customize({
    quotes: "single",
    commaDangle: "always-multiline",
    semi: true,
    blockSpacing: true,
    indent: 2,
    arrowParens: false,
    braceStyle: "1tbs",
    quoteProps: "consistent-as-needed",
    jsx: true,
    flat: true,
  }),
  {
    rules: {
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    }
  }
]