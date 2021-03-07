import { FileCoverageTotal } from "./fileCoverageTotal.type";

export interface CoverageSummary {
  lines: FileCoverageTotal;
  statements: FileCoverageTotal;
  branches: FileCoverageTotal;
  functions: FileCoverageTotal;
}
