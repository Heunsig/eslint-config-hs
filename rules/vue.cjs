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

    /**
     * Priority A: Essential (Vue2, 3 공통)
     */
    /**
     * vue 컴포넌트 이름은 2개 이상의 단어로 만들어야 함
     * TODO: 논의 필요, 꼭 2개 이상이여야 하나?
     */
    'vue/multi-word-component-names': 'off',
    /**
     * watch 에서 Arrow 함수 사용 안 함
     */
    'vue/no-arrow-functions-in-watch': 'error',
    /**
     * computed에 비동기 메서드 포함 안 함
     */
    'vue/no-async-in-computed-properties': 'error',
    /**
     * v-html 혹은 v-text 속성을 가진 태그에 내용 포함 금지
     */
    'vue/no-child-content': 'error',
    /**
     * data()에 computed 속성 사용 금지
     */
    'vue/no-computed-properties-in-data': 'error',
    /**
     * props, data, computed, methods 에서 중복된 키 사용 안 함
     */
    'vue/no-dupe-keys': 'error',
    /**
     * v-if 와 v-else-if에서 중복되는 조건식 금지
     */
    'vue/no-dupe-v-else-if': 'error',
    /**
     * 중복되는 attr 사용 금지
     * TODO: option에 대해서 논의 필요
     */
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: false,
        allowCoexistStyle: false,
      },
    ],
    /**
     * <script setup>에서 export 사용 안 함
     */
    'vue/no-export-in-script-setup': 'error',
    /**
     * props 수정 못 함
     */
    'vue/no-mutating-props': 'error',
    /**
     * <template>내에서 잘못된 문법 사용 금지
     */
    'vue/no-parsing-error': 'error',
    /**
     * ref로 생성된 변수를 직접 사용 금지, 항상 value를 통해 사용
     */
    'vue/no-ref-as-operand': 'error',
    /**
     * 컴포넌트 name으로 예약어 사용 안 함
     */
    'vue/no-reserved-component-names': 'error',
    /**
     * 예약어 사용 금지
     */
    'vue/no-reserved-keys': 'error',
    /**
     * 예약어 props로 사용 금지
     */
    'vue/no-reserved-props': 'error',
    /**
     * setup에서 props destructuring 금지
     */
    'vue/no-setup-props-destructure': 'error',
    /**
     * 컴포넌트의 data 속성 값은 함수여야함
     */
    'vue/no-shared-component-data': 'error',
    /**
     * computed내 에서 값 수정 금지
     */
    'vue/no-side-effects-in-computed-properties': 'error',
    /**
     * <template>에 key 속성 사용 안 함
     */
    'vue/no-template-key': 'error',
    /**
     * <textarea>내에 {{message}}사용 안 함. v-model을 사용
     */
    'vue/no-textarea-mustache': 'error',
    /**
     * components에 정의된 컴포넌트는 항상 사용되어야 함
     */
    'vue/no-unused-components': 'error',
    /**
     * v-for directive에 정의돈 변수 혹은 scoped 속성은 항상 사용되어야 함
     */
    'vue/no-unused-vars': 'error',
    /**
     * computed 속성을 함수처럼 사용 금지
     */
    'vue/no-use-computed-property-like-method': 'error',
    /**
     * 동일한 element에서 v-if, v-for 동시 사용 금지
     */
    'vue/no-use-v-if-with-v-for': 'error',
    /**
     * <template>에 유효하지 않은 속성 사용 금지
     */
    'vue/no-useless-template-attributes': 'error',
    /**
     * 컴포넌트에 v-text, v-html 사용 금지
     */
    'vue/no-v-text-v-html-on-component': 'error',
    /**
     * <component>에 :is가 항상 바인딩 되어있어야 함
     */
    'vue/require-component-is': 'error',
    /**
     * props의 값은 문자열 array가 아닌 특징을 지닌 Object 형식이여야함
     * TODO: 논의 필요, typescript를 사용하면 Object 형식은 사용안됨, alloy team에서는 off 처리
     */
    'vue/require-prop-type-constructor': 'error',
    /**
     * render 함수에 반환값이 있어야함
     */
    'vue/require-render-return': 'error',
    /**
     * v-for사용시 각 element에 v-bind:key 속성이 있어야함
     */
    'vue/require-v-for-key': 'error',
    /**
     * prop 에서 default 값은 Prop Type과 타입이 일치해야됨
     * TODO: 논의 필요, typescript를 사용하면 Object 형식은 사용안됨, alloy team에서는 off 처리
     */
    'vue/require-valid-default-prop': 'error',
  }
}