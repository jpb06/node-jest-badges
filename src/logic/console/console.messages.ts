/* eslint-disable no-console */
import chalk from 'chalk';

export const displaySuccess = (summaryPath: string): void => {
  console.info(
    `${chalk.cyanBright('node-jest-badges')} 🚀 - ${chalk.greenBright(
      'Badges generated from summary path',
    )} ${chalk.underline.cyanBright(summaryPath)}`,
  );
};

export const displayError = (err: unknown): void => {
  console.error(
    `${chalk.cyanBright('node-jest-badges')} ❌ - ${chalk.redBright(
      (err as { message: string }).message,
    )}`,
  );
};
