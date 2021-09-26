import { FileCoverageTotal } from '@type/fileCoverageTotal.type';
import { Summary } from '@type/summary.type';

export const summaryMock = (
  linesPct?: number,
  statementsPct?: number,
  branchesPct?: number,
  functionsPct?: number,
): Summary => ({
  total: {
    lines: { pct: linesPct } as FileCoverageTotal,
    statements: { pct: statementsPct } as FileCoverageTotal,
    branches: { pct: branchesPct } as FileCoverageTotal,
    functions: { pct: functionsPct } as FileCoverageTotal,
  },
});
