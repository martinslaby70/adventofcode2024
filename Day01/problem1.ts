import { listA, listB } from "./input";

/**
 * https://adventofcode.com/2024/day/1
 */

// sorted lists
const sortedListA = listA.sort((a, b) => (a > b ? 1 : -1));
const sortedListB = listB.sort((a, b) => (a > b ? 1 : -1));

// difference between list values
const difference = sortedListA.reduce((prev, current, index) => {
  const itemB = sortedListB[index];
  const diff = Math.abs(current - itemB);
  return prev + diff;
}, 0);

console.log(difference);
