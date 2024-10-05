import stylistic from "@stylistic/eslint-plugin";

export default [
  stylistic.configs.customize({
    quotes: "single",
    commaDangle: "only-multiline",
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