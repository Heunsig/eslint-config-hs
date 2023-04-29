/**
 * Heunsig ESLint for vue2
 * Vue 2를 위한 ESLint 룰입니다.
 */

module.exports = {
  extends: ['./vue.js'],
  rules: {
    /*********************************
     * Priority A: Essential (Vue 2) *
     *********************************/
    /**
     * v-model에 사용자 정의 modifier 적용 금지
     */
    'vue/no-custom-modifiers-on-v-model': 'error',
    /**
     * template 내 다중 root 사용 금지
     */
    'vue/no-multiple-template-root': 'error',
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
    'vue/no-v-for-template-key': 'error',
    /**
     * v-model에 사용자 정의 argument 사용 금지
     * <MyComponent v-model:aaa="foo"/> [X]
     */
    'vue/no-v-model-argument': 'error',
    /**
     * model 정의 속성으로 잘못된 Key 사용 금지
     */
    'vue/valid-model-definition': 'error',
    /**
     * v-bind 잘못된 방식으로 사용 금지
     * @reason 해당 룰은 이미 "vue/no-parsing-error" 여기서 걸러짐
     */
    'vue/valid-v-bind-sync': 'off',
  },
};