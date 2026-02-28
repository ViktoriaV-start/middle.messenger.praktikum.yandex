/**
 * Проверит, что значение не пустое Map, Set, Array, Object, String
 */
const isEmpty = (value: any) => {
  const valueType = typeof value;
  const types = ['undefined', 'number', 'boolean'];

  if (types.includes(valueType)) {
    return true;
  }

  if (value === null) {
    return true;
  }

  const isString = valueType === 'string';
  const isArray = Array.isArray(value);
  const isObject = valueType === 'object';

  if (isString || isArray) {
    return !value.length;
  }

  if (value instanceof Set || value instanceof Map) {
    return !value.size;
  }

  if (isObject) {
    const arrayFromObject = Object.keys(value);
    return !arrayFromObject.length;
  }
};

console.log(isEmpty(undefined));
console.log(isEmpty(0));
console.log(isEmpty(123));
console.log(isEmpty(null));
console.log(isEmpty(true));
console.log(isEmpty(false));
console.log(isEmpty(''));
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty([undefined, 1, 2, 3]));
