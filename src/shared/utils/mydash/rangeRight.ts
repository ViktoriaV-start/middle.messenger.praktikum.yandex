import { baseRange } from './range.ts';

function range(
  start: number | undefined,
  end: number,
  step: number | undefined,
  isRight: boolean = false
): number[] {
  let startValue = 0;
  let endValue = 0;
  let stepValue = 1;

  if (start === undefined) {
    return [];
  }

  if (end === undefined) {
    endValue = start;
    startValue = 0;

    if (endValue === 0) {
      return [];
    }

    if (endValue < 0) {
      stepValue = -1;
    }
  } else {
    startValue = start;
    endValue = end;

    if (step === undefined) {
      stepValue = startValue < endValue ? 1 : -1;
    } else {
      stepValue = step;
    }
  }

  const result = baseRange(startValue, endValue, stepValue);

  return isRight ? result.reverse() : result;
}

// TODO - безобразие, обязательный параметр не может следовать за опциональным
// TODO Перееделать, первые два параметра должны быть точно обязательными
// По задаче - знак у end и step должен совпадать?
export function rangeRight(
  start: number | undefined,
  end: number,
  step?: number | undefined
): number[] {
  return range(start, end, step, true);
}

console.log(rangeRight(0, 4)); // [3, 2, 1, 0]
// console.log(rangeRight(-4)); // [-3, -2, -1, 0]
console.log(rangeRight(1, 5)); // [4, 3, 2, 1]
console.log(rangeRight(0, 20, 5)); // [15, 10, 5, 0]
console.log(rangeRight(0, -4, -1)); // [-3, -2, -1, 0]
console.log(rangeRight(1, 4, 1)); // [1, 1, 1]
// console.log(rangeRight(0)); // []
