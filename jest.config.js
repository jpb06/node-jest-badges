const {
  compilerOptions: { paths, baseUrl },
} = require('./tsconfig');

/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  logHeapUsage: true,
  rootDir: '.',
  transform: {
    '^.+\\.[tj]s$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
          },
          baseUrl,
          paths,
          target: 'es2021',
        },
      },
    ],
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!<rootDir>/node_modules/',
    '!<rootDir>/dist/',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/src/cli/generateBadges.cli.ts',
    '!<rootDir>/src/tests-related/**',
    '!<rootDir>/src/types/**',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist']
};
