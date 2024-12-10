import { input } from "./input";

const grid = input.split(`\n`).map((x) => x.split("").map(Number));

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < grid.length; ++i) {
  for (let j = 0; j < grid[0].length; ++j) {
    if (grid[i][j] === 0) {
      const peaks: [number, number][] = [];
      checkPaths(i, j, peaks);
      sum1 += [...new Set(peaks.map((x) => x.join(",")))].length;
      sum2 += peaks.length;
    }
  }
}

console.log("Part 1:", sum1);
console.log("Part 2:", sum2);

function checkPaths(i: number, j: number, peaks: [number, number][]) {
  for (let k = 0; k < directions.length; ++k) {
    const next_i = i + directions[k][0];
    const next_j = j + directions[k][1];

    const nextCell = grid?.[next_i]?.[next_j];

    if (nextCell === grid[i][j] + 1) {
      if (nextCell === 9) peaks.push([next_i, next_j]);
      else checkPaths(next_i, next_j, peaks);
    }
  }
}
