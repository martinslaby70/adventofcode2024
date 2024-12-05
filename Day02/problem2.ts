import { reports } from "./input";

/**
 * https://adventofcode.com/2024/day/2
 */
const hasInvalidDiff = (reportData: number[]) =>
  reportData.some((item, index, data) => {
    // Stop checking once we reach the last element
    if (index === reportData.length - 1) {
      return false;
    }

    const diff = item - data[index + 1];
    return diff > 3 || diff < 1;
  });

const isReportValid = (report: number[]) => {
  // mutate input array to get same decreasing sort
  if (report[0] < report[report.length - 1]) {
    report.reverse();
  }

  if (!hasInvalidDiff(report)) return true;

  // is the sequence is invalid, try removing each element and check for changes
  for (let i = 0; i < report.length; i++) {
    const adjustedReport = [...report.slice(0, i), ...report.slice(i + 1)];

    if (!hasInvalidDiff(adjustedReport)) return true;
  }

  return false;
};

const safeReportsCount = reports
  .map((line) => line.split(" ").map(Number))
  .filter(isReportValid).length;

// number of safe reports
console.log(safeReportsCount);
