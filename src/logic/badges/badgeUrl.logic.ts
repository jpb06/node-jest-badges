import { CoverageSummary } from "@owntypes/coverageSummary.type";
import { Summary } from "@owntypes/summary.type";
import { TotalKey } from "@owntypes/totalKey.type";

import { getPercentage } from "../data/coveragePercentage.logic";
import { getBadgeColor } from "./badgeColor.logic";

export const getBadgeUrl = (
  summary: Summary,
  key: keyof CoverageSummary | TotalKey
) => {
  const percentage = getPercentage(summary, key);
  if (percentage === undefined) return;

  // https://shields.io/category/coverage
  const coverage = `${percentage}${encodeURI("%")}`;
  const colour = getBadgeColor(percentage);
  const url = `https://img.shields.io/badge/${key}-${coverage}-${colour}?logo=jest`;

  return url;
};
