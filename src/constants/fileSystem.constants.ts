import { join } from 'path';

export const defaultOutputDir = './badges';
export const defaultSummaryPath = join(
  process.cwd(),
  'coverage',
  'coverage-summary.json',
);
