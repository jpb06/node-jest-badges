import {
  defaultOutputDir,
  defaultSummaryPath,
} from '@constants/fileSystem.constants';
import { Summary } from '@type/summary.type';
import { emptyDir, ensureDir, readJson } from 'fs-extra';

import { generateCoverageFile } from './generateCoverageFile.logic';

export const generateBadges = async ({
  coverageSummaryPath = defaultSummaryPath,
  outputPath = defaultOutputDir,
}): Promise<boolean> => {
  await ensureDir(outputPath);
  await emptyDir(outputPath);

  try {
    const summary = (await readJson(coverageSummaryPath)) as Summary;

    await generateCoverageFile(summary, 'jest coverage', outputPath);
    await generateCoverageFile(summary, 'lines', outputPath);
    await generateCoverageFile(summary, 'statements', outputPath);
    await generateCoverageFile(summary, 'functions', outputPath);
    await generateCoverageFile(summary, 'branches', outputPath);

    return true;
  } catch (err) {
    throw new Error((err as { message: string }).message);
  }
};
