import pluginJs from "@eslint/js";
import jsStylistic from "./stylistic-js.js";
import ignoreOption from "./ignoreOption.js";

export default [
  ignoreOption,
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  pluginJs.configs.recommended,
  ...jsStylistic
]