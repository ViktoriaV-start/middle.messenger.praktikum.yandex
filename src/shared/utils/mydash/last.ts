/**
 * Вернет последний элемент массива
 */
export const last = <T>(list: T[]): T | undefined => {
  if (!Array.isArray(list)) {
    return undefined;
  }
  if (!list.length) {
    return undefined;
  }
  const lastElement = list.at(-1);

  return lastElement;
};
