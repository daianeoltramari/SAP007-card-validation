const validator = {

   isValid: function (cardNumber) {
     console.log("value card "+ cardNumber);
     if (cardNumber == "" || cardNumber == null || cardNumber.length < 16) { // estou dando condições: caso o unput estiver vazio, null ou
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
