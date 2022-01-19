import validator from './validator.js';

document.querySelector(".submitBtn").addEventListener("click", document);

console.log(validator);

let userNumInput = document.getElementById("card");

function getUserInput(){
   return userNumInput.value;  
}

document.getElementById("submitBtn").addEventListener("click", function(){
   document.getElementById("resultDiv").innerHTML = luhnCheck();
}, false);
