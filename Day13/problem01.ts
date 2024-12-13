import { input } from "./input";

const sessions = input.split(/\n\s*\n/).map((item) => item.split("\n"));

const BUTTON_A_PRESS_MULTIPLIER = 3;
const BUTTON_B_PRESS_MULTIPLIER = 1;

let result = 0;

for (const session of sessions) {
  const [buttonA, buttonB, prize] = session;

  const prizeX = Number(prize.match(/X=(\d*)/)?.[1]);
  const prizeY = Number(prize.match(/Y=(\d*)/)?.[1]);

  const buttonA_additionX = Number(buttonA.match(/X\+(\d*)/)?.[1]);
  const buttonA_additionY = Number(buttonA.match(/Y\+(\d*)/)?.[1]);

  const buttonB_additionX = Number(buttonB.match(/X\+(\d*)/)?.[1]);
  const buttonB_additionY = Number(buttonB.match(/Y\+(\d*)/)?.[1]);

  let buttonA_presses: number[][] = [];
  let buttonB_presses: number[][] = [];

  for (let i = 1; i < 100; i++) {
    buttonA_presses.push([buttonA_additionX * i, buttonA_additionY * i]);
    buttonB_presses.push([buttonB_additionX * i, buttonB_additionY * i]);
  }

  let winCost: number | null = null;

  for (let i = 0; i < buttonA_presses.length; i++) {
    const [x, y] = buttonA_presses[i];

    for (let j = 0; j < buttonB_presses.length; j++) {
      const [x1, y1] = buttonB_presses[j];

      if (x + x1 === prizeX && y + y1 === prizeY) {
        const finalPrice =
          (i + 1) * BUTTON_A_PRESS_MULTIPLIER +
          (j + 1) * BUTTON_B_PRESS_MULTIPLIER;

        if (winCost === null || finalPrice < winCost) winCost = finalPrice;
      }
    }
  }

  if (winCost !== null) result += winCost;
}

console.log(result);
