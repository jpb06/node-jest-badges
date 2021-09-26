const { pathsToModuleNameMapper } = require("ts-jest/utils");
const {
  compilerOptions: { paths: tsconfigPaths },
} = require("./tsconfig");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  roots: ['<rootDir>/src/'],
  preset: "ts-jest",
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
    "!<rootDir>/src/tests-related/**"
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfigPaths, { prefix: '<rootDir>/src' }),
};