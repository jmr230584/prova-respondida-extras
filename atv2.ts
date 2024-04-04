/*
Nome 1:
Nome 2:
Nome 3:
Nome 4:
Nome 5:

2 - Escreva um programa que receba três números inteiros 
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/

const teclado = require (`prompt-sync`)();
let maior: number = 0;
let meio: number = 0;
let menor: number = 0;

let n1: number = parseInt(teclado(`Insira o primeiro número: `));
let n2: number = parseInt(teclado(`Insira o segundo número: `));
let n3: number = parseInt(teclado(`Insira o terceiro número: `));

if (n1 > n2 && n1 > n3){
    maior = n1;
    if(n2 > n3){
        meio =  n2;
        menor = n3;
    }
    else if (n3 > n2){
        meio = n3;
        menor = n2;
    }
    else {
        console.log(`Algo deu errado!!!`);
    }
}

else if (n2 > n1 && n2 > n3){
    maior = n2;
    if(n1 > n3){
        meio =  n1;
        menor = n3;
    }
    else if (n3 > n1){
        meio = n3;
        menor = n1;
    }
    else {
        console.log(`Algo deu errado!!!`);
    }
}

else if (n3 > n1 && n3 > n2){
    maior = n3;
    if(n2 > n1){
        meio =  n2;
        menor = n1;
    }
    else if (n1 > n2){
        meio = n1;
        menor = n2;
    }
    else {
        console.log(`Algo deu errado!!`);
    }
}

else{
    console.log(`Algo deu errado!!!`);
}

console.log(`Ordem decrescente ${maior}, ${meio}, ${menor}`);
