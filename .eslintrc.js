module.exports = {
  extends: [
    './index.js',
  ],
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      extends: [
        './typescript.js',
        './typescript-no-tsconfig.js',
      ],
      parserOptions: {
        // project: './tsconfig.json', // tsconfig 파일 등록
      },
    },
  ],
};
