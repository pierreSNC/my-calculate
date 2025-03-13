import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    testPathIgnorePatterns: [
      "/e2e-tests/"
    ],
    rules: {
    },
  },

  pluginJs.configs.recommended,
];
