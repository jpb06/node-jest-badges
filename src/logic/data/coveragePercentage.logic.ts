import { summaryKeys } from '@constants';
import { CoverageSummaryFileContent, CoverageKeys } from '@types';

const getTotalPercentage = (summary: CoverageSummaryFileContent): number => {
  const result =
    summaryKeys
      .map((k) => summary.total[k].pct ?? 0)
      .reduce((a, b) => a + b, 0) / summaryKeys.length;

  return Math.round((result + Number.EPSILON) * 100) / 100;
};

export const getPercentage = (
  summary: CoverageSummaryFileContent,
  key: CoverageKeys,
): number | undefined => {
  if (key === 'jest coverage') {
    return getTotalPercentage(summary);
  }

  const value = summary.total[key].pct;
  if (value === undefined) {
    // eslint-disable-next-line no-console
    console.info(`No value for key '${key}' found in coverage report`);
  }
  return value;
};
