import { input } from "./input";

let initialStones = input.split(" ").map(BigInt);
const isEven = (n: number) => n === 0 || !!(n && !(n % 2));

const NUM_OF_BLINKS = 75;

let stones = new Map<bigint, bigint>();

const blink = () => {
  const newStones = new Map<bigint, bigint>();
  [...stones.entries()].forEach(([stone, count]) =>
    updateStone(stone).forEach((newStone) =>
      newStones.set(newStone, (newStones.get(newStone) ?? 0n) + count)
    )
  );

  stones = newStones;
};

const updateStone = (item: bigint): bigint[] => {
  if (item === 0n) return [1n];

  const digits = item.toString().split("");
  if (isEven(digits.length)) {
    const firstHalf = [...digits].splice(0, digits.length / 2).join("");
    const secondHalf = [...digits].splice(digits.length / 2).join("");

    return [BigInt(firstHalf), BigInt(secondHalf)];
  }

  return [item * 2024n];
};

input
  .split(" ")
  .map(BigInt)
  .forEach((stone) => stones.set(stone, (stones.get(stone) ?? 0n) + 1n));

Array(25).forEach(blink);

console.log([...stones.values()]);
