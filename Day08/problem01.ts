import { input } from "./input";

const rows = input.split("\n");

/**
 * https://adventofcode.com/2024/day/8
 */

let nodeLocations: Record<string, [number, number][]> = {};
const antinodes = new Set<string>();

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

for (const freq in nodeLocations) {
  const antennas = nodeLocations[freq];

  for (let i = 0; i < antennas.length; i++) {
    for (let j = i + 1; j < antennas.length; j++) {
      const [x1, y1] = antennas[i];
      const [x2, y2] = antennas[j];

      const diffX = x2 - x1;
      const diffY = y2 - y1;

      const antennaBefore = [x1 - diffX, y1 - diffY];
      const antennaAfter = [x2 + diffX, y2 + diffY];

      if (isInGrid(antennaBefore)) {
        antinodes.add(antennaBefore.join(","));
      }

      if (isInGrid(antennaAfter)) {
        antinodes.add(antennaAfter.join(","));
      }
    }
  }
}

console.log(antinodes.size);
