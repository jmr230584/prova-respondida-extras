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
const teclado = require('prompt-sync')();
let selecao: string;
let quantidade: number;
let desconto: number;
let totalDesconto: number;
let valorEtanol: number = 3.20;
let valorGasolina: number = 4.75;


console.log(`++++++++++++++++++++++++++++++++++`);
console.log(`+ Escolha o combustivel          +`);
console.log(`+                                +`);
console.log(`+ DIGITE G - PARA GASOLINA       +`);
console.log(`+ valor R$ ${valorGasolina}                  +`);
console.log(`+                                +`);
console.log(`+ DIGITE E - PARA ETANOL         +`);
console.log(`+ valor R$ ${valorEtanol}                   +`);
console.log(`++++++++++++++++++++++++++++++++++`);

selecao = teclado(`Qual o combustível --> `);
quantidade = teclado(`Quantidade de combustível --> `);

if((selecao === `G`) || (selecao === `g`)){
    if(quantidade <= 20){
        totalDesconto = (quantidade * valorGasolina)-((quantidade * valorGasolina)*0.04); 
        console.log(`O combutível adquirido é Gasolina.`); 
        console.log(`Na quantidade ${quantidade}L`);
        console.log(`Valor Total de R$${quantidade*valorGasolina}`);
        console.log(`Valor com desconto R$${totalDesconto}`);   
    }
    else if (quantidade > 20){
        totalDesconto = (quantidade * valorGasolina)-((quantidade * valorGasolina)*0.06); 
        console.log(`O combutível adquirido é Gasolina.`); 
        console.log(`Na quantidade ${quantidade}L`);
        console.log(`Valor Total de R$${quantidade*valorGasolina}`);
        console.log(`Valor com desconto R$${totalDesconto}`); 
    }
    else{
        console.log(`Algo deu errado!!!`);
    }
}

else if ((selecao === `E`) || (selecao === `e`)){
    if(quantidade <= 20){
        totalDesconto = (quantidade * valorEtanol)-((quantidade * valorEtanol)*0.03); 
        console.log(`O combutível adquirido é Etanol.`); 
        console.log(`Na quantidade ${quantidade}L`);
        console.log(`Valor Total de R$${quantidade*valorEtanol}`);
        console.log(`Valor com desconto R$${totalDesconto}`);   
    }
    else if (quantidade > 20){
        totalDesconto = (quantidade * valorEtanol)-((quantidade * valorEtanol)*0.05); 
        console.log(`O combutível adquirido é Etanol.`); 
        console.log(`Na quantidade ${quantidade}L`);
        console.log(`Valor Total de R$${quantidade*valorEtanol}`);
        console.log(`Valor com desconto R$${totalDesconto}`); 
    }
    else{
        console.log(`Algo deu errado`);
    }
}
else{
    console.log(`Algo deu errado`);
}
