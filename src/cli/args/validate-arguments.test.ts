import chalk from 'chalk';
import { pathExistsSync } from 'fs-extra';

import { runCommand } from '../../tests-related/run-command';

jest.mock('fs-extra');

describe('validateArguments function', () => {
  const validateArgumentsPath = './../cli/args/validate-arguments';
  global.console = { error: jest.fn() } as unknown as Console;
  const mockExit = jest
    .spyOn(process, 'exit')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .mockImplementation((() => {}) as (code?: number | undefined) => never);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display an error when coverage summary file does not exist', async () => {
    jest.mocked(pathExistsSync).mockReturnValueOnce(false);

    runCommand(validateArgumentsPath);

    expect(mockExit).toHaveBeenCalled();

    expect(console.error).toHaveBeenCalledWith(
      chalk.bold.redBright(
        `Errors:\n-c\t\tCoverage file ./coverage/coverage-summary.json doesn't exist\n`,
      ),
    );
  });

  it('should return default values', async () => {
    jest.mocked(pathExistsSync).mockReturnValueOnce(true);

    const args = runCommand(validateArgumentsPath);

    expect(args).toStrictEqual({
      coverageSummaryPath: './coverage/coverage-summary.json',
      outputPath: './badges',
    });
  });

  it('should return a custom json summary file path', async () => {
    jest.mocked(pathExistsSync).mockReturnValueOnce(true);

    const path = './libs/graphql/react-query.codeden.yml';
    const args = runCommand(validateArgumentsPath, '-c', path);

    expect(args).toStrictEqual({
      coverageSummaryPath: path,
      outputPath: './badges',
    });
  });

  it('should return a custom output path', async () => {
    jest.mocked(pathExistsSync).mockReturnValueOnce(true);

    const path = './cool';
    const args = runCommand(validateArgumentsPath, '-o', path);

    expect(args).toStrictEqual({
      coverageSummaryPath: './coverage/coverage-summary.json',
      outputPath: path,
    });
  });
});
