import pluginJs from "@eslint/js";
import jsStylistic from "./stylistic-js.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  pluginJs.configs.recommended,
  ...jsStylistic
]