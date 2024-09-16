import typescriptEslint from "typescript-eslint";
import vueEslintParser from "vue-eslint-parser";
import pluginVue from "eslint-plugin-vue";
import eslintjs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config } */
export default [
  {
    ignores: [".vitepress/cache"],
  },
  eslintjs.configs.recommended,
  ...typescriptEslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: typescriptEslint.parser,
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
      },
    },
    rules: {
      // Disabled
      "no-empty-pattern": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-implied-eval": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-unused-expressions": "off",

      // Disabled for performance issues
      // Reference: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#eslint-plugin-import
      "import/namespace": "off",

      // Disable no-unused-vars and uses noUnusedLocals: true in tsconfig.json instead
      // Reference: https://github.com/johnsoncodehk/volar/issues/47
      "@typescript-eslint/no-unused-vars": "off",

      // Enabled
      "sort-imports": [
        "warn",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",

      "vue/singleline-html-element-content-newline": "off",
      "vue/multi-word-component-names": "off",
    },
  },
];
