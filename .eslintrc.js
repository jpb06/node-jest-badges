/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // Base config
  extends: ['eslint:recommended'],
  overrides: [
    // Typescript
    {
      files: ['**/*.ts'],
      plugins: ['@stylistic/js', 'prettier', '@typescript-eslint', 'import'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/internal-regex':
          '^@(constants|@tests|@types)',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        'import/order': [
          'error',
          {
            alphabetize: { caseInsensitive: true, order: 'asc' },
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
            'newlines-between': 'always',
            pathGroups: [
              {
                pattern:
                  '{@constants,@tests,@types}',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
          },
        ],
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        eqeqeq: 'error',
        complexity: [
          'error',
          {
            max: 15,
          },
        ],
        curly: 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'no-unneeded-ternary': 'error',
        'prefer-arrow-callback': 'error',
        'no-else-return': 'error',
        'no-useless-return': 'error',
        'no-console': [
          'error',
          {
            allow: ['warn', 'error', 'info'],
          },
        ],
        'array-callback-return': [
          'error',
          {
            allowImplicit: true,
          },
        ],
      },
    },

    // Markdown
    {
      files: ['**/*.md'],
      plugins: ['markdown'],
      extends: ['plugin:markdown/recommended', 'prettier'],
    },

    // Jest/Vitest
    {
      files: ['**/*.test.{js,jsx,ts,tsx}'],
      plugins: ['jest', 'jest-dom'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'prettier',
      ],
      env: {
        'jest/globals': true,
      },
      settings: {
        jest: {
          // we're using vitest which has a very similar API to jest
          // (so the linting plugins work nicely), but it means we have to explicitly
          // set the jest version.
          version: 28,
        },
      },
    },

    // Node
    {
      files: [
        '.eslintrc.js',
        'postcss.config.js',
        'remix.config.js',
        'mocks/**/*.js',
      ],
      env: {
        node: true,
      },
    },
  ],
};
