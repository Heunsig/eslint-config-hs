import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import jsStylistic from "./stylistic-js.js";
import ignoreOption from "./ignoreOption.js";

export default [
  ignoreOption,
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
  },
  ...jsStylistic
]