import { input } from "./input";

const rows = input.split("\n").filter((row) => row !== "");

/**
 * https://adventofcode.com/2024/day/4
 */

let count = 0;
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];

  for (let j = 0; j < row.length; j++) {
    const char = row[j];

    if (char !== "A") continue;

    const charRightDown = rows?.[i + 1]?.[j + 1];
    const charDownLeft = rows?.[i + 1]?.[j - 1];
    const charRightUp = rows?.[i - 1]?.[j + 1];
    const charLeftUp = rows?.[i - 1]?.[j - 1];

    const hasXmasToLeft = charLeftUp === "M" && charRightDown === "S";
    const hasXmasToLeft_reverse = charLeftUp === "S" && charRightDown === "M";

    const hasXmasToRight = charDownLeft === "M" && charRightUp === "S";
    const hasXmasToRight_reverse = charDownLeft === "S" && charRightUp === "M";

    if (
      (hasXmasToLeft || hasXmasToLeft_reverse) &&
      (hasXmasToRight || hasXmasToRight_reverse)
    ) {
      count++;
    }
  }
}

console.log(count);
