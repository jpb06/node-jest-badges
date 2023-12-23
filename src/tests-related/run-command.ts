export const runCommand = (
  validationFilePath: string,
  ...args: string[]
): unknown => {
  process.argv = [
    'node', // Not used but a value is required at this index in the array
    'cli.js', // Not used but a value is required at this index in the array
    ...args,
  ];

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(validationFilePath).validateArguments();
};
