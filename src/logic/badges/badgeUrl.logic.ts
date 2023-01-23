import { CoverageSummary } from '@type/coverageSummary.type';
import { Summary } from '@type/summary.type';
import { TotalKey } from '@type/totalKey.type';

import { getBadgeColor } from './badgeColor.logic';
import { getPercentage } from '../data/coveragePercentage.logic';

export const getBadgeUrl = (
  summary: Summary,
  key: keyof CoverageSummary | TotalKey,
): string | undefined => {
  const percentage = getPercentage(summary, key);
  if (percentage === undefined) {
    return undefined;
  }

  // https://shields.io/category/coverage
  const coverage = `${percentage}${encodeURI('%')}`;
  const colour = getBadgeColor(percentage);

  return `https://img.shields.io/badge/${key}-${coverage}-${colour}?logo=jest`;
};
