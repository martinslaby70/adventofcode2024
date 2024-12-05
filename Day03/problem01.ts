import { readFileSync } from "fs";

/**
 * https://adventofcode.com/2024/day/3
 */
const file = readFileSync(`${__dirname}/input.txt`, "utf-8");
const mulRegex = /mul\(\d{1,3},\d{1,3}\)/gm;

const matches = file.match(mulRegex);

const result = matches?.reduce((prev, current) => {
  const strippedNumbers = current.slice(4, -1);
  const [val1, val2] = strippedNumbers.split(",");

  const baseValue = Number(val1);
  const multiplier = Number(val2);

  return prev + baseValue * multiplier;
}, 0);

console.log(result);
