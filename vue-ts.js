import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
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