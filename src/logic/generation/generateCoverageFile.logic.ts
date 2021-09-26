import { join } from 'path';

import { outputDir } from '@constants/fileSystem.constants';
import { getBadgeUrl } from '@logic/badges/badgeUrl.logic';
import { download } from '@logic/util/download.logic';
import { CoverageSummary } from '@type/coverageSummary.type';
import { Summary } from '@type/summary.type';
import { TotalKey } from '@type/totalKey.type';
import { writeFile } from 'fs-extra';

export const generateCoverageFile = async (
  summary: Summary,
  key: keyof CoverageSummary | TotalKey,
): Promise<void> => {
  const badgeUrl = getBadgeUrl(summary, key);
  if (!badgeUrl) {
    console.error(`generateCoverageFile: missing badgeUrl for ${key}`);
    return;
  }

  const path = join(outputDir, `coverage-${key}.svg`);
  const file = await download(badgeUrl);

  if (file.length > 0) {
    await writeFile(path, file, { encoding: 'utf8' });
  } else {
    console.error(`generateCoverageFile: no file to write for ${key}`);
  }
};
