const checkIsObject = (value: unknown): value is Record<string, unknown> => {
  const isObject = typeof value === 'object' && value !== null;

  return isObject;
};

export const isEqual = (ls: unknown, rs: unknown): boolean => {
  if (!checkIsObject(ls) || !checkIsObject(rs)) {
    throw new Error('Значения должны быть объектами');
  }

  const lsKeys = new Set(Object.keys(ls));
  const rsKeys = new Set(Object.keys(rs));

  const isSubset = <T>(a: Set<T>, b: Set<T>) => {
    for (const item of a) {
      if (!b.has(item)) {
        return false;
      }
    }

    return true;
  };

  if (!isSubset(lsKeys, rsKeys) || !isSubset(rsKeys, lsKeys)) {
    return false;
  }

  let res = true;

  for (const key of lsKeys) {
    const lsValue = ls[key];
    const rsValue = rs[key];

    const isLsValueObj = checkIsObject(lsValue);
    const isRsValueObj = checkIsObject(rsValue);

    if (isLsValueObj && !isRsValueObj) {
      return false;
    }

    if (isLsValueObj && isRsValueObj) {
      res = isEqual(lsValue, rsValue);
    } else {
      res = lsValue === rsValue;
    }

    if (!res) {
      return false;
    }
  }

  return res;
};
