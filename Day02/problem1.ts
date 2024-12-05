import { reports } from "./input";

/**
 * https://adventofcode.com/2024/day/2
 */
const isReportValid = (reportData: number[]) => {
  // mutate input array to get same decreasing sort
  if (reportData[0] < reportData[1]) {
    reportData.reverse();
  }

  const hasInvalidDiff = reportData.some((item, index, data) => {
    // Stop checking once we reach the last element
    if (index === reportData.length - 1) {
      return false;
    }

    const diff = item - data[index + 1];
    return diff > 3 || diff < 1;
  });

  return !hasInvalidDiff;
};

const safeReportsCount = reports
  .map((line) => line.split(" ").map(Number))
  .filter(isReportValid).length;

// number of safe reports
console.log(safeReportsCount);
