import chalk from 'chalk';

import { displayError, displaySuccess } from './console.messages';

jest.mock('chalk', () => ({
  cyanBright: jest.fn(),
  greenBright: jest.fn(),
  redBright: jest.fn(),
  whiteBright: jest.fn(),
  underline: {
    cyanBright: jest.fn(),
  },
}));
global.console = { info: jest.fn(), error: jest.fn() } as unknown as Console;

describe('displaySuccess function', () => {
  const summaryPath = './src/api';

  beforeEach(() => jest.clearAllMocks());

  it('should call console.info', () => {
    displaySuccess(summaryPath);

    // eslint-disable-next-line no-console
    expect(console.info).toHaveBeenCalledTimes(1);
  });

  it('should display the package name in cyan', () => {
    displaySuccess(summaryPath);

    expect(chalk.cyanBright).toHaveBeenCalledWith('node-jest-badges');
  });

  it('should display sucess message in green and the number of handled endpoints', () => {
    displaySuccess(summaryPath);

    expect(chalk.greenBright).toHaveBeenCalledTimes(1);
    expect(chalk.greenBright).toHaveBeenCalledWith(
      'Badges generated from summary path',
    );
  });

  it('should display the outpath in cyan underlined', () => {
    displaySuccess(summaryPath);

    expect(chalk.underline.cyanBright).toHaveBeenCalledWith(summaryPath);
  });
});

describe('displayError function', () => {
  const errorMessage = 'oh no!';

  it('should call console.error', () => {
    displayError({ message: errorMessage });

    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('should display the package name in cyan', () => {
    displayError({ message: errorMessage });

    expect(chalk.cyanBright).toHaveBeenCalledWith('node-jest-badges');
  });

  it('should display the error message in red', () => {
    displayError({ message: errorMessage });

    expect(chalk.redBright).toHaveBeenCalledWith(errorMessage);
  });
});
