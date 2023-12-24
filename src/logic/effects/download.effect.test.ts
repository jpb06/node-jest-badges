/* eslint-disable no-console */
import axios from 'axios';
import { Effect } from 'effect';

import { download } from './download.effect';

jest.mock('axios');

describe('Download function', () => {
  const url = 'https://yolo.org';
  global.console = {
    info: jest.fn(),
    error: jest.fn(),
    warn: global.console.warn,
  } as unknown as Console;

  beforeEach(() => jest.clearAllMocks());

  it('should return an empty string if an error occured', async () => {
    jest.mocked(axios.get).mockRejectedValueOnce('Oh no!');

    const promise = Effect.runPromise(download(url));

    await expect(promise).rejects.toThrow();
  });

  it('should return the fetched data', async () => {
    const data = 'Yolo man';
    jest.mocked(axios.get).mockResolvedValueOnce({ data });

    const result = await Effect.runPromise(download(url));

    expect(result).toBe(data);
  });
});
