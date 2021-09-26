import { CoverageSummary } from './coverageSummary.type';

export type Summary = {
  [file: string]: CoverageSummary;
  total: CoverageSummary;
};
