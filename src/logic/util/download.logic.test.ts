/* eslint-disable no-console */
import axios from 'axios';
import { mocked } from 'jest-mock';

import { download } from './download.logic';

jest.mock('axios');

describe('Download function', () => {
  const url = 'https://yolo.org';
  console.info = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('should return an empty string if an error occured', async () => {
    mocked(axios.get).mockRejectedValueOnce('Oh no!');

    const result = await download('');

    expect(result).toBe('');
    expect(console.info).toHaveBeenCalledTimes(1);
  });

  it('should return the fetched data', async () => {
    const data = 'Yolo man';
    mocked(axios.get).mockResolvedValueOnce({ data });

    const result = await download(url);

    expect(result).toBe(data);
  });
});
