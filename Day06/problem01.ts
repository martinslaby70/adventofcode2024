import { input } from "./input";

/**
 * https://adventofcode.com/2024/day/6
 */

const maze = input.split("\n").map((rows) => rows.split(""));

let result = 1;
let position: [number, number] = [0, 0];
let direction = "";
let defaultDirection = "";

maze.find((row, rowIndex) =>
  row.find((char, charIndex) => {
    if (char === "." || char === "#") return false;

    position = [rowIndex, charIndex];
    direction = char;
    defaultDirection = char;
  })
);

while (true) {
  const nextRow = "v^".includes(direction)
    ? position[0] + (direction === "^" ? -1 : 1)
    : position[0];

  const nextChar = "><".includes(direction)
    ? position[1] + (direction === "<" ? -1 : 1)
    : position[1];

  const nextStep = maze[nextRow]?.[nextChar];

  if (nextStep === undefined) break;

  if (nextStep === ".") {
    result++;
    position = [nextRow, nextChar];
    maze[nextRow][nextChar] = "X";
  }

  console.log(nextRow, nextChar, nextStep);

  if (nextStep === "X" || nextStep === defaultDirection) {
    position = [nextRow, nextChar];
  }

  if (nextStep === "#") {
    switch (direction) {
      case ">":
        direction = "v";
        break;
      case "v":
        direction = "<";
        break;
      case "<":
        direction = "^";
        break;
      case "^":
        direction = ">";
        break;
      default:
        break;
    }
  }
}

console.log(result);
