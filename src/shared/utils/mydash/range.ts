export const baseRange = (start: number, end: number, step: number): number[] => {
  const result: number[] = [];

  if (step === 0) {
    const length = Math.abs(end - start);
    for (let i = 0; i < length; i++) {
      result.push(start);
    }
    return result;
  }

  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }

  return result;
};

export const range = (start = 0, end: number, step: number | undefined) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;
  return baseRange(start, end, step);
};
