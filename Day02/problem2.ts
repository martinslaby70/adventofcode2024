import { reports } from "./input";

/**
https://adventofcode.com/2024/day/2

--- Part Two ---
The engineers are surprised by the low number of safe reports 
until they realize they forgot to tell you about the Problem Dampener.

The Problem Dampener is a reactor-mounted module that lets the reactor
safety systems tolerate a single bad level in what would otherwise 
be a safe report. It's like the bad level never happened!

Now, the same rules apply as before, except if removing a single level 
from an unsafe report would make it safe, the report instead counts as safe.

More of the above example's reports are now safe:

7 6 4 2 1: Safe without removing any level.
1 2 7 8 9: Unsafe regardless of which level is removed.
9 7 6 2 1: Unsafe regardless of which level is removed.
1 3 2 4 5: Safe by removing the second level, 3.
8 6 4 4 1: Safe by removing the third level, 4.
1 3 6 7 9: Safe without removing any level.

Thanks to the Problem Dampener, 4 reports are actually safe!

Update your analysis by handling situations where the Problem Dampener can remove a single level from unsafe reports. How many reports are now safe?
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
