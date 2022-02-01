const validator = {
  isValid: function (cardNumber) {// função que recebe como parâmetro o valor do meu input
    if (cardNumber == "" || cardNumber.length < 16) { // Condições: Se o valor do input for vazio ou menor que 16 caracteres, mostrar msg
      console.log("Quantidade de caracteres invalido")
      return false;
    }

    //let cardArr = Array.from(cardNumber).reverse; // Pegou o valor do input e transformou em uma Array que será percorrida ao inverso
    let soma = 0; // variavel que guarda o valor da soma

    // for (let i = 0; (i = cardNumber.length); i++) { //loop que percorre o array invertida
    //   if (i % 2 != 0) {// Se o numero for impar
    //     cardNumber[i] = cardNumber[i] * 2; // Multiplica por 2
    //   }
    //   if (cardNumber[i] > 9) {//Se o numero for maior que 9
    //     cardNumber[i] -= 9; //subtrai por 9
    //     soma += cardNumber[i]; // soma os numeros
    //   }
    // }
    if (soma % 10 == 0) {//Se o numero for divisivel por 10
      return true; //então é verdadeiro
    }
    return false; //Se não, falso
  },

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
