import stylistic from "@stylistic/eslint-plugin";

export default [
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
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/member-delimiter-style': ['error', {
        'multiline': {
          'delimiter': 'comma',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false,
        },
        'overrides': {
          'interface': {
            'multiline': {
              'delimiter': 'semi',
              'requireLast': true,
            },
          },
        },
      }],
    }
  }
]