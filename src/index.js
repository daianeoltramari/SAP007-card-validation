import validator from './validator.js';

console.log(validator);

document.getElementById("submitBtn").addEventListener("click", function(){
    document.getElementById("resultDiv").innerHTML = luhnCheck();
 }, false);