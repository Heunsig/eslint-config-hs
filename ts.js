import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
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