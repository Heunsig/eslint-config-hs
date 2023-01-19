/**
 * Heunsig ESLint
 * 
 * Authors:
 *  heunsig <heun3344@gmail.com>
 */

module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    /**
     * Javascript가 인정하는 범위를 넘긴 숫자 사용 금지
     * const num = 5123000000000000000000000000001 [X]
     */
    'no-loss-of-precision': 'error',
    /**
     * magic numbers 사용 안 함
     */
    'no-magic-numbers': 'off',
    /**
     * 정규식에 읽기 힘든 이모지 같은 특수문자 사용 금지
     */
    'no-misleading-character-class': 'error',
    /**
     * foo = bar = 1 와 같이 사용 금지
     * TODO: 논의 필요
     */
    'no-multi-assign': 'off',
    /**
     * 다중 라인 문자열 줄바꿈에 \ 사용 안 함
     * let str = "hello \ [X]
     *           world";
     * ----------------------------
     * let str = "hello " [O]
     *           "world";
     */
    'no-multi-str': 'error',
    /**
     * if문에 부정적 조건 사용 안 함
     * @reason 때로는 부정적 조건이 코드를 더욱 명확하게 표현할 수도 있음
     */
    'no-negated-condition': 'off',
    /**
     * 중첩된 삼항 연산자 사용 금지
     * a ? b : c ? d : e
     * @reason 코드가 어려워 지지만 그래도 막을 것까진 없을 듯 함. 사용 잘 안하는 스타일
     * TODO: 논의 필요
     */
    'no-nested-ternary': 'off',
    /**
     * 변수에 할당하지 않고 직접 new Class 금지
     * @reason new는 Class의 인스턴스를 만들기위해 사용되는 용도로 변수에 항상 할당되어야됨
     */
    'no-new': 'error',
    /**
     * new Functino 사용 안 함
     * @reason eval과 같은 격
     */
    'no-new-func': 'error',
    /**
     * class가 아닌 함수를 인스턴스화 하는 것 금지
     * var foo = new Symbol('foo'); [X], var foo = Symbol('foo'); [O]
     */
    'no-new-native-nonconstructor': 'error',
    /**
     * Object class에 new 금지
     */
    'no-new-object': 'error',
    /**
     * Symbol class에 new 금지
     */
    'no-new-symbol': 'error',
    /**
     * String, Number, Boolean class에 new 사용 금지
     */
    'no-new-wrappers': 'error',
    /**
     * 문자열에 \8 \9 사용 금지, \\8 혹은 \\9으로 사용
     * TODO: alloy team에서는 off 처리, prettier로 해결 권장했음. 그렇지만 eslint에서 error 처리해도 될 듯함
     */
    'no-nonoctal-decimal-escape': 'error',
    /**
     * Math, Json, Reflect 를 함수로 직접 호출하는 것 금지
     * var math = Math(); [X], var newJSON = new JSON(); [X], var reflect = Reflect(); [X]
     */
    'no-obj-calls': 'error',
    /**
     * 8진수 사용을 위해 0으로 시작하는 Number 사용 금지
     * @reason 컴파일 단계에서 어짜피 오류 발생함
     */
    'no-octal': 'off',
    /**
     * octal escape 사용 금지
     * @reason 컴파일 단계에서 어짜피 오류 발생함
     */
    'no-octal-escape': 'off',
    /**
     * 함수 Parameter에 값 재항당 금지
     * function foo(bar) { // [X]
     *   bar = 13;
     * }
     */
    'no-param-reassign': 'error',
    /**
     * ++, -- 사용 안 함
     */
    'no-plusplus': 'off',
    /**
     * Promise의 콜백 함수에서 직접 return 금지
     * @reason resolve, reject만 사용하면 됨
     */
    'no-promise-executor-return': 'error',
    /**
     * __proto__ 사용 금지
     * @reason __proto__ 는 폐기된 구문
     */
    'no-proto': 'error',
    /**
     * hasOwnProperty, isPrototypeOf, propertyIsEnumerable 사용 안 함
     * hasOwnProperty사용을 많이하지만 Object.hasOwn()으로 대체 가능
     * TODO: alloy team 에서는 off 시킨 내용이라 논의 필요
     */
    'no-prototype-builtins': 'error',
    /**
     * 중복 변수 정의 금지
     * @reason var 비활성화 하면 컴파일 단계에서 오류 발생하기 때문에 off 처리
     */
    'no-redeclare': 'off',
    /**
     * 정규식에 연속 공백 있는 것 금지
     */
    'no-regex-spaces': 'error',
    /**
     * 지정된 변수 export 안 함
     */
    'no-restricted-exports': 'off',
    /**
     * 지정된 전역 변수 사용 안 함
     */
    'no-restricted-globals': 'off',
    /**
     * 지정된 묘듈 import 안 함
     */
    'no-restricted-imports': 'off',
    /**
     * 지정된 Property 사용 안 함
     */
    'no-restricted-properties': 'off',
    /**
     * 지정된 Syntax 사용 안 함
     */
    'no-restricted-syntax': 'off',
    /**
     * return 문장에서 값 할당 금지
     * return foo += 2; [X]
     */
    'no-return-assign': ['error', 'always'],
    /**
     * return에 await 사용 금지
     */
    'no-return-await': 'off',
    /**
     * location.href = "javascript:void(0)"; 사용 금지
     * @reason 가끔 써야되는 상황 발생? 
     * TODO: 논의 필요
     */
    'no-script-url': 'off',
    /**
     * 자기 자신에게 자기 자신 항당 금지
     */
    'no-self-assign': 'error',
    /**
     * 자기 자신과 비교 금지
     * x === x [X]
     */
    'no-self-compare': 'error',
    /**
     * Comma 연산자 사용 금지
     */
    'no-sequences': 'error',
    /**
     * setter에 return 금지
     */
    'no-setter-return': 'error',
    /**
     * 상위 영역에서 정의된 변수 재정의 금지
     * @reason 같은 이름을 써야되는 경우가 많이 생김
     */
    'no-shadow': 'off',
    /**
     * 지정어 변수로 사용 금지
     */
    'no-shadow-restricted-names': 'error',
    /**
     * 배열에 불필요 쉼표 금지
     */
    'no-sparse-arrays': 'error',
    /**
     * 일반 문자열에 템플릿 문자열 형식 사용 금지
     * "Hello ${name}" [X], `Hello ${name}` [O]
     */
    'no-template-curly-in-string': 'error',
    /**
     * 삼항 연산자 사용 금지
     */
    'no-ternary': 'off',
    /**
     * super()전에 this 사용 안 함
     */
    'no-this-before-super': 'error',
    /**
     * throw 문자열 금지, 항상 Error 개체를 throw
     * throw "error" [X], throw new Error("error") [O]
     */
    'no-throw-literal': 'error',
    /**
     * 정의되지 않은 변수 사용 안 함
     */
    'no-undef': 'error',
    /**
     * 변수에 undefined 할당 금지
     */
    'no-undef-init': 'error',
    /**
     * undefined 사용 안함
     */
    'no-undefined': 'off',
    /**
     * 변수명에 '_' 사용 금지
     */
    'no-underscore-dangle': 'off',
    /**
     * 반복문에는 항상 조건 변수가 조정되어야 됨
     */
    'no-unmodified-loop-condition': 'error',
    /**
     * a ? false : true 대신 !a 사용
     * @reason 때로는 전자가 더 명확할때 있음
     */
    'no-unneeded-ternary': 'off',
    /**
     * return, throw, break, continue 뒤에 코드 금지
     */
    'no-unreachable': 'error',
    /**
     * 1차 반복에서 반복문 벗어나는 구문 사용 안함
     * while (foo) {  
     *  doSomething(foo);
     *  return; // [X]
     * }
     */
    'no-unreachable-loop': 'error',
    /**
     * finally에 return, throw, break, continue 사용 안함
     * @reason finally 는 try 보다 먼저 실행됨
     */
    'no-unsafe-finally': 'error',
    /**
     * in 또는 instanceof 연산자 왼쪽 변수 앞에 ! 사용 금지
     */
    'no-unsafe-negation': 'error',
    /**
     * 안전하지 않은 optional chaining 금지
     */
    'no-unsafe-optional-chaining': 'error',
    /**
     * 불필요한 표현 금지
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    /**
     * 사용하지 않는 label 금지
     * @reason label 자체가 사용 안됨
     */
    'no-unused-labels': 'off',
    /**
     * private class 멤버는 사용되어져야됨
     */
    'no-unused-private-class-members': 'error',
    /**
     * 정의된 변수는 항상 사용 되어져야됨
     */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'none',
      },
    ],
    /**
     * 선 정의 후 사용 해야됨
     * @reason var, func, class의 경우 호이스팅이 필요할 때가 있기 때문에 해제
     */
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false,
      },
    ],
    /**
     * 정규식에서 불필요한 역추적 사용 금지
     * @reason 문법적으로 문제 없지만 불필요한 역추적은 빈 문자열이랑 같기 때문에 의미가 없음
     */
    'no-useless-backreference': 'error',
    /**
     * 불필요한 call, apply 사용 금지
     */
    'no-useless-call': 'error',
    /**
     * catch에서 단순히 오류만 throw 하지 않기
     * @reason catch에서 아무 처리 없이 오류만 throw 하면 catch 사용 의미가 없음
     */
    'no-useless-catch': 'error',
    /**
     * 불필요한 computed key 금지
     * const a = { ['a']: 0 } [X]
     * const a = { a: 0 } [O]
     */
    'no-useless-computed-key': 'error',
    /**
     * 불필요한 문자열 연결 금지
     */
    'no-useless-concat': 'error',
    /**
     * 불필요한 constructor 금지
     */
    'no-useless-constructor': 'error',
    /**
     * 불필요한 이스케이프 사용 안하기
     * @reason 때로는 이스케이프 사용하는게 코드를 더 쉽게 이해하도록 도와줌
     */
    'no-useless-escape': 'off',
    /**
     * 이름 재명명 할 때 같은 이름으로 재할당 금지
     * let { foo: foo } = bar [X]
     * let { foo: boo } = bar [O]
     */
    'no-useless-rename': 'error',
    /**
     * 불필요한 return 금지
     * @reason return을 사용함으로써 nesting 조건문 피할 수 있음
     */
    'no-useless-return': 'off',
    /**
     * var 사용 안함
     * @reason let, const로 모두 대체 가능
     */
    'no-var': 'error',
    /**
     * void 사용 안함
     */
    'no-void': 'error',
    /**
     * 코멘트에 TODO, FIXME 표시 안함
     * @reason 주석에 TODO, FIXME 다는 것은 꼭 필요
     */
    'no-warning-comments': 'off',
    /**
     * with 사용 금지
     * @reason 컴파일 단계에서 어짜피 걸러짐
     */
    'no-with': 'off',
    /**
     * a = { b: b } 대신 a = { b } 로 사용
     * @reason 때에 따라 코드 구조를 더욱 명확하게 해주는 방식이 다를 수 있음
     */
    'object-shorthand': 'off',
    /**
     * 쉼표로 여러 변수 선언 금지
     * let a, b; [X]
     * --------
     * let a; [O]
     * let b; 
     */
    'one-var': ['error', 'never'],
    /**
     * a += y가 아닌 a = a + y 사용해야됨
     */
    'operator-assignment': 'off',
    /**
     * 변수 선언 후 반드시 줄 띄움 필요
     */
    'padding-line-between-statements': 'off',
    /**
     * Callback 함수로 반드시 Arrow function 사용
     * @reason Callback 함수로 Arrow function 사용이 더 이해하기 쉬움
     */
    'prefer-arrow-callback': 'error',
    /**
     * 선언 이후 수정되지 않는 변수는 반드시 const 사용
     */
    'prefer-const': 'off',
    /**
     * Destructuring 사용 권장
     */
    'prefer-destructuring': 'off',
    /**
     * Math.pow() 대신 ** 사용
     */
    'prefer-exponentiation-operator': 'off',
    /**
     * ES2018의 정규 표현식을 사용하여 그룹 이름 짓기
     * @reason 정규 표현식 이미 알아보기 힘들어서 잘 사용안하는 케이스라 굳이 막을 필요없음
     */
    'prefer-named-capture-group': 'off',
    /**
     * parseInt()가 아닌 0b11111011 사용
     * @reason 거의 나타나지 않는 상황
     */
    'prefer-numeric-literals': 'off',
    /**
     * Object.prototype.hasOwnProperty.call() 대신 Object.hasOwn() 사용
     */
    'prefer-object-has-own': 'error',
    /**
     * Object.assign의 첫번째 Parameter를 {} 사용을 금함
     */
    'prefer-object-spread': 'error',
    /**
     * Promise reject에서 문자가 아닌 Error 개체를 Parmeter로 전달
     * Promise.reject("error") [X], Promise.reject(new Error("error")) [O]
     */
    'prefer-promise-reject-errors': 'error',
    /**
     * 정규식 리터럴 사용을 정규식 생성자 보다 권장
     * Dynamic 한 정규식이 아닌 이상 /abc/와 같이 정규식 리터럴로 사용하는 것을 권장
     * new RegExp("abc", "u") [X], /abc/ [O]
     */
    'prefer-regex-literals': 'error',
    /**
     * arguments 대신 ...args 사용
     */
    'prefer-rest-params': 'off',
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