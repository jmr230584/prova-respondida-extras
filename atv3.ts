/*
Nome 1:
Nome 2:
Nome 3:
Nome 4:
Nome 5:

3- Faça um programa que pergunte em que turno você estuda. 
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou 
"Boa Noite!" ou "Valor Inválido!", conforme o caso. (10 pontos)
*/

console.clear();
const teclado = require('prompt-sync')();

console.log(`Em qual turno você estuda?`);
console.log(`M para matutino`);
console.log(`V para vespetino`);
console.log(`N para noturno`);

let resposta : string = teclado(`-->`);

if((resposta == `n`)||(resposta == `N`)){
    console.log(`Aluno, Boa Noite!!`);
}

else if((resposta == `v`)||(resposta == `V`)){
    console.log(`Aluno, Boa Tarde!!`);
}

else if ((resposta == `m`)||(resposta == `M`)){
    console.log(`Aluno, Bom Dia!!`);
}

else{
    console.log(`Algo deu errado!!`);
}