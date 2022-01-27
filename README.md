# Cartão de Crédito Válido

## Índice

- [1. Introdução](#1-Introdução)
- [2. Resumo do projeto](#2-resumo-do-projeto)

---

## 1. Introdução

Neste projeto é usado o [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), que é um método de soma de verificação, 
usado para validar números de identificação, como o IMEI de telefones celulares, cartões de crédito etc.

## O dígito de verificação é computado da seguinte forma:

Se o número já contiver o dígito de verificação, solte esse dígito para formar a "carga". O dígito de verificação é na maioria das vezes o último dígito.
Com a carga, comece a partir do dígito mais certo. Movendo-se para a esquerda, o dobro do valor de cada segundo dígito (incluindo o dígito mais à direita).
Soma os dígitos do valor resultante em cada posição.
Soma os valores resultantes de todas as posições, {\displaystyle s}s.
O dígito de verificação é calculado por {\displaystyle ((10-s\operatorname {mod} 10)\nome do operador {mod} 10)}{\displaystyle ((10-s\operatorname {mod} 10)\nome do operador {mod} 10)}

---

## 2. Resumo do projeto

Neste projeto, você consegue validar o número de um cartão de crédito. 
Além disso, você terá seus dados protegidos pela funcionalidade de ocultação
dos dígitos do cartão, exceto os quatro últimos.

---

## ✔️ Tela

![Tela do projeto](tela_card.png)

---

## :robot: Tecnologias Utilizadas

- HTML 5
- CSS3
- JavaScript
- Node.js

