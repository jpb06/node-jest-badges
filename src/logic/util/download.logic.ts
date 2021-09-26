import axios from 'axios';

export const download = async (url: string): Promise<string> => {
  try {
    const response = await axios.get<string>(url);

    return response.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.info(`Unable to retrieve data from ${url}`);
    return '';
  }
};
