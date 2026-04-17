/**
 * Вернет первый элемент массива
 */
export const first = <T>(list: T[]): T | undefined => {
  if (!Array.isArray(list)) {
    return undefined;
  }
  if (!list.length) {
    return undefined;
  }
  const lastElement = list.at(0);

  return lastElement;
};
