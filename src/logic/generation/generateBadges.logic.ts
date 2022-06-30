import { outputDir, defaultSummaryPath } from '@constants/fileSystem.constants';
import { Summary } from '@type/summary.type';
import { emptyDir, ensureDir, readJson } from 'fs-extra';

import { generateCoverageFile } from './generateCoverageFile.logic';

export const generateBadges = async (
  summaryPath?: string,
): Promise<boolean> => {
  await ensureDir(outputDir);
  await emptyDir(outputDir);

  try {
    const path = summaryPath ?? defaultSummaryPath;
    const summary = (await readJson(path)) as Summary;

    await generateCoverageFile(summary, 'jest coverage');
    await generateCoverageFile(summary, 'lines');
    await generateCoverageFile(summary, 'statements');
    await generateCoverageFile(summary, 'functions');
    await generateCoverageFile(summary, 'branches');

    return true;
  } catch (err) {
    throw new Error((err as { message: string }).message);
  }
};
