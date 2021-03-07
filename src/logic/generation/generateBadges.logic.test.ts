import { ensureDir, readJson } from "fs-extra";

import { generateBadges } from "./generateBadges.logic";
import { generateCoverageFile } from "./generateCoverageFile.logic";

jest.mock("fs-extra");
jest.mock("./generateCoverageFile.logic");

describe("generateBadges function", () => {
  it("should generate all badges", async () => {
    await generateBadges();

    expect(ensureDir).toHaveBeenCalledTimes(1);
    expect(readJson).toHaveBeenCalledTimes(1);
    expect(generateCoverageFile).toHaveBeenCalledTimes(5);
  });
});
