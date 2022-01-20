export default validator;

const validator = {
   isValid = ("creditCardNumber")

}

var userNumInput = document.getElementById("creditCardNumber");

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

  if(ccNum.length === 15){  //american express 
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
  //joining makes an array to a string and I split them up again
  //so that every number is a single digit and convert back to array
  
  doubleNums = doubleNums.join("").split("");  
  finalArry = doubleNums.concat(singleNums);
  
  for(var j = 0; j<finalArry.length; j++){
     sum += parseInt(finalArry[j]);
  }
  
  if(sum % 10 === 0){
     validCard = true;
  }
  //the console log is for you, so you can see the sum, all sums that are
  //divisible by 10 should be good.  Just open up your console to view.
  
  console.log(sum);
  return validCard;
}

function whatCard(){
   
}














function maskify(creditCardNumber) {
	if (creditCardNumber.length < 6) return creditCardNumber;
	const last4Characters = creditCardNumber.substr(-4);
	const firstCharacter = creditCardNumber.substr(0, 1);
	const maskingCharacters = creditCardNumber.substr(1, creditCardNumber.length - 5).replace(/\d/g, '#');
	return `${firstCharacter}${maskingCharacters}${last4Characters}`;
}