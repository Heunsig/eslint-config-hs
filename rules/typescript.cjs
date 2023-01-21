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
    /**
     * Type 보다 Interface 선호
     * @reason Interface는 extend, merge 등이 가능
     * TODO: 논의 필요
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    /**
     * 일관된 방식으로 Type export 하기
     */
    '@typescript-eslint/consistent-type-exports': 'off',
    /**
     * import type을 사용해서 Type 유형 가져오기
     * TODO: 논의 필요
     */
    '@typescript-eslint/consistent-type-imports': 'off',
    /**
     * 기본값이 있거나 Optional한 Parameter는 항상 마지막에 위치
     */
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',
    /**
     * foo['bar']를 사용안하고 foo.bar 사용해야됨
     * @reason 필요에 따라 한가지 방식으로만 작성하면 됨
     */
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'off',
    /**
     * 함수에 명확한 반환값 Type이 선언되어 있어야함
     * @reason 명확한 반환값이 선언 안되더라도 Typescript에서 자동으로 추론해줌
     * TODO: 논의 필요
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /**
     * Class내 프로퍼티나 함수들에 접근 가능 수식어를 설정해야됨 private 혹은 public 등
     * @reason 접근 가능 수식어를 명확히 해주는 것이 Class 코드의 이해도가 높아짐
     */
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
    /**
     * export 할 함수 또는 Class의 함수들은 입출력 Parameter의 타입을 명확히 정의해야됨
     * TODO: 논의 필요
     */
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    /**
     * 변수가 정의될 때 값도 지정되어야됨
     */
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',
    /**
     * Class 멤버들 사이에 빈 한줄라인 필요
     * @reason 가독성을 위해 빈 한줄라인이 필요한 경우가 있음
     */
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    /**
     * Class 멤버의 데이터 정렬 순서
     * @reason 우선 순위:
     * 1. static > instance
     * 2. field > constructor > method
     * 3. public > protected > private
     * TODO: 검토 필요
     */
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'static-field',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'static-method',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-field',
          'protected-field',
          'private-field',
          'instance-field',
          'field',
          'constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-method',
          'protected-method',
          'private-method',
          'instance-method',
          'method',
        ],
      },
    ],
    /**
     * Interface에서 함수는 프로퍼티 스타일로 정의되어야 됨
     * TODO: 아래의 형식으로 룰을 정하는게 맞는지 확인 필요
     */
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    /**
     * Naming 컨벤션 제한
     */
    '@typescript-eslint/naming-convention': 'off',
    /**
     * Array 생성자 사용 안 함
     */
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'off',
    /**
     * toString 메서드 남용 금지
     */
    '@typescript-eslint/no-base-to-string': 'off',
    /**
     * 혼동을 주는 non-null assertion 사용 금지
     * a! == b [X], a !== b[X], a! === b[X]
     * @reason !== 의 경우 많이 사용되고 때로는 코드를 좀 더 명확하게 하기도함
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    /**
     * void를 반환하는 함수의 반환값은 사용 안 함
     * const alert = alert('Hello World')  [X]
     * const res = confirm('Are you sure?')[O]
     * @reason 코드에 영향을 주진 않아서 너무 Strict 할 필요 없을 듯 함
     */
    '@typescript-eslint/no-confusing-void-expression': 'off',
    /**
     * 중복 class 멤버 정의 금지
     * @reason 컴파일 단계에서 에러 처리됨
     */
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',
    /**
     * enum에서 중복 값 사용 금지
     */
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    /**
     * delete 시 동적 key 값 사용 금지
     * const name = 'david' [X]
     * delete member[name]
     * ----------------------
     * delete member.david [O]
     */
    '@typescript-eslint/no-dynamic-delete': 'off',
    /**
     * 빈 함수 허용 안 함
     * @reason 빈 함수를 기본값으로 설정해야되는 경우도 있음
     * TODO: 논의 필요
     */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    /**
     * 빈 Interface 사용 안 함
     */
    '@typescript-eslint/no-empty-interface': 'error',
    /**
     * any 사용 금지
     * @reason Typescript 적응 단계에서는 any 사용이 필요
     */
    '@typescript-eslint/no-explicit-any': 'off',
    /**
     * 불필요한 non-null assertion 사용 안 함
     * const bar = foo!!!.bar [X], const bar = foo!.bar [O]
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    /**
     * 예외처리 하지 않은 Promise 사용 안 함
     */
    '@typescript-eslint/no-floating-promises': 'off',
    /**
     * array에서 for in 루프 사용 안 함
     */
    '@typescript-eslint/no-for-in-array': 'off',
    /**
     * eval 사용 금지
     * TODO: 논의 필요, error 처리하는게 좋을 듯함
     */
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    /**
     * 변수 선언시 값을 바로 할당하는 경우 type을 명식적으로 작성 안 함
     * @reason 명시적으로 type 설정을 안하는게 코드 단순화 할 수 있음
     * TODO: 논의 필요
     */
    '@typescript-eslint/no-inferrable-types': 'error',
    /**
     * this가 undefined인 곳에서 this 사용 안 함
     */
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    /**
     * 무의미한 void 유형 사용 안 함
     * @reason void는 함수 반환값 타입으로만 사용하면 됨
     */
    '@typescript-eslint/no-invalid-void-type': 'error',
    /**
     * 반복문 내 함수에서 반목문 조건에 해당하는 변수 사용 금지
     * @reason let 사용하면 해결됨
     */
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    /**
     * Javascript가 인정하는 범위를 넘긴 숫자 사용 금지
     * const num = 5123000000000000000000000000001 [X]
     */
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    /**
     * magic numbers 사용 안 함
     */
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    /**
     * void가 null을 반환하는 것 금지
     */
    '@typescript-eslint/no-meaningless-void-operator': 'off',
    /**
     * Interface에서 constructor를 정의하거나 Class에서 new를 멤버로 정의 안 함
     * Alloy Team 에서는 off 처리
     */
    '@typescript-eslint/no-misused-new': 'error',
    /**
     * 잘못된 Promise 사용 금지
     * Alloy Team 에서는 off 처리
     */
    '@typescript-eslint/no-misused-promises': 'error',
    /**
     * Typescript의 namespace 기능 사용 안 함
     * @reason es6의 모듈방식으로 가져오는게 일반적임
     */
    '@typescript-eslint/no-namespace': 'error',
    /**
     * null이 아닌 
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  }
};