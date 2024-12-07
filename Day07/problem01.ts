import { input } from "./input";

/**
 * https://adventofcode.com/2024/day/7
 */
const result = Object.entries(input).reduce((prev, [key, values]) => {
  const numbers = values.split(" ").map(Number);

  const possibleResults = [[numbers[0]]];

  for (let i = 1; i < numbers.length; i++) {
    possibleResults.push(
      possibleResults[i - 1].flatMap((prevValue) => [
        prevValue + numbers[i],
        prevValue * numbers[i],
      ])
    );
  }

  if (possibleResults.flat().includes(Number(key))) {
    return prev + Number(key);
  }

  return prev;
}, 0);

console.log(result);
