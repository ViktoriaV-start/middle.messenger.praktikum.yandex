import { SNAKE_CASE_REGEXP } from '@shared/constants/regexp.ts';

export const convertSnakeToCamel = (str: string) => {
  const convertedStr = str.replace(SNAKE_CASE_REGEXP, (_, letter) => letter.toUpperCase());

  return convertedStr;
};
