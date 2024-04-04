/*
15- Faça um programa que peça um número inteiro e
determine se ele é par ou ímpar.
Nome do Aluno:
E-mail:
*/
var teclado = require('prompt-sync')();
var dividendo = parseInt(teclado("Digite o n\u00FAmero inteiro: "));
var resto = dividendo % 2;
if (isNaN(dividendo)) {
    console.log("Digite um n\u00FAmero!!");
}
else if (resto == 0) {
    console.log("O n\u00FAmero ".concat(dividendo, " \u00E9 par"));
}
else if (resto != 0) {
    console.log("O n\u00FAmero ".concat(dividendo, " \u00E9 impar"));
}
else {
    console.log("Algo deu errado!!");
}
