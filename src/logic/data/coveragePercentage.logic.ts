import { summaryKeys } from "@constants/summaryKeys.constant";
import { CoverageSummary } from "@owntypes/coverageSummary.type";
import { Summary } from "@owntypes/summary.type";
import { TotalKey } from "@owntypes/totalKey.type";

const getTotalPercentage = (summary: Summary) =>
  summaryKeys.map((k) => summary.total[k].pct || 0).reduce((a, b) => a + b, 0) /
  summaryKeys.length;

export const getPercentage = (
  summary: Summary,
  key: keyof CoverageSummary | TotalKey
) => {
  if (key === "global coverage") {
    return getTotalPercentage(summary);
  }

  const value = summary.total[key].pct;
  if (value === undefined) {
    console.info(`No value for key '${key}' found in coverage report`);
  }
  return value;
};
