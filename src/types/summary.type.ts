import { CoverageSummary } from "./coverageSummary.type";

export type Summary = {
  total: CoverageSummary;
  [file: string]: CoverageSummary;
};
