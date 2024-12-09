import { readFileSync } from "fs";

/**
 * https://adventofcode.com/2024/day/9
 */
const file = readFileSync(`${__dirname}/input.txt`, "utf-8");
const isOdd = (num: number) => num % 2;

const decoded = file.split("").flatMap((item, index) => {
  const chunkLength = Number(item);
  const replaceChar = isOdd(index) ? "." : index / 2;

  return [...Array(chunkLength).fill(replaceChar)];
});

for (let i = decoded.length - 1; i >= 0; i--) {
  const element = decoded[i];

  if (element === ".") continue;

  const firstDotIndex = decoded.findIndex((item) => item === ".");

  decoded[firstDotIndex] = element;
  decoded[i] = ".";
}

const sorted = decoded.filter((item) => item !== ".");
const result = sorted.reduce(
  (prev, current, index) => prev + current * index,
  0
);

console.log(result);
