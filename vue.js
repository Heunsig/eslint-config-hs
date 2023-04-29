/**
 * Heunsig ESLint for vue
 * Vue 2,3 공통으로 적용되는 ESLint 룰입니다.
 */

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#-options
    // parser: {
    //   js: '@babel/eslint-parser',
    //   jsx: '@babel/eslint-parser',
    //   ts: '@typescript-eslint/parser',
    //   tsx: '@typescript-eslint/parser',
    //   /**
    //    * "<template>"은 설정되어 있지 않으면 <script lang="...">의
    //    * lang에 따라 자동으로 결정되어짐. 그래서 설정 안하는게 유연함.
    //    */
    //   // "<template>": "espree"
    // },
    extraFileExtensions: ['.vue'],
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
    /**************
     * Base Rules *
     **************/
    /**
     * <template> 에서 eslint-disable-next-line 등의 주석 사용 지원
     */
    'vue/comment-directive': 'error',
    /**
     * no-unused-vars jsx에서 처리되지 않는 문제 수정
     */
    'vue/jsx-uses-vars': 'error',

    /****************************************
     * Priority A: Essential (Vue2, 3 공통) *
     ****************************************/

    /**
     * vue 컴포넌트 이름은 2개 이상의 단어로 만들어야 함
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
     * props의 값은 문자열 array가 아닌 특징을 지닌 생성자 형식이여야함
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
     */
    'vue/require-valid-default-prop': 'error',
    /**
     * computed에는 반환 값이 항상 있어야됨
     */
    'vue/return-in-computed-property': 'error',
    /**
     * emits 메스드에 반환 값이 항상 있어야됨
     */
    'vue/return-in-emits-validator': 'error',
    /**
     * v-on:click이 Element에 두개 이상 붙어있을 때 하나는 반드시 exact modifier가 붙어 있어야 함
     * <button @click="foo" @click.ctrl="foo"></button> [X]
     * <button @click.exact="foo" @click.ctrl="foo"></button> [O]
     */
    'vue/use-v-on-exact': 'error',
    /**
     * 유효한 Attribute 명을 사용해야됨
     * <p -def></p> [X],  <p foo-bar></p> [O]
     */
    'vue/valid-attribute-name': 'error',
    /**
     * defineEmits 유효한 방식으로 사용해야됨
     */
    'vue/valid-define-emits': 'error',
    /**
     * defineProps 유효한 방식으로 사용해야됨
     */
    'vue/valid-define-props': 'off',
    /**
     * nextTick 유효한 방식으로 사용해야됨
     */
    'vue/valid-next-tick': 'error',
    /**
     * template 유효한 방식으로 사용해야됨
     */
    'vue/valid-template-root': 'error',
    /**
     * v-bind 유효한 방식으로 사용해야됨
     * <div v-bind/> [X] <div v-bind="foo"/> [O]
     * <div :aaa/> [X] <div v-bind:aaa="foo"/> [O]
     * <div v-bind:aaa.bbb> [X]
     * <>
     */
    'vue/valid-v-bind': 'error',
    /**
     * v-cloak 유효한 방식으로 사용해야됨
     * <div v-cloak:aaa/> [X]
     * <div v-cloak.bbb/> [X]
     * <div v-cloak="ccc"/> [X]
     * <div v-cloak/> [O]
     */
    'vue/valid-v-cloak': 'error',
    /**
     * v-else-if 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-else-if': 'error',
    /**
     * v-else 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-else': 'error',
    /**
     * v-for 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-for': 'error',
    /**
     * v-html 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-html': 'error',
    /**
     * v-if 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-if': 'error',
    /**
     * v-model 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-model': 'error',
    /**
     * v-on 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-on': 'error',
    /**
     * v-once 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-once': 'error',
    /**
     * v-pre 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-pre': 'error',
    /**
     * v-show 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-show': 'error',
    /**
     * v-slot 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-slot': 'error',
    /**
     * v-text 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-text': 'error',

    /***************************************************
     * Priority B: Strongly Recommended (Vue2, 3 공통) *
     **************************************************/
    /**
     * Custom attribute 속성 스타일을 대시바 스타일로 항상 사용
     */
    'vue/attribute-hyphenation': ['error', 'always'],
    /**
     * 컴포넌트 name 속성은 PascalCase로 사용
     */
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    /**
     * 컴포넌트 attribute 줄바꿈 스타일
     * 컴포넌트에 attribute 적용 시 한 줄로만 작성 혹은 첫번째 attribute가 줄바꿈으로 시작했다면 다음 attribute도 줄바꿈 필요
     */
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    /**
     * Html을 닫을 때 (>, /> 사용) 스타일 일관되게 작성
     * ✗ BAD
     * <div id="foo" class="bar"
     * >
     * <div
     *  id="foo"
     *  class="bar">
     *
     * ✓ GOOD
     * <div id="foo" class="bar">
     * <div
     *  id="foo"
     *  class="bar"
     * >
     */
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    /**
     * html을 닫을 때 간격 스타일
     * @reason selfClosingTag의 경우도 크게 막을 필요 없을 듯 함. 너무 엄격한 듯
     */
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
    /**
     * html end tag가 필요한 html element는 항상 end tag 사용
     */
    'vue/html-end-tags': 'error',
    /**
     * TODO: 설명 주석 필요
     */
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    /**
     * html 속성에 쌍다옴표 사용
     */
    'vue/html-quotes': ['error', 'double'],
    /**
     * self closing 가능한 html은 self closing 하기
     * @reason 너무 엄격함. 기존 코드를 너무 많이 수정해야 될 수도 있어서 off 처리
     */
    'vue/html-self-closing': 'off',
    /**
     * 단일 라인 최대 attribute 갯수
     * @reason 너무 엄격함
     */
    'vue/max-attributes-per-line': 'off',
    /**
     * HTML Tag 시작과 끝에 줄바꿈 있어야함
     * @reason 너무 엄격함
     */
    'vue/multiline-html-element-content-newline': 'off',
    /**
     * {{}}내 앞,뒤에 간격 띄움
     */
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    /**
     * tag내 다중 간격 띄움 안 함. attribute의 값으로 Object 사용 시 다중 간격 띄움 가능
     */
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: true,
    }],
    /**
     * attribute의 "=" 앞,뒤 간격 띄움 여부
     * TODO: 주석 수정 필요
     */
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    /**
     * 부모 스코프에서 사용된 변수 자식 스코프에서 사용 안 함
     */
    'vue/no-template-shadow': 'error',
    /**
     * 한 파일에 하나의 컴포넌트 요소만 들어가야함
     */
    'vue/one-component-per-file': 'error',
    /**
     * props 정의 시 camelCase로만 작성
     */
    'vue/prop-name-casing': ['error', 'camelCase'],
    /**
     * props 정의 시 prop이 reuqired가 아닐 경우 default 설정 필요
     * @reason default 설정을 안해도 undefined가 되기 때문에 괜찮음
     */
    'vue/require-default-prop': 'off',
    /**
     * props 정의 시 각 prop 타입 설정을 해야됨
     * @reason 기존 코드에서 props에 타입을 정하지 않은 부분이 많아서 off 처리
     */
    'vue/require-prop-types': 'off',
    /**
     * tag 내 전,후 줄바꿈 있어야함
     * @reason 너무 엄격
     */
    'vue/singleline-html-element-content-newline': 'off',
    /**
     * v-bind 대신 : 만 사용
     */
    'vue/v-bind-style': 'off',
    /**
     * v-on:click 대신 @ 만 사용
     */
    'vue/v-on-style': 'off',
    /**
     * v-slot:one 대신 줄임말 #one 사용하기
     */
    'vue/v-slot-style': 'off',

    /*****************************************
     * Priority C: Recommended (Vue2, 3 공통) *
     *****************************************/
    /**
     * attribute 순서
     * @reason 자유롭게 하는게 더 명확 할 때 있음
     */
    'vue/attributes-order': 'off',
    /**
     * <script>, <template>, <style>순으로 정렬
     */
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
    /**
     * 불필요한 <template> 사용 안 함
     */
    'vue/no-lone-template': 'error',
    /**
     * scoped slots는 하나의 인자만 올 수 있음
     */
    'vue/no-multiple-slot-args': 'error',
    /**
     * v-html 사용 안 함
     * @reason v-html 사용해야되는 경우가 있음
     */
    'vue/no-v-html': 'off',
    /**
     * 컴포넌트 속성들은 일정한 순서대로 가져가야함 (Option API일 경우 해당됨)
     */
    'vue/order-in-components': 'error',
    /**
     * template 내에서 this 사용 금지
     */
    'vue/this-in-template': 'error',

    /********************************
     * Uncategorized (Vue2, 3 공통) *
     ********************************/
    // TODO: Uncategorized 에 해당하는 룰들 Vue2,3 모두 적용되도 괜찮은지 확인 필요
    /**
     * <script>에 lang 속성이 항상 있어야함
     */
    'vue/block-lang': 'off',
    /**
     * TODO: 룰 주석 추가
     */
    'vue/block-tag-newline': 'error',
    /**
     * 컴포넌트의 API 스타일 지정 (Option, Composition)
     * @reason 개발자가 스타일에 맞게
     */
    'vue/component-api-style': 'off',
    /**
     * 컴포넌트 이름 스타일
     */
    'vue/component-name-in-template-casing': 'off',
    /**
     * 컴포넌트 선언 시 컴포넌트 이름 스타일 제한 (Option API 사용 시)
     */
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    /**
     * Custom 이벤트 이름 스타일
     */
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    /**
     * defineEmits에서 emit 정의 스타일 (setup lang="ts" 일 경우 룰 적용)
     */
    'vue/define-emits-declaration': ['error', 'type-based'],
    /**
     * defineEmits과 defineProps 순서
     */
    'vue/define-macros-order': 'off',
    /**
     * defineProps에서 props 정의 스타일 (setup lang="ts" 일 경우 룰 적용)
     */
    'vue/define-props-declaration': ['error', 'type-based'],
    /**
     * button tag에 type 속성 필요
     */
    'vue/html-button-has-type': 'off',
    /**
     * HTML 주석의 <!-- 뒤에 공백이나 줄바꿈 있어야함
     */
    'vue/html-comment-content-newline': 'off',
    /**
     * HTML 주석 내 앞,뒤에 간격이 띄워져있어야함
     */
    'vue/html-comment-content-spacing': 'off',
    /**
     * HTML 주석 들여쓰기
     */
    'vue/html-comment-indent': 'off',
    /**
     * 컴포넌트의 name 속성 값과 파일이름이 동일해야 됨
     */
    'vue/match-component-file-name': 'off',
    /**
     * import 시 지정한 컴포넌트 이름을 실제 사용할 컴포넌트 이름과 동일해야 됨 (Option API 용)
     * import AppButton from './AppButton.vue'
     * components: {
     *  SomeOtherName: AppButton [X],
     *  'some-other-name': AppButton [X],
     *  AppButton: AppButton [O]
     *  'app-button': AppButton [O]
     * }
     */
    'vue/match-component-import-name': 'off',
    /**
     * 속성 사이에 줄띄움 있어야함 (Option API 용)
     */
    'vue/new-line-between-multi-line-property': 'off',
    /**
     * nextTick 사용 시 호춣할 콜백 함수 사용 스타일
     */
    'vue/next-tick-style': 'off',
    /**
     * <template> 내에서 문자열 사용 안 함
     */
    'vue/no-bare-strings-in-template': 'off',
    /**
     * prop 타입이 boolean일 경우 default 설정 안 함
     */
    'vue/no-boolean-default': 'off',
    /**
     * v-bind="$attrs"를 사용할 때 inheritAttrs 속성이 false 여야함
     */
    'vue/no-duplicate-attr-inheritance': 'error',
    /**
     * <template> <script> <style>가 비어있으면 안됨
     */
    'vue/no-empty-component-block': 'off',
    /**
     * tag의 class에 object 여러개 사용 안함
     * <div :class="[{'foo': isFoo}, {'bar': isBar}]" /> [X]
     * <div :class="[{'foo': isFoo, 'bar': isBar}]" /> [O]
     */
    'vue/no-multiple-objects-in-class': 'error',
    /**
     * 잠재적 오타 금지
     */
    'vue/no-potential-component-option-typo': 'off',
    /**
     * ref destructuring 금지
     * @reason Reactivity를 잃음
     */
    'vue/no-ref-object-destructure': 'error',
    /**
     * 필수 속성인 prop에 default 값 설정 금지
     */
    'vue/no-required-prop-with-default': 'off',
    /**
     * 지정한 block 사용 금지
     */
    'vue/no-restricted-block': 'off',
    /**
     * await 구문 이 후 지정한 함수 호출 금지
     * @reason 호출 금지할 함수 있으면 추가하면 됨. 현재 없음
     */
    'vue/no-restricted-call-after-await': 'off',
    /**
     * 지정한 옵션 사용 금지 (Option API 용)
     */
    'vue/no-restricted-component-options': 'off',
    /**
     * 지정한 Custom 이벤트 사용 금지
     */
    'vue/no-restricted-custom-event': 'off',
    /**
     * 지정한 html element 사용 금지
     */
    'vue/no-restricted-html-elements': 'off',
    /**
     * 지정한 props 사용 금지
     */
    'vue/no-restricted-props': 'off',
    /**
     * 지정한 attribute 사용 금지
     */
    'vue/no-restricted-static-attribute': 'off',
    /**
     * 지정한 v-bind 매개 변수 사용 금지
     */
    'vue/no-restricted-v-bind': 'off',
    /**
     * 지정한 스타일 속성 사용 금지
     */
    'vue/no-static-inline-styles': 'off',
    /**
     * target="_blank"속성을 사용할 경우 rel="noopener noreferrer"도 같이 지정해야됨
     */
    'vue/no-template-target-blank': 'off',
    /**
     * beforeRouteEnter 메서드 에서 this 사용 안 함 (Option API 용)
     */
    'vue/no-this-in-before-route-enter': 'error',
    /**
     * import 및 정의 되지 않은 컴포넌트 <template>에서 사용 금지
     * @reason 이 룰은 global하게 설정된 컴포넌트인지 아닌지 체크 못함
     * Global 하게 설정된 컴포넌트를 사용하지 않는 경우에만 유효한 룰
     */
    'vue/no-undef-components': 'off',
    /**
     * 정의되지 않은 속성 사용 안 함
     * @reason mixins에서 정의된 속성은 체크 못함
     */
    'vue/no-undef-properties': 'off',
    /**
     * vue 버전에 없는 구문 사용하지 않도록 방지
     */
    'vue/no-unsupported-features': 'off',
    /**
     * 정의된 모든 속성이 사용되도록 함
     * @reason mixins 같은걸 사용할 때 체크 못함
     */
    'vue/no-unused-properties': 'off',
    /**
     * 정의된 모든 ref 사용
     * @reason 다른 컴포넌트 혹은 mixin에서 정의된 것은 체크 못함
     */
    'vue/no-unused-refs': 'off',
    /**
     * 의미없는 mustache 사용 금지
     */
    'vue/no-useless-mustaches': 'error',
    /**
     * 의미없는 v-bind 사용 금지
     */
    'vue/no-useless-v-bind': 'error',
    /**
     * v-text 사용 금지
     */
    'vue/no-v-text': 'off',
    /**
     * <template> <script> <style> 사이에 줄바꿈 필요
     */
    'vue/padding-line-between-blocks': ['error', 'always'],
    /**
     * tag들 사이 줄바꿈 필요
     */
    'vue/padding-line-between-tags': 'off',
    /**
     * 컴포넌트 속성들 사이 줄바꿈 필요 (Option API 용)
     */
    'vue/padding-lines-in-component-definition': 'off',
    /**
     * prop 타입중 Boolean이 첫번째로 와야함
     */
    'vue/prefer-prop-type-boolean-first': 'off',
    /**
     * tag에서 class 사용시 static한 class와 dynamic class 분리해서 사용
     * @reason vue/no-duplicate-attributes 룰과 충돌
     */
    'vue/prefer-separate-static-class': 'off',
    /**
     * v-bind값이 true인 경우 value값 생략
     * @reason 체크박스, 라디오 박스와 같은 폼에서 true, false가 꼭 들어가야되는 상황이 있음.
     */
    'vue/prefer-true-attribute-shorthand': 'off',
    /**
     * 컴포넌트 export default 할 내용을 변수에 넣어서 export 안함 (Option API 용)
     */
    'vue/require-direct-export': 'off',
    /**
     * emits 정의할 때 함수여야 함
     */
    'vue/require-emit-validator': 'off',
    /**
     * expose가 항상 있어야함
     */
    'vue/require-expose': 'off',
    /**
     * 컴포넌트에 name 속성을 항상 지정해야됨
     */
    'vue/require-name-property': 'off',
    /**
     * props에 주석이 항상 있어야됨
     */
    'vue/require-prop-comment': 'off',
    /**
     * script 들여쓰기
     */
    'vue/script-indent': 'off',
    /**
     * props 키 순서 a-z로 해야됨
     */
    'vue/sort-keys': 'off',
    /**
     * tag의 class 값을 a-z 순으로 해야됨
     */
    'vue/static-class-names-order': 'off',
    /**
     * v-for in을 사용해야 됨
     */
    'vue/v-for-delimiter-style': 'off',
    /**
     * v-on 값에서 함수 호출 형식은 사용 안 함
     * <button v-on:click="handler()" /> [X]
     * <button v-on:click="() => handler()" /> [X]
     * <button v-on:click="handler" /> [O]
     */
    'vue/v-on-handler-style': 'off',

    /*********************************************
     * Code Style in Vue Template (Vue2, 3 공통) *
     *********************************************/
    /**
     * code-style.js와 동일한 내용을 vue template에 적용
     * @TODO: 논의 필요
     */
    'vue/array-bracket-newline': ['error', 'consistent'],
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/array-element-newline': ['error', 'consistent'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'vue/camelcase': 'off',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': 'off',
    'vue/dot-notation': 'off',
    'vue/eqeqeq': ['error', 'always'],
    'vue/func-call-spacing': ['error', 'never'],
    'vue/key-spacing': ['error', { afterColon: true, mode: 'strict' }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/max-len': 'off',
    'vue/multiline-ternary': 'off',
    'vue/no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': 'off',
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': 'off',
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-newline': ['error', { consistent: true }],
    'vue/object-curly-spacing': 'off',
    'vue/object-property-newline': 'off',
    'vue/object-shorthand': 'off',
    'vue/operator-linebreak': 'off',
    'vue/prefer-template': 'off',
    'vue/quote-props': ['error', 'consistent'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': ['error', 'never'],
  },
};