import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsStylistic from "./stylistic-ts.js";
import ignoreOption from "./ignoreOption.js";

export default [
  ignoreOption,
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tsStylistic
]