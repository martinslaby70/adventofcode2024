import { readFileSync } from "fs";

/**
 * https://adventofcode.com/2024/day/3
 */
const file = readFileSync(`${__dirname}/memory.txt`, "utf-8");
const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/gm;

const matches = file.matchAll(mulRegex);

const result = [...matches].reduce(
  ([total, factor], match) => {
    const [str, val1, val2] = match;

    switch (str.substring(0, 3)) {
      case "mul":
        total += Number(val1) * Number(val2) * factor;
        break;
      case "don":
        factor = 0;
        break;
      case "do(":
        factor = 1;
        break;
    }

    return [total, factor];
  },
  [0, 1]
)[0];

console.log(result);
