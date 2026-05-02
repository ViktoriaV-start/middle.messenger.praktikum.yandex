const checkIsObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export const isEqual = (a: unknown, b: unknown): boolean => {
  // одинаковые примитивы / ссылки (включая NaN-safe поведение тут не добавлял)
  if (a === b) {
    return true;
  }

  // если один из них null или типы разные — сразу false
  if (a === null || b === null || typeof a !== typeof b) {
    return false;
  }

  // массивы
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  // если один массив, а другой нет
  if (Array.isArray(a) || Array.isArray(b)) {
    return false;
  }

  // объекты
  if (checkIsObject(a) && checkIsObject(b)) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (const key of aKeys) {
      if (!isEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
};
