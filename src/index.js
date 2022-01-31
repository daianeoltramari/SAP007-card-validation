import validator from "./validator.js";

const button = document.getElementById("button");
const input = document.getElementById("cardNumber");
const alert = document.getElementById("alert");
const _validator = validator;
class Main {
  constructor() {
    button.onclick = function () {
      alert.style.visibility = 'visible'; // deixar visivel 
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
  alert(){
    alert.style.visibility = true;
    
  }
}
new Main();