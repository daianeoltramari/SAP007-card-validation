const validator = {
  isValid: function (cardNumber) {
    let cardValidate = "";
    let cardArr = Array.from(cardNumber).reverse;

    for (let i = 0; (i = cardArr.length); i++) {
      if (i % 2 != 0) {
        cardArr[i] = cardArr[i] * 2;
      }

      if (cardArr[i] > 9) {
        let rest = cardArr[i] % 10;
        let aprox = Math.trunc(cardArr[i] / 10);
        let sum = rest + aprox;
        cardArr[i] = sum;
      }
    }

    let total = cardArr.reduce(
      (total, currentElement) => total + currentElement
    );

    if (total % 10 == 0) {
      cardValidate = true;
    } else {
      cardValidate = false;
    }

    return true;
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
