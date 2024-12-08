import { input } from "./input";

/**
 * https://adventofcode.com/2024/day/8
 */
const rows = input.split("\n");

let nodeLocations: Record<string, [number, number][]> = {};
const antidotes = new Set<string>();

const isInGrid = (coords: number[]) => {
  const isInRows = coords[0] >= 0 && coords[0] < rows.length;
  const isInCols = coords[1] >= 0 && coords[1] < rows[0].length;

  return isInCols && isInRows;
};

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];

  for (let j = 0; j < row.length; j++) {
    const char = row[j];

    if (char === ".") continue;

    nodeLocations = {
      ...nodeLocations,
      [char]: [...(nodeLocations[char] ?? []), [i, j]],
    };
  }
}

Object.values(nodeLocations).forEach((antennas) => {
  for (let i = 0; i < antennas.length; i++) {
    for (let j = i + 1; j < antennas.length; j++) {
      const [x1, y1] = antennas[i];
      const [x2, y2] = antennas[j];

      const diffX = x2 - x1;
      const diffY = y2 - y1;

      for (let x = x1, y = y1; isInGrid([x, y]); x += diffX, y += diffY) {
        antidotes.add(x + "," + y);
      }

      for (let x = x1, y = y1; isInGrid([x, y]); x -= diffX, y -= diffY) {
        antidotes.add(x + "," + y);
      }
    }
  }
});

console.log(antidotes.size);
