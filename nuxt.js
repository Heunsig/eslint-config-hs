import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import stylisticTs from "./stylistic-ts.js";
import ignoreOption from "./ignoreOption.js";

export default [
  ignoreOption,
  {
    ignores: [
      '.output/*',
      '.data/*',
      '.nuxt/*',
      '.nitro/*',
      '.cache/*'
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  ...stylisticTs,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'ignore',
        multiline: 'below',
      }],
      'no-undef': 'off'
    }
  }
]