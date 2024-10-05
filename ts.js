import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsStylistic from "./stylistic-ts.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tsStylistic
]