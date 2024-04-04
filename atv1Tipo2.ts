/*
15- Faça um programa que peça um número inteiro e 
determine se ele é par ou ímpar.
Nome do Aluno:
E-mail: 
*/
let teclado = require('prompt-sync')();
let dividendo: number = parseInt(teclado (`Digite o número inteiro: `));

let resto: number = dividendo % 2;

if (isNaN(dividendo)){
    console.log(`Digite um número!!`);
}
else if (resto == 0){
    console.log(`O número ${dividendo} é par`);
}
else if(resto != 0){
    console.log(`O número ${dividendo} é impar`);
}
else{
    console.log(`Algo deu errado!!`);
}