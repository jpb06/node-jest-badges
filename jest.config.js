const { pathsToModuleNameMapper } = require("ts-jest/utils");
const {
  compilerOptions: { paths: tsconfigPaths },
} = require("./tsconfig");

/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsconfigPaths, { prefix: "<rootDir>/src" }),
  },
  coveragePathIgnorePatterns: [
    ".d.ts", ".js",
    "<rootDir>/src/tests-related/",
    "<rootDir>/src/types/",
    "<rootDir>/src/pages/",
  ],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageReporters: ["json-summary", "text", "lcov"],
};