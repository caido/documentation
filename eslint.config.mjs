import { defaultConfig } from '@caido/eslint-config';
import markdownPlugin from '@eslint/markdown';

const markdown = () => {
  return [
    ...markdownPlugin.configs.recommended,
  ]
}

/** @type {import('eslint').Linter.Config } */
export default [
  {
    ignores: [".vitepress/cache", ".vitepress/dist"],
  },
  ...markdownPlugin.configs.recommended,
  ...(defaultConfig().map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.vue"],
  }))),
];
