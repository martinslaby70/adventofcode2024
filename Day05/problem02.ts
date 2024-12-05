import { input, rules } from "./input";

/**
 * https://adventofcode.com/2024/day/5
 */
const sortRow = (row: number[]) =>
  [...row].sort((a, b) => {
    const isBefore = rules.some(([ruleA, ruleB]) => a === ruleA && b === ruleB);
    return isBefore ? -1 : 1;
  });

const result = input.split("\n").reduce((prev, current) => {
  const row = current.split(",").map(Number);
  const sortedRow = sortRow(row);

  const isOrderIncorrect = row.some((item, index) => item !== sortedRow[index]);

  if (isOrderIncorrect) {
    const middleNumber = sortedRow[Math.floor(sortedRow.length / 2)];

    return prev + middleNumber;
  }

  return prev;
}, 0);

console.log(result);
