import fetch from 'node-fetch';

export const download = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.text();

    return data;
  } catch (err) {
    console.info(`Unable to retrieve data from ${url}`);
    return '';
  }
};
