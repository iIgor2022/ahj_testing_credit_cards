import { createBadge } from "./badges";

// export default class GameGrid {
//   constructor(boardsize) {
//     this.missedClick = 0;
//     this.timer = 0;
//     document.querySelector("body").insertAdjacentElement("afterbegin", createBadge());
//     this.createGrid(boardsize);
//   }

//   createGrid(boardsize) {
//     const container = document.querySelector(".container");
//     for (let index = 0; index < Math.pow(boardsize, 2); index++) {
//       const hole = document.createElement("div");
//       hole.classList.add("hole");
//       container.appendChild(hole);
//     }
//   }
// }

export default class DOMManipulation {
  constructor() {
    document.querySelector("body").insertAdjacentElement("afterbegin", createBadge());
  }
}
