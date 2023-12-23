import { Effect } from 'effect';
import { emptyDir, ensureDir, readJson } from 'fs-extra';

import { defaultOutputDir, defaultSummaryPath } from '@constants';

import { generateBadges } from './generateBadges.logic';
import { generateCoverageFile } from './generateCoverageFile.logic';

jest.mock('fs-extra');
jest.mock('./generateCoverageFile.logic');

describe('generateBadges function', () => {
  global.console = {
    error: jest.fn(),
    info: global.console.info,
  } as unknown as Console;

  jest.mocked(emptyDir).mockImplementation(() => Promise.resolve());
  jest.mocked(ensureDir).mockImplementation(() => Promise.resolve());

  const generateCoverageFileCurry = jest
    .fn()
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .mockImplementation(() => Effect.sync(() => {}));

  beforeEach(() => {
    jest.clearAllMocks();

    jest
      .mocked(generateCoverageFile)
      .mockImplementation(() => generateCoverageFileCurry);
  });

  it('should ensure outDir is there and clear it', async () => {
    jest.mocked(readJson).mockImplementation(() => Promise.resolve());

    await generateBadges(defaultSummaryPath, defaultOutputDir);

    expect(ensureDir).toHaveBeenCalledTimes(1);
    expect(emptyDir).toHaveBeenCalledTimes(1);
  });

  it('should generate all badges', async () => {
    jest.mocked(readJson).mockImplementation(() => Promise.resolve());

    await generateBadges(defaultSummaryPath, defaultOutputDir);

    expect(readJson).toHaveBeenCalledTimes(1);
    expect(generateCoverageFileCurry).toHaveBeenCalledTimes(5);
    expect(console.error).toHaveBeenCalledTimes(0);
  });

  it('should report on errors', async () => {
    const errorMessage = 'Oh no!';
    jest.mocked(readJson).mockRejectedValueOnce(new Error(errorMessage));

    await expect(
      generateBadges(defaultSummaryPath, defaultOutputDir),
    ).rejects.toThrow(errorMessage);

    expect(readJson).toHaveBeenCalledTimes(1);
    expect(generateCoverageFile).toHaveBeenCalledTimes(0);
  });

  it('should use default values', async () => {
    jest.mocked(readJson).mockImplementation(() => Promise.resolve());

    await generateBadges();

    expect(readJson).toHaveBeenCalledWith(defaultSummaryPath);
    expect(generateCoverageFileCurry).toHaveBeenCalledTimes(5);
  });

  it('should use custom summary path and output dir', async () => {
    jest.mocked(readJson).mockImplementation(() => Promise.resolve());

    await generateBadges(defaultSummaryPath, defaultOutputDir);

    expect(readJson).toHaveBeenCalledWith(defaultSummaryPath);
    expect(generateCoverageFileCurry).toHaveBeenCalledTimes(5);
  });

  it('should use the summary path given as parameter', async () => {
    jest.mocked(readJson).mockImplementation(() => Promise.resolve());

    const summaryPath = 'yolo';

    await generateBadges(summaryPath, defaultOutputDir);

    expect(readJson).toHaveBeenCalledWith(summaryPath);
  });
});
