/**
 * Techcenter Dev Team ESLint for vue3
 * Vue 3를 위한 ESLint 룰입니다.
 */

module.exports = {
  extends: ['./vue.js'],
  rules: {
    /*********************************
     * Priority A: Essential (Vue 3) *
     *********************************/
    /**
     * Deprecated 된 data 정의 방식 사용 안 함
     */
    'vue/no-deprecated-data-object-declaration': 'error',
    /**
     * destroyed 및 beforeDestroy 사용 안 함(Vue3에서 해당 스펙 사라짐)
     */
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    /**
     * $listeners 사용 안 함
     */
    'vue/no-deprecated-dollar-listeners-api': 'error',
    /**
     * $scopedSlots 사용 안 함
     */
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    /**
     * events api 사용 안 함
     */
    'vue/no-deprecated-events-api': 'error',
    /**
     * filter 사용 안 함
     */
    'vue/no-deprecated-filter': 'error',
    /**
     * functional template 사용 안 함
     */
    'vue/no-deprecated-functional-template': 'error',
    /**
     * <component> 컴포넌트 이외 다른 일반 HTML Element에 is 속성 사용 안 함
     */
    'vue/no-deprecated-html-element-is': 'error',
    /**
     * inline-template 속성 사용 안 함
     */
    'vue/no-deprecated-inline-template': 'error',
    /**
     * prop의 default 값 정의 할 때 this 사용 안 함
     */
    'vue/no-deprecated-props-default-this': 'error',
    /**
     * <router-link/> 에서 tag 속성 사용 안 함
     */
    'vue/no-deprecated-router-link-tag-prop': 'error',
    /**
     * scope="props" 속성 사용 안 함. v-slot:name="props" 로 대체 사용
     */
    'vue/no-deprecated-scope-attribute': 'error',
    /**
     * slot 속성 사용 안 함. v-slot으로 사용
     */
    'vue/no-deprecated-slot-attribute': 'error',
    /**
     * slot-scope 속성 사용 안 함. v-slot:name="props" 로 대체 사용
     */
    'vue/no-deprecated-slot-scope-attribute': 'error',
    /**
     * v-bind에 .sync modifier 사용 안 함
     */
    'vue/no-deprecated-v-bind-sync': 'error',
    /**
     * v-is 사용 안 함
     */
    'vue/no-deprecated-v-is': 'error',
    /**
     * .native modifier 사용 안 함
     */
    'vue/no-deprecated-v-on-native-modifier': 'error',
    /**
     * keyup, keydown 이벤트에서 keycode number modifier 사용 안 함
     * <input v-on:keyup.34="onArrowUp"> [X]
     */
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    /**
     * Vue.config.keyCodes 사용 안 함
     */
    'vue/no-deprecated-vue-config-keycodes': 'error',
    /**
     * await 구문 이 후 expose 혹은 defineExpose 호출 금지
     * @reason expose, defineExpose는 Vue 컴포넌트가 생성되면서 바로 실행 되어야 하는데
     * 만약 await 아래쪽에 있으면 컴포넌트가 expose, defineExpose 실행 하기 전 대기상태에 들어가게 되버림
     * 오류 유발 가능성이 높아짐
     */
    'vue/no-expose-after-await': 'error',
    /**
     * await 구문 이 후 lifecycle hook 사용 금지 (Option API의 setup() 용)
     * @reason lifecycle hook은 Vue 컴포넌트가 생성되면서 바로 실행 되어야 하는데
     * await구문 이후 실행되면 컴포넌트가 lifecycle hook 실행 하기 전 대기상태에 들어감
     * 오류 유발 가능성 높아짐
     */
    'vue/no-lifecycle-after-await': 'error',
    /**
     * await 구문 이 후 watch 사용 금지 (Option API의 setup() 용)
     */
    'vue/no-watch-after-await': 'error',
    /**
     * <template>을 v-for로 반복문을 돌릴 때 :key 속성을 <template>에 지정해야됨
     * * <template v-for="todo in todos"> [X]
     *   <Foo :key="todo"/>
     * </template>
     * ----------------------------------------------------
     * <template v-for="todo in todos" :key="todo"> [O]
     *   <Foo />
     * </template>
     */
    'vue/no-v-for-template-key-on-child': 'error',
    /**
     * vue 함수를 import 할 때 '@vue/*' 대신 'vue'에서 가져와야 함
     */
    'vue/prefer-import-from-vue': 'error',
    /**
     * this.$slots.default을 메소드로 사용해야됨
     */
    'vue/require-slots-as-functions': 'error',
    /**
     * transition 컴포넌트 내부에 조건 명령이 꼭 있어야함
     */
    'vue/require-toggle-inside-transition': 'error',
    /**
     * v-is 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-is': 'error',
    /**
     * v-memo 유효한 방식으로 사용해야됨
     */
    'vue/valid-v-memo': 'error',


    /*********************************
     * Priority B: Essential (Vue 3) *
     *********************************/
    /**
     * emits에 정의된 emit만 $emit()로 호출 할 수 있음
     */
    'vue/require-explicit-emits': 'error',
    /**
     * v-on, @ 통해 이벤트 연결 시 이벤트 명에 대시 사용해야됨
     */
    'vue/v-on-event-hyphenation': ['error', 'always'],
  },
};