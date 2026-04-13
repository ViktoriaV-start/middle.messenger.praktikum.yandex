import { MORE_THAN_ONE_SPACE_REG_EXP } from '../constants';

export const trim = (value: string, search?: string) => {
  const spacesRegexp = /^\s+|\s+$/;

  let cleanedValue = value.replace(MORE_THAN_ONE_SPACE_REG_EXP, ' ');

  if (search) {
    const searchRegexp = new RegExp(`^[${search}]+|[${search}]+$`, 'g');
    cleanedValue = cleanedValue.replace(searchRegexp, '');
  }

  cleanedValue = cleanedValue.replace(spacesRegexp, '');

  return cleanedValue;
};
