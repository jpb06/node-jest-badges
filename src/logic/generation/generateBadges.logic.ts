import { ensureDir, readJson } from "fs-extra";

import { outputDir, summaryPath } from "@constants/fileSystem.constants";
import { summaryKeys } from "@constants/summaryKeys.constant";
import { Summary } from "@owntypes/summary.type";

import { generateCoverageFile } from "./generateCoverageFile.logic";

export const generateBadges = async () => {
  const summary = (await readJson(summaryPath)) as Summary;

  await ensureDir(outputDir);
  await Promise.all([
    [...summaryKeys].map((key) => generateCoverageFile(summary, key)),
    generateCoverageFile(summary, "global coverage"),
  ]);
};
