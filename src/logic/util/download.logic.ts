import fetch from 'node-fetch';

export const download = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    const data = await response.text();

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.info(`Unable to retrieve data from ${url}`);
    return '';
  }
};
