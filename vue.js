import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import stylisticJs from "./stylistic-js.js";
import ignoreOption from "./ignoreOption.js";

export default [
  ignoreOption,
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
  },
  ...stylisticJs,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'ignore',
        multiline: 'below',
      }],
    }
  }
]