import fetch, { Response } from 'node-fetch';
import { mocked } from 'ts-jest/utils';

import { download } from './download.logic';

jest.mock('node-fetch');

describe('Download function', () => {
  const url = 'https://yolo.org';
  console.info = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('should return an empty string if an error occured', async () => {
    mocked(fetch).mockRejectedValueOnce('');

    const result = await download('');

    expect(result).toBe('');
    expect(console.info).toHaveBeenCalledTimes(1);
  });

  it('should return the fetched data', async () => {
    const data = 'Yolo man';
    mocked(fetch).mockImplementationOnce(() =>
      Promise.resolve({ text: () => data } as unknown as Response)
    );

    const result = await download(url);

    expect(result).toBe(data);
  });
});
