import { createBadge } from "./badges";
import { isValid } from "./validating";
import { verifyPaymentSystem } from "./verifying";

export default class DOMManipulation {
  constructor(parentEl) {
    this.parentEl = parentEl;
    document.querySelector("body").insertAdjacentElement("afterbegin", createBadge());
  }

  bindToDOM() {
    const validateBtn = this.parentEl.querySelector(".card-validate-btn");
    validateBtn.addEventListener("click", evt => this.onSubmit(evt));
  }

  onSubmit(evt) {
    evt.preventDefault();
    const inputEl = this.parentEl.querySelector("input");
    if (isValid(inputEl.value)) {
      this.showVerifyingCard(verifyPaymentSystem(inputEl.value))
    } else {
      this.showVerifyingCard("None");
    }
    inputEl.value = "";
  }

  showVerifyingCard(cl) {
    if (cl === "None") {
      const card = this.parentEl.querySelector(".isvalid");
      if (card) {
        card.classList.remove("isvalid");
      }
    } else {
      this.parentEl.querySelector(`.${cl}`).classList.add("isvalid");
    }
  }
}
