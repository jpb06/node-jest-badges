import { join } from 'path';

export const defaultOutputDir = join(process.cwd(), 'badges');
export const defaultSummaryPath = join(
  process.cwd(),
  'coverage',
  'coverage-summary.json',
);
