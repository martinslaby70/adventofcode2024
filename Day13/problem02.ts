import { input } from "./input";

let total = 0n;

const sessions = input.split(/\n\s*\n/).map((item) => item.split("\n"));

for (const session of sessions) {
  const [buttonA, buttonB, prize] = session;

  const prizeX = BigInt(prize.match(/X=(\d*)/)?.[1]!) + 10000000000000n;
  const prizeY = BigInt(prize.match(/Y=(\d*)/)?.[1]!) + 10000000000000n;

  const buttonA_additionX = BigInt(buttonA.match(/X\+(\d*)/)?.[1]!);
  const buttonA_additionY = BigInt(buttonA.match(/Y\+(\d*)/)?.[1]!);

  const buttonB_additionX = BigInt(buttonB.match(/X\+(\d*)/)?.[1]!);
  const buttonB_additionY = BigInt(buttonB.match(/Y\+(\d*)/)?.[1]!);

  const divisor =
    buttonA_additionX * buttonB_additionY -
    buttonA_additionY * buttonB_additionX;
  const divisor_a = buttonB_additionY * prizeX - buttonB_additionX * prizeY;
  const divisor_b = buttonA_additionX * prizeY - buttonA_additionY * prizeX;

  if (
    divisor !== 0n &&
    divisor_a % divisor === 0n &&
    divisor_b % divisor === 0n
  )
    total += 3n * (divisor_a / divisor) + divisor_b / divisor;
}

console.log(total);
