type Indexed<T = any> = {
  [k in string | symbol]: T;
};

export function cloneDeep<T extends Indexed>(obj: T) {
  return (function _cloneDeep(
    item: T
  ): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
    // Handle:
    // * null
    // * undefined
    // * boolean
    // * number
    // * string
    // * symbol
    // * function
    if (item === null || typeof item !== 'object') {
      return item;
    }

    // Handle:
    // * Date
    if (item instanceof Date) {
      return new Date((item as Date).valueOf());
    }

    // Handle:
    // * Array
    if (item instanceof Array) {
      const copy: ReturnType<typeof _cloneDeep>[] = [];

      item.forEach((_, i) => (copy[i] = _cloneDeep(item[i])));

      return copy;
    }

    // Handle:
    // * Set
    if (item instanceof Set) {
      const copy = new Set();

      item.forEach((v) => copy.add(_cloneDeep(v)));

      return copy;
    }

    // Handle:
    // * Map
    if (item instanceof Map) {
      const copy = new Map();

      item.forEach((v, k) => copy.set(k, _cloneDeep(v)));

      return copy;
    }

    // Handle:
    // * Object
    if (item instanceof Object) {
      const copy: Indexed = {};

      // Handle:
      // * Object.symbol
      Object.getOwnPropertySymbols(item).forEach(
        (s) => (copy[s.toString()] = _cloneDeep(item[s.toString()]))
      );

      // Handle:
      // * Object.name (other)
      Object.keys(item).forEach((k) => (copy[k] = _cloneDeep(item[k])));

      return copy;
    }

    throw new Error(`Unable to copy object: ${item}`);
  })(obj);
}

// type PlainObject<T = unknown> = {
//   [k in string]: T;
// };
//
// function checkIsPlainObject(value: unknown): value is PlainObject {
//   return (
//     typeof value === 'object' &&
//     value !== null &&
//     value.constructor === Object &&
//     Object.prototype.toString.call(value) === '[object Object]'
//   );
// }
//
// function checkIsArray(value: unknown): value is [] {
//   return Array.isArray(value);
// }
//
// export function cloneDeep<T extends object = object>(obj: T): T {
//   const isPlainObject = checkIsPlainObject(obj);
//   const isArray = checkIsArray(obj);
//
//   if (isPlainObject) {
//     const cloned: T = {} as T;
//     const keys = Object.keys(obj);
//
//     for (const key of keys) {
//       const value = obj[key];
//       const isPlainObject = checkIsPlainObject(value);
//       const isArray = checkIsArray(value);
//
//       if (!isPlainObject && !isArray) {
//         (cloned as Record<string, unknown>)[key] = value;
//       } else {
//         (cloned as Record<string, unknown>)[key] = cloneDeep(value as Record<string, unknown>);
//       }
//     }
//
//     return cloned;
//   }
//
//   if (isArray) {
//     const cloned: T = [] as T;
//
//     for (const value of obj) {
//       const isPlainObject = checkIsPlainObject(value);
//       const isArray = checkIsArray(value);
//
//       if (!isPlainObject && !isArray) {
//         (cloned as []).push(value);
//       } else {
//         (cloned as []).push(cloneDeep(value));
//       }
//     }
//
//     return cloned;
//   }
//
//   return obj;
// }
