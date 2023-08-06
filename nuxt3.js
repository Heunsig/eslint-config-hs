/**
 * Heunsig ESLint for nuxt3
 * Nuxt3를 위한 ESLint 룰입니다.
 */

module.exports = {
  extends: [
    './vue3.js', // vue3.js에 vue.js 포함되어 있음
    'plugin:nuxt/recommended', // 주로 Option API에서 사용되지 말아야 하는 룰들이 정의됨
  ],
  rules: {
    // Nuxt3의 경우 auto-import 때문에 undefined된 모듈을 사용하는 경우가 많음
    // Typescript 프로젝트에서 no-undef는 typescript check로 검사하는 것이 좋음
    'no-undef': 'off',
  },
};
