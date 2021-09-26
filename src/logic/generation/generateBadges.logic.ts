import { outputDir, summaryPath } from '@constants/fileSystem.constants';
import { Summary } from '@type/summary.type';
import { emptyDir, ensureDir, readJson } from 'fs-extra';

import { generateCoverageFile } from './generateCoverageFile.logic';

export const generateBadges = async (): Promise<void> => {
  await ensureDir(outputDir);
  await emptyDir(outputDir);

  try {
    const summary = (await readJson(summaryPath)) as Summary;

    await generateCoverageFile(summary, 'global coverage');
    await generateCoverageFile(summary, 'lines');
    await generateCoverageFile(summary, 'statements');
    await generateCoverageFile(summary, 'functions');
    await generateCoverageFile(summary, 'branches');
  } catch (err) {
    console.error(`generateBadges: badges generation failure:`, err);
  }
};
