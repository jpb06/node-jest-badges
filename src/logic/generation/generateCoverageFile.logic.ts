import { join } from 'path';

import { Effect } from 'effect';

import { CoverageSummaryFileContent, CoverageKeys } from '@types';

import { getBadgeUrl } from '@logic/badges/badgeUrl.logic';
import { download } from '@logic/effects/download.effect';
import { writeFile } from '@logic/effects/fsExtra.effects';

export const generateCoverageFile =
  (summary: CoverageSummaryFileContent, outputPath: string) =>
  (key: CoverageKeys) =>
    Effect.gen(function* (_) {
      const badgeUrl = getBadgeUrl(summary, key);
      if (!badgeUrl) {
        console.error(`generateCoverageFile: missing badgeUrl for ${key}`);
        return;
      }

      const path = join(outputPath, `coverage-${key}.svg`);
      const file = yield* _(download(badgeUrl));
      if (file.length > 0) {
        yield* _(writeFile(path, file));
      } else {
        console.error(`generateCoverageFile: no file to write for ${key}`);
      }
    });
