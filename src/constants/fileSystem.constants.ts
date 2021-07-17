import { join } from 'path';

export const outputDir = join(process.cwd(), 'badges');
export const summaryPath = join(
  process.cwd(),
  'coverage',
  'coverage-summary.json'
);
