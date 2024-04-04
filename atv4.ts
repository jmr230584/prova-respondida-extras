/*
Nome 1:
Nome 2:
Nome 3:
Nome 4:
Nome 5:

4 - Escreva um programa que leia as medidas dos lados de um triângulo e 
escreva se ele é Equilátero, isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.

(10 pontos)
*/

const teclado = require('prompt-sync')();

let ladoUm  : number = teclado("Digite o lado 1: ");
let ladoDois: number = teclado("Digite o lado 2: ");
let ladoTres: number = teclado("Digite o lado 3: ");

if ((ladoUm == ladoDois) && (ladoUm == ladoTres)) {
    console.log(`É um triângulo equilátero!!`);
}

else if ((ladoUm != ladoDois) && (ladoUm != ladoTres) && (ladoDois != ladoTres)){
    console.log(`É um triângulo escaleno`);
}

else if ((ladoUm == ladoDois) || (ladoUm == ladoTres) || (ladoDois == ladoDois){
    console.log(`É um triângulo isócele`);
}

else{
    console.log(`Algo deu errado!!`);
}
