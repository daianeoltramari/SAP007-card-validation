import validator from "./validator.js";

const button = document.getElementById("button");
const input = document.getElementById("cardNumber");
const _validator = validator;

class Main {
  constructor() {
    button.onclick = function () {
      this.validate();
    }.bind(this);

    input.onkeyup = function () {
      this.masker();
    }.bind(this);
  }

  validate() {
    let card = input.value;
    const validator = _validator.isValid(card);
    if (validator == true) {
    } else validator == false;
  }

  masker() {
    let cardNumber = input.value;
    const mask = _validator.maskify(cardNumber);
    input.value = mask;
  }
}

new Main();
