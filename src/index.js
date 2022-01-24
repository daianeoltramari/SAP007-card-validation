import validator from './validator.js';

const button = document.getElementById("button");

 function validate (){
    let card = document.getElementById("cardNumber").value;
    const validator = validator.isValid(card);
     if (validator == true){

     }
     else (validator == false)
    
 }
  function masker (){
     let cardNumber = document.getElementById("cardNumber").value;
     const mask = validator.maskify(cardNumber);
      document.getElementById("cardNumber").value = mask;
  }
  
console.log(validator);
