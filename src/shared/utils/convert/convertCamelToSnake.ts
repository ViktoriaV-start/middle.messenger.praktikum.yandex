import { UPPER_LETTER_REGEXP } from '@shared/constants/regexp.ts';

export const convertCamelToSnake = (str: string) => {
  const convertedStr = str.replace(UPPER_LETTER_REGEXP, (letter) => `_${letter.toLowerCase()}`);

  return convertedStr;
};
