import validator from "./validator.js";

const button = document.getElementById("button");
const input = document.getElementById("cardNumber");
const alert = document.getElementById("alert");
const _validator = validator;

class Main {
  
  constructor() {
    this.cardNumberAux = [];

    button.onclick = function () {
      this.validate();
    }.bind(this);
    
    input.onkeydown = function (event) {
      if(event.keyCode === "Backspace"){
        this.cardNumberAux.pop();
        console.log(this.cardNumberAux);
        return;
      }

      this.masker(event);
    }.bind(this);
  }

  validate() {
    //let card = input.value;
    console.log("Card Number not masked", this.cardNumberAux)
    let result = _validator.isValid(this.cardNumberAux);
    
    if(result){
      this.alert("Cartão valido");
    }else{
      this.alert("Cartão invalido");
    }
  }

  masker(event) {
    console.log(event);
    if(this.cardNumberAux.length == 16 && event.keyCode != 32){
      return;
    }
    console.log(this.cardNumberAux);
   
    this.cardNumberAux.push(event.key);    
    let mask = _validator.maskify(input.value);
    input.value = mask;

  }

  alert(text){
    alert.style.visibility = 'visible'; // deixar visivel 
    alert.innerHTML = text;
  }

  isNumber(value) {
    var regex = /[^0-9.]/;
    regex.lastIndex = 0;
    if (regex.test(value)) {
      return false;
    }

    return true;
  }

}
new Main();