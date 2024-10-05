import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";

export default {
  configs: {
    'js': [
      {
        files: ["**/*.{js,mjs,cjs}"],
      },
      {
        languageOptions: {
          globals: globals.browser,
        }
      },
      pluginJs.configs.recommended,
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
    ],
    'ts': [
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
    ],
    'node-js': [
      {
        files: ["**/*.{js,mjs,cjs}"],
      },
      {
        languageOptions: {
          globals: globals.node,
        }
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
    ],
    'node-ts': [
      {
        files: ["**/*.{js,mjs,cjs}"],
      },
      {
        languageOptions: {
          globals: globals.node,
        }
      },
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
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
    ],
    'vue-js': [
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
    ],
    'vue-ts': [
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
  }
}
