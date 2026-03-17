import importPlugin from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import fsdPlugin from '@conarti/eslint-plugin-feature-sliced';
import js from '@eslint/js';

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tsEslint.configs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx}'],
    settings: {},
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
      '@conarti/feature-sliced': fsdPlugin,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
          },
        },
      ],
      '@conarti/feature-sliced/layers-slices': ['error', {}],
      '@conarti/feature-sliced/absolute-relative': 'error',
      '@conarti/feature-sliced/public-api': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }, // строка перед return
        { blankLine: 'always', prev: '*', next: 'export' }, // строка перед export
        { blankLine: 'never', prev: 'import', next: 'import' }, // никогда не строка между import
      ],
      'import/extensions': [
        'error',
        'never',
        {
          ignorePackages: true,
          pattern: {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        },
      ],
      curly: ['error', 'all'],
    },
  }
);
