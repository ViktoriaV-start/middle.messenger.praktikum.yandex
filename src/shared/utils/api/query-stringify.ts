export const queryStringify = (data: Record<string, unknown>) => {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Data must be a non-null object');
  }

  const keys = Object.keys(data);

  if (keys.length === 0) {
    return '';
  }

  const queryParams = keys.reduce((result, key, index) => {
    const value = data[key];
    const valueType = typeof value;
    const isValidValueType =
      valueType === 'string' || valueType === 'number' || valueType === 'boolean';

    if (!isValidValueType) {
      return result;
    }

    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(value as string | number | boolean);

    const separator = index < keys.length - 1 ? '&' : '';

    return `${result}${encodedKey}=${encodedValue}${separator}`;
  }, '?');

  const cleanedQueryParams = queryParams.replace(/&$/, '');

  return cleanedQueryParams;
};

// type StringIndexed = Record<string, any>;
//
// const obj: StringIndexed = {
//   key: 1,
//   key2: 'test',
//   key3: false,
//   key4: true,
//   key5: [1, 2, 3],
//   key6: { a: 1 },
//   key7: { b: { d: 2 } },
// };
//
// function queryStringify(data: StringIndexed): string | never {
//   if (typeof data !== 'object' || data === null || Array.isArray(data)) {
//     throw new Error('input must be an object');
//   }
//
//   const buildQuery = (obj: any, parentKey?: string): string[] => {
//     const result: string[] = [];
//
//     Object.keys(obj).forEach((key) => {
//       const value = obj[key];
//       const fullKey = parentKey ? `${parentKey}[${key}]` : key;
//
//       if (value === null || value === undefined) {
//         return;
//       }
//
//       if (Array.isArray(value)) {
//         value.forEach((item, index) => {
//           const arrayKey = `${fullKey}[${index}]`;
//
//           if (typeof item === 'object' && item !== null) {
//             result.push(...buildQuery(item, arrayKey));
//           } else {
//             result.push(`${arrayKey}=${String(item)}`);
//           }
//         });
//       } else if (typeof value === 'object') {
//         result.push(...buildQuery(value, fullKey));
//       } else {
//         result.push(`${fullKey}=${String(value)}`);
//       }
//     });
//
//     return result;
//   };
//
//   return buildQuery(data).join('&');
// }
//
// export default queryStringify;
//
// queryStringify(obj); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
