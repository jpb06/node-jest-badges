import axios from 'axios';
import { Effect } from 'effect';
import { writeFile } from 'fs-extra';

import { defaultOutputDir } from '@constants';
import { coverageSummaryFileContentMock } from '@tests';

import { getBadgeUrl } from '@logic/badges/badgeUrl.logic';

import { generateCoverageFile } from './generateCoverageFile.logic';

jest.mock('axios');
jest.mock('fs-extra');
jest.mock('@logic/badges/badgeUrl.logic');

describe('generateCoverageFile function', () => {
  global.console = {
    error: jest.fn(),
    info: global.console.info,
  } as unknown as Console;

  const summary = coverageSummaryFileContentMock();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should short circuit if there is no badge url', async () => {
    jest.mocked(getBadgeUrl).mockReturnValueOnce(undefined);

    await Effect.runPromise(
      generateCoverageFile(summary, defaultOutputDir)('functions'),
    );

    expect(axios.get).toHaveBeenCalledTimes(0);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('should not write the file if there is no data', async () => {
    jest.mocked(getBadgeUrl).mockReturnValueOnce('yolo');
    jest.mocked(axios.get).mockResolvedValueOnce({ data: '' });

    await Effect.runPromise(
      generateCoverageFile(summary, defaultOutputDir)('functions'),
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(writeFile).toHaveBeenCalledTimes(0);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('should write the file', async () => {
    jest.mocked(axios.get).mockResolvedValueOnce({ data: 'yolo' });
    jest.mocked(writeFile).mockImplementationOnce(() => Promise.resolve());
    jest.mocked(getBadgeUrl).mockReturnValueOnce('yolo');

    await Effect.runPromise(
      generateCoverageFile(summary, defaultOutputDir)('functions'),
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(writeFile).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledTimes(0);
  });
});
