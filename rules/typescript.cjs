/**
 * Heunsig ESLint
 * 
 * Authors:
 *  heunsig <heun3344@gmail.com>
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    /**
     * overload된 함수는 항상 함께 써야함
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    /**
     * 배열 타입을 설정하려면 Array<T> 또는 T[]로 써야함
     * @reason 융통성있게 사용하는 것이 좋을 듯 함
     * TODO: 논의 필요
     */
    '@typescript-eslint/array-type': 'off',
    /**
     * then 메서드가 없는 개체에 await 사용 금지
     * TODO: 논의 필요, then이 없으면 await 사용의미가 없음
     */
    '@typescript-eslint/await-thenable': 'off',
    /**
     * ts-comment 사용안함 ex) // @ts-ignore // @ts-nocheck // @ts-check
     * TODO: 논의 필요
     */
    '@typescript-eslint/ban-ts-comment': 'error',
    /**
     * tslint: disable-next-line 과 같은 주석 사용 안 함
     */
    '@typescript-eslint/ban-tslint-comment': 'warn',
    /**
     * 지정된 몇몇 타입 사용 금지
     */
    '@typescript-eslint/ban-types': 'error',
    /**
     * 클래스 내 getter 메서드의 반환 값이 단순 문자열이라면 getter 메서드 대신 readonly modifier를 사용합니다,.
     */
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    /**
     * Map 또는 Set을 사용하는 경우 생성자에서 Generic으로 유형을 정의해야됨
     */
    '@typescript-eslint/consistent-generic-constructors': 'warn',
    /**
     * 내장된 Record<K, T>를 사용하여 Key,Value 타입을 설정합니다.
     * record: type Foo = Record<string, unknown>
     * index-signature: type Foo = { [key: string]: unknown }
     * @reason 융통성있게 사용하면 될 듯 함
     */
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    /**
     * 타입 강제 캐스팅은 항상 "value as Type"을 사용, "<Type>value" 사용 안 함.
     * Object 리터럴에 대해 타입 강제 캐스팅은 금지함
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
  }
};