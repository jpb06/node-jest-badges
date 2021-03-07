import { summaryMock } from "@tests/data/summary.mock-data";

import { getPercentage } from "./coveragePercentage.logic";

describe("getCoveragePercentage function", () => {
  console.info = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it("should return the branches percentage", () => {
    const summary = summaryMock(10, 20, 30, 40);
    const result = getPercentage(summary, "branches");

    expect(result).toBe(30);
  });

  it("should return total percentage", () => {
    const summary = summaryMock(10, 20, 30, 40);
    const result = getPercentage(summary, "global coverage");

    const total = (10 + 20 + 30 + 40) / 4;
    expect(result).toBe(total);
  });

  it("should return total percentage even if a key is missing", () => {
    const summary = summaryMock(10, 20, 30);
    const result = getPercentage(summary, "global coverage");

    const total = (10 + 20 + 30) / 4;
    expect(result).toBe(total);
  });

  it("should display a message if a key is missing", () => {
    const summary = summaryMock(10, 20, 30);
    const result = getPercentage(summary, "functions");

    expect(result).toBeUndefined();
    expect(console.info).toHaveBeenCalledTimes(1);
    expect(console.info).toHaveBeenCalledWith(
      `No value for key 'functions' found in coverage report`
    );
  });

  it("should accurately report total percentage if a key has a percentage at 0", () => {
    const summary = summaryMock(10, 20, 30, 0);
    const result = getPercentage(summary, "global coverage");

    const total = (10 + 20 + 30) / 4;
    expect(result).toBe(total);
  });
});
