/**
 * Heunsig ESLint for Typescript
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
     * "??" 왼쪽에 non-null assertion 사용 금지
     * foo! ?? bar [X]
     * foo ?? bar [O]
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    /**
     * optional chaning 이후 non-null assertion 사용금지
     * @reason optional chaining 뒤에 있는 속성은 비어있으면 안됨
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    /**
     * non-null assertion(!) 사용 안 함
     * @reason non-null assertion 사용할 때가 있을수도 있음. 다만 사용 최대한 자제 필요
     */
    '@typescript-eslint/no-non-null-assertion': 'warn',
    /**
     * 중복 변수 정의 금지
     * @reason var만 사용안하면 컴파일 단계에서 오류처리됨. var는 사용지 처리함
     */
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    /**
     * Type 선언 시 불필요한 결합형식 혹은 교차형식 사용금지
     * type UnionAny = string | 'foo' [X]
     * @reason 해당 코드가 시스템에 영향을 끼치진 않으므로 warn 처리로 최대한 수정할 수 있도록 유도
     */
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    /**
     * commonJS 스펙인 require 사용금지
     * @reason ESM 스펙인 import 를 사용하는 것으로 통일
     */
    '@typescript-eslint/no-require-imports': 'error',
    /**
     * 지정한 모듈 가져오기 금지
     */
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    /**
     * 상위 스코프에 정의된 변수와 변수 이름이 반복되는 것을 금지
     * 함수 Parameter와 상위 스코프에 정의된 변수와 이름이 같은 경우가 많음
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    /**
     * this를 다른 변수에 할당하는 것 금지
     * @reason this를 다른 변수에 할당하는 것 보다 arrow func 사용하는 것 권장
     * TODO: base 룰에서 consistent-this 룰과 겹침 확인 필요
     */
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
      },
    ],
    /**
     * 문자열을 throw 하는 것 금지, Error 객체를 throw 해야됨
     */
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    /**
     * Type Alias 사용 안 함
     * type Foo = 'a'; [X]
     * type Bar = Foo
     * @reason 사용이 필요할 때가 있을 수 있기 때문에 굳이 막을 필요 없음
     */
    '@typescript-eslint/no-type-alias': 'off',
    /**
     * boolean 타입은 true 나 false와 비교할 수 없음
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    /**
     * 항상 ture이거나 false인 조건식 사용금지
     * TODO: 논의 필요 alloy team에서는 off 처리
     */
    '@typescript-eslint/no-unnecessary-condition': 'error',
    /**
     * namespace 스코프내에서는 내부 변수를 직접 사용하기 때문에 namespace 접두사 사용 안 함
     * TODO: 논의 필요
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    /**
     * 기본 Generic 타입이 설정되어 있는 함수나 Class를 호출할 때 
     * 신규로 선언할 Generic 타입이 기본 타입과 같은 Generic 타입 선언 안 함
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    /**
     * 불필요한 type assertion 사용 안 함
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    /**
     * 불필요한 Type 제약 사용 안 함
     * interface FooAny<T extends any> {} [X], interface FooAny<T> {} [O]
     */
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    /**
     * any 타입을 함수 Parameter로 전달하는 것 금지
     * @reason Typescript 적응을 위해 일단 any 사용 허용
     */
    '@typescript-eslint/no-unsafe-argument': 'off',
    /**
     * 변수 또는 속성의 타입을 any로 설정하는 것 금지
     * @reason Typescript 적응을 위해 일단 any 사용 허용
     */
    '@typescript-eslint/no-unsafe-assignment': 'off',
    /**
     * any 형식의 변수를 함수 Paramter로 호출하는 것을 금지
     * @reason Typescript 적응을 위해 일단 any 사용 허용
     */
    '@typescript-eslint/no-unsafe-call': 'off',
    /**
     * Class와 Interface를 병합하기 위해 같은 이름으로 선언하는 것 금지
     * Class와 Interface를 병합하기 위해선 항상 implements 사용해야 됨
     * TODO: 논의 필요, alloy team에서는 off처리 했지만 같은 이름으로 병합하게되면 코드가 복잡해질 수 있을 것 같음
     */
    '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
    /**
     * any 타입 변수에서 속성 접근 금지
     * @reason Typescript 적응을 위해 일단 any 사용 허용
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',
    /**
     * 함수에서 any 타입으로 반환 금지
     * @reason Typescript 적응을 위해 일단 any 사용 허용
     */
    '@typescript-eslint/no-unsafe-return': 'off',
    /**
     * 불필요한 표현 금지
     */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    /**
     * 정의된 변수는 항상 사용 되어져야됨
     * TODO: base rule에 적용된 것과 충돌 없는지 확인 필요
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    /**
     * 선 정의 후 사용 해야됨
     * TODO: base rule에 적용된 룰과 충돌 없는지 확인 필요
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    /**
     * 불필요한 constructor 금지
     * TODO: base rule에 적용된 룰과 충돌 없는지 확인 필요
     */
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    /**
     * 빈 내용 export 금지
     * export {} [X]
     * TODO: 논의 필요, eslint 룰에는 해당 내용 없음 확인필요
     */
    '@typescript-eslint/no-useless-empty-export': 'off',
    /**
     * 변수에 require한 모듈 할당 금지
     * @reason no-require-imports룰에서 require 사용 금지시킴
     */
    '@typescript-eslint/no-var-requires': 'off',
    /**
     * non-nullable을 표현할 때 "as" 대신 "!" 사용
     * TODO: 논의 필요, 한가지로 통일하는게 좋을 듯 함, alloy team은 off. 때에 따라 다르게 사용할 수도 있을 것 같음
     */
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    /**
     * 변수 선언 후 반드시 줄 띄움 필요
     */
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': 'off',
    /**
     * 类的构造函数参数作为类属性时，必须加上可访问性修饰符
     * Class 생성자 매개변수를 클래스의 속성(멤버)로 사용하는 경우
     * 접근 수식자(private, public, protected 등)를 추가해야됨 
     */
    '@typescript-eslint/parameter-properties': 'off',
    /**
     * as 'bar'대신 as const로 사용
     * @reason as const는 새로운 문법이라 잘 사용되지 않음
     */
    '@typescript-eslint/prefer-as-const': 'off',
    /**
     * enum 사용시 명확한 값을 할당해야됨
     * enum Status = { [X]
     *  Open = 1,
     *  Close 
     * }
     * -------------------
     * enum Status = { [O]
     *  Open = 1,
     *  Close = 2
     * }
     */
    '@typescript-eslint/prefer-enum-initializers': 'off',
    /**
     * index가 필요한 경우가 아니라면 for of 구문 사용 권장
     * @reason for of를 사용하는 것이 코드 읽기가 더 쉬움
     * TODO: 논의 필요
     */
    '@typescript-eslint/prefer-for-of': 'error',
    /**
     * 함수 타입을 정할 때 Interface형식이 아닌 Type 형식으로 작성
     * interface Example { [X]
     *   (): string;
     * }
     * -------------------------
     * type Example = () => string; [O]
     */
    '@typescript-eslint/prefer-function-type': 'error',
    /**
     * indexOf 대신 includes 사용
     * TODO: 논의 필요, 취향에 맞게 사용해도 괜찮을 것 같긴함
     */
    '@typescript-eslint/prefer-includes': 'off',
    /**
     * enum의 값들은 항상 정적 value로 할당해야 됨. 변수 할당 금지
     * @reason 컴파일 단계에서 걸러짐
     */
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    /**
     * Typescript module 정의를 위해 module 키워드 사용 안 함, namespace 사용
     * @reason js에서 module이라는 키워드 이미 사용하고 있기 때문에 error 처리함
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    /**
     * || 대신 ?? 사용
     * @reason || 사용해야 되는 경우가 있을수도 있음
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    /**
     * && 대신 optional chain 사용
     * foo && foo.a && foo.a.b && foo.a.b.c; [X]
     * foo?.a?.b?.c; [O]
     */
    '@typescript-eslint/prefer-optional-chain': 'error',
    /**
     * private 변수인데 Class 객체 생성자에서 새로운값으로 할당되는 경우가 아니라면 readonly 설정을 해야됨
     * TODO: 룰 좀 더 파악 후 주석 수정 필요
     */
    '@typescript-eslint/prefer-readonly': 'off',
    /**
     * 함수의 Parameter를 readonly로 설정해야됨
     * TODO: 논의 필요, 함수 Parameter에 값을 재할당 하는 일이 없기 때문에 readonly를 써서 방어적으로 가면 좋긴하지만 코드가 길어짐
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    /**
     * reduce를 사용할 때 두번째 Parameter에 as 사용하는 대신 Generic을 전달
     * @reason reduce 사용을 권장 안함
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    /**
     * 정규표현식에서 global flag 사용을 안할 때 String#match 보다 RegExp#exec 사용 권장
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',
    /**
     * Class 메서드의 반환값이 this 인경우 반환 타입을 this로 설정해야 됨
     */
    '@typescript-eslint/prefer-return-this-type': 'off',
    /**
     * String#startsWith, String#endsWith 사용 권장
     * TODO: 논의 필요, 하나로 통일하는게 코드가 깔끔 할 수 있음
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    /**
     * 다음 줄의 ts 오류를 무시하기 위해서 @ts-ignore 대신 @ts-expect-error 사용
     * @ts-ignore: ts 오류를 무시
     * @ts-expect-error: ts 오류를 무시, 하지만 오류가 아닌 코드 위에 사용할 경우 warning 메세지 출력
     */
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    /**
     * async 함수의 반환 값은 항상 promice여야함
     * TODO: 논의 필요
     */
    '@typescript-eslint/promise-function-async': 'off',
    /**
     * sort()를 사용할 때 항상 비교 함수 필요
     * array.sort() [X], array.sort((a, b) => a - b) [O]
     */
    '@typescript-eslint/require-array-sort-compare': 'off',
    /**
     * async 함수 내에 항상 await 구문이 있어야 함
     * TODO: 논의 필요, base 룰 과 충돌 확인 필요
     */
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    /**
     * + 를 사용할 때 왼쪽 오른쪽이 모두 string이거나 number로 같아야함
     * TODO: 논의 필요
     */
    '@typescript-eslint/restrict-plus-operands': 'off',
    /**
     * 템플릿 문자열의 변수 타입은 문자열이어야 함
     * TODO: 논의 필요
     */
    '@typescript-eslint/restrict-template-expressions': 'off',
    /**
     * await 반환 금지
     * @reason 가끔 써야되는 상황 발생
     */
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'off',
    /**
     * Union 타입 및 Intersection 타입을 a-z 순 정렬 필요
     */
    '@typescript-eslint/sort-type-constituents': 'off',
    /**
     * 조건문은 항상 true, false로 비교해야됨. null, undefined, 0, ''를 조건문으로 설정 안됨
     * TODO: 논의 필요
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',
    /**
     * Union 타입을 switch의 조건으로 사용할 때 각 Union 타입이 case에 포함되어야됨
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    /**
     * 삼중 슬래시(/)를 사용하여 파일 가져오는 것 금지
     * @reason 삼중 슬래시(/)는 이미 폐기된 구문이지만 type 선언에서는 여전히 사용됨
     */
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'always',
        lib: 'always',
      },
    ],
    /**
     * interface, type을 정할 때 속성의 타입을 항상 지정해야됨
     * TODO: 논의 필요
     */
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: true,
        variableDeclaration: false,
      },
    ],
    /**
     * TODO: 룰 해석 필요
     */
    '@typescript-eslint/unbound-method': 'off',
    /**
     * 함수가 overload될 때 두 함수가 하나로 합쳐질 수 있으면 하나로 합쳐서 사용 권장
     * function x(a: number): void; [X]
     * function x(a: string): void;
     * ------------------------------------
     * function x(a: number|string): void; [O]
     * TODO: 논의 필요
     */
    '@typescript-eslint/unified-signatures': 'error',
  }
};