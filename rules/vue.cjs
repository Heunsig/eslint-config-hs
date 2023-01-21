module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#-options
    parser: {
      "js": '@babel/eslint-parser',
      "ts": "@typescript-eslint/parser",
      /**
       * "<template>"은 설정되어 있지 않으면 <script lang="...">의 
       * lang에 따라 자동으로 결정되어짐. 그래서 설정 안하는게 유연함.
       */
      // "<template>": "espree"
    },
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      // Global 스코프에서만 return 사용할 수 없음
      globalReturn: false,
      // enable implied strict mode (if ecmaVersion >= 5)
      impliedStrict: true,
      jsx: true,
    },
    // .babelrc config 파일이 없어도 @babel/eslint-parser를 사용
    // https://github.com/babel/babel-eslint#additional-parser-configuration
    requireConfigFile: false,
    // import, export를 문서 최상위 스코프에서만 사용 가능
    allowImportExportEverywhere: false,
  },
  plugins: ['vue'],
  rules: {
    /**
     * Base Rules
     */
    /**
     * <template> 에서 eslint-disable-next-line 등의 주석 사용 지원
     * TODO: off했을 때 어떤 작용을 하는지 검토 필요, eslint vue 공식에서는 error 처리함
     */
    'vue/comment-directive': 'off',
    /**
     * no-unused-vars jsx에서 처리되지 않는 문제 수정
     */
    'vue/jsx-uses-vars': 'error',
  }
}