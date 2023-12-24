/* eslint-disable no-console */
import { coverageSummaryFileContentMock } from '@tests';

import { getBadgeUrl } from './badgeUrl.logic';

describe('badgeUrl function', () => {
  console.info = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('should return undefined if percentage is missing', () => {
    const summary = coverageSummaryFileContentMock();

    const result = getBadgeUrl(summary, 'branches');

    expect(result).toBeUndefined();
    expect(console.info).toHaveBeenCalledTimes(1);
    expect(console.info).toHaveBeenCalledWith(
      "No value for key 'branches' found in coverage report",
    );
  });

  it('should return the badge url', () => {
    const summary = coverageSummaryFileContentMock(50);

    const result = getBadgeUrl(summary, 'lines');

    expect(result).toBe(
      'https://img.shields.io/badge/lines-50%25-red?logo=jest',
    );
  });
});
