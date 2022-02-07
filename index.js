import validator from "./validator.js";

const button = document.getElementById("button");
const input = document.getElementById("cardNumber");
const alert = document.getElementById("alert");

class Main { // O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  
  constructor() { 
    this.cardNumberAux = []; //this assume o objeto global

    button.onclick = function () {
      this.validate();
    }.bind(this);  //O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido
    
    input.onkeydown = function (event) { // tratando evento espaço (O evento keydown é disparado quando uma tecla é pressionada.)
      if(event.keyCode === "Backspace"){
        this.cardNumberAux.pop(); //método pop remove o último elemento de um array
        return;
      }
      this.masker(event);
    }.bind(this);
  }
  validate() {
    let result = validator.isValid(this.cardNumberAux);
    
    if(result){
      this.alert("Cartão valido");
      alert.style.color = "green"
    }else{
      this.alert("Cartão invalido");
      alert.style.color = "red"
    }
  }
  masker(event) {
    if(this.cardNumberAux.length == Number ){
      return;
    }
    this.cardNumberAux.push(event.key);    
    let mask = validator.maskify(input.value);
    input.value = mask;
  }
  alert(text){
    alert.style.visibility = 'visible'; // deixar visivel o resultado
    alert.innerHTML = text; 
  }
}

new Main();