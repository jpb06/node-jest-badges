export const coverageKeysArray = [
  'jest coverage',
  'lines',
  'statements',
  'functions',
  'branches',
] as const;

export type CoverageKeys = (typeof coverageKeysArray)[number];
export type TotalCoverageKey = (typeof coverageKeysArray)[0];
