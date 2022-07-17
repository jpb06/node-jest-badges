const { transformTsPaths } = require('ts-paths-transform');

const {
  compilerOptions: { paths },
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
          target: 'es2021',
        },
      },
    ],
  },
  moduleNameMapper: transformTsPaths(paths, {
    prefix: '<rootDir>/',
    debug: true,
  }),
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
  modulePathIgnorePatterns: ['<rootDir>/dist'],
};
