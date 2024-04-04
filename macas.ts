/*
14 - As maçãs custam R$ 0,30 cada se forem compradas menos do que 
uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva 
um programa que leia o número de maçãs compradas, calcule e escreva 
o valor total da compra.
Nome:
E-mail:
*/

console.clear();
const teclado = require('prompt-sync')();
let v1: number = 0.30;
let v2: number = 0.25;
let quantidade: number = 0;
let total: number = 0;

quantidade = teclado(`Quantidade de maçãs? `);

if (quantidade < 12){
    total = quantidade * 0.3;
    console.log(`Quantidade de maçãs adquiridas ${quantidade} pagando por unidade R$0,30 o valor cobrado é R$${total}`);
}
else if (quantidade >= 12){
    total = quantidade * 0.25;
    console.log(`Quantidade de maçãs adquiridas ${quantidade}, pagando por unidade R$0,25 o valor cobrado é R$${total}`);
}
else{
    console.log(`Algo deu errado`);
}

