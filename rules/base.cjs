/**
 * Heunsig ESLint
 * 
 * Authors:
 *  heunsig <heun3344@gmail.com>
 */

module.exports = {
  rules: {
    /**
     * apply 대신 ...args 사용
     */
    'prefer-spread': 'off',
    /**
     * 'name:' + username 대신 `name ${username}`으로 사용
     * @reason 때에 따라 앞의 형식 사용할 필요도 있음
     */
    'prefer-template': 'off',
    /**
     * parseInt는 두번째 Parameter 필요함
     */
    radix: 'error',
    /**
     * 연산자 뒤에 await나 yield 사용안하기
     * TODO: 이유 검토 필요 https://github.com/eslint/eslint/issues/11899
     */
    'require-atomic-updates': 'off',
    /**
     * async 함수에 await문이 있어야됨
     * TODO: 논의 필요
     */
    'require-await': 'off',
    /**
     * 정규표현식에 반드시 u 표시해야 됨
     */
    'require-unicode-regexp': 'off',
    /**
     * generator 함수 내에 yield가 있어야됨
     */
    'require-yield': 'error',
    /**
     * Imart를 a-z 순서대로 정의
     */
    'sort-imports': 'off',
    /**
     * Key 값을 a-z 순서로 정의
     */
    'sort-keys': 'off',
    /**
     * 항상 a-z 순서로 변수 선언
     */
    'sort-vars': 'off',
    /**
     *  한줄 혹은 다중 주석과 코멘트 사이에 공백 있어야 됨
     */
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
        block: {
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    /**
     * 'strict' 사용 금지
     * @reason ESLint에서 걸러짐
     */
    strict: ['error', 'never'],
    /**
     * Symbol을 만들 때 첫번째 인자가 들어가야됨
     */
    'symbol-description': 'error',
    /**
     * foo === NaN대신 isNaN(foo)를 사용
     */
    'use-isnan': 'error',
    /**
     * typeof는 "undefined", "object", "boolean", "number", "string", "function", "symbol", and "bigint" 만 비교 되어야 됨
     */
    'valid-typeof': 'error',
    /**
     * var 항상 상위에 선언되어야 됨
     * @reason var 사용 금지
     */
    'vars-on-top': 'off',
    /**
     * if (2 === foo) 사용 [X], if (foo === 2) [O]
     */
    yoda: [
      'error',
      'never',
      {
        onlyEquality: true,
      },
    ],
  }
};