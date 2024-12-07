import { input } from "./input";

/**
 * https://adventofcode.com/2024/day/7
 */
const operators: ((a: number, b: number) => number)[] = [
  (a, b) => a * b,
  (a, b) => a + b,
  (a, b) => Number(`${a}${b}`),
];

const result = Object.entries(input).reduce((prev, [key, value]) => {
  const result = Number(key);
  const values = value.split(" ").map(Number);

  const evaluate = (numbers: number[]) => {
    if (numbers[0] > result) return false;

    if (numbers.length === 1) return numbers[0] === result;

    for (const op of operators) {
      if (evaluate([op(numbers[0], numbers[1]), ...numbers.slice(2)])) {
        return true;
      }
    }
  };
  return prev + (evaluate(values) ? result : 0);
}, 0);

console.log(result);
