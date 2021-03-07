import { writeFile } from "fs-extra";
import { join } from "path";

import { outputDir } from "@constants/fileSystem.constants";
import { getBadgeUrl } from "@logic/badges/badgeUrl.logic";
import { download } from "@logic/util/download.logic";
import { CoverageSummary } from "@owntypes/coverageSummary.type";
import { Summary } from "@owntypes/summary.type";
import { TotalKey } from "@owntypes/totalKey.type";

export const generateCoverageFile = async (
  summary: Summary,
  key: keyof CoverageSummary | TotalKey
) => {
  const badgeUrl = getBadgeUrl(summary, key);
  if (!badgeUrl) return;

  const path = join(outputDir, `coverage-${key}.svg`);
  const file = await download(badgeUrl);

  if (file.length > 0) await writeFile(path, file, { encoding: "utf8" });
};
