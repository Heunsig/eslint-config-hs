/**
 * Heunsig ESLint ESLint for code style
 * Javascript 실행 과정에서 문제가 생기는 것을 방지하기 위함이 아닌
 * 코드가 개발자들에게 어떻게 보일지에 대한 것들을 고려한 룰입니다.
 */

module.exports = {
  plugins: [
    '@stylistic',
  ],
  rules: {
    /**
     * TODO: nonblock-statement-body-position과 같이 논의 필요
     * @reason 단일 라인 일 때에 {} 쓰는 것이 코드가 더 명확 할 때가 있음.
     * 개발자 스타일에 맞게 알아서 사용하는 것이 좋을 듯함
     * NOTE: stylistic 룰에 포함 안되는 룰
     */
    'curly': 'off',
    /**
     * 한 줄 코멘트 위치
     * @reason 코멘트를 자유롭게 쓰는게 코드 이해하기 더 쉬움
     * NOTE: stylistic 룰에 포함 안되는 룰
     */
    'line-comment-position': 'off',
    /**
     * TODO: 어떤 룰인지 좀 더 파악 필요
     * @reason 해당  구문 사용할 일 없을 듯 함
     * NOTE: stylistic 룰에 포함 안되는 룰
     */
    'unicode-bom': ['error', 'never'],
    /**
     * Array 괄호 시작, 끝 부분에 줄바꿈 여부
     * @now 줄바꿈이 있으나 없으나 일관되게 사용
     */
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    /**
     * Array 괄호 시작, 끝 부분에 간격 띄움 여부
     * @now 간격 안 띄움
     */
    '@stylistic/array-bracket-spacing': 'off',
    /**
     * Array의 각 아이템 사이 줄바꿈 여부
     * @now 줄바꿈을 쓰거나 안쓰거나 일관되게 사용
     */
    '@stylistic/array-element-newline': ['error', 'consistent'],
    /**
     * Arrow 함수의 Arguments들 소괄호 감싸기 여부
     * @now 소괄호가 필요할 때만 감싸면됨
     */
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    /**
     * Arrow 함수에서 arrow 앞, 뒤 간격 띄움 여부
     * @now arrow 앞, 뒤 간격 필요
     */
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
    /**
     * 코드 블록({}) 내에서 코드 시작, 끝 부분 간격 띄움 여부
     * @now 코드 블록 내 코드 시작, 끝 부분 간격 띄움 필요
     */
    '@stylistic/block-spacing': ['error', 'always'],
    /**
     * 코드 블록({})에 대해 일관된 스타일 적용
     * @now stroustrup 스타일 코드 블록 사용을 기본으로 함. 단일 라인 코드 블록도 허용
     */
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    /**
     * 뒤에 있는 콤마 스타일
     * @now 다중 라인일 경우 항상 콤마가 뒤에 붙어있어야함
     */
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    /**
     * 콤마 앞, 뒤 간격 띄움 여부
     * @now 콤마 뒤에 간격 띄움
     */
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],
    /**
     * 콤마 스타일
     * @now 콤마는 항상 뒤에 위치
     */
    '@stylistic/comma-style': ['error', 'last'],
    /**
     * Computed 속성 사용 시 괄호안 간격 띄움 여부
     * obj[ 'foo' ] - X, obj['foo'] - O
     * @now 간격 없음
     */
    '@stylistic/computed-property-spacing': ['error', 'never'],
    /**
     * TODO: 해당 룰 파악필요
     */
    '@stylistic/dot-location': 'off',
    /**
     * 파일 마지막 부분 줄바꿈 추가 여부
     * @now 파일 마지막 부분에 줄바꿈 추가 (LF)
     */
    '@stylistic/eol-last': ['error', 'always'],
    /**
     * 함수 명과 함수 호출 구문 "()" 사이 간격 띄움 여부
     * @now 간격 띄움 없음
     */
    '@stylistic/func-call-spacing': ['error', 'never'],
    /**
     * 함수 호출 시 Arguments 사이 줄바꿈 여부
     * @now 줄바꿈 추가를 하던 안하던 한가지 방식으로 통일하면 됨
     */
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    /**
     * 함수 Parameter 사이 줄바꿈 여부
     * @now 줄바꿈 추가 하던 안하던 한가지 방식으로 통일하면 됨
     */
    '@stylistic/function-paren-newline': ['error', 'consistent'],
    /**
     * Generator 생성 시 * 모양 위치
     * @now 사용안함
     * @reason generator star는 잘 사용 안하는 코드로 off 처리
     */
    '@stylistic/generator-star-spacing': 'off',
    /**
     * Arrow 함수의 코드 블록 위치
     * @now
     * (foo) => // Error
     *    bar
     * -----------------
     * (foo) => bar // OK
     */
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    /**
     * 들여쓰기 간격
     * @now 2칸
     */
    '@stylistic/indent': ['error', 2],
    /**
     * jsx 에사 따옴표 스타일
     * @now 쌍따옴표 사용
     */
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    /**
     * Object에서 Key, value 사이 간격 스타일
     * @now 콜론 뒤에 한칸 띄움
     */
    '@stylistic/key-spacing': ['error', { afterColon: true, mode: 'strict' }],
    /**
     * Javascript 키워드들 앞, 뒤 간격 여부 e,g await, break, case, const clas ...
     * @now 키워드들 앞,뒤에 한 칸씩 간격 필요
     */
    '@stylistic/keyword-spacing': ['error', { before: true, after: true }],

    /**
     * line break 스타일
     * @now unix 스타일
     * @reason 빌드, 배포가 Unix 환경에서 진행됨
     */
    '@stylistic/linebreak-style': ['error', 'unix'],
    /**
     * 코멘트 위, 아래 줄바꿈 추가 여부
     * @reason 코멘트는 자유롭게 쓰는게 코드 이해하기 더 쉬움
     */
    '@stylistic/lines-around-comment': 'off',
    /**
     * Class 속성들 사이 줄바꿈 추가 여부
     */
    '@stylistic/lines-between-class-members': 'off',
    /**
     * 한줄 최대 글자 수
     * @reason 프로젝트마다 따로 설정
     */
    '@stylistic/max-len': 'off',
    /**
     * 한 줄에 올 수 있는 최대 코드 구문 수
     */
    '@stylistic/max-statements-per-line': 'off',
    /**
     * 삼항 연산식 사용 시 피연산자 사이 줄바꿈 여부
     */
    '@stylistic/multiline-ternary': 'off',
    /**
     * Class 생성자 생성 시 Arguments가 없을 경우 () 사용 여부
     * @now Class 생성자 생성 시 항상 () 붙임
     */
    '@stylistic/new-parens': ['error', 'always'],
    /**
     * 메서드 체인에서 각 메서드 마다 줄바꿈 추가 여부
     * @reason 때에 따라 맞게 사용
     */
    '@stylistic/newline-per-chained-call': 'off',
    /**
     * TODO: 설명 추가
     */
    '@stylistic/no-confusing-arrow': 'off',
    /**
     * 불필요한 소괄호 사용 안 함
     */
    '@stylistic/no-extra-parens': 'off',
    /**
     * 불필요한 세미콜론 사용 금지
     */
    '@stylistic/no-extra-semi': 'error',
    /**
     * TODO: 설명 추가
     */
    '@stylistic/no-floating-decimal': 'off',
    /**
     * TODO: 설명 추가
     */
    '@stylistic/no-mixed-operators': 'off',
    /**
     * tab, space 혼합하여 사용 안 함
     * @now space만 사용
     */
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    /**
     * 다중 간격 사용 안 함
     */
    '@stylistic/no-multi-spaces': 'error',
    /**
     * 다중 줄바꿈 사용 안 함
     */
    '@stylistic/no-multiple-empty-lines': 'off',
    /**
     * tab 사용 안 함
     */
    '@stylistic/no-tabs': 'error',
    /**
     * 코드 라인 끝에 불필요 간격 사용 안 함
     */
    '@stylistic/no-trailing-spaces': 'error',
    /**
     * 프로퍼티 접근 시 간격 띄움 사용 여부
     * foo. bar [X], foo.bar [O]
     */
    '@stylistic/no-whitespace-before-property': 'error',
    /**
     * @now 코드블록({ })을 사용하지 않을 경우 항상 옆에 위치
     */
    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
    /**
     * Objectd에서 { } 열고 닫기 전 줄바꿈 추가 여부
     * @now 하나의 스타일로 일관되게만 사용
     */
    '@stylistic/object-curly-newline': ['error', { consistent: true }],
    /**
     * Object { } 사이 간격 추가 여부
     * @now 오브젝트 시작과 끝 공백 추가
     */
    '@stylistic/object-curly-spacing': ['error', 'always'],
    /**
     * Object 프로퍼티들 사이 줄바꿈 추가 여부
     */
    '@stylistic/object-property-newline': 'off',
    /**
     * TODO: 설명 추가
     */
    '@stylistic/one-var-declaration-per-line': 'off',
    /**
     * 연산자가 있는 코드를 다중 라인으로 코드 작성 할 때 연산자 위치
     */
    '@stylistic/operator-linebreak': 'off',
    /**
     * 코드 블록 "{ }" 시작과 끝 줄바꿈 추가 여부
     */
    '@stylistic/padded-blocks': 'off',
    /**
     * 코드 구문 사이 줄바꿈 추가 여부
     * @reason 강제적 줄바꿈이 오히려 DX에 안 좋을 듯함
     */
    '@stylistic/padding-line-between-statements': 'off',
    /**
     * 따옴표 스타일
     * @now 따옴표 사용
     */
    '@stylistic/quotes': ['error', 'single'],
    /**
     * Object Key에 quote 사용 여부
     * @now quote 필요한 경우에만 사용
     */
    '@stylistic/quote-props': ['error', 'consistent'],
    /**
     * rest, spread 연산자에 간격 띄움 여부
     * @now 간격 안 띄움
     */
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    /**
     * 세미콜론 사용 여부
     * @now 세미콜론 사용함
     */
    '@stylistic/semi': ['error', 'always'],
    /**
     * 세미콜론 앞, 뒤 간격 띄움 여부
     * @now 세미콜론 뒤쪽에만 필요할 경우 한 칸 띄움
     */
    '@stylistic/semi-spacing': 'error',
    /**
     * 세미콜론 위치
     * @now 코드 뒤쪽에 위치
     */
    '@stylistic/semi-style': ['error', 'last'],
    /**
     * 코드 불록 앞부분에 간격 추가 여부
     * @now 코드 블록 앞부분에 항상 한 칸 띄움
     */
    '@stylistic/space-before-blocks': ['error', 'always'],
    /**
     * "function"과 "()" 사이 간격 추가 여부
     * @noew 익명 함수의 경우 간격 X, 일반 함수일 경우 한 칸 띄움
     */
    '@stylistic/space-before-function-paren': ['error', { anonymous: 'never', named: 'never' }],
    /**
     * 소괄호 "()" 내부 앞, 뒤로 간격 추가 여부
     * @now 소괄호 내부에 간격 없음
     */
    '@stylistic/space-in-parens': ['error', 'never'],
    /**
     * 연산자 사이 간격 띄움 여부
     */
    '@stylistic/space-infix-ops': 'error',
    /**
     * 단항 연산자(++, --, delete, new, void, typeof) 앞, 뒤 간격 띄움 여부
     * @now word 형식일 때 띄움, non word 형식일 때 안 띄움
     */
    '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
    /**
     * TODO: 설명 추가
     */
    '@stylistic/spaced-comment': 'off',
    /**
     * case에서 콜론 위치
     * @now 콜론 뒤쪽에만 한 칸 띄움
     */
    '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
    /**
     * template 문자열에서 "${...}" 내부 앞,뒤 간격 띄움 여부
     * @now 한 칸 안 띄움
     */
    '@stylistic/template-curly-spacing': ['error', 'never'],
    /**
     * TODO: 어떤 룰인지 파악필요
     * @reason 해당 구문 사용할 일이 없을 듯 함
     */
    '@stylistic/template-tag-spacing': 'off',

    /**
     * IIFE 감싸는 스타일
     * @now
     * (function () {
     *    console.log('hello')
     *  }
     * })()
     */
    '@stylistic/wrap-iife': ['error', 'inside'],
    /**
     * 정규 표현식 사용 시 소괄호로 감싸기
     * @reason 때에 맞게 사용하면 됨
     */
    '@stylistic/wrap-regex': 'off',
    /**
     * TODO: 해당 룰 좀 더 파악필요
     * @reason yield stat 사용할 일이 거의 없음
     */
    '@stylistic/yield-star-spacing': 'off',
  },
};
