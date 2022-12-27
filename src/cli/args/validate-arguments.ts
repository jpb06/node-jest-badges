import {
  defaultOutputDir,
  defaultSummaryPath,
} from '@constants/fileSystem.constants';
import chalk from 'chalk';
import { pathExistsSync } from 'fs-extra';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

import { GenerateBadgesArguments } from '../types/args.type';

type CliArguments = { c: string; o: string };

export const validateArguments = (): GenerateBadgesArguments => {
  const argv = yargs(hideBin(process.argv))
    .scriptName('generateBadges')
    .usage(chalk.blueBright('$0 -c [coverageJsonSummaryPath] -o [outputPath]'))
    .epilogue('Generates badges from jest coverage report')
    .example('$0 -c ./coverage/coverage-summary.json -o ./badges', '')
    .describe('c', chalk.cyanBright('coverage file path'))
    .describe('o', chalk.cyanBright('output path'))
    .default('c', defaultSummaryPath)
    .default('o', defaultOutputDir)
    .check((args) => {
      const coverageFileExists = pathExistsSync(args.c as string);
      if (!coverageFileExists) {
        throw new Error(
          chalk.bold.redBright(
            `Errors:\n-c\t\tCoverage file ${args.c} doesn't exist\n`,
          ),
        );
      }

      return true;
    }).argv as CliArguments;

  return {
    coverageSummaryPath: argv.c,
    outputPath: argv.o,
  };
};
