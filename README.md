# node-jest-badges

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://github.dev/jpb06/node-jest-badges)
![Github workflow](https://img.shields.io/github/actions/workflow/status/jpb06/node-jest-badges/tests-scan.yml?branch=master&logo=github-actions&label=last%20workflow)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jpb06_node-jest-badges)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=jpb06_node-jest-badges)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=security_rating)](https://sonarcloud.io/dashboard?id=jpb06_node-jest-badges)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=jpb06_node-jest-badges)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=coverage)](https://sonarcloud.io/dashboard?id=jpb06_node-jest-badges)
![Coverage](./badges/coverage-jest%20coverage.svg)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=jpb06_node-jest-badges)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=jpb06_node-jest-badges)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=code_smells)](https://sonarcloud.io/dashboard?id=jpb06_node-jest-badges)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=bugs)](https://sonarcloud.io/summary/new_code?id=jpb06_node-jest-badges)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=jpb06_node-jest-badges)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/node-jest-badges?label=snyk%20vulnerabilities)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jpb06_node-jest-badges&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=jpb06_node-jest-badges)
![npm bundle size](https://img.shields.io/bundlephobia/min/node-jest-badges)
![Last commit](https://img.shields.io/github/last-commit/jpb06/node-jest-badges?logo=git)

Generating coverage badges from jest coverage report.

<!-- readme-package-icons start -->

<p align="left"><a href="https://docs.github.com/en/actions" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/GithubActions-Dark.svg" /></a>&nbsp;<a href="https://www.typescriptlang.org/docs/" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TypeScript.svg" /></a>&nbsp;<a href="https://nodejs.org/en/docs/" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/NodeJS-Dark.svg" /></a>&nbsp;<a href="https://pnpm.io/motivation" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Pnpm-Dark.svg" /></a>&nbsp;<a href="https://axios-http.com/fr/docs/intro" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Axios-Dark.svg" /></a>&nbsp;<a href="https://eslint.org/docs/latest/" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Eslint-Dark.svg" /></a>&nbsp;<a href="https://jestjs.io/docs/getting-started" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Jest.svg" /></a>&nbsp;<a href="https://prettier.io/docs/en/index.html" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Prettier-Dark.svg" /></a>&nbsp;<a href="https://swc.rs/docs/getting-started" target="_blank"><img height="50" src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/Swc-Dark.svg" /></a></p>

<!-- readme-package-icons end -->

## ⚡ Badges for everyone

Let's just imagine you want to display some information about your testing coverage and you're using jest as a testing framework. Look no further!

## ⚡ Badges?

This package generates the following badges for you, based on the coverage report generated by jest, using instanbul.

| Badge                                                   | Description                                    |
| ------------------------------------------------------- | ---------------------------------------------- |
| ![Branches](./badges/coverage-branches.svg)             | Percentage of DD-paths followed during tests   |
| ![Functions](./badges/coverage-functions.svg)           | Percentage of functions executed within tests  |
| ![Lines](./badges/coverage-lines.svg)                   | Percentage of lines covered by tests           |
| ![Statements](./badges/coverage-statements.svg)         | Percentage of statements executed within tests |
| ![Jest coverage](./badges/coverage-jest%20coverage.svg) | Average of the above coverage percentages      |

## ⚡ Github action

If you want to integrate this to your CI/CD, you have a [github action available for this](https://github.com/marketplace/actions/jest-badges-generation-action).

## ⚡ Requirements

### 🔶 Jest

Well, let's just start by stating the obvious here. Yes, you will need [jest testing library](https://jestjs.io/) to use this package.

## ⚡ Setup

### 🔶 Install

```shell
yarn add -D node-jest-badges
```

or

```shell
npm i -D node-jest-badges
```

### 🔶 Jest configuration

You will need to add json-summary to coverage reporters in jest config:

```javascript
module.exports = {
   coverageReporters: ["json-summary"];
};
```

## ⚡ Usage

You have two ways to generate coverage badges: cli and node. Both will create a folder where .svg files will be written.

### 🔶 Cli

You can add a script to your package.json like so:

```shell
  "scripts": {
    "badges": "generateBadges"
  },
```

The `generateBadges` function accepts two optional arguments to specify:

- a custom path for the input json summary file.
- a custom path for the output path.

```shell
// will generate badges from './coverage/coverage-summary.json' in './badges' (default)
yarn generateBadges

// will generate badges from './myModule/coverage-summary.json' in './cool' folder.
yarn generateBadges -c ./myModule/coverage-summary.json -o ./cool
```

### 🔶 Node

Another way is to directly use the package:

```javascript
import { generateBadges } from 'node-jest-badges';

(async () => {
  // will generate badges from './coverage/coverage-summary.json' in './badges' (default)
  await generateBadges();
})();
```

The function optionally accepts two arguments to specify a custom path for the json summary file and the output path:

```javascript
import { generateBadges } from 'node-jest-badges';

(async () => {
  // will generate badges from './myModule/coverage-summary.json' in './cool'
  await generateBadges('./myModule/coverage-summary.json', './cool');
})();
```

## ⚡ Thanks

Big thanks to [Shield](https://github.com/badges/shields) for this awesome tool!
