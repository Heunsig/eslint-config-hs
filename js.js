import globals from "globals";
import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  pluginJs.configs.recommended,
  stylistic.configs.customize({
    quotes: "double",
    commaDangle: "only-multiline",
    semi: true,
    blockSpacing: true,
    indent: 2,
    arrowParens: false,
    braceStyle: "stroustrup",
    quoteProps: "consistent-as-needed",
    jsx: true,
    flat: true,
  }),
]