# Heunsig ESLint
- [Heunsig ESLint](#techcenter-dev-team-eslint)
  - [목표](#목표)
  - [준비 사항](#준비-사항)
  - [빠른 시작](#빠른-시작)
    - [공통 적용](#공통-적용)
  - [주의할 점](#주의할-점)
  - [적용 방법](#적용-방법)
    - [Javascript](#javascript)
    - [Typescript](#typescript)
    - [Vue2](#vue2)
    - [Vue3](#vue3)
    - [Vue3 + Typescript (현재 사용을 권장하지 않습니다.)](#vue3--typescript-현재-사용을-권장하지-않습니다)
    - [Vue3 + Typescript (No tsconfig.json, 사용 권장, \>= v1.2.0)](#vue3--typescript-no-tsconfigjson-사용-권장--v120)
  - [IDE Setting (선택 사항)](#ide-setting-선택-사항)
    - [VSCode](#vscode)
      - [Save 시 자동으로 포맷팅 되도록 설정](#save-시-자동으로-포맷팅-되도록-설정)
      - [포맷팅 단축키 설정](#포맷팅-단축키-설정)

## 목표
* 잘못된 Javascript, Typescript 코드 사용으로 Runtime 오류가 나는 것을 방지
* 같은 프로젝트를 하는 모든 개발자들이 일관된 코드 스타일로 개발
* 너무 자유롭지도 너무 엄격하지도 않은 중간 단계의 `ESLint` 룰을 적용
* `Prettier` 를 사용을 제한하고 `ESLint` 만 사용 (`Prettier`룰과 `ESLint`룰 충돌 발생 때문)

<br/>

## 준비 사항
`@techdev-ui/eslint-config`는 Nexon내 Nexus 시스템을 통해서 배포됩니다. `@techdev-ui/eslint-config` 설치하기 위해서는 Nexon Nexus에 연결을 해주어야 합니다.

1. 작업 중인 프로젝트 root 디렉토리에 `.npmrc` 파일을 생성합니다.
2. `.npmrc` 파일에 `@techdev-ui:registry=https://nexus.nexon.com/repository/npm-techcenterdev-hosted/` 를 등록합니다.

> ⚠️ 만약 **Permission 문제가 발생**한다면 터미널에 `npm login --scope=@techdev-ui`를 입력 후 Nexon 사내 인증 정보로 로그인하시면 됩니다.
>
> _`.npmrc`가 등록된 상태여야 합니다._

<br/>

## 빠른 시작
### 공통 적용
`package.json` 에 eslint 룰 체크 및 수정을 위한 script 를 등록 합니다.
```json
"scripts": {
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
}
```
프로젝트 스택을 선택하세요.

* [Javascript](#javascript)
* [Typescript](#typescript)
* [Vue2](#vue2)
* [Vue3](#vue3)
* [Vue3 + Typescript](#vue3-typescript)

<br/>

## 주의할 점
* 프로젝트가 [`module` 타입](https://nodejs.org/api/packages.html#type)이라면 ESLint config는 `.eslintrc.cjs`로 사용해야 합니다.
  * 자신의 프로젝트의 타입을 확인을 하시려면 `package.json` 에서 `type`을 확인하시면 됩니다. 만약 `type`이 없다면 `module` 타입이 아닙니다.

<br/>

## 적용 방법
### Javascript
**NPM**
```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser @techdev-ui/eslint-config
```

**YARN**
```bash
yarn add --dev eslint @babel/core @babel/eslint-parser @techdev-ui/eslint-config
```

`.eslintrc.js` 혹은 [`.eslintrc.cjs`](#주의할-점)를 root 디렉토리에 생성 후 아래 내용을 입력하세요.
```javascript
module.exports = {
  extends: [
    '@techdev-ui/eslint-config',
  ],
};
```

### Typescript
**NPM**
```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @techdev-ui/eslint-config
```
**YARN**
```bash
yarn add --dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @techdev-ui/eslint-config
```
`.eslintrc.js` 혹은 [`.eslintrc.cjs`](#주의할-점)를 root 디렉토리에 생성 후 아래 내용을 입력하세요.
```javascript
module.exports = {
  extends: [
    '@techdev-ui/eslint-config',
  ],
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      extends: [
        '@techdev-ui/eslint-config/typescript',
      ],
      parserOptions: {
        project: './tsconfig.json', // tsconfig 파일 등록
      },
    },
  ],
};
```

### Vue2
**NPM**
```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue @techdev-ui/eslint-config
```
**YARN**
```bash
yarn add --dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue @techdev-ui/eslint-config
```
`.eslintrc.js` 혹은 [`.eslintrc.cjs`](#주의할-점)를 root 디렉토리에 생성 후 아래 내용을 입력하세요.
```javascript
module.exports = {
  extends: [
    '@techdev-ui/eslint-config',
  ],
  overrides: [
    {
      files: ['src/**/*.vue'],
      extends: [
        '@techdev-ui/eslint-config/vue2',
      ],
    },
  ],
};
```

### Vue3
**NPM**
```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue @techdev-ui/eslint-config
```
**YARN**
```bash
yarn add --dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue @techdev-ui/eslint-config
```
`.eslintrc.js` 혹은 [`.eslintrc.cjs`](#주의할-점)를 root 디렉토리에 생성 후 아래 내용을 입력하세요.
```javascript
module.exports = {
  extends: [
    '@techdev-ui/eslint-config',
  ],
  overrides: [
    {
      files: ['src/**/*.vue'],
      extends: [
        '@techdev-ui/eslint-config/vue3',
      ],
    },
  ],
};
```

### Vue3 + Typescript (현재 사용을 권장하지 않습니다.)
> ❌ `tsconfig.json`을 요구하는 Typescript Lint 규칙들이 포함된 버전입니다. 하지만 `tsconfig.json`을 요구하는 규칙들은 Lint 성능 저하에 원인이 되고 있어 현재 해당 버전 사용을 권장하지 않습니다.
 
**NPM**
```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-plugin-vue vue-eslint-parser @techdev-ui/eslint-config
```
**YARN**
```bash
yarn add --dev eslint @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-plugin-vue vue-eslint-parser @techdev-ui/eslint-config
```
`.eslintrc.js` 혹은 [`.eslintrc.cjs`](#주의할-점)를 root 디렉토리에 생성 후 아래 내용을 입력하세요.

> ❗ `overrides`값의 순서가 아래와 동일 해야합니다.

```javascript
module.exports = {
  extends: [
    '@techdev-ui/eslint-config',
  ],
  overrides: [
    {
      files: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.vue',
      ],
      extends: [
        '@techdev-ui/eslint-config/typescript',
      ],
      parserOptions: {
        project: './tsconfig.json', // tsconfig 파일 등록
      },
    },
    {
      files: ['src/**/*.vue'],
      extends: [
        '@techdev-ui/eslint-config/vue3',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
};
```

### Vue3 + Typescript (No tsconfig.json, 사용 권장, >= v1.2.0)
> 📢 이 설정은 Typescript Lint 규칙 중 `tsconfig.json` 등록을 필요로 하는 규칙을 제거한 버전입니다.  
> `tsconfig.json`을 요구하는 규칙들이 Lint 성능 저하의 원인이 되어서 이 버전을 추가했습니다.  

> 📢@techdev-ui/eslint v1.2.0 이상인 경우에 사용가능합니다.


**NPM**
```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-plugin-vue vue-eslint-parser @techdev-ui/eslint-config
```
**YARN**
```bash
yarn add --dev eslint @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-plugin-vue vue-eslint-parser @techdev-ui/eslint-config
```  

`.eslintrc.js` 혹은 [`.eslintrc.cjs`](#주의할-점)를 root 디렉토리에 생성 후 아래 내용을 입력하세요.

```javascript
module.exports = {
  extends: [
    '@techdev-ui/eslint-config',
  ],
  overrides: [
    {
      files: [
        'src/**/*.vue',
        'src/**/*.tsx',
        'src/**/*.ts',
      ],
      extends: [
        '@techdev-ui/eslint-config/typescript',
        '@techdev-ui/eslint-config/typescript-no-tsconfig',
        '@techdev-ui/eslint-config/vue3',
      ],
      parserOptions: {
        parser: {
          'js': '@babel/eslint-parser',
          'ts': '@typescript-eslint/parser',
        },
      },
    },
  ],
};
```

<br/>

## IDE Setting (선택 사항)
### VSCode
#### Save 시 자동으로 포맷팅 되도록 설정
VSCode에서 설정한 `eslint` 룰을 기반으로 파일 저장 시 자동 포맷팅을 하기 위해서는 먼저 [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)을 설치해야 합니다. 설치 완료 후 `.js`, `.ts`, `.vue` 파일 저장 시 자동 포맷팅 기능을 활성화 하기 위해선 VSCode 설정이 필요합니다.

**VSCode 전체 설정**  
`File > Preferences > Settings > Open Settings (JSON)`에서 아래의 옵션을 설정합니다.  

**특정 프로젝트에만 설정**  
프로젝트 루트 폴더 내의 `.vscode/settings.json` 파일에 아래의 옵션을 설정합니다.  

```JSON
{
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
}
```

`.js`, `.ts`, `.vue`에 한해 기본적으로 `eslint`의 자동 포멧팅 툴을 사용할 것이므로, 해당 파일들의 기본 포맷터를 `dbaeumer.vscode-eslint`로 설정합니다. 그리고 `editor.codeActionsOnSave`의 `source.fixAll.eslint` 설정을 `true`로 설정하여 파일이 저장될 때마다 `eslint`가 자동 포맷팅을 수행하도록 합니다.

#### 포맷팅 단축키 설정
파일 저장 시 자동으로 포맷팅을 원하지 않는 사용자는, VSCode의 단축키 설정을 변경하여 포맷팅을 수동으로 실행할 수 있습니다. 먼저 VSCode에서 `F1`을 누르고 `ESLint: Fix all auto-fixable Problems`를 검색 하세요. 그런 다음 `Configure Keybinding` 아이콘을 클릭하여 VSCode 단축키 설정 페이지로 이동합니다. 여기서 `ESLint: Fix all auto-fixable Problems` Command를 더블 클릭하여 원하는 키 설정을 할 수 있습니다.