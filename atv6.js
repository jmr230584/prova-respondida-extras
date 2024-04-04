/*
Nome 1:
Nome 2:
Nome 3:
Nome 4:
Nome 5:

6- Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    Álcool: até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro
    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos,
o tipo de combustível (codificado da seguinte forma: E-etanol, G-gasolina),
calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 5,58 o preço do litro do
etanol é R$ 3,42.

(25 pontos)
*/
console.clear();
var teclado = require('prompt-sync')();
var selecao;
var quantidade;
var desconto;
var totalDesconto;
var valorEtanol = 3.20;
var valorGasolina = 4.75;
console.log("++++++++++++++++++++++++++++++++++");
console.log("+ Escolha o combustivel          +");
console.log("+                                +");
console.log("+ DIGITE G - PARA GASOLINA       +");
console.log("+ valor R$ ".concat(valorGasolina, "                  +"));
console.log("+                                +");
console.log("+ DIGITE E - PARA ETANOL         +");
console.log("+ valor R$ ".concat(valorEtanol, "                   +"));
console.log("++++++++++++++++++++++++++++++++++");
selecao = teclado("Qual o combust\u00EDvel --> ");
quantidade = teclado("Quantidade de combust\u00EDvel --> ");
if ((selecao === "G") || (selecao === "g")) {
    if (quantidade <= 20) {
        totalDesconto = (quantidade * valorGasolina) - ((quantidade * valorGasolina) * 0.04);
        console.log("O combut\u00EDvel adquirido \u00E9 Gasolina.");
        console.log("Na quantidade ".concat(quantidade, "L"));
        console.log("Valor Total de R$".concat(quantidade * valorGasolina));
        console.log("Valor com desconto R$".concat(totalDesconto));
    }
    else if (quantidade > 20) {
        totalDesconto = (quantidade * valorGasolina) - ((quantidade * valorGasolina) * 0.06);
        console.log("O combut\u00EDvel adquirido \u00E9 Gasolina.");
        console.log("Na quantidade ".concat(quantidade, "L"));
        console.log("Valor Total de R$".concat(quantidade * valorGasolina));
        console.log("Valor com desconto R$".concat(totalDesconto));
    }
    else {
        console.log("Algo deu errado!!!");
    }
}
else if ((selecao === "E") || (selecao === "e")) {
    if (quantidade <= 20) {
        totalDesconto = (quantidade * valorEtanol) - ((quantidade * valorEtanol) * 0.03);
        console.log("O combut\u00EDvel adquirido \u00E9 Etanol.");
        console.log("Na quantidade ".concat(quantidade, "L"));
        console.log("Valor Total de R$".concat(quantidade * valorEtanol));
        console.log("Valor com desconto R$".concat(totalDesconto));
    }
    else if (quantidade > 20) {
        totalDesconto = (quantidade * valorEtanol) - ((quantidade * valorEtanol) * 0.05);
        console.log("O combut\u00EDvel adquirido \u00E9 Etanol.");
        console.log("Na quantidade ".concat(quantidade, "L"));
        console.log("Valor Total de R$".concat(quantidade * valorEtanol));
        console.log("Valor com desconto R$".concat(totalDesconto));
    }
    else {
        console.log("Algo deu errado");
    }
}
else {
    console.log("Algo deu errado");
}
