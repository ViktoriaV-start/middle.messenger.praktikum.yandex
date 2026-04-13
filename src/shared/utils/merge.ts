import type { Indexed } from '../types';

/**
 * Объединяет 2 объекта
 */
export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  if (typeof lhs !== 'object' || lhs === null || typeof rhs !== 'object' || rhs === null) {
    return rhs;
  }

  const result = { ...lhs };

  for (const key of Object.keys(rhs)) {
    if (
      typeof result[key] === 'object' &&
      result[key] !== null &&
      typeof rhs[key] === 'object' &&
      rhs[key] !== null
    ) {
      result[key] = merge(result[key] as Indexed, rhs[key] as Indexed);
    } else {
      result[key] = rhs[key];
    }
  }

  return result;
}

// Авторское решение

// type Indexed<T = unknown> = {
//   [key in string]: T;
// };
//
// function merge(lhs: Indexed, rhs: Indexed): Indexed {
//   for (let p in rhs) {
//     if (!rhs.hasOwnProperty(p)) {
//       continue;
//     }
//
//     try {
//       if (rhs[p].constructor === Object) {
//         rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
//       } else {
//         lhs[p] = rhs[p];
//       }
//     } catch(e) {
//       lhs[p] = rhs[p];
//     }
//   }
//
//   return lhs;
// }
//
// export default merge
