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

    if (char !== "X") continue;

    const getNextCharsByOffset = (offset: number) => {
      const nextCharRight = row?.[j + offset];
      const nextCharRightDown = rows[i + offset]?.[j + offset];
      const nextCharDown = rows?.[i + offset]?.[j];
      const nextCharDownLeft = rows[i + offset]?.[j - offset];
      const nextCharLeft = row?.[j - offset];
      const nextCharRightUp = rows?.[i - offset]?.[j + offset];
      const nextCharUp = rows?.[i - offset]?.[j];
      const nextCharLeftUp = rows?.[i - offset]?.[j - offset];

      return [
        nextCharRight,
        nextCharRightDown,
        nextCharDown,
        nextCharDownLeft,
        nextCharLeft,
        nextCharRightUp,
        nextCharUp,
        nextCharLeftUp,
      ];
    };

    for (let index = 0; index < 8; index++) {
      if (
        getNextCharsByOffset(0)[index] === "X" &&
        getNextCharsByOffset(1)[index] === "M" &&
        getNextCharsByOffset(2)[index] === "A" &&
        getNextCharsByOffset(3)[index] === "S"
      ) {
        count++;
      }
    }
  }
}

console.log(count);
