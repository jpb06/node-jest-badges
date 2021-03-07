# node-jest-badges

![Code quality](https://img.shields.io/codefactor/grade/github/jpb06/node-jest-badges?logo=codefactor)
![Total coverage](./badges/coverage-global%20coverage.svg)
![Github workflow](https://img.shields.io/github/workflow/status/jpb06/node-jest-badges/checks?label=last%20workflow&logo=github-actions)
![Last commit](https://img.shields.io/github/last-commit/jpb06/node-jest-badges?logo=git)
![Commits activity](https://img.shields.io/github/commit-activity/m/jpb06/node-jest-badges?logo=github)

## Badges for everyone!

Let's just imagine you want to display some information about your testing coverage and you're using jest as a testing framework. Look no further!

## Badges?

This package generates the following badges for you, based on the coverage report generated by jest, using instanbul. The first badge is the average of the four next coverage percentages.

- ![Total coverage](./badges/coverage-global%20coverage.svg)
- ![Branches](./badges/coverage-branches.svg)
- ![Functions](./badges/coverage-functions.svg)
- ![Lines](./badges/coverage-lines.svg)
- ![Statements](./badges/coverage-statements.svg)

## Requirements

### Jest

Well, let's just start by stating the obvious here. Yes, you will need [jest testing library](https://jestjs.io/) to use this package.

## Setup

### Install

```shell
yarn add -D node-jest-badge
```

or

```shell
npm i -D node-jest-badge
```

### Jest configuration

You will need to add json-summary to coverage reporters in jest config:

```javascript
module.exports = {
   coverageReporters: ["json-summary"];
};
```

### Usage

#### Cli

You can add a script to your package.json like so:

```shell
  "scripts": {
    "badges": "generateBadges"
  },
```

#### Node

Another way is to directly use the package:

```javascript
import { generateBadges } from "node-jest-badges";

(async () => {
  await generateBadges();
})();
```

## Thanks

Big thanks to [Shield](https://github.com/badges/shields) for this awesome tool!
