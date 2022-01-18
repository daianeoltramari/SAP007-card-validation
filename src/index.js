import validator from './validator.js';

console.log(validator);

var userNumInput = document.getElementById("card");

function getUserInput(){
   return userNumInput.value;  
}


function luhnCheck(){
  var ccNum = getUserInput(), ccNumSplit = ccNum.split(""), sum = 0;
  var singleNums = [], doubleNums = [], finalArry = undefined;
  var validCard = false;
  
  if((!/\d{15,16}(~\W[a-zA-Z])*$/g.test(ccNum)) || (ccNum.length > 16)){
     return false;  
  }

  if(ccNum.length === 15){ 
     for(var i = ccNumSplit.length-1; i>=0; i--){
        if(i % 2 === 0){
           singleNums.push(ccNumSplit[i]);
        }else{
           doubleNums.push((ccNumSplit[i] * 2).toString());
        }
     }
  }else if(ccNum.length === 16){
     for(var i = ccNumSplit.length-1; i>=0; i--){
        if(i % 2 !== 0){
           singleNums.push(ccNumSplit[i]);
        }else{
           doubleNums.push((ccNumSplit[i] * 2).toString());
        }
     }
  }
 //juntando faz um array para uma string e eu os divido novamente
//para que cada número seja um único dígito e converta de volta para array
  
  doubleNums = doubleNums.join("").split("");  
  finalArry = doubleNums.concat(singleNums);
  
  for(var j = 0; j<finalArry.length; j++){
     sum += parseInt(finalArry[j]);
  }
  
  if(sum % 10 === 0){
     validCard = true;
  }
//todas as somas que são divisível por 10 deve ser bom.
//Basta abrir o console para visualizar.
  
  console.log(sum);
  return validCard;
}

function whatCard(){
   
}

document.getElementById("submitBtn").addEventListener("click", function(){
   document.getElementById("resultDiv").innerHTML = luhnCheck();
}, false);