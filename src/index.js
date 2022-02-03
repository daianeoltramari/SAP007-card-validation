import validator from "./validator.js";

const button = document.getElementById("button");
const input = document.getElementById("cardNumber");
const alert = document.getElementById("alert");
const _validator = validator;

class Main { // O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  
  constructor() { 
    this.cardNumberAux = []; //this assume o objeto global

    button.onclick = function () {
      this.validate();
    }.bind(this);  //O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido
    
    input.onkeydown = function (event) {
      if(event.keyCode === "Backspace"){
        this.cardNumberAux.pop();
        return;
      }
      this.masker(event);
    }.bind(this);
  }
  validate() {
    //let card = input.value;
    let result = _validator.isValid(this.cardNumberAux);
    
    if(result){
      this.alert("Cartão valido");
    }else{
      this.alert("Cartão invalido");
    }
  }
  masker(event) {
    console.log(event);
    if(this.cardNumberAux.length == Number ){
      return;
    }
    this.cardNumberAux.push(event.key);    
    let mask = _validator.maskify(input.value);
    input.value = mask;
  }
  alert(text){
    alert.style.visibility = 'visible'; // deixar visivel o resultado
    alert.innerHTML = text;
  }
  isNumber(value) { //Tratando o campo para aceitar apenas numeros 
    var regex = /[^0-9.]/;
    regex.lastIndex = 0;
    if (regex.test(value)) {
      return false;
    }
    return true;
  }
}

new Main();