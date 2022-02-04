const validator = {
  isValid: function (cardNumber) {// função que recebe como parâmetro o valor do meu input

    if (cardNumber == "") {// Condições: Se o valor do input for vazio, mostrar msg para o usúario
      alert("Valor inválido"); // alert para o usúario
      return false;
    }

    let soma = 0; // variavel que irá guarda o valor da soma
    
    for (let i = 0; i < cardNumber.length; i++) {// for (let variavel = 0; enquanto a variavel for menor que o tamanho do array, incrementa)
      let tmp = parseInt(cardNumber[i]); //Variavel que irá guarda os valores do meu loop (parseInt: transforma minha string em number)
      if ((i + 2) % 2 === 0) // Se o índice for par, dobre o valor.
        if ((tmp *= 2) > 9) // se o numero for divisivel por 2 e menor que 9, soma
          tmp -= 9; //caso não seja subtrai por 9

      soma += tmp; // somando os numeros
    }
    if (soma % 10 === 0) {//Se o numero for divisivel por 10
      return true; //então é verdadeiro
    }
    return false; //Se não, falso
  },

  // cardType: function(cardNumber){ //retorna tipo de cartão
  //   cardNumber = cardNumber.split(' ').join("");
  //   let o = {
  //     maestro: /^(5818|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390|)\d+$/,
  //     Visa: /^4[0-9]{12}(?:[0-9]{3})/,
  //     Mastercard: /^5[1-5][0-9]{14}/,
  //     Amex: /^3[47][0-9]{13}/,
  //     DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
  //     Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
  //     JCB: /^(?:2131|1800|35\d{3})\d{11}/
  //   }
  //   for(let k in o){
  //     if(o[k].test(cardNumber)){
  //       return k;
  //     }
  //   }
  //   return null;
  // },

  maskify: function (cardNumber) {
    let digitMask = Array.from(cardNumber);
    for (let i = 0; i < digitMask.length - 4; i++) {
      digitMask[i] = "#";
    }
    let join = digitMask.join(""); // join junta tudo na string
    return join;
  },
};
export default validator;
