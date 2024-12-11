import { input } from "./input";

const stones = input.split(" ").map(Number);

const NUM_OF_BLINKS = 75;
const isEven = (n: number) => n === 0 || !!(n && !(n % 2));

type CountArgs = (stone: number, turn: number) => number;

const memoize = (fn: CountArgs): CountArgs => {
  const cache = {};

  return (...args) => {
    const key = args.join("\n");
    return cache[key] ?? (cache[key] = fn(...args));
  };
};

const count = memoize((stone, turn) => {
  if (turn === 0) return 1;
  if (stone === 0) return count(1, turn - 1);

  const digits = stone.toString().split("");

  if (isEven(digits.length)) {
    const exp = 10 ** (digits.length / 2);
    return (
      count(Math.floor(stone / exp), turn - 1) + count(stone % exp, turn - 1)
    );
  }
  return count(stone * 2024, turn - 1);
});

const result = stones.reduce(
  (total, current) => total + count(current, NUM_OF_BLINKS),
  0
);

console.log(result);
