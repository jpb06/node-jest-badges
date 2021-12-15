const { pathsToModuleNameMapper } = require("ts-jest");
const {
  compilerOptions: { paths: tsconfigPaths },
} = require("./tsconfig");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  logHeapUsage: true,
  transform: {
    '^.+\\.ts$': ['babel-jest', { presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'] }],
  },
  moduleFileExtensions: ["js", "json", "ts"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  coverageReporters: [
    "json-summary",
    "text",
    "lcov"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/dist/",
    "!<rootDir>/src/index.ts",
    "!<rootDir>/src/cli/generateBadges.cli.ts",
    "!<rootDir>/src/tests-related/**",
    "!<rootDir>/src/types/**"
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfigPaths, { prefix: '<rootDir>/src' }),
};