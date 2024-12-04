import { input } from "./input";

const rows = input.split("\n").filter((row) => row !== "");

/**
https://adventofcode.com/2024/day/4
 
--- Part Two ---
The Elf looks quizzically at you. Did you misunderstand the assignment?

Looking for the instructions, you flip over the word search to find that 
this isn't actually an XMAS puzzle; it's an X-MAS puzzle in which you're 
supposed to find two MAS in the shape of an X. One way to achieve that 
is like this:

M.S
.A.
M.S

Irrelevant characters have again been replaced with . in the above diagram.
 Within the X, each MAS can be written forwards or backwards.

Here's the same example from before, but this time all of the X-MASes 
have been kept instead:

.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........

In this example, an X-MAS appears 9 times.

Flip the word search from the instructions back over to the word search
 side and try again. How many times does an X-MAS appear?
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
