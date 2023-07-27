import { createBadge } from "./badges";

export default class GameGrid {
  constructor(boardsize) {
    this.missedClick = 0;
    this.timer = 0;
    document.querySelector("body").insertAdjacentElement("afterbegin", createBadge());
    this.createGrid(boardsize);
  }

  createGrid(boardsize) {
    const container = document.querySelector(".container");
    for (let index = 0; index < Math.pow(boardsize, 2); index++) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      container.appendChild(hole);
    }
  }
}

isValid(cardNumber) {
  let checksumm = 0;
  const cardNumber = cardNumber.split("").map(Number);

  for (const [index, number] of cardNumber.entries()) {
    if (index % 2 === 0) {
      let buffer = number * 2;
      buffer > 9 ? checksumm += buffer - 9 : checksumm += buffer;
    } else {
      checksumm += number;
    }
  }
  return checksumm % 10 === 0? true : false;
}