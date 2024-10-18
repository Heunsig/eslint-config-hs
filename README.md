# Heunsig ESLint

- [Heunsig ESLint](#heunsig-eslint)
  - [목표](#목표)
  - [빠른 시작](#빠른-시작)
    - [공통 설정](#공통-설정)
    - [환경별 설정](#환경별-설정)
      - [Javascript](#javascript)
      - [Typescript](#typescript)
      - [Vue3](#vue3)
      - [Vue3 + Typescript](#vue3--typescript)
      - [Nuxt3](#nuxt3)
  - [IDE 설정 (선택 사항)](#ide-설정-선택-사항)
    - [VSCode 설정](#vscode-설정)
      - [파일 저장 시 자동 포맷팅 설정](#파일-저장-시-자동-포맷팅-설정)
      - [포맷팅 단축키 설정](#포맷팅-단축키-설정)

## 목표

- ESLint 룰을 적용하여 코드 품질을 향상
- 잘못된 Javascript, Typescript 코드 사용으로 Runtime 오류가 나는 것을 방지
- 같은 프로젝트를 하는 모든 개발자들이 일관된 코드 스타일로 개발
- 너무 자유롭지도 너무 엄격하지도 않은 중간 단계의 `ESLint` 룰을 적용
- `Prettier` 를 사용을 제한하고 `ESLint` 만 사용 (`Prettier`룰과 `ESLint`룰 충돌 발생 때문)

## 빠른 시작

> 이 ESLint 설정은 `package.json`의 `type`이 `module`인 경우를 기준으로 합니다. `module`이 아니라면 [CommonJS 설정](#commonjs-사용-시-설정)을 참고하세요.

### 공통 설정

`package.json` 에 eslint 룰 체크 및 수정을 위한 script 를 등록 합니다.

```json
"scripts": {
  "lint": "eslint . -c eslint.config.js --fix"
}
```

### 환경별 설정

프로젝트의 환경을 선택하세요.

- [Javascript](#javascript)
- [Typescript](#typescript)
- [Vue3](#vue3)
- [Vue3 + Typescript](#vue3--typescript)
- [Nuxt3](#nuxt3)

### Javascript

**NPM**

```bash
npm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin eslint-config-hs
```

**PNPM**

```bash
pnpm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin eslint-config-hs
```

**YARN**

```bash
yarn add --dev globals eslint @eslint/js @stylistic/eslint-plugin eslint-config-hs
```

`eslint.config.js`를 root 디렉토리에 생성 후 아래 내용을 입력하세요.

```javascript
import globals from 'globals';
import config from 'eslint-config-hs/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...config,
];
```

### Typescript

**NPM**

```bash
npm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-config-hs
```

**PNPM**

```bash
pnpm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-config-hs
```

**YARN**

```bash
yarn add --dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-config-hs
```

`eslint.config.js`를 root 디렉토리에 생성 후 아래 내용을 입력하세요.

```javascript
import globals from 'globals';
import config from 'eslint-config-hs/ts';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...config,
];
```

### Vue3

**NPM**

```bash
npm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin eslint-plugin-vue eslint-config-hs
```

**PNPM**

```bash
pnpm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin eslint-plugin-vue eslint-config-hs
```

**YARN**

```bash
yarn add --dev globals eslint @eslint/js @stylistic/eslint-plugin eslint-plugin-vue eslint-config-hs
```

`eslint.config.js`를 root 디렉토리에 생성 후 아래 내용을 입력하세요.

```javascript
import globals from 'globals';
import config from 'eslint-config-hs/vue';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...config,
];
```

### Vue3 + Typescript

**NPM**

```bash
npm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-plugin-vue eslint-config-hs
```

**PNPM**

```bash
pnpm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-plugin-vue eslint-config-hs
```

**YARN**

```bash
yarn add --dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-plugin-vue eslint-config-hs
```  

`eslint.config.js`를 root 디렉토리에 생성 후 아래 내용을 입력하세요.

```javascript
import globals from 'globals';
import config from 'eslint-config-hs/vue-ts';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...config,
];
```

### Nuxt3

**NPM**

```bash
npm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-plugin-vue eslint-config-hs
```

**PNPM**

```bash
pnpm install --save-dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-plugin-vue eslint-config-hs
```

**YARN**

```bash
yarn add --dev globals eslint @eslint/js @stylistic/eslint-plugin typescript-eslint eslint-plugin-vue eslint-config-hs
```

`eslint.config.js`를 root 디렉토리에 생성 후 아래 내용을 입력하세요.

```javascript
import globals from 'globals';
import config from 'eslint-config-hs/nuxt';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
  },
  ...config,
];
```

## IDE 설정 (선택 사항)

### VSCode 설정

#### 파일 저장 시 자동 포맷팅 설정

VSCode에서 설정한 `eslint` 룰을 기반으로 파일 저장 시 자동 포맷팅을 하기 위해서는 먼저 [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)을 설치해야 합니다. 설치 완료 후 `.js`, `.ts`, `.vue` 파일 저장 시 자동 포맷팅 기능을 활성화 하기 위해선 VSCode 설정이 필요합니다.

**VSCode 전체 설정**  
`File > Preferences > Settings > Open Settings (JSON)`에서 아래의 옵션을 설정합니다.  

**특정 프로젝트에만 설정**  
프로젝트 루트 폴더 내의 `.vscode/settings.json` 파일에 아래의 옵션을 설정합니다.  

```JSON
{
  "[javascript][typescript][vue]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
}
```

`.js`, `.ts`, `.vue`에 한해 기본적으로 `eslint`의 자동 포멧팅 툴을 사용할 것이므로, 해당 파일들의 기본 포맷터를 `dbaeumer.vscode-eslint`로 설정합니다. 그리고 `editor.codeActionsOnSave`의 `source.fixAll.eslint` 설정을 `explicit`로 설정하여 파일이 저장될 때마다 `eslint`가 자동 포맷팅을 수행하도록 합니다.

#### 포맷팅 단축키 설정

파일 저장 시 자동으로 포맷팅을 원하지 않는 사용자는, VSCode의 단축키 설정을 변경하여 포맷팅을 수동으로 실행할 수 있습니다. 먼저 VSCode에서 `F1`을 누르고 `ESLint: Fix all auto-fixable Problems`를 검색 하세요. 그런 다음 `Configure Keybinding` 아이콘을 클릭하여 VSCode 단축키 설정 페이지로 이동합니다. 여기서 `ESLint: Fix all auto-fixable Problems` Command를 더블 클릭하여 원하는 키 설정을 할 수 있습니다.

## CommonJS 사용 시 설정

이 eslint 설정은 `module` 타입의 프로젝트를 기준으로 작성되었습니다. 만약 `module` 타입을 사용할 수 없는 상황이라면 몇 가지 설정을 변경해야 합니다.

1. `eslint.config.js` 파일을 `eslint.config.mjs`로 변경하세요.
2. `package.json`의 `scripts`에서 `lint` 스크립트를 아래와 같이 수정하세요.

    ```json
      "scripts": {
         "lint": "eslint . -c eslint.config.mjs --fix"
      }
    ```
