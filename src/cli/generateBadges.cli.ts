#!/usr/bin/env node
import { defaultSummaryPath } from '@constants/fileSystem.constants';
import { displayError, displaySuccess } from '@logic/console/console.messages';
import { generateBadges } from '@logic/generation/generateBadges.logic';

import { getProcessArguments } from './args/process-argv.indirection';

/* istanbul ignore file */

(async (): Promise<void> => {
  try {
    const args = getProcessArguments();

    let summaryPath = undefined;
    if (args.length === 1) {
      summaryPath = args[0];
    }

    await generateBadges(summaryPath);

    displaySuccess(summaryPath ?? defaultSummaryPath);
    process.exit(0);
  } catch (err) {
    displayError(err);
    process.exit(1);
  }
})();
