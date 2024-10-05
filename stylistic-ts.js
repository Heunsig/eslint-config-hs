import stylisticCore from "./stylistic-core.js";

export default [
  ...stylisticCore,
  {
    rules: {
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