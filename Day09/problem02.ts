import { readFileSync } from "fs";

/**
 * https://adventofcode.com/2024/day/9
 */
const file = readFileSync(`${__dirname}/test.txt`, "utf-8");
const isOdd = (num: number) => num % 2;

const decoded = file.split("").map((item, index) => {
  const chunkLength = Number(item);
  const replaceChar = isOdd(index) ? "." : index / 2;

  return {
    file: Array(chunkLength).fill(replaceChar),
    type: isOdd(index) ? "space" : "file",
  };
});

for (let i = decoded.length - 1; i >= 0; i--) {
  const file = decoded[i];

  if (file.type === "space") continue;

  const firstSpaceThatFitsFileIndex = decoded.findIndex(
    (item) => item.type === "space" && item.file.length >= file.file.length
  );

  if (firstSpaceThatFitsFileIndex !== -1 && i > firstSpaceThatFitsFileIndex) {
    [decoded[firstSpaceThatFitsFileIndex], decoded[i]] = [
      decoded[i],
      decoded[firstSpaceThatFitsFileIndex],
    ];
  }
}

const result = decoded
  .flatMap((item) => item.file)
  .reduce((prev, current, index) => prev + current.file * index, 0);

console.log(result);
