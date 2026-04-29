// import type { Indexed } from '../types';
//
// export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
//   if (typeof path !== 'string') {
//     throw new Error('path must be string');
//   }
//
//   if (typeof object !== 'object' || object === null) {
//     return object;
//   }
//
//   const keys = path.split('.');
//   let current = object as Indexed;
//
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//
//     if (i === keys.length - 1) {
//       current[key] = value;
//     } else {
//       if (typeof current[key] !== 'object' || current[key] === null) {
//         current[key] = {};
//       }
//
//       current = current[key] as Indexed;
//     }
//   }
//
//   console.log(current);
//
//   return current as Indexed;
// };

export const set = (object: unknown, path: string, value: unknown): unknown => {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const keys = path.split('.');
  let current: any = object;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      if (typeof current[key] !== 'object' || current[key] === null) {
        current[key] = {};
      }

      current = current[key];
    }
  }

  // Возвращаем исходный (корневой) объект
  return object;
};
