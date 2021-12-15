import { emptyDir, ensureDir, readJson } from 'fs-extra';
import { mocked } from 'jest-mock';

import { generateBadges } from './generateBadges.logic';
import { generateCoverageFile } from './generateCoverageFile.logic';

jest.mock('fs-extra');
jest.mock('./generateCoverageFile.logic');

describe('generateBadges function', () => {
  global.console = { error: jest.fn() } as unknown as Console;

  beforeEach(() => jest.clearAllMocks());

  it('should ensure outDir is there and clear it', async () => {
    await generateBadges();

    expect(ensureDir).toHaveBeenCalledTimes(1);
    expect(emptyDir).toHaveBeenCalledTimes(1);
  });

  it('should generate all badges', async () => {
    await generateBadges();

    expect(readJson).toHaveBeenCalledTimes(1);
    expect(generateCoverageFile).toHaveBeenCalledTimes(5);
    expect(console.error).toHaveBeenCalledTimes(0);
  });

  it('should report on errors', async () => {
    mocked(readJson).mockRejectedValueOnce('Oh no!' as never);

    await generateBadges();

    expect(readJson).toHaveBeenCalledTimes(1);
    expect(generateCoverageFile).toHaveBeenCalledTimes(0);
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
