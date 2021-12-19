import { getBadgeUrl } from '@logic/badges/badgeUrl.logic';
import { download } from '@logic/util/download.logic';
import { summaryMock } from '@tests/data/summary.mock-data';
import { writeFile } from 'fs-extra';
import { mocked } from 'jest-mock';

import { generateCoverageFile } from './generateCoverageFile.logic';

jest.mock('fs-extra');
jest.mock('@logic/badges/badgeUrl.logic');
jest.mock('@logic/util/download.logic');

describe('generateCoverageFile function', () => {
  global.console = { error: jest.fn() } as unknown as Console;

  const summary = summaryMock();

  beforeEach(() => jest.clearAllMocks());

  it('should short circuit if there is no badge url', async () => {
    mocked(getBadgeUrl).mockReturnValueOnce(undefined);

    await generateCoverageFile(summary, 'functions');

    expect(download).toHaveBeenCalledTimes(0);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('should not write the file if there is no data', async () => {
    mocked(getBadgeUrl).mockReturnValueOnce('yolo');
    mocked(download).mockResolvedValueOnce('');

    await generateCoverageFile(summary, 'functions');

    expect(download).toHaveBeenCalledTimes(1);
    expect(writeFile).toHaveBeenCalledTimes(0);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('should write the file', async () => {
    mocked(getBadgeUrl).mockReturnValueOnce('yolo');
    mocked(download).mockResolvedValueOnce('yoloman');

    await generateCoverageFile(summary, 'functions');

    expect(download).toHaveBeenCalledTimes(1);
    expect(writeFile).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledTimes(0);
  });
});
