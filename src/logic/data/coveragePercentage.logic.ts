import { summaryKeys } from '@constants/summaryKeys.constant';
import { CoverageSummary } from '@type/coverageSummary.type';
import { Summary } from '@type/summary.type';
import { TotalKey } from '@type/totalKey.type';

const getTotalPercentage = (summary: Summary): number => {
  const result =
    summaryKeys
      .map((k) => summary.total[k].pct || 0)
      .reduce((a, b) => a + b, 0) / summaryKeys.length;

  return Math.round((result + Number.EPSILON) * 100) / 100;
};

export const getPercentage = (
  summary: Summary,
  key: keyof CoverageSummary | TotalKey,
): number | undefined => {
  if (key === 'global coverage') {
    return getTotalPercentage(summary);
  }

  const value = summary.total[key].pct;
  if (value === undefined) {
    // eslint-disable-next-line no-console
    console.info(`No value for key '${key}' found in coverage report`);
  }
  return value;
};
