const validator = {

   isValid: function (cardNumber) {
     // estou dando condições: caso o input estiver vazio, null ou for menor que 16 irá mostrar a msg
     if (cardNumber == "" || cardNumber == null || cardNumber.length < 16) { 
       alert("Informação está incorreta");
     }
 
     let cardValidate = "";
     let cardArr = Array.from(cardNumber).reverse;
 
     for (let i = cardArr.length -1; i >= 0; i--){
       if (i % 2 !== 0) {
        singleNums.push(cardArr[i]);
      }else{
         doubleNums.push((cardArr[i] * 2).toString());
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
    }},
 

  

    
   maskify: function (cardNumber) {
     let digitMask = Array.from(cardNumber);
 
     for (let i = 0; i < digitMask.length - 4; i++) {
       digitMask[i] = "#";
     }
     let join = digitMask.join("");
 
     return join;
   },
 };
 
 export default validator;
