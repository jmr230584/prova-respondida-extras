/*
Nome 1:
Nome 2:
Nome 3:
Nome 4:
Nome 5:

5 -O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. 
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura 
(em metros). A tabela a seguir apresenta as faixas deste índice: 
 __________________________________________
|====== IMC ======= |===== Avaliação ===== |
| Menor que 18,5    | Baixo peso           |
| De 18,5 a 24,99   | Normal               |
| De 25 a 29,99     | Sobrepeso            |
| Maior que 30      | Obesidade            |
|___________________|______________________|

(25 pontos)
*/

console.clear();
const teclado = require('prompt-sync')();

let peso: number = teclado(`Digite o peso: `);
let altura: number = teclado(`Digite a altura: `);

let imc : number = peso /(altura*altura);

if (imc < 18.5){
    console.log(`Baixo peso!!!`);
}

else if ((imc >= 18.5) && (imc <= 24.999)){
    console.log(`Normal!!!`);
}
// imc = 24.9999
else if((imc > 24.999) && (imc <= 29.999)){
    console.log(`Sobrepeso!!!`);
}

else if(imc > 29.999){
    console.log(`Obeso!!!`);
}

else{
    console.log(`Algo deu errado!!!`);
}
