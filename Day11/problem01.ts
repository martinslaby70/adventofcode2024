import { input } from "./input";

let stones = input.split(" ").map(Number);
const isEven = (n: number) => n === 0 || !!(n && !(n % 2));

const NUM_OF_BLINKS = 25;

for (let i = 0; i < NUM_OF_BLINKS; i++) {
  stones = stones.flatMap((item) => {
    if (item === 0) return 1;

    const digits = item.toString().split("");
    if (isEven(digits.length)) {
      const firstHalf = [...digits].splice(0, digits.length / 2).join("");
      const secondHalf = [...digits].splice(digits.length / 2).join("");

      return [Number(firstHalf), Number(secondHalf)];
    }

    return item * 2024;
  });
}

console.log(stones.length);
