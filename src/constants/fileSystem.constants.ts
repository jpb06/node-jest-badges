import { join } from 'path';

export const outputDir = join(process.cwd(), 'badges');
export const defaultSummaryPath = join(
  process.cwd(),
  'coverage',
  'coverage-summary.json',
);
