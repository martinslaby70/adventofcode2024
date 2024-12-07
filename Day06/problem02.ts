import { input } from "./input";

/**
 * https://adventofcode.com/2024/day/6
 */

const maze = input.split("\n");
const rowsLength = maze.length;
const colLength = maze[0].length;

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let startRow = 0;
let startCol = 0;
let startDir = 0;

for (let row = 0; row < rowsLength; row++) {
  for (let column = 0; column < colLength; column++) {
    if ("^>v<".includes(maze[row][column])) {
      startRow = row;
      startCol = column;
      startDir = "^>v<".indexOf(maze[row][column]);
      break;
    }
  }
}

const simulateWithObstacle = (obstacleRow: number, obstacleCol: number) => {
  let guardRow = startRow;
  let guardCol = startCol;
  let guardDir = startDir;

  const checked = new Set();

  checked.add(`${guardRow},${guardCol},${guardDir}`);

  while (true) {
    const newDirection = directions[guardDir];
    const nextRow = guardRow + newDirection[0];
    const nextCol = guardCol + newDirection[1];

    if (
      nextRow < 0 ||
      nextRow >= rowsLength ||
      nextCol < 0 ||
      nextCol >= colLength
    ) {
      return false;
    }

    const nextStep =
      nextRow === obstacleRow && nextCol === obstacleCol
        ? "#"
        : maze[nextRow][nextCol];

    if (nextStep === "#") {
      guardDir = (guardDir + 1) % 4;
    } else {
      guardRow = nextRow;
      guardCol = nextCol;
    }

    const params = `${guardRow},${guardCol},${guardDir}`;
    if (checked.has(params)) {
      return true;
    } else {
      checked.add(params);
    }
  }
};

let result = 0;

for (let row = 0; row < rowsLength; row++) {
  for (let column = 0; column < colLength; column++) {
    if (maze[row][column] === "#" || (row === startRow && column === startCol))
      continue;

    if (simulateWithObstacle(row, column)) result++;
  }
}

console.log(result);
