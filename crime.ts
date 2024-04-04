/* 
8 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime.
As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação 
da pessoa no crime. Se a pessoa responder positivamente a 2 questões
ela deve ser classificada como "Suspeita", entre 3 e 4 como 
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado 
como "Inocente".
Nome do Aluno:
E-mail:
*/

console.clear();
const teclado = require('prompt-sync')();
let positivo: number = 0; // determina se é criminoso 

console.log(`++++++++++++++++++++++++++++++++++`);
console.log(`+ Para as perguntas abaixo,      +`);
console.log(`+ seguir a seguinte orientação:  +`);
console.log(`+ DIGITE S - PARA SIM            +`);
console.log(`+ DIGITE N - PARA NÃO            +`);
console.log(`++++++++++++++++++++++++++++++++++`);

let avaliando:string =  teclado(`Telefonou para a vítima? `);
if ((avaliando === `S`)||(avaliando === `s`)){
    positivo++;
  }

avaliando = teclado(`Esteve no local do crime? `);
if ((avaliando === `S`)||(avaliando === `s`)){
    positivo++;
}

avaliando = teclado(`Mora perto da vítima? `);
if ((avaliando === `S`)||(avaliando === `s`)){
    positivo++;
}

avaliando = teclado(`Devia para a vítima? `);
if ((avaliando === `S`)||(avaliando === `s`)){
    positivo++;
}

avaliando = teclado(`Já trabalhou com a vítima? `);
if ((avaliando === `S`)||(avaliando === `s`)){
    positivo++;
}

console.log(`Digite Enter para cont..`)
teclado();
console.clear();

if (positivo === 2){
    console.log(`Ele(a) é supeito`);
}
else if((positivo === 3) ||(positivo === 4) ) {
    console.log(`Ele(a) é cúmplice`);
}
else if (positivo === 5){
    console.log(`Ele(a) é o assassino`);
}
else{
    console.log(`Ele(a) é inocente`);
}
