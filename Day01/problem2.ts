import { listA, listB } from "./input";

/**
 * https://adventofcode.com/2024/day/1
 */
// index numbers in listB for better simplicity
// const example: Record<string, number>= {"numberInListB": numberOfTimeThisNumberAppearsInTheList}
const listBNumbersCountByNumbers = listB.reduce<Record<string, number>>(
  (prev, current) => {
    const currentNumberAsKey = current.toString();
    const currentNumberExistingValue =
      currentNumberAsKey in prev ? prev[currentNumberAsKey] : "0";

    return {
      ...prev,
      [currentNumberAsKey]: Number(currentNumberExistingValue) + 1,
    };
  },
  {}
);

const similarityIndex = listA.reduce((prev, current) => {
  // how many times this number appear in listB
  const elementMultiplier = listBNumbersCountByNumbers[current] ?? 0;

  return prev + current * elementMultiplier;
}, 0);

console.log(similarityIndex);
