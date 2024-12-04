import { input } from "./input";

const rows = input.split("\n").filter((row) => row !== "");

/**
https://adventofcode.com/2024/day/4
 
--- Day 4: Ceres Search ---
"Looks like the Chief's not here. Next!" One of The Historians pulls out a device 
and pushes the only button on it. After a brief flash, you recognize the interior 
of the Ceres monitoring station!

As the search for the Chief continues, a small Elf who lives on the station tugs
 on your shirt; she'd like to know if you could help her with her word search 
 (your puzzle input). She only has to find one word: XMAS.

This word search allows words to be horizontal, vertical, diagonal, written backwards, 
or even overlapping other words. It's a little unusual, though, as you don't merely 
need to find one instance of XMAS - you need to find all of them. Here are a few 
ways XMAS might appear, where irrelevant characters have been replaced with .:


..X...
.SAMX.
.A..A.
XMAS.S
.X....

The actual word search will be full of letters instead. For example:

MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX

In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:

....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX
Take a look at the little Elf's word search. How many times does XMAS appear?
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
